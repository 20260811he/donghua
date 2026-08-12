import type { Language } from "./src/i18n"

type AnimeItem = {
  titleZh: string
  titleEn: string
  titleJa: string
  score: number
}

type Data = {
  [key: string]: AnimeItem[]
}

const data: Data = {
  "2014": [
    { titleZh: "北平无战事", titleEn: "Shirobako", titleJa: "SHIROBAKO", score: 8.7 },
    { titleZh: "战长沙", titleEn: "Shirobako", titleJa: "SHIROBAKO", score: 8.7 },
    {
      titleZh: "红高粱",
      titleEn: "Fate/stay night [Unlimited Blade Works]",
      titleJa: "Fate/stay night [Unlimited Blade Works]",
      score: 7.5,
    },
    {
      titleZh: "宫锁连城",
      titleEn: "No Game No Life",
      titleJa: "ノーゲーム・ノーライフ",
      score: 7.7,
    },
    {
      titleZh: "古剑奇谭",
      titleEn: "Ping Pong",
      titleJa: "ピンポン THE ANIMATION",
      score: 8.7,
    },
    {
      titleZh: "武媚娘传奇",
      titleEn: "Amagi Brilliant Park",
      titleJa: "甘城ブリリアントパーク",
      score: 7,
    },
    {
      titleZh: "杉杉来了",
      titleEn: "Parasyte -the maxim-",
      titleJa: "寄生獣 セイの格率",
      score: 8,
    },
    { titleZh: "灵魂摆渡", titleEn: "Nisekoi", titleJa: "ニセコイ", score: 7.1 },
    {
      titleZh: "历史转折中的邓小平",
      titleEn: "Monthly Girls' Nozaki-kun",
      titleJa: "月刊少女野崎くん",
      score: 7.8,
    },
    {
      titleZh: "风中奇缘",
      titleEn: "Is the Order a Rabbit?",
      titleJa: "ご注文はうさぎですか？",
      score: 7.3,
    },
    {
      titleZh: "金玉良缘",
      titleEn: "Akame ga Kill!",
      titleJa: "アカメが斬る！",
      score: 6.6,
    },
    {
      titleZh: "离婚律师",
      titleEn: "Space Dandy",
      titleJa: "スペース☆ダンディ",
      score: 8,
    },
  ],
  "2015": [
    {
      titleZh: "那年那兔那些事",
      titleEn: "Saekano: How to Raise a Boring Girlfriend",
      titleJa: "冴えない彼女の育てかた",
      score: 7.2,
    },
    {
      titleZh: "勇者大冒险",
      titleEn: "Assassination Classroom",
      titleJa: "暗殺教室",
      score: 7.3,
    },
    {
      titleZh: "狐妖小红娘下沙篇",
      titleEn: "One Punch Man",
      titleJa: "ワンパンマン",
      score: 8,
    },
    {
      titleZh: "黑白无双",
      titleEn: "The Testament of Sister New Devil",
      titleJa: "新妹魔王の契約者",
      score: 5.8,
    },
    {
      titleZh: "茶啊二中2",
      titleEn: "Charlotte",
      titleJa: "シャーロット",
      score: 6.3,
    },
    {
      titleZh: "画江湖之灵主",
      titleEn: "Overlord",
      titleJa: "オーバーロード",
      score: 6.9,
    },
    {
      titleZh: "疯味英雄",
      titleEn: "Prison School",
      titleJa: "監獄学園",
      score: 7.3,
    },
    {
      titleZh: "超神学院3",
      titleEn: "Plastic Memories",
      titleJa: "プラスティック・メモリーズ",
      score: 7,
    },
  ],
  "2016": [
    {
      titleZh: "狐妖小红娘王权篇",
      titleEn: "Kono Suba",
      titleJa: "この素晴らしい世界に祝福を！",
      score: 7.6,
    },
    {
      titleZh: "天行九歌",
      titleEn: "March Comes in Like a Lion",
      titleJa: "3月のライオン",
      score: 8.3,
    },
    { titleZh: "勇者大冒险2", titleEn: "ReLIFE", titleJa: "ReLIFE", score: 7.7 },
    {
      titleZh: "纳米核心2",
      titleEn: "The Disastrous Life of Saiki K.",
      titleJa: "斉木楠雄のΨ難",
      score: 7.7,
    },
    {
      titleZh: "超神学院 黑甲",
      titleEn: "Re:Zero ",
      titleJa: "Re:ゼロから始める異世界生活",
      score: 7.4,
    },
    {
      titleZh: "镇魂街",
      titleEn: "Erased",
      titleJa: "僕だけがいない街",
      score: 7.7,
    },
    {
      titleZh: "我的三体 罗辑传",
      titleEn: "Mob Psycho 100",
      titleJa: "モブサイコ100",
      score: 7.8,
    },
    {
      titleZh: "狐妖小红娘 月红篇",
      titleEn: "Grimgar of Fantasy and Ash",
      titleJa: "灰と幻想のグリムガル",
      score: 7.5,
    },
    {
      titleZh: "茶啊二中3",
      titleEn: "This Art Club Has a Problem!",
      titleJa: "この美術部には問題がある！",
      score: 7.3,
    },
    {
      titleZh: "凸变英雄BABA",
      titleEn: "Flip Flappers",
      titleJa: "フリップフラッパーズ",
      score: 7.5,
    },
  ],
  "2017": [
    {
      titleZh: "少年锦衣卫",
      titleEn: "Girls' Last Tour",
      titleJa: "少女終末旅行",
      score: 8.1,
    },
    {
      titleZh: "狐妖小红娘 千颜篇",
      titleEn: "Made in Abyss",
      titleJa: "メイドインアビス",
      score: 8.2,
    },
    {
      titleZh: "快把我哥带走",
      titleEn: "Miss Kobayashi's Dragon Maid",
      titleJa: "小林さんちのメイドラゴン",
      score: 7.4,
    },
    {
      titleZh: "全职高手",
      titleEn: "Kakegurui",
      titleJa: "賭ケグルイ",
      score: 7,
    },
    {
      titleZh: "中国唱诗班",
      titleEn: "WorldEnd",
      titleJa: "終末なにしてますか？忙しいですか？救ってもらっていいですか？",
      score: 7.6,
    },
    {
      titleZh: "我是江小白",
      titleEn: "Tsuki ga Kirei",
      titleJa: "月がきれい",
      score: 7.9,
    },
    {
      titleZh: "星学院III 潘朵拉秘境",
      titleEn: "Sagrada Reset",
      titleJa: "サクラダリセット",
      score: 7.9,
    },
    {
      titleZh: "一人之下 第二季",
      titleEn: "BanG Dream!",
      titleJa: "BanG Dream!",
      score: 6.4,
    },
    {
      titleZh: "画江湖之不良人 第二季",
      titleEn: "Saga of Tanya the Evil",
      titleJa: "幼女戦記",
      score: 7.2,
    },
    {
      titleZh: "少年锦衣卫",
      titleEn: "Little Witch Academia",
      titleJa: "リトルウィッチアカデミア",
      score: 7.7,
    },
  ],
  "2018": [
    {
      titleZh: "迷域行者",
      titleEn: "Yuru Camp△",
      titleJa: "ゆるキャン△",
      score: 8.2,
    },
    {
      titleZh: "茶啊二中4",
      titleEn: "Grand Blue",
      titleJa: "ぐらんぶる",
      score: 7.8,
    },
    {
      titleZh: "非人哉",
      titleEn: "Umamusume Pretty Derby",
      titleJa: "ウマ娘 プリティーダービー",
      score: 7,
    },
    {
      titleZh: "刺客伍六七",
      titleEn: "Violet Evergarden",
      titleJa: "ヴァイオレット・エヴァーガーデン",
      score: 7.5,
    },
    {
      titleZh: "魔道祖师 前尘篇",
      titleEn: "Run with the Wind",
      titleJa: "風が強く吹いている",
      score: 8.3,
    },
    {
      titleZh: "侠肝义胆沈剑心",
      titleEn: "Shoujo☆Kageki Revue Starlight",
      titleJa: "少女☆歌劇 レヴュースタァライト",
      score: 7.9,
    },
    {
      titleZh: "0号宿舍",
      titleEn: "Teasing Master Takagi-san",
      titleJa: "からかい上手の高木さん",
      score: 7.5,
    },
    {
      titleZh: "星辰变",
      titleEn: "Zombie Land Saga",
      titleJa: "ゾンビランドサガ",
      score: 7.8,
    },
    {
      titleZh: "画江湖之不良人3",
      titleEn: "A Place Further Than the Universe",
      titleJa: "宇宙よりも遠い場所",
      score: 8.2,
    },
    {
      titleZh: "少年歌行",
      titleEn: "Rascal Does Not Dream of Bunny Girl Senpai",
      titleJa: "青春ブタ野郎はバニーガール先輩の夢を見ない",
      score: 7.4,
    },
    {
      titleZh: "西行纪",
      titleEn: "Goblin Slayer",
      titleJa: "ゴブリンスレイヤー",
      score: 6.7,
    },
    {
      titleZh: "通灵妃",
      titleEn: "Bloom into You",
      titleJa: "やがて君になる",
      score: 7.8,
    },
  ],
  "2019": [
    {
      titleZh: "凹凸世界3",
      titleEn: "Vinland Saga",
      titleJa: "ヴィンランド・サガ",
      score: 8.3,
    },
    {
      titleZh: "狐妖小红娘 竹业篇",
      titleEn: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunōsen",
      titleJa: "かぐや様は告らせたい～天才たちの恋愛頭脳戦～",
      score: 7.8,
    },
    {
      titleZh: "灵笼",
      titleEn: "The Demon Girl Next Door",
      titleJa: "まちカドまぞく",
      score: 7.5,
    },
    {
      titleZh: "斗破苍穹3",
      titleEn: "Demon Slayer",
      titleJa: "鬼滅の刃",
      score: 7.3,
    },
    {
      titleZh: "汉化日记",
      titleEn: "Fire Force",
      titleJa: "炎炎ノ消防隊",
      score: 6.5,
    },
    {
      titleZh: "万国志",
      titleEn: "Wasteful Days of High School Girls",
      titleJa: "女子高生の無駄づかい",
      score: 7.6,
    },
    {
      titleZh: "伍六七2 最强发型师",
      titleEn: "Cautious Hero: ",
      titleJa: "慎重勇者～この勇者が俺TUEEEくせに慎重すぎる～",
      score: 6.9,
    },
    {
      titleZh: "斗罗大陆",
      titleEn: "Angels' 3Piece!",
      titleJa: "私に天使が舞い降りた！",
      score: 7.3,
    },
    {
      titleZh: "我家大师兄脑子有坑",
      titleEn: "Boogiepop and Others",
      titleJa: "ブギーポップは笑わない",
      score: 7.3,
    },
    {
      titleZh: "请吃红小豆吧",
      titleEn: "How Clumsy You Are, Miss Ueno",
      titleJa: "上野さんは不器用",
      score: 6.5,
    },
  ],
  "2020": [
    {
      titleZh: "我的三体 章北海传",
      titleEn: "Ishuzoku Reviewers",
      titleJa: "異種族レビュアーズ",
      score: 7.7,
    },
    {
      titleZh: "万圣街",
      titleEn: "Wandering Witch: The Journey of Elaina",
      titleJa: "魔女の旅々",
      score: 7.1,
    },
    {
      titleZh: "大理寺日志",
      titleEn: "Adachi and Shimamura",
      titleJa: "安達としまむら",
      score: 7.3,
    },
    {
      titleZh: "狐妖小红娘 金晨曦篇",
      titleEn: "ID:INVADED",
      titleJa: "ID:INVADED イド：インヴェイデッド",
      score: 7.5,
    },
    {
      titleZh: "天宝伏妖录",
      titleEn: "Keep Your Hands Off Eizouken!",
      titleJa: "映像研には手を出すな！",
      score: 8.1,
    },
    {
      titleZh: "有药",
      titleEn: "Jujutsu Kaisen",
      titleJa: "呪術廻戦",
      score: 7.1,
    },
    {
      titleZh: "雾山五行",
      titleEn: "Tonikawa: Over the Moon For You",
      titleJa: "トニカクカワイイ",
      score: 6.3,
    },
    {
      titleZh: "凡人修仙传",
      titleEn: "Kakushigoto",
      titleJa: "かくしごと",
      score: 7.7,
    },
    {
      titleZh: "灵笼 特别篇",
      titleEn: "In/Spectre",
      titleJa: "虚構推理",
      score: 6.3,
    },
    {
      titleZh: "汉化日记2",
      titleEn: "Koisuru Asteroid",
      titleJa: "恋する小惑星",
      score: 6.9,
    },
    {
      titleZh: "天官赐福",
      titleEn: "Our Last Crusade or the Rise of a New World",
      titleJa: "キミと僕の最後の戦場、あるいは世界が始まる聖戦",
      score: 5.5,
    },
    {
      titleZh: "元龙",
      titleEn: "Dropkick on My Devil!",
      titleJa: "邪神ちゃんドロップキック’",
      score: 7.3,
    },
    {
      titleZh: "仙王的日常生活",
      titleEn: "My Next Life as a Villainess: All Routes Lead to Doom!",
      titleJa: "乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…",
      score: 6.5,
    },
    {
      titleZh: "百妖谱",
      titleEn: "Sleepy Princess in the Demon Castle",
      titleJa: "魔王城でおやすみ",
      score: 7,
    },
    {
      titleZh: "一念永恒",
      titleEn: "Rent-A-Girlfriend",
      titleJa: "彼女、お借りします",
      score: 5.8,
    },
      {
      titleZh: "穿书自救指南",
      titleEn: "Rent-A-Girlfriend",
      titleJa: "彼女、お借りします",
      score: 5.8,
    },
  ],
  "2021": [
    {
      titleZh: "觉醒年代",
      titleEn: "86 -Eighty-Six-",
      titleJa: "86―エイティシックス―",
      score: 7.6,
    },
    {
      titleZh: "山海情",
      titleEn: "Mushoku Tensei: Jobless Reincarnation",
      titleJa: "無職転生 ～異世界行ったら本気だす～",
      score: 7.9,
    },
    {
      titleZh: "功勋",
      titleEn: "Redo of Healer",
      titleJa: "回復術士のやり直し",
      score: 6.2,
    },
    {
      titleZh: "爱很美味",
      titleEn: "Odd Taxi",
      titleJa: "オッドタクシー",
      score: 8.5,
    },
    {
      titleZh: "山河令",
      titleEn: "I’ve Been Killing Slimes for 300 Years and Maxed Out My Level",
      titleJa: "スライム倒して300年、知らないうちにレベルMAXになってました",
      score: 6.3,
    },
    {
      titleZh: "御赐小仵作",
      titleEn: "Sonny Boy",
      titleJa: "Sonny Boy",
      score: 7.8,
    },
    {
      titleZh: "终极笔记",
      titleEn: "Horimiya",
      titleJa: "ホリミヤ",
      score: 6.8,
    },
    {
      titleZh: "叛逆者",
      titleEn: "Combatants Will Be Dispatched!",
      titleJa: "戦闘員、派遣します！",
      score: 6.3,
    },
    {
      titleZh: "乔家的儿女",
      titleEn: "Komi Can't Communicate",
      titleJa: "古見さんは、コミュ症です。",
      score: 7,
    },
    {
      titleZh: "司藤",
      titleEn: "Wonder Egg Priority",
      titleJa: "ワンダーエッグ・プライオリティ",
      score: 6.8,
    },
    {
      titleZh: "赘婿",
      titleEn: "Remake Our Life!",
      titleJa: "ぼくたちのリメイク",
      score: 6.4,
    },
    {
      titleZh: "你是我的荣耀",
      titleEn: "Mieruko-chan",
      titleJa: "見える子ちゃん",
      score: 6.8,
    },
    {
      titleZh: "周生如故",
      titleEn: "The Dungeon of Black Company",
      titleJa: "迷宮ブラックカンパニー",
      score: 6.7,
    },
    {
      titleZh: "扫黑风暴",
      titleEn: "Megami-ryō no Ryōbo-kun",
      titleJa: "女神寮の寮母くん。",
      score: 5.8,
    },
  ],
  "2022": [
    {
      titleZh: "大山的女儿",
      titleEn: "Bocchi the Rock!",
      titleJa: "ぼっち・ざ・ろっく！",
      score: 8.4,
    },
    {
      titleZh: "风吹半夏",
      titleEn: "Lycoris Recoil",
      titleJa: "リコリス・リコイル",
      score: 6.3,
    },
    {
      titleZh: "警察荣誉",
      titleEn: "The Eminence in Shadow",
      titleJa: "陰の実力者になりたくて！",
      score: 7.1,
    },
    {
      titleZh: "人世间",
      titleEn: "Summer Time Rendering",
      titleJa: "サマータイムレンダ",
      score: 7.5,
    },
    {
      titleZh: "风起陇西",
      titleEn: "Uncle from Another World",
      titleJa: "異世界おじさん",
      score: 7.6,
    },
    {
      titleZh: "梦华录",
      titleEn: "My Dress-Up Darling",
      titleJa: "その着せ替え人形は恋をする",
      score: 7.2,
    },
    {
      titleZh: "开端",
      titleEn: "Call of the Night",
      titleJa: "よふかしのうた",
      score: 7.4,
    },
    {
      titleZh: "苍兰诀",
      titleEn: "Aharen Is Indecipherable",
      titleJa: "阿波連さんははかれない",
      score: 6.4,
    },
    {
      titleZh: "唐朝诡事录",
      titleEn: "SPY×FAMILY",
      titleJa: "SPY×FAMILY",
      score: 7.2,
    },
    {
      titleZh: "异物志",
      titleEn: "Immoral Guild",
      titleJa: "不徳のギルド",
      score: 7.1,
    },
    {
      titleZh: "星汉灿烂",
      titleEn: "Chainsaw Man",
      titleJa: "チェンソーマン",
      score: 6.9,
    },
    {
      titleZh: "雪中悍刀行",
      titleEn: "Akebi's Sailor Uniform",
      titleJa: "明日ちゃんのセーラー服",
      score: 7.5,
    },
    {
      titleZh: "卿卿日常",
      titleEn: "Engage Kiss",
      titleJa: "エンゲージ・キス",
      score: 6.9,
    },
    {
      titleZh: "县委大院",
      titleEn: "Sasaki and Miyano",
      titleJa: "佐々木と宮野",
      score: 7.8,
    },
  ],
  "2023": [
    {
      titleZh: "漫长的季节",
      titleEn: "Frieren: Beyond Journey's End",
      titleJa: "葬送のフリーレン",
      score: 8.5,
    },
    {
      titleZh: "狂飙",
      titleEn: "The Apothecary Diaries",
      titleJa: "薬屋のひとりごと",
      score: 7.5,
    },
    {
      titleZh: "三体",
      titleEn: "BanG Dream! It's MyGO!!!!!",
      titleJa: "BanG Dream! It's MyGO!!!!!",
      score: 8.1,
    },
    {
      titleZh: "去有风的地方",
      titleEn: "The Dangers in My Heart",
      titleJa: "僕の心のヤバイやつ",
      score: 7.8,
    },
    {
      titleZh: "莲花楼",
      titleEn: "The 100 Girlfriends Who Really Love You",
      titleJa: "君のことが大大大大大好きな100人の彼女",
      score: 7.3,
    },
    {
      titleZh: "繁城之下",
      titleEn: "Onimai: I'm Now Your Sister!",
      titleJa: "お兄ちゃんはおしまい！",
      score: 7.6,
    },
    {
      titleZh: "古相思曲",
      titleEn: "Skip and Loafer",
      titleJa: "スキップとローファー",
      score: 7.7,
    },
    {
      titleZh: "鹊刀门传奇",
      titleEn: "Pokémon Horizons",
      titleJa: "ポケットモンスター 地平線",
      score: 7.5,
    },
    {
      titleZh: "我有一个朋友",
      titleEn: "Shangri-La Frontier",
      titleJa: "シャングリラ・フロンティア ～クソゲーハンター、神ゲーに挑む～",
      score: 6.4,
    },
    {
      titleZh: "问心",
      titleEn: "KamiKatsu: Working for God in a Godless World",
      titleJa: "神無き世界のカミサマ活動",
      score: 6.8,
    },
    {
      titleZh: "爱情而已",
      titleEn: "Oshi no Ko",
      titleJa: "【推しの子】",
      score: 7.4,
    },
    {
      titleZh: "装腔启示录",
      titleEn: "Heavenly Delusion",
      titleJa: "天国大魔境",
      score: 7.8,
    },
    {
      titleZh: "异人之下",
      titleEn: "Farming Life in Another World",
      titleJa: "異世界のんびり農家",
      score: 6.4,
    },
  ],
  "2024": [
    {
      titleZh: "山花烂漫时",
      titleEn: "Too Many Losing Heroines!",
      titleJa: "負けヒロインが多すぎる！",
      score: 8,
    },
    {
      titleZh: "我的阿勒泰",
      titleEn: "GIRLS BAND CRY",
      titleJa: "ガールズバンドクライ",
      score: 7.6,
    },
    {
      titleZh: "问苍茫",
      titleEn: "Dandadan",
      titleJa: "ダンダダン",
      score: 7.5,
    },
    {
      titleZh: "繁花",
      titleEn: "Gimai Seikatsu",
      titleJa: "義妹生活",
      score: 7.3,
    },
    {
      titleZh: "唐朝诡事录之西行",
      titleEn: "Delicious in Dungeon",
      titleJa: "ダンジョン飯",
      score: 7.8,
    },
    {
      titleZh: "天行健",
      titleEn: "Solo Leveling",
      titleJa: "俺だけレベルアップな件",
      score: 6.5,
    },
    {
      titleZh: "小巷人家",
      titleEn: "Shoshimin",
      titleJa: "小市民シリーズ",
      score: 6.1,
    },
    {
      titleZh: "不够善良的我们",
      titleEn: "Gushing over Magical Girls",
      titleJa: "魔法少女にあこがれて",
      score: 7,
    },
    { titleZh: "边水往事", titleEn: "Blue Box", titleJa: "青の箱", score: 6.8 },
    {
      titleZh: "大江大河之岁月如歌",
      titleEn: "2.5 Dimensional Seduction",
      titleJa: "2.5次元の誘惑",
      score: 6.7,
    },
    {
      titleZh: "庆余年2",
      titleEn: "Orb: On the Movements of the Earth",
      titleJa: "地球の運動について",
      score: 6.2,
    },
    {
      titleZh: "玫瑰的故事",
      titleEn: "Oblivion Battery",
      titleJa: "忘却バッテリー",
      score: 7.9,
    },
    {
      titleZh: "追风者",
      titleEn: "Alya Sometimes Hides Her Feelings in Russian",
      titleJa: "時々ボソッとロシア語でデレる隣のアーリャさん",
      score: 5.6,
    },
    {
      titleZh: "春色寄情人",
      titleEn: "Fisherman's Songs",
      titleJa: "ネガポジアングラー",
      score: 7.3,
    },
    {
      titleZh: "南来北往",
      titleEn: "Atri: My Dear Moments",
      titleJa: "ATRI -My Dear Moments-",
      score: 6.3,
    },
    {
      titleZh: "墨雨云间",
      titleEn: "Tying the Knot with an Amagami Sister",
      titleJa: "甘神さんちの縁結び",
      score: 5.9,
    },
  ],
  "2025": [
    {
      titleZh: "唐朝诡事录之长安",
      titleEn: "GNOSIA",
      titleJa: "グノーシア",
      score: 7.5,
    },
    {
      titleZh: "沉默的荣耀",
      titleEn: "Chitose Is in the Ramune Bottle",
      titleJa: "千歳くんはラムネ瓶のなか",
      score: 4.1,
    },
    {
      titleZh: "无尽的尽头",
      titleEn: "There's No Freaking Way I'll be Your Lover! Unless...",
      titleJa:
        "わたしが恋人になれるわけないじゃん、ムリムリ！（※ムリじゃなかった!?）",
      score: 7.4,
    },
    {
      titleZh: "异人之下之决战！碧游村",
      titleEn: "Medalist",
      titleJa: "メダリスト",
      score: 8,
    },
    {
      titleZh: "九重紫",
      titleEn: "Ruri Rocks",
      titleJa: "瑠璃の宝石",
      score: 8.1,
    },
    {
      titleZh: "国色芳华",
      titleEn: "Apocalypse Hotel",
      titleJa: "アポカリプスホテル",
      score: 8.2,
    },
    {
      titleZh: "沙尘暴",
      titleEn: "Nukitashi THE ANIMATION",
      titleJa: "ぬきたし THE ANIMATION",
      score: 6.7,
    },
    {
      titleZh: "忘了我记得",
      titleEn: "Food for the Soul",
      titleJa: "日々は過ぎれど飯うまし",
      score: 7.7,
    },
    {
      titleZh: "藏海传",
      titleEn: "Tojima Tanzaburo Wants to Be a Masked Rider",
      titleJa: "東島丹三郎は仮面ライダーになりたい",
      score: 6.9,
    },
    {
      titleZh: "雁回时",
      titleEn: "The Fragrant Flower Blooms with Dignity",
      titleJa: "薫る花は凛と咲く",
      score: 7,
    },
    {
      titleZh: "余烬之上",
      titleEn: "Uma Musume Cinderella Gray",
      titleJa: "ウマ娘 シンデレラグレイ",
      score: 7.5,
    },
    {
      titleZh: "凡人修仙传",
      titleEn: "Gachiakuta",
      titleJa: "ガチアクタ",
      score: 6.2,
    },
  ],
}

// 添加一个辅助函数来根据语言获取动画标题
export const getAnimeTitle = (anime: AnimeItem, language: Language): string => {
  return anime[
    ("title" +
      language.charAt(0).toUpperCase() +
      language.slice(1)) as keyof AnimeItem
  ] as string
}

export default data
