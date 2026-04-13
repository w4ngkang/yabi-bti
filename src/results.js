// 修改点：人格库替换为 14 型，并固定顺序用于并列最高分判定
export const PERSONALITY_ORDER = [
  "jiahao",
  "feizhuliu",
  "jianzhengge",
  "wenqin",
  "zhongzhuanxiha",
  "zuoti",
  "erciyuan",
  "meishi",
  "hanyumei",
  "chouxiang",
  "waxuedi",
  "tiyusheng",
  "chuanda",
  "shehui"
];

const personaPalettes = {
  jiahao: ["#ff66c4", "#ffe66d"],
  feizhuliu: ["#3a0f46", "#ff66c4"],
  jianzhengge: ["#00f0ff", "#4c6fff"],
  wenqin: ["#a78bfa", "#f9a8d4"],
  zhongzhuanxiha: ["#ff9f1c", "#ffd60a"],
  zuoti: ["#69db7c", "#3bc9db"],
  erciyuan: ["#ff85e1", "#b197fc"],
  meishi: ["#ff922b", "#ffd43b"],
  hanyumei: ["#845ef7", "#e64980"],
  chouxiang: ["#74c0fc", "#e599f7"],
  waxuedi: ["#00f0ff", "#ff6b6b"],
  tiyusheng: ["#51cf66", "#ffd43b"],
  chuanda: ["#f783ac", "#66d9e8"],
  shehui: ["#adb5bd", "#495057"]
};

