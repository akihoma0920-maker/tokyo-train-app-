// Data for Tokyo Train Transfer & Conversation Practice App

// Conversation Scenarios
const conversationScenarios = {
    1: {
        title: "Scenario 1: Basic Question",
        titleJp: "シナリオ1: 基本的な質問",
        isDirect: true, // Direct route, no transfer
        dialogues: [
            {
                type: "question",
                speaker: "A (You)",
                text: "Could you tell me how to get to Asakusa?",
                textJp: "<ruby>浅草<rt>あさくさ</rt></ruby>への<ruby>行<rt>い</rt></ruby>き<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えていただけますか？",
                vocabulary: ["get to", "Asakusa"]
            },
            {
                type: "answer",
                speaker: "B (Station Staff)",
                text: "Take the Ginza line.",
                textJp: "<ruby>銀座線<rt>ぎんざせん</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ってください。",
                vocabulary: ["Take", "Ginza line"]
            }
        ],
        vocabulary: [
            {
                word: "get to",
                meaning: "～に<ruby>着<rt>つ</rt></ruby>く、～に<ruby>行<rt>い</rt></ruby>く",
                example: "How do I get to Tokyo Station?"
            },
            {
                word: "take",
                meaning: "（<ruby>電車<rt>でんしゃ</rt></ruby>・バスなどに）<ruby>乗<rt>の</rt></ruby>る",
                example: "Take the Yamanote line."
            }
        ]
    },
    2: {
        title: "Scenario 2: Polite Conversation",
        titleJp: "シナリオ2: 丁寧な会話",
        isDirect: true, // Direct route, no transfer
        dialogues: [
            {
                type: "question",
                speaker: "A (You)",
                text: "Excuse me. Could you tell me how to get to Asakusa?",
                textJp: "すみません。<ruby>浅草<rt>あさくさ</rt></ruby>への<ruby>行<rt>い</rt></ruby>き<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えていただけますか？",
                vocabulary: ["Excuse me", "Could you"]
            },
            {
                type: "answer",
                speaker: "B (Station Staff)",
                text: "Sure. Take the Ginza line.",
                textJp: "はい。<ruby>銀座線<rt>ぎんざせん</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ってください。",
                vocabulary: ["Sure"]
            },
            {
                type: "question",
                speaker: "A (You)",
                text: "Thank you.",
                textJp: "ありがとうございます。",
                vocabulary: ["Thank you"]
            }
        ],
        vocabulary: [
            {
                word: "Excuse me",
                meaning: "すみません",
                example: "Excuse me, where is the platform?"
            },
            {
                word: "Could you",
                meaning: "～していただけますか（<ruby>丁寧<rt>ていねい</rt></ruby>な<ruby>依頼<rt>いらい</rt></ruby>）",
                example: "Could you help me?"
            },
            {
                word: "Sure",
                meaning: "はい、いいですよ",
                example: "Sure, I can help you."
            }
        ]
    },
    3: {
        title: "Scenario 3: Transfer Route",
        titleJp: "シナリオ3: 乗り換えルート",
        isDirect: false, // Transfer route
        dialogues: [
            {
                type: "question",
                speaker: "A (You)",
                text: "Could you tell me how to get to Asakusa?",
                textJp: "<ruby>浅草<rt>あさくさ</rt></ruby>への<ruby>行<rt>い</rt></ruby>き<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えていただけますか？",
                vocabulary: ["get to"]
            },
            {
                type: "answer",
                speaker: "B (Station Staff)",
                text: "Take the Yamanote line to Ueno and change trains there.",
                textJp: "<ruby>山手線<rt>やまのてせん</rt></ruby>で<ruby>上野<rt>うえの</rt></ruby>まで<ruby>行<rt>い</rt></ruby>って、そこで<ruby>乗<rt>の</rt></ruby>りかえてください。",
                vocabulary: ["Yamanote line", "change trains"]
            },
            {
                type: "question",
                speaker: "A (You)",
                text: "Which line should I take from Ueno?",
                textJp: "<ruby>上野<rt>うえの</rt></ruby>からどの<ruby>線<rt>せん</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ればいいですか？",
                vocabulary: ["Which line", "should I take"]
            },
            {
                type: "answer",
                speaker: "B (Station Staff)",
                text: "Take the Ginza line.",
                textJp: "<ruby>銀座線<rt>ぎんざせん</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ってください。",
                vocabulary: ["Ginza line"]
            }
        ],
        vocabulary: [
            {
                word: "change trains",
                meaning: "<ruby>乗<rt>の</rt></ruby>りかえる",
                example: "Change trains at Shibuya."
            },
            {
                word: "Which line",
                meaning: "どの<ruby>線<rt>せん</rt></ruby>",
                example: "Which line goes to Shinjuku?"
            },
            {
                word: "should I",
                meaning: "～すればいいですか",
                example: "Which platform should I go to?"
            }
        ]
    },
    4: {
        title: "Scenario 4: Complete Polite Transfer",
        titleJp: "シナリオ4: 完全な丁寧な乗り換え会話",
        isDirect: false, // Transfer route
        dialogues: [
            {
                type: "question",
                speaker: "A (You)",
                text: "Excuse me. Could you tell me how to get to Asakusa?",
                textJp: "すみません。<ruby>浅草<rt>あさくさ</rt></ruby>への<ruby>行<rt>い</rt></ruby>き<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えていただけますか？",
                vocabulary: ["Excuse me", "Could you"]
            },
            {
                type: "answer",
                speaker: "B (Station Staff)",
                text: "Sure. Take the Yamanote line to Ueno and change trains there.",
                textJp: "はい。<ruby>山手線<rt>やまのてせん</rt></ruby>で<ruby>上野<rt>うえの</rt></ruby>まで<ruby>行<rt>い</rt></ruby>って、そこで<ruby>乗<rt>の</rt></ruby>りかえてください。",
                vocabulary: ["Sure", "change trains"]
            },
            {
                type: "question",
                speaker: "A (You)",
                text: "Which line should I take from Ueno?",
                textJp: "<ruby>上野<rt>うえの</rt></ruby>からどの<ruby>線<rt>せん</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ればいいですか？",
                vocabulary: ["Which line"]
            },
            {
                type: "answer",
                speaker: "B (Station Staff)",
                text: "Take the Ginza line.",
                textJp: "<ruby>銀座線<rt>ぎんざせん</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ってください。",
                vocabulary: ["Take", "Ginza line"]
            },
            {
                type: "question",
                speaker: "A (You)",
                text: "Thank you.",
                textJp: "ありがとうございます。",
                vocabulary: ["Thank you"]
            }
        ],
        vocabulary: [
            {
                word: "Excuse me",
                meaning: "すみません",
                example: "Excuse me, is this the right platform?"
            },
            {
                word: "change trains",
                meaning: "<ruby>乗<rt>の</rt></ruby>りかえる",
                example: "You need to change trains at Tokyo Station."
            },
            {
                word: "Thank you",
                meaning: "ありがとう",
                example: "Thank you very much for your help."
            }
        ]
    }
};

