/* Аджибус — данные проекта. Источник: паспорт проекта от 13.08.2026.
   Всё, что дашборд знает о сериале, лежит здесь. Правится руками. */
window.AJ = {
  updated: '2026-09-03',

  /* ---------- персонажи ---------- */
  chars: [
    {
      id:'ajibus',
      plates:['cast-ajibus-01.jpg','cast-ajibus-02.jpg','cast-ajibus-03.jpg'], name:'Аджибус', role:'Чудаковатый восторженный араб ~65 лет, старый арабский город',
      status:'утверждён 14.08',
      folder:'01-канон-аджибус', match:'01-канон-аджибус|07-современн|аджибус|ajibus', not:'юнус|yunus',
      anchors:[
        ['Борода','Пышная белая, подкрашенная хной в рыжину спереди. Единственный якорь, переживший все переделки — модель держит его отлично.'],
        ['Очки','Маленькие круглые. В промпте писать round glasses.'],
        ['Одежда (канон 2.0 от 01.09)','Белоснежный тоуб до пят, поверх него — тот самый вязаный бежевый кардиган. Вариант A кастинга 2.0. Старый канон «рубашка + чинос» отменён вместе с пивотом в арабский сеттинг. По сценарию переодеваем: тоуб меняется, кардиган и такия остаются узнаваемыми.'],
        ['Голова','Белая вязаная такия, под ней ЛЫСАЯ голова — волос по бокам не видно (решение Исы 01.09). Старая чалма-имама отменена, как и «голова непокрытая» из промежуточного канона.'],
        ['Глаза','Очень тёмные карие, почти чёрные. В промпте писать very dark brown eyes, almost black. Голубые и любые светлые запрещены — «не по-арабски».'],
        ['Реквизит','Лупа — опциональна. Кадр «глаз через лупу в камеру» остаётся кандидатом в иконку приложения, но в сериале не обязателен.'],
        ['Пластика','Театральная, размашистая. Брови делают половину актёрской работы.']
      ],
      face:'Густые белые брови — главный инструмент эмоций. Лучистые тёмные глаза в сетке морщинок-смешинок.',
      voice:'Algenib (male, gravelly, low). Во Flow сохранён как «Голос АджибусаAlgenib Custom»: тёплый, с хрипотцой, нараспев, раскатистое «р», длинные щедрые паузы. Взрывается ликующими возгласами, падает в возмущённый шёпот.',
      lock:"the older Arab man in a crisp white ankle-length thobe with a beige knitted cardigan worn over it, a white crocheted taqiyah cap on a bald head with no hair showing at the sides, full white beard with henna-orange front, small round glasses, very dark brown eyes"
    },
    {
      id:'yunus',
      plates:['cast-yunus-01.jpg','cast-yunus-02.jpg','cast-yunus-03.jpg','cast-yunus-04.jpg'], name:'Юнус', role:'Ученик, европеец лет двадцати двух — иностранный студент', status:'утверждён 01.09 (канон 2.0)',
      folder:'02-канон-юнус', match:'02-канон-юнус|юнус|yunus',
      anchors:[
        ['Железное правило','Знание Юнуса всегда равно знанию зрителя. Переспрашивает то, что не понял бы зритель, ошибается там, где ошибся бы зритель.'],
        ['Функция','Не персонаж, а аватар клиента. Его прогресс — главный продающий аргумент.'],
        ['Внешность (канон 2.0 от 01.09)','ЯВНО ЗАПАДНАЯ: светлая кожа, светлые серо-голубые глаза, русые (тёмно-русые) волосы, лёгкая щетина, выразительные тревожные брови. Прежний канон «араб с тёмными волосами» отменён: араб, который не знает арабского, ломает логику, а иностранность Юнуса должна читаться в кадре без слов.'],
        ['Одежда','Джинсовая куртка поверх серой футболки, холщовый рюкзак.'],
        ['Стартовый багаж','Знает по-арабски ровно одно слово: салям.']
      ],
      voice:'Achird (male, friendly, mid pitch).',
      lock:"the Western European young man about twenty-two with fair skin, light blue-grey eyes and tousled light brown hair, in a blue denim jacket over a grey t-shirt with a canvas backpack"
    },
    {
      id:'anza',
      plates:['cast-anza-01.jpg','cast-anza-02.jpg'], name:'Анза (коза)', role:'Коза-воровка, живёт на крыше-террасе', status:'переснята в арабском сеттинге 02.09 — ждёт выбора Исы',
      folder:'03-канон-анза', match:'03-канон-анза|анза',
      anchors:[
        ['Правило мира','Люди говорят — животные действуют. Не разговаривает, ведёт себя как настоящая коза.'],
        ['Функция','Ворует еду и вещи — этим и смешна. В каждой серии. Имя получает в уроке 4.'],
        ['Современный сеттинг','Коза на крыше многоэтажки — абсурд, и он работает на комедию. Не объясняем, откуда она.'],
        ['Что уже сняла','У1Ш12 жуёт рюкзак · У2Ш11 прощание по имени · У3Ш9 утаскивает миску фиников · У4Ш7–8 ключ на шее и погоня.']
      ],
      lock:"a small scruffy tan-and-white nanny goat with one floppy ear and a frayed rope collar, behaving like a real goat"
    },
    {
      id:'cat',
      plates:['cast-cat-01.jpg','cast-cat-02.jpg'], name:'Кот', role:'Спит на стопке книг в гостиной', status:'переснят в арабском сеттинге 02.09 — ждёт выбора Исы',
      folder:'08-канон-кот', match:'08-канон-кот|канон-кот',
      anchors:[
        ['Функция','Живой предмет для «ма хаза?» — единственное существо в кадре, которое можно назвать словом и потрогать.'],
        ['Характер','Полное безразличие. Приоткрывает один глаз и спит дальше. В уроке 4 демонстративно спит на том, под чем ищут ключ.'],
        ['Где снят','У2Ш7 — на стопке книг на деревянном столе.']
      ],
      lock:"a plump ginger-and-white cat with a torn ear, asleep on a stack of books, opening one eye and going back to sleep"
    },
    {
      id:'seller',
      plates:['cast-seller-01.jpg','cast-seller-02.jpg'], name:'Продавец в магазине', role:'Эпизодический, урок 5', status:'кастинг 17.08',
      folder:'04-канон-продавец', match:'04-канон-продавец|продавец',
      anchors:[
        ['Характер','Невозмутимый, реагирует ровно ноль раз на театр Аджибуса. Улыбается один раз за весь сезон — когда Юнус сам делает заказ. Это и есть финальный кадр сезона.'],
        ['Внешность','Молодой, в фирменном фартуке продуктового. Современный, не рыночный торговец.'],
        ['Функция','Стена, о которую бьётся комедия Аджибуса, и свидетель победы Юнуса.']
      ],
      lock:"a young shop assistant in a branded apron, deadpan, standing behind the fruit counter of a modern grocery store"
    }    ,
    {
      id:'salma',
      plates:['cast-salma-01.jpg','cast-salma-02.jpg'], name:'Сальма', role:'Соседская девочка лет шести', status:'кастинг 17.08',
      folder:'09-канон-сальма', match:'09-канон-сальма|сальма',
      anchors:[
        ['Функция','Второе зеркало для зрителя и главный мотивирующий гэг сезона: шестилетка говорит по-арабски свободнее взрослого Юнуса. Это унижение каждый взрослый ученик переживал лично — поэтому смешно и подстёгивает.'],
        ['Правило','Никогда не издевается и не умничает. Помогает искренне, не понимая, что помогает — от этого смешно и не обидно.'],
        ['Имя','Сальма — созвучно с «салям», которое зритель уже знает с первой минуты. Первое женское имя в сериале запоминается само.'],
        ['Внешность','Большие тёмные глаза, круглые щёки, мягкий пастельный платочек под подбородком, простое длинное платье с рукавом.'],
        ['Когда вводить','Не раньше урока 4 — сперва пара Аджибус–Юнус должна устояться.']
      ],
      voice:'Не выбран. Нужен детский женский голос из библиотеки Flow.',
      lock:"a cheerful Arab girl of about six with big dark eyes, a small pastel headscarf and a simple long-sleeved modest dress"
    },
    {
      id:'amina',
      plates:['cast-amina-01.jpg','cast-amina-02.jpg'], name:'Хаджа Амина', role:'Соседка сверху, около 75 лет', status:'кастинг 17.08',
      folder:'10-канон-амина', match:'10-канон-амина|амина',
      anchors:[
        ['Функция','Взрослый доброжелательный свидетель. Приносит еду, хвалит, подкармливает козу. Даёт естественные поводы для «шукран», «лязиз» и «тафаддаль» без единой новой конструкции.'],
        ['Правило приличия','Всегда в хиджабе и длинном платье. В кадре с мужчинами — на дистанции: через порог, за столом, с подносом в руках. Никаких прикосновений.'],
        ['Зачем нужна','Женский голос в сериале. Половина аудитории наконец слышит себя — при этом ни одного решения, которое смутит консервативного зрителя.'],
        ['Внешность','Глубокие морщинки-смешинки, добрые тёмные глаза, свободный пастельный хиджаб, длинное скромное платье.']
      ],
      voice:'Не выбран. Нужен пожилой женский голос.',
      lock:"a warm Arab woman in her mid-seventies with deep laugh lines, a loose pastel hijab and a long modest dress"
    },
    {
      id:'shopper',
      plates:['cast-shopper-01.jpg'], name:'Покупательница', role:'Фоновый персонаж магазина, урок 5', status:'кастинг 17.08',
      folder:'11-канон-покупательница', match:'11-канон-покупательница|покупательница',
      anchors:[
        ['Функция','Без реплик. Делает современный арабский город достоверным — в кадре живут разные люди, а не только двое главных.'],
        ['Правило съёмки','Только средние и общие планы, уважительная дистанция. Никаких крупных планов лица.'],
        ['Внешность','Простая чёрная абайя и никаб, видны только спокойные тёмные глаза, корзина в руке.']
      ],
      lock:"a woman in a plain black abaya and black niqab, only her calm dark eyes visible, with a shopping basket"
    },

    /* ---------- ростер 02.09: разнообразие сезонов (ночная сессия) ---------- */
    {
      id:'karim',
      plates:['cast-karim-01.jpg'], name:'Карим', role:'Таксист, сезон 2 (урок 13)', status:'карточка во Flow заведена 03.09, урок 13 снят',
      folder:'12-канон-карим', match:'12-канон-карим|карим|karim',
      anchors:[
        ['Характер','Говорит быстрее, чем едет. Комментирует всё. Чётки на зеркале, термос под сиденьем.'],
        ['Функция','Первый незнакомец, с которым ученик остаётся один на один надолго — весь урок 13.'],
        ['Карточка Flow','«Карим таксист» — заведена 03.09 из плашки кастинга, голос «Голос Карима». Первая съёмка: урок 13, 5 шотов × 4 дубля, 0 кредитов.']
      ],
      voice:'Sadachbia (male, lively, low). Во Flow — «Голос Карима»: энергичный, разговорчивый, средне-низкий, быстрый темп, улыбка в голосе, чистые согласные. Без хрипоты.',
      lock:"the cheerful Arab taxi driver in his forties with a neat black moustache and stubble, in a worn grey shirt, prayer beads hanging from the mirror of his old yellow taxi"
    },
    {
      id:'khalil',
      plates:['cast-khalil-01.jpg'], name:'Абу Халиль', role:'Пекарь за углом, сезоны 1–2', status:'кастинг 02.09',
      folder:'13-канон-пекарь', match:'13-канон-пекарь|халиль|khalil|пекар',
      anchors:[
        ['Характер','Немногословный великан с мукой на предплечьях. Хлеб отдаёт до денег: «потом, потом».'],
        ['Мир','Его тандыр — запах всего квартала; у печи всегда очередь из двух человек и одной козы.']
      ],
      lock:"the big quiet Arab baker in his fifties with broad flour-dusted forearms, a white apron over a grey thobe, standing at a glowing tandoor oven"
    },
    {
      id:'ibrahim',
      plates:['cast-ibrahim-01.jpg'], name:'Хадж Ибрахим', role:'Старик с нардами в парке, сезон 2 (урок 18)', status:'кастинг 02.09',
      folder:'14-канон-ибрахим', match:'14-канон-ибрахим|ибрахим|ibrahim',
      anchors:[
        ['Характер','Сидит в парке дольше, чем стоит парк. Всех называет «сынок». Нарды выигрывает молча.'],
        ['Функция','Случайный собеседник: с ним ученик впервые говорит о себе с чужим человеком.']
      ],
      lock:"the very old dignified Arab man in his late seventies with a white beard, dark kufi cap and a wooden cane, sitting at a backgammon board on a park bench"
    },
    {
      id:'muhsin',
      plates:['cast-muhsin-01.jpg'], name:'Мухсин', role:'Продавец фалафеля, сезон 2', status:'кастинг 02.09',
      folder:'15-канон-мухсин', match:'15-канон-мухсин|мухсин|muhsin',
      anchors:[
        ['Характер','Худой, весёлый, работает как жонглёр: шарики фалафеля летят в масло дугой.'],
        ['Функция','Уличная еда — самый честный разговорник: очередь, заказ, сдача, шутка.']
      ],
      lock:"the skinny cheerful young Arab falafel vendor in his thirties with a white cap and a stained apron, tossing falafel balls into a sizzling pan at a street cart"
    },
    {
      id:'abusaid',
      plates:['cast-abusaid-01.jpg'], name:'Абу Саид', role:'Бавваб — привратник дома, сезон 2', status:'кастинг 02.09',
      folder:'16-канон-бавваб', match:'16-канон-бавваб|бавваб|саид|said',
      anchors:[
        ['Характер','Сидит у входа в плетёном кресле с газетой сорокалетней давности. Знает всё раньше всех.'],
        ['Функция','Живая доска объявлений квартала: кто пришёл, кто ушёл, почему опоздали.']
      ],
      lock:"the drowsy old Arab doorman in a long brown galabeya and white turban-wrap, slumped in a wicker chair by a doorway with a folded newspaper"
    },
    {
      id:'samir',
      plates:['cast-samir-01.jpg'], name:'Доктор Самир', role:'Врач, сезон 3 (урок 25)', status:'кастинг 02.09',
      folder:'17-канон-самир', match:'17-канон-самир|самир|samir',
      anchors:[
        ['Характер','Спокойный, аккуратный, слушает дольше, чем говорит. Вопросы всегда одни и те же.'],
        ['Функция','Медицинская лексика в самом безопасном виде: доктор, который никуда не торопится.']
      ],
      lock:"the calm Arab doctor in his mid-forties with short greying hair and thin glasses, in a white coat over a shirt, a stethoscope around his neck"
    },
    {
      id:'fatima',
      plates:['cast-fatima-01.jpg'], name:'Тётушка Фатима', role:'Торговка на рынке, сезон 3', status:'кастинг 02.09',
      folder:'18-канон-фатима', match:'18-канон-фатима|фатима|fatima',
      anchors:[
        ['Характер','Голос перекрывает весь рынок, сердце — тоже. Торгуется яростно, потом докладывает лишнего инжира бесплатно.'],
        ['Канон женщин','Пожилая женщина с открытым лицом — по правилу трёх типов.']
      ],
      lock:"the loud warm elderly Arab market woman in her late sixties in a dark loose dress and patterned headscarf, behind heaped crates of figs and pomegranates"
    },
    {
      id:'khaled',
      plates:['cast-khaled-01.jpg'], name:'Халед', role:'Сосед-музыкант с удом, сезон 3', status:'кастинг 02.09',
      folder:'19-канон-халед', match:'19-канон-халед|халед|khaled',
      anchors:[
        ['Характер','Играет на уде так, что прощаешь ему полночь. Ссора с Аджибусом из-за уда — арка сезона 3.'],
        ['Реквизит','Уд — канонный предмет: он же играет на свадьбе Тарика (урок 22).']
      ],
      lock:"the easy-going Arab musician in his mid-thirties with dark curly hair and a short beard, in a rolled-sleeve shirt, cradling a polished oud"
    },
    {
      id:'bilal',
      plates:['cast-bilal-01.jpg'], name:'Билял', role:'Мальчишка со двора, сезон 3', status:'кастинг 02.09',
      folder:'20-канон-билял', match:'20-канон-билял|билял|bilal',
      anchors:[
        ['Характер','Девять лет, вечно с мячом, вечно посередине чужих историй. Мирит взрослых, сам того не замечая.'],
        ['Функция','Детская речь — простая и быстрая: идеальный спарринг для ученика.']
      ],
      lock:"the lively Arab boy about nine years old in a striped t-shirt and sandals, holding a scuffed football under one arm"
    },
    {
      id:'tariq',
      plates:['cast-tariq-01.jpg'], name:'Тарик', role:'Племянник Амины, жених — свадьба сезона 3', status:'кастинг 02.09',
      folder:'21-канон-тарик', match:'21-канон-тарик|тарик|tariq',
      anchors:[
        ['Функция','Свадьба квартала (урок 22): двор в гирляндах, уд Халеда, «мабрук!» хором.'],
        ['Канон','Показываем мужскую сторону праздника; невеста в кадре не появляется.']
      ],
      lock:"the beaming young Arab groom in his late twenties in a crisp white thobe and golden-trimmed dark bisht, hands pressed to his heart in thanks"
    },
    {
      id:'faris',
      plates:['cast-faris-01.jpg'], name:'Абу Фарис', role:'Проводник поезда, сезон 4', status:'кастинг 02.09',
      folder:'22-канон-проводник', match:'22-канон-проводник|фарис|faris|проводник',
      anchors:[
        ['Характер','Форма старше него самого, выправка железная, компостер щёлкает как метроном.'],
        ['Функция','Голос дороги: билеты, платформы, номера мест — числа 11–100 в деле.']
      ],
      lock:"the upright Arab train conductor in his fifties in a worn navy uniform and peaked cap, a ticket punch in his hand, standing in a train corridor"
    },
    {
      id:'yusuf',
      plates:['cast-yusuf-01.jpg'], name:'Абу Юсуф', role:'Хозяин гостиницы у моря, сезон 4', status:'кастинг 02.09',
      folder:'23-канон-юсуф', match:'23-канон-юсуф|юсуф|yusuf',
      anchors:[
        ['Характер','Гостям радуется как родне, ключи выдаёт как награды. Лестницу его гостиницы красили при трёх королях.'],
        ['Функция','Гостиничный ритуал целиком: заселение, этажи, «айна ль-хаммам?».']
      ],
      lock:"the stout welcoming Arab hotel keeper in his sixties with a trimmed grey beard, in a sand-coloured thobe and dark vest, holding out a room key on a wooden fob"
    },
    {
      id:'salih',
      plates:['cast-salih-01.jpg'], name:'Салих', role:'Рыбак с лодкой, сезон 4 (урок 36)', status:'кастинг 02.09',
      folder:'24-канон-салих', match:'24-канон-салих|салих|salih|рыбак',
      anchors:[
        ['Характер','Лицо из морщин и соли, смеётся глазами. Лодка бирюзовая, зовётся «Бахр».'],
        ['Функция','Урок «умею — не умею» на палубе: астатыу ан асбах — сказано над настоящей водой.']
      ],
      lock:"the weathered Arab fisherman in his fifties with sun-creased skin and a grey stubble, in a faded blue shirt and rolled trousers, mending a net on a turquoise wooden boat"
    },
    {
      id:'zahra',
      plates:['cast-zahra-01.jpg'], name:'Хаджа Захра', role:'Старшая сестра Аджибуса, деревня — сезон 4', status:'кастинг 02.09',
      folder:'25-канон-захра', match:'25-канон-захра|захра|zahra',
      anchors:[
        ['Кто она','Старшая сестра Аджибуса: та же порода — брови, искры в глазах, — но покой вместо его урагана.'],
        ['Функция','Причина всей поездки сезона 4. Два старика не виделись три года; у неё двор под пальмами и тот же рецепт чая.'],
        ['Канон женщин','Пожилая женщина с открытым лицом — по правилу трёх типов.']
      ],
      lock:"the serene elderly Arab village woman in her early seventies with deep smile lines and expressive thick brows, in a dark embroidered dress and loose cream headscarf, pouring tea in a palm-shaded courtyard"
    }
  ],

  /* ---------- локации для промптов ---------- */
  locs: {
    alley:'a sunny modern city street, glass and concrete buildings, scooters and parked cars, a small contemporary café on the corner with potted plants by the door',
    shop:'a bright contemporary apartment, floor-to-ceiling windows with a city skyline, pale wood floors, bookshelves, houseplants, a laptop and a phone on a wooden table',
    tea:'the kitchen corner of the same modern apartment: induction hob, glass kettle, mugs and small tea glasses on a clean countertop, a bowl of dates',
    yard:'a modern rooftop terrace above the city, potted plants, simple outdoor furniture, laundry drying on a line, skyline in the background',
    market:'a modern grocery store aisle, bright LED lighting, crates of red apples and yellow bananas, price labels, a young shop assistant in a branded apron'
  },

  /* ---------- сезон ---------- */
  /* ---------- план плашек локаций (50 шт., Nano Banana Pro, 0 кредитов) ---------- */
  locplan: [
    { group:"Гостиная", folder:"гостиная", use:"У1Ш9–10, У2Ш2–10, У2Ш12, У3Ш1, У4Ш1–5", items:[
      { n:1, id:"гостиная_01_широкий-утро", en:"Wide establishing shot of the same bright modern living room as the reference image: floor-to-ceiling windows with a sunny city skyline, pale wood floor, low bookshelf, houseplants, a wooden table with a laptop. Morning light." },
      { n:2, id:"гостиная_02_широкий-вечер", en:"The same living room in the evening: city lights in the windows, warm lamp light, the rest of the room in soft shadow." },
      { n:3, id:"гостиная_03_обратный-ракурс", en:"Reverse angle of the same living room, shot from the windows back into the room: the doorway to the hallway, the bookshelf wall, an armchair." },
      { n:4, id:"гостиная_04_стеллаж", en:"Medium shot of the bookshelf wall in the same living room: stacks of books, a few objects on the shelves, a plant. Soft daylight." },
      { n:5, id:"гостиная_05_стол-крупно", en:"Close-up of the wooden table in the same living room: a laptop, a phone, a pen, a stack of books, a glass of water." },
      { n:6, id:"гостиная_06_странный-гаджет", en:"Close-up of one shelf in the same living room with a strange unidentifiable gadget standing among the books." },
      { n:7, id:"гостиная_07_кресло-у-окна", en:"Medium shot of a soft armchair by the window in the same living room, evening, city lights behind it." },
      { n:8, id:"гостиная_08_низкий-ракурс", en:"Very low camera angle across the floor of the same living room, table legs and the bookshelf base in frame, the window light above." },
      { n:9, id:"гостиная_09_проход-из-прихожей", en:"View from the hallway through the open doorway into the same bright living room, the room visible beyond." },
      { n:10, id:"гостиная_10_вверх-дном", en:"The same living room turned upside down: books pulled off the shelves onto the floor, cushions thrown about, drawers open, chaos of a frantic search. Daylight." },
    ]},
    { group:"Кухонный угол", folder:"кухня", use:"У3Ш2–10, У4Ш9", items:[
      { n:11, id:"кухня_11_широкий-утро", en:"Wide shot of the same modern kitchen corner as the reference image: white countertop, induction hob, a glass kettle, a window with morning light." },
      { n:12, id:"кухня_12_у-плиты", en:"Medium shot of the working area of the same kitchen: the hob, the glass kettle on it, small tea glasses ready on the counter." },
      { n:13, id:"кухня_13_столешница-крупно", en:"Close-up along the countertop of the same kitchen: a glass kettle, two small tea glasses, a bowl of dates, a jug of water." },
      { n:14, id:"кухня_14_обратный-ракурс", en:"Reverse angle of the same kitchen corner, shot from the hob back toward the room and the doorway." },
      { n:15, id:"кухня_15_дверь-на-террасу", en:"The same kitchen corner with the terrace door standing open behind the counter, daylight and plants visible outside." },
      { n:16, id:"кухня_16_чайник-струя", en:"Extreme close-up of tea being poured in a thin stream from high above into a small glass on the counter of the same kitchen." },
      { n:17, id:"кухня_17_вечер", en:"The same kitchen corner in the evening: warm lamp over the counter, dark window, city glow outside." },
      { n:18, id:"кухня_18_низкий-ракурс", en:"Very low camera angle at countertop level in the same kitchen, the bowl of dates in the foreground, the open terrace door beyond." },
    ]},
    { group:"Прихожая", folder:"прихожая", use:"У1Ш8, У1Ш11, У2Ш1, У2Ш8, У3Ш12, У4Ш11", items:[
      { n:19, id:"прихожая_19_дверь-закрыта", en:"Wide shot of the same modern apartment hallway as the reference image: a plain closed front door, a shoe rack, a coat hook, a mirror, pale wood floor." },
      { n:20, id:"прихожая_20_дверь-открыта", en:"The same hallway with the front door standing wide open, light from the stairwell falling in." },
      { n:21, id:"прихожая_21_ключ-на-крючке", en:"Close-up of a key on a red cord hanging on the hook by the door in the same hallway." },
      { n:22, id:"прихожая_22_крючок-пустой", en:"Close-up of the same hook by the door, empty, only the mark on the wall where the key used to hang." },
      { n:23, id:"прихожая_23_обратный-ракурс", en:"Reverse angle of the same hallway, shot from the front door back into the apartment." },
      { n:24, id:"прихожая_24_вечер", en:"The same hallway in the evening, one warm lamp on, the rest in shadow." },
    ]},
    { group:"Крыша-терраса", folder:"крыша", use:"У1Ш12, У2Ш11, У3Ш11, У4Ш7–8", items:[
      { n:25, id:"крыша_25_широкий-день", en:"Wide shot of the same modern rooftop terrace as the reference image: potted plants, simple outdoor furniture, laundry on a line, city skyline. Bright daylight." },
      { n:26, id:"крыша_26_широкий-закат", en:"The same rooftop terrace at sunset, long warm light, the skyline glowing." },
      { n:27, id:"крыша_27_выход-лестница", en:"The stair exit onto the same rooftop terrace: a small door or hatch, steps, plants beside it." },
      { n:28, id:"крыша_28_растения", en:"Medium shot of the corner of the same terrace with big potted plants and a watering can." },
      { n:29, id:"крыша_29_бельевая-верёвка", en:"Medium shot of the laundry line on the same terrace, sheets moving in the wind, skyline behind." },
      { n:30, id:"крыша_30_стол-и-стулья", en:"Medium shot of the small outdoor table and two chairs on the same terrace, two empty tea glasses on the table." },
      { n:31, id:"крыша_31_низкий-ракурс", en:"Very low camera angle across the floor of the same terrace, pots in the foreground, skyline above." },
      { n:32, id:"крыша_32_вечер-огни", en:"The same rooftop terrace after dark, city lights below, a string of warm bulbs overhead." },
    ]},
    { group:"Улица", folder:"улица", use:"У1Ш1–2, У1Ш11", items:[
      { n:33, id:"улица_33_широкий-утро", en:"Wide shot of the same sunny modern city street as the reference image: glass and concrete buildings, parked cars and scooters, clean pavement. Morning." },
      { n:34, id:"улица_34_вход-в-дом", en:"The entrance of a modern apartment building on the same street: glass door, intercom panel, a couple of potted plants beside it." },
      { n:35, id:"улица_35_кофейня", en:"The small contemporary cafe on the corner of the same street, potted plants by the door, empty outdoor tables." },
      { n:36, id:"улица_36_тротуар", en:"Medium shot along the pavement of the same street, shop fronts on one side, parked scooters on the other." },
      { n:37, id:"улица_37_вечер", en:"The same street in the evening, warm streetlights, lit windows, wet asphalt reflections." },
      { n:38, id:"улица_38_дом-снизу-вверх", en:"Low angle looking up the facade of the modern apartment building on the same street, balconies and sky." },
    ]},
    { group:"Продуктовый магазин", folder:"магазин", use:"урок 5", items:[
      { n:39, id:"магазин_39_ряд-широкий", en:"Wide shot of the same modern grocery store aisle as the reference image: bright LED lighting, crates of fruit, price labels, clean tiled floor." },
      { n:40, id:"магазин_40_прилавок-фрукты", en:"Medium shot of the fruit counter in the same store: crates of red apples and yellow bananas, a small scale, price tags." },
      { n:41, id:"магазин_41_от-продавца", en:"Reverse angle in the same store, shot from behind the counter looking out at the aisle." },
      { n:42, id:"магазин_42_яблоки-крупно", en:"Close-up of a crate of red apples with a handwritten price label in the same store." },
      { n:43, id:"магазин_43_бананы-крупно", en:"Close-up of a bunch of yellow bananas on the counter of the same store." },
      { n:44, id:"магазин_44_касса", en:"Medium shot of the checkout counter in the same store: a till, paper bags, a basket." },
      { n:45, id:"магазин_45_вход-снаружи", en:"The same grocery store seen from the street outside: glass front, crates of fruit by the entrance, an awning." },
    ]},
    { group:"Кладовая и шкаф", folder:"кладовая-и-шкаф", use:"У4Ш3, У4Ш12", items:[
      { n:46, id:"кладовая_46_полная", en:"A small pantry cupboard in the same modern apartment, shelves full of jars, packets and tins, warm light from the room." },
      { n:47, id:"кладовая_47_пустая", en:"The same pantry cupboard, completely bare: empty shelves, a little dust, one forgotten paper bag." },
      { n:48, id:"шкаф_48_полки-с-одеждой", en:"A tall wardrobe in the same modern apartment with its doors open, folded clothes stacked high on the shelves, ready to avalanche." },
    ]},
    { group:"Коридор и зеркало", folder:"коридор", use:"У4Ш3–4", items:[
      { n:49, id:"коридор_49_со-шкафом", en:"A narrow corridor in the same modern apartment with a tall wardrobe along one wall, doors slightly ajar." },
      { n:50, id:"зеркало_50_угол", en:"A corner of the same apartment with a round wall mirror and a small console table under it, soft daylight." },
    ]},
  ],

  lessons: [
    {
      n:1, title:'Новый ученик',
      skill:'Поздороваться, представиться, попрощаться.',
      core:['السلام عليكم / وعليكم السلام','أنا [имя]','وأنت؟','مع السلامة'],
      seeds:['تفضّل (жестом)','لا','عجيب','أهلاً وسهلاً'],
      shots:[
        {n:1, loc:'alley', ru:'Утро, современная улица. Аджибус поливает мяту в горшке у входа в дом, мурлычет под нос.', ar:[], en:'Ajibus waters a pot of mint outside his shop door, humming a wordless tune to himself, entirely absorbed', cam:'wide establishing shot, slow dolly in, warm low morning sun, shallow depth of field', snd:'quiet morning street tone, distant birds, water trickling, soft humming'},
        {n:2, loc:'alley', ru:'По улице идёт Юнус — рюкзак, адрес в телефоне. Сверяется, поднимает глаза на дом.', ar:[], en:'Yunus walks up the alley, stops, checks a scrap of paper with an address, then slowly raises his eyes to the carved shop sign', cam:'tracking shot from behind, then low-angle reverse onto the sign', snd:'footsteps on stone, paper rustling'},
        {n:3, loc:'alley', ru:'Юнус, собравшись с духом, здоровается. Аджибус расцветает и отвечает.', ar:['السلام عليكم','وعليكم السلام'], en:'Yunus gathers his courage and greets the old man; Ajibus lights up and answers, both arms opening wide in welcome', cam:'two-shot, eye level, 85mm, shallow depth of field', snd:'clear dialogue, warm ambience'},
        {n:4, loc:'alley', ru:'Аджибус прикладывает ладонь к уху и ждёт: твоя очередь. Юнус мнётся, потом выговаривает фразу по слогам. Довольный кивок.', ar:['السلام عليكم'], en:'Ajibus cups a hand behind his ear and waits for Yunus to repeat the greeting; the young man hesitates, then says it syllable by syllable, and Ajibus nods with warm satisfaction', cam:'medium two-shot in profile, static, shallow depth of field', snd:'quiet street ambience, a hesitant young voice, then a pleased hum'},
        {n:5, loc:'alley', ru:'Рука к груди, медленно: «Ана — Аджибус». Пауза. Ещё раз, с поклоном.', ar:['أنا عجيبوس'], en:'Ajibus lays a flat hand on his own chest and says his name slowly, pauses, then repeats it with a small theatrical bow', cam:'medium shot, static, eye level', snd:'clear slow speech'},
        {n:6, loc:'alley', ru:'Вопросительная ладонь к Юнусу — тот отвечает. «Юнус! Аджи-и-иб!»', ar:['وأنت؟','أنا يونس','عجيب'], en:'Ajibus opens a questioning palm toward Yunus, who answers his own name; Ajibus repeats it delightedly and throws both hands up', cam:'two-shot, slight arc around the pair', snd:'clear dialogue, delighted exclamation'},
        {n:7, loc:'alley', ru:'Юнус путается и отвечает «уа анта?» вместо «ана». Аджибус не поправляет словами — просто прикладывает ладонь Юнуса к его же груди: «ана…». Юнус вспыхивает и повторяет правильно.', ar:['وأنت؟'], en:'Yunus mixes it up and answers with the question instead of his name; without a word of correction Ajibus takes the young man by the wrist and places his palm on his own chest as a prompt, and Yunus gets it right', cam:'medium two-shot, both hands in frame, static', snd:'a confused young voice, a warm low prompt, then a confident answer'},
        {n:8, loc:'alley', ru:'«Ахлан уа сахлан!» — распахивает дверь квартиры: «Тафаддаль!» Юнус входит.', ar:['أهلاً وسهلاً','تفضّل'], en:'Ajibus welcomes him, swings the shop door wide open and gestures him inside with a sweeping open palm; Yunus steps in', cam:'medium wide, camera follows them through the doorway', snd:'door creak, bell chime, footsteps'},
        {n:9, loc:'shop', ru:'Светлая квартира, стеллаж с книгами. Юнус хочет спросить про странную штуку на полке — слов нет. Мычит, тычет пальцем. Аджибус жестом «терпение».', ar:[], en:'Yunus stares at a brass astrolabe, opens his mouth to ask about it, finds no words, makes a helpless sound and just points; Ajibus raises a calm patient palm', cam:'slow crane down across the shelves, then close-up of the pointing hand', snd:'creaking floorboards, ticking clockwork'},
        {n:10, loc:'shop', ru:'Рекап: быстрая нарезка из уже прожитого — салям и ответ, рука к груди с именем, ладонь к собеседнику. Три коротких куска подряд.', ar:['السلام عليكم','أنا عجيبوس','وأنت؟'], en:'A brisk recap montage cut from the scenes just played: the greeting and its answer, the hand to the chest with the name, the open palm turned to the other man; three short beats, hard cuts', cam:'hard cuts between the earlier setups of this lesson, no new coverage', snd:'clear isolated phrases, silence between'},
        {n:11, loc:'alley', ru:'Вечер, дверь квартиры, город за спиной. Прощание. Юнус уходит, Аджибус машет ему вслед и стоит в дверях, пока тот не скроется.', ar:['مع السلامة'], en:'Sunset at the apartment door: the two say goodbye, Yunus walks off, and Ajibus stays in the doorway waving after him until he is out of sight', cam:'wide two-shot, golden hour backlight, static', snd:'evening street tone, distant call'},
        {n:12, loc:'yard', ru:'КРЮЧОК: крыша-терраса, забытый рюкзак, лямку уже жуёт коза. «Ля! Ля!» Аджибус выхватывает рюкзак и прижимает к груди, глядя на совершенно невозмутимую козу.', ar:['لا! لا!'], en:'A forgotten backpack lies by the door with a goat already chewing its strap; Ajibus rushes in, hugs the backpack away from her and stares at the utterly unbothered goat', cam:'low wide shot, quick push-in to close-up on his face', snd:'goat bleat, fabric tearing, alarmed exclamation'}
      ]
    },
    {
      n:2, title:'Что это?',
      skill:'Спросить «что это?» про что угодно, подтвердить и отрицать.',
      core:['ما هذا؟ → هذا [X]','نعم','لا'],
      seeds:['كيف حالك؟ → الحمد لله','أو','مفتاح как чеховское ружьё'],
      shots:[
        {n:1, loc:'alley', ru:'Утро. Стук. Юнус на пороге, смущённо показывает на рюкзак. Салям-пара — уже без запинки, оба разом.', ar:['السلام عليكم','وعليكم السلام'], en:'Yunus knocks and stands in the doorway, sheepishly pointing at the backpack; the greeting pair runs smoothly now, both men at once', cam:'medium two-shot at the door, static', snd:'knocking, door, clear dialogue'},
        {n:2, loc:'shop', ru:'Квартира. Новое звено ритуала: «Кайфа халюк?» Юнус растерян. Аджибус подсказывает, прижав руку к груди, и спрашивает ещё раз — теперь Юнус отвечает сам.', ar:['كيف حالك؟','الحمد لله'], en:'Ajibus asks how he is; Yunus freezes, lost; Ajibus presses a hand to his own chest and gives him the answer, which Yunus repeats; then Ajibus asks again, and this time the answer comes on its own', cam:'two-shot, static, slight push-in on the second ask', snd:'clear slow speech, silence in the pause'},
        {n:3, loc:'shop', ru:'У стеллажа. Аджибус берёт палец Юнуса, наводит на стопку книг и произносит по слогам.', ar:['ما هذا؟','هذا كتاب'], en:'Ajibus takes Yunus by the finger, aims it at a stack of old books and pronounces the question syllable by syllable; Yunus copies him, and Ajibus gives the answer', cam:'close-up on the pointing hand, then medium two-shot', snd:'clear syllabic speech, book leather'},
        {n:4, loc:'shop', ru:'Юнус сам, с азартом, про ручку на столе. Аджибус рисует ею завитушку в воздухе.', ar:['ما هذا؟','هذا قلم'], en:'Yunus eagerly asks the question himself about a reed pen; Ajibus answers and draws a flourish in the air with the pen', cam:'medium shot, slight handheld energy', snd:'clear dialogue, air swish'},
        {n:5, loc:'shop', ru:'Циркуляция-дурачество: перекидывает ручку из руки в руку. «Хаза китаб? — Ля! Хаза калям? — На’ам! Китаб ау калям? — Калям!»', ar:['هذا كتاب؟ لا!','هذا قلم؟ نعم!','كتاب أو قلم؟ قلم!'], en:'Ajibus juggles the pen from hand to hand firing playful yes-and-no questions at Yunus, who laughs and joins in; the pace is fast and silly', cam:'medium shot, static, both fully in frame', snd:'rapid playful dialogue, laughter'},
        {n:6, loc:'shop', ru:'Ошибка и рекаст: Юнус говорит «кибат». Аджибус тепло, по слогам: «Ки-та-аб».', ar:['هذا... كِباب؟','كِ - تا - ب','كتاب!','عجيب'], en:'Yunus mispronounces the word; Ajibus never says wrong — he warmly repeats it syllable by syllable, Yunus gets it right and Ajibus beams', cam:'tight two-shot, eye level, warm', snd:'gentle syllabic correction, delighted praise'},
        {n:7, loc:'shop', ru:'Кот спит на стопке книг. Юнус спрашивает. Кот приоткрывает глаз и спит дальше.', ar:['ما هذا؟','هذا قطّ'], en:'A plump cat sleeps on a leather folio; Yunus asks what it is, Ajibus answers, and the cat opens one eye and goes back to sleep', cam:'close-up on the cat, then medium two-shot', snd:'clear dialogue, a single lazy purr'},
        {n:8, loc:'shop', ru:'ЧЕХОВСКОЕ РУЖЬЁ: прихожая. Аджибус торжественно снимает с крючка ключ на красном шнурке, любовно протирает, вешает обратно. Камера задерживается на пустом крючке.', ar:['هذا مفتاح'], en:'Ajibus solemnly lifts a key on a red cord off its hook, names it, polishes it lovingly on his cardigan sleeve and hangs it back; the camera holds on the hook after he leaves frame', cam:'medium close-up on the key, then static hold on the empty hook', snd:'metal ring, cloth rub, then silence'},
        {n:9, loc:'shop', ru:'Гэг: Юнус про странный гаджет на полке. Аджибус открывает рот… закрывает… разводит руками. Даже Аджибус не всё знает.', ar:['ما هذا؟'], en:'Yunus asks about the astrolabe; Ajibus opens his mouth, closes it, opens it again, then spreads both hands helplessly and shrugs', cam:'medium two-shot, static, comedic hold', snd:'clear question, then a long comic silence'},
        {n:10, loc:'shop', ru:'Рекап: четыре предмета вспышками, «на’ам/ля» большим пальцем.', ar:['كتاب','قلم','مفتاح','قطّ','نعم','لا'], en:'Four quick recap flashes of the objects, each named cleanly; Ajibus gives thumbs up and thumbs down for yes and no', cam:'close-ups, hard cuts, static', snd:'isolated words, silence between'},
        {n:11, loc:'yard', ru:'Крыша-терраса. Прощание. Юнус, уходя, сам говорит козе: «Ма’а с-саляма, я анза!» (посев имени).', ar:['مع السلامة','مع السلامة يا عنزة'], en:'Leaving, Yunus turns and says goodbye to the goat by name all on his own; Ajibus in the doorway raises his eyebrows, impressed', cam:'medium wide, camera at goat height for her reaction', snd:'clear farewell, goat bleat'},
        {n:12, loc:'shop', ru:'КРЮЧОК: вечер, Аджибус падает в кресло, обмахивается: «Уриду шай…» Юнус в дверях оборачивается: «???»', ar:['أريد شاي'], en:'Ajibus drops into his armchair, fans himself and says he wants tea; Yunus, already in the doorway, turns back with a puzzled look', cam:'medium shot on the chair, then quick cut to Yunus at the door', snd:'chair creak, tired sigh, clear phrase'}
      ]
    },
    {
      n:3, title:'Чай у Аджибуса',
      skill:'Попросить, угостить, поблагодарить, похвалить еду. Самый применимый в жизни урок.',
      core:['أريد [X]','تفضّل','شكرًا'],
      seeds:['Культурный слой без слов: давать и брать правой рукой'],
      shots:[
        {n:1, loc:'shop', ru:'Ритуал в темпе: салям → кайфа халюк → «Альхамдулиллях!» хором. Половину ведёт уже сам Юнус.', ar:['السلام عليكم','كيف حالك؟','الحمد لله'], en:'The now-familiar greeting ritual runs briskly and Yunus carries half of it himself, ending with both men answering in unison', cam:'two-shot, static, one quick cut', snd:'clear dialogue, two voices in unison'},
        {n:2, loc:'tea', ru:'Кухонный угол. Аджибус у стеклянного чайника, потирает руки. Заваривает театрально, льёт с метровой высоты тонкой струйкой.', ar:['والآن... أريد شاي'], en:'Ajibus rubs his hands over the stove, announces that he wants tea, and pours it theatrically in a thin stream from a great height into a small glass', cam:'medium shot, then slow-motion insert on the pouring stream', snd:'stove hiss, pouring water, satisfied hum'},
        {n:3, loc:'tea', ru:'Юнус неуверенно просит кофе. Аджибус замирает, оборачивается, трагический шёпот: «Кахва?.. Ля. Ля-ля-ля. Шай!»', ar:['أنا... أريد قهوة؟','قهوة؟.. لا. لا لا لا. شاي!'], en:'Yunus hesitantly asks for coffee; Ajibus freezes mid-pour, turns very slowly and whispers his refusal in tragic disbelief before declaring tea', cam:'slow push-in to close-up on his scandalised face', snd:'pouring stops abruptly, hushed dramatic delivery'},
        {n:4, loc:'tea', ru:'Компромисс: наливает Юнусу воду. «Тафаддаль, хаза ма’!» Слово из первой серии активируется.', ar:['تفضّل، هذا ماء'], en:'As a compromise Ajibus pours him a glass of water and offers it with an open palm', cam:'medium two-shot, hands in frame', snd:'water pouring, warm offer'},
        {n:5, loc:'tea', ru:'Миска фиников на столешнице. Юнус тянется левой рукой — Аджибус мягко, без слов, разворачивает его правую ладонь. Адаб за две секунды.', ar:['ما هذا؟','هذا تمر! تفضّل'], en:'A plate of dates: Yunus asks, Ajibus names them and offers; Yunus reaches with his left hand and Ajibus wordlessly and gently turns his right palm up instead', cam:'close-up on the hands over the plate', snd:'clear dialogue, no comment over the gesture'},
        {n:6, loc:'tea', ru:'Юнус пробует, глаза расширяются: «Лязи-и-из!!» Аджибус гордо кивает, как автор фиников.', ar:['لذيذ!'], en:'Yunus bites a date, his eyes widen and he exclaims that it is delicious; Ajibus nods proudly as though he grew it himself', cam:'close-up on Yunus, then cut to Ajibus', snd:'chewing, delighted exclamation'},
        {n:7, loc:'tea', ru:'Чай готов. «Тафаддаль!» — «Шукран!» И тут же вторая чашка — Юнус машинально: «Шукран!» Аджибус поднимает палец: вот теперь правильно.', ar:['تفضّل','شكرًا','تفضّل'], en:'Ajibus hands over the tea and receives thanks, then immediately holds out a second glass; Yunus thanks him again automatically, and Ajibus raises a delighted finger', cam:'medium close-up on the hands and the glasses, static', snd:'glass clink, then silence in the pause'},
        {n:8, loc:'tea', ru:'Юнус, осмелев, сам: «Уриду тамр!» — «Тафаддаль!» — «Шукран!» Первый полный диалог ученика.', ar:['أريد تمر','تفضّل','شكرًا'], en:'Emboldened, Yunus makes his own request, is served and thanks his teacher — his first complete exchange; Ajibus wipes away an imaginary tear', cam:'two-shot, static, let it play', snd:'clear three-beat dialogue'},
        {n:9, loc:'tea', ru:'Гэг: Анза через открытую дверь террасы утягивает миску фиников. «Ля! ЛЯ!.. — …тайиб». Вздох. Протягивает ей последний финик.', ar:['لا! لا!','...طيّب','تفضّل'], en:'The goat hooks the plate of dates through the open window and drags it away; Ajibus protests, deflates, sighs, and offers her the last date, which she accepts regally', cam:'wide shot catching window and table, then close-up on the goat', snd:'plate scraping, protest, resigned sigh, chewing'},
        {n:10, loc:'tea', ru:'Рекап жестами: уриду + [шай/кахва/ма’/тамр] · тафаддаль · шукран · лязиз.', ar:['أريد شاي','أريد ماء','تفضّل','شكرًا','لذيذ'], en:'Recap flashes: each phrase performed once with its signature gesture — offering palm, hand to heart, fingertips to lips', cam:'medium close-ups, hard cuts, static', snd:'isolated phrases, silence between'},
        {n:11, loc:'yard', ru:'Крыша-терраса. Прощание: чокаются чайными стаканчиками, как тостом.', ar:['مع السلامة'], en:'The two clink their tea glasses together like a toast and say goodbye', cam:'two-shot, static, insert on the glasses', snd:'glass clink, warm farewell'},
        {n:12, loc:'shop', ru:'КРЮЧОК: вечер, прихожая. Аджибус тянется к крючку у двери — пусто. Хлопает по карманам. По всем. Ещё раз. Медленно поднимает глаза к пустому крючку: «Айна мифтах?!»', ar:['أين المفتاح؟!'], en:'Evening: Ajibus reaches to lock the shop, pats one pocket, then every pocket, then all of them again, and slowly raises his eyes to the empty hook in horror', cam:'medium shot, slow push-in to close-up on his face', snd:'jingling cloth, rising panic in the voice'}
      ]
    },
    {
      n:4, title:'Айна мифтах?!',
      skill:'Спросить «где?», ответить «здесь/там». Самый лёгкий урок сезона — стоит сразу после пейволла.',
      core:['أين [X]؟','هنا','هناك'],
      seeds:['Новых существительных ноль — мифтах посеян в уроке 2'],
      shots:[
        {n:1, loc:'shop', ru:'Утро тревоги. Юнус приходит — Аджибус мечется, всё вверх дном. Конструкция схвачена из контекста.', ar:['أين المفتاح؟ أين المفتاح؟!'], en:'Yunus arrives to find the shop turned upside down and Ajibus darting between shelves repeating his question in rising panic', cam:'handheld follow, faster cutting than usual', snd:'clattering objects, agitated repeated phrase'},
        {n:2, loc:'shop', ru:'Юнус показывает под стол: «Хуна?» Там кот. «Ля! Хаза кытт!»', ar:['هنا؟','لا! هذا قطّ'], en:'Yunus points under the table and asks if it is here; Ajibus looks, finds only the cat and answers no', cam:'low angle under the table, then two-shot', snd:'clear short exchange, cat meow'},
        {n:3, loc:'shop', ru:'Юнус на шкаф: «Хунак?» Аджибус лезет, сверху лавина сложенной одежды накрывает его с головой. Из-под кучи: «…ля».', ar:['هناك؟','...لا'], en:'Yunus points up at the wardrobe; Ajibus climbs, and an avalanche of folded clothes buries him; from under the pile comes a small muffled no', cam:'wide static shot to let the fall play in full frame', snd:'wooden creak, soft avalanche, muffled voice'},
        {n:4, loc:'shop', ru:'Гэг с очками: мечется, ища очки, чтобы искать ключ. Юнус молча показывает на лоб. «А!.. Альхамдулиллях».', ar:['أين نظّارتي؟!','آه... الحمد لله'], en:'Ajibus now hunts for his spectacles so he can hunt for the key; Yunus silently points at his forehead, where they sit; Ajibus deflates and thanks God', cam:'medium two-shot, static, comedic hold', snd:'flustered speech, then a relieved sigh'},
        {n:5, loc:'shop', ru:'Циркуляция в панике: «Мифтах хуна? Ля! Хунак? Ля! Айна? АЙНА?!» — четыре повтора, все мотивированы.', ar:['المفتاح هنا؟ لا!','هناك؟ لا!','أين؟ أين؟!'], en:'Ajibus fires the question at every corner of the room in turn, answering himself no each time and ending on a despairing shout', cam:'quick whip pans following his gaze', snd:'rapid repeated phrases, escalating'},
        {n:6, loc:'shop', ru:'Кот демонстративно спит на закрытом ящике для хранения. Переглядка. Аджибус на цыпочках поднимает кота… под ним пусто. Кот забирает себя из его рук и уходит.', ar:[], en:'The cat sleeps pointedly on a closed storage box; the two men exchange a look; Ajibus tiptoes over and lifts the cat — nothing underneath — and the cat calmly removes itself from his hands and walks off', cam:'medium shot, slow tiptoe movement, static frame', snd:'floor creak, indignant meow, no dialogue'},
        {n:7, loc:'yard', ru:'Через окно: на террасе Анза что-то жуёт, и у неё на шее болтается мифтах на верёвочке, как кулон. Юнус: «Хуна-а-ак!!»', ar:['هناك!'], en:'Through the window, in the courtyard, the goat chews placidly with the huge key dangling from her neck on a cord like a pendant; Yunus shouts that it is over there', cam:'over-shoulder through the window, then quick zoom onto the key', snd:'goat chewing, triumphant shout'},
        {n:8, loc:'yard', ru:'Погоня по террасе — очки слетают, коза скачет, ключ спасён. «Альхамдулилля-я-ях!»', ar:['الحمد لله'], en:'A chase across the rooftop terrace: his glasses fly off, the goat skips away, and at last Ajibus clutches the key to his chest in relief', cam:'wide handheld tracking, then close-up on the key against his chest', snd:'hooves, laughter, panting, heartfelt exclamation'},
        {n:9, loc:'tea', ru:'Аджибус прячет финик под одну из двух пиал и двигает их перед Юнусом: «Айна тамр? Хуна… ау хунак?» Юнус тычет пальцем. Поднимает пиалу — пусто: снизу кадра финик дожёвывает Анза.', ar:['أين التمر؟ هنا... أو هناك؟'], en:'Ajibus hides a date under one of two bowls, shuffles them in front of Yunus and asks which one; Yunus points, and Ajibus lifts a bowl to find it empty, while at the bottom of the frame the goat finishes chewing', cam:'close-up on the bowls from above, then tilt down to the goat', snd:'ceramic scraping, silence in the pause, quiet chewing'},
        {n:10, loc:'shop', ru:'Рекап: айна? (ладонь козырьком) · хуна (палец вниз) · хунак (палец вдаль).', ar:['أين؟','هنا','هناك'], en:'Recap flashes: hand shading the eyes for where, finger pointing down for here, finger pointing far away for there', cam:'medium close-ups, hard cuts, static', snd:'isolated words, silence between'},
        {n:11, loc:'alley', ru:'Прощание. Ключ теперь на шнурке на шее, он его демонстративно похлопывает.', ar:['مع السلامة'], en:'Farewell at the door: the key now hangs on a cord around his neck and he pats it twice, pointedly', cam:'medium two-shot, then insert on the key', snd:'warm farewell, key tap'},
        {n:12, loc:'shop', ru:'КРЮЧОК: открывают кладовую — пусто, перекати-поле. Анза смотрит в сторону. «Уриду туффах! Уриду мауз!» И Юнусу, кивком на дверь: «Тафаддаль!»', ar:['أريد تفّاح! أريد موز!','تفضّل'], en:'They open the pantry: bare shelves, a tumbleweed of dust; the goat looks innocently away; Ajibus takes a basket, declares what he wants, and nods Yunus toward the door', cam:'wide on the empty pantry, then medium two-shot with the basket', snd:'hollow creak, comic emptiness, decisive phrases'}
      ]
    },
    {
      n:5, title:'Рынок — кульминация сезона', draft:true,
      skill:'Поторговаться. Зритель понимает ~70% полутораминутной сцены живого арабского ДО того, как урок что-то объяснил. На этом строится продажа подписки.',
      core:['بكم؟','غالي','رخيص'],
      seeds:['Всё остальное зритель уже носит с собой: салям, кайфа халюк, ма хаза, уриду, тафаддаль, шукран, ля, лязиз'],
      shots:[
        {n:1, loc:'market', ru:'Приход на рынок, салям-пара с продавцом. Всё знакомое.', ar:['السلام عليكم','وعليكم السلام'], en:'The two arrive at the market stall and exchange greetings with the deadpan vendor', cam:'wide establishing, then two-shot at the stall', snd:'market crowd, clear greeting'},
        {n:2, loc:'market', ru:'Юнус: «Ма хаза?» про яблоки и бананы. Ответ считывается по паттерну раньше, чем его произносит продавец.', ar:['ما هذا؟','هذا تفّاح','هذا موز'], en:'Yunus asks what things are, pointing at apples then bananas; the vendor answers flatly each time', cam:'close-ups on the produce, medium on Yunus', snd:'clear question-answer pairs'},
        {n:3, loc:'market', ru:'Аджибус — театр торговли: «Бикам?.. ГАЛИ!!» Хватается за сердце, очки съезжают на нос.', ar:['بكم؟','غالي!'], en:'Ajibus asks the price, hears it, clutches his heart and cries that it is expensive; his glasses slide down his nose', cam:'medium shot, static, let the performance play', snd:'market noise, theatrical outcry'},
        {n:4, loc:'market', ru:'Щенячьи глаза: «Рахыс?..» Продавец невозмутим.', ar:['رخيص؟'], en:'Ajibus switches instantly to pleading puppy eyes and suggests a cheap price; the vendor does not move a muscle', cam:'tight two-shot, cut between the two faces', snd:'wheedling delivery, flat silence in reply'},
        {n:5, loc:'market', ru:'Анза ворует банан из корзины Юнуса.', ar:[], en:'While no one is watching, the goat lifts a banana out of the basket at Yunus feet and walks off with it', cam:'low angle on the basket, static', snd:'market noise, quiet theft'},
        {n:6, loc:'market', ru:'ФИНАЛ СЕЗОНА: Аджибус подталкивает Юнуса к прилавку — давай сам. Юнус, волнуясь: «Уриду мауз!.. Бикам?.. Шукран!» Продавец впервые улыбается. Аджибус за его спиной утирает слезу: «Аджи-и-иб!»', ar:['أريد موز','بكم؟','شكرًا','عجيب'], en:'Ajibus nudges Yunus forward to order for himself; nervous but clear, Yunus makes his request, asks the price and thanks the vendor, who smiles for the first time; behind him Ajibus wipes away a tear', cam:'over-shoulder on Yunus at the stall, then slow push-in on Ajibus proud face', snd:'market ambience drops away under the dialogue, warm swell at the end'}
      ]
    },
    {
      n:13, title:'Такси',
      skill:'Назвать адрес, командовать «направо, налево, прямо» и остановить такси вежливо.',
      core:['يمين','يسار','إلى الأمام','قف هنا من فضلك'],
      seeds:['شارع','قريب','بعيد','إلى أين؟'],
      shots:[
        {n:1, loc:'street', ru:'Утро, оживлённая арабская улица. Аджибус поднимает руку, жёлтое такси Карима тормозит у бордюра. Карим высовывается в окно: «Куда, друг мой?»', ar:['إلى أين يا صديقي؟'], en:'Bright morning on a busy Arab city street, warm sunlight, low sandstone buildings, a fruit stall behind. Ajeebus, an Arab man of about sixty five in a white ankle length thobe with a beige knitted cardigan over it and a white knitted skullcap on a bald head, round glasses, full white beard tinted henna orange at the front, stands at the kerb and raises his hand. A yellow taxi rolls to a stop beside him and Karim, the driver, leans out of the open window with one arm on the door, grinning at him. Karim speaks in slow clear formal Modern Standard Arabic, warm and quick, and says: إلى أين يا صديقي؟ Natural lip sync to the exact spoken line. Only Karim speaks, Ajeebus stays silent and smiles back.', cam:'slow push-in from the pavement toward the taxi window', snd:'street ambience, a distant car horn, no music'},
        {n:2, loc:'taxi', ru:'В салоне. Юнус на заднем сиденье называет адрес: «На рынок, пожалуйста». Карим кивает в зеркале.', ar:['إلى السوق من فضلك'], en:'Inside a taxi moving through an Arab city at mid morning, warm light through the windscreen, shopfronts sliding past the side window. Yunus, a Western European young man of about twenty two with fair skin, light blue grey eyes and tousled light brown hair, in a blue denim jacket over a grey t-shirt, sits on the back seat and leans forward between the front seats. Karim, the Arab taxi driver in his forties with a thick moustache, is at the wheel and watches him in the rear view mirror. Yunus speaks in careful slow formal Modern Standard Arabic with a light foreign accent, shy but proud of himself, and says: إلى السوق من فضلك. Natural lip sync to the exact spoken line. Only Yunus speaks, Karim just nods and smiles in the mirror.', cam:'steady shot from the front passenger seat turned back toward Yunus', snd:'engine hum, light street noise, no music'},
        {n:3, loc:'taxi', ru:'Перекрёсток. Аджибус с переднего сиденья командует всей ладонью: «Направо, потом налево».', ar:['يمين، ثم يسار'], en:'Inside a taxi in an Arab city approaching a busy junction, warm daylight, bright street through the windscreen. Ajeebus, an Arab man of about sixty five, wearing a white ankle length thobe with a beige knitted cardigan over it and a white knitted skullcap covering his bald head, round glasses, a full white beard tinted henna orange at the front, very dark brown eyes, sits in the front passenger seat and points forward with his whole hand, white eyebrows high, delighted. Karim, the Arab taxi driver in his forties with a thick moustache, is at the wheel beside him. Ajeebus speaks in theatrical formal Modern Standard Arabic, warm and singsong, and says: يمين، ثم يسار. Natural lip sync to the exact spoken line. Only Ajeebus speaks, Karim glances at him and turns the wheel.', cam:'low steady shot from the dashboard toward Ajeebus', snd:'engine hum, street noise, no music'},
        {n:4, loc:'taxi', ru:'У рынка. Юнус сам, уверенно: «Остановите здесь, пожалуйста». Карим плавно тормозит.', ar:['قِفْ هنا من فضلك'], en:'Inside a taxi pulling up at the edge of a market street in an Arab city, late morning light, stalls and awnings outside the window. Yunus, a Western European young man of about twenty two with fair skin, light blue grey eyes and tousled light brown hair, in a blue denim jacket over a grey t-shirt, sits on the back seat and leans forward pointing at the kerb, confident this time. Karim, the Arab taxi driver in his forties with a thick moustache, brakes gently and looks at him in the rear view mirror. Yunus speaks in clear formal Modern Standard Arabic with a light foreign accent, firm and polite, and says: قِفْ هُنَا مِنْ فَضْلِك. Natural lip sync to the exact spoken line. Only Yunus speaks, Karim nods and stops the car.', cam:'steady shot from the front seat turned back toward Yunus', snd:'idling engine, market noise, no music'},
        {n:5, loc:'taxi', ru:'Финал. Карим оборачивается через спинку сиденья, сияет: «Машаллах, твой арабский прекрасен». Юнус смущённо улыбается.', ar:['ما شاء الله، لغتك العربية جميلة'], en:'Inside a stopped taxi at the edge of a market street in an Arab city, warm late morning light, stalls and awnings outside the windows. Karim, the Arab taxi driver in his forties with a thick moustache, turns around over the back of his seat with one hand on the headrest, beaming with surprise and pleasure. Yunus, a Western European young man of about twenty two with fair skin, light blue grey eyes and tousled light brown hair, in a blue denim jacket over a grey t-shirt, sits on the back seat and looks down, shy and happy. Karim speaks in warm friendly formal Modern Standard Arabic, quick and delighted, and says: ما شاء الله، لغتك العربية جميلة. Natural lip sync to the exact spoken line. Only Karim speaks, Yunus just smiles.', cam:'slow push-in from the back seat toward Karim', snd:'market noise, idling engine, no music'}
      ]
    }
  ],

  /* ---------- открытые решения ---------- */
  blockers:[
    {id:'look2', q:'Облик Аджибуса 2.0 — арабский сеттинг', why:'Пивот от 27.08: действие переносится в арабскую страну, одежда персонажей — арабская. Все локации, канон и промпты пересобираются от этого выбора.',
     opts:['A — тоуб + кардиган (фирменная деталь)','B — египетская галабея в полоску','C — оманская дишдаша + кума','D — магрибская джеллаба с капюшоном'],
     hint:'Карточки вариантов с полными промптами — наверху вкладки «Канон». Выбор отмечается там же; плашки генерим после логина во Flow.'}
  ],

  /* ---------- кастинг 2.0: облик Аджибуса в арабском сеттинге (пивот 27.08) ----------
     Юнус остаётся в джинсовке — он теперь иностранный студент, и выделяться одеждой
     ему положено по роли. Меняется только Аджибус и мир вокруг. */
  casting:{
    chosen:'A',
    question:'Облик Аджибуса 2.0 — каким он будет в арабском городе?',
    verdict:'ВЫБРАН ВАРИАНТ A (Иса, 01.09): белый тоуб + вязаный бежевый кардиган поверх + белая вязаная такия. '
      +'Кардиган поверх тоуба — та самая деталь, которая переехала из старого канона и держит преемственность. '
      +'По сценарию Аджибуса будем переодевать не раз — постоянными остаются борода с хной, круглые очки и такия.',
    hair:'ВОЛОСЫ: решено 01.09 — БЕЗ ВОЛОС, как в первом варианте. Голова под такией лысая, по бокам волос не видно. '
      +'Пробы с кудрями (A2) и с гривой без шапки (A3) отклонены.',
    eyes:'ГЛАЗА: решено 01.09 — ВАРИАНТ 2, очень тёмный карий, почти чёрный (very dark brown eyes, almost black). '
      +'Голубые и светлые отклонены как «не по-арабски», тёплый карий и янтарный — как пробы. '
      +'Тёмно-карий не уезжает в зелень или орех при тёплом контровом свете, а искру в глазах держат блики, а не радужка.',
    note:'Общее во всех вариантах: ~65 лет, пышная белая борода с хной спереди, маленькие круглые очки, лучистые глаза, театральная пластика. Меняется только одежда и головной убор. Выбор одного варианта пересобирает character lock, все локации и промпты.',
    options:[
      {id:'A', title:'Тоуб + кардиган', sub:'фирменная деталь сохраняется',
       ru:'Белоснежный тоуб (галабея) до пят — и поверх него тот самый вязаный бежевый кардиган. Белая вязаная такия на голове. Чудачество читается мгновенно: дед, который носит кардиган поверх тоуба, потому что «спине холодно». Максимальная преемственность с уже снятым.',
       lock:'the older Arab man in a crisp white thobe with a beige knitted cardigan worn over it, a white crocheted taqiyah cap on a bald head with no hair showing at the sides, full white beard with henna-orange front, small round glasses, very dark brown eyes'},
      {id:'B', title:'Египетская галабея', sub:'полосатая, домашняя',
       ru:'Просторная серо-полосатая галабея каирского кроя, поверх — клетчатый шерстяной шарф, наброшенный на плечи. Белая такия. Тёплый «дедушка из старого Каира», очень фактурный в кадре.',
       lock:'the older Arab man in a loose grey-striped Egyptian galabeya with a checked wool scarf draped over his shoulders, a white taqiyah cap, full white beard with henna-orange front, small round glasses'},
      {id:'C', title:'Оманская дишдаша', sub:'самый нарядный',
       ru:'Белая дишдаша с кисточкой-фуррахой у ворота и вышитая оманская кума на голове. Строгий и красивый силуэт; чудачество будет держаться только на пластике и реквизите.',
       lock:'the older Arab man in a white Omani dishdasha with a tassel at the collar and an embroidered round kuma cap, full white beard with henna-orange front, small round glasses'},
      {id:'D', title:'Магрибская джеллаба', sub:'капюшон!',
       ru:'Песочная джеллаба с остроконечным капюшоном. Капюшон — готовый комический реквизит: поднят в моменты обиды, в нём можно прятаться. Самый характерный силуэт из четырёх.',
       lock:'the older Arab man in a sand-coloured Moroccan djellaba with a pointed hood (hood down), full white beard with henna-orange front, small round glasses'}
    ],
    shots:[
      ['полный рост, нейтральная поза','Photoreal full-body shot of {LOCK}, standing relaxed in a sunlit old-city alley with traditional architecture, warm morning light'],
      ['крупный портрет','Photoreal medium close-up of {LOCK}, warm delighted expression, eyebrows raised, soft daylight, blurred old-city background'],
      ['фирменный жест','Photoreal medium shot of {LOCK} mid-gesture, one hand raised in a theatrical conductor sweep, joyful face, sunlit courtyard behind'],
      ['за чаем','Photoreal medium shot of {LOCK} pouring tea from a small kettle into a glass in a thin high stream, focused expression, traditional low table']
    ]
  },

  /* ---------- модели и цены ---------- */
  models:[
    {name:'Nano Banana Pro / 2 / 2 Lite', kind:'изображение', price:0, note:'любой формат, до x4'},
    {name:'Veo 3.1 Lite [Lower Priority]', kind:'видео', price:0, note:'медленная очередь — для черновиков'},
    {name:'Veo 3.1 Lite', kind:'видео', price:5, note:''},
    {name:'Veo 3.1 Fast', kind:'видео', price:10, note:'основная рабочая модель'},
    {name:'Omni Flash', kind:'видео', price:12, note:'15 за 10s; для большого стека референсов'},
    {name:'Veo 3.1 Quality', kind:'видео', price:100, note:'НЕ ИСПОЛЬЗУЕМ — вне бюджета'}
  ],

  /* ---------- правила промптинга ---------- */
  rules:[
    'ГОЛОС ЖИВЁТ В КАРТОЧКЕ ПЕРСОНАЖА, А НЕ В ПРОМПТЕ (разобрано 01.09). Голос, прикреплённый к запросу отдельным ассетом рядом с карточкой персонажа, НЕ РАБОТАЕТ — говорит всегда голос, вшитый в карточку. Из-за этого проба из пяти голосов (Charon, Enceladus, Umbriel, Iapetus) дала четыре одинаковые дорожки: Иса услышал их как один голос, и был прав. Чтобы поменять голос — менять его в карточке персонажа, другого способа нет.',
    'ДЕФЕКТ ГОЛОСА БЫЛ ВПИСАН В КАРТОЧКУ (найдено 01.09). В карточке «Голос АджибусаAlgenib Custom» с августа стояло описание манеры: «Warm, RASPY, sing-song voice of a delighted ELDERLY Arab man». Отсюда и «старческий голос, будто нет пары зубов», который услышал Иса. Слова rasp/elderly из описания убраны; новая карточка «Аджибус 2.0» несёт голос Algenib Custom с формулировкой: warm, bright, mid-range pitch, not a deep bass, clean resonant tone, crisp clear consonants, no rasp, no hoarseness, no wobble, no lisp. Правило: в описании голоса не писать raspy, gravelly, elderly, frail — модель отыгрывает их буквально.',
    'ВЕСЬ ВТОРОСТЕПЕННЫЙ РОСТЕР НЕ КАНОН (проверено 01.09): Юнус, Анза, кот, продавец, Сальма, Амина и покупательница сняты в «современном городе» — за окном небоскрёбы, продавец в фартуке сетевого супермаркета. После пивота всё это переснимается в арабском сеттинге на Nano Banana, 0 кредитов. Юнус переснят и УТВЕРЖДЁН Исой 01.09 (канон 2.0, западная внешность), остальные шестеро в очереди.',
    'ЛИЦО В ВИДЕО — ТОЛЬКО ЧЕРЕЗ КАРТОЧКУ ПЕРСОНАЖА (поймано 01.09): если приложить обычную фотореалистичную картинку человека референсом в режиме «Образцы», Veo отвечает «Этот запрос может нарушать наши правила в отношении генерации изображений известных людей» и генерация не проходит (бонусы не списываются). Та же самая картинка, оформленная карточкой персонажа, проходит нормально. Вывод: любой кадр с человеком собираем через карточку, а не через голую картинку.',
    'ГОЛОСА МОЖНО СРАВНИВАТЬ БЕСПЛАТНО (01.09): Veo 3.1 Lite [Lower Priority] стоит 0 бонусов, поэтому пробы голоса гоняем на ней — одна реплика, один персонаж, разные голоса из раздела «Голоса». Картинка на Lite плывёт (персонаж может выйти другим человеком), но звук честный. Финальную проверку липсинка делать на Fast за 10.',
    'БИБЛИОТЕКА ЛОКАЦИЙ ПЕРЕСНЯТА (01.09): 22 плашки в арабском сеттинге лежат в репозитории как aj-*.jpg и разведены по всем 50 урокам курса 2 — прихожая, гостиная, кухня, спальня, крыша днём и ночью, улица, лавка, рынок, мечеть, кафе, такси, остановка, обменник, врач, аптека, вокзал, вагон, отель, море, деревня, кабинет. Все Nano Banana Pro 9:16 x1, 0 кредитов. Старые 56 плашек «современного города» не канон и не используются.',
    'ВЕСЬ МИР — АРАБСКИЙ (напоминание к производству, 01.09): вся библиотека локаций (56 плашек) снята в старом «современном городе» и после пивота НЕ КАНОН. Прежде чем собирать кадры, локации перегенерировать в арабском сеттинге: арабская квартира с машрабией, улица старого города, крыша с минаретом на закате, лавка с финиками и специями. Аджибус — в арабской одежде (вариант кастинга 2.0), Юнус остаётся в джинсовке как иностранец. Всё это Nano Banana, 0 кредитов.',
    'Селектор Flow снова сам сполз на «Видео · 720p · 8s» (01.09) — перед каждой отправкой смотреть на чип у кнопки «Создать», иначе бесплатная картинка уедет как видео за 10 кредитов.',
    'ПОРЯДОК СЪЁМКИ ИЗМЕНЁН (решение Исы 01.09, проверено на живой генерации): кадр сначала собирается ЦЕЛИКОМ картинкой в Nano Banana (0 кредитов) — двое героев в нужной локации, нужная мизансцена, реквизит и свет; три ингредиента как раз влезают (карточка героя + карточка героя + плашка локации). Готовый кадр принимается глазами, и только потом уходит в видео режимом «Кадры» как первый кадр — Veo его анимирует, и консистентность уже вшита в картинку. Плюсы: брак ловится бесплатно вместо 10 кредитов за клип; лимит в 3 референса перестаёт мешать, потому что видео нужен один-единственный референс; можно задать точную мизансцену, которую текстом не объяснишь.',
    'Флоу, проверено 29.08 при живом логине: в режиме «Образцы» максимум ТРИ картинки-ингредиента. Интерфейс молча принимает четвёртую и дальше, но лишние помечаются восклицательным знаком в углу плашки и в генерацию не идут (подсказка: «Добавлено максимальное количество ингредиентов изображений (3)»). Перед каждой отправкой смотреть на бейджи, а не на количество плашек.',
    'Цены перепроверены 29.08 на живом аккаунте: Nano Banana Pro — 0 бонусов при любом формате и множителе; Veo 3.1 Fast 9:16 8s x1 — 10; Veo 3.1 Lite — 5 за штуку (x4 = 20). Множитель умножает цену линейно, длительность на цену не влияет. В режиме «Образцы» доступны Omni 1.1 Flash, Lite, Fast, Quality, Lite [Lower Priority] — Quality не выбирать никогда.',
    'Лексика — фразами (решение Исы 29.08): как только у ученика есть 5–7 слов, новое слово подаётся минимум двухсловной фразой со знакомым словом; голые карточки-слова допустимы только в уроках 1–2. Транскрипция в приложении не используется нигде — ни русская, ни латиница: только вязь, звук и перевод.',
    'Промпты по-английски, реплики арабской вязью в кавычках.',
    'Всегда добавлять no subtitles, no text, no captions — иначе Veo рисует реплику на экране.',
    'Для арабского: speaks slow, clear Modern Standard Arabic, with a pause after the key phrase.',
    'Реплики короткие — 8 секунд, фраза на одном дыхании.',
    'Одно действие на один шот.',
    'Никто не смотрит в камеру и не обращается к зрителю. Повторить просит приложение, а внутри сцены — Аджибус у Юнуса.',
    'Character lock вставлять целиком, без изменений.',
    'При неудаче менять одну переменную за раз.',
    'Финал шота — на паузе, а не в движении: тогда обрезка и склейка идут гладко.',
    '⚠️ РЕФЕРЕНСЫ ВСЕГДА И НА ВСЁ (26.08): каждая генерация несёт карточки всех людей в кадре + плашку локации. Слотов три, поэтому в кадре максимум два персонажа с референсами; третий слот — локация. Генерация без полного набора референсов — брак по определению, даже если картинка красивая.',
    'Съёмка сцены — кадрами с разных ракурсов (мастер → крупные планы → немая перебивка), склейка потом. Кнопка «Съёмочный план» у каждого шота даёт готовые промпты.',
    'Ось 180°: кто слева, кто справа — фиксируется в первом кадре сцены и пишется в каждом промпте (Ajibus frame left, Yunus frame right). Нарушил ось — персонажи «перепрыгнули» местами.',
    'Перебивки (insert/cutaway) генерятся НЕМЫМИ: ambience only, no speech. Звук диалога протягивается поверх на монтаже.',
    'Свет одинаковый во всех кадрах сцены: одна фраза про время суток и свет копируется во все промпты кадра.',
    'Кадры отдаём с запасом: лишние секунды в конце — не брак, обрезка на монтаже у Исы.'
  ],
  mistakes:[
    ['«oversized turban»','пышный шарообразный тюрбан, читается как сикхский дастар. Правильно: modest white Islamic imamah turban, smooth cloth wound in flat neat horizontal layers around a low white skullcap, sitting low on the forehead.'],
    ['«emerald-green vest» без уточнения','травяной салатовый. Правильно: deep jewel-emerald.'],
    ['Очки просто pushed up onto his forehead','почти не видны. Добавлять clearly visible.'],
    ['«straight to camera» и «into the lens»','ломает четвёртую стену. Отменено 18.08: сериал играется как кино, зритель подсматривает. В промптах писать two-shot, profile, over-the-shoulder — но не обращение в объектив.'],
    ['Юнус разный в каждом кадре','генерации уходили без его карточки-референса: ↺ выбрасывает третий референс, и он терялся молча. Лечится правилом «нет полного набора референсов — не отправляем» и проверкой плашек референсов глазами перед каждым запуском.'],
    ['Сцена одним 8-секундным кадром','длинный диалог в одном ракурсе не склеивается и скучен. Снимать кадрами: мастер, крупные планы, немая перебивка — и клеить.']
  ],
  tail:'speaks slow, clear Modern Standard Arabic, with a pause after the key phrase. no subtitles, no text, no captions, no on-screen writing.'
};

