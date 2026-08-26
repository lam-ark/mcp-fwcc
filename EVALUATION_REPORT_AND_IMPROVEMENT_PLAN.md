# 📊 Báo Cáo Đánh Giá & Kế Hoạch Nâng Cấp Hệ Thống MCP Docs, Search Engine & Graph Node

---

## 🎯 1. Tổng Quan So Sánh (Executive Summary)

Dự án hiện có 2 MCP server phục vụ tra cứu tài liệu và kiến trúc framework Cocos Slot:
1. **`mcp-fwcc-knowledge` (Local Plugin / Custom Engine)**:
   * Chạy trực tiếp qua local Node.js process trong thư mục `mcp/mcp-fwcc`.
   * Sử dụng engine tìm kiếm **MiniSearch** kết hợp Tokenizer nhận diện mã nguồn (`codeTokenizer`), phân tích AST/Markdown chia nhỏ tài liệu theo từng method/property/overview/gotchas (hơn **17.283 chunks** từ **6.399 files**).
   * Tích hợp **GraphEngine** xây dựng Topology quan hệ giữa các Module/Component, hệ thống Bus Event (Emitters/Listeners) và kho Gotchas/Defects.
2. **`mcp-fw-cc` (Remote Hybrid Server)**:
   * Dịch vụ MCP từ xa kết hợp Hybrid search (Lexical + Vector embeddings) trên các file tài liệu tổng hợp (`docs-internal`).

---

## ⚖️ 2. Bảng Đánh Giá Chi Tiết & So Sánh (Benchmark Matrix)

| Tiêu chí | `mcp-fwcc-knowledge` (Local Plugin) | `mcp-fw-cc` (Remote Service) | Đánh giá & Nhận xét |
| :--- | :--- | :--- | :--- |
| **Tốc độ phản hồi (Latency)** | ⚡ **15ms - 40ms** (In-memory, Zero network latency) | ⏳ **800ms - 2500ms** (Phụ thuộc kết nối server từ xa) | `mcp-fwcc-knowledge` vượt trội về độ nhạy, phản hồi tức thì. |
| **Độ chi tiết tài liệu (Granularity)** | 🔍 **Cấp độ Method/Atom** (Tách riêng `init.md`, `disableHighlight.md`, `overview.md`, `recipes.md`) | 📄 **Cấp độ File/Doc lớn** (1 file chứa toàn bộ class 300-500 dòng) | Local plugin cung cấp đúng chính xác đoạn code cần tra cứu, không gây tràn context window. |
| **Search Engine (Độ chính xác)** | 🎯 **Code-Aware Multi-Field Boost** (`codeSymbols: 4.0`, `methods: 3.5`, `topic: 3.0`, `tags: 2.5`) | 🌐 **Hybrid BM25 + Embeddings** | Cả hai đều tìm trúng từ khóa kỹ thuật. Local plugin trích xuất snippet thông minh sát ngữ cảnh hơn. |
| **Knowledge Graph & Topology** | 🕸️ **Semantic Relationships** (`inherits`, `dependsOn`, `manages`, `usedBy`, `backlinks`, `emitsEvents`, `listensToEvents`) | 🔗 **Wikilink Graph** (`[[link]]`, hỗ trợ duyệt đa tầng `depth: 1-3`) | Local plugin có schema quan hệ phong phú (Gotchas, Event Bus Map), Remote có duyệt sâu multi-hop tốt. |
| **Công cụ chuyên biệt (Domain Tools)** | 🛠️ **15 Tools**: `fwcc_get_class_api`, `fwcc_get_gotchas`, `fwcc_get_events_map`, `fwcc_get_game_profile`, `fwcc_ai_document_bug` | 📦 **General Doc Tools**: `read_doc`, `search_docs`, `graph_neighbors`, `find_backlinks` | Local plugin được tối ưu sâu cho domain Slot Engine & Red Cliff Game 9666. |

---

## 🧪 3. Kết Quả Thử Nghiệm Thực Tế (Empirical Test Cases)

### Test Case 1: Tra cứu logic Dimming Symbol (`SlotSymbolModule disableHighlight colorDim`)
* **`mcp-fwcc-knowledge`**:
  * Trả về chính xác file `SlotSymbolModule/05_methods/disableHighlight.md` với implementation nguyên gốc:
    ```typescript
    disableHighlight(): void {
        const colorDim = this.resourceManager.getColorDim();
        this.changeColor(colorDim);
        this.node["isHighlight"] = false;
    }
    ```
  * Điểm số khớp rất cao ($6249.5$), không cần lọc thêm.