function buildPersonaImage(name, emoji, leftColor, rightColor) {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${leftColor}" />
      <stop offset="100%" stop-color="${rightColor}" />
    </linearGradient>
  </defs>
  <rect width="1200" height="720" rx="48" fill="#0a0a1a" />
  <rect x="28" y="28" width="1144" height="664" rx="36" fill="url(#g)" opacity="0.92" />
  <rect x="52" y="52" width="1096" height="616" rx="30" fill="none" stroke="#00f0ff" stroke-width="4" opacity="0.85" />
  <text x="86" y="170" fill="#ffff00" font-size="62" font-family="Arial, sans-serif">YABI MATCH</text>
  <text x="86" y="300" fill="#ffffff" font-size="120" font-weight="700" font-family="Arial, sans-serif">${name}</text>
  <text x="86" y="420" fill="#ffffff" font-size="96" font-family="Arial, sans-serif">${emoji}</text>
  <text x="86" y="560" fill="#f8f9fa" font-size="42" font-family="Arial, sans-serif">亚比BTI 专属人格海报</text>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const baseResultMap = {
  jiahao: {
    name: "嘉豪",
    description:
      "你是人群聚光灯本灯，三句话里两句都在抛梗求关注。主打一个“我不一定最强，但必须最显眼”，装杯动作已经刻进DNA。你出现的地方，尴尬和爆笑会同时上线。",
    tags: ["社牛晚期", "镜头饥渴症", "场子点火器"],
    emoji: "🌚🦋"
  },
  feizhuliu: {
    name: "非主流",
    description:
      "你天生和大众审美唱反调，越小众越上头。你在冷门圈层里像教父，外人看不懂，你只回一句“你不懂氛围”。叛逆不是阶段，是你的永久皮肤。",
    tags: ["圈层认证", "反向审美", "孤勇者滤镜"],
    emoji: "🖤🕸️"
  },
  jianzhengge: {
    name: "键政哥",
    description:
      "你在群聊里谈国际局势像开新闻联播，字字铿锵火力全开。现实里点咖啡都小声到听不见，线上却锐评拉满。你是“屏幕前重拳出击”专业八级选手。",
    tags: ["锐评永动机", "时政弹幕王", "线下社恐体"],
    emoji: "🧠🌍"
  },
  wenqin: {
    name: "文艺青年",
    description:
      "你是氛围感重症选手，咖啡馆窗边和旧书店角落都是你的主场。你说话三句里两句像诗，剩下一句在感叹光影。别人活在日历里，你活在电影分镜里。",
    tags: ["胶片滤镜脑", "情绪采样器", "文案即生活"],
    emoji: "📷🍃"
  },
  zhongzhuanxiha: {
    name: "中专嘻哈",
    description:
      "你头顶墨镜，嘴里Keep Real，节奏先到位再说。韵脚可以飘，但快乐必须稳。你的人生信条就一句：管它押不押，先燥起来。",
    tags: ["real挂嘴边", "快乐先行", "节奏感选手"],
    emoji: "🎤😎"
  },
  zuoti: {
    name: "做题区",
    description:
      "你看到题目会自动兴奋，刷题比刷短视频还上头。人生是一本错题本，能复盘就不算输。你的安全感来自“再做两套就稳了”。",
    tags: ["小镇做题家", "错题收藏癖", "量变信徒"],
    emoji: "📚🧮"
  },
  erciyuan: {
    name: "二次元",
    description:
      "你是纸性恋重度玩家，番剧更新就是节日。老婆/老公更替是版本迭代，不是花心。B站大会员会过期？这种事不存在。",
    tags: ["纸片人本命", "追番永动机", "弹幕常驻民"],
    emoji: "🌸📺"
  },
  meishi: {
    name: "良子",
    description:
      "你对食物的热爱超过99%的人类，哪里开新店你比地图先知道。聊别的都一般，一聊吃你能讲出纪录片。你的世界观很简单：好吃就是正义。",
    tags: ["碳水崇拜", "探店雷达", "口腹之欲至上"],
    emoji: "🍜🍢"
  },
  hanyumei: {
    name: "韩娱妹",
    description:
      "你切瓜刷音源空瓶反黑一条龙，作战体系堪比项目管理。墙头可以很多，本命只能有一个。你熬过的夜，都是在守护舞台排名。",
    tags: ["音源冲锋手", "反黑执行官", "本命绝对论"],
    emoji: "💿💜"
  },
  chouxiang: {
    name: "抽象废物",
    description:
      "你讲话全是括号和内心OS，梗密度高到像压缩包。24小时高强度冲浪，现实里电量却常年红色。别人看你疯，你说这叫高级表达。",
    tags: ["括号艺术家", "冲浪不下线", "精神状态领先"],
    emoji: "🤡🌀"
  },
  waxuedi: {
    name: "瓦学弟",
    description:
      "你是VALORANT低敏战神，语音里永远在喊“来点”。理论上你每把都能C，实际上经常先倒地看队友。压抑拉满的时候，你会去网上整点骚操作。",
    tags: ["来点文学", "先倒后评", "排位执念体"],
    emoji: "🎯🕹️"
  },
  tiyusheng: {
    name: "体育生",
    description:
      "那场大雨毁了你的体育梦，但没毁你的少年气。你爱抽烟爱逃课不爱背书，球场就是你的第二教室。累归累，嘴上永远一句“还行”。",
    tags: ["雨天意难平", "操场常驻", "嘴硬体强"],
    emoji: "🏃💊"
  },
  chuanda: {
    name: "穿搭哥/姐",
    description:
      "你对广角阔腿裤有信仰，配色越炸越高级。性别成谜不是问题，气场压人一头才是目标。你活着就是为了出片，路灯下都能拍成大片。",
    tags: ["OOTD主理人", "配色压制", "出片狂魔"],
    emoji: "📸🧥"
  },
  shehui: {
    name: "社会哥/姐",
    description:
      "你最懂“路子野”的叙事美学，厕所抽烟只是开场动作。借钱时语气像兄弟，催债时人间蒸发。你总说认识社会人，听起来就很有故事。",
    tags: ["江湖气发言", "借钱艺术家", "厕所社交王"],
    emoji: "🚬🦂"
  }
};

export const resultMap = Object.fromEntries(
  Object.entries(baseResultMap).map(([key, value]) => {
    const [leftColor, rightColor] = personaPalettes[key] ?? ["#ff66c4", "#00f0ff"];
    return [
      key,
      {
        ...value,
        image: `/personas/${key}.png`,
        fallbackImage: buildPersonaImage(value.name, value.emoji, leftColor, rightColor)
      }
    ];
  })
);