/* ---------- Арабский мир: плашки локаций после пивота (Nano Banana, 0 кредитов).
   Старая библиотека из 56 плашек снята в «современном городе» и больше не канон. ---------- */
window.AJ.arabworld = [
 /* [id, подпись, промпт, файл в репозитории] — снято 1 сент. 2026, Nano Banana Pro 9:16 x1, 0 кредитов */
 ['hall','Прихожая — дверь на улицу','Photoreal cinematic still, vertical 9:16. The entrance hall of an old Arab house seen from inside: a heavy carved wooden front door standing half open with daylight spilling in, sandals lined up on patterned floor tiles, a coat hook with a shawl, a console table with a bowl of keys, a rug runner leading deeper into the house. No people. Warm daylight, 35mm, fine film grain, muted warm palette.','aj-hall.jpg'],
 ['living','Гостиная Аджибуса','Photoreal cinematic still, vertical. A warm living room in a modern Arab apartment: a low sofa with woven cushions, a carved wooden coffee table with a brass tea tray and small glasses, a patterned rug, a mashrabiya wooden lattice screen over the tall window, potted plants, a shelf of Arabic books. Late afternoon sun through the lattice throwing patterned light across the wall. Sand, ochre and deep green palette, 35mm look. No people in frame, no text.','aj-living.jpg'],
 ['kitchen','Кухня — чайник на плите','Photoreal cinematic still, vertical 9:16. A modest traditional kitchen in an Arab home: a small gas stove with a blackened kettle, a stovetop coffee pot, glass tea cups on a metal tray, jars of dates and sugar, a string of garlic, patterned tiles on the wall, a window with a lace curtain. No people. Soft morning light, steam rising, 35mm, fine film grain, muted warm palette.','aj-kitchen.jpg'],
 ['room','Спальня утром отъезда','Photoreal cinematic still, vertical 9:16. A simple bedroom in an old Arab house on the morning of a journey: an open suitcase on a rug with folded clothes, a passport and a ticket on the bed, a brass key, shutters half open with sunlight in bars across the floor, a jug of water. No people. Early morning light, 35mm, fine film grain, muted warm palette.','aj-room.jpg'],
 ['roof','Крыша-терраса на закате','Photoreal cinematic still, vertical. A rooftop terrace of an Arab townhouse at sunset: low parapet wall, two plastic chairs and a small metal table with a teapot, potted mint and herbs, a laundry line, satellite dishes, flat city rooftops and a minaret silhouette against an orange and violet sky. Warm dusk light, 35mm look. No people in frame, no text.','aj-roof.jpg'],
 ['night','Крыша ночью, под звёздами','Photoreal cinematic still, vertical 9:16. A rooftop in an old Arab city at night: two plastic chairs and a small table with a teapot and glasses, a washing line, low parapet, the lit minaret and flat rooftops below, a deep blue sky full of stars and a crescent moon. No people. Night, warm lamp glow against cool blue, 35mm, fine film grain.','aj-night.jpg'],
 ['street','Улица старого города','Photoreal cinematic still, vertical. A quiet street in an old Arab city at golden hour: sand-coloured stone houses, blue wooden shutters, an arched doorway with a worn step, a small shop sign in Arabic script, bougainvillea spilling over a wall, a minaret in the distance. Warm low sun, long shadows, dust in the air, 35mm look. No people in frame, no text.','aj-street.jpg'],
 ['shop','Лавка у дома','Photoreal cinematic still, vertical. A small neighbourhood grocery shop in an Arab city: wooden crates of apples, bananas and dates, a hanging brass scale, shelves of tea boxes and spice jars, handwritten Arabic price tags, a woven basket, warm overhead light and daylight from the doorway, 35mm look. No people in frame, no text.','aj-shop.jpg'],
 ['market','Крытый рынок, ряд со специями','Photoreal cinematic still, vertical. A covered market alley in an Arab city: stalls with spices in open sacks, hanging lanterns and textiles, wooden crates of fruit, shafts of light through the roof slats, worn stone paving. No people. Warm dusty light, 35mm, fine film grain, muted warm palette.','aj-market.jpg'],
 ['mosque','Двор мечети','Photoreal cinematic still, vertical 9:16. The courtyard of a small old mosque in an Arab city: a stone ablution fountain, worn arcade columns, a minaret rising against a pale sky, prayer mats rolled by a doorway, pigeons on the paving. No people. Late afternoon light, long shadows, 35mm, fine film grain, muted warm palette.','aj-mosque.jpg'],
 ['rest','Кафе / ресторанчик','Photoreal cinematic still, vertical. A modest restaurant in an Arab city: a table set with a plate of rice and grilled meat, flatbread, small salad dishes, a glass of tea, a menu card face down, tiled walls, pendant lamps, a window onto the street at dusk. No people. Warm interior light, 35mm, fine film grain.','aj-rest.jpg'],
 ['taxi','Такси изнутри','Photoreal cinematic still, vertical 9:16. Interior of an old taxi in an Arab city seen from the back seat: worn beige seat covers, prayer beads and a small air freshener hanging from the rear-view mirror, a dusty windshield, an old radio, sunlit narrow street ahead through the glass. No people. Warm late-afternoon light, shallow depth of field, 35mm, fine film grain, muted warm palette.','aj-taxi.jpg'],
 ['bus','Остановка автобуса','Photoreal cinematic still, vertical. A bus stop on a street in an Arab city: a simple metal shelter with a bench, a dusty timetable board, a minibus approaching in the background, sand-coloured buildings, palms, harsh midday sun. No people. 35mm, fine film grain, muted warm palette.','aj-bus.jpg'],
 ['exch','Обменник','Photoreal cinematic still, vertical 9:16. A tiny money-exchange booth in an Arab city street: a barred window in a tiled wall, a rate board with Arabic numerals, a worn wooden counter, a small metal tray for notes, a calculator, a hanging clock. No people. Harsh midday sun outside, cool shade inside, 35mm, fine film grain, muted warm palette.','aj-exch.jpg'],
 ['clinic','Кабинет врача','Photoreal cinematic still, vertical. A modest doctor\u2019s consulting room in an Arab clinic: an examination couch with clean paper, a desk with a blood-pressure cuff and a stethoscope, a shelf of boxed medicine, an anatomy chart, a window with blinds. No people. Cool daylight, 35mm, fine film grain.','aj-clinic.jpg'],
 ['pharm','Аптека','Photoreal cinematic still, vertical 9:16. A small neighbourhood pharmacy in an Arab city: a glass counter, wooden shelves of boxed medicine with Arabic labels, a set of brass scales, a green cross sign, a fan turning overhead, street light coming through the doorway. No people. Warm interior light, 35mm, fine film grain, muted warm palette.','aj-pharm.jpg'],
 ['station','Перрон вокзала','Photoreal cinematic still, vertical 9:16. A small train station platform in an Arab country: a low sand-coloured station building with an arched arcade, a green metal bench, a hanging clock, a departure board with Arabic script, empty rails curving away, palms and dry hills behind. No people. Early morning haze, warm light, 35mm, fine film grain, muted warm palette.','aj-station.jpg'],
 ['train','Вагон поезда','Photoreal cinematic still, vertical 9:16. Interior of an old passenger train carriage in an Arab country: two facing bench seats in worn red fabric, a small table by the window, a luggage rack above, dry desert and palms sliding past the window. No people. Warm daylight through dusty glass, 35mm, fine film grain, muted warm palette.','aj-train.jpg'],
 ['hotel','Ресепшн отеля','Photoreal cinematic still, vertical. A small hotel reception in an Arab city: a wooden counter with a brass bell and a key rack with numbered keys, patterned tiles, an old ceiling fan, a potted palm, an arched doorway onto the street. No people. Warm lamp light, 35mm, fine film grain.','aj-hotel.jpg'],
 ['beach','Берег моря на закате','Photoreal cinematic still, vertical. A quiet beach on the Arabian coast at sunset: calm sea, wet sand with footprints, a small wooden fishing boat pulled ashore, palm silhouettes on the left, a violet and orange sky. No people. 35mm, fine film grain.','aj-beach.jpg'],
 ['village','Двор в деревне','Photoreal cinematic still, VERTICAL PORTRAIT ORIENTATION, camera held upright at eye level. A village courtyard in the Arab countryside: a low mud-brick house with a weathered blue wooden door, tall date palms rising upward out of the top of the frame, a stone well with a bucket, a rope bed against the wall, a clay water jar. No people. Late afternoon sun, long shadows, 35mm, fine film grain, muted warm palette.','aj-village.jpg'],
 ['study','Кабинет с книгами','Photoreal cinematic still, vertical 9:16. A quiet study room in an old Arab house: a low wooden desk, stacks of worn Arabic books, an open notebook and a pen, a brass lamp, a bookshelf to the ceiling, a mashrabiya window casting patterned light on the wall. No people. Warm evening light, 35mm, fine film grain, muted warm palette.','aj-study.jpg'],
 /* --- волна 2 от 02.09 (ночная сессия): локации разнообразия сезонов --- */
 ['pek','Пекарня Абу Халиля','VERTICAL PORTRAIT ORIENTATION, camera held upright at eye level. A small bakery niche in an old Arab city street: a glowing tandoor oven, fresh flatbreads stacked on a wooden counter, flour dust in the air, tall shelf of bread baskets rising out of the top of the frame. Warm ember glow mixed with cool morning light. No people in frame, fine film grain.','aj-pek.jpg'],
 ['wed','Свадебный двор — ночь','VERTICAL PORTRAIT ORIENTATION, camera held upright at eye level. A stone courtyard of an old Arab city prepared for a wedding at night: strings of warm lights criss-crossing upward out of the top of the frame, rows of cushioned benches, trays of sweets on low tables, an oud resting on a chair. Festive warm string-light glow against deep blue night. No people in frame, fine film grain.','aj-wed.jpg'],
 ['mall','Торговый центр','VERTICAL PORTRAIT ORIENTATION, camera held upright at eye level. A modern glass shopping mall interior: a tall atrium with escalators rising out of the top of the frame, polished floor reflecting shopfronts, potted palms. Bright even skylight through a glass roof. No people in frame, fine film grain.','aj-mall.jpg'],
 ['corn','Набережная','VERTICAL PORTRAIT ORIENTATION, camera held upright at eye level. A seaside corniche promenade of an Arab city: stone balustrade, tall palm trees rising out of the top of the frame, moored fishing boats, distant minaret across the bay. Late golden afternoon light. No people in frame, fine film grain.','aj-corn.jpg'],
 ['park','Парк — скамейка с нардами','VERTICAL PORTRAIT ORIENTATION, camera held upright at eye level. A small shaded park in an Arab city: gravel path, an old bench with a backgammon board left on it, a fig tree spreading upward out of the top of the frame, a tiled drinking fountain. Dappled afternoon light. No people in frame, fine film grain.','aj-park.jpg'],
 ['boat','Палуба лодки Салиха','VERTICAL PORTRAIT ORIENTATION, camera held upright at eye level. The deck of a turquoise wooden fishing boat: coiled ropes, a folded net, a small mast rising out of the top of the frame, calm open sea beyond the gunwale. Clear early-morning sun. No people in frame, fine film grain.','aj-boat.jpg'],
 ['zahra','Двор хаджи Захры','VERTICAL PORTRAIT ORIENTATION, camera held upright at eye level. A village courtyard in an Arab oasis: tall date palms rising out of the top of the frame, a low clay house wall, a woven mat with cushions and a brass tea tray, chickens\' feed bowl by the wall. Soft warm afternoon light through palm leaves. No people in frame, fine film grain.','aj-zahra.jpg'],
 ['yroom','Комнатка Юнуса','VERTICAL PORTRAIT ORIENTATION, camera held upright at eye level. A tiny rented student room in an old Arab city: a mattress on the floor neatly made, a single electric kettle with one glass cup on a crate, textbooks in a stack, a tall shuttered window rising out of the top of the frame with rooftops beyond. Honest plain daylight. No people in frame, fine film grain.','aj-yroom.jpg'],
 ['office','Офис Юнуса','VERTICAL PORTRAIT ORIENTATION, camera held upright at eye level. A modest modern office in an Arab city: two desks with monitors, a whiteboard with Arabic notes wiped half-clean, a tall window rising out of the top of the frame with the old town far below. Neutral daylight with warm desk lamp. No people in frame, fine film grain.','aj-office.jpg'],
 ['class','Вечерний класс','VERTICAL PORTRAIT ORIENTATION, camera held upright at eye level. A small evening language classroom: rows of simple desks, a green chalkboard with neat Arabic letters, a tall window rising out of the top of the frame, a map of the Arab world on the wall. Warm fluorescent and dusk mix. No people in frame, fine film grain.','aj-class.jpg'],
 ['book','Книжный магазин','VERTICAL PORTRAIT ORIENTATION, camera held upright at eye level. A cramped old bookshop in an Arab city: floor-to-ceiling wooden shelves rising out of the top of the frame, stacked Arabic books, a rolling ladder, a small desk with a brass lamp. Warm pooled lamplight. No people in frame, fine film grain.','aj-book.jpg'],
 ['amina2','Гостиная хаджи Амины','VERTICAL PORTRAIT ORIENTATION, camera held upright at eye level. A cosy living room of an elderly Arab neighbour: lace-covered armchairs, framed old family photographs on a sideboard, a tall glass-front cabinet with porcelain rising out of the top of the frame, a tray with tea glasses on a low table. Soft warm afternoon light through curtains. No people in frame, fine film grain.','aj-amina2.jpg'],
 ['jama','Площадь у мечети','VERTICAL PORTRAIT ORIENTATION, camera held upright at eye level. A small stone plaza in front of an old city mosque just after dawn: a tall minaret rising out of the top of the frame, rows of shoes shelf by the gate, pigeons, a water fountain for ablution at the side. Pale gold early light, long shadows. No people in frame, fine film grain.','aj-jama.jpg'],
];

