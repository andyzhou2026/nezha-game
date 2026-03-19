const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '哈萨克斯坦广东商会 - 宣传推介';
pres.author = 'GDCCK';

// 配色方案 - 深蓝+金色高端配色
const COLORS = {
    primary: "0D2D5A",      // 深蓝
    primaryLight: "1a4270",
    accent: "D4AF37",       // 金色
    accentLight: "E8C547",
    white: "FFFFFF",
    lightGray: "F8F9FA",
    gray: "6C757D",
    darkGray: "343A40",
    black: "1A1A1A"
};

// ============ 第1页：封面 ============
let slide1 = pres.addSlide();
slide1.background = { color: COLORS.primary };

// 顶部装饰条
slide1.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.15, fill: { color: COLORS.accent }
});

// 中央Logo区域
slide1.addShape(pres.shapes.RECTANGLE, {
    x: 4, y: 1.8, w: 2, h: 2, fill: { color: COLORS.accent }
});
slide1.addText("GDCCK", {
    x: 4, y: 2.3, w: 2, h: 1,
    fontSize: 36, fontFace: "Arial Black", color: COLORS.primary,
    bold: true, align: "center", valign: "middle"
});

// 主标题
slide1.addText("哈萨克斯坦广东商会", {
    x: 0.5, y: 4, w: 9, h: 0.8,
    fontSize: 44, fontFace: "Microsoft YaHei", color: COLORS.white,
    bold: true, align: "center"
});

slide1.addText("Guangdong Chamber of Commerce in Kazakhstan", {
    x: 0.5, y: 4.7, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Arial", color: COLORS.accent,
    align: "center"
});

// 副标题
slide1.addText("连接中国·走向世界 | 促进粤哈经贸合作", {
    x: 0.5, y: 5.2, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: "CADCFC",
    align: "center"
});

// ============ 第2页：核心数据 ============
let slide2 = pres.addSlide();
slide2.background = { color: COLORS.primary };

slide2.addText("核心数据 · 实力见证", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", color: COLORS.white, bold: true
});

// 数据卡片
const stats = [
    { num: "268+", label: "会员企业" },
    { num: "15", label: "年成立历程" },
    { num: "86亿$", label: "年贸易额" },
    { num: "1580+", label: "合作项目" }
];

stats.forEach((stat, i) => {
    const x = 0.8 + i * 2.3;
    // 卡片背景
    slide2.addShape(pres.shapes.RECTANGLE, {
        x: x, y: 1.4, w: 2, h: 2.8, fill: { color: COLORS.white, transparency: 10 }
    });
    // 金色顶部条
    slide2.addShape(pres.shapes.RECTANGLE, {
        x: x, y: 1.4, w: 2, h: 0.08, fill: { color: COLORS.accent }
    });
    // 数字
    slide2.addText(stat.num, {
        x: x, y: 1.8, w: 2, h: 1,
        fontSize: 42, fontFace: "Arial Black", color: COLORS.accent,
        bold: true, align: "center"
    });
    // 标签
    slide2.addText(stat.label, {
        x: x, y: 3, w: 2, h: 0.8,
        fontSize: 16, fontFace: "Microsoft YaHei", color: COLORS.white,
        align: "center"
    });
});

// 底部强调
slide2.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.8, w: 10, h: 0.825, fill: { color: COLORS.accent }
});
slide2.addText("2024年粤哈贸易额增长37%，创历史新高！", {
    x: 0.5, y: 4.95, w: 9, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei", color: COLORS.primary,
    bold: true, align: "center"
});

// ============ 第3页：商会简介 ============
let slide3 = pres.addSlide();
slide3.background = { color: COLORS.lightGray };

// 左侧深蓝背景
slide3.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 4.5, h: 5.625, fill: { color: COLORS.primary }
});

slide3.addText("关于我们", {
    x: 0.5, y: 0.8, w: 3.5, h: 0.5,
    fontSize: 14, fontFace: "Arial", color: COLORS.accent
});

slide3.addText("哈萨克斯坦广东商会", {
    x: 0.5, y: 1.3, w: 3.5, h: 0.8,
    fontSize: 26, fontFace: "Microsoft YaHei", color: COLORS.white, bold: true
});

