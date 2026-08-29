/* Аджибус — данные проекта. Источник: паспорт проекта от 13.08.2026.
   Всё, что дашборд знает о сериале, лежит здесь. Правится руками. */
window.AJ = {
  updated: '2026-08-13',

  /* ---------- персонажи ---------- */
  chars: [
    {
      id:'ajibus', name:'Аджибус', role:'Чудаковатый восторженный араб ~65 лет, современная городская квартира',
      status:'утверждён 14.08',
      folder:'01-канон-аджибус', match:'01-канон-аджибус|07-современн|аджибус|ajibus', not:'юнус|yunus',
      anchors:[
        ['Борода','Пышная белая, подкрашенная хной в рыжину спереди. Единственный якорь, переживший все переделки — модель держит его отлично.'],
        ['Очки','Маленькие круглые. В промпте писать round glasses.'],
        ['Одежда','Вязаный бежевый кардиган поверх синей льняной рубашки, песочные чинос. Ни галабеи, ни жилета, ни бабушей, ни пояса.'],
        ['Чалмы нет','Совсем. Голова непокрытая, седые волосы. Старый канон с имамой отменён вместе с пивотом в современность.'],
        ['Реквизит','Лупа — опциональна. Кадр «глаз через лупу в камеру» остаётся кандидатом в иконку приложения, но в сериале не обязателен.'],
        ['Пластика','Театральная, размашистая. Брови делают половину актёрской работы.']
      ],
      face:'Густые белые брови — главный инструмент эмоций. Лучистые тёмные глаза в сетке морщинок-смешинок.',
      voice:'Algenib (male, gravelly, low). Во Flow сохранён как «Голос АджибусаAlgenib Custom»: тёплый, с хрипотцой, нараспев, раскатистое «р», длинные щедрые паузы. Взрывается ликующими возгласами, падает в возмущённый шёпот.',
      lock:"the older man with the white henna-tipped beard, round glasses, linen shirt under a knitted cardigan"
    },
    {
      id:'yunus', name:'Юнус', role:'Ученик, араб лет двадцати', status:'утверждён 14.08',
      folder:'02-канон-юнус', match:'02-канон-юнус|юнус|yunus',
      anchors:[
        ['Железное правило','Знание Юнуса всегда равно знанию зрителя. Переспрашивает то, что не понял бы зритель, ошибается там, где ошибся бы зритель.'],
        ['Функция','Не персонаж, а аватар клиента. Его прогресс — главный продающий аргумент.'],
        ['Внешность','Короткие тёмные волосы, лёгкая щетина, выразительные тревожные брови.'],
        ['Одежда','Джинсовая куртка поверх серой футболки, холщовый рюкзак.'],
        ['Стартовый багаж','Знает по-арабски ровно одно слово: салям.']
      ],
      voice:'Achird (male, friendly, mid pitch).',
      lock:"the young man in the denim jacket with a canvas backpack"
    },
    {
      id:'anza', name:'Анза (коза)', role:'Коза-воровка, живёт на крыше-террасе', status:'кастинг 17.08',
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
      id:'cat', name:'Кот', role:'Спит на стопке книг в гостиной', status:'кастинг 17.08',
      folder:'08-канон-кот', match:'08-канон-кот|канон-кот',
      anchors:[
        ['Функция','Живой предмет для «ма хаза?» — единственное существо в кадре, которое можно назвать словом и потрогать.'],
        ['Характер','Полное безразличие. Приоткрывает один глаз и спит дальше. В уроке 4 демонстративно спит на том, под чем ищут ключ.'],
        ['Где снят','У2Ш7 — на стопке книг на деревянном столе.']
      ],
      lock:"a plump ginger-and-white cat with a torn ear, asleep on a stack of books, opening one eye and going back to sleep"
    },
    {
      id:'seller', name:'Продавец в магазине', role:'Эпизодический, урок 5', status:'кастинг 17.08',
      folder:'04-канон-продавец', match:'04-канон-продавец|продавец',
      anchors:[
        ['Характер','Невозмутимый, реагирует ровно ноль раз на театр Аджибуса. Улыбается один раз за весь сезон — когда Юнус сам делает заказ. Это и есть финальный кадр сезона.'],
        ['Внешность','Молодой, в фирменном фартуке продуктового. Современный, не рыночный торговец.'],
        ['Функция','Стена, о которую бьётся комедия Аджибуса, и свидетель победы Юнуса.']
      ],
      lock:"a young shop assistant in a branded apron, deadpan, standing behind the fruit counter of a modern grocery store"
    }    ,
    {
      id:'salma', name:'Сальма', role:'Соседская девочка лет шести', status:'кастинг 17.08',
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
      id:'amina', name:'Хаджа Амина', role:'Соседка сверху, около 75 лет', status:'кастинг 17.08',
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
      id:'shopper', name:'Покупательница', role:'Фоновый персонаж магазина, урок 5', status:'кастинг 17.08',
      folder:'11-канон-покупательница', match:'11-канон-покупательница|покупательница',
      anchors:[
        ['Функция','Без реплик. Делает современный арабский город достоверным — в кадре живут разные люди, а не только двое главных.'],
        ['Правило съёмки','Только средние и общие планы, уважительная дистанция. Никаких крупных планов лица.'],
        ['Внешность','Простая чёрная абайя и никаб, видны только спокойные тёмные глаза, корзина в руке.']
      ],
      lock:"a woman in a plain black abaya and black niqab, only her calm dark eyes visible, with a shopping basket"
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
    }
  ],

  /* ---------- открытые решения ---------- */
  blockers:[
    {id:'build', q:'Телосложение Аджибуса', why:'Блокирует весь канон: character lock и все последующие генерации зависят от силуэта.',
     opts:['Вариант А — невысокий, круглый (рекомендация паспорта)','Вариант B — высокий, сухопарый'],
     hint:'В папке 00-архив-превью лежат по 4 кадра каждого варианта в полный рост.'},
    {id:'voice', q:'Голос Аджибуса', why:'Закрепляется в карточке персонажа Flow один раз — иначе голос плавает от серии к серии.',
     opts:['Algenib — gravelly, low','Sadachbia — lively, low','Umbriel — smooth, lower'],
     hint:'Прослушать демо в разделе «Голоса» библиотеки ассетов Flow. Первый выбор паспорта — Algenib.'},
    {id:'look', q:'Финальный облик после исправления чалмы', why:'Без утверждённого мастер-портрета нельзя заводить карточку персонажа и начинать производство.',
     opts:['Утверждён — можно заводить персонажа','Нужна ещё серия генераций'],
     hint:'Ни в одном из 16 архивных превью чалма ещё НЕ исправлена: везде пышный шар вместо имамы.'}
  ],

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
