/**
 * 哈萨克斯坦广东商会 - 交互脚本
 * GDCCK Interactive Scripts
 */

// 默认网站数据 - 当 fetch 失败时使用
const defaultSiteData = {
    "settings": {
        "siteName": "哈萨克斯坦广东商会",
        "siteNameEn": "Guangdong Chamber of Commerce in Kazakhstan",
        "siteNameShort": "GDCCK",
        "email": "info@gdcck.kz",
        "phone": "+7 727 123 4567",
        "address": "哈萨克斯坦阿拉木图市阿拜大道128号"
    },
    "stats": {
        "members": 268,
        "years": 15,
        "trade": 86,
        "projects": 1580
    },
    "news": [
        {
            "id": 1,
            "title": "哈萨克斯坦中国国际经济发展中心代表团访问中亚广东总商会",
            "category": "商会活动",
            "date": "2026-03-15",
            "excerpt": "哈萨克斯坦中国国际经济发展中心主席宋建林一行访问中亚广东总商会，双方签署《战略合作框架协议》，共同推动中国-中亚经贸合作...",
            "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop"
        },
        {
            "id": 2,
            "title": "上海市工商联与哈萨克斯坦阿拉木图投资推广中心深化合作",
            "category": "经贸合作",
            "date": "2026-03-12",
            "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
        },
        {
            "id": 3,
            "title": "G4城市经济特区在阿拉木图州成立 吸引国际投资",
            "category": "投资动态",
            "date": "2026-03-08",
            "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
        },
        {
            "id": 4,
            "title": "深圳市商务局举办\"阿拉木图——中亚之钥\"投资推介会",
            "category": "商务考察",
            "date": "2026-02-28",
            "image": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop"
        },
        {
            "id": 5,
            "title": "中哈合作深化：广东与哈萨克斯坦贸易额年增37%",
            "category": "贸易数据",
            "date": "2026-02-20",
            "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
        }
    ],
    "partners": [
        {"name": "广东省商务厅", "icon": "university"},
        {"name": "哈萨克斯坦投资局", "icon": "building-columns"},
        {"name": "阿拉木图市政府", "icon": "globe"},
        {"name": "哈萨克斯坦中国总商会", "icon": "handshake"},
        {"name": "广东省贸促会", "icon": "network-wired"},
        {"name": "阿斯塔纳航空", "icon": "plane"},
        {"name": "中欧班列", "icon": "box"},
        {"name": "阿里巴巴国际站", "icon": "shopping-cart"},
        {"name": "中国国际商会", "icon": "briefcase"},
        {"name": "哈萨克斯坦贸易政策发展中心", "icon": "map"},
        {"name": "广东省进出口商会", "icon": "file-contract"},
        {"name": "一带一路服务中心", "icon": "share-alt"}
    ],
    "members": [
        {"name": "中亚粤商集团", "industry": "制造业 · 能源投资", "icon": "industry"},
        {"name": "欧亚物流", "industry": "跨境物流 · 仓储", "icon": "truck"},
        {"name": "阿里郎商城", "industry": "跨境电商 · 零售", "icon": "shopping-bag"},
        {"name": "建设集团", "industry": "工程建设 · 地产", "icon": "hard-hat"},
        {"name": "绿色农业", "industry": "农产品 · 食品加工", "icon": "leaf"},
        {"name": "丝路科技", "industry": "信息技术 · 数字化", "icon": "laptop-code"},
        {"name": "丝路金融", "industry": "金融服务 · 投资", "icon": "coins"},
        {"name": "粤菜餐厅", "industry": "餐饮连锁 · 食品", "icon": "utensils"}
    ],
    "services": [
        {"title": "会员服务", "desc": "会员企业享有商务对接、法律咨询、市场信息等全方位服务", "icon": "users"},
        {"title": "商务对接", "desc": "组织商务考察、贸易洽谈、项目对接等活动", "icon": "handshake"},
        {"title": "展览展会", "desc": "组织企业参加中哈两国重要展会，拓展市场渠道", "icon": "building"},
        {"title": "市场推广", "desc": "提供品牌推广、市场营销、媒体宣传等服务", "icon": "bullhorn"},
        {"title": "法律咨询", "desc": "提供中哈两国法律法规咨询和纠纷调解服务", "icon": "balance-scale"},
        {"title": "培训交流", "desc": "组织商务培训、文化交流、人才对接等活动", "icon": "graduation-cap"}
    ],
    "gallery": [
        {"title": "年度会员大会", "image": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop"},
        {"title": "商务考察", "image": "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop"},
        {"title": "展会交流", "image": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop"},
        {"title": "签约仪式", "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop"},
        {"title": "交流晚宴", "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"}
    ]
};

// 多语言翻译数据
const translations = {
    zh: {
        nav: {
            home: '首页',
            about: '关于我们',
            services: '商会服务',
            news: '新闻动态',
            members: '会员企业',
            contact: '联系我们'
        },
        chairman: {
            tag: '会长致辞',
            title: '携手共创 · 合作共赢',
            text1: '尊敬的各位会员、企业家朋友们：',
            text2: '首先代表哈萨克斯坦广东商会，向长期以来关心支持商会发展的各级领导、社会各界人士表示衷心的感谢！向商会全体会员致以诚挚的问候！',
            text3: '哈萨克斯坦是"一带一路"倡议的重要节点国家，也是连接中国与欧洲的重要枢纽。商会自成立以来，始终秉承"服务会员、服务社会、服务政府"的宗旨，积极推动粤哈两地企业深化经贸合作。',
            text4: '当前，中哈两国关系迈入新阶段，贸易额持续增长，合作领域不断拓宽。商会将继续发挥桥梁纽带作用，为会员企业开拓哈萨克斯坦市场提供优质服务，为促进粤哈经贸合作贡献力量。',
            text5: '诚邀各界朋友莅临指导、洽谈合作，携手共创美好未来！'
        },
        hero: {
            badge: '连接中国·走向世界',
            title1: '哈萨克斯坦广东商会',
            title2: 'Guangdong Chamber of Commerce in Kazakhstan',
            desc: '促进广东与哈萨克斯坦经贸合作，打造"一带一路"标杆商会',
            join: '加入我们',
            learnMore: '了解更多',
            scroll: '向下滚动'
        },
        stats: {
            member: '会员企业',
            year: '年成立历程',
            trade: '年贸易额',
            project: '合作项目'
        },
        about: {
            tag: '关于我们',
            title: '关于哈萨克斯坦广东商会',
            desc: '连接粤哈两地企业，共创繁荣未来',
            text1: '哈萨克斯坦广东商会（Guangdong Chamber of Commerce in Kazakhstan，简称GDCCK）成立于2011年，是经哈萨克斯坦政府批准的非营利性国际商务组织。',
            text2: '商会总部位于哈萨克斯坦最大城市阿拉木图，在北京、广州设有代表处。十五年来，我们始终致力于促进广东与哈萨克斯坦两国企业间的经贸合作与交流，为会员企业提供全方位的商务服务。',
            text3: '作为"一带一路"倡议的重要参与者，商会积极推动粤哈两地在能源、制造业、基础设施建设、数字经济等领域的深度合作，已成为中哈经贸合作的重要桥梁和纽带。',
            feature1: { title: '商务对接', desc: '精准匹配商机' },
            feature2: { title: '法律援助', desc: '专业法律支持' },
            feature3: { title: '市场咨询', desc: '深度行业分析' }
        },
        services: {
            tag: '商会服务',
            title: '全方位服务体系',
            desc: '专注、专业、专心的商务服务',
            s1: { title: '会员服务', desc: '会员企业享有商务对接、法律咨询、市场信息等全方位服务' },
            s2: { title: '商务对接', desc: '组织商务考察、贸易洽谈、项目对接等活动' },
            s3: { title: '展览展会', desc: '组织企业参加中哈两国重要展会，拓展市场渠道' },
            s4: { title: '市场推广', desc: '提供品牌推广、市场营销、媒体宣传等服务' },
            s5: { title: '法律咨询', desc: '提供中哈两国法律法规咨询和纠纷调解服务' },
            s6: { title: '培训交流', desc: '组织商务培训、文化交流、人才对接等活动' }
        },
        env: {
            tag: '投资环境',
            title: '哈萨克斯坦投资优势',
            desc: '走进中亚最大市场，把握"一带一路"历史机遇',
            e1: { title: '战略位置', desc: '位于欧亚大陆中心，是连接中国与欧洲的重要枢纽' },
            e2: { title: '丰富资源', desc: '拥有丰富的石油、天然气、矿产等自然资源' },
            e3: { title: '政策优惠', desc: '政府提供税收优惠、土地优惠等投资激励机制' },
            e4: { title: '市场潜力', desc: '1900万人口，消费市场快速增长，城镇化进程加速' }
        },
        news: {
            tag: '新闻动态',
            title: '最新资讯',
            desc: '了解商会动态，把握行业先机',
            cat1: '商会活动',
            cat2: '经贸合作',
            cat3: '投资动态',
            cat4: '商务考察',
            cat5: '贸易数据',
            n1: { title: '哈萨克斯坦中国国际经济发展中心代表团访问中亚广东总商会', desc: '哈萨克斯坦中国国际经济发展中心主席宋建林一行访问中亚广东总商会，双方签署《战略合作框架协议》，共同推动中国-中亚经贸合作...' },
            n2: { title: '上海市工商联与哈萨克斯坦阿拉木图投资推广中心深化合作' },
            n3: { title: 'G4城市经济特区在阿拉木图州成立 吸引国际投资' },
            n4: { title: '深圳市商务局举办"阿拉木图——中亚之钥"投资推介会' },
            n5: { title: '中哈合作深化：广东与哈萨克斯坦贸易额年增37%' },
            readMore: '阅读全文'
        },
        members: {
            tag: '会员企业',
            title: '优秀会员企业',
            desc: '携手优秀企业，共创商业未来'
        },
        gallery: {
            tag: '活动相册',
            title: '商会活动'
        },
        partners: {
            tag: '合作伙伴',
            title: '战略合作伙伴'
        },
        contact: {
            tag: '联系我们',
            title: '联系我们',
            desc: '期待与您的合作',
            address: '商会地址',
            addressText: '哈萨克斯坦阿拉木图市阿拜大道128号',
            phone: '联系电话',
            email: '电子邮箱',
            hours: '工作时间',
            hoursText: '周一至周五 9:00-18:00',
            formTitle: '在线留言',
            name: '姓名',
            email2: '邮箱',
            phone2: '电话',
            message: '留言内容',
            submit: '提交留言'
        },
        footer: {
            about: '哈萨克斯坦广东商会是连接中国广东与哈萨克斯坦的经贸桥梁，致力于促进两国企业合作与交流。',
            quickLinks: '快速链接',
            services: '服务项目',
            contact: '联系方式',
            s1: '会员服务',
            s2: '商务对接',
            s3: '展览展会',
            s4: '法律咨询',
            s5: '市场推广',
            s6: '培训交流'
        },
        contact: {
            wechat: '关注商会公众号'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
            services: 'Services',
            news: 'News',
            members: 'Members',
            contact: 'Contact'
        },
        chairman: {
            tag: 'Chairman's Message',
            title: 'Win-Win Cooperation',
            text1: 'Dear Members and Entrepreneur Friends,',
            text2: 'On behalf of the Guangdong Chamber of Commerce in Kazakhstan, I would like to express sincere gratitude to all leaders and friends who have supported the Chamber development!',
            text3: 'Kazakhstan is an important node of the Belt and Road Initiative and a vital hub connecting China and Europe. Since its establishment, the Chamber has been committed to promoting trade cooperation.',
            text4: 'Currently, China-Kazakhstan relations have entered a new stage with continuously growing trade volume. The Chamber will continue to serve as a bridge for our member enterprises.',
            text5: 'We warmly invite friends from all walks of life to visit, cooperate, and create a better future together!'
        },
        hero: {
            badge: 'Connecting China to the World',
            title1: 'Guangdong Chamber of Commerce in Kazakhstan',
            title2: '哈萨克斯坦广东商会',
            desc: 'Promoting trade cooperation between Guangdong and Kazakhstan, building a benchmark chamber along the Belt and Road',
            join: 'Join Us',
            learnMore: 'Learn More',
            scroll: 'Scroll Down'
        },
        stats: {
            member: 'Member Enterprises',
            year: 'Years of Operation',
            trade: 'Annual Trade Volume',
            project: 'Cooperation Projects'
        },
        about: {
            tag: 'About Us',
            title: 'About GDCCK',
            desc: 'Connecting Guangdong and Kazakhstan for a prosperous future',
            text1: 'The Guangdong Chamber of Commerce in Kazakhstan (GDCCK) was established in 2011 as a non-profit international business organization approved by the Kazakh government.',
            text2: 'The Chamber is headquartered in Almaty, the largest city in Kazakhstan, with representative offices in Beijing and Guangzhou. For 15 years, we have been dedicated to promoting trade cooperation between Guangdong and Kazakhstan.',
            text3: 'As an important participant in the Belt and Road Initiative, the Chamber actively promotes deep cooperation in energy, manufacturing, infrastructure construction, and digital economy.',
            feature1: { title: 'Business Matching', desc: 'Precision business opportunities' },
            feature2: { title: 'Legal Aid', desc: 'Professional legal support' },
            feature3: { title: 'Market Consulting', desc: 'In-depth industry analysis' }
        },
        services: {
            tag: 'Services',
            title: 'Comprehensive Service System',
            desc: 'Dedicated, Professional, and Committed Services',
            s1: { title: 'Membership Services', desc: 'Business matching, legal consulting, market information' },
            s2: { title: 'Business Matching', desc: 'Organizing business visits, trade negotiations, project matching' },
            s3: { title: 'Exhibitions', desc: 'Organizing enterprises to participate in major exhibitions' },
            s4: { title: 'Market Promotion', desc: 'Brand promotion, marketing, media publicity' },
            s5: { title: 'Legal Consulting', desc: 'China-Kazakhstan legal consultation and dispute resolution' },
            s6: { title: 'Training & Exchange', desc: 'Business training, cultural exchange, talent matching' }
        },
        env: {
            tag: 'Investment Environment',
            title: 'Investment Advantages of Kazakhstan',
            desc: 'Enter the largest market in Central Asia and seize Belt and Road opportunities',
            e1: { title: 'Strategic Location', desc: 'Located in the center of the Eurasian continent' },
            e2: { title: 'Rich Resources', desc: 'Abundant oil, natural gas, and mineral resources' },
            e3: { title: 'Policy Incentives', desc: 'Tax and land incentives for investors' },
            e4: { title: 'Market Potential', desc: '19 million population with rapidly growing consumer market' }
        },
        news: {
            tag: 'News',
            title: 'Latest News',
            desc: 'Stay informed about chamber activities',
            cat1: 'Chamber Events',
            cat2: 'Trade & Business',
            cat3: 'Business Visit',
            n1: { title: 'GDCCK Successfully Holds 2026 Annual Members Conference', desc: 'The Chamber held its 2026 annual members conference in Almaty on March 15...' },
            n2: { title: 'Guangdong-Kazakhstan Business Matching Forum Held in Guangzhou' },
            n3: { title: 'Chamber Organizes Member Companies to Visit Kazakhstan' },
            readMore: 'Read More'
        },
        partners: {
            tag: 'Partners',
            title: 'Strategic Partners'
        },
        contact: {
            tag: 'Contact Us',
            title: 'Contact Us',
            desc: 'We look forward to working with you',
            address: 'Address',
            addressText: '128 Abay Avenue, Almaty, Kazakhstan',
            phone: 'Phone',
            email: 'Email',
            hours: 'Business Hours',
            hoursText: 'Monday to Friday 9:00-18:00',
            formTitle: 'Send Message',
            name: 'Name',
            email2: 'Email',
            phone2: 'Phone',
            message: 'Message',
            submit: 'Submit'
        },
        footer: {
            about: 'The Guangdong Chamber of Commerce in Kazakhstan is a bridge connecting Guangdong, China with Kazakhstan, dedicated to promoting business cooperation between the two countries.',
            quickLinks: 'Quick Links',
            services: 'Services',
            contact: 'Contact',
            s1: 'Membership Services',
            s2: 'Business Matching',
            s3: 'Exhibitions',
            s4: 'Legal Consulting'
        }
    },
    kk: {
        nav: {
            home: 'Басты бет',
            about: 'Біз туралы',
            services: 'Қызметтер',
            news: 'Жаңалықтар',
            contact: 'Байланыс'
        },
        hero: {
            badge: 'Қытайды Әлеммен қосу',
            title1: 'Қазақстандағы Гуандун Сауда Палатасы',
            title2: 'Guangdong Chamber of Commerce in Kazakhstan',
            desc: 'Гуандун мен Қазақстан арасындағы сауда ынтымақтастығын дамыту',
            join: 'Бізге қосылыңыз',
            learnMore: 'Көбірек білу',
            scroll: 'Төменде'
        },
        stats: {
            member: 'Мүше кәсіпорындар',
            year: 'Жылдар',
            trade: 'Жылдық сауда көлемі',
            project: 'Жобалар'
        },
        about: {
            tag: 'Біз туралы',
            title: 'Қазақстандағы Гуандун Сауда Палатасы туралы',
            desc: 'Гуандун мен Қазақстанды біріктіру',
            text1: 'Қазақстандағы Гуандун Сауда Палатасы (GDCCK) 2011 жылы құрылды.',
            text2: 'Палата Алматы қаласында орналасқан, Бейжің мен Гуанчжоуде өкілдіктері бар.',
            text3: 'Бір белдеу, бір жол бастамасының қатысушысы ретінде Палата энергетика, өндіріс, құрылыс салаларында ынтымақтастықты дамытады.',
            feature1: { title: 'Бизнес сыйбайлас', desc: 'Мүмкіндіктерді сәйкестендіру' },
            feature2: { title: 'Құқықтық көмек', desc: 'Кәсіби құқықтық қолдау' },
            feature3: { title: 'Маркетинг', desc: 'Өнеркосіптік талдау' }
        },
        services: {
            tag: 'Қызметтер',
            title: 'Қызметтер жүйесі',
            desc: 'Кәсіби қызметтер',
            s1: { title: 'Мүшелік қызметтер', desc: 'Бизнес сыйбайлас, құқықтық кеңес' },
            s2: { title: 'Бизнес сыйбайлас', desc: 'Сауда келіссөздері, жобалар' },
            s3: { title: 'Көрмелер', desc: 'Көрмелерге қатысу' },
            s4: { title: 'Маркетинг', desc: 'Бренд продвижение' },
            s5: { title: 'Құқықтық кеңес', desc: 'Заң кеңесі' },
            s6: { title: 'Оқыту', desc: 'Бизнес оқыту' }
        },
        env: {
            tag: 'Инвестициялар',
            title: 'Қазақстан инвестициялық артықшылықтары',
            desc: 'Орталық Азия нарығына кіріңіз',
            e1: { title: 'Стратегиялық орын', desc: 'Еуразия орталығында' },
            e2: { title: 'Байлық', desc: 'Мұнай, газ ресурстары' },
            e3: { title: 'Сыйлықтар', desc: 'Салық жеңілдіктері' },
            e4: { title: 'Нарық', desc: '19 миллион халық' }
        },
        news: {
            tag: 'Жаңалықтар',
            title: 'Соңғы жаңалықтар',
            desc: 'Палата жаңалықтары',
            cat1: 'Іс-шаралар',
            cat2: 'Сауда',
            cat3: 'Сапар',
            n1: { title: 'GDCCK 2026 жылдық мүшелер жиналысын өткізді', desc: '15 наурызда...' },
            n2: { title: 'Гуанчжоуде бизнес кездесу өтті' },
            n3: { title: 'Мүше кәсіпорындар Қазақстанға сапарлады' },
            readMore: 'Көбірек'
        },
        partners: {
            tag: 'Әріптестер',
            title: 'Стратегиялық әріптестер'
        },
        contact: {
            tag: 'Байланыс',
            title: 'Байланыс',
            desc: 'Ынтымақтастықты күтеміз',
            address: 'Мекенжай',
            addressText: 'Алматы, Абай даңғылы 128',
            phone: 'Телефон',
            email: 'Email',
            hours: 'Жұмыс уақыты',
            hoursText: 'Дүйсенбі - жұма 9:00-18:00',
            formTitle: 'Хат жіберу',
            name: 'Аты',
            email2: 'Email',
            phone2: 'Телефон',
            message: 'Хабарлама',
            submit: 'Жіберу'
        },
        footer: {
            about: 'Қазақстандағы Гуандун Сауда Палатасы - Қытай мен Қазақстан арасындағы сауда көпірі.',
            quickLinks: 'Сілтемелер',
            services: 'Қызметтер',
            contact: 'Байланыс',
            s1: 'Мүшелік',
            s2: 'Бизнес',
            s3: 'Көрме',
            s4: 'Заң'
        }
    },
    ru: {
        nav: {
            home: 'Главная',
            about: 'О нас',
            services: 'Услуги',
            news: 'Новости',
            contact: 'Контакты'
        },
        hero: {
            badge: 'Связывая Китай с Миром',
            title1: 'Гуандунская Торговая Палата в Казахстане',
            title2: 'Guangdong Chamber of Commerce in Kazakhstan',
            desc: 'Развитие торгового сотрудничества между Гуандун и Казахстаном',
            join: 'Присоединяйтесь',
            learnMore: 'Узнать больше',
            scroll: 'Вниз'
        },
        stats: {
            member: 'Предприятий-членов',
            year: 'Лет работы',
            trade: 'Годовой объём',
            project: 'Проектов'
        },
        about: {
            tag: 'О нас',
            title: 'О Гуандунской Торговой Палате',
            desc: 'Связывая Гуандун и Казахстан',
            text1: 'Гуандунская Торговая Палата в Казахстане (GDCCK) основана в 2011 году.',
            text2: 'Палата находится в Алматы, имеет представительства в Пекине и Гуанчжоу.',
            text3: 'Участник инициативы "Пояс и путь", способствует сотрудничеству в энергетике и строительстве.',
            feature1: { title: 'Бизнес-связи', desc: 'Подбор партнёров' },
            feature2: { title: 'Юридическая помощь', desc: 'Профессиональная поддержка' },
            feature3: { title: 'Консалтинг', desc: 'Анализ рынка' }
        },
        services: {
            tag: 'Услуги',
            title: 'Комплексные услуги',
            desc: 'Профессиональные услуги',
            s1: { title: 'Услуги для членов', desc: 'Бизнес-связи, юридические консультации' },
            s2: { title: 'Бизнес-связи', desc: 'Переговоры, проекты' },
            s3: { title: 'Выставки', desc: 'Участие в выставках' },
            s4: { title: 'Маркетинг', desc: 'Продвижение бренда' },
            s5: { title: 'Юридические консультации', desc: 'Правовая помощь' },
            s6: { title: 'Обучение', desc: 'Бизнес-обучение' }
        },
        env: {
            tag: 'Инвестиции',
            title: 'Преимущества Казахстана',
            desc: 'Рынок Центральной Азии',
            e1: { title: 'География', desc: 'Центр Евразии' },
            e2: { title: 'Ресурсы', desc: 'Нефть, газ' },
            s3: { title: 'Льготы', desc: 'Налоговые льготы' },
            e4: { title: 'Рынок', desc: '19 миллионов населения' }
        },
        news: {
            tag: 'Новости',
            title: 'Последние новости',
            desc: 'Новости палаты',
            cat1: 'Мероприятия',
            cat2: 'Торговля',
            cat3: 'Визит',
            n1: { title: 'GDCCK провела годовую конференцию 2026', desc: '15 марта...' },
            n2: { title: 'Бизнес-встреча в Гуанчжоу' },
            n3: { title: 'Визит в Казахстан' },
            readMore: 'Подробнее'
        },
        partners: {
            tag: 'Партнёры',
            title: 'Партнёры'
        },
        contact: {
            tag: 'Контакты',
            title: 'Контакты',
            desc: 'Ждём сотрудничества',
            address: 'Адрес',
            addressText: 'Алматы, пр. Абая 128',
            phone: 'Телефон',
            email: 'Email',
            hours: 'Время работы',
            hoursText: 'Пн-Пт 9:00-18:00',
            formTitle: 'Отправить сообщение',
            name: 'Имя',
            email2: 'Email',
            phone2: 'Телефон',
            message: 'Сообщение',
            submit: 'Отправить'
        },
        footer: {
            about: 'Гуандунская Торговая Палата в Казахстане - мост между Китаем и Казахстаном.',
            quickLinks: 'Ссылки',
            services: 'Услуги',
            contact: 'Контакты',
            s1: 'Членство',
            s2: 'Бизнес',
            s3: 'Выставки',
            s4: 'Юристы'
        }
    },
    // 吉尔吉斯语 (Кыргызча)
    ky: {
        nav: {
            home: 'Башкы бет',
            about: 'Биз жөнүндө',
            services: 'Кызматтар',
            news: 'Жаңылыктар',
            members: 'Мүчөлөр',
            contact: 'Байланыш'
        },
        hero: {
            badge: 'Кытайды Дүйнө менен байланыштыруу',
            title1: 'Казахстандагы Гуандун соода палатасы',
            title2: 'Guangdong Chamber of Commerce in Kazakhstan',
            desc: 'Гуандун менен Казахстандын соода кызматташтыгын өнүктүрүү',
            join: 'Бизге кошулуңуз',
            learnMore: 'Көбүрөөк билиңиз',
            scroll: 'Төмөн караңыз'
        },
        stats: {
            member: 'Мүчө ишканалар',
            year: 'Жылдар',
            trade: 'Жылдык соода',
            project: 'Долбоорлор'
        },
        about: {
            tag: 'Биз жөнүндө',
            title: 'Гуандун соода палатасы жөнүндө',
            desc: 'Гуандун менен Казахстанды байланыштыруу',
            text1: 'Казахстандагы Гуандун соода палатасы (GDCCK) 2011-жылы негизделген.',
            text2: 'Палата Алматы шаарында жайгашкан, Пекинде жана Гуанчжоудо өкүлчүлүктөрү бар.',
            text3: 'Бир белдем, бир жол башталмасынын катышуучусу катары палата энергетика жана курулуш тармагында кызматташат.',
            feature1: { title: 'Бизнес байланыш', desc: 'Партнёрлорду тандоо' },
            feature2: { title: 'Укуктук жардам', desc: 'Профессионалдык колдоо' },
            feature3: { title: 'Консалтинг', desc: 'Рынок талдоо' }
        },
        services: {
            tag: 'Кызматтар',
            title: 'Кызматтар системасы',
            desc: 'Профессионалдык кызматтар',
            s1: { title: 'Мүчөлүк кызматтар', desc: 'Бизнес байланыш, укуктук кеңеш' },
            s2: { title: 'Бизнес байланыш', desc: 'Сүйлөшүүлөр, долбоорлор' },
            s3: { title: 'Көргөзмөлөр', desc: 'Көргөзмөлөргө катышуу' },
            s4: { title: 'Маркетинг', desc: 'Бренд продвижение' },
            s5: { title: 'Укуктук кеңеш', desc: 'Укуктук жардам' },
            s6: { title: 'Окутуу', desc: 'Бизнес окутуу' }
        },
        env: {
            tag: 'Инвестициялар',
            title: 'Казахстандын артыкчылыктары',
            desc: 'Борбордук Азия рыногуна кириңиз',
            e1: { title: 'Стратегиялык орун', desc: 'Евразия борборунда' },
            e2: { title: 'Ресурстар', desc: 'Нефть, газ' },
            e3: { title: 'Сыйлыктар', desc: 'Салык жеңилдиктери' },
            e4: { title: 'Рынок', desc: '19 миллион калк' }
        },
        news: {
            tag: 'Жаңылыктар',
            title: 'Акыркы жаңылыктар',
            desc: 'Палата жаңылыктары',
            cat1: 'Иш-чаралар',
            cat2: 'Соода',
            cat3: 'Сапар',
            n1: { title: 'GDCCK 2026-жылдык конференция өткөрдү', desc: '15-мартта...' },
            n2: { title: 'Гуанчжоудо бизнес кездешуу өттү' },
            n3: { title: 'Мүчөлөр Казахстанга сапарлады' },
            readMore: 'Көбүрөөк'
        },
        partners: {
            tag: 'Партнёрлор',
            title: 'Стратегиялык партнёрлор'
        },
        contact: {
            tag: 'Байланыш',
            title: 'Байланыш',
            desc: 'Кызматташтыкты күтөбүз',
            address: 'Дарек',
            addressText: 'Алматы, Абай проспекти 128',
            phone: 'Телефон',
            email: 'Email',
            hours: 'İş vaqti',
            hoursText: 'Дүйшөмбү - Жума 9:00-18:00',
            formTitle: 'Кат жөнөтүү',
            name: 'Аты',
            email2: 'Email',
            phone2: 'Телефон',
            message: 'Кат',
            jönö: 'Жөнөтүү'
        },
        footer: {
            about: 'Казахстандагы Гуандун соода палатасы - Кытай менен Казахстандын соода көпири.',
            quickLinks: 'Силтемелер',
            services: 'Кызматтар',
            contact: 'Байланыш',
            s1: 'Мүчөлүк',
            s2: 'Бизнес',
            s3: 'Көргөзмө',
            s4: 'Укук'
        }
    },
    // 乌兹别克语 (O'zbekcha)
    uz: {
        nav: {
            home: 'Bosh sahifa',
            about: 'Biz haqimizda',
            services: 'Xizmatlar',
            news: 'Yangiliklar',
            members: 'A\'zolar',
            contact: 'Aloqa'
        },
        hero: {
            badge: 'Xitoyni Dunyo bilan bog\'lash',
            title1: 'Qozog\'istondagi Guandon Savdo Palatasi',
            title2: 'Guangdong Chamber of Commerce in Kazakhstan',
            desc: 'Guandon va Qozog\'iston savdo hamkorligini rivojlantirish',
            join: 'Bizga qo\'shiling',
            learnMore: 'Batafsil',
            scroll: 'Pastga'
        },
        stats: {
            member: 'A\'zo korxonalar',
            year: 'Yillar',
            trade: 'Yillik savdo',
            project: 'Loyihalar'
        },
        about: {
            tag: 'Biz haqimizda',
            title: 'Guandon Savdo Palatasi haqida',
            desc: 'Guandon va Qozog\'istonni bog\'lash',
            text1: 'Qozog\'istondagi Guandon Savdo Palatasi (GDCCK) 2011-yilda tashkil etilgan.',
            text2: 'Palata Olmaota shahrida joylashgan, Pekinda va Guanchjoudda vakolatxonalari bor.',
            text3: '"Bir kamon, bir yo\'l" tashabbusining ishtirokchisi sifatida palata energetika va qurilish sohalarida hamkorlik qiladi.',
            feature1: { title: 'Biznes aloqalar', desc: 'Hamkorlarni tanlash' },
            feature2: { title: 'Yuridik yordam', desc: 'Professional qo\'llab-quvvatlash' },
            feature3: { title: 'Konsalting', desc: 'Bozor tahlili' }
        },
        services: {
            tag: 'Xizmatlar',
            title: 'Xizmatlar tizimi',
            desc: 'Professional xizmatlar',
            s1: { title: 'A\'zo xizmatlari', desc: 'Biznes aloqalar, yuridik maslahat' },
            s2: { title: 'Biznes aloqalar', desc: 'Muhokamalar, loyihalar' },
            s3: { title: 'Ko\'rgazmalar', desc: 'Ko\'rgazmalarda qatnashish' },
            s4: { title: 'Marketing', desc: 'Brendni reklama qilish' },
            s5: { title: 'Yuridik maslahat', desc: 'Yuridik yordam' },
            s6: { title: 'O\'qitish', desc: 'Biznes o\'qitish' }
        },
        env: {
            tag: 'Investitsiyalar',
            title: 'Qozog\'iston afzalliklari',
            desc: 'Markaziy Osiyo bozoriga kiring',
            e1: { title: 'Strategik joylashuv', desc: 'Yevrosiyo markazida' },
            e2: { title: 'Resurslar', desc: 'Neft, gaz' },
            e3: { title: 'Imtiyozlar', desc: 'Soliq imtiyozlari' },
            e4: { title: 'Bozor', desc: '19 million aholi' }
        },
        news: {
            tag: 'Yangiliklar',
            title: 'So\'nggi yangiliklar',
            desc: 'Palata yangiliklari',
            cat1: 'Tadbir',
            savdo: 'Savdo',
            cat3: 'Safar',
            n1: { title: 'GDCCK 2026-yil konferensiyasini o\'tkazdi', desc: '15-martda...' },
            n2: { title: 'Guanchjoudda biznes uchrashuvi bo\'ldi' },
            n3: { title: 'A\'zolar Qozog\'istonga safar qildi' },
            readMore: 'Batafsil'
        },
        partners: {
            tag: 'Hamkorlar',
            title: 'Strategik hamkorlar'
        },
        contact: {
            tag: 'Aloqa',
            title: 'Aloqa',
            desc: 'Hamkorlikni kutamiz',
            address: 'Manzil',
            addressText: 'Olmaota, Abay ko\'chasi 128',
            phone: 'Telefon',
            email: 'Email',
            hours: 'Ish vaqti',
            hoursText: 'Dushanba-Juma 9:00-18:00',
            formTitle: 'Xat yuborish',
            name: 'Ism',
            email2: 'Email',
            phone2: 'Telefon',
            message: 'Xat',
            submit: 'Yuborish'
        },
        footer: {
            about: 'Qozog\'istondagi Guandon Savdo Palatasi - Xitoy va Qozog\'iston savdo ko\'prigi.',
            quickLinks: 'Havolalar',
            services: 'Xizmatlar',
            contact: 'Aloqa',
            s1: 'A\'zolik',
            s2: 'Biznes',
            s3: 'Ko\'rgazma',
            s4: 'Yuridik'
        }
    },
    // 土库曼语 (Türkmençe)
    tk: {
        nav: {
            home: 'Baş sahypa',
            about: 'Biz hakda',
            services: 'Hyzmatlar',
            news: 'Täze habarlar',
            members: 'Agzalar',
            contact: 'Baglanyşyk'
        },
        hero: {
            badge: 'Hytaýy Dünýe bilen baglanyşdyrmak',
            title1: 'Gazagystandaky Guandon Senagat Palatasy',
            title2: 'Guangdong Chamber of Commerce in Kazakhstan',
            desc: 'Guandon we Gazagystanyň söwda hyzmatdaşlygyny ösdürmek',
            join: 'Bize goşulyň',
            learnMore: 'Köp bileniň',
            scroll: 'Aşak'
        },
        stats: {
            member: 'Agalyk kärhanalary',
            year: 'Ýyllar',
            trade: 'Ýyllyk söwda',
            project: 'Projeler'
        },
        about: {
            tag: 'Biz hakda',
            title: 'Guandon Senagat Palatasy hakda',
            desc: 'Guandon we Gazagystany baglanyşdyrmak',
            text1: 'Gazagystandaky Guandon Senagat Palatasy (GDCCK) 2011-nji ýylda döredilen.',
            text2: 'Palata Almaty şäherinde ýerleşýär, Pekinde we Guançjoudeda wekilhanalary bar.',
            text3: '"Bir guşak, bir ýol" başlangyjynyň gatnaşyjysy hökmünde palata energetika we gurluşyk ugurlarynda hyzmatdaşlyk edýär.',
            feature1: { title: 'Hyzmatdaşlyk', desc: 'Partnerleri saýlamak' },
            feature2: { title: 'Hukuk kömegi', desc: 'Profesional goldaw' },
            feature3: { title: 'Konsalting', desc: 'Bazar derňewi' }
        },
        services: {
            tag: 'Hyzmatlar',
            title: 'Hyzmatlar ulgamy',
            desc: 'Profesional hyzmatlar',
            s1: { title: 'Agza hyzmatlary', desc: 'Hyzmatdaşlyk, hukuk maslahaty' },
            s2: { title: 'Hyzmatdaşlyk', desc: 'Pikirlenmeler, projeler' },
            s3: { title: 'Serdiler', desc: 'Serdilerde gatnaşmak' },
            s4: { title: 'Marketing', desc: 'Brend reklama' },
            s5: { title: 'Hukuk maslahaty', desc: 'Hukuk kömegi' },
            s6: { title: 'Okuw', desc: 'Hyzmat okuwy' }
        },
        env: {
            tag: 'Investisiýalar',
            title: 'Gazagystanyň artykmaçlyklary',
            desc: 'Merkezi Aziýa bazaryna giriziň',
            e1: { title: 'Strategik ýerleşýän', desc: 'Ýewraziýanyň merkezinde' },
            e2: { title: 'Baýlyklar', desc: 'Nebit, gaz' },
            e3: { title: 'Imtiýazlar', desc: 'Soliq ýeňillikleri' },
            e4: { title: 'Bazar', desc: '19 million ilat' }
        },
        news: {
            tag: 'Täze habarlar',
            title: 'Iň täze habarlar',
            desc: 'Palata habarlary',
            cat1: 'Çäreler',
            cat2: 'Söwda',
            cat3: 'Safar',
            n1: { title: 'GDCCK 2026-njy ýyl konferensiýasyny geçirdi', desc: '15-nji martda...' },
            n2: { title: 'Guançjoudda biznes duşuşygy boldy' },
            n3: { title: 'Agalar Gazagystana safari etdi' },
            readMore: 'Köp'
        },
        partners: {
            tag: 'Hyzmatdaşlar',
            title: 'Strategik hyzmatdaşlar'
        },
        contact: {
            tag: 'Baglanyşyk',
            title: 'Baglanyşyk',
            desc: 'Hyzmatdaşlygy gözlýäris',
            address: 'Salgysy',
            addressText: 'Almaty, Abaý köçesi 128',
            phone: 'Telefon',
            email: 'Email',
            hours: 'Iş wagy',
            hoursText: 'Duşenbe - Anna 9:00-18:00',
            formTitle: 'Hat ibermek',
            name: 'Ady',
            email2: 'Email',
            phone2: 'Telefon',
            message: 'Hat',
            submit: 'Ibermek'
        },
        footer: {
            about: 'Gazagystandaky Guandon Senagat Palatasi - Hytaý we Gazagystanyň söwda köprisi.',
            quickLinks: 'Salgylar',
            services: 'Hyzmatlar',
            contact: 'Baglanyşyk',
            s1: 'Agzalik',
            s2: 'Hyzmatdaşlyk',
            s3: 'Serdi',
            s4: 'Hukuk'
        }
    },
    // 塔吉克语 (Тоҷикӣ)
    tg: {
        nav: {
            home: 'Саҳифаи асосӣ',
            about: 'Дар бораи мо',
            services: 'Хизматҳо',
            news: 'Ахборот',
            members: 'Узвон',
            contact: 'Тамос'
        },
        hero: {
            badge: 'Чинро бо Ҷаҳон пайванд кардан',
            title1: 'Palataи тиҷоратӣ Guangdong дар Қазоқистон',
            title2: 'Guangdong Chamber of Commerce in Kazakhstan',
            desc: 'Рушди ҳамкорӣ тиҷоратӣ байни Guangdong ва Қазоқистон',
            join: 'Ба мо пайванд шавед',
            learnMore: 'Маълумоти бештар',
            scroll: 'Поён'
        },
        stats: {
            member: 'Корхонаҳои аъзо',
            year: 'Солҳо',
            trade: 'Савдои солона',
            project: 'Лоиҳаҳо'
        },
        about: {
            tag: 'Дар бораи мо',
            title: 'Дар бораи Palataи тиҷоратӣ',
            desc: 'Guangdong ва Қазоқистонро пайванд кардан',
            text1: 'Palataи тиҷоратӣ дар Қазоқистон (GDCCK) соли 2011 таъсис шудааст.',
            text2: 'Palata дар шаҳри Олмаато қарор дорад, намояндагиҳо дар Пекин ва Guangzhou дорад.',
            text3: 'Қисми аз " як камар, як роҳ" аст, дар соҳаи энергетика ва сохтмон ҳамкорӣ мекунад.',
            feature1: { title: 'Ҳамкорӣ', desc: 'Интихоби шарикон' },
            feature2: { title: 'Кумаки ҳуқуқӣ', desc: 'Дастгирии касбӣ' },
            feature3: { title: 'Машварат', desc: 'Таҳлили бозор' }
        },
        services: {
            tag: 'Хизматҳо',
            title: 'Системаи хизматҳо',
            desc: 'Хизматҳои касбӣ',
            s1: { title: 'Хизматҳои аъзоӣ', desc: 'Ҳамкорӣ, машварати ҳуқуқӣ' },
            s2: { title: 'Ҳамкорӣ', desc: 'Мушовараҳо, лоиҳаҳо' },
            s3: { title: 'Намоишҳо', desc: 'Иштирок дар намоишҳо' },
            s4: { title: 'Маркетинг', desc: 'Рекламаи бренд' },
            s5: { title: 'Машварати ҳуқуқӣ', desc: 'Кумаки ҳуқуқӣ' },
            s6: { title: 'Омӯзиш', desc: 'Омӯзиши тиҷоратӣ' }
        },
        env: {
            tag: 'Сармоягузорӣ',
            title: 'Афзалиятҳои Қазоқистон',
            desc: 'Ба бозори Осиёи Марказӣ ворид шавед',
            e1: { title: 'Маҳалли стратегӣ', desc: 'Дар маркази Авруосиё' },
            e2: { title: 'Захираҳо', desc: 'Нафт, газ' },
            e3: { title: 'Имтиёзҳо', desc: 'Имтиёзҳои солимӣ' },
            e4: { title: 'Бозор', desc: '19 миллион аҳолӣ' }
        },
        news: {
            tag: 'Ахборот',
            title: 'Ахбори охирин',
            desc: 'Ахбороти Palata',
            cat1: 'Чорабиниҳо',
            cat2: 'Савдо',
            cat3: 'Сафар',
            n1: { title: 'GDCCK конференсияи соли 2026-ро гузаронид', desc: '15 март...' },
            n2: { title: 'Мулоқоти тиҷоратӣ дар Guangzhou баргузор шуд' },
            n3: { title: 'Узвон ба Қазоқистон сафар карданд' },
            readMore: 'Бештар'
        },
        partners: {
            tag: 'Шарикон',
            title: 'Шарикони стратегӣ'
        },
        contact: {
            tag: 'Тамос',
            title: 'Тамос',
            desc: 'Мо ҳамкорӣро интизорӣ ҳастем',
            address: 'Суроға',
            addressText: 'Олмаато, кӯчаи Абай 128',
            phone: 'Телефон',
            email: 'Email',
            hours: 'Вақти кор',
            hoursText: 'Душанбе - Ҷумъа 9:00-18:00',
            formTitle: 'Ирсоли хабар',
            name: 'Ном',
            email2: 'Email',
            phone2: 'Телефон',
            message: 'Хабар',
            submit: 'Ирсол'
        },
        footer: {
            about: 'Palataи тиҷоратӣ дар Қазоқистон - пули савдо байни Чин ва Қазоқистон.',
            quickLinks: 'Истинодҳо',
            services: 'Хизматҳо',
            contact: 'Тамос',
            s1: 'Аъзоӣ',
            s2: 'Тиҷорат',
            s3: 'Намоиш',
            s4: 'Ҳуқуқ'
        }
    }
};

// 当前语言
let currentLang = 'zh';
let siteData = null;

// 初始化
document.addEventListener('DOMContentLoaded', async function() {
    // 先加载数据，再初始化
    await loadSiteData();
    initHeader();
    initLanguageSwitch();
    initMobileMenu();
    initScrollEffects();
    initCounterAnimation();
    initSmoothScroll();
    initContactForm();
});

// 加载网站数据
async function loadSiteData() {
    console.log('开始加载网站数据...');
    
    // 首先检查 DOM 是否准备好
    const newsGrid = document.querySelector('.news .news-grid');
    const partnersGrid = document.querySelector('.partners .partners-grid');
    console.log('新闻网格元素:', newsGrid ? '存在' : '不存在');
    console.log('合作伙伴网格元素:', partnersGrid ? '存在' : '不存在');
    
    try {
        // 尝试多种路径
        const paths = ['data.json', './data.json', '/data.json'];
        let response = null;
        
        for (const path of paths) {
            try {
                console.log(`尝试加载: ${path}`);
                response = await fetch(path);
                console.log(`${path} 响应状态:`, response.status);
                if (response.ok) break;
            } catch (e) {
                console.log(`尝试路径 ${path} 失败:`, e);
            }
        }
        
        if (!response || !response.ok) {
            console.log('data.json 加载失败，使用默认数据');
            siteData = defaultSiteData;
            renderDynamicContent();
            return;
        }
        
        siteData = await response.json();
        console.log('数据加载成功:', siteData);
        
        // 渲染动态内容
        renderDynamicContent();
    } catch (e) {
        console.log('使用默认数据', e);
        siteData = defaultSiteData;
        renderDynamicContent();
    }
}

// 渲染动态内容
function renderDynamicContent() {
    console.log('开始渲染动态内容...');
    console.log('siteData:', siteData);
    
    if (!siteData) {
        console.log('siteData 为空，跳过渲染');
        return;
    }
    
    // 更新统计数据
    if (siteData.stats) {
        document.querySelectorAll('.stat-number').forEach((el, i) => {
            const keys = ['members', 'years', 'trade', 'projects'];
            if (siteData.stats[keys[i]]) {
                el.dataset.count = siteData.stats[keys[i]];
                el.textContent = siteData.stats[keys[i]];
            }
        });
        console.log('统计数据已更新');
    }
    
    // 更新联系方式
    if (siteData.settings) {
        const phoneEl = document.querySelector('.contact-detail p');
        if (phoneEl && siteData.settings.phone) {
            phoneEl.textContent = siteData.settings.phone;
        }
    }
    
    // 渲染新闻列表
    renderNewsList();
    
    // 渲染合作伙伴
    renderPartnersList();
    
    // 渲染会员企业
    renderMembersList();
    
    // 渲染服务
    renderServicesList();
    
    // 渲染相册
    renderGalleryList();
    
    console.log('动态内容渲染完成');
}

// 渲染新闻列表
function renderNewsList() {
    if (!siteData || !siteData.news) return;
    
    const newsGrid = document.querySelector('.news .news-grid');
    if (!newsGrid) return;
    
    newsGrid.innerHTML = siteData.news.slice(0, 5).map(item => `
        <article class="news-card ${item === siteData.news[0] ? 'news-featured' : ''}">
            <div class="news-image">
                <img src="${item.image}" alt="新闻图片">
                <div class="news-category">${item.category}</div>
            </div>
            <div class="news-content">
                <div class="news-meta">
                    <span class="news-date">${item.date}</span>
                </div>
                <h3 class="news-title">${item.title}</h3>
                ${item.excerpt ? `<p class="news-excerpt">${item.excerpt}</p>` : ''}
                ${item.link ? `<a href="${item.link}" class="news-link" target="_blank">阅读全文 <i class="fas fa-arrow-right"></i></a>` : ''}
            </div>
        </article>
    `).join('');
}

// 渲染合作伙伴
function renderPartnersList() {
    if (!siteData || !siteData.partners) return;
    
    const partnersGrid = document.querySelector('.partners .partners-grid');
    if (!partnersGrid) return;
    
    partnersGrid.innerHTML = siteData.partners.map(item => `
        <div class="partner-logo">
            <i class="fas fa-${item.icon || 'handshake'}"></i>
            <span>${item.name}</span>
        </div>
    `).join('');
}

// 渲染会员企业
function renderMembersList() {
    if (!siteData || !siteData.members) return;
    
    const membersGrid = document.querySelector('.members .members-grid');
    if (!membersGrid) return;
    
    membersGrid.innerHTML = siteData.members.map(item => `
        <div class="member-card">
            <div class="member-logo">
                <i class="fas fa-${item.icon || 'industry'}"></i>
            </div>
            <h4>${item.name}</h4>
            <p>${item.industry}</p>
        </div>
    `).join('');
}

// 渲染服务列表
function renderServicesList() {
    if (!siteData || !siteData.services) return;
    
    const servicesGrid = document.querySelector('.services .services-grid');
    if (!servicesGrid) return;
    
    servicesGrid.innerHTML = siteData.services.map(item => `
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-${item.icon || 'star'}"></i>
            </div>
            <h3 class="service-title">${item.title}</h3>
            <p class="service-desc">${item.desc}</p>
        </div>
    `).join('');
}

// 渲染相册
function renderGalleryList() {
    if (!siteData || !siteData.gallery) return;
    
    const galleryGrid = document.querySelector('.gallery .gallery-grid');
    if (!galleryGrid) return;
    
    const html = siteData.gallery.map((item, index) => {
        const isLarge = index === 0;
        return `
        <div class="gallery-item ${isLarge ? 'gallery-large' : ''}">
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-overlay">
                <span>${item.title}</span>
            </div>
        </div>
        `;
    }).join('');
    
    galleryGrid.innerHTML = html;
}

// 头部滚动效果
function initHeader() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// 语言切换
function initLanguageSwitch() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    // 安全检查
    if (!langBtn || !langDropdown) {
        console.log('语言切换元素未找到');
        return;
    }
    
    // 点击按钮切换下拉菜单
    langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        langDropdown.style.opacity = langDropdown.style.opacity === '1' ? '0' : '1';
        langDropdown.style.visibility = langDropdown.style.visibility === 'visible' ? 'hidden' : 'visible';
        langDropdown.style.transform = langDropdown.style.transform === 'translateY(0)' ? 'translateY(-10px)' : 'translateY(0)';
    });
    
    // 点击下拉菜单中的选项
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const lang = this.dataset.lang;
            changeLanguage(lang);
            
            // 关闭下拉菜单
            langDropdown.style.opacity = '0';
            langDropdown.style.visibility = 'hidden';
            langDropdown.style.transform = 'translateY(-10px)';
        });
    });
    
    // 点击其他地方关闭下拉
    document.addEventListener('click', function() {
        langDropdown.style.opacity = '0';
        langDropdown.style.visibility = 'hidden';
        langDropdown.style.transform = 'translateY(-10px)';
    });
    
    // 阻止下拉菜单点击关闭
    langDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

