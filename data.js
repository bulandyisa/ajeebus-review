/* Аджибус — данные проекта. Источник: паспорт проекта от 13.08.2026.
   Всё, что дашборд знает о сериале, лежит здесь. Правится руками. */
window.AJ = {
  updated: '2026-08-13',

  /* ---------- персонажи ---------- */
  chars: [
    {
      id:'ajibus', name:'Шейх Аджибус', role:'Чудаковатый мудрец-антиквар, ~65 лет',
      status:'не утверждён',
      anchors:[
        ['Силуэт','ОТКРЫТО: вариант А (~160 см, круглый, пружинистый) или B (~190 см, сухопарый). Рекомендация паспорта — А: физическая комедия читается сильнее.'],
        ['Борода','Пышная белая, подкрашенная хной в рыжину спереди. Утверждено. Модель держит отлично.'],
        ['Чалма','Имама: гладкая белая ткань ровными горизонтальными витками вокруг невысокой шапочки, низко на лбу, конец через левое плечо, узкая шафрановая лента у основания.'],
        ['Очки','Маленькие круглые латунные, почти всегда сдвинуты на лоб. Писать clearly visible — иначе теряются.'],
        ['Одежда','Изумрудно-зелёный (deep jewel-emerald, НЕ травяной) расшитый жилет с кармашками поверх песочной галабеи, жёлтые бабуши с загнутыми носами.'],
        ['Реквизит','Латунная лупа на шнурке — живёт в кармане жилета, не на шее. Кадр «глаз через лупу» — кандидат в иконку приложения.']
      ],
      face:'Густые белые брови-гусеницы — главный инструмент эмоций. Лучистые карие глаза в сетке морщинок. Круглый нос.',
      voice:'Тёплый, с хрипотцой, чуть нараспев, раскатистое «р», медленный чёткий фусха.',
      lock:"AJIBUS — CHARACTER LOCK: A short, round, spry Middle Eastern Muslim scholar in his mid-60s (about 160 cm), warm hazel eyes with deep laugh wrinkles, bushy expressive white eyebrows, a large fluffy white beard tinted henna-orange at the front, small round brass spectacles clearly visible pushed up onto his forehead. He wears a modest white Islamic imamah turban — smooth cloth wound in flat neat horizontal layers around a low white skullcap, sitting low on the forehead, with a short tail of fabric over his left shoulder and a narrow saffron band at the base — an embroidered deep jewel-emerald vest with many small pockets over a sand-beige galabeya, and yellow pointed leather babouches. He moves with bouncy, theatrical energy and speaks slow, clear Modern Standard Arabic in a warm, raspy, sing-song voice."
    },
    {
      id:'yunus', name:'Юнус', role:'Ученик, парень лет двадцати', status:'канон не собран',
      anchors:[
        ['Железное правило','Знание Юнуса всегда равно знанию зрителя. Переспрашивает то, что не понял бы зритель, ошибается там, где ошибся бы зритель.'],
        ['Функция','Не персонаж, а аватар клиента. Его прогресс — главный продающий аргумент.'],
        ['Стартовый багаж','Знает по-арабски ровно одно слово: салям.']
      ],
      lock:"YUNUS — CHARACTER LOCK: A shy, earnest young man of about twenty, short dark hair, sparse stubble, expressive worried eyebrows, wearing a simple grey long-sleeve shirt and dark trousers with a worn canvas backpack. He listens intently, repeats words carefully and lights up when he gets one right."
    },
    {
      id:'anza', name:'Анза (коза)', role:'Коза-воровка', status:'канон не собран',
      anchors:[
        ['Правило мира','Люди говорят — животные действуют. Не разговаривает.'],
        ['Функция','Ворует еду и вещи — этим и смешна. В каждой серии. Имя получает в уроке 4.']
      ],
      lock:"ANZA — CHARACTER LOCK: A small scruffy tan-and-white nanny goat with amber rectangular pupils, one floppy ear and a frayed rope collar. She behaves like a real goat — never anthropomorphic, never speaking — and steals food with calm, unhurried confidence."
    },
    {
      id:'seller', name:'Продавец на рынке', role:'Появляется в уроке 5', status:'канон не собран',
      anchors:[['Характер','Усатый, невозмутимый, в фартуке. Улыбается ровно один раз — в финале сезона, когда Юнус сам делает заказ.']],
      lock:"VENDOR — CHARACTER LOCK: A stocky moustached market vendor in his forties, deadpan expression, canvas apron over a striped shirt, sleeves rolled up, standing behind a stall piled with apples and bananas."
    },
    {
      id:'cat', name:'Кот', role:'Спит на фолианте', status:'канон не собран',
      anchors:[['Функция','Живой предмет для «ма хаза?». В уроке 4 демонстративно спит на сундуке и уходит из рук.']],
      lock:"CAT — CHARACTER LOCK: A plump ginger-and-white shop cat with a torn ear, sleeping on an old leather-bound folio, opening one eye without moving."
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
        {n:4, loc:'alley', ru:'Аджибус в камеру, ладонь к уху: твоя очередь. Пауза 3 секунды, довольный кивок.', ar:['السلام عليكم'], en:'Ajibus turns to face the camera, cups one hand behind his ear inviting the viewer to speak, holds a still three-second silent pause, then nods with warm satisfaction', cam:'medium close-up, straight to camera, static, eye contact with lens', snd:'ambience only during the pause, no music'},
        {n:5, loc:'alley', ru:'Рука к груди, медленно: «Ана — Аджибус». Пауза. Ещё раз, с поклоном.', ar:['أنا عجيبوس'], en:'Ajibus lays a flat hand on his own chest and says his name slowly, pauses, then repeats it with a small theatrical bow', cam:'medium shot, static, eye level', snd:'clear slow speech'},
        {n:6, loc:'alley', ru:'Вопросительная ладонь к Юнусу — тот отвечает. «Юнус! Аджи-и-иб!»', ar:['وأنت؟','أنا يونس','عجيب'], en:'Ajibus opens a questioning palm toward Yunus, who answers his own name; Ajibus repeats it delightedly and throws both hands up', cam:'two-shot, slight arc around the pair', snd:'clear dialogue, delighted exclamation'},
        {n:7, loc:'alley', ru:'Палец в камеру: «Уа анта?» Пауза, подсказка одними губами «Ана…», длинная пауза, кивок.', ar:['وأنت؟'], en:'Ajibus points a finger gently at the camera and asks, then mouths a silent prompt, waits through a long pause and nods encouragingly', cam:'medium close-up, straight to camera, static', snd:'ambience only during the pause'},
        {n:8, loc:'alley', ru:'«Ахлан уа сахлан!» — распахивает дверь квартиры: «Тафаддаль!» Юнус входит.', ar:['أهلاً وسهلاً','تفضّل'], en:'Ajibus welcomes him, swings the shop door wide open and gestures him inside with a sweeping open palm; Yunus steps in', cam:'medium wide, camera follows them through the doorway', snd:'door creak, bell chime, footsteps'},
        {n:9, loc:'shop', ru:'Светлая квартира, стеллаж с книгами. Юнус хочет спросить про странную штуку на полке — слов нет. Мычит, тычет пальцем. Аджибус жестом «терпение».', ar:[], en:'Yunus stares at a brass astrolabe, opens his mouth to ask about it, finds no words, makes a helpless sound and just points; Ajibus raises a calm patient palm', cam:'slow crane down across the shelves, then close-up of the pointing hand', snd:'creaking floorboards, ticking clockwork'},
        {n:10, loc:'shop', ru:'Рекап-вспышки с жестами: салям ↔ ответ · «ана + имя» (рука к груди) · «уа анта?» (ладонь к собеседнику).', ar:['السلام عليكم','أنا عجيبوس','وأنت؟'], en:'Three quick recap beats: Ajibus performs each greeting gesture cleanly to camera, one after another, with a beat of stillness between them', cam:'medium close-up, static, straight to camera, hard cuts between beats', snd:'clear isolated phrases, silence between'},
        {n:11, loc:'alley', ru:'Вечер, дверь квартиры, город за спиной. Прощание. Оба машут и зрителю.', ar:['مع السلامة'], en:'Sunset in the alley: the two say goodbye, then both turn and wave at the camera', cam:'wide two-shot, golden hour backlight, static', snd:'evening street tone, distant call'},
        {n:12, loc:'alley', ru:'КРЮЧОК: крыша-терраса, забытый рюкзак, лямку уже жуёт коза. «Ля! Ля!» Аджибус с рюкзаком в обнимку — взгляд в камеру.', ar:['لا! لا!'], en:'A forgotten backpack lies by the door with a goat already chewing its strap; Ajibus rushes in, hugs the backpack away from her and looks straight at the camera, alarmed', cam:'low wide shot, quick push-in to close-up on his face', snd:'goat bleat, fabric tearing, alarmed exclamation'}
      ]
    },
    {
      n:2, title:'Что это?',
      skill:'Спросить «что это?» про что угодно, подтвердить и отрицать.',
      core:['ما هذا؟ → هذا [X]','نعم','لا'],
      seeds:['كيف حالك؟ → الحمد لله','أو','مفتاح как чеховское ружьё'],
      shots:[
        {n:1, loc:'alley', ru:'Утро. Стук. Юнус на пороге, смущённо показывает на рюкзак. Салям-пара живьём, потом в камеру с паузой.', ar:['السلام عليكم','وعليكم السلام'], en:'Yunus knocks and stands in the doorway, sheepishly pointing at the backpack; they exchange the greeting, then Ajibus repeats it to camera and waits', cam:'medium two-shot at the door, then medium close-up to camera', snd:'knocking, door, clear dialogue'},
        {n:2, loc:'shop', ru:'Квартира. Новое звено ритуала: «Кайфа халюк?» Юнус растерян. Аджибус подсказывает, прижав руку к груди. В камеру — пауза.', ar:['كيف حالك؟','الحمد لله'], en:'Ajibus asks how he is; Yunus freezes, lost; Ajibus presses a hand to his own chest and gives him the answer, which Yunus repeats — then Ajibus asks the camera and waits', cam:'two-shot, then medium close-up to camera, static', snd:'clear slow speech, silence in the pause'},
        {n:3, loc:'shop', ru:'У стеллажа. Аджибус берёт палец Юнуса, наводит на стопку книг и произносит по слогам.', ar:['ما هذا؟','هذا كتاب'], en:'Ajibus takes Yunus by the finger, aims it at a stack of old books and pronounces the question syllable by syllable; Yunus copies him, and Ajibus gives the answer', cam:'close-up on the pointing hand, then medium two-shot', snd:'clear syllabic speech, book leather'},
        {n:4, loc:'shop', ru:'Юнус сам, с азартом, про ручку на столе. Аджибус рисует ею завитушку в воздухе.', ar:['ما هذا؟','هذا قلم'], en:'Yunus eagerly asks the question himself about a reed pen; Ajibus answers and draws a flourish in the air with the pen', cam:'medium shot, slight handheld energy', snd:'clear dialogue, air swish'},
        {n:5, loc:'shop', ru:'Циркуляция-дурачество: перекидывает ручку из руки в руку. «Хаза китаб? — Ля! Хаза калям? — На’ам! Китаб ау калям? — Калям!»', ar:['هذا كتاب؟ لا!','هذا قلم؟ نعم!','كتاب أو قلم؟ قلم!'], en:'Ajibus juggles the pen from hand to hand firing playful yes-and-no questions at Yunus, who laughs and joins in; the pace is fast and silly', cam:'medium shot, static, both fully in frame', snd:'rapid playful dialogue, laughter'},
        {n:6, loc:'shop', ru:'Ошибка и рекаст: Юнус говорит «кибат». Аджибус тепло, по слогам: «Ки-та-аб».', ar:['هذا... كِباب؟','كِ - تا - ب','كتاب!','عجيب'], en:'Yunus mispronounces the word; Ajibus never says wrong — he warmly repeats it syllable by syllable, Yunus gets it right and Ajibus beams', cam:'tight two-shot, eye level, warm', snd:'gentle syllabic correction, delighted praise'},
        {n:7, loc:'shop', ru:'Кот спит на стопке книг. Юнус спрашивает. Кот приоткрывает глаз и спит дальше.', ar:['ما هذا؟','هذا قطّ'], en:'A plump cat sleeps on a leather folio; Yunus asks what it is, Ajibus answers, and the cat opens one eye and goes back to sleep', cam:'close-up on the cat, then medium two-shot', snd:'clear dialogue, a single lazy purr'},
        {n:8, loc:'shop', ru:'ЧЕХОВСКОЕ РУЖЬЁ: прихожая. Аджибус торжественно снимает с крючка ключ на красном шнурке, любовно протирает, вешает обратно. Камера задерживается на пустом крючке.', ar:['هذا مفتاح'], en:'Ajibus solemnly lifts a huge old iron key off its nail, names it, polishes it lovingly on his vest and hangs it back; the camera holds on the nail after he leaves frame', cam:'medium close-up on the key, then static hold on the empty nail', snd:'metal ring, cloth rub, then silence'},
        {n:9, loc:'shop', ru:'Гэг: Юнус про странный гаджет на полке. Аджибус открывает рот… закрывает… разводит руками. Даже Аджибус не всё знает.', ar:['ما هذا؟'], en:'Yunus asks about the astrolabe; Ajibus opens his mouth, closes it, opens it again, then spreads both hands helplessly and shrugs', cam:'medium two-shot, static, comedic hold', snd:'clear question, then a long comic silence'},
        {n:10, loc:'shop', ru:'Рекап: четыре предмета вспышками, «на’ам/ля» большим пальцем.', ar:['كتاب','قلم','مفتاح','قطّ','نعم','لا'], en:'Four quick recap flashes of the objects, each named cleanly; Ajibus gives thumbs up and thumbs down for yes and no', cam:'close-ups, hard cuts, static', snd:'isolated words, silence between'},
        {n:11, loc:'alley', ru:'Крыша-терраса. Прощание. Юнус, уходя, сам говорит козе: «Ма’а с-саляма, я анза!» (посев имени).', ar:['مع السلامة','مع السلامة يا عنزة'], en:'Leaving, Yunus turns and says goodbye to the goat by name all on his own; Ajibus in the doorway raises his eyebrows, impressed', cam:'medium wide, camera at goat height for her reaction', snd:'clear farewell, goat bleat'},
        {n:12, loc:'tea', ru:'КРЮЧОК: вечер, Аджибус падает в кресло, обмахивается: «Уриду шай…» Юнус в дверях оборачивается: «???»', ar:['أريد شاي'], en:'Ajibus drops into his armchair, fans himself and says he wants tea; Yunus, already in the doorway, turns back with a puzzled look straight into the lens', cam:'medium shot on the chair, then quick cut to Yunus at the door', snd:'chair creak, tired sigh, clear phrase'}
      ]
    },
    {
      n:3, title:'Чай у Аджибуса',
      skill:'Попросить, угостить, поблагодарить, похвалить еду. Самый применимый в жизни урок.',
      core:['أريد [X]','تفضّل','شكرًا'],
      seeds:['Культурный слой без слов: давать и брать правой рукой'],
      shots:[
        {n:1, loc:'shop', ru:'Ритуал в темпе: салям → пауза → кайфа халюк → пауза → «Альхамдулиллях!» хором с Юнусом.', ar:['السلام عليكم','كيف حالك؟','الحمد لله'], en:'The now-familiar greeting ritual runs briskly: greeting, a beat to camera, how-are-you, a beat, then both men answer in unison', cam:'two-shot alternating with medium close-up to camera', snd:'clear dialogue, two voices in unison'},
        {n:2, loc:'tea', ru:'Кухонный угол. Аджибус у стеклянного чайника, потирает руки. Заваривает театрально, льёт с метровой высоты тонкой струйкой.', ar:['والآن... أريد شاي'], en:'Ajibus rubs his hands over the stove, announces that he wants tea, and pours it theatrically in a thin stream from a great height into a small glass', cam:'medium shot, then slow-motion insert on the pouring stream', snd:'stove hiss, pouring water, satisfied hum'},
        {n:3, loc:'tea', ru:'Юнус неуверенно просит кофе. Аджибус замирает, оборачивается, трагический шёпот: «Кахва?.. Ля. Ля-ля-ля. Шай!»', ar:['أنا... أريد قهوة؟','قهوة؟.. لا. لا لا لا. شاي!'], en:'Yunus hesitantly asks for coffee; Ajibus freezes mid-pour, turns very slowly and whispers his refusal in tragic disbelief before declaring tea', cam:'slow push-in to close-up on his scandalised face', snd:'pouring stops abruptly, hushed dramatic delivery'},
        {n:4, loc:'tea', ru:'Компромисс: наливает Юнусу воду. «Тафаддаль, хаза ма’!» Слово из первой серии активируется.', ar:['تفضّل، هذا ماء'], en:'As a compromise Ajibus pours him a glass of water and offers it with an open palm', cam:'medium two-shot, hands in frame', snd:'water pouring, warm offer'},
        {n:5, loc:'tea', ru:'Миска фиников на столешнице. Юнус тянется левой рукой — Аджибус мягко, без слов, разворачивает его правую ладонь. Адаб за две секунды.', ar:['ما هذا؟','هذا تمر! تفضّل'], en:'A plate of dates: Yunus asks, Ajibus names them and offers; Yunus reaches with his left hand and Ajibus wordlessly and gently turns his right palm up instead', cam:'close-up on the hands over the plate', snd:'clear dialogue, no comment over the gesture'},
        {n:6, loc:'tea', ru:'Юнус пробует, глаза расширяются: «Лязи-и-из!!» Аджибус гордо кивает, как автор фиников.', ar:['لذيذ!'], en:'Yunus bites a date, his eyes widen and he exclaims that it is delicious; Ajibus nods proudly as though he grew it himself', cam:'close-up on Yunus, then cut to Ajibus', snd:'chewing, delighted exclamation'},
        {n:7, loc:'tea', ru:'Чай готов. «Тафаддаль!» — «Шукран!» И тут же вторая чашка ПРЯМО В КАМЕРУ. Пауза, подсказка рукой к сердцу.', ar:['تفضّل','شكرًا','تفضّل'], en:'Ajibus hands over the tea and receives thanks, then immediately holds a second glass straight out toward the camera, waits, and prompts with a hand to his heart', cam:'medium close-up, glass extended into lens, static', snd:'glass clink, then silence in the pause'},
        {n:8, loc:'tea', ru:'Юнус, осмелев, сам: «Уриду тамр!» — «Тафаддаль!» — «Шукран!» Первый полный диалог ученика.', ar:['أريد تمر','تفضّل','شكرًا'], en:'Emboldened, Yunus makes his own request, is served and thanks his teacher — his first complete exchange; Ajibus wipes away an imaginary tear', cam:'two-shot, static, let it play', snd:'clear three-beat dialogue'},
        {n:9, loc:'tea', ru:'Гэг: Анза через открытую дверь террасы утягивает миску фиников. «Ля! ЛЯ!.. — …тайиб». Вздох. Протягивает ей последний финик.', ar:['لا! لا!','...طيّب','تفضّل'], en:'The goat hooks the plate of dates through the open window and drags it away; Ajibus protests, deflates, sighs, and offers her the last date, which she accepts regally', cam:'wide shot catching window and table, then close-up on the goat', snd:'plate scraping, protest, resigned sigh, chewing'},
        {n:10, loc:'tea', ru:'Рекап жестами: уриду + [шай/кахва/ма’/тамр] · тафаддаль · шукран · лязиз.', ar:['أريد شاي','أريد ماء','تفضّل','شكرًا','لذيذ'], en:'Recap flashes: each phrase performed once with its signature gesture — offering palm, hand to heart, fingertips to lips', cam:'medium close-ups, hard cuts, static', snd:'isolated phrases, silence between'},
        {n:11, loc:'tea', ru:'Крыша-терраса. Прощание чашками в камеру, как тостом.', ar:['مع السلامة'], en:'Both men raise their tea glasses toward the camera like a toast and say goodbye', cam:'two-shot, glasses into lens, static', snd:'glass clink, warm farewell'},
        {n:12, loc:'alley', ru:'КРЮЧОК: вечер, прихожая. Аджибус тянется к крючку у двери — пусто. Хлопает по карманам. По всем. Ещё раз. Медленно поднимает глаза в камеру: «Айна мифтах?!»', ar:['أين المفتاح؟!'], en:'Evening: Ajibus reaches to lock the shop, pats one pocket, then every pocket, then all of them again, and slowly raises his eyes to the camera in horror', cam:'medium shot, slow push-in to close-up on his face', snd:'jingling cloth, rising panic in the voice'}
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
        {n:3, loc:'shop', ru:'Юнус на шкаф: «Хунак?» Аджибус лезет, сверху лавина чалм накрывает его с головой. Из-под кучи: «…ля».', ar:['هناك؟','...لا'], en:'Yunus points up at the wardrobe; Ajibus climbs, and an avalanche of folded turbans buries him; from under the pile comes a small muffled no', cam:'wide static shot to let the fall play in full frame', snd:'wooden creak, soft avalanche, muffled voice'},
        {n:4, loc:'shop', ru:'Гэг с очками: мечется, ища очки, чтобы искать ключ. Юнус молча показывает на лоб. «А!.. Альхамдулиллях».', ar:['أين نظّارتي؟!','آه... الحمد لله'], en:'Ajibus now hunts for his spectacles so he can hunt for the key; Yunus silently points at his forehead, where they sit; Ajibus deflates and thanks God', cam:'medium two-shot, static, comedic hold', snd:'flustered speech, then a relieved sigh'},
        {n:5, loc:'shop', ru:'Циркуляция в панике: «Мифтах хуна? Ля! Хунак? Ля! Айна? АЙНА?!» — четыре повтора, все мотивированы.', ar:['المفتاح هنا؟ لا!','هناك؟ لا!','أين؟ أين؟!'], en:'Ajibus fires the question at every corner of the room in turn, answering himself no each time and ending on a despairing shout', cam:'quick whip pans following his gaze', snd:'rapid repeated phrases, escalating'},
        {n:6, loc:'shop', ru:'Кот демонстративно спит на сундуке. Переглядка. Аджибус на цыпочках поднимает кота… под ним пусто. Кот забирает себя из его рук и уходит.', ar:[], en:'The cat sleeps pointedly on a chest; the two men exchange a look; Ajibus tiptoes over and lifts the cat — nothing underneath — and the cat calmly removes itself from his hands and walks off', cam:'medium shot, slow tiptoe movement, static frame', snd:'floor creak, indignant meow, no dialogue'},
        {n:7, loc:'yard', ru:'Через окно: во дворе Анза что-то жуёт, и у неё на шее болтается мифтах на верёвочке, как кулон. Юнус: «Хуна-а-ак!!»', ar:['هناك!'], en:'Through the window, in the courtyard, the goat chews placidly with the huge key dangling from her neck on a cord like a pendant; Yunus shouts that it is over there', cam:'over-shoulder through the window, then quick zoom onto the key', snd:'goat chewing, triumphant shout'},
        {n:8, loc:'yard', ru:'Погоня по двору — чалма слетает, коза скачет, ключ спасён. «Альхамдулилля-я-ях!»', ar:['الحمد لله'], en:'A chase around the courtyard: the turban comes loose, the goat skips away, and at last Ajibus clutches the key to his chest in relief', cam:'wide handheld tracking, then close-up on the key against his chest', snd:'hooves, laughter, panting, heartfelt exclamation'},
        {n:9, loc:'tea', ru:'Игра со зрителем: прячет финик под одну из двух пиал, двигает их. «Айна тамр? Хуна… ау хунак?» Пауза. Поднимает пиалу — пусто: снизу кадра финик дожёвывает Анза.', ar:['أين التمر؟ هنا... أو هناك؟'], en:'Ajibus hides a date under one of two bowls, shuffles them, asks the camera which one and waits — then lifts a bowl to find it empty, while at the bottom of the frame the goat finishes chewing', cam:'close-up on the bowls from above, then tilt down to the goat', snd:'ceramic scraping, silence in the pause, quiet chewing'},
        {n:10, loc:'shop', ru:'Рекап: айна? (ладонь козырьком) · хуна (палец вниз) · хунак (палец вдаль).', ar:['أين؟','هنا','هناك'], en:'Recap flashes: hand shading the eyes for where, finger pointing down for here, finger pointing far away for there', cam:'medium close-ups, hard cuts, static', snd:'isolated words, silence between'},
        {n:11, loc:'alley', ru:'Прощание. Ключ теперь на шнурке на шее, он его демонстративно похлопывает.', ar:['مع السلامة'], en:'Farewell at the door: the key now hangs on a cord around his neck and he pats it twice, pointedly, for the camera', cam:'medium two-shot, then insert on the key', snd:'warm farewell, key tap'},
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
        {n:2, loc:'market', ru:'Юнус: «Ма хаза?» про яблоки и бананы. Зритель угадывает ответ по паттерну раньше продавца.', ar:['ما هذا؟','هذا تفّاح','هذا موز'], en:'Yunus asks what things are, pointing at apples then bananas; the vendor answers flatly each time', cam:'close-ups on the produce, medium on Yunus', snd:'clear question-answer pairs'},
        {n:3, loc:'market', ru:'Аджибус — театр торговли: «Бикам?.. ГАЛИ!!» Хватается за сердце, чалма съезжает.', ar:['بكم؟','غالي!'], en:'Ajibus asks the price, hears it, clutches his heart and cries that it is expensive; his turban slides sideways', cam:'medium shot, static, let the performance play', snd:'market noise, theatrical outcry'},
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
    'Character lock вставлять целиком, без изменений.',
    'При неудаче менять одну переменную за раз.',
    'Финал шота — на паузе, а не в движении: тогда Extend продлевает гладко.'
  ],
  mistakes:[
    ['«oversized turban»','пышный шарообразный тюрбан, читается как сикхский дастар. Правильно: modest white Islamic imamah turban, smooth cloth wound in flat neat horizontal layers around a low white skullcap, sitting low on the forehead.'],
    ['«emerald-green vest» без уточнения','травяной салатовый. Правильно: deep jewel-emerald.'],
    ['Очки просто pushed up onto his forehead','почти не видны. Добавлять clearly visible.']
  ],
  tail:'speaks slow, clear Modern Standard Arabic, with a pause after the key phrase. no subtitles, no text, no captions, no on-screen writing.'
};