slide3.addText([
    { text: "成立于2011年", options: { bullet: true, breakLine: true } },
    { text: "哈萨克斯坦政府批准", options: { bullet: true, breakLine: true } },
    { text: "非营利性国际商务组织", options: { bullet: true, breakLine: true } },
    { text: "总部位于阿拉木图", options: { bullet: true, breakLine: true } },
    { text: "北京、广州、乌鲁木齐设代表处", options: { bullet: true } }
], {
    x: 0.5, y: 2.3, w: 3.8, h: 2.5,
    fontSize: 14, fontFace: "Microsoft YaHei", color: "CADCFC",
    paraSpaceAfter: 8
});

// 右侧内容
slide3.addText("核心价值", {
    x: 5, y: 0.8, w: 4.5, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei", color: COLORS.primary, bold: true
});

const values = [
    { title: "服务会员", desc: "商务对接、法律咨询、市场信息" },
    { title: "服务社会", desc: "促进就业、公益事业" },
    { title: "服务政府", desc: "政策对接、经贸交流" }
];

values.forEach((v, i) => {
    const y = 1.5 + i * 1.1;
    slide3.addShape(pres.shapes.RECTANGLE, {
        x: 5, y: y, w: 4.5, h: 0.9, fill: { color: COLORS.white }
    });
    slide3.addShape(pres.shapes.RECTANGLE, {
        x: 5, y: y, w: 0.08, h: 0.9, fill: { color: COLORS.accent }
    });
    slide3.addText(v.title, {
        x: 5.3, y: y + 0.1, w: 4, h: 0.4,
        fontSize: 15, fontFace: "Microsoft YaHei", color: COLORS.primary, bold: true
    });
    slide3.addText(v.desc, {
        x: 5.3, y: y + 0.5, w: 4, h: 0.35,
        fontSize: 12, fontFace: "Microsoft YaHei", color: COLORS.gray
    });
});

// ============ 第4页：核心服务 ============
let slide4 = pres.addSlide();
slide4.background = { color: COLORS.lightGray };

slide4.addText("核心服务", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", color: COLORS.primary, bold: true
});

slide4.addText("专注 · 专业 · 专心", {
    x: 0.5, y: 0.9, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: COLORS.gray
});

const services = [
    { title: "会员服务", desc: "商务对接、法律咨询、市场信息" },
    { title: "商务对接", desc: "商务考察、贸易洽谈、项目对接" },
    { title: "展览展会", desc: "组织参加中哈重要展会" },
    { title: "市场推广", desc: "品牌营销、媒体宣传" },
    { title: "法律咨询", desc: "中哈法律法规咨询" },
    { title: "培训交流", desc: "商务培训、人才对接" }
];

services.forEach((s, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 3.1;
    const y = 1.5 + row * 1.8;

    // 卡片
    slide4.addShape(pres.shapes.RECTANGLE, {
        x: x, y: y, w: 2.9, h: 1.5, fill: { color: COLORS.white },
        shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });
    // 金色图标圆圈
    slide4.addShape(pres.shapes.OVAL, {
        x: x + 1.1, y: y + 0.2, w: 0.7, h: 0.7, fill: { color: COLORS.accent }
    });
    slide4.addText(s.title, {
        x: x + 0.2, y: y + 1, w: 2.5, h: 0.4,
        fontSize: 15, fontFace: "Microsoft YaHei", color: COLORS.primary, bold: true, align: "center"
    });
});

// ============ 第5页：投资优势 ============
let slide5 = pres.addSlide();
slide5.background = { color: COLORS.primary };

slide5.addText("哈萨克斯坦投资优势", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", color: COLORS.white, bold: true
});

slide5.addText('走进中亚最大市场，把握"一带一路"历史机遇', {
    x: 0.5, y: 0.9, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: "CADCFC"
});

const advantages = [
    { num: "01", title: "战略位置", desc: "位于欧亚大陆中心，连接中国与欧洲" },
    { num: "02", title: "丰富资源", desc: "石油、天然气、矿产等自然资源丰富" },
    { num: "03", title: "政策优惠", desc: "税收优惠、土地优惠等投资激励机制" },
    { num: "04", title: "市场潜力", desc: "1900万人口，消费市场快速增长" }
];