function changeLanguage(lang) {
    currentLang = lang;
    const langNames = { 
        zh: '中文', 
        en: 'English', 
        kk: 'Қазақша', 
        ru: 'Русский',
        ky: 'Кыргызча',
        uz: 'O\'zbekcha',
        tk: 'Türkmençe',
        tg: 'Тоҷикӣ'
    };
    
    // 更新按钮文本
    const langText = langNames[lang] || lang;
    document.getElementById('currentLang').textContent = langText;
    
    // 更新下拉菜单选中状态
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        }
    });
    
    // 更新页面文本
    updatePageContent(lang);
    
    // 更新html lang属性
    document.documentElement.lang = lang;
}

function updatePageContent(lang) {
    const trans = translations[lang];
    
    // 更新所有带data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        const keys = key.split('.');
        let value = trans;
        
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                value = undefined;
                break;
            }
        }
        
        if (value && typeof value === 'string') {
            element.textContent = value;
        }
    });
}

// 移动端菜单
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');
    
    mobileBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // 点击导航链接关闭菜单
    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileBtn.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

// 滚动动画
function initScrollEffects() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // 如果是统计数字，触发动画
                if (entry.target.classList.contains('stat-item')) {
                    const counter = entry.target.querySelector('.stat-number');
                    if (counter) {
                        animateCounter(counter);
                    }
                }
            }
        });
    }, observerOptions);
    
    // 观察元素
    document.querySelectorAll('.stat-item, .service-card, .env-card, .news-card, .partner-logo').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
    
    // 添加动画类
    document.addEventListener('scroll', function() {
        document.querySelectorAll('.stat-item, .service-card, .env-card, .news-card, .partner-logo').forEach(el => {
            if (el.classList.contains('animated')) return;
            
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.classList.add('animated');
                
                // 统计数字动画
                if (el.classList.contains('stat-item')) {
                    const counter = el.querySelector('.stat-number');
                    if (counter) {
                        animateCounter(counter);
                    }
                }
            }
        });
    });
}

