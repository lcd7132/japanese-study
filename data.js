// ===== Hiragana Data =====
const HIRAGANA = [
    // Vowels
    {char:'あ',romaji:'a',example:'あめ (ame) - 비'},
    {char:'い',romaji:'i',example:'いぬ (inu) - 개'},
    {char:'う',romaji:'u',example:'うみ (umi) - 바다'},
    {char:'え',romaji:'e',example:'えき (eki) - 역'},
    {char:'お',romaji:'o',example:'おか (oka) - 언덕'},
    // K-row
    {char:'か',romaji:'ka',example:'かさ (kasa) - 우산'},
    {char:'き',romaji:'ki',example:'きく (kiku) - 국화'},
    {char:'く',romaji:'ku',example:'くも (kumo) - 구름'},
    {char:'け',romaji:'ke',example:'けむり (kemuri) - 연기'},
    {char:'こ',romaji:'ko',example:'こえ (koe) - 목소리'},
    // S-row
    {char:'さ',romaji:'sa',example:'さくら (sakura) - 벚꽃'},
    {char:'し',romaji:'shi',example:'しお (shio) - 소금'},
    {char:'す',romaji:'su',example:'すし (sushi) - 초밥'},
    {char:'せ',romaji:'se',example:'せんせい (sensei) - 선생님'},
    {char:'そ',romaji:'so',example:'そら (sora) - 하늘'},
    // T-row
    {char:'た',romaji:'ta',example:'たまご (tamago) - 계란'},
    {char:'ち',romaji:'chi',example:'ちず (chizu) - 지도'},
    {char:'つ',romaji:'tsu',example:'つき (tsuki) - 달'},
    {char:'て',romaji:'te',example:'てがみ (tegami) - 편지'},
    {char:'と',romaji:'to',example:'とけい (tokei) - 시계'},
    // N-row
    {char:'な',romaji:'na',example:'なつ (natsu) - 여름'},
    {char:'に',romaji:'ni',example:'にく (niku) - 고기'},
    {char:'ぬ',romaji:'nu',example:'ぬの (nuno) - 천'},
    {char:'ね',romaji:'ne',example:'ねこ (neko) - 고양이'},
    {char:'の',romaji:'no',example:'のり (nori) - 김'},
    // H-row
    {char:'は',romaji:'ha',example:'はな (hana) - 꽃'},
    {char:'ひ',romaji:'hi',example:'ひと (hito) - 사람'},
    {char:'ふ',romaji:'fu',example:'ふゆ (fuyu) - 겨울'},
    {char:'へ',romaji:'he',example:'へや (heya) - 방'},
    {char:'ほ',romaji:'ho',example:'ほし (hoshi) - 별'},
    // M-row
    {char:'ま',romaji:'ma',example:'まち (machi) - 마을'},
    {char:'み',romaji:'mi',example:'みず (mizu) - 물'},
    {char:'む',romaji:'mu',example:'むし (mushi) - 벌레'},
    {char:'め',romaji:'me',example:'めがね (megane) - 안경'},
    {char:'も',romaji:'mo',example:'もり (mori) - 숲'},
    // Y-row
    {char:'や',romaji:'ya',example:'やま (yama) - 산'},
    {char:'ゆ',romaji:'yu',example:'ゆき (yuki) - 눈'},
    {char:'よ',romaji:'yo',example:'よる (yoru) - 밤'},
    // R-row
    {char:'ら',romaji:'ra',example:'らいねん (rainen) - 내년'},
    {char:'り',romaji:'ri',example:'りんご (ringo) - 사과'},
    {char:'る',romaji:'ru',example:'るす (rusu) - 부재'},
    {char:'れ',romaji:'re',example:'れきし (rekishi) - 역사'},
    {char:'ろ',romaji:'ro',example:'ろうか (rouka) - 복도'},
    // W-row + N
    {char:'わ',romaji:'wa',example:'わたし (watashi) - 나'},
    {char:'を',romaji:'wo',example:'を (wo) - 조사'},
    {char:'ん',romaji:'n',example:'にほん (nihon) - 일본'}
];

