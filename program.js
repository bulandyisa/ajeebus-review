/* Аджибус — учебная программа уровня 2.
   Одно место, откуда берутся и приложение, и документ, и подписи в дашборде.
   Порядок блоков внутри урока: холодный вход → лексика → тренировка → сцена → разбор → теория → итог.
   Правило: одно новое грамматическое правило на урок, не больше. */

window.AJ.locNames = {
  alley:  'УЛИЦА',
  shop:   'КВАРТИРА · ГОСТИНАЯ',
  tea:    'КВАРТИРА · КУХОННЫЙ УГОЛ',
  yard:   'КРЫША-ТЕРРАСА',
  market: 'ПРОДУКТОВЫЙ МАГАЗИН'
};

window.AJ.structure = [
  ['Холодный вход', '15–20 секунд из сцены урока. Без субтитров, без перевода. Задача блока — не научить, а поставить вопрос.', 'видео'],
  ['Лексика',       'Карточка: картинка из той же квартиры → арабская запись → транслитерация → звук. Перевод открывается вторым касанием, а не сразу.', 'картинки'],
  ['Тренировка',    'Шесть заданий: четыре на новое, два на повторение из прошлых уроков.', 'интерактив'],
  ['Сцена',         'Полное видео урока. Субтитры переключаются: нет → арабские → арабские с переводом.', 'видео'],
  ['Разбор',        'Два-три задания по фразам, которые прозвучали в сцене. Не по списку лексики, а по видео.', 'интерактив'],
  ['Теория',        'Одно правило. Текст плюс озвучка голосом Аджибуса плюс одна картинка. Блок необязательный — «почему так».', 'текст + голос'],
  ['Итог',          'Три строки и фраза дня — то, что предлагается сказать живому человеку сегодня.', 'текст']
];

window.AJ.drillTypes = {
  match:  ['Картинка ↔ фраза',  'Показываем четыре картинки и четыре фразы, ученик соединяет.'],
  listen: ['Услышал — показал', 'Звучит фраза, на экране три картинки. Проверяем понимание на слух, а не чтение.'],
  build:  ['Собери фразу',      'Слова вперемешку, нужно выложить их в правильном порядке.'],
  gap:    ['Пропущенное слово', 'Фраза с дыркой и три варианта.'],
  say:    ['Скажи вслух',       'Ученик произносит фразу, слышит эталон Аджибуса рядом со своей записью.'],
  recall: ['Из прошлых уроков', 'Интервальное повторение. Два задания в каждом уроке, начиная со второго.']
};