advantages.forEach((adv, i) => {
    const y = 1.5 + i * 1;

    // 卡片背景
    slide5.addShape(pres.shapes.RECTANGLE, {
        x: 0.5, y: y, w: 9, h: 0.85, fill: { color: COLORS.white, transparency: 10 }
    });

    // 数字
    slide5.addText(adv.num, {
        x: 0.7, y: y + 0.15, w: 0.8, h: 0.55,
        fontSize: 28, fontFace: "Arial Black", color: COLORS.accent, bold: true
    });

    // 标题
    slide5.addText(adv.title, {
        x: 1.8, y: y + 0.15, w: 2, h: 0.4,
        fontSize: 18, fontFace: "Microsoft YaHei", color: COLORS.white, bold: true
    });

    // 描述
    slide5.addText(adv.desc, {
        x: 1.8, y: y + 0.5, w: 7.5, h: 0.35,
        fontSize: 14, fontFace: "Microsoft YaHei", color: "CADCFC"
    });
});

// ============ 第6页：合作伙伴 ============
let slide6 = pres.addSlide();
slide6.background = { color: COLORS.lightGray };

slide6.addText("战略合作伙伴", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", color: COLORS.primary, bold: true
});

const partners = [
    "广东省商务厅", "哈萨克斯坦投资局", "阿拉木图市政府",
    "哈萨克斯坦中国总商会", "广东省贸促会", "阿斯塔纳航空",
    "中欧班列", "阿里巴巴国际站", "中国国际商会",
    "一带一路服务中心", "广东省进出口商会", "哈萨克斯坦贸易政策发展中心"
];

partners.forEach((p, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = 0.5 + col * 2.35;
    const y = 1.3 + row * 1;

    slide6.addShape(pres.shapes.RECTANGLE, {
        x: x, y: y, w: 2.15, h: 0.8, fill: { color: COLORS.white },
        shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });
    slide6.addText(p, {
        x: x, y: y + 0.25, w: 2.15, h: 0.3,
        fontSize: 13, fontFace: "Microsoft YaHei", color: COLORS.primary, align: "center"
    });
});

// ============ 第7页：加入我们 ============
let slide7 = pres.addSlide();
slide7.background = { color: COLORS.primary };

slide7.addText("诚邀合作 · 共创未来", {
    x: 0.5, y: 0.8, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei", color: COLORS.white, bold: true, align: "center"
});

slide7.addText("成为会员企业，共享中哈经贸合作红利", {
    x: 0.5, y: 1.5, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei", color: COLORS.accent, align: "center"
});

// 联系方式卡片
slide7.addShape(pres.shapes.RECTANGLE, {
    x: 1.5, y: 2.3, w: 7, h: 2.5, fill: { color: COLORS.white }
});

slide7.addText("联系我们", {
    x: 2, y: 2.5, w: 6, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei", color: COLORS.primary, bold: true
});

slide7.addText([
    { text: "地址：哈萨克斯坦阿拉木图市阿拜大道128号", options: { breakLine: true } },
    { text: "电话：+7 727 123 4567", options: { breakLine: true } },
    { text: "邮箱：info@gdcck.kz", options: { breakLine: true } },
    { text: "网站：www.gdcck.kz", options: {} }
], {
    x: 2, y: 3.1, w: 6, h: 1.5,
    fontSize: 14, fontFace: "Microsoft YaHei", color: COLORS.darkGray,
    paraSpaceAfter: 6
});

// 底部
slide7.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.2, w: 10, h: 0.425, fill: { color: COLORS.accent }
});
slide7.addText("哈萨克斯坦广东商会 GDCCK", {
    x: 0.5, y: 5.25, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei", color: COLORS.primary, align: "center"
});

// 保存文件
pres.writeFile({ fileName: "c:/Users/万云/WorkBuddy/20260319162629/哈萨克斯坦广东商会_宣传推介.pptx" })
    .then(() => console.log("PPT created successfully!"))
    .catch(err => console.error(err));