// Practice Questions for Multiple Choice
const practiceQuestions = {
    1: [
        {
            question: "How do you politely ask for directions?",
            questionJp: "丁寧に道を尋ねるにはどう言いますか？",
            options: [
                "Hey, where is Asakusa?",
                "Excuse me. Could you tell me how to get to Asakusa?",
                "Tell me where Asakusa is.",
                "I want to go to Asakusa."
            ],
            correct: 1,
            explanation: "'Excuse me' and 'Could you' make the request polite."
        }
    ],
    2: [
        {
            question: "What is the polite way to respond when someone asks for help?",
            questionJp: "誰かが助けを求めたとき、丁寧に返答するには？",
            options: [
                "Yeah, whatever.",
                "I don't know.",
                "Sure. I can help you.",
                "Maybe."
            ],
            correct: 2,
            explanation: "'Sure' is a friendly and positive response."
        }
    ],
    3: [
        {
            question: "Complete: 'Take the Yamanote line to Ueno and _____ trains there.'",
            questionJp: "完成させてください：'山手線で上野まで行って、そこで_____。'",
            options: [
                "buy",
                "change",
                "find",
                "leave"
            ],
            correct: 1,
            explanation: "'Change trains' means to switch from one train to another."
        },
        {
            question: "How do you ask about which train to take?",
            questionJp: "どの電車に乗るか尋ねるには？",
            options: [
                "What train is this?",
                "Which line should I take?",
                "Where is the train?",
                "Is this a train?"
            ],
            correct: 1,
            explanation: "'Which line should I take?' asks for specific train line information."
        }
    ],
    4: [
        {
            question: "Put these in order: 1) Thank you  2) Excuse me  3) Take the Ginza line",
            questionJp: "順番に並べてください",
            options: [
                "1, 2, 3",
                "2, 3, 1",
                "3, 2, 1",
                "2, 1, 3"
            ],
            correct: 1,
            explanation: "Start with 'Excuse me', give directions, then say 'Thank you'."
        }
    ]
};

