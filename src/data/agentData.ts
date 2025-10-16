export const agents: Agent[] = [
    // 数学类
    {
        id: '1',
        name: '数学小助教',
        intro: '帮助小学生解决数学难题，提供详细解题步骤和思路',
        coverUrl: '/covers/math.svg',
        type: 'forTeach',
        link: '/agents/1',
        tag: '数学 解题 计算'
    },
    {
        id: '2',
        name: '几何图形解析',
        intro: '通过动画演示几何图形性质，帮助理解空间关系',
        coverUrl: '/covers/math.svg',
        type: 'forLearn',
        link: '/agents/2',
        tag: '几何 图形 空间'
    },
    {
        id: '3',
        name: '应用题解题大师',
        intro: '拆解复杂应用题，教你找等量关系，轻松列算式',
        coverUrl: '/covers/math.svg',
        type: 'forTeach',
        link: '/agents/3',
        tag: '应用题 数学 逻辑'
    },
    {
        id: '4',
        name: '数学思维训练',
        intro: '通过趣味游戏锻炼数学思维，提升逻辑推理能力',
        coverUrl: '/covers/math.svg',
        type: 'forLearn',
        link: '/agents/4',
        tag: '思维 逻辑 游戏'
    },
    {
        id: '5',
        name: '分数小数转换器',
        intro: '可视化展示分数与小数转换过程，理解换算原理',
        coverUrl: '/covers/math.svg',
        type: 'forTeach',
        link: '/agents/5',
        tag: '分数 小数 换算'
    },

    // 语文类
    {
        id: '6',
        name: '语文学习助手',
        intro: '辅助语文学习，包括字词解释、阅读理解指导和写作技巧',
        coverUrl: '/covers/chinese.svg',
        type: 'forLearn',
        link: '/agents/6',
        tag: '语文 阅读 写作'
    },
    {
        id: '7',
        name: '成语故事大全',
        intro: '讲解成语来源和用法，通过故事加深记忆和理解',
        coverUrl: '/covers/chinese.svg',
        type: 'forLearn',
        link: '/agents/7',
        tag: '成语 故事 语文'
    },
    {
        id: '8',
        name: '标点符号导师',
        intro: '专项训练标点符号使用，纠正常见标点错误',
        coverUrl: '/covers/chinese.svg',
        type: 'forTeach',
        link: '/agents/8',
        tag: '标点 语法 语文'
    },
    {
        id: '9',
        name: '近义词辨析',
        intro: '详细区分易混淆近义词，掌握使用场景和细微差别',
        coverUrl: '/covers/chinese.svg',
        type: 'forTeach',
        link: '/agents/9',
        tag: '近义词 词汇 语文'
    },
    {
        id: '10',
        name: '古诗赏析助手',
        intro: '解析古诗含义、背景和艺术特色，提升鉴赏能力',
        coverUrl: '/covers/chinese.svg',
        type: 'forLearn',
        link: '/agents/10',
        tag: '古诗 文学 赏析'
    },

    // 英语类
    {
        id: '11',
        name: '英语发音教练',
        intro: '纠正英语发音，练习口语表达，提高听力理解能力',
        coverUrl: '/covers/english.svg',
        type: 'forTeach',
        link: '/agents/11',
        tag: '英语 发音 口语'
    },
    {
        id: '12',
        name: '单词记忆大师',
        intro: '通过词根词缀和联想记忆法，帮助高效背诵单词',
        coverUrl: '/covers/english.svg',
        type: 'forLearn',
        link: '/agents/12',
        tag: '单词 记忆 英语'
    },
    {
        id: '13',
        name: '语法错误检查',
        intro: '检测英语句子语法错误，提供修改建议和语法讲解',
        coverUrl: '/covers/english.svg',
        type: 'forEvaluate',
        link: '/agents/13',
        tag: '语法 英语 纠错'
    },
    {
        id: '14',
        name: '日常对话练习',
        intro: '模拟各种生活场景对话，提升英语口语应用能力',
        coverUrl: '/covers/english.svg',
        type: 'forLearn',
        link: '/agents/14',
        tag: '对话 口语 英语'
    },
    {
        id: '15',
        name: '英语阅读提速',
        intro: '训练快速阅读技巧，提高英语阅读速度和理解能力',
        coverUrl: '/covers/english.svg',
        type: 'forTeach',
        link: '/agents/15',
        tag: '阅读 速度 英语'
    },

    // 科学类
    {
        id: '16',
        name: '科学小实验指导',
        intro: '提供简单有趣的科学小实验教程，培养科学探索精神',
        coverUrl: '/covers/science.svg',
        type: 'forLearn',
        link: '/agents/16',
        tag: '科学 实验 探索'
    },
    {
        id: '17',
        name: '天文知识图解',
        intro: '通过3D模型讲解天文知识，认识星座和宇宙现象',
        coverUrl: '/covers/science.svg',
        type: 'forLearn',
        link: '/agents/17',
        tag: '天文 宇宙 科学'
    },
    {
        id: '18',
        name: '生物进化探索',
        intro: '展示生物进化历程，理解物种起源和自然选择',
        coverUrl: '/covers/science.svg',
        type: 'forLearn',
        link: '/agents/18',
        tag: '生物 进化 科学'
    },
    {
        id: '19',
        name: '化学元素周期表',
        intro: '交互式元素周期表，查询元素性质和化学反应',
        coverUrl: '/covers/science.svg',
        type: 'forTeach',
        link: '/agents/19',
        tag: '化学 元素 科学'
    },
    {
        id: '20',
        name: '物理现象解析',
        intro: '用动画解释物理原理，理解力学、电学等自然现象',
        coverUrl: '/covers/science.svg',
        type: 'forTeach',
        link: '/agents/20',
        tag: '物理 原理 科学'
    },

    // 测评类
    {
        id: '21',
        name: '作文批改大师',
        intro: '批改小学生作文，提供修改建议和评分，提升写作水平',
        coverUrl: '/covers/evaluate.svg',
        type: 'forEvaluate',
        link: '/agents/21',
        tag: '作文 批改 写作'
    },
    {
        id: '22',
        name: '口算速算测评',
        intro: '测试口算能力，评估计算速度和准确率，针对性提升',
        coverUrl: '/covers/evaluate.svg',
        type: 'forEvaluate',
        link: '/agents/22',
        tag: '数学 口算 测评'
    },
    {
        id: '23',
        name: '汉字书写测评',
        intro: '评估汉字书写规范性，提供改进建议和练习方法',
        coverUrl: '/covers/evaluate.svg',
        type: 'forEvaluate',
        link: '/agents/23',
        tag: '汉字 书写 语文'
    },
    {
        id: '24',
        name: '记忆力测试',
        intro: '通过多种方式测试记忆力水平，提供提升训练方案',
        coverUrl: '/covers/evaluate.svg',
        type: 'forEvaluate',
        link: '/agents/24',
        tag: '记忆 测试 脑力'
    },
    {
        id: '25',
        name: '专注力评估',
        intro: '科学评估专注力水平，提供注意力训练方法',
        coverUrl: '/covers/evaluate.svg',
        type: 'forEvaluate',
        link: '/agents/25',
        tag: '专注 注意力 测评'
    },

    // 综合学习类
    {
        id: '26',
        name: '拼音教学助手',
        intro: '帮助小学生学习汉语拼音，掌握正确发音和书写',
        coverUrl: '/covers/helper.svg',
        type: 'forTeach',
        link: '/agents/26',
        tag: '拼音 语文 基础'
    },
    {
        id: '27',
        name: '历史故事大王',
        intro: '讲述生动有趣的历史故事，拓宽历史知识视野',
        coverUrl: '/covers/history.svg',
        type: 'forLearn',
        link: '/agents/27',
        tag: '历史 故事 文化'
    },
    {
        id: '28',
        name: '地理知识图谱',
        intro: '交互式地图学习，了解世界各地地理风貌和文化',
        coverUrl: '/covers/geography.svg',
        type: 'forLearn',
        link: '/agents/28',
        tag: '地理 地图 文化'
    },
    {
        id: '29',
        name: '音乐乐理入门',
        intro: '基础乐理知识教学，认识音符、节奏和简单乐谱',
        coverUrl: '/covers/music.svg',
        type: 'forTeach',
        link: '/agents/29',
        tag: '音乐 乐理 艺术'
    },
    {
        id: '30',
        name: '绘画技巧指导',
        intro: '基础绘画技巧教学，从线条到色彩的入门训练',
        coverUrl: '/covers/art.svg',
        type: 'forTeach',
        link: '/agents/30',
        tag: '绘画 美术 艺术'
    },

    // 思维训练类
    {
        id: '31',
        name: '逻辑推理训练',
        intro: '通过趣味谜题锻炼逻辑思维和推理能力',
        coverUrl: '/covers/create.svg',
        type: 'forLearn',
        link: '/agents/31',
        tag: '逻辑 推理 思维'
    },
    {
        id: '32',
        name: '创造力激发',
        intro: '通过发散思维训练，激发创造力和想象力',
        coverUrl: '/covers/create.svg',
        type: 'forLearn',
        link: '/agents/32',
        tag: '创造 想象 思维'
    },
    {
        id: '33',
        name: '问题解决策略',
        intro: '学习分析问题和解决问题的基本方法和步骤',
        coverUrl: '/covers/skill.svg',
        type: 'forTeach',
        link: '/agents/33',
        tag: '问题 策略 思维'
    },
    {
        id: '34',
        name: '思维导图制作',
        intro: '教你制作思维导图，提升学习和整理知识的效率',
        coverUrl: '/covers/skill.svg',
        type: 'forTeach',
        link: '/agents/34',
        tag: '思维 整理 学习'
    },
    {
        id: '35',
        name: '批判性思维',
        intro: '培养批判性思考能力，学会多角度分析问题',
        coverUrl: '/covers/thinking.svg',
        type: 'forLearn',
        link: '/agents/35',
        tag: '批判 分析 思维'
    },

    // 学习方法类
    {
        id: '36',
        name: '高效笔记法',
        intro: '教授多种笔记方法，提升课堂和阅读笔记效率',
        coverUrl: '/covers/skill.svg',
        type: 'forTeach',
        link: '/agents/36',
        tag: '笔记 方法 学习'
    },
    {
        id: '37',
        name: '时间管理助手',
        intro: '帮助制定学习计划，合理分配时间，提高学习效率',
        coverUrl: '/covers/helper.svg',
        type: 'forTeach',
        link: '/agents/37',
        tag: '时间 计划 效率'
    },
    {
        id: '38',
        name: '考试复习策略',
        intro: '提供科学复习方法，制定复习计划，提高考试成绩',
        coverUrl: '/covers/strategy.svg',
        type: 'forLearn',
        link: '/agents/38',
        tag: '复习 考试 策略'
    },
    {
        id: '39',
        name: '错题整理方法',
        intro: '教你有效整理错题，建立错题本，避免重复犯错',
        coverUrl: '/covers/strategy.svg',
        type: 'forEvaluate',
        link: '/agents/39',
        tag: '错题 整理 学习'
    },
    {
        id: '40',
        name: '学习习惯培养',
        intro: '帮助养成良好学习习惯，提高自主学习能力',
        coverUrl: '/covers/strategy.svg',
        type: 'forLearn',
        link: '/agents/40',
        tag: '习惯 自主 学习'
    }
];