// ===== Katakana Data =====
const KATAKANA = [
    {char:'ア',romaji:'a',example:'アメリカ (amerika) - 미국'},
    {char:'イ',romaji:'i',example:'インド (indo) - 인도'},
    {char:'ウ',romaji:'u',example:'ウイスキー (uisukii) - 위스키'},
    {char:'エ',romaji:'e',example:'エレベーター (erebeetaa) - 엘리베이터'},
    {char:'オ',romaji:'o',example:'オレンジ (orenji) - 오렌지'},
    {char:'カ',romaji:'ka',example:'カメラ (kamera) - 카메라'},
    {char:'キ',romaji:'ki',example:'キッチン (kicchin) - 주방'},
    {char:'ク',romaji:'ku',example:'クラス (kurasu) - 클래스'},
    {char:'ケ',romaji:'ke',example:'ケーキ (keeki) - 케이크'},
    {char:'コ',romaji:'ko',example:'コーヒー (koohii) - 커피'},
    {char:'サ',romaji:'sa',example:'サラダ (sarada) - 샐러드'},
    {char:'シ',romaji:'shi',example:'シャツ (shatsu) - 셔츠'},
    {char:'ス',romaji:'su',example:'スポーツ (supootsu) - 스포츠'},
    {char:'セ',romaji:'se',example:'セーター (seetaa) - 스웨터'},
    {char:'ソ',romaji:'so',example:'ソファー (sofaa) - 소파'},
    {char:'タ',romaji:'ta',example:'タクシー (takushii) - 택시'},
    {char:'チ',romaji:'chi',example:'チーズ (chiizu) - 치즈'},
    {char:'ツ',romaji:'tsu',example:'ツアー (tsuaa) - 투어'},
    {char:'テ',romaji:'te',example:'テレビ (terebi) - 텔레비전'},
    {char:'ト',romaji:'to',example:'トマト (tomato) - 토마토'},
    {char:'ナ',romaji:'na',example:'ナイフ (naifu) - 나이프'},
    {char:'ニ',romaji:'ni',example:'ニュース (nyuusu) - 뉴스'},
    {char:'ヌ',romaji:'nu',example:'ヌードル (nuudoru) - 국수'},
    {char:'ネ',romaji:'ne',example:'ネクタイ (nekutai) - 넥타이'},
    {char:'ノ',romaji:'no',example:'ノート (nooto) - 노트'},
    {char:'ハ',romaji:'ha',example:'ハンバーガー (hanbaagaa) - 햄버거'},
    {char:'ヒ',romaji:'hi',example:'ヒーター (hiitaa) - 히터'},
    {char:'フ',romaji:'fu',example:'フランス (furansu) - 프랑스'},
    {char:'ヘ',romaji:'he',example:'ヘリコプター (herikoputaa) - 헬리콥터'},
    {char:'ホ',romaji:'ho',example:'ホテル (hoteru) - 호텔'},
    {char:'マ',romaji:'ma',example:'マスク (masuku) - 마스크'},
    {char:'ミ',romaji:'mi',example:'ミルク (miruku) - 우유'},
    {char:'ム',romaji:'mu',example:'ムード (muudo) - 분위기'},
    {char:'メ',romaji:'me',example:'メニュー (menyuu) - 메뉴'},
    {char:'モ',romaji:'mo',example:'モデル (moderu) - 모델'},
    {char:'ヤ',romaji:'ya',example:'ヤング (yangu) - 젊은'},
    {char:'ユ',romaji:'yu',example:'ユニフォーム (yunifoomu) - 유니폼'},
    {char:'ヨ',romaji:'yo',example:'ヨーグルト (yooguruto) - 요구르트'},
    {char:'ラ',romaji:'ra',example:'ラーメン (raamen) - 라면'},
    {char:'リ',romaji:'ri',example:'リモコン (rimokon) - 리모컨'},
    {char:'ル',romaji:'ru',example:'ルール (ruuru) - 규칙'},
    {char:'レ',romaji:'re',example:'レストラン (resutoran) - 레스토랑'},
    {char:'ロ',romaji:'ro',example:'ロボット (robotto) - 로봇'},
    {char:'ワ',romaji:'wa',example:'ワイン (wain) - 와인'},
    {char:'ヲ',romaji:'wo',example:'ヲ (wo) - 조사'},
    {char:'ン',romaji:'n',example:'パン (pan) - 빵'}
];