// Fill in the Blank Questions
const fillBlankQuestions = {
    1: [
        {
            sentence: "Could you tell me how to _____ to Asakusa?",
            answer: "get",
            hint: "到着する、行く",
            explanation: "'get to' means to arrive at a place."
        }
    ],
    2: [
        {
            sentence: "_____ me. Could you tell me how to get to Asakusa?",
            answer: "Excuse",
            hint: "すみません",
            explanation: "'Excuse me' is a polite way to start a conversation."
        }
    ],
    3: [
        {
            sentence: "Take the Yamanote line to Ueno and _____ trains there.",
            answer: "change",
            hint: "乗り換える",
            explanation: "'change trains' means to switch trains."
        },
        {
            sentence: "_____ line should I take from Ueno?",
            answer: "Which",
            hint: "どの",
            explanation: "'Which line' asks about specific train lines."
        }
    ],
    4: [
        {
            sentence: "_____ you. (expressing gratitude)",
            answer: "Thank",
            hint: "ありがとう",
            explanation: "'Thank you' expresses gratitude."
        }
    ]
};

// Railway Vocabulary
const railwayVocabulary = [
    {
        english: "Station",
        furigana: "えき",
        japanese: "駅",
        example: "Tokyo Station is very big."
    },
    {
        english: "Platform",
        furigana: "ホーム",
        japanese: "ホーム",
        example: "Go to platform 3."
    },
    {
        english: "Transfer",
        furigana: "のりかえ",
        japanese: "乗り換え",
        example: "Transfer at Shibuya."
    },
    {
        english: "Ticket",
        furigana: "きっぷ",
        japanese: "切符",
        example: "Buy a ticket first."
    },
    {
        english: "Train",
        furigana: "でんしゃ",
        japanese: "電車",
        example: "The train is coming."
    },
    {
        english: "Line",
        furigana: "せん",
        japanese: "線",
        example: "Take the Yamanote line."
    },
    {
        english: "Exit",
        furigana: "でぐち",
        japanese: "出口",
        example: "Use the north exit."
    },
    {
        english: "Entrance",
        furigana: "いりぐち",
        japanese: "入口",
        example: "The entrance is over there."
    },
    {
        english: "Fare",
        furigana: "うんちん",
        japanese: "運賃",
        example: "The fare is 200 yen."
    },
    {
        english: "Destination",
        furigana: "もくてきち",
        japanese: "目的地",
        example: "What is your destination?"
    },
    {
        english: "Timetable",
        furigana: "じこくひょう",
        japanese: "時刻表",
        example: "Check the timetable."
    },
    {
        english: "Express",
        furigana: "きゅうこう",
        japanese: "急行",
        example: "Take the express train."
    }
];

