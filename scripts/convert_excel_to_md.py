import zipfile
import xml.etree.ElementTree as ET
import sys
import os

sys.stdout.reconfigure(encoding='utf-8')
file_path = 'mcp/mcp-fwcc/docs/Compare Cocos vs Pixijs.xlsx'

with zipfile.ZipFile(file_path, 'r') as z:
    shared_strings = []
    if 'xl/sharedStrings.xml' in z.namelist():
        tree = ET.fromstring(z.read('xl/sharedStrings.xml'))
        for elem in tree.iter():
            if elem.tag.endswith('}t') and elem.text:
                shared_strings.append(elem.text)
    
    tree = ET.fromstring(z.read('xl/worksheets/sheet1.xml'))
    rows = tree.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row')
    
    items = []
    current_category = 'General'
    
    for r in rows:
        row_cells = {}
        for c in r.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
            r_ref = c.attrib.get('r')
            t = c.attrib.get('t')
            v = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
            val = ''
            if v is not None and v.text:
                if t == 's':
                    idx = int(v.text)
                    val = shared_strings[idx] if idx < len(shared_strings) else v.text
                else:
                    val = v.text
            col_letter = ''.join([ch for ch in r_ref if ch.isalpha()])
            row_cells[col_letter] = val.strip()
        
        no_val = row_cells.get('A', '')
        loc_val = row_cells.get('B', '')
        ark_val = row_cells.get('C', '')
        ref_val = row_cells.get('D', '')
        sol_val = row_cells.get('E', '')
        qa_val = row_cells.get('F', '')
        gd_val = row_cells.get('G', '')
        dev_val = row_cells.get('H', '')
        link_title = row_cells.get('J', '')
        link_val = row_cells.get('K', '')
        
        if not any([no_val, loc_val, ark_val, ref_val, sol_val]):
            continue
            
        if no_val in ['#No', '']:
            if not ark_val and not ref_val:
                continue
        
        # Check if it's a major section header
        if no_val and not ark_val and not ref_val and not sol_val:
            current_category = no_val
            continue
            
        # Clean up #No
        try:
            no_num = str(int(float(no_val))) if no_val.replace('.', '', 1).isdigit() else no_val
        except:
            no_num = no_val
            
        # Comments combine
        comments = []
        if qa_val:
            comments.append(f'**QA/Bug**: {qa_val}')
        if gd_val:
            comments.append(f'**GD**: {gd_val}')
        if dev_val:
            comments.append(f'**Dev**: {dev_val}')
        if link_title and link_val:
            comments.append(f'**{link_title}**: {link_val}')
            
        comment_str = '<br>'.join(comments) if comments else '-'
        
        def clean_text(t):
            if not t: return '-'
            lines = [l.strip() for l in t.split('\n') if l.strip()]
            return '<br>'.join(lines).replace('|', '\\|')

        items.append({
            'category': current_category,
            'no': no_num,
            'location': loc_val if loc_val else '-',
            'ark': clean_text(ark_val),
            'ref': clean_text(ref_val),
            'solution': sol_val if sol_val else '-',
            'comments': comment_str.replace('|', '\\|')
        })

print(f'Total parsed items: {len(items)}')

domains = {
    '1. Base Game & Action Panel (Nút bấm, Cược, Tương tác)': [],
    '2. Big Win, Free Game & Mode Transitions': [],
    '3. Lịch sử cược (LSC) & Lịch sử hũ (LSH)': [],
    '4. Popups, Menu Setting, Âm thanh & Mạng': [],
    '5. Matrix, Paylines & Trả thưởng (KTT, Ô Win)': [],
    '6. Chế độ Chơi Thử (Demo) vs Chơi Thật': [],
    '7. Splash, Loading & Khung hình hiển thị': [],
    '8. Các hạng mục khác & Quy chuẩn chung': []
}

