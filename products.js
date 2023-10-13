const products = [
    {
        id: 1,
    name: "The Psychology of Money",
    author: "Morgan Housel",
    image: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
   // details: "Timeless lessons on wealth, greed, and happiness doing well with money isn?t necessarily about what you know. It?s about how you behave. And behavior is hard to teach, even to really smart people. How to manage money, invest it, and make business decisions are typically considered to involve a lot of mathematical calculations, where data and formulae tell us exactly what to do. But in the real world, people don?t make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters."
    price:350
  },
  {
    id: 2,
    name: "Energize Your Mind",
    author: "Gaur Gopal Das",
    price:550,
    image: "https://m.media-amazon.com/images/I/41RwQlo446L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
   // details: "In this book, bestselling author and life coach Gaur Gopal Das decodes how the mind works. He combines his anecdotal style with analytical research to teach us how to discipline our mind for our greater well-being. Throughout this book, he provides interactive exercises, meditation techniques and worksheets to help us take charge of our mind."
  },
  {
    id: 3,

    name: "Ikigai",
    author: " Francesc Miralles ",
    price:470,
    image: "https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY327_FMwebp_QL65_.jpg",
   // details: "I'm spellbound.' Chris Evans'A refreshingly simple recipe for happiness.' Stylist'Ikigai gently unlocks simple secrets we can all use to live long, meaningful, happy lives."
  },
  {
    id: 4,
    name: "Dopamine Detox",
    author: "thibaut meurisse",
    price:560,
    image: "https://m.media-amazon.com/images/I/71Q0U-8lxJS._AC_UY327_FMwebp_QL65_.jpg",
   // details: "Dopamine Detox will help you lower your level of stimulation and regain focus in 48 hours or less,so that you can tackle your key tasks."
  },
  {
    id: 5,
    name: "The Complete Novels of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    price:850,
    image: "https://m.media-amazon.com/images/I/81NAo81PtRL._AC_UY327_FMwebp_QL65_.jpg",
   // details: "the scarlet thread of murder running through the colourless skein of life and our duty is to unravel it and isolate it and expose every inch of it.?Sherlock Holmes Consulting Detective 221B Baker Street London.This is where begins a historical partnership between Dr. Watson?the archetypal gentleman from the Victorian era?and the eccentric, legendary sleuth, Sherlock Holmes. Join them as they gather clues, ranging from bloodstains and footprints to cigarette ash and wedding rings and arrive at unusual and surprising conclusions. This book is a collection of the four novels written by Sir Arthur Conan Doyle: A Study in Scarlet (1887), The Sign of the Four (1890), The Hound of the Baskervilles (1902) and The Valley of Fear (1915). Featuring the timeless detective Sherlock Holmes, these novels have been successfully engrossing readers for more than a century now."
  },
  {
    id: 6,
    name: "The Richest Man In Babylon",
    author: "George S. Clason ",
    price:740,
    image: "https://m.media-amazon.com/images/I/81NYuWzsJcS._AC_UY327_FMwebp_QL65_.jpg",
   // details: "If you have a lean purse and are looking for financial wisdom, you?ve picked the perfect book!?A PART OF ALL YOU EARN IS YOURS TO KEEP.?From the importance of savings to the essentials on how to become wealthy, this collection of famous Babylonian parables imparts timeless financial wisdom. It offers insights on how to become wealthy and how to attract good luck and discusses the five laws of gold.A perfect guide to understanding finances and a powerhouse of time-tested principles to gain and retain personal wealth, The Richest Man in Babylon has been inspiring readers for generations. It continues to remain a classic bestseller."
  },
  {
    id: 7,
    name: "Think and Grow Rich",
    author: "Napoleon Hill ",
    price:680,
    image: "https://m.media-amazon.com/images/I/711xMzVPIuL._AC_UY327_QL65_.jpg",
   // details: "Both poverty and riches are the offspring of thought.? since its first publication in 1937, think and Grow Rich has been considered the best self-help book in the world. A Bible for people seeking riches and prosperity, this book draws on the life stories of the wealthiest and most successful people of all time. Through this book Napoleon Hill will teach you what to do, and how to do it, to achieve lasting and unprecedented success. In this updated edition, the editors Bill and Ann Hartley have provided commentaries on many passages of the original text and examples of many more successful people, some of whom were inventors, senators, leaders of business and strategy, and even presidents of countries. Change your life as you learn to be ?the master of your fate and the Captain of your soul? through this powerful book."
  },
  {
    id: 8,
    name: "Atomic Habits",
    author: "James Clear ",
    price:770,
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_QL65_.jpg",
   // details: "People think that when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions: doing two push-ups a day, waking up five minutes early, or holding a single short phone call."
  },
  {
    id: 9,
    name: "You Can",
    author: " George Matthew Adams ",
    price:870,
    image: "https://m.media-amazon.com/images/I/813uPMOnskL._AC_UY327_QL65_.jpg",
   // details: "Do you often wonder whether you really have it in you to accomplish your goals, to win over obstacles, and to succeed in life? Through the empowering self-help manual you can, penned to promote personal growth and well-being for anyone who reads it, George Matthew Adams talks about things to be done to pave your way to a fulfilling, successful life—such as sitting for an hour in silence to shape your creative vision, going the extra mile in serving others, letting your character rule your work, studying your mistakes, learning to use time, and many more. Inculcate these habits, and your life will change. A powerful guide that asserts that you can do anything you set your mind to, you can is filled with quotes imparting wisdom of a man whose teachings have inspired millions—napoleon Hill, and commentary by the executive director of the Napoleon Hill foundation, don M. Green. “You yourself determine the height to which you shall climb. Have you the summit in view?”."
  },
  {
    id: 10,
    name: "The 5 AM Club",
    author: "Robin Sharma",
    price:590,
    image: "data:image/png;base64,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",
   // details: "Part manifesto for mastery, part playbook for genius-grade productivity and part companion for a life lived beautifully, the 5 am club is a work that will transform your life. Forever.Legendary leadership and elite performance expert Robin Sharma introduced The 5 AM Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity.Now, in this life-changing book, handcrafted by the author over a rigorous four year period, you will discover the early-rising habit that has helped so many accomplish epic results while upgrading their happiness, helpfulness and feelings of aliveness.Through an enchanting?and often amusing?story about two struggling strangers who meet an eccentric tycoon who becomes their secret mentor, The 5 AM Club will walk you through:? How great geniuses, business titans and the world?s wisest people start their mornings to produce astonishing achievements? A little-known formula you can use instantly to wake up early feeling inspired, focused and flooded with a fiery drive to get the most out of each day ? A step-by-step method to protect the quietest hours of daybreak so you have time for exercise, self-renewal and personal growth? A neuroscience-based practice proven to help make it easy to rise while most people are sleeping, giving you precious time for yourself to think, express your creativity and begin the day peacefully instead of being rushed? ?Insider-only? tactics to defend your gifts, talents and dreams against digital distraction and trivial diversions so you enjoy fortune, influence and a magnificent impact on the world"
  },
  {
    id: 11,
    name: "The Lord of the Rings",
    author: "J. R. R. Tolkien ",
    price:620,
    image: "https://m.media-amazon.com/images/I/81YyraOaX1L._AC_UY327_FMwebp_QL65_.jpg",
   // details: "For the first time ever, a very special edition of the classic masterpiece, illustrated throughout in colour by the author himself and with the complete text printed in two colours.Since it was first published in 1954, The Lord of the Rings has been a book people have treasured. Steeped in unrivalled magic and otherworldliness, its sweeping fantasy and epic adventure has touched the hearts of young and old alike. Over 150 million copies of its many editions have been sold around the world, and occasional collectors’ editions become prized and valuable items of publishing.This one-volume hardback edition contains the complete text, fully corrected and reset, which is printed in red and black and features, for the very first time, thirty colour illustrations, maps and sketches drawn by Tolkien himself as he composed this epic work. These include the pages from the Book of Mazarbul, marvellous facsimiles created by Tolkien to accompany the famous ‘Bridge of Khazad-dum’ chapter. Also appearing are two removable fold-out maps drawn by Christopher Tolkien revealing all the detail of Middle-earth.Sympathetically packaged to reflect the classic look of the first edition, this new edition of the bestselling hardback will prove irresistible to collectors and new fans alike."
  },
  {
    id: 12,
    name: "Harry Potter ",
    author: "J.K. Rowling ",
    price:630,
    image: "https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UY327_FMwebp_QL65_.jpg",
   // details: "Escape to Hogwarts with the unmissable series that has sparked a lifelong reading journey for children and families all over the world. The magic starts here.Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. The magic starts here!These editions of the classic and internationally bestselling Harry Potter series feature thrilling jacket artwork by award-winning illustrator Jonny Duddle. They are the perfect starting point for anyone who's ready to lose themselves in the greatest children's story of all time."
  },
  {
    id: 13,
    name: "The Magical Stone",
    author: "Anikait Balan",
    price:530,
    image: "https://m.media-amazon.com/images/I/61u88BBWlLL._AC_UY327_FMwebp_QL65_.jpg",
   // details: "The Magical Stone is the story of a hero who is selected as the human support to retrieve the stone for the king of his magical world. He takes us to a fantasy adventure where he gets a new friend named Segelle. His quest is to find a magical stone that holds an unbelievable power, which is stolen by Blitch who wants to take control of the kingdom."
  },
  {
    id: 14,
    name: "Hidden",
    author: "Marianne Curley ",
    price:590,
    image: "https://m.media-amazon.com/images/I/81JHhfKNxIL._AC_UY327_FMwebp_QL65_.jpg",
   // details: "Ebony has always known that she is different. Her violet eyes mark her out, and her protective parents have kept her in a gorgeous valley, home-schooled, safe from everything - almost as if she's being hidden. But she's changing: glowing, getting more and more beautiful, and stronger than anyone knows. Ebony can't stay hidden for ever, and when she meets complicated, intense Jordan, something explodes inside her - something that can be seen from the heavens; something that changes everything. Ebony is a stolen angel, concealed on Earth. Now the heavens have found her, they want her back."
  },
  {
    id: 15,
    name: "The Canterville Ghost",
    author: " Oscar Wilde",
    price:810,
    image: "https://m.media-amazon.com/images/I/81FWnA3WF1S._AC_UY327_FMwebp_QL65_.jpg",
   // details: "Despite the repeated warnings of Lord Canterville, the Otis family is moving to Canterville chase—an ancient, sprawling mansion that is believed to be haunted by a ruthless English nobleman who murdered his wife. All this is a bunch of hokum to the Otises, who don’t believe in ghosts. What happens when the family spots reappearing bloodstains and hears chains clanking in the night? They still aren’t petrified! Now, the ghosts pride is hurt. Will he keep on attempting to scare the living daylights out of people that refuse to be frightened? Or will he finally give up?."
  },
  {
    id: 16,
    name: "The Girl Who Drank the Moon",
    author: "Kelly Barnhill ",
    price:780,
    image: "https://m.media-amazon.com/images/I/51CmZgnxeXL._AC_UY327_FMwebp_QL65_.jpg",
   // details: "THE NO 1 NEW YORK TIMES BESTSELLER AND NEWBERY MEDAL WINNER 'This beautifully written, darkly funny coming-of-age story will enchant and entertain' Daily Mail Every year, the people of the Protectorate leave a baby as an offering to the witch who lives in the forest. They hope this sacrifice will keep her from terrorizing their town. But the witch in the Forest, Xan, is in fact a good witch who shares her home with a wise Swamp Monster and a Perfectly Tiny Dragon. Xan rescues the children and delivers them to welcoming families on the other side of the forest, nourishing the babies with starlight on the journey. One year, Xan accidentally feeds a baby moonlight instead of starlight, filling the ordinary child with extraordinary magic. Xan decides she must raise this girl, whom she calls Luna, as her own. As Luna's thirteenth birthday approaches, her magic begins to emerge - with dangerous consequences. Meanwhile, a young man from the Protectorate is determined to free his people by killing the witch. Deadly birds with uncertain intentions flock nearby. A volcano, quiet for centuries, rumbles just beneath the earth's surface. And the woman with the Tiger's heart is on the prowl . . . The Newbery Medal winner from the author of the highly acclaimed novel The Witch's Boy."
  },
  {
    id: 17,
    name: "Being an Indian Teenager",
    author: "Muskan Jha ",
    price:490,
    image: "https://m.media-amazon.com/images/I/71ZF7dsxehL._AC_UY327_FMwebp_QL65_.jpg",
   // details: "In today's world being a teenager is not really easy. There are different challenges that we have to face, decisions to make and roads to take. The people and the environment around us greatly affect the way we think and act as teenagers. Being a teenager can be hard but at the same time, it is fun. We daily face new experiences. At this point in our lives, we feel like we are neither children anymore nor really grown-ups too. Teenage as we all know is one of the most important and memorable period of a person's life. This is the period during which we face and feel a lot of things ranging from our changing physical appearance, increasing body weight, parents constantly comparing us to our friends and relatives, peer pressure, anxiety, depression, suicidal thoughts and much more for the first time. 'Being an Indian Teenager' is an anthology containing stories, poems and articles from some established and some new writers. They have tried their best to portray every feeling and emotion that they have faced as Indian teenagers."
  },
  {
    id: 18,
    name: "The Secret Key: Agatha Oddly",
    author: "Lena Jones ",
    price:760,
    image: "https://m.media-amazon.com/images/I/61GI37O23OL._AC_UY327_FMwebp_QL65_.jpg",
   // details: "Meet thirteen-year-old Agatha Oddly – a bold, determined heroine and the star of a stylish new detective series.Agatha Oddlow has been a detective for as long as she can remember – she’s just been waiting for her first big case. And nothing gets bigger than saving the City of London from some strange goings-on.With a scholarship to the prestigious St Regis School, a cottage in the middle of Hyde Park, a room full of beloved sleuthing novels and a secret key that gives her access to a whole hidden side of London, Agatha is perfectly poised to solve the mystery of what’s going on. But just who can she trust when no one is quite who they seem…"
  },
  {
    id: 19,
    name: "The Time Machine",
    author: "H. G. Wells ",
    price:700,
    image: "https://m.media-amazon.com/images/I/71+n2VSAiXS._AC_UY327_FMwebp_QL65_.jpg",
   // details: "A compelling science fiction, the Time Machine is a first-hand account of a Time Traveler's journey into the future. a pull of the lever and the machine sends him to the year 802,701, when humanity has split into two bizarre races?the ethereal Eloi and the subterranean Morlocks. Here, his machine is stolen and with the help of Weena, an Eloi he saved from drowning, the traveler is able to retrieve it. Whizzing thirty million years further into the future, he finds a slowly dying earth, where the bloated red sun sits motionless in the sky and the only sign of life is a black blob with tentacles.He returns to the Victorian time, overwhelmed, just three hours after he originally left..Credited with inventing the time machine in this masterpiece, the provocative insight of H. G. Wells continues to enthrall the readers. the Time Machine has since been adapted into many feature films and television series and has inspired many more works of fiction."
  },
  {
    id: 20,
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    price:670,
    image: "https://rukminim1.flixcart.com/image/312/312/l1mh7rk0/book/y/8/6/the-hobbit-original-imagd5phsmwyvbek.jpeg?q=70",
   // details: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely travelling further than the pantry of his hobbit-hole in Bag End. But his contentment is disturbed when the wizard, Gandalf and a company of thirteen dwarves arrive on his doorstep one day to whisk him away on an unexpected journey there and back again'. They have a plot to raid the treasure hoard of Smaug the Magnificent, a large and very dangerous dragon. The prelude to The Lord of the Rings, The Hobbit has sold many millions of copies since its publication in 1937, establishing itself as one of the most beloved and influential books of the twentieth century.",

  },
  {
    id: 21,
    name: "Back Blast (Gray Man)",
    author: "Mark Greaney ",
    price:850,
    image: "https://m.media-amazon.com/images/I/815PK100P0L._AC_UY327_FMwebp_QL65_.jpg",
   // details: "Court Gentry was the CIA's best agent - until the day the Agency turned against him and put out a kill-on-sight order. That's when the enigmatic international assassin called the Gray Man was born, and Court has been working for himself ever since.  Court is determined to find out what happened all those years ago to make the Agency turn against him. On his list to interrogate are his former partners and the men who sent him on his last mission. What he doesn't realize is that the questions that arose from that mission are still reverberating in the US intelligence community, and he's stumbled onto a secret that powerful people want kept under wraps. And now they have him in their crosshairs.  Court is used to having people on his trail, but this time, it's on US soil - the last place he wants to be. He'll have to find the answers to his fate while evading capture . . . and avoiding death.",
 
    },
];


module.exports = products;