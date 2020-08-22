let animeData = [
  {
      title: "Death Note",
      genre: "Mystery",
      media: "TV",
      price: "20",
      rating: "9.7",
      link:"https://i.ibb.co/4N94cD6/deathnote.jpg",
      description: "The Shinigami is a god of death able to kill any person aslong as he is able to see the victim’s face and write their name down in the Death Note notebook.\nRyuk, who is bored by living the god of death lifestyle, leaves one of these notebooks in human reals to see how humans use it."
  },
  {
      title: "Attack on Titan",
      genre: "Action",
      media: "TV",
      price: "43",
      rating: "9.5",
      link:"https://i.ibb.co/QQCz9Yq/attackontitan.jpg",
      description: "The series is about a young man called Eren Jaeger who vowsto destroy all the giant humanoid Titans on earth after they destroy his hometown and kill his mother.\nThe imagery, the incredible storyline, and the atmosphere of this TV series is what makes it so unique and why it is loved by most anime fans."
  },
  {
      title: "Full Metal Alchemist Brotherhood",
      genre: "Action",
      media: "Manga",
      price: "60",
      rating: "9.8",
      link:"https://i.ibb.co/8dG3m8p/fullmetalalchemist.jpg",
      description: "Edward and Alphonse who go on a quest for improving theiralchemic training to resurrect their dead mother and also to restore their physical bodies to their full and healthy form. Edward loses a leg and sacrifices his arm to preserve the soul of his brother during an alchemic experiment for resurrection goes wrong. Alphonse is turned into body armor, and Edward wears his brothers’ soul on him as he travels to the capital along with his other brothers to become a Fullmetal Alchemist at the State Military'"
  },
  {
      title: "Naruto - Shippuden",
      genre: "Action",
      media: "Manga",
      price: "150",
      rating: "9.9",
      link:"https://i.ibb.co/N7JSzNn/naruto.jpg",
      description: "Naruto Shippuden explores the life and adventures of NarutoUzumaki, who is a young, hyperactive, and loud ninja looking to become the strongest ninja in the village (Hokage).\nThe series starts more than two years after Naruto left Konohagakure to go through intense training. The Akatsu, which is the organization of the elite ninjas, is planning on overtaking the shinobi world'"
  },
  {
      title: "Dragon Ball Z",
      genre: "Action",
      media: "TV",
      price: "25",
      rating: "8.4",
      link:"https://i.ibb.co/Kr1RX6q/dragon-ball-z.jpg",
      description: "The story starts with Gokuu, who is living peacefully withhis wife and son five years after winning the martial arts tournament. The arrival of Raditz, who claims that he is Gokuu’s long-lost brother, changes all of this.He tells Goku that he is a warrior from a now-extinct race from another planet. Gokuu was sent to earth as a baby in order to conquer and destroy our planet, but after suffering from a head injury lost his memory and became a good-natured person fighting to protect the weak.\nAfter this revelation, Gokuu and his friends are faced with numerous attacks from extraterrestrial enemies'"
  },
  {
      title: "Fairytail",
      genre: "Adventure",
      media: "Manga",
      price: "44",
      rating: "8.8",
      link:"https://i.ibb.co/0Bq0KCy/fairytail.jpg",
      description: "Lucy Heartfilia has a dream of becoming a powerful full-fledged wizard, which is why she is searching for celestial keys. During her pursuit, she meets Natsu Dragneel and Happy, who are looking for the dragon Igneel – Natsu’s foster father.\nNatsu is a wizard and a member of Fairy Tale and saves Lucy during an attempt for abduction. He offers her to join them.\nSomewhere along the way, the group meets magic swordsman Erza Scarlet and the ice wizard Gray Fullbuster who join them on their quest'"
  },
  {
      title: "Sword Art Online",
      genre: "Adventure",
      media: "TV",
      price: "56",
      rating: "8.1",
      link:"https://i.ibb.co/pfhkd47/swordartonline.jpg",
      description: "The plot involves several gamers who, in 2022, are part ofthe worldwide gamers for the launch of Sword Art Online MMORPG game, which connects players into a virtual reality world with the help of special Nerve Gear helmets.\nKirito is one of these eager gamers who is one of the first to log into the game and quickly becomes close friends with Klein, who is a newbie warrior.\nThe gamers use their thought s to control their avatars in the virtual world of Ainca, where they get access to various medieval weapons and meet gruesome monsters and fight bosses'"
  },
  {
      title: "One Piece",
      genre: "Mystery",
      media: "Manga",
      price: "44",
      rating: "9.3",
      link:"https://i.ibb.co/7Y62YXN/one-piece.jpg",
      description: "Luffy is a good-natured and adventurous pirate in search ofthe great mystical treasure called “One Piece.” He is part of the Grand Age of Pirates, who are all pursuing the dream of becoming the first to find the treasure and be proclaimed the title of “Pirate King.”\nThe series follows the adventures of Monkey D.Luffy, who is just 17 years old but overcomes numerous amazing adventures, unveils dark mysteries and battles various enemies on his way to the coveted prize and title"
  },
  {
      title: "Bleach",
      genre: "Mystery",
      media: "Manga",
      price: "44",
      rating: "9.6",
      link:"https://i.ibb.co/qBSc3Pk/bleach.jpg",
      description: "The story revolves around a high school student calledKurosaki Ichigo, who can see ghosts. He receives this special power after an accident in the hollow of a tree. During the incident, when he and his family gets attacked by the Hollow, a Soul Reaper named Rukia Kuchiki rushes to save Ichigo and his family and gets injured while protecting them.\nIchigo promises to take Rukia’s powers in order to save his family, and as a result, the young boy begins training to be a Soul Reaper (Shinigami.\nIchigo then proceeds to hunt down all hollows which attack the people'"
  },
  {
      title: "Code Geass",
      genre: "Mystery",
      media: "Manga",
      price: "75",
      rating: "8.6",
      link:"https://i.ibb.co/f2t7gYR/codegeass.jpg",
      description: "Lelouch Lamperouge, the protagonist, was once born a princeof the Britannian Empire but gave up his right to the throne after the brutal murder of his mother, and then vowed to destroy his father – the emperor.\nAfter being caught in the crossfire between the two armies, he is saved by a mysterious girl called C.C., and he embarks on an adventurous journey as a masked vigilante called Zero to fight the Britannian Empire with all means possible.'"
  },
  {
      title: "Hunter X Hunter",
      genre: "Action",
      media: "TV",
      price: "59",
      rating: "8.9",
      link:"https://i.ibb.co/2nyPK2J/hunterxhunter.jpg",
      description: "A youngster named Gon Freecss, who finds out that hisfather, who was presumed dead, is actually alive and is a legendary Hunter named Ging.  Gon becomes determined to follow his footsteps and join the elite title known as “Hunter”. \nThe story follows Gon as he prepares to take the examination and on his adventures as he goes on a quest to find his long-lost father. Along the way, young Gon manages to find lost treasures, capture enemies, make friends, and discover uncharted territories'"
  },
  {
      title: "Tokyo Ghouls",
      genre: "Mystery",
      media: "TV",
      price: "99",
      rating: "9.1",
      link:"https://i.ibb.co/2SPMf5Q/tokyoghouls.jpg",
      description: "A serious college student Ken Kaneki befriends another avidreader called Rize Kamishiro and as a result, gets pulled into the dark depths of the inhuman world of the ghouls. The ghouls are scary creatures that eat human flesh. During an attack on him by the ghouls, Kaneki is almost killed. He manages to survive, but he turns into half a human and half a ghoul. This causes him to change and adapt to this new lifestyle so that he is integrated into both societies'"
  },
  {
      title: "Cowboy Bebop",
      genre: "Adventure",
      media: "TV",
      price: "28",
      rating: "8.1",
      link:"https://i.ibb.co/qJfprv7/cowboybebop.jpg",
      description: "The series is set in 2072 when humans have colonized anumber of different planets and moons in the solar system and have left the Earth uninhabitable. The authority in charge of keeping the peace in the galaxy is called the Inter Solar System Police. The policemen are aided by desperado bounty hunters referred to as “Cowboys”. The team in the Bebop spaceship is part of these Cowboys'"
  },
  {
      title: "Stein's Gate",
      genre: "Mystery",
      media: "TV",
      price: "28",
      rating: "9.1",
      link:"https://i.ibb.co/Tv05ZkK/steinsgate.jpg",
      description: "A thriller and sci-fi anime about Rintaro Okabe, a madscientist who along with his friends Mauyuri Shiina and Hashida Itaru (Daru) invent a time travel Phone Microwave by accident, which allows them to send text messages and email messages to the past which eventually change the course of history and the present.\nIt is based on the hugely successful Visual novel by 5pb and Nitroplus, the Steins;Gate anime is still considered one of the best sci-fi series in the genre by anime fans around the world'"
  },
  {
      title: "Blue Exorcist",
      genre: "Action",
      media: "Manga",
      price: "28",
      rating: "9.4",
      link:"https://i.ibb.co/NNy613C/blueexorcist.jpg",
      description: "The story is about a teenager named Rin Okimura who findsout that he and his twin brother Yukio are both Satan’s children born by a human woman. As a result, Rin realizes that he has inherited Satan’s powers. The story follows Rin’s quest to become an exorcist with the guidance of his brother in order to defeat and destroy their father who kills the boys’ foster father – a priest and exorcist, and who wants to conquer their world of Assiah."
  },
  {
      title: "The Seven Deadly Sins",
      genre: "Adventure",
      media: "TV",
      price: "99",
      rating: "9.7",
      link:"https://i.ibb.co/41ZNCx3/sevendeadlysins.jpg",
      description: "It is about seven knights who represent the seven deadlysins. The group of knights originally plotted an overthrow of the Liones Kingdom but failed because of the Holy Knights and disbanded.\nBut after 10 years, the Holy Knights manages to capture the king and proceed to become tyrannical rulers. As a result, Princess Elizabeth starts her journey to Seven Deadly Sins in an attempt to win back the lost kingdom and to find the long-lost justice in the world'"
  },
  {
      title: "Soul Eater",
      genre: "Adventure",
      media: "TV",
      price: "99",
      rating: "9.7",
      link:"https://i.ibb.co/jrvtgYM/souleater.jpg",
      description: "A group of students attend a school for weapons and masters– Shibusen in Death City a fictional city in Nevada. The students are on a quest to collect souls in order to protect the city.\nThe Soul eaters can transform into weapons only after they have consumed 99 evil souls and 1 of a witch.\nMaka is partnered by Soul who turns into a scythe, Death the Kid has a couple of partners called Patty and Liz who turn into pistols, and Black Star is accompanied by his partner Tsubaki who can transform himself in a wide variety of weapons.\nTogether the students proceed to fight various witches and demons who want to destroy Shibusen and to overtake the world'"
  },
  {
      title: "Akame Ga Kill",
      genre: "Mystery",
      media: "Manga",
      price: "99",
      rating: "8.8",
      link:"https://i.ibb.co/zmtthYm/akamegakill.jpg",
      description: "The plot revolves around a young boy called Tatsumi whocomes from the countryside, and who sets off to go to the Capital along with two friends – Sayo and Leyasu. The journey involves numerous adventures with the Night Raid group of dangerous assassins who recruit the young boy to help them fight the corruption of the Empire. All members of the Night Raid are specialized in different types of fighting and killing. They are all armed with Teigu, which are Imperial arms made from extremely rare materials. They also are accompanied by Danger Beasts'"
  },
  {
      title: "No Game No Life",
      genre: "Adventure",
      media: "Manga",
      price: "65",
      rating: "8.8",
      link:"https://i.ibb.co/W6ZYcS7/nogamenolife.jpg",
      description: "The plot revolves around a young boy called Tatsumi whocomes from the countryside, and who sets off to go to the Capital along with two friends – Sayo and Leyasu. The journey involves numerous adventures with the Night Raid group of dangerous assassins who recruit the young boy to help them fight the corruption of the Empire. All members of the Night Raid are specialized in different types of fighting and killing. They are all armed with Teigu, which are Imperial arms made from extremely rare materials. They also are accompanied by Danger Beasts'"
  },
  {
      title: "Pokemon",
      genre: "Adventure",
      media: "TV",
      price: "65",
      rating: "9.8",
      link:"https://i.ibb.co/WttZP4Q/pokemon.jpg",
      description: "The Pokemons are fun creatures each with its own talents,abilities, and appearance. Satoshi has always dreamt of training his own Pokemon and become a master, but when he finally gets an opportunity to get a Pokemon, only Pikachu who is a rebellious Pokemon is left. The rest, of course, is history – as the adventures of the two develop and unwrap'"
  },
  {
      title: "Samurai Champloo",
      genre: "Adventure",
      media: "TV",
      price: "65",
      rating: "9.0",
      link:"https://i.ibb.co/PWgMm0s/samuraichamplo.jpg",
      description: "A clumsy teahouse waitress called Fuu Kasumi, spills drinkon a customer, Fuu is harassed by a group of samurai, which causes her to seek the help of Mugen, a samurai who defeats the attackers with some wild fighting techniques. He proceeds to attack another Ronin named Jin, who though proves to be a tough opponent as he is a better swordfighter than Mugen. During the battle, they accidentally kill the son of a local magistrate for which they are captured and sentenced to be executed.\nFuu proceeds to rescue them and hires them as her personal bodyguards. They join her in the quest of finding a special samurai who smells like sunflowers. The series follows the three characters on their quest, and it is quite a ride, given the fact that the two bodyguards are constantly trying to kill one another'"
  },
  {
      title: "InuYasha",
      genre: "Mystery",
      media: "TV",
      price: "65",
      rating: "9.0",
      link:"https://i.ibb.co/Z14HDxk/inuyasha.jpg",
      description: "A teenage girl Kagome Higurashi gets dragged in a cursedwell near her family Shinto shrine by a demon on her 15th birthday. This is when her normal life ends and she ends up living back in time during the Sengoku period in Japan 500 years ago.\nIn her, she carries a magical jewel that grants wishes known as the Shikon jewel. It is this special reborn jewel which the demon is really after.\nDuring a battle with the demon, the special jewel accidentally breaks, and Kagome seeks the help of the dog-demon and human hybrid named Inuyasha to retrieve all of the shards from the precious stone and thus prevent the demon from laying its hands on one'"
  },
  {
      title: "Parasyte",
      genre: "Mystery",
      media: "Manga",
      price: "85",
      rating: "8.0",
      link:"https://i.ibb.co/b2N0Ynd/parasyte.jpg",
      description: "A boy named Shinichi Izumi gets infected by a parasite thathas attacked human beings and destroyed them by butchering and consuming them. But the 17-year-old boy gets saved by his earphones, and the parasite enters his body via his right hand. Over time, Shinichi and the monster who is named Migi learn how to co-exist together in order to both survive. So, now he is half a boy half a monster on a quest for survival'"
  },
  {
      title: "Assasination Classroom",
      genre: "Action",
      media: "Manga",
      price: "85",
      rating: "8.8",
      link:"https://i.ibb.co/LgTLKns/assasinationclassroom.png",
      description: "The story revolves around class 3-E of students ofKunugigaoka Middle School who are all misfits and get assigned a new homeroom teacher who they soon name Koro-Sensei (unkillable teacher). The problem with the new teacher is that he is a strange creature with tentacles who turns out to be on the most wanted list by the government because he has destroyed nearly two-thirds of the moon leaving it permanently crescent-shaped.  The strange creature teaches the students, regular classes, along with a class about the ways of assassination"
  },
  {
      title: "Noragami",
      genre: "Adventure",
      media: "TV",
      price: "85",
      rating: "7.8",
      link:"https://i.ibb.co/Dfv97PH/noragami.jpg",
      description: "The story is about minor god Yato who by accident runs intomiddle school student Hiyoki Iki, and their meeting changes both of their fates.\nHiyoki Ili is an ordinary schoolgirl who one day gets involved in a bus accident as she jumps in to protect a complete stranger. The stranger turns out to be Yato, who’s only goal and dream is to have millions of worshipers and is ready to do any kind of odd job for 5 yen.\nAfter the accident, the soul of the young girl begins to flip out of her body and goes into a parallel world called the Near Shore where there are all kinds of people and creatures as well as to the Far Shore where the human souls and demons linger'"
  },
  {
      title: "Yu Yu Kakusho",
      genre: "Mystery",
      media: "TV",
      price: "85",
      rating: "8.1",
      link:"https://i.ibb.co/Qd1mW56/yuyuyakuso.jpg",
      description: "A 14-year-old delinquent boy named Yuusuke Urameshi one daydecides to do the right thing, and do something completely altruistic, jumps in front of a moving car to save the life of a young boy.\nBecause of this turn of events in his attitude and the ultimate sacrifice he was ready to make, the spirit realm authorities headed by Koenma, who is the heir to the throne decide to give Yuusuke a chance to regain his real physical life back by completing a number of tasks given to him.\nWith the help of Botna the death god, the boy is sent back as a Spirit Underworld Detective to fight the evil presences'"
  }
]

export default animeData