window.AJ.program = [

/* ============================== УРОК 1 ============================== */
{
  n:1,
  goal:'Поздороваться, назвать себя, спросить имя собеседника и попрощаться.',
  why:'Первый урок не учит языку — он продаёт сериал. Ученик должен на второй минуте сказать вслух настоящую арабскую фразу и получить за это ответ Аджибуса.',
  vocab:[
    {ar:'السلام عليكم', tr:'ас-саля́му ‘алейку́м', ru:'здравствуйте (букв. «мир вам»)', kind:'core',
     img:'Photoreal medium shot on a sunny modern city street: an older Arab man with a white henna-tipped beard and round glasses raises his hand in greeting, warm morning light'},
    {ar:'وعليكم السلام', tr:'уа ‘алейку́му с-саля́м', ru:'и вам мир (ответ на приветствие)', kind:'core',
     img:'Photoreal medium shot: a young man in a denim jacket with a canvas backpack answers a greeting, hand on heart, modern city street behind him'},
    {ar:'أنا…', tr:'а́на…', ru:'я…', kind:'core',
     img:'Photoreal medium close-up: an older Arab man with a white henna-tipped beard presses his palm flat to his own chest, introducing himself'},
    {ar:'وأنت؟', tr:'уа а́нта?', ru:'а ты?', kind:'core',
     img:'Photoreal medium shot: an older Arab man turns an open questioning palm toward the viewer, eyebrows raised'},
    {ar:'مع السلامة', tr:'ма‘а с-саля́ма', ru:'до свидания', kind:'core',
     img:'Photoreal wide shot at dusk: two men wave goodbye at the door of a modern apartment building, city lights behind them'},
    {ar:'أهلاً وسهلاً', tr:'а́хлян уа са́хлян', ru:'добро пожаловать', kind:'seed',
     img:'Photoreal shot of a modern apartment hallway with the front door thrown wide open, light from the stairwell falling in'},
    {ar:'تفضّل', tr:'тафа́ддаль', ru:'прошу, проходи', kind:'seed',
     img:'Photoreal medium shot: an older Arab man makes a wide welcoming sweep of the arm toward an open doorway'},
    {ar:'عجيب', tr:'‘аджи́б', ru:'удивительно!', kind:'seed',
     img:'Photoreal close-up of a delighted older Arab face, eyebrows high, both hands thrown up in wonder'},
    {ar:'لا', tr:'ля', ru:'нет', kind:'seed',
     img:'Photoreal shot on a rooftop terrace: a goat chewing the strap of a canvas backpack among potted plants'}
  ],
  theory:{
    title:'Почему ответ не повторяет приветствие',
    text:[
      '«السلام عليكم» — это не «привет». Дословно это «мир вам»: не приветствие, а пожелание. Поэтому его не возвращают тем же самым — на него отвечают «وعليكم السلام», «и вам мир». Приветствие всегда пара, вторая половина обязательна.',
      'Теперь посмотрите на «أنا يونس» — «я Юнус». Здесь нет слова «есть». В арабском в настоящем времени глагола-связки просто не существует: два слова рядом уже составляют предложение. Русскому уху это привычно, англоговорящему приходится переучиваться — вам повезло.',
      'Мелким шрифтом: «وأنت؟» — обращение к мужчине. Женщине говорят «وأنتِ؟», «уа а́нти». Пока держите в голове мужскую форму, женскую разберём, когда она понадобится.'
    ],
    voice:'Слушай сюда, друг. Когда араб говорит «ас-саляму алейкум» — он с тобой не здоровается. Он даёт тебе мир. А мир нельзя вернуть ровно столько же, сколько дали, — надо вернуть чуть больше: «уа алейкуму с-салям», и вам тоже. Это как чай. Тебе налили — ты наливаешь в ответ. Аджи-и-иб!',
    img:'Photoreal close-up of two hands pouring tea from a glass kettle into two small glasses on a modern kitchen counter, warm light'
  },
  drills:[
    {type:'match',  task:'Соедини фразу и картинку', items:[['السلام عليكم','приветствие'],['مع السلامة','прощание'],['أنا…','рука к груди'],['وأنت؟','ладонь к собеседнику']]},
    {type:'listen', task:'Слушай и выбирай', items:['السلام عليكم','مع السلامة','وأنت؟']},
    {type:'build',  task:'Собери ответ на приветствие', items:[{target:'وعليكم السلام', words:['السلام','وعليكم']}]},
    {type:'gap',    task:'Представься', items:[{text:'أنا ___', hint:'подставьте своё имя'}]},
    {type:'say',    task:'Скажи Аджибусу', items:['السلام عليكم','أنا…']},
    {type:'match',  task:'Что значит слово', items:[['تفضّل','прошу'],['أهلاً وسهلاً','добро пожаловать'],['عجيب','удивительно'],['لا','нет']]}
  ],
  wrap:[
    'Приветствие — всегда пара: сказали «السلام عليكم» — ждите «وعليكم السلام».',
    'Чтобы представиться, глагол не нужен: أنا и имя.',
    'Прощание одно на все случаи: مع السلامة.'
  ],
  phrase:'Скажите сегодня одному живому человеку «السلام عليكم». Не в приложении — вслух.'
},

/* ============================== УРОК 2 ============================== */
{
  n:2,
  goal:'Спросить «что это?» про любой предмет, ответить, согласиться и отказаться.',
  why:'Первый по-настоящему рабочий инструмент: с «ما هذا؟» ученик может выучить любое существительное сам, без нас.',
  vocab:[
    {ar:'ما هذا؟', tr:'ма ха́за?', ru:'что это?', kind:'core',
     img:'Photoreal medium shot: a young man in a denim jacket points at a shelf in a bright modern living room, questioning look'},
    {ar:'هذا…', tr:'ха́за…', ru:'это…', kind:'core',
     img:'Photoreal close-up of a hand pointing at a stack of books on a low shelf in a bright modern living room'},
    {ar:'نعم', tr:'на́‘ам', ru:'да', kind:'core',
     img:'Photoreal close-up of an older Arab man giving a firm thumbs up, delighted expression'},
    {ar:'لا', tr:'ля', ru:'нет', kind:'core',
     img:'Photoreal close-up of an older Arab man wagging one finger, mock-serious expression'},
    {ar:'كتاب', tr:'кита́б', ru:'книга', kind:'core',
     img:'Photoreal close-up of a stack of worn books on a low wooden shelf, soft daylight, modern apartment'},
    {ar:'قلم', tr:'ка́лям', ru:'ручка', kind:'core',
     img:'Photoreal close-up of a single pen lying on a wooden table next to a laptop, soft daylight'},
    {ar:'مفتاح', tr:'мифта́х', ru:'ключ', kind:'core',
     img:'Photoreal close-up of a single key on a red cord hanging from a hook by the front door of a modern apartment hallway'},
    {ar:'قطّ', tr:'китт', ru:'кот', kind:'core',
     img:'Photoreal close-up of a plump ginger-and-white cat asleep on a stack of books in a bright modern living room'},
    {ar:'كيف حالك؟', tr:'ка́йфа ха́люк?', ru:'как дела?', kind:'seed',
     img:'Photoreal medium shot: an older Arab man asks after a guest, palm pressed to his own chest, bright modern living room'},
    {ar:'الحمد لله', tr:'альхамдули-лля́х', ru:'слава Богу (в ответ — «хорошо»)', kind:'seed',
     img:'Photoreal medium close-up of a contented older Arab man, eyes closed, hand on heart'},
    {ar:'أو', tr:'ау', ru:'или', kind:'seed',
     img:'Photoreal close-up of two hands holding a book in one and a pen in the other, offering both to the camera'}
  ],
  theory:{
    title:'هذا и предложение, в котором нет глагола',
    text:[
      '«هذا» значит «этот» или «это». Поэтому «ما هذا؟» — дословно «что это?», а ответ строится так же просто: «هذا كتاب» — «это книга». Опять ни следа глагола «есть»: два слова рядом, и предложение готово. Это та же механика, что в первом уроке с «أنا يونس», просто теперь вы указываете не на себя, а на предмет.',
      '«نعم» и «لا» отвечают на предложение целиком, а не на отдельное слово. «هذا قلم؟» — «نعم». Никаких «да, это есть ручка» не требуется.',
      'И запомните одну деталь, она выстрелит через два урока: сейчас вы говорите «هذا مفتاح» — «это ключ», ключ вообще, любой. Когда ключ станет «тем самым», слово изменится. Пока просто заметьте, что оно выглядит вот так.'
    ],
    voice:'Друг мой, «ма хаза» — это лучшая фраза в языке. Почему? Потому что после неё тебе больше не нужен учитель. Ты тычешь пальцем — тебе говорят слово. Тычешь ещё раз — ещё слово. Я тебе не нужен! Хотя нет. Нужен. Чай сам себя не заварит.',
    img:'Photoreal wide shot of a bright modern living room with a bookshelf, a laptop on a wooden table, a cat asleep on a pile of books'
  },
  drills:[
    {type:'match',  task:'Соедини слово и предмет', items:[['كتاب','книга'],['قلم','ручка'],['مفتاح','ключ'],['قطّ','кот']]},
    {type:'listen', task:'Что назвал Аджибус', items:['كتاب','قلم','مفتاح','قطّ']},
    {type:'build',  task:'Собери вопрос', items:[{target:'ما هذا؟', words:['هذا','ما']}]},
    {type:'gap',    task:'Ответь на вопрос', items:[{text:'___ كتاب', options:['هذا','ما','لا'], answer:'هذا'}]},
    {type:'say',    task:'Спроси про предмет рядом с собой', items:['ما هذا؟']},
    {type:'recall', task:'Из первого урока', items:['السلام عليكم','مع السلامة']}
  ],
  wrap:[
    'ما هذا؟ — «что это?». Работает с любым предметом на свете.',
    'Ответ — без глагола: هذا и слово.',
    'نعم — да, لا — нет. Отвечают на всю фразу целиком.'
  ],
  phrase:'Спросите «ما هذا؟» про пять вещей у себя дома. Ответы найдите сами — это и есть смысл фразы.'
},

/* ============================== УРОК 3 ============================== */
{
  n:3,
  goal:'Попросить то, что хочешь, принять угощение и поблагодарить.',
  why:'Самый применимый урок сезона: أريد + شكرًا закрывают половину бытовых ситуаций в любой арабской стране.',
  vocab:[
    {ar:'أريد…', tr:'ури́ду…', ru:'я хочу…', kind:'core',
     img:'Photoreal medium shot: an older Arab man drops into an armchair by the window, fanning himself, evening city lights behind'},
    {ar:'تفضّل', tr:'тафа́ддаль', ru:'вот, пожалуйста (когда подают)', kind:'core',
     img:'Photoreal close-up of a hand offering a small glass of tea toward the camera, modern kitchen counter behind'},
    {ar:'شكرًا', tr:'шу́кран', ru:'спасибо', kind:'core',
     img:'Photoreal medium close-up: a young man in a denim jacket accepts a glass of tea with both hands, grateful smile'},
    {ar:'شاي', tr:'шай', ru:'чай', kind:'core',
     img:'Photoreal extreme close-up of tea poured in a thin stream from high above into a small glass on a clean countertop'},
    {ar:'ماء', tr:'ма‑а', ru:'вода', kind:'core',
     img:'Photoreal close-up of a glass jug of water and a plain glass on a modern kitchen counter, morning light'},
    {ar:'تمر', tr:'тамр', ru:'финики', kind:'core',
     img:'Photoreal close-up of a bowl of dates on a clean white countertop, warm light from a window'},
    {ar:'قهوة', tr:'ка́хва', ru:'кофе', kind:'core',
     img:'Photoreal close-up of a small cup of black coffee standing alone on a modern kitchen counter'},
    {ar:'لذيذ', tr:'ляз́из', ru:'вкусно', kind:'core',
     img:'Photoreal close-up of a young man mid-bite, eyes wide with delight, modern kitchen behind him'},
    {ar:'طيّب', tr:'та́йиб', ru:'ладно, хорошо', kind:'seed',
     img:'Photoreal medium shot: an older Arab man sighs and hands one last date to a goat standing in an open terrace doorway'}
  ],
  theory:{
    title:'أريد — ваш первый глагол',
    text:[
      '«أريد» — «я хочу». Это уже настоящий глагол, и он в форме первого лица: приставка «أ» в начале и значит «я». Дальше ничего склонять не надо — просто ставьте существительное: أريد شاي, أريد ماء, أريد تمر.',
      '«تفضّل» перевести одним русским словом нельзя. Это универсальное «прошу»: его говорят, когда подают чашку, когда приглашают войти, когда уступают место, когда протягивают документы. Одно слово вместо десяти разных.',
      'И то, что в сериале показано без единой реплики: подают и берут правой рукой. Левая рука в этой роли считается невежливой. Аджибус не объясняет этого Юнусу — он молча разворачивает ему ладонь, и всё понятно.'
    ],
    voice:'Смотри, какая хорошая штука. «Уриду» — я хочу. Дальше говоришь что хочешь, и всё, ты закончил. Уриду шай. Уриду ма. Уриду тамр. Уриду кахва?.. Нет. Нет-нет-нет. Про кофе мы не будем. У меня дома чай.',
    img:'Photoreal close-up of two hands: one offering a date, the other receiving it with the right hand, warm kitchen light'
  },
  drills:[
    {type:'match',  task:'Соедини слово и картинку', items:[['شاي','чай'],['ماء','вода'],['تمر','финики'],['قهوة','кофе']]},
    {type:'build',  task:'Попроси чай', items:[{target:'أريد شاي', words:['شاي','أريد']}]},
    {type:'listen', task:'Что попросили', items:['أريد شاي','أريد ماء','أريد تمر']},
    {type:'gap',    task:'Тебе подали чашку — что ответишь', items:[{text:'___', options:['شكرًا','تفضّل','لا'], answer:'شكرًا'}]},
    {type:'say',    task:'Закажи вслух то, что хочешь', items:['أريد شاي','شكرًا']},
    {type:'recall', task:'Из второго урока', items:['ما هذا؟','هذا كتاب']}
  ],
  wrap:[
    'أريد + слово — этого хватает, чтобы попросить что угодно.',
    'تفضّل говорят, когда подают. شكرًا — когда берут.',
    'Подают и берут правой рукой.'
  ],
  phrase:'Закажите сегодня что-нибудь мысленно по-арабски: أريد + то, что реально хотите.'
},

/* ============================== УРОК 4 ============================== */
{
  n:4,
  goal:'Спросить, где что-то лежит, и ответить «здесь» или «там».',
  why:'Самый лёгкий урок сезона и он стоит сразу после пейволла: человек только что заплатил и должен немедленно получить лёгкую победу. Новых существительных здесь ноль — مفتاح посеян ещё во втором уроке.',
  vocab:[
    {ar:'أين…؟', tr:'а́йна…?', ru:'где…?', kind:'core',
     img:'Photoreal medium shot: an older Arab man shades his eyes with a flat palm, searching, a bright modern living room turned upside down behind him'},
    {ar:'هنا', tr:'ху́на', ru:'здесь', kind:'core',
     img:'Photoreal close-up of a finger pointing sharply down at the floor of a bright modern living room'},
    {ar:'هناك', tr:'хуна́к', ru:'там', kind:'core',
     img:'Photoreal medium shot: a young man points far into the distance from a rooftop terrace, city skyline beyond'},
    {ar:'المفتاح', tr:'аль-мифта́х', ru:'тот самый ключ', kind:'core',
     img:'Photoreal close-up of an empty hook by a front door, only a faint mark on the wall where a key used to hang'},
    {ar:'نظّارة', tr:'назза́ра', ru:'очки', kind:'seed',
     img:'Photoreal close-up of small round glasses pushed up onto a wrinkled forehead, clearly visible'},
    {ar:'تفّاح', tr:'туффа́х', ru:'яблоки', kind:'seed',
     img:'Photoreal close-up of a crate of red apples with a handwritten price label in a bright modern grocery store'},
    {ar:'موز', tr:'мауз', ru:'бананы', kind:'seed',
     img:'Photoreal close-up of a bunch of yellow bananas on a grocery store counter under bright LED light'}
  ],
  theory:{
    title:'ال — арабское «тот самый»',
    text:[
      'Во втором уроке было «هذا مفتاح» — «это ключ». Просто ключ, впервые названный. Здесь Аджибус кричит «أين المفتاح؟» — и впереди слова появилась приставка «ال». Он ищет не какой-нибудь ключ, а свой, тот самый, о котором мы уже знаем.',
      'ال работает ровно как английское the. Пишется слитно со словом и не меняется ни по родам, ни по числам — одна форма на всё. Для языка, где меняется почти всё, это подарок.',
      'Мелким шрифтом, про звук: примерно перед половиной букв «л» в ال проглатывается, а следующая согласная удваивается. الشاي читается не «аль-шай», а «аш-шай». Правило выглядит страшно, а на слух ловится за неделю — просто повторяйте за Аджибусом и не думайте об этом.'
    ],
    voice:'Ключ, ключ, где ключ! Слышишь разницу? Не «мифтах» — «АЛЬ-мифтах». Потому что это не какой-то там ключ с улицы. Это МОЙ ключ. Аль — это когда предмет уже твой знакомый. Как сосед: сначала «какой-то человек», потом «тот человек, который громко ходит».',
    img:'Photoreal close-up of a key on a red cord hanging around a goat’s neck like a pendant, rooftop terrace behind'
  },
  drills:[
    {type:'listen', task:'Где ищут', items:['هنا','هناك','أين المفتاح؟']},
    {type:'build',  task:'Спроси, где ключ', items:[{target:'أين المفتاح؟', words:['المفتاح','أين']}]},
    {type:'gap',    task:'Предмет рядом с тобой — как сказать', items:[{text:'المفتاح ___', options:['هنا','هناك','أين'], answer:'هنا'}]},
    {type:'match',  task:'Соедини', items:[['هنا','здесь'],['هناك','там'],['أين؟','где?'],['نظّارة','очки']]},
    {type:'say',    task:'Спроси вслух', items:['أين المفتاح؟','هنا']},
    {type:'recall', task:'Из третьего урока', items:['أريد شاي','شكرًا']}
  ],
  wrap:[
    'أين + слово — «где…?».',
    'هنا — здесь, هناك — там. Двух слов хватает на любой ответ.',
    'ال перед словом значит «тот самый».'
  ],
  phrase:'Найдите дома любую вещь и спросите вслух: أين ___؟ — а потом сами себе ответьте هنا.'
},

/* ============================== УРОК 5 ============================== */
{
  n:5,
  goal:'Спросить цену, сказать «дорого» и «дёшево», довести покупку до конца самостоятельно.',
  why:'Кульминация сезона. Зритель понимает полторы минуты живого арабского до того, как урок что-то объяснил, — потому что 80% слов он уже носит с собой. На этом ощущении строится продажа следующего уровня.',
  vocab:[
    {ar:'بكم؟', tr:'бика́м?', ru:'сколько стоит?', kind:'core',
     img:'Photoreal medium shot: an older Arab man raises both hands in theatrical enquiry at a fruit counter in a modern grocery store'},
    {ar:'غالي', tr:'га́ли', ru:'дорого', kind:'core',
     img:'Photoreal medium close-up: an older Arab man clutches his heart in mock horror at a grocery store counter'},
    {ar:'رخيص', tr:'рахи́с', ru:'дёшево', kind:'core',
     img:'Photoreal medium close-up of an older Arab man making pleading puppy eyes across a grocery counter'},
    {ar:'تفّاح', tr:'туффа́х', ru:'яблоки', kind:'core',
     img:'Photoreal close-up of a crate of red apples in a bright modern grocery store, price label in front'},
    {ar:'موز', tr:'мауз', ru:'бананы', kind:'core',
     img:'Photoreal close-up of a bunch of yellow bananas on a grocery counter, bright LED light'}
  ],
  theory:{
    title:'Из чего собрано «بكم؟»',
    text:[
      '«بكم؟» — это две части: «بـ» — предлог «за», и «كم» — «сколько». Вместе получается «за сколько?». Никакого специального слова «цена» учить не нужно.',
      '«غالي» и «رخيص» — прилагательные, «дорогой» и «дешёвый». В торге они работают как целые реплики: достаточно произнести одно слово с нужным лицом, и позиция заявлена.',
      'А теперь посчитайте сами. В этой сцене прозвучало около тридцати реплик. Новых слов из них — три. Всё остальное вы уже знали: салям, кайфа халюк, ма хаза, уриду, тафаддаль, шукран, ля, лязиз. Вот так язык и набирается — не списком в двести слов, а пятью словами, которые встречаются в каждой сцене.'
    ],
    voice:'Торговаться — это не про деньги, это про уважение. Ты говоришь «гали!» — дорого. Он говорит: такая цена. Ты хватаешься за сердце. Он не двигается. Ты говоришь «рахис?» — жалобно. Он молчит. И вот тут ты покупаешь. По той же цене. Но теперь вы знакомы!',
    img:'Photoreal wide shot of a modern grocery store aisle with crates of red apples and yellow bananas under bright LED lighting'
  },
  drills:[
    {type:'match',  task:'Соедини', items:[['بكم؟','сколько стоит?'],['غالي','дорого'],['رخيص','дёшево'],['موز','бананы']]},
    {type:'listen', task:'Что сказал Аджибус', items:['بكم؟','غالي','رخيص']},
    {type:'build',  task:'Собери покупку целиком', items:[{target:'أريد موز، بكم؟', words:['بكم؟','موز','أريد']}]},
    {type:'gap',    task:'Цена не понравилась', items:[{text:'___!', options:['غالي','رخيص','شكرًا'], answer:'غالي'}]},
    {type:'say',    task:'Купи бананы сам', items:['أريد موز','بكم؟','شكرًا']},
    {type:'recall', task:'Из уроков 1–4', items:['السلام عليكم','ما هذا؟','أريد تمر','أين المفتاح؟']}
  ],
  wrap:[
    'بكم؟ — «сколько стоит?».',
    'غالي — дорого, رخيص — дёшево. По одному слову хватает.',
    'Полная покупка: أريد + товар → بكم؟ → شكرًا.'
  ],
  phrase:'Проговорите всю покупку целиком, вслух, три раза. В следующий раз это будет в настоящем магазине.'
}
];