// 计数器动画 - 直接显示数值，不使用动画
function initCounterAnimation() {
    // 直接显示最终数值，不使用滚动动画
    setTimeout(function() {
        document.querySelectorAll('.stat-item').forEach(item => {
            const counter = item.querySelector('.stat-number');
            if (counter) {
                const target = counter.dataset.count;
                // 直接设置最终值，不经过动画
                counter.textContent = target;
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    }, 100);
}

function animateCounter(element) {
    const target = parseInt(element.dataset.count);
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // 使用缓动函数
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeOut);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight * 0.8 &&
        rect.bottom > 0
    );
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 联系表单
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // 显示成功消息
            alert('感谢您的留言！我们会尽快与您联系。');
            
            // 重置表单
            form.reset();
        });
    }
}

// 滚动到顶部初始化
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollTop');
    if (window.scrollY > 300) {
        if (!scrollBtn) {
            const btn = document.createElement('button');
            btn.id = 'scrollTop';
            btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            btn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: var(--accent-color);
                color: var(--primary-color);
                border: none;
                border-radius: 50%;
                cursor: pointer;
                z-index: 1000;
                box-shadow: var(--shadow-lg);
                transition: var(--transition);
            `;
            btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
            document.body.appendChild(btn);
        }
    } else {
        const scrollBtn = document.getElementById('scrollTop');
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});
