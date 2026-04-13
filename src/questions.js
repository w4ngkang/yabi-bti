// 修改点：题目文案二次优化（区分度更强、场景更具体）+ 保持 16 题结构
export const questions = [
  {
    id: 1,
    text: "深夜睡不着，你会？",
    options: [
      { label: "A. 发仅自己可见的伤感小作文，再配黑白滤镜", scoreMap: { jiahao: 1, feizhuliu: 1 } },
      { label: "B. 打开短视频看社会摇并评论“这才叫生活”", scoreMap: { shehui: 1, tiyusheng: 1 } },
      { label: "C. 起来刷一套理综卷子", scoreMap: { zuoti: 1 } },
      { label: "D. 打开VALORANT靶场练压枪", scoreMap: { waxuedi: 1 } }
    ]
  },
  {
    id: 2,
    text: "周末你最想去的活动现场是？",
    options: [
      { label: "A. 独立书店读诗会，顺便拍胶片风", scoreMap: { erciyuan: 1, wenqin: 1 } },
      { label: "B. 地下livehouse，越炸越好", scoreMap: { feizhuliu: 1, zhongzhuanxiha: 1 } },
      { label: "C. 球场边抽电子烟边看人斗牛", scoreMap: { tiyusheng: 1, shehui: 1 } },
      { label: "D. 商场里拍OOTD九宫格", scoreMap: { chuanda: 1, jiahao: 1 } }
    ]
  },
  {
    id: 3,
    text: "群聊突然沉默，你会怎么破冰？",
    options: [
      { label: "A. 甩一个抽象梗图并@全体", scoreMap: { chouxiang: 1, jiahao: 1 } },
      { label: "B. 发500字国际时评，顺手带三条数据来源", scoreMap: { jianzhengge: 1 } },
      { label: "C. 丢今天吃的九宫格并附探店点评", scoreMap: { meishi: 1 } },
      { label: "D. 晒爱豆新舞台链接并催转发", scoreMap: { hanyumei: 1 } }
    ]
  },
  {
    id: 4,
    text: "你最常见的主页简介会是？",
    options: [
      { label: "A. “别爱我没结果（配黑白蝴蝶）”", scoreMap: { feizhuliu: 1, jiahao: 1 } },
      { label: "B. “只玩XX位，枪硬话不多”", scoreMap: { waxuedi: 1 } },
      { label: "C. “学习使我妈快乐”", scoreMap: { zuoti: 1 } },
      { label: "D. “今日穿搭已更新，链接在置顶”", scoreMap: { chuanda: 1 } }
    ]
  },
  {
    id: 5,
    text: "钱包只剩50块，你会？",
    options: [
      { label: "A. 全买炸串奶茶，热量明天再算", scoreMap: { meishi: 1 } },
      { label: "B. 留着买一本诗集和一杯手冲咖啡", scoreMap: { erciyuan: 1, wenqin: 1 } },
      { label: "C. 先给爱豆打榜冲销量", scoreMap: { hanyumei: 1 } },
      { label: "D. 借朋友200并说“哥们周转一下”", scoreMap: { shehui: 1 } }
    ]
  },
  {
    id: 6,
    text: "你觉得最性感的技能是？",
    options: [
      { label: "A. 一秒切镜换装并且不重样", scoreMap: { chuanda: 1, feizhuliu: 1 } },
      { label: "B. 把时政热词讲成一套逻辑链", scoreMap: { jianzhengge: 1 } },
      { label: "C. 公式秒背，题型一眼秒", scoreMap: { zuoti: 1 } },
      { label: "D. freestyle押不押韵都得喊real", scoreMap: { zhongzhuanxiha: 1 } }
    ]
  },
  {
    id: 7,
    text: "拍照时你最在意什么？",
    options: [
      { label: "A. 角度要能显腿两米八", scoreMap: { chuanda: 1, jiahao: 1 } },
      { label: "B. 光影和颗粒感，像电影截图", scoreMap: { wenqin: 1 } },
      { label: "C. 和应援棒同框，证明我在前线", scoreMap: { hanyumei: 1 } },
      { label: "D. 只要看起来像刚打完球就行", scoreMap: { tiyusheng: 1 } }
    ]
  },
  {
    id: 8,
    text: "你最常开的APP是？",
    options: [
      { label: "A. B站，先补番再看MAD", scoreMap: { erciyuan: 1 } },
      { label: "B. 小红书，搜“今天穿什么”", scoreMap: { chuanda: 1 } },
      { label: "C. 梗图社区，专看抽象神评", scoreMap: { chouxiang: 1 } },
      { label: "D. 学习软件，刷题榜要冲前排", scoreMap: { zuoti: 1 } }
    ]
  },
  {
    id: 9,
    text: "别人说你“有点装”，你的反应是？",
    options: [
      { label: "A. “谢谢夸奖，我天生舞台体质”", scoreMap: { jiahao: 1 } },
      { label: "B. “我这叫风格，你不懂亚比”", scoreMap: { feizhuliu: 1 } },
      { label: "C. 直接开麦回怼三分钟", scoreMap: { waxuedi: 1 } },
      { label: "D. 发一条阴阳怪气朋友圈", scoreMap: { chouxiang: 1, hanyumei: 1 } }
    ]
  },
  {
    id: 10,
    text: "你理想中的社交关系是？",
    options: [
      { label: "A. 小圈子抱团，懂我就够", scoreMap: { feizhuliu: 1, erciyuan: 1 } },
      { label: "B. 全网都认识我，见面都叫哥/姐", scoreMap: { jiahao: 1 } },
      { label: "C. 一起排位开黑，输赢都能吵", scoreMap: { waxuedi: 1 } },
      { label: "D. 一起刷题互改错题本", scoreMap: { zuoti: 1 } }
    ]
  },
  {
    id: 11,
    text: "你对“热搜”最真实的态度是？",
    options: [
      { label: "A. 第一时间解读，顺手点评国际局势", scoreMap: { jianzhengge: 1 } },
      { label: "B. 只关心我爱豆有没有被黑", scoreMap: { hanyumei: 1 } },
      { label: "C. 看看有没有新梗可偷，顺便改成自己的版本", scoreMap: { chouxiang: 1, zhongzhuanxiha: 1 } },
      { label: "D. 不看热搜，我在研究哪家拌面更香", scoreMap: { meishi: 1 } }
    ]
  },
  {
    id: 12,
    text: "你会因为什么最容易上头消费？",
    options: [
      { label: "A. 诗集、黑胶和复古相机小配件", scoreMap: { erciyuan: 1, wenqin: 1 } },
      { label: "B. 新款球鞋和运动背心", scoreMap: { tiyusheng: 1 } },
      { label: "C. 潮牌阔腿裤和亮色外套", scoreMap: { chuanda: 1, feizhuliu: 1 } },
      { label: "D. 夜宵双拼加料套餐", scoreMap: { meishi: 1 } }
    ]
  },
  {
    id: 13,
    text: "线下见网友，你通常会？",
    options: [
      { label: "A. 先在厕所抽根烟压压惊", scoreMap: { shehui: 1 } },
      { label: "B. 带本书去咖啡馆，见面先聊电影和乐队", scoreMap: { wenqin: 1 } },
      { label: "C. 全程聊游戏版本和压枪参数", scoreMap: { waxuedi: 1 } },
      { label: "D. 见面先问“附近哪家店最好吃”", scoreMap: { meishi: 1 } }
    ]
  },
  {
    id: 14,
    text: "你写作文最容易出现的是？",
    options: [
      { label: "A. “综上所述”后再来三点结论", scoreMap: { zuoti: 1 } },
      { label: "B. 括号套括号，像在发弹幕", scoreMap: { chouxiang: 1 } },
      { label: "C. 引用爱豆歌词当金句", scoreMap: { hanyumei: 1 } },
      { label: "D. 把球场故事写成青春疼痛文学", scoreMap: { tiyusheng: 1, zhongzhuanxiha: 1 } }
    ]
  },
  {
    id: 15,
    text: "你最擅长的“输出方式”是？",
    options: [
      { label: "A. 话筒一拿就开唱，节奏先赢", scoreMap: { zhongzhuanxiha: 1, jiahao: 1 } },
      { label: "B. 图文九宫格，配色和文案都拿捏", scoreMap: { chuanda: 1 } },
      { label: "C. 长文锐评，观点密度堪比论文", scoreMap: { jianzhengge: 1 } },
      { label: "D. 一句“老婆真好看”刷满评论区", scoreMap: { erciyuan: 1 } }
    ]
  },
  {
    id: 16,
    text: "如果要给自己做一张贴纸，你会写？",
    options: [
      { label: "A. “人群焦点制造机”", scoreMap: { jiahao: 1, feizhuliu: 1 } },
      { label: "B. “在线求别骂，线下不说话”", scoreMap: { jianzhengge: 1, waxuedi: 1 } },
      { label: "C. “今天也在为好吃的活着”", scoreMap: { meishi: 1 } },
      { label: "D. “社会路子野，借钱记得写借条”", scoreMap: { shehui: 1 } }
    ]
  }
];