* **`mcp-fw-cc`**:
  * Trả về chunk số 7 của file `docs-internal/08_deep-dive/cc30_SlotSymbolModule_code.md`.
  * Có đầy đủ ngữ cảnh xung quanh, nhưng đòi hỏi phải đọc thêm cả file lớn.

### Test Case 2: Quan hệ đồ thị Node (`Graph Neighbors / Backlinks`)
* **`mcp-fwcc-knowledge` (`fwcc_get_graph_neighbors` & `fwcc_get_backlinks`)**:
  * Nhận diện chính xác `SlotSymbolModule` kế thừa `cc.Component`, phụ thuộc vào `SlotSymbolResourceManager`, được sử dụng bởi `SlotReelModule`, `SlotSymbolManager`, `SlotTablePaylineModule`.
* **`mcp-fw-cc` (`graph_neighbors`)**:
  * Trả về các file liên kết trực tiếp như `PoolFactoryModule`, `SlotReelModule`, `SlotTableModule`, `Events_Catalog`.

---

## 🔍 4. Những Điểm Cần Cải Thiện (Identified Gaps & Weaknesses)

1. **Graph Engine**:
   * Hiện tại `fwcc_get_graph_neighbors` chỉ duyệt $1$-hop (tầng trực tiếp), chưa hỗ trợ tham số `depth: 2` hoặc `depth: 3` như `mcp-fw-cc`.
   * Quan hệ trong `relations.json` mới được tạo thủ công cho các Archetype chính và một số package mechanics, chưa tự động quét toàn bộ thư mục docs để trích xuất quan hệ.
2. **Search Engine Tokenizer & Deduplication**:
   * Khi tìm kiếm, nếu nhiều chunk trong cùng một file có score tương đương, kết quả có thể bị lặp lại nhiều lần cùng 1 file gốc. Cần nhóm (grouping / deduplicate) theo `file`/`topic`.
   * Tìm kiếm chính xác chuỗi có dấu nháy kép (exact phrase search) cần được ưu tiên tuyệt đối điểm số.
3. **Events Map Tool Parameter**:
   * Tool `fwcc_get_events_map` yêu cầu tham số `eventName`, nếu truyền sai key (`eventOrModule`) sẽ trả về kết quả rỗng. Cần làm mềm validation (chấp nhận cả `eventName` hoặc `concept`/`module`).
4. **Game Profiles**:
   * Đã có profile cho `g9666` (Red Cliff), nhưng cần mở rộng cập nhật cấu hình động cho các game clone mới.

---

## 🚀 5. Kế Hoạch Nâng Cấp (Improvement Action Plan)

### 🔹 Giai đoạn 1: Nâng Cấp GraphEngine (Multi-Hop & Auto-Linking)
- [ ] **Mở rộng `fwcc_get_graph_neighbors`**: Hỗ trợ tham số `depth: 1-3` và `direction: 'in' | 'out' | 'both'`.
- [ ] **Auto Relation Extractor**: Bổ sung hàm tự động quét markdown frontmatter (`tags`, `inherits`, `dependsOn`, `emitsEvents`) để tự sinh node đồ thị mà không cần tạo file `relations.json` thủ công.
- [ ] **Event Bus Aliases**: Bổ sung hỗ trợ tra cứu cả theo tên Class phát event và tên Event string.

### 🔹 Giai đoạn 2: Tối Ưu Search Engine & Deduplication
- [ ] **Result Grouping**: Tự động nhóm các chunk thuộc cùng một tài liệu, chỉ hiển thị chunk có score cao nhất kèm danh sách section liên quan.
- [ ] **Exact Phrase Boost**: Tăng điểm x10 cho các kết quả khớp chính xác 100% tên Class, tên Event hoặc tên Method.
- [ ] **Fuzzy Search Threshold Tuning**: Giảm nhiễu cho các truy vấn ngắn 2-3 ký tự.

### 🔹 Giai đoạn 3: Đồng Bộ & Cập Nhật Tri Thức Domain Mới
- [ ] Tích hợp đầy đủ các gói `cc_slot_mechanics` (Hold & Win, Megaways, Sticky Wild, Cascade Pipeline, Gigablox).
- [ ] Bổ sung các test case Gotchas thường gặp khi dev game slot mới.
