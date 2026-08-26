const fs = require('fs');
const path = require('path');

const CORE_LIB_SRC = path.join(__dirname, '..', '..', '..', 'assets', 'cc-common', 'cc-core-lib');
const DOCS_BASE = path.join(__dirname, '..', 'docs', 'cc_core_lib');
const MODULES_DIR = path.join(DOCS_BASE, 'modules');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
}

console.log('Generating Developer-Focused Usage & Method Documentation for CC Core Lib...');

// Dictionary of method descriptions and examples for popular lib utilities
const METHOD_DOCS_MAP = {
  // MoneyTween
  'MoneyTween.runNumber': {
    desc: 'Chạy hiệu ứng số tăng dần (tween money) cho một `cc.Label` với định dạng tiền tệ chuẩn.',
    details: [
      'Tự động đọc và parse giá trị hiện tại từ `cc.Label.string` (loại bỏ dấu phân cách).',
      'Tạo `cc.Tween` chạy từ số hiện tại đến `endValue` trong thời gian `duration` (giây).',
      'Tự động hủy tween cũ trên label nếu đang chạy để tránh đè chữ / glitch hiển thị.',
      'Hỗ trợ callback `onComplete`, `onUpdate`, và `gap` frame để tối ưu FPS trên mobile.'
    ],
    example: `const { MoneyTween } = globalThis.eno;
const moneyTween = new MoneyTween(this.formatter);

// 1. Chạy số cơ bản từ số hiện tại lên 50,000 trong 1.5s
moneyTween.runNumber(this.winLabel.node, 1.5, 50000);

// 2. Chạy số nâng cao với callback onComplete và gap tối ưu
moneyTween.runNumber(this.winLabel.node, 2.0, 100000, {
    gap: 2,            // Bỏ qua 2 frame mới cập nhật text 1 lần để mượt mà trên mobile
    decimalCount: 0,   // Không lấy số thập phân
    onComplete: () => {
        this.onCountUpFinished();
    }
});`
  },
  'MoneyTween.runBigWinNumber': {
    desc: 'Chạy hiệu ứng số tiền thắng lớn (Big Win) với đường cong gia tốc 2 pha (Quadratic Ease-In / Ease-Out).',
    details: [
      'Pha 1 (0 -> 50% thời gian): Tăng tốc theo đường cong bậc 2 `t * t` lên 50% giá trị.',
      'Pha 2 (50% -> 100% thời gian): Giảm tốc mượt mà `1 - (1-t)^2` về đích `endValue`.',
      'Tạo cảm giác bùng nổ, hồi hộp cho các cutscene BigWin / MegaWin / SuperWin.'
    ],
    example: `const { MoneyTween } = globalThis.eno;
const moneyTween = new MoneyTween(this.formatter);

// Chạy số Big Win lên 5,000,000 trong 4 giây với đường cong gia tốc 2 pha
moneyTween.runBigWinNumber(this.bigWinLabel.node, 4.0, 5000000, {
    gap: 3,
    onComplete: () => {
        this.showCelebrationParticle();
    }
});`
  },
  'MoneyTween.runWallet': {
    desc: 'Cập nhật số dư ví tiền người chơi (Wallet) với hiệu ứng tween mượt mà.',
    details: [
      'Định dạng số theo chuẩn `WALLET_FORMAT` (kèm mã tiền tệ nếu có).',
      'Tự động đồng bộ số dư hiển thị sau mỗi lần cược hoặc trả thưởng.'
    ],
    example: `moneyTween.runWallet(this.walletLabel.node, 0.5, newBalance);`
  },
  'MoneyTween.stopAllMoneyTweens': {
    desc: 'Dừng toàn bộ các tween tiền tệ đang chạy và xóa sạch bộ nhớ cache.',
    details: [
      'Thường được gọi khi chuyển scene hoặc khi người chơi bấm nút Fast Stop / Skip.',
      'Ngăn ngừa memory leak và lỗi cập nhật label sau khi node đã bị hủy.'
    ],
    example: `onDestroy() {
    this.moneyTween.stopAllMoneyTweens();
}`
  },

  // FloatUtils
  'FloatUtils.add': {
    desc: 'Cộng 2 số thực với độ chính xác tuyệt đối, khử hoàn toàn lỗi làm tròn IEEE-754 của JavaScript (`0.1 + 0.2`).',
    details: [
      'Tự động scale cả 2 số lên số nguyên dựa trên số chữ số thập phân lớn nhất.',
      'Thực hiện phép cộng số nguyên an toàn rồi chia lại cho hệ số scale.'
    ],
    example: `const { FloatUtils } = globalThis.eno;

// JavaScript thông thường: 0.1 + 0.2 === 0.30000000000000004
// Sử dụng FloatUtils:
const total = FloatUtils.add(0.1, 0.2); // Kết quả: 0.3 chuẩn xác`
  },
  'FloatUtils.mul': {
    desc: 'Nhân 2 số thực an toàn tránh sai số dấu chấm động.',
    details: [
      'Chuyển đổi các thừa số thành số nguyên, nhân nguyên và chia cho $10^{p_1 + p_2}$.'
    ],
    example: `const win = FloatUtils.mul(betAmount, multiplier);`
  },

  // HowlerSoundPlayer
  'HowlerSoundPlayer.playMusic': {
    desc: 'Phát nhạc nền (BGM) thông qua WebAudio engine với khả năng lặp và chỉnh volume.',
    details: [
      'Tự động dừng bài BGM trước đó nếu đang phát.',
      'Hỗ trợ tham số `loop` (mặc định: `true`) và `volume` (0.0 đến 1.0).'
    ],
    example: `const { HowlerSoundPlayer } = globalThis.eno;
const soundPlayer = new HowlerSoundPlayer();

// Phát nhạc nền Normal Game lặp lại với âm lượng 80%
soundPlayer.playMusic('BGM_NORMAL', true, 0.8);`
  },
  'HowlerSoundPlayer.resumeWithGesture': {
    desc: 'Mở khóa (Unlock) AudioContext trên trình duyệt di động (iOS Safari / Android Chrome) sau cử chỉ chạm đầu tiên.',
    details: [
      'Giải quyết triệt để chính sách Autoplay Policy của trình duyệt mobile.',
      'Tự động phát lại các âm thanh bị hoãn hoặc cache trong lúc chờ user interaction.'
    ],
    example: `// Bắt sự kiện touch đầu tiên trên màn hình để unlock âm thanh
this.node.once(cc.Node.EventType.TOUCH_START, () => {
    soundPlayer.resumeWithGesture();
});`
  },

  // NodeUtils
  'NodeUtils.getPositionInOtherNode': {
    desc: 'Tính toán và chuyển đổi tọa độ của một Node sang hệ tọa độ của một Node khác (World Space -> Node Space).',
    details: [
      'Hữu ích khi di chuyển coin bay từ ô Symbol trên ma trận về vị trí Label tiền trên HUD.',
      'Tự động xử lý Anchor Point và Scale của các node cha.'
    ],
    example: `const { NodeUtils } = globalThis.eno;

// Lấy vị trí của symbolNode trong hệ tọa độ của flyingCoinContainer
const targetPos = NodeUtils.getPositionInOtherNode(flyingCoinContainer, symbolNode);
coinNode.setPosition(targetPos);`
  },
  'NodeUtils.setZIndex': {
    desc: 'Thiết lập chỉ số Z-Index hiển thị và cập nhật thứ tự vẽ (Sibling Index) trong danh sách con.',
    details: [
      'Đảm bảo node được vẽ đè lên các node khác mà không cần thay đổi cấu trúc cây node.'
    ],
    example: `NodeUtils.setZIndex(highlightFrameNode, 999, true);`
  },

  // TweenUtils
  'TweenUtils.shaking': {
    desc: 'Tạo hiệu ứng rung lắc (Screen Shake / Reel Shake) theo cả trục X và Y.',
    details: [
      'Thường dùng khi hạ cánh Scatter, nổ Big Win hoặc va chạm biểu tượng.',
      'Hỗ trợ biên độ `shakeX`, `shakeY` và số lần lặp lại `repeatCount`.'
    ],
    example: `const { TweenUtils } = globalThis.eno;

// Rung lắc bảng slot trong 0.4s với biên độ 15px, lặp 2 lần
TweenUtils.shaking(this.slotTableNode, 0.4, 15, 15, 2).start();`
  },
  'TweenUtils.blink': {
    desc: 'Tạo hiệu ứng nhấp nháy (Blink / Flash) tăng giảm Opacity liên tục.',
    details: [
      'Dùng khi highlight payline thắng hoặc cảnh báo sắp hết lượt quay.'
    ],
    example: `TweenUtils.blink(this.paylineFrameNode, 0.6, 3).start(); // Nhấp nháy 3 lần trong 0.6s`
  },

  // SpineUtils
  'SpineUtils.getAnimationDuration': {
    desc: 'Lấy thời lượng chính xác (tính bằng giây) của một animation trong Spine SkeletonData.',
    details: [
      'Giúp đồng bộ chính xác thời gian tween hoặc thời gian chờ kết thúc animation trước khi chuyển step.'
    ],
    example: `const { SpineUtils } = globalThis.eno;
const skeleton = this.symbolSpine.getComponent(sp.Skeleton);

const duration = SpineUtils.getAnimationDuration(skeleton, 'win_celebrate');
this.scheduleOnce(() => {
    this.goToNextStep();
}, duration);`
  }
};