// ===== Vocabulary Data =====
const VOCABULARY = {
    greetings: [
        {jp:'おはようございます',reading:'ohayou gozaimasu',kr:'안녕하세요 (아침)',ex:'おはようございます、せんせい。/ 안녕하세요, 선생님.'},
        {jp:'こんにちは',reading:'konnichiwa',kr:'안녕하세요 (낮)',ex:'こんにちは、おげんきですか。/ 안녕하세요, 잘 지내세요?'},
        {jp:'こんばんは',reading:'konbanwa',kr:'안녕하세요 (저녁)',ex:'こんばんは、いいてんきですね。/ 안녕하세요, 날씨가 좋네요.'},
        {jp:'さようなら',reading:'sayounara',kr:'안녕히 가세요',ex:'さようなら、またあした。/ 안녕, 내일 또 만나.'},
        {jp:'ありがとうございます',reading:'arigatou gozaimasu',kr:'감사합니다',ex:'たすけてくれて、ありがとうございます。/ 도와주셔서 감사합니다.'},
        {jp:'すみません',reading:'sumimasen',kr:'실례합니다/죄송합니다',ex:'すみません、えきはどこですか。/ 실례합니다, 역이 어디예요?'},
        {jp:'いただきます',reading:'itadakimasu',kr:'잘 먹겠습니다',ex:'いただきます！/ 잘 먹겠습니다!'},
        {jp:'ごちそうさまでした',reading:'gochisousama deshita',kr:'잘 먹었습니다',ex:'ごちそうさまでした！/ 잘 먹었습니다!'},
        {jp:'おやすみなさい',reading:'oyasuminasai',kr:'안녕히 주무세요',ex:'おやすみなさい、いいゆめを。/ 안녕히 주무세요, 좋은 꿈 꾸세요.'},
        {jp:'はじめまして',reading:'hajimemashite',kr:'처음 뵙겠습니다',ex:'はじめまして、たなかです。/ 처음 뵙겠습니다, 타나카입니다.'}
    ],
    numbers: [
        {jp:'いち',reading:'ichi',kr:'1 (일)',ex:'いちばん / 1번'},
        {jp:'に',reading:'ni',kr:'2 (이)',ex:'にがつ / 2월'},
        {jp:'さん',reading:'san',kr:'3 (삼)',ex:'さんにん / 3명'},
        {jp:'し / よん',reading:'shi / yon',kr:'4 (사)',ex:'よじ / 4시'},
        {jp:'ご',reading:'go',kr:'5 (오)',ex:'ごふん / 5분'},
        {jp:'ろく',reading:'roku',kr:'6 (육)',ex:'ろくがつ / 6월'},
        {jp:'しち / なな',reading:'shichi / nana',kr:'7 (칠)',ex:'ななじ / 7시'},
        {jp:'はち',reading:'hachi',kr:'8 (팔)',ex:'はちがつ / 8월'},
        {jp:'きゅう / く',reading:'kyuu / ku',kr:'9 (구)',ex:'くじ / 9시'},
        {jp:'じゅう',reading:'juu',kr:'10 (십)',ex:'じゅうえん / 10엔'},
        {jp:'ひゃく',reading:'hyaku',kr:'100 (백)',ex:'ひゃくえん / 100엔'},
        {jp:'せん',reading:'sen',kr:'1000 (천)',ex:'せんえん / 1000엔'}
    ],
    family: [
        {jp:'おかあさん',reading:'okaasan',kr:'어머니',ex:'おかあさんはやさしいです。/ 어머니는 상냥합니다.'},
        {jp:'おとうさん',reading:'otousan',kr:'아버지',ex:'おとうさんはかいしゃいんです。/ 아버지는 회사원입니다.'},
        {jp:'おにいさん',reading:'oniisan',kr:'형/오빠',ex:'おにいさんはだいがくせいです。/ 형은 대학생입니다.'},
        {jp:'おねえさん',reading:'oneesan',kr:'누나/언니',ex:'おねえさんはせんせいです。/ 언니는 선생님입니다.'},
        {jp:'おとうと',reading:'otouto',kr:'남동생',ex:'おとうとはちゅうがくせいです。/ 남동생은 중학생입니다.'},
        {jp:'いもうと',reading:'imouto',kr:'여동생',ex:'いもうとはしょうがくせいです。/ 여동생은 초등학생입니다.'},
        {jp:'おじいさん',reading:'ojiisan',kr:'할아버지',ex:'おじいさんはげんきです。/ 할아버지는 건강합니다.'},
        {jp:'おばあさん',reading:'obaasan',kr:'할머니',ex:'おばあさんはりょうりがじょうずです。/ 할머니는 요리를 잘합니다.'}
    ],
    food: [
        {jp:'ごはん',reading:'gohan',kr:'밥',ex:'ごはんをたべます。/ 밥을 먹습니다.'},
        {jp:'パン',reading:'pan',kr:'빵',ex:'あさ、パンをたべます。/ 아침에 빵을 먹습니다.'},
        {jp:'みず',reading:'mizu',kr:'물',ex:'みずをのみます。/ 물을 마십니다.'},
        {jp:'おちゃ',reading:'ocha',kr:'차',ex:'おちゃをどうぞ。/ 차를 드세요.'},
        {jp:'さかな',reading:'sakana',kr:'생선',ex:'さかながすきです。/ 생선을 좋아합니다.'},
        {jp:'にく',reading:'niku',kr:'고기',ex:'にくをやきます。/ 고기를 굽습니다.'},
        {jp:'やさい',reading:'yasai',kr:'야채',ex:'やさいをたべましょう。/ 야채를 먹읍시다.'},
        {jp:'くだもの',reading:'kudamono',kr:'과일',ex:'くだものがおいしいです。/ 과일이 맛있습니다.'},
        {jp:'たまご',reading:'tamago',kr:'계란',ex:'たまごをにます。/ 계란을 삶습니다.'},
        {jp:'りんご',reading:'ringo',kr:'사과',ex:'りんごをひとつください。/ 사과 하나 주세요.'}
    ],
    time: [
        {jp:'きょう',reading:'kyou',kr:'오늘',ex:'きょうはいいてんきです。/ 오늘은 좋은 날씨입니다.'},
        {jp:'あした',reading:'ashita',kr:'내일',ex:'あしたがっこうにいきます。/ 내일 학교에 갑니다.'},
        {jp:'きのう',reading:'kinou',kr:'어제',ex:'きのうえいがをみました。/ 어제 영화를 봤습니다.'},
        {jp:'あさ',reading:'asa',kr:'아침',ex:'あさはやくおきます。/ 아침 일찍 일어납니다.'},
        {jp:'ひる',reading:'hiru',kr:'낮/점심',ex:'ひるごはんをたべます。/ 점심을 먹습니다.'},
        {jp:'よる',reading:'yoru',kr:'밤',ex:'よるべんきょうします。/ 밤에 공부합니다.'},
        {jp:'いま',reading:'ima',kr:'지금',ex:'いまなんじですか。/ 지금 몇 시입니까?'},
        {jp:'まいにち',reading:'mainichi',kr:'매일',ex:'まいにちにほんごをべんきょうします。/ 매일 일본어를 공부합니다.'}
    ],
    verbs: [
        {jp:'たべる',reading:'taberu',kr:'먹다',ex:'ごはんをたべる。/ 밥을 먹다.'},
        {jp:'のむ',reading:'nomu',kr:'마시다',ex:'みずをのむ。/ 물을 마시다.'},
        {jp:'いく',reading:'iku',kr:'가다',ex:'がっこうにいく。/ 학교에 가다.'},
        {jp:'くる',reading:'kuru',kr:'오다',ex:'ともだちがくる。/ 친구가 오다.'},
        {jp:'みる',reading:'miru',kr:'보다',ex:'テレビをみる。/ TV를 보다.'},
        {jp:'きく',reading:'kiku',kr:'듣다',ex:'おんがくをきく。/ 음악을 듣다.'},
        {jp:'よむ',reading:'yomu',kr:'읽다',ex:'ほんをよむ。/ 책을 읽다.'},
        {jp:'かく',reading:'kaku',kr:'쓰다',ex:'てがみをかく。/ 편지를 쓰다.'},
        {jp:'はなす',reading:'hanasu',kr:'말하다',ex:'にほんごをはなす。/ 일본어를 말하다.'},
        {jp:'する',reading:'suru',kr:'하다',ex:'べんきょうする。/ 공부하다.'}
    ],
    adjectives: [
        {jp:'おおきい',reading:'ookii',kr:'크다',ex:'おおきいいえ / 큰 집'},
        {jp:'ちいさい',reading:'chiisai',kr:'작다',ex:'ちいさいねこ / 작은 고양이'},
        {jp:'あたらしい',reading:'atarashii',kr:'새롭다',ex:'あたらしいくるま / 새 차'},
        {jp:'ふるい',reading:'furui',kr:'오래되다',ex:'ふるいまち / 오래된 마을'},
        {jp:'たかい',reading:'takai',kr:'비싸다/높다',ex:'たかいやま / 높은 산'},
        {jp:'やすい',reading:'yasui',kr:'싸다',ex:'やすいみせ / 싼 가게'},
        {jp:'おいしい',reading:'oishii',kr:'맛있다',ex:'おいしいりょうり / 맛있는 요리'},
        {jp:'たのしい',reading:'tanoshii',kr:'즐겁다',ex:'たのしいりょこう / 즐거운 여행'},
        {jp:'むずかしい',reading:'muzukashii',kr:'어렵다',ex:'むずかしいもんだい / 어려운 문제'},
        {jp:'やさしい',reading:'yasashii',kr:'쉽다/상냥하다',ex:'やさしいひと / 상냥한 사람'}
    ],
    daily: [
        {jp:'がっこう',reading:'gakkou',kr:'학교',ex:'がっこうにいきます。/ 학교에 갑니다.'},
        {jp:'しごと',reading:'shigoto',kr:'일/직장',ex:'しごとがいそがしい。/ 일이 바쁘다.'},
        {jp:'でんしゃ',reading:'densha',kr:'전철',ex:'でんしゃにのります。/ 전철을 탑니다.'},
        {jp:'ともだち',reading:'tomodachi',kr:'친구',ex:'ともだちとあそびます。/ 친구와 놉니다.'},
        {jp:'べんきょう',reading:'benkyou',kr:'공부',ex:'にほんごをべんきょうします。/ 일본어를 공부합니다.'},
        {jp:'おかね',reading:'okane',kr:'돈',ex:'おかねがありますか。/ 돈이 있습니까?'},
        {jp:'でんわ',reading:'denwa',kr:'전화',ex:'でんわをかけます。/ 전화를 겁니다.'},
        {jp:'えいが',reading:'eiga',kr:'영화',ex:'えいがをみにいきます。/ 영화를 보러 갑니다.'}
    ]
};