for item in items:
    loc = item['location'].lower()
    no = item['no']
    ark = item['ark'].lower()
    ref = item['ref'].lower()
    
    if no in ['13', '14', '15', '50', '51', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70'] or 'free game' in loc or 'big win' in loc or 'total win' in loc or 'f2r' in loc:
        domains['2. Big Win, Free Game & Mode Transitions'].append(item)
    elif no in ['5', '6', '12', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49'] or 'lsc' in loc or 'lsh' in loc or 'lịch sử' in loc or 'page' in loc or 'phiên' in loc:
        domains['3. Lịch sử cược (LSC) & Lịch sử hũ (LSH)'].append(item)
    elif no in ['1', '9', '10', '11', '20', '52', '53', '54', '73'] or 'setting' in loc or 'sound' in loc or 'exit' in loc or 'mạng' in loc or 'connect' in loc or 'resume' in loc:
        domains['4. Popups, Menu Setting, Âm thanh & Mạng'].append(item)
    elif no in ['8', '27', '28', '29', '30', '58', '59', '60'] or 'matrix' in loc or 'payline' in loc or 'ktt' in loc or 'win' in loc or 'ways' in loc:
        domains['5. Matrix, Paylines & Trả thưởng (KTT, Ô Win)'].append(item)
    elif no in ['16', '17', '18', '19'] or 'thử' in loc or 'thật' in loc:
        domains['6. Chế độ Chơi Thử (Demo) vs Chơi Thật'].append(item)
    elif no in ['21', '22', '23', '24', '25', '71', '72'] or 'splash' in loc or 'loading' in loc or 'background' in loc or 'landscape' in loc or 'icon' in loc:
        domains['7. Splash, Loading & Khung hình hiển thị'].append(item)
    elif no in ['2', '3', '4', '7', '31', '55', '56', '57'] or 'ap' in loc or 'spin' in loc or 'bet' in loc or 'auto' in loc:
        domains['1. Base Game & Action Panel (Nút bấm, Cược, Tương tác)'].append(item)
    else:
        domains['8. Các hạng mục khác & Quy chuẩn chung'].append(item)

md_lines = []
md_lines.append('---')
md_lines.append('id: "transfer-ark:business_mapping:cocos_vs_pixijs_refer_discrepancy_matrix"')
md_lines.append('title: "Bảng Đối Chiếu Quy Chuẩn Nghiệp Vụ: Cocos Creator (ARK Studio) vs Pixi.js (Game Refer)"')
md_lines.append('category: "business_mapping"')
md_lines.append('game_ids: ["g9666", "all"]')
md_lines.append('sdk_modules: ["GameModeDirectorModule", "SlotButtonNormal", "WinEffectModule", "TotalWinModule", "AutoSpinPanelv3", "BetHistoryDetailManagerBase"]')
md_lines.append('tags: ["cocos_vs_pixijs", "refer_game", "qa_matrix", "discrepancy", "specification", "ark_business"]')
md_lines.append('created_at: "2026-08-25"')
md_lines.append('author: "ARK Studio Slot Engineering and QA Team"')
md_lines.append('---')
md_lines.append('')
md_lines.append('# 📊 Bảng Đối Chiếu Quy Chuẩn Nghiệp Vụ: Cocos Creator (ARK Studio) vs Pixi.js (Game Refer)')
md_lines.append('')
md_lines.append('> **Tài liệu gốc**: `Compare Cocos vs Pixijs.xlsx`  ')
md_lines.append('> **Mục đích**: Quy chuẩn hóa 100% các hành vi giao diện (UI), trải nghiệm người chơi (UX), quy tắc chuyển cảnh và xử lý logic giữa engine Cocos Creator của ARK Studio và Game mẫu Refer (Pixi.js) để QA, Dev và GD làm căn cứ nghiệm thu.')
md_lines.append('')
md_lines.append('---')
md_lines.append('')
md_lines.append('## 📌 Tóm Tắt Các Nhóm Nghiệp Vụ')
md_lines.append('')
md_lines.append('| Nhóm Nghiệp Vụ | Số lượng mục | Định hướng giải pháp chính |')
md_lines.append('| :--- | :---: | :--- |')
for domain_name, domain_items in domains.items():
    if domain_items:
        md_lines.append(f'| **{domain_name}** | {len(domain_items)} mục | Theo chuẩn Ref / Phù hợp SDK Cocos |')
md_lines.append('')
md_lines.append('---')
md_lines.append('')

for domain_name, domain_items in domains.items():
    if not domain_items:
        continue
    md_lines.append(f'## {domain_name}')
    md_lines.append('')
    md_lines.append('| #No | Vị trí / Feature | Hành vi ARK Studio (Cocos) | Hành vi Game Refer (Pixi.js) | Quyết định (Final Solution) | Ghi chú & Links |')
    md_lines.append('| :---: | :--- | :--- | :--- | :---: | :--- |')
    for it in domain_items:
        md_lines.append(f'| **{it["no"]}** | {it["location"]} | {it["ark"]} | {it["ref"]} | **{it["solution"]}** | {it["comments"]} |')
    md_lines.append('')
    md_lines.append('---')
    md_lines.append('')

full_content = '\n'.join(md_lines)

with open('mcp/mcp-fwcc/docs/Compare_Cocos_vs_Pixijs.md', 'w', encoding='utf-8') as f:
    f.write(full_content)

os.makedirs('mcp/mcp-fwcc/docs/transfer-ark/03_business_discrepancies', exist_ok=True)
with open('mcp/mcp-fwcc/docs/transfer-ark/03_business_discrepancies/SPEC_001_cocos_vs_pixijs_refer_discrepancy_matrix.md', 'w', encoding='utf-8') as f:
    f.write(full_content)

print('Finished generating standardized markdown in both locations!')