// Tokyo Locations Data
const locations = [
    {
        id: "akihabara",
        name: "Akihabara",
        nameJp: "秋葉原",
        image: "https://www.genspark.ai/api/files/s/NxVhFyXP"
    },
    {
        id: "tokyo",
        name: "Tokyo",
        nameJp: "東京",
        image: "https://www.genspark.ai/api/files/s/8zZtfgrc"
    },
    {
        id: "shinjuku",
        name: "Shinjuku",
        nameJp: "新宿",
        image: "https://www.genspark.ai/api/files/s/BmpWxr2R"
    },
    {
        id: "harajuku",
        name: "Harajuku",
        nameJp: "原宿",
        image: "https://www.genspark.ai/api/files/s/sJAOOPks"
    },
    {
        id: "jiyugaoka",
        name: "Jiyugaoka",
        nameJp: "自由が丘",
        image: "https://www.genspark.ai/api/files/s/6V44gRc9"
    },
    {
        id: "shibuya",
        name: "Shibuya",
        nameJp: "渋谷",
        image: "https://www.genspark.ai/api/files/s/gNHSSaLh"
    },
    {
        id: "ginza",
        name: "Ginza",
        nameJp: "銀座",
        image: "https://www.genspark.ai/api/files/s/Rtrk0eqW"
    },
    {
        id: "shimbashi",
        name: "Shimbashi",
        nameJp: "新橋",
        image: "https://www.genspark.ai/api/files/s/Lk07hXU1"
    },
    {
        id: "odaiba",
        name: "Odaiba",
        nameJp: "お台場",
        image: "https://www.genspark.ai/api/files/s/w3qRWOQH"
    },
    {
        id: "roppongi",
        name: "Roppongi",
        nameJp: "六本木",
        image: "https://www.genspark.ai/api/files/s/yxqOExBf"
    },
    {
        id: "shimokitazawa",
        name: "Shimokitazawa",
        nameJp: "下北沢",
        image: "https://www.genspark.ai/api/files/s/BY0fZOWz"
    },
    {
        id: "asakusa",
        name: "Asakusa",
        nameJp: "浅草",
        image: "https://www.genspark.ai/api/files/s/uBFJ1pvS"
    },
    {
        id: "ueno",
        name: "Ueno",
        nameJp: "上野",
        image: "https://www.genspark.ai/api/files/s/r7ODVwCF"
    }
];

// Train Routes Data
const trainRoutes = {
    "akihabara-tokyo": {
        lines: ["JR Yamanote Line", "JR Keihin-Tohoku Line"],
        time: 3,
        fare: 140,
        transfers: 0,
        platform: 3
    },
    "tokyo-shinjuku": {
        lines: ["JR Chuo Line"],
        time: 15,
        fare: 200,
        transfers: 0,
        platform: 1
    },
    "shinjuku-harajuku": {
        lines: ["JR Yamanote Line"],
        time: 4,
        fare: 140,
        transfers: 0,
        platform: 15
    },
    "shibuya-harajuku": {
        lines: ["JR Yamanote Line"],
        time: 2,
        fare: 140,
        transfers: 0,
        platform: 3
    },
    "tokyo-ginza": {
        lines: ["Tokyo Metro Marunouchi Line"],
        time: 2,
        fare: 170,
        transfers: 0,
        platform: "B4"
    },
    "ginza-shimbashi": {
        lines: ["Tokyo Metro Ginza Line"],
        time: 2,
        fare: 170,
        transfers: 0,
        platform: "B3"
    },
    "shimbashi-roppongi": {
        lines: ["Toei Oedo Line"],
        time: 7,
        fare: 180,
        transfers: 0,
        platform: "B5"
    },
    "shibuya-roppongi": {
        lines: ["Tokyo Metro Hibiya Line"],
        time: 5,
        fare: 170,
        transfers: 0,
        platform: "B2"
    },
    "ueno-asakusa": {
        lines: ["Tokyo Metro Ginza Line"],
        time: 5,
        fare: 170,
        transfers: 0,
        platform: "B1"
    },
    "tokyo-ueno": {
        lines: ["JR Yamanote Line", "JR Keihin-Tohoku Line"],
        time: 6,
        fare: 140,
        transfers: 0,
        platform: 5
    }
};