// ===== Grammar Data =====
const GRAMMAR = [
    {
        title:'~です / ~입니다',level:'N5',
        pattern:'[명사] です',
        desc:'가장 기본적인 정중한 서술문. 명사 뒤에 붙여 "~입니다"라는 의미.',
        examples:[
            {jp:'わたしはがくせいです。',kr:'저는 학생입니다.'},
            {jp:'これはほんです。',kr:'이것은 책입니다.'},
            {jp:'きょうはにちようびです。',kr:'오늘은 일요일입니다.'}
        ]
    },
    {
        title:'~は~です / ~은/는 ~입니다',level:'N5',
        pattern:'[주어] は [서술어] です',
        desc:'주제를 나타내는 조사 は(wa). 문장의 주제를 표시.',
        examples:[
            {jp:'たなかさんはせんせいです。',kr:'타나카씨는 선생님입니다.'},
            {jp:'にほんごはたのしいです。',kr:'일본어는 즐겁습니다.'},
            {jp:'あのひとはだれですか。',kr:'저 사람은 누구입니까?'}
        ]
    },
    {
        title:'~を / ~을/를 (목적격)',level:'N5',
        pattern:'[목적어] を [동사]',
        desc:'목적어를 나타내는 조사. 동작의 대상을 표시.',
        examples:[
            {jp:'ごはんをたべます。',kr:'밥을 먹습니다.'},
            {jp:'みずをのみます。',kr:'물을 마십니다.'},
            {jp:'テレビをみます。',kr:'TV를 봅니다.'}
        ]
    },
    {
        title:'~に / ~에 (장소·시간)',level:'N5',
        pattern:'[장소/시간] に [동사]',
        desc:'장소(존재·도착)나 시간을 나타내는 조사.',
        examples:[
            {jp:'がっこうにいきます。',kr:'학교에 갑니다.'},
            {jp:'しちじにおきます。',kr:'7시에 일어납니다.'},
            {jp:'いえにいます。',kr:'집에 있습니다.'}
        ]
    },
    {
        title:'~ます / 정중형',level:'N5',
        pattern:'[동사 어간] ます',
        desc:'동사의 정중한 표현. 일상 대화에서 자주 사용.',
        examples:[
            {jp:'まいにちべんきょうします。',kr:'매일 공부합니다.'},
            {jp:'あしたともだちにあいます。',kr:'내일 친구를 만납니다.'},
            {jp:'にほんごをはなします。',kr:'일본어를 말합니다.'}
        ]
    },
    {
        title:'~ません / 정중 부정',level:'N5',
        pattern:'[동사 어간] ません',
        desc:'동사 정중형의 부정. "~하지 않습니다".',
        examples:[
            {jp:'にくをたべません。',kr:'고기를 먹지 않습니다.'},
            {jp:'おさけをのみません。',kr:'술을 마시지 않습니다.'},
            {jp:'きょうはいきません。',kr:'오늘은 가지 않습니다.'}
        ]
    },
    {
        title:'~ました / 과거 정중',level:'N5',
        pattern:'[동사 어간] ました',
        desc:'동사의 과거 정중형. "~했습니다".',
        examples:[
            {jp:'きのうえいがをみました。',kr:'어제 영화를 봤습니다.'},
            {jp:'にほんにいきました。',kr:'일본에 갔습니다.'},
            {jp:'おいしいりょうりをたべました。',kr:'맛있는 요리를 먹었습니다.'}
        ]
    },
    {
        title:'~たい / ~하고 싶다',level:'N5',
        pattern:'[동사 어간] たい',
        desc:'희망을 나타내는 표현. 자신의 바람을 말할 때 사용.',
        examples:[
            {jp:'にほんにいきたいです。',kr:'일본에 가고 싶습니다.'},
            {jp:'すしをたべたいです。',kr:'초밥을 먹고 싶습니다.'},
            {jp:'にほんごをはなしたいです。',kr:'일본어를 말하고 싶습니다.'}
        ]
    }
];

const KANA_ROWS = {
    hiragana: ['모음','K행','S행','T행','N행','H행','M행','Y행','R행','W행+ん'],
    katakana: ['모음','K행','S행','T행','N행','H행','M행','Y행','R행','W행+ン']
};