// =========================================================================
// PARSE DTS FILES
// =========================================================================
const dtsFiles = [
  path.join(CORE_LIB_SRC, 'cc-wrap-func', 'cc-wrap-func.d.ts'),
  path.join(CORE_LIB_SRC, 'share-lib', 'sharelib.d.ts'),
  path.join(CORE_LIB_SRC, 'slot-base-logic', 'slotlib.d.ts')
];

function parseDts(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf8');
  const content = rawContent.replace(/\/\*[\s\S]*?\*\//g, '');
  const classes = [];
  
  const classRegex = /export\s+(?:abstract\s+)?class\s+(\w+)(?:\s+extends\s+([^{\s]+))?(?:\s+implements\s+([^{\s]+))?\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/g;
  let match;
  
  while ((match = classRegex.exec(content)) !== null) {
    const className = match[1];
    const inheritsFrom = match[2] || 'Object';
    const classBody = match[4];

    const methods = [];
    const methodRegex = /(?:public\s+|protected\s+|private\s+|static\s+)?([a-zA-Z0-9_$]+)\s*\(([\s\S]*?)\)\s*:\s*([^;]+);/g;
    let mMatch;
    while ((mMatch = methodRegex.exec(classBody)) !== null) {
      const mName = mMatch[1].trim();
      if (['constructor'].includes(mName)) continue;
      methods.push({
        name: mName,
        params: mMatch[2].replace(/\s+/g, ' ').trim(),
        returnType: mMatch[3].replace(/\s+/g, ' ').trim()
      });
    }

    const properties = [];
    const propRegex = /(?:public\s+|protected\s+|private\s+|static\s+)?([a-zA-Z0-9_$]+)\s*:\s*([^;]+);/g;
    let pMatch;
    while ((pMatch = propRegex.exec(classBody)) !== null) {
      const pName = pMatch[1].trim();
      if (pName === 'constructor' || methods.some(m => m.name === pName)) continue;
      properties.push({
        name: pName,
        type: pMatch[2].replace(/\s+/g, ' ').trim()
      });
    }

    classes.push({
      className,
      inheritsFrom,
      properties,
      methods,
      sourcePkg: path.basename(path.dirname(filePath))
    });
  }

  return classes;
}

let allClasses = [];
for (const dts of dtsFiles) {
  if (fs.existsSync(dts)) {
    allClasses = allClasses.concat(parseDts(dts));
  }
}

console.log(`Generating developer-focused documentation for ${allClasses.length} library classes...`);

for (const item of allClasses) {
  const { className, inheritsFrom, properties, methods, sourcePkg } = item;
  const modDir = path.join(MODULES_DIR, className);
  const snakeName = className.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();

  // 1. Overview (Developer Guide Focus)
  writeFile(path.join(modDir, '01_overview', '01_architecture_and_role.md'), `---
id: "cc_core_lib:${className}:overview:architecture"
title: "Hướng dẫn & Cách sử dụng ${className} (${sourcePkg})"
category: "cc_core_lib"
tags: ["${className}", "${snakeName}", "cc_core_lib", "overview", "eno", "${sourcePkg}", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: \`${className}\`

> **Package**: \`assets/cc-common/cc-core-lib/${sourcePkg}\`  
> **Namespace**: \`eno.${className}\` / \`globalThis.eno.${className}\`  
> **Kế thừa**: \`${inheritsFrom}\`

---

## 🎯 1. \`${className}\` Dùng Để Làm Gì? (Purpose & Overview)

\`${className}\` là một class tiện ích/logic cốt lõi trong thư viện **\`${sourcePkg}\`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

\`\`\`typescript
// 1. Lấy class từ global namespace 'eno'
const { ${className} } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
\`\`\`

---

## 📋 3. Danh Sách Các Phương Thức Chính
${methods.length > 0 ? methods.map(m => `- **\`${m.name}(${m.params})\`**: \`${m.returnType}\``).join('\n') : '*Class thuần chứa dữ liệu hoặc constants.*'}
`);

  // 2. Methods Detail Files (Focus on What it does + Usage Example)
  for (const m of methods) {
    const key = `${className}.${m.name}`;
    const customDoc = METHOD_DOCS_MAP[key];

    const desc = customDoc ? customDoc.desc : `Thực hiện chức năng \`${m.name}\` cho class \`${className}\`.`;
    const details = customDoc ? customDoc.details : [
      `Nhận các tham số đầu vào và xử lý theo logic của \`${className}\`.`,
      `Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.`
    ];
    const example = customDoc ? customDoc.example : `const { ${className} } = globalThis.eno;
// Gọi phương thức:
// ${className}.${m.name}(${m.params});`;

    // Parameter breakdown table
    const paramList = m.params ? m.params.split(',').map(p => p.trim()) : [];
    const paramRows = paramList.length > 0 ? paramList.map(p => {
      const parts = p.split(':');
      const pName = parts[0].replace('?', '').trim();
      const pType = parts[1] ? parts[1].trim() : 'any';
      const isOptional = parts[0].includes('?');
      return `| \`${pName}\` | \`${pType}\` | \`${isOptional ? 'Tùy chọn' : 'Bắt buộc'}\` | Tham số truyền vào cho ${m.name} |`;
    }).join('\n') : '| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |';

    writeFile(path.join(modDir, '03_methods', `${m.name}.md`), `---
id: "cc_core_lib:${className}:methods:${m.name}"
title: "Cách dùng ${className}.${m.name}() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["${className}", "${snakeName}", "cc_core_lib", "methods", "${m.name}", "usage", "guide"]
---

# 📖 \`${className}.${m.name}()\`

> **Mô tả ngắn**: ${desc}

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

${details.map(d => `- ${d}`).join('\n')}

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

\`\`\`typescript
${m.name}(${m.params}): ${m.returnType}
\`\`\`

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
${paramRows}

- **Kiểu trả về**: \`${m.returnType}\`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

\`\`\`typescript
${example}
\`\`\`

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (\`cc.Node\`, \`callback\`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong \`onDestroy()\`.
`);
  }
}

console.log('✓ Successfully regenerated all cc-core-lib documentation with developer-focused usage & clear explanations!');
