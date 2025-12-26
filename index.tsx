// Quiz Data for multiple years
// Extracted from National Language Arts League PDFs (Grade 2)

const quizzes = {
  "2017": [
      {
          title: "Part I: Vocabulary",
          instruction: "Read each sentence. Decide which word means the same or nearly the same as the word that is underlined in the sentence.",
          questions: [
              { id: 1, text: "Our swim coach wants me to <u>demonstrate</u> the freestyle stroke to the rest of the team at practice today.", options: {A: "learn", B: "show", C: "change", D: "improve"}, ans: "B" },
              { id: 2, text: "My mother thinks we can <u>release</u> the injured bird as soon as it is able to find food on its own.", options: {A: "help", B: "hold", C: "free", D: "detain"}, ans: "C" },
              { id: 3, text: "The magician was very <u>clever</u> when he made the rabbit seem to appear out of nowhere.", options: {A: "smart", B: "sneaky", C: "silly", D: "shy"}, ans: "A" },
              { id: 4, text: "One way to <u>prevent</u> the spread of germs is to wash your hands frequently throughout the day.", options: {A: "support", B: "advance", C: "watch", D: "stop"}, ans: "D" }
          ]
      },
      {
          title: "Part II: Word Relationships",
          instruction: "Read the words in each group. Three of the words belong together. One word <u>does not belong</u>.",
          questions: [
              { id: 5, text: "Which word does not belong?", options: {A: "necklace", B: "bracelet", C: "perfume", D: "ring"}, ans: "C" },
              { id: 6, text: "Which word does not belong?", options: {A: "volcano", B: "tornado", C: "blizzard", D: "hurricane"}, ans: "A" },
              { id: 7, text: "Which word does not belong?", options: {A: "moon", B: "cloud", C: "star", D: "sun"}, ans: "B" },
              { id: 8, text: "Which word does not belong?", options: {A: "beetle", B: "mosquito", C: "wasp", D: "worm"}, ans: "D" }
          ]
      },
      {
          title: "Part III: Reading Comprehension",
          instruction: "Read the paragraph about Hummingbirds. Answer questions 9-11.",
          passage: {
              title: "Hummingbirds",
              type: "text",
              content: `One of the most amazing birds to watch is also the smallest bird in the world – the hummingbird. Hummingbirds are about two inches long and weigh less than a penny. Their tiny nests, made of plants, spiderwebs, and moss, are the size of a walnut shell. A hummingbird's eggs are less than half an inch long. Male and female hummingbirds have separate territories, and the male does not help in building the nest or taking care of the babies. The female does all the work and feeds and cares for the babies when they are born. Hummingbirds groom themselves, using their front claws as a comb. They bathe in shallow water and love to take showers sitting in the rain or playing in the mist of a lawn sprinkler.<br><br>Hummingbirds are expert fliers and are on the move all day long, feeding every ten minutes and eating two-thirds of their body weight in one day. They are tiny but strong and can hover in front of a flower, reaching down inside to lick the nectar as much as thirteen times in one second. Hummingbirds have a fast breath rate and heartbeat and use a lot of energy each day. To get the protein they need, hummingbirds eat tiny insects as they fly by. A hummingbird will dive down into a swarm of insects over and over again, using its long, pointy beak to capture them. It has a great memory and knows where it got food in the past. A hummingbird even builds its nest at the same location, sometimes making a new nest right over the old one.<br><br>The tiny feet of a hummingbird are of little use to it except for perching. When it has to travel even a short distance, it must fly. A hummingbird sometimes looks more like an acrobat than a bird as it flies in every direction – even upside down. It lifts off a perch without pushing off, rising on its own power and flapping its wings up to fifty times a second before lifting off. Hummingbirds compete for nectar and insects and will perch above flowering bushes and bird feeders, puffing themselves up to look larger than they are. In a fight hummingbirds use their bills and claws as weapons, but they usually stop before either bird is harmed. Don't worry though – a hummingbird will never attack a human being. It might, however, frighten you with its rapidly moving wings and needle like beak zooming in close to your face. If it does, don't be scared. It's just the world's smallest bird putting on a show.`
          },
          questions: [
              { id: 9, text: "Hummingbirds get the protein they need from _______________.", options: {A: "eating nectar", B: "getting enough sleep-away", C: "eating insects", D: "getting a lot of exercise"}, ans: "C" },
              { id: 10, text: "This story tells us that a hummingbird sometimes looks like an acrobat when it _______________.", options: {A: "walks for long distances on its tiny feet", B: "fights with other hummingbirds", C: "scares people by zooming by close to themselves", D: "flies around upside down and in all directions"}, ans: "D" },
              { id: 11, text: "You can learn from this story that hummingbirds _______________.", options: {A: "only eat insects", B: "eat two-thirds of their body weight in a day", C: "only eat once a day", D: "get the protein they need only from nectar"}, ans: "B" }
          ]
      },
      {
          title: "Part III: Reading Comprehension (Continued)",
          instruction: "Read the Poem. Answer questions 12-14.",
          passage: {
              title: "The Cloud Poem",
              type: "poem",
              content: `I'd like to ride a cloud one day
    Across the big blue sky.
    And sit myself upon white fluff
    To peer below and spy.
    
    Treetops of green might sometimes block
    My view of things below.
    But then the sun would surely shine
    And give the world a glow.
    
    My cloud could make a shadow
    In a very funny shape.
    The gentle winds might move me
    Right along the earth's landscape.
    
    But what would I do if a storm came by
    And tossed me all around?
    Would it throw me left or move me right
    And drop me to the ground?
    
    No, I'd be safe. I'd have a plan
    To keep me in the air.
    I'd play hopscotch from cloud to cloud
    And wouldn't have a care.
    
    If I got tired I'd just curl up
    And get myself some rest.
    Hanging out upon a cloud
    Would be the very best.
    
    It's something that I tell you
    I would highly recommend.
    But to enjoy it even better
    Don't forget to bring a friend.`
          },
          questions: [
              { id: 12, text: "The person in the poem is probably _______________.", options: {A: "watching someone riding around on a cloud", B: "reading a book about riding around on a cloud", C: "really riding around on a cloud", D: "imagining that he is riding around on a cloud"}, ans: "D" },
              { id: 13, text: "In stanza three the person in the poem says that he might _______________.", options: {A: "curl up and rest", B: "sit on white fluff", C: "be moved by the gentle winds", D: "have a special plan"}, ans: "C" },
              { id: 14, text: "At the end of the poem the person in the poem tells us that we would have even more fun if we could", options: {A: "drop to the ground", B: "bring a friend along", C: "play hopscotch on the clouds", D: "sit in the treetops"}, ans: "B" }
          ]
      },
      {
          title: "Part III: Reading Comprehension (Continued)",
          instruction: "Read the story about Marian Anderson. Answer questions 15-17.",
          passage: {
              title: "Marian Anderson",
              type: "text",
              content: `Marian Anderson began her musical career at the age of six when she joined her church choir. Even though her family was poor, she was a happy child because she was always singing. Music filled her with joy. This special little girl who loved music so much eventually grew up to become the first black person to ever sing a leading part at the Metropolitan Opera. When she was young, Marian wanted to take voice lessons. When she tried to attend a local music school, she was turned away because she was black. This made her very sad, but it didn't stop her from working hard to improve. By the age of fifteen Marian found a teacher who agreed to work with her. The teacher was Mary Saunders Patterson, a famous black singer.<br><br>At the age of twenty-one Marian was invited to sing in a concert at the Philadelphia Academy of Music. Everyone who heard her sing was impressed. The more she sang, the more confident she became. Her dream to become a famous singer was being realized. She was so popular that she would sometimes perform in three different places on the same day. In 1925 Marian performed a solo with the New York Philharmonic Orchestra and two years later went to Europe to perform. She sang in Germany, Denmark, Sweden, Norway, and Russia and became very well known. She returned to the United States in 1935 and performed all across the country. When she sang in the South, where blacks still lived separately, she faced prejudice all the time.<br><br>Marian felt upset at the way black people were sometimes treated. After her performances she would bow to the black people in the audience first to show them that she cared for them and that she was proud to be black. In 1939 Marian was supposed to sing at Constitution Hall but was turned away because she was black. That same year on Easter Sunday she sang at the Lincoln Memorial in Washington, D.C., to over 75,000 people of all races. By the time she retired in 1965, Marian had won countless honors and sung to crowds all over the world. She died in 1993, but will always be remembered as a person who brought people of all races together through music.`
          },
          questions: [
              { id: 15, text: "Marian was happy as a child because _______________.", options: {A: "her family was rich", B: "she attended a local music school", C: "she traveled to Europe", D: "she was always singing"}, ans: "D" },
              { id: 16, text: "In what year did Marian perform at the Lincoln Memorial to over 75,000 people?", options: {A: "1939", B: "1963", C: "1925", D: "1993"}, ans: "A" },
              { id: 17, text: "The best title for this story is _______________.", options: {A: "“Black Americans”", B: "“The Marian Anderson Story”", C: "“Famous Concert Halls”", D: "“Twentieth Century Singers”"}, ans: "B" }
          ]
      },
      {
          title: "Part IV: Spelling",
          instruction: "Read each sentence carefully. Find the one word that is spelled correctly.",
          questions: [
              { id: 18, text: "It's hard to decide which of the four _______________ is my favorite, because they all offer something special.", options: {A: "seasons", B: "seassons", C: "seesons", D: "seissins"}, ans: "A" },
              { id: 19, text: "My cousin Thomas can't sleep over at my house anymore, because the last time he visited we _______________ all night.", options: {A: "faught", B: "fowght", C: "fought", D: "fawght"}, ans: "C" },
              { id: 20, text: "In order to win a gold medal at the Olympics, the gymnast could not afford to make any _______________.", options: {A: "misteaks", B: "mistakes", C: "misstakes", D: "missteakes"}, ans: "B" },
              { id: 21, text: "The new rule in our house is that we can only watch _______________ for 30 minutes on a school day.", options: {A: "tellavisin", B: "telavisson", C: "tellevision", D: "television"}, ans: "D" }
          ]
      },
      {
          title: "Part V: Language Structure",
          instruction: "Read each sentence carefully. Choose the correct word for the underlined space in each sentence.",
          questions: [
              { id: 22, text: "When I woke up this morning, I couldn't remember what I _______________ about last night.", options: {A: "dreams", B: "dream", C: "dreamed", D: "dreaming"}, ans: "C" },
              { id: 23, text: "We usually drive to Florida, but this year my father decided that we will be _______________ there instead.", options: {A: "flew", B: "flies", C: "flown", D: "flying"}, ans: "D" },
              { id: 24, text: "Kylie told her friend that she had already _______________ her for losing the ball that she borrowed.", options: {A: "forgiven", B: "forgives", C: "forgave", D: "forgiving"}, ans: "A" },
              { id: 25, text: "Every time we watch a scary movie, my little sister _______________ so loudly that it is embarrassing.", options: {A: "scream", B: "screams", C: "screaming", D: "screamed"}, ans: "B" }
          ]
      }
  ],
  "2018": [
      {
          title: "Part I: Vocabulary",
          instruction: "Read each sentence. Decide which word means the same or nearly the same as the word that is underlined in the sentence.",
          questions: [
              { id: 1, text: "Because of the <u>abrupt</u> change in the weather, we had to change our plans from swimming in the pool to going to the movies.", options: {A: "new", B: "sudden", C: "unusual", D: "special"}, ans: "B" },
              { id: 2, text: "When we lost our power in the storm, my mother <u>recommended</u> that we play a game instead of watching television.", options: {A: "suggested", B: "insisted", C: "showed", D: "urged"}, ans: "A" },
              { id: 3, text: "If I don't give my plant all the water it <u>requires</u>, it starts to wilt right away.", options: {A: "likes", B: "has", C: "needs", D: "takes"}, ans: "C" },
              { id: 4, text: "We felt bad when we <u>abandoned</u> our friends and went out for recess, but they still had work to finish.", options: {A: "helped", B: "found", C: "brought", D: "left"}, ans: "D" }
          ]
      },
      {
          title: "Part II: Word Relationships",
          instruction: "Read the words in each group. Three of the words belong together. One word <u>does not belong</u>.",
          questions: [
              { id: 5, text: "Which word does not belong?", options: {A: "ocean", B: "boat", C: "lake", D: "river"}, ans: "B" },
              { id: 6, text: "Which word does not belong?", options: {A: "pears", B: "string beans", C: "broccoli", D: "peas"}, ans: "A" },
              { id: 7, text: "Which word does not belong?", options: {A: "scissor", B: "clipper", C: "comb", D: "razor"}, ans: "C" },
              { id: 8, text: "Which word does not belong?", options: {A: "sandal", B: "slipper", C: "boot", D: "belt"}, ans: "D" }
          ]
      },
      {
          title: "Part III: Reading Comprehension",
          instruction: "Read the passage about the Sea Otter.",
          passage: {
              title: "The Sea Otter",
              type: "text",
              content: `The smallest mammal that lives in the sea is the sea otter. It makes its home in the kelp forests along the shores of the Pacific Ocean. Kelp is a very long seaweed that is anchored to the sea floor and rises to the surface of the water. The kelp provides both food for the sea otter and a great place for it to hide from its enemies. Sea otters are excellent swimmers and divers. When a sea otter dives, it tucks its front paws in and kicks its hind feet like swim fins. The sea otter uses its strong tail as a paddle to help it steer in the water. When a sea otter is on the surface of the water, it swims or floats on its back. A sea otter uses its powerful teeth and jaw muscles to open shellfish. When it has to open a hard shell, it puts a rock on its chest and smashes the shellfish to get the food inside.<br><br>A baby sea otter, called a pup, is born with its eyes open. The pup stays with its mother for about one year while she teaches it to swim, hunt for food, and groom itself. Sea otters eat up to 40 percent of their body weight each day, spending about eight hours a day hunting for food. The mother carries her baby on her back or chest for about one year until the pup can swim on its own. When the mother gets food, she wraps the baby up in kelp to keep it from floating away. Her large lungs allow her to dive for up to five minutes to find food. While she is gone, the baby squeals loudly for her to return. If an enemy comes near, the mother tucks the baby under her front legs and dives to the bottom of the ocean.<br><br>The sea otter is an amazing animal and a lot of fun to watch. Because it has two layers of fur to keep clean, a sea otter can always be found grooming itself. One layer of fur keeps it dry, and the other keeps it warm. Although sea otters spend most of their lives in the water, they can also go on dry land. However, when they walk on land, they are so slow and clumsy that they don't stay there for long. Sea otters like to play all the time and are very entertaining. You may find them relaxing with their feet up in the air or kicking their big webbed feet and gliding underwater. If you're really lucky, you may even see them playing tag with each other or doing somersaults.`
          },
          questions: [
              { id: 9, text: "Kelp provides a sea otter with a place to _________________.", options: {A: "play", B: "sleep", C: "hide from its enemies", D: "clean its fur"}, ans: "C" },
              { id: 10, text: "The mother sea otter carries her baby on her back or chest for _________________.", options: {A: "up to five minutes", B: "one year", C: "eight hours a day", D: "one month"}, ans: "B" },
              { id: 11, text: "Sea otters are fun to watch because they _________________.", options: {A: "have powerful teeth", B: "have two layers of fur", C: "eat so much", D: "like to play all the time"}, ans: "D" }
          ]
      },
      {
          title: "Part III: Reading Comprehension (Continued)",
          instruction: "Read the Poem.",
          passage: {
              title: "Underneath the Boardwalk",
              type: "poem",
              content: `Underneath the boardwalk
    At the end of the beach,
    Beyond the sandy hills
    Far out of reach --
    
    There's a special little spot
    Known only to me
    Where every single day
    Is always worry free.
    
    Where the wind only whispers
    And the waves barely touch,
    And no matter what my troubles are
    I don't mind them very much.
    
    For nothing bad comes my way
    When I'm hiding down there.
    Inside my special place
    I never have a care.
    
    A seagull's cry
    Is heard nearby
    And soon we're meeting
    Eye to eye.
    
    Does he just want to visit?
    No, he's a thief in disguise.
    It looks like he wants
    Some of my french fries.
    
    It seems that my secret
    Spot by the shore
    Isn't much of a secret
    ANYMORE!`
          },
          questions: [
              { id: 12, text: "In the first two stanzas the person in the poem is telling us _________________.", options: {A: "why he loves to go to the beach", B: "when he goes to his special place", C: "who stole his french fries", D: "where his special place is"}, ans: "D" },
              { id: 13, text: "One reason the person in the poem likes his special place so much is because _________________.", options: {A: "it's very noisy and exciting there", B: "his friends all go there with him", C: "nothing worries him when he's there", D: "it's right in the middle of the beach"}, ans: "C" },
              { id: 14, text: "At the end of the poem the person in the poem is _________________.", options: {A: "listening to the waves", B: "sure that his secret is out", C: "looking for his special place", D: "walking on the boardwalk"}, ans: "B" }
          ]
      },
      {
          title: "Part III: Reading Comprehension (Continued)",
          instruction: "Read the story about Bessie Coleman.",
          passage: {
              title: "Bessie Coleman",
              type: "text",
              content: `Sometimes having people tell you that you will never be able to do something only makes you want to do it more. That's exactly what happened to a little girl named Bessie Coleman. Born into a large African-American family in 1892, Bessie loved adventure and wanted to one day be recognized for doing something great. As a child she helped take care of her three younger sisters while her mother worked as a maid. In the summer when cotton was ready to be picked, her whole family worked on the farm. Bessie loved school and went as often as she could. She was a good student who worked very hard. When Bessie read about the Wright brothers and their flight at Kitty Hawk, she started to dream about flying herself.<br><br>Even though it seemed impossible for an African-American woman to become a pilot, Bessie wouldn't stop dreaming. She learned about a French woman who had become the first woman pilot and decided that she could do it too. Although she was excited about learning to fly, Bessie knew she would have to earn money first. In 1915 she moved to Chicago, where she worked as a manicurist. When she finally saved enough to take flying lessons, she couldn't find anyone in the United States who was willing to teach her. Bessie could have given up, but instead she found a flying school in France that would teach her. She received her pilot's license in 1921. Bessie's dream came true after all.`
          },
          questions: [
              { id: 15, text: "Bessie Coleman saw her dream come true when she _________________.", options: {A: "opened her own flying school", B: "traveled around the world", C: "earned her pilot's license", D: "became a manicurist"}, ans: "C" },
              { id: 16, text: "Bessie couldn't learn to become a pilot in the United States because _________________.", options: {A: "she could not earn enough money for lessons", B: "she couldn't afford her own airplane", C: "she wasn't a good student", D: "no one in the United States would teach her"}, ans: "D" },
              { id: 17, text: "The best title for this story is _________________.", options: {A: "“Brave Stunt Pilots”", B: "“The First African-American Woman Pilot”", C: "“Famous African-American Pilots”", D: "“Courageous Women Pilots”"}, ans: "B" }
          ]
      },
      {
          title: "Part IV: Spelling",
          instruction: "Read each sentence carefully. Find the one word that is spelled correctly.",
          questions: [
              { id: 18, text: "I didn't know there was a hole in my ___________ when I put my lunch money in it.", options: {A: "pockit", B: "pocutt", C: "pockitt", D: "pocket"}, ans: "D" },
              { id: 19, text: "Everyone was amazed that our family drinks more than a ___________ of milk every day.", options: {A: "gallon", B: "gallin", C: "gallen", D: "galon"}, ans: "A" },
              { id: 20, text: "I haven't learned yet how to divide numbers, but I already know how to ___________ them very well.", options: {A: "multaply", B: "multiply", C: "multapply", D: "mulltiply"}, ans: "B" },
              { id: 21, text: "So many ___________ came to see the play that there were no empty seats in the auditorium.", options: {A: "peopel", B: "peepel", C: "people", D: "peaple"}, ans: "C" }
          ]
      },
      {
          title: "Part V: Language Structure",
          instruction: "Read each sentence carefully. Choose the correct word for the underlined space in each sentence.",
          questions: [
              { id: 22, text: "We were pleased that we had ___________ everything in the museum before it closed.", options: {A: "saw", B: "seen", C: "sees", D: "see"}, ans: "B" },
              { id: 23, text: "My mother says that my little sister always ___________ a cold when she forgets to wear her sweater.", options: {A: "catches", B: "catch", C: "caught", D: "catching"}, ans: "A" },
              { id: 24, text: "Brittany had ___________ that she closed the door when we went out to play, but when we got home, it was opened.", options: {A: "swear", B: "swore", C: "sworn", D: "swears"}, ans: "C" },
              { id: 25, text: "Now that I tried it for myself, I know that ___________ a unicycle is more difficult than I thought it would be.", options: {A: "rides", B: "rode", C: "ridden", D: "riding"}, ans: "D" }
          ]
      }
  ],
  "2019": [
    {
        title: "Part I: Vocabulary",
        instruction: "Read each sentence. Decide which word means the same or nearly the same as the word that is underlined in the sentence.",
        questions: [
            { id: 1, text: "The child <u>gave</u> part of her candy to a friend at lunchtime.", options: {A: "offered", B: "showed", C: "took", D: "became"}, ans: "A" },
            { id: 2, text: "The <u>mean</u> child did not play with the other children in the class.", options: {A: "happy", B: "tall", C: "unkind", D: "silly"}, ans: "C" },
            { id: 3, text: "The boy will <u>choose</u> flowers to give to his mother.", options: {A: "change", B: "pick", C: "taste", D: "steal"}, ans: "B" },
            { id: 4, text: "The children were <u>loud</u> as they went to the playground.", options: {A: "quiet", B: "sad", C: "noisy", D: "grumpy"}, ans: "C" }
        ]
    },
    {
        title: "Part II: Word Relationships",
        instruction: "Read the words in each group. Three of the words belong together. One word <u>does not belong</u>.",
        questions: [
            { id: 5, text: "Which word does not belong?", options: {A: "apple", B: "pear", C: "cherry", D: "rose"}, ans: "D" },
            { id: 6, text: "Which word does not belong?", options: {A: "sun", B: "star", C: "rock", D: "moon"}, ans: "C" },
            { id: 7, text: "Which word does not belong?", options: {A: "bat", B: "book", C: "ball", D: "mitt"}, ans: "B" },
            { id: 8, text: "Which word does not belong?", options: {A: "shoes", B: "boots", C: "dress", D: "slippers"}, ans: "C" }
        ]
    },
    {
        title: "Part III: Reading Comprehension",
        instruction: "Read the passage about the Octopus.",
        passage: {
            title: "The Octopus",
            type: "text",
            content: `Did you know that an octopus has eyes that are very like human eyes? It cannot see colors, but it can see light and dark and shapes and details. Most of us know that an octopus has eight arms, but did you know that most have suckers on their arms to help them move? The suckers also help them to catch and hold food. An octopus has a large brain and strong senses. It uses its arms to smell and taste and feel.<br><br>Octopuses live in many parts of oceans. Many octopuses live on the sea floor or on hard surfaces like coral reefs. Sometimes they swim, but usually they crawl with their arms. They use the suckers on their arms to grip and to pull their bodies along. They swim by taking in water and pushing it out like a jet stream. Other octopuses live in the open ocean and never touch the sea floor. They often swim by pulling all eight arms up at once and then pushing them all down at the same time. Still other octopuses live in the open ocean and on the sea floor.<br><br>Some octopuses protect themselves by living in a home called a den. An octopus can squeeze its soft body through a very small space. So many of them live in gaps and holes in places they find in the ocean. If a den has a small opening, it helps to protect the octopus from enemies. Some octopuses even live in bottles and cans that people have thrown away.`
        },
        questions: [
            { id: 9, text: "The octopus uses its arms to smell and taste and _________________.", options: {A: "see", B: "hear", C: "talk", D: "feel"}, ans: "D" },
            { id: 10, text: "Octopuses that live on the sea floor sometime swim, but mostly they _________________.", options: {A: "crawl with their arms", B: "do not move", C: "fly", D: "catch a ride with a fish"}, ans: "A" },
            { id: 11, text: "An octopus often lives in a place with a very small opening to _________________.", options: {A: "swim in and out easily", B: "sleep a long time", C: "protect itself from enemies", D: "see what is in the bottle"}, ans: "C" }
        ]
    },
    {
        title: "Part III: Reading Comprehension (Continued)",
        instruction: "Read the Poem.",
        passage: {
            title: "The Circus Poem",
            type: "poem",
            content: `I have been waiting so long.
    I can't believe I am going.
    I keep trying to think
    What wonders they'll be showing.
    
    But, here I am
    And what sights to see.
    The tigers look scary.
    Do they wish they were free?
    
    They come out of their cages
    As they hear a whip snap.
    Though they seem to be wild
    They react to a tap.
    
    Then come the lions.
    They let out a great roar.
    They are kings of the jungle,
    And the crowd shouts for more.
    
    Next are the horses
    They trot and they prance.
    Wearing a bright shiny costume,
    A lady gets them to dance.
    
    The elephants are huge!
    Holding each other's tails in a line.
    How can anything be that big?
    This is turning out fine.
    
    And here come the clowns.
    Oh, one got hit with a pie!
    I can't believe I'm here.
    I don't want time to go by.`
        },
        questions: [
            { id: 12, text: "The child in the poem is probably at a _________________.", options: {A: "birthday party", B: "zoo", C: "movie", D: "circus"}, ans: "D" },
            { id: 13, text: "The person in the poem likes that the horses trot and prance and _________________.", options: {A: "roar", B: "dance", C: "lead the elephants", D: "go in a cage"}, ans: "B" },
            { id: 14, text: "At the end of the poem the child _________________.", options: {A: "wants to go home", B: "doesn't feel well", C: "hopes that time will go slowly", D: "wants pie"}, ans: "C" }
        ]
    },
    {
        title: "Part III: Reading Comprehension (Continued)",
        instruction: "Read the story about the Wright Brothers.",
        passage: {
            title: "The Wright Brothers",
            type: "text",
            content: `Long ago people did not think that man would be able to fly. Many people had tried to make machines that they could fly in, but none of them really worked. When Orville Wright was seven years old, he told his teacher that he was going to make a machine that could fly. About twenty-five years later he and his brother Wilbur became the first ever to fly in a machine that they made. That was over one hundred years ago.<br><br>When Orville was seven and Wilbur was eleven, their father gave them a toy helicopter. The two boys spent much time playing with it. It went into the air using a rubber band. The Wright brothers loved to see how things worked. Soon they made copies of the helicopter. As they grew, they always liked to think about flying. They built kites and gliders -- that used wind for power. The brothers studied birds to see how they could fly. They made a kite with wings like a bird, and soon they made a glider with wings. It was made of wood and wire and cloth. They studied the wind and made new gliders.<br><br>Then Orville and Wilbur added parts and even an engine to their gliders. They went to a very windy beach. The wind could help them get into the air, and the sand would give them a soft landing. Orville and Wilbur had lots of crashes, but they did not really get hurt. They kept making changes, and they named their glider Flyer. When it first flew, it was only in the air for 12 seconds. They took turns flying the same day and soon flew for 59 seconds -- almost a minute. They knew then that they would succeed. The Wright brothers made more changes, and their machines could stay in the air longer and longer. Today's airplanes still use many of their ideas.`
        },
        questions: [
            { id: 15, text: "Orville and Wilbur Wright _________________.", options: {A: "liked to fly in helicopters", B: "were the first people to fly in a machine that they made", C: "wanted to be doctors", D: "did not like birds"}, ans: "B" },
            { id: 16, text: "As boys they had fun trying to make copies of _________________.", options: {A: "a bird", B: "a rubber band", C: "a toy helicopter", D: "a beach"}, ans: "C" },
            { id: 17, text: "The first time that Flyer flew, it stayed in the air for _________________.", options: {A: "12 seconds", B: "1 hour", C: "2 minutes", D: "2 hours"}, ans: "A" }
        ]
    },
    {
        title: "Part IV: Spelling",
        instruction: "Read each sentence carefully. Find the one word that is spelled correctly.",
        questions: [
            { id: 18, text: "At the museum the class liked the room with the ___________ best.", options: {A: "butterflys", B: "buterflys", C: "butterflies", D: "butterfiles"}, ans: "C" },
            { id: 19, text: "Their ___________ had blue and green wings with black and yellow spots.", options: {A: "favorite", B: "favorit", C: "faverit", D: "favrite"}, ans: "A" },
            { id: 20, text: "All the ___________ wanted to go back to see the room again.", options: {A: "childern", B: "cheldern", C: "cheldren", D: "children"}, ans: "D" },
            { id: 21, text: "Later, they ___________ even more colors on other bugs.", options: {A: "notisd", B: "noticd", C: "noticed", D: "notised"}, ans: "C" }
        ]
    },
    {
        title: "Part V: Language Structure",
        instruction: "Read each sentence carefully. Choose the correct word for the underlined space in each sentence.",
        questions: [
            { id: 22, text: "After the coach showed me how to throw the ball, I ___________ to do what she did.", options: {A: "try", B: "tried", C: "trying", D: "tries"}, ans: "B" },
            { id: 23, text: "Before she ___________ me the right way to hold the ball, I threw it wrong.", options: {A: "teached", B: "teaches", C: "teaching", D: "taught"}, ans: "D" },
            { id: 24, text: "Now I ___________ out batters all the time.", options: {A: "striking", B: "strike", C: "struck", D: "strikes"}, ans: "B" },
            { id: 25, text: "I am happy that she helped me to ___________ to throw.", options: {A: "learn", B: "learning", C: "learned", D: "learns"}, ans: "A" }
        ]
    }
  ],
  "2020": [
    {
        title: "Part I: Vocabulary",
        instruction: "Read each sentence. Decide which word means the same or nearly the same as the word that is underlined in the sentence.",
        questions: [
            { id: 1, text: "The teacher would <u>draw</u> the curtains during the movie.", options: {A: "pull", B: "shake", C: "unhook", D: "color"}, ans: "A" },
            { id: 2, text: "The <u>courteous</u> policeman gave us directions.", options: {A: "comfortable", B: "polite", C: "pleasant", D: "brave"}, ans: "B" },
            { id: 3, text: "The crowd began to <u>dwindle</u> in the ninth inning.", options: {A: "increase", B: "cheer", C: "decrease", D: "grumble"}, ans: "C" },
            { id: 4, text: "The <u>pampered</u> child would not share her toys.", options: {A: "picky", B: "selfish", C: "miserable", D: "spoiled"}, ans: "D" }
        ]
    },
    {
        title: "Part II: Word Relationships",
        instruction: "Read the words in each group. Three of the words belong together. One word <u>does not belong</u>.",
        questions: [
            { id: 5, text: "Which word does not belong?", options: {A: "candle", B: "lamp", C: "compass", D: "flashlight"}, ans: "C" },
            { id: 6, text: "Which word does not belong?", options: {A: "fruits", B: "flowers", C: "vegetables", D: "weeds"}, ans: "D" },
            { id: 7, text: "Which word does not belong?", options: {A: "barn", B: "farmhouse", C: "pigpen", D: "stable"}, ans: "B" },
            { id: 8, text: "Which word does not belong?", options: {A: "bake", B: "carve", C: "roast", D: "boil"}, ans: "B" }
        ]
    },
    {
        title: "Part III: Reading Comprehension",
        instruction: "Read the passage about Thomas Edison.",
        passage: {
            title: "Thomas Edison",
            type: "text",
            content: `When Thomas Edison was born in 1847, the world was very different from ours. Homes and streets were lit at night by candles and gas flames. There were no recordings of music, and there were no movies or television. Although Edison only went to school for a few months, he spent his life learning from books and experiments. He liked to think about what people needed. Then, he tried to invent something to help them. While he worked, he wrote down everything that he did. If an experiment failed, he kept a record of what went wrong. If it was a success, he wrote down how it worked. He did not give up. Edison made eight thousand attempts before he succeeded at making a storage battery.<br><br>Thomas Edison's work resulted in the first electric lights, recorded music, and early movies. He also invented a copy machine, a microphone, a wireless telephone, an electric pen, the first talking movie, and many other things. He used prize money from a contest he won to set up a laboratory. It was the first modern research lab. People worked in teams to solve problems and develop new products. The first recording his lab made was of "Mary Had a Little Lamb." His first movie was of a man sneezing. For the electric light, he had a glassblower make a round bulb. Next, he tried to pass electric current through different threads and wires to produce a glow. It took him a couple years to decide that carbon wire was best for making light. Edison obtained 1,093 patents or rights to inventions during his lifetime. That is more than any other person. So many things that we use every day are the result of Edison's hard work.`
        },
        questions: [
            { id: 9, text: "Thomas Edison went to school for _________________.", options: {A: "a couple months", B: "one year", C: "a few years", D: "his whole life"}, ans: "A" },
            { id: 10, text: "The first recording was of _________________.", options: {A: "a telephone call", B: "a man sneezing", C: "“Mary Had a Little Lamb”", D: "a talking movie"}, ans: "C" },
            { id: 11, text: "Edison showed that he would not give up when he _________________.", options: {A: "built a laboratory", B: "had people work in teams", C: "read books", D: "tried eight thousand times to make a battery"}, ans: "D" }
        ]
    },
    {
        title: "Part III: Reading Comprehension (Continued)",
        instruction: "Read the Poem.",
        passage: {
            title: "What Summer is For",
            type: "poem",
            content: `The water sparkles
    And the waves slap the shore
    The sand slips between my toes
    This is what summer is for
    
    I made a fine sand castle
    With a tower and a moat
    But the tide slowly crept in
    And caused it to float
    
    I knew it would happen
    It does every day
    I build my grand castle
    Then watch it slide away
    
    I don't really mind
    I've built a hundred or more
    What bliss to rebuild
    As I make the walls soar
    
    The water sparkles
    And the waves slap the shore
    The sand slips between my toes
    This is what summer is for`
        },
        questions: [
            { id: 12, text: "How does the speaker in the poem feel about sand castles?", options: {A: "They are fun to build but not meant to last", B: "They should have deep moats", C: "It is very sad when they wash away", D: "They should be very tall"}, ans: "A" },
            { id: 13, text: "The rhyme scheme for each stanza is _________________.", options: {A: "ABAB", B: "ABBA", C: "ABCB", D: "ABBC"}, ans: "C" },
            { id: 14, text: "The author would probably name this poem _________________.", options: {A: "“The Beach”", B: "“What Summer is For”", C: "“Towers and Moats”", D: "“The Tide”"}, ans: "B" }
        ]
    },
    {
        title: "Part III: Reading Comprehension (Continued)",
        instruction: "Read the story about Sacajawea.",
        passage: {
            title: "Sacajawea",
            type: "text",
            content: `In the early 1800's President Thomas Jefferson wanted to know more about new lands in the West. These areas had been added to the United States. He asked two men named Lewis and Clark to lead a group of explorers. They would try to find a way from the Missouri River to the Pacific Ocean. This adventure might not have been successful without the help of a young American Indian girl. Her name was Sacajawea.<br><br>Sacajawea was a Shoshone Indian. When she was ten or eleven, her tribe was raided. Sacajawea was taken captive and given to an enemy chief. As a teenager she became the second wife of a French fur trader. In November of 1804, she and her husband met the Lewis and Clark team. Because she and her husband could speak to Native American Indian groups with words or sign language, Lewis and Clark asked them to come with them. The group stopped for the winter, and Sacajawea had a baby boy in February. When the explorers left in April, she went along. She carried her baby, Pomp, on her back.<br><br>Sacajawea showed courage and quick thinking as they traveled on the river. She also kept up with the men when they had to walk around rapids or waterfalls. She helped the explorers learn how to approach and talk to Indian groups. In August they came to the summer hunting grounds of the Shoshone. Sacajawea went along with Lewis and Clark to meet the chief. To her surprise the chief was her brother. He was happy to see her and agreed to help Lewis and Clark. He helped them to get horses and a guide. When they continued, Sacajawea helped the explorers meet with other Indian groups. The Native Americans were not afraid of the explorers. They did not think that a war party would include a mother and child. Lewis and Clark did make it to the Pacific Ocean. They waited near it for the next winter, and then their group made the return trip. Sacajawea and her husband had spent one year and four months with the explorers. She helped in one of the most important adventures of her time. She is honored on a golden dollar coin that has a picture of her with Pomp on her back.`
        },
        questions: [
            { id: 15, text: "Sacajawea and the French fur trader were asked to join Lewis and Clark, because _________________.", options: {A: "they knew the way West", B: "they had horses", C: "they could talk to Native Americans", D: "they knew President Jefferson"}, ans: "C" },
            { id: 16, text: "Sacajawea showed that she was strong on the journey, because _________________.", options: {A: "she was gone for sixteen months", B: "she could keep up with the men with Pomp on her back", C: "she could talk to other Indians", D: "she met with her brother, a chief"}, ans: "B" },
            { id: 17, text: "Native American Indian groups were not so afraid of the white explorers, because _________________.", options: {A: "Sacajawea and Pomp were with them", B: "Lewis and Clark wanted horses", C: "they knew Sacajawea and the fur trader", D: "they had a letter from President Jefferson"}, ans: "A" }
        ]
    },
    {
        title: "Part IV: Spelling",
        instruction: "Read each sentence carefully. Find the one word that is spelled correctly.",
        questions: [
            { id: 18, text: "The class roared with ___________ during the movie.", options: {A: "laughter", B: "laufter", C: "luaghter", D: "laffter"}, ans: "A" },
            { id: 19, text: "There was a ___________ smell in the kitchen.", options: {A: "piculiar", B: "picueliar", C: "peculair", D: "peculiar"}, ans: "D" },
            { id: 20, text: "The teacher tried to ___________ the new rules.", options: {A: "explane", B: "ecsplane", C: "ecsplain", D: "explain"}, ans: "D" },
            { id: 21, text: "The class was excited to go to the ___________ to find new books.", options: {A: "libary", B: "library", C: "libery", D: "librarry"}, ans: "B" }
        ]
    },
    {
        title: "Part V: Language Structure",
        instruction: "Read each sentence carefully. Choose the correct word for the underlined space in each sentence.",
        questions: [
            { id: 22, text: "When we went to the city, we ___________ huge buildings.", options: {A: "see", B: "seen", C: "saw", D: "seed"}, ans: "C" },
            { id: 23, text: "He ___________ the ball too late, and the runner was safe.", options: {A: "throws", B: "throwed", C: "thrown", D: "threw"}, ans: "D" },
            { id: 24, text: "When she ___________ to read the rules, no one listens.", options: {A: "tries", B: "tried", C: "trying", D: "try"}, ans: "A" },
            { id: 25, text: "After she had ___________ the song, everyone clapped.", options: {A: "singed", B: "sang", C: "sanged", D: "sung"}, ans: "D" }
        ]
    }
  ],
  "2021": [
      {
          title: "Part I: Vocabulary",
          instruction: "Read each sentence. Decide which word means the same or nearly the same as the word that is underlined in the sentence.",
          questions: [
              { id: 1, text: "I was <u>worried</u> about being late for school because the bus broke down.", options: {A: "relaxed", B: "upset", C: "calm", D: "pleased"}, ans: "B" },
              { id: 2, text: "Today is very <u>special</u> because it is my eighth birthday.", options: {A: "unusual", B: "ordinary", C: "plain", D: "famous"}, ans: "A" },
              { id: 3, text: "Miguel feels very <u>lonesome</u> when he is the only one at the bus stop.", options: {A: "friendly", B: "happy", C: "alone", D: "frightened"}, ans: "C" },
              { id: 4, text: "The <u>terrible</u> storm destroyed many of the homes in our neighborhood.", options: {A: "wonderful", B: "amazing", C: "mild", D: "awful"}, ans: "D" }
          ]
      },
      {
          title: "Part II: Word Relationships",
          instruction: "Read the words in each group. Three of the words belong together. One word <u>does not belong</u>.",
          questions: [
              { id: 5, text: "Which word does not belong?", options: {A: "branch", B: "trunk", C: "leaf", D: "dirt"}, ans: "D" },
              { id: 6, text: "Which word does not belong?", options: {A: "igloo", B: "garage", C: "tent", D: "house"}, ans: "B" },
              { id: 7, text: "Which word does not belong?", options: {A: "elevator", B: "escalator", C: "bridge", D: "ladder"}, ans: "C" },
              { id: 8, text: "Which word does not belong?", options: {A: "beak", B: "chirp", C: "quack", D: "tweet"}, ans: "A" }
          ]
      },
      {
          title: "Part III: Reading Comprehension",
          instruction: "Read the passage about the Frisbee.",
          passage: {
              title: "The Frisbee",
              type: "text",
              content: `Some people think the first Frisbee was invented by a group of college students at Yale University in New Haven, Connecticut in the 1940s. The Frisbee Pie Factory was located close to that college. It was very easy for students to get pie plates. All they had to do was eat the pie first. The students used to go to the park on warm afternoons and flip their empty pie plates to each other.<br><br>A real Frisbee, however, isn't a pie plate. It is a disc that flies like the wing of an airplane as it is lifted by the air. Spinning makes the Frisbee glide and stay steady. The disc seems like a flying saucer. People enjoy playing with a Frisbee because it is so easy to use. There are no real rules, and anyone can play.<br><br>People have invented many different ways to make the game of Frisbee more interesting and challenging. One way is to toss it behind your head or catch it behind your back without looking. Probably the hardest way is to catch it is with your teeth, but that trick is usually saved for dogs. Some of them are better at catching a Frisbee than people.`
          },
          questions: [
              { id: 9, text: "The Frisbee was probably invented by _________________.", options: {A: "a pie company", B: "college students", C: "a toy company"}, ans: "B" },
              { id: 10, text: "People enjoy playing with a Frisbee so much because _________________.", options: {A: "it is easy to play and there are no rules", B: "it is very challenging", C: "it has the shape of a pie plate"}, ans: "A" },
              { id: 11, text: "The best title for this story is _________________.", options: {A: "“Having Fun at College”", B: "“The Pie Company”", C: "“Fun With a Frisbee”"}, ans: "C" }
          ]
      },
      {
          title: "Part III: Reading Comprehension (Continued)",
          instruction: "Read the Poem.",
          passage: {
              title: "Paragraph B",
              type: "poem",
              content: `You won't believe
    what I just found
    Sitting here
    upon the ground.
    
    With no legs
    to hold it high
    Slowly creeping,
    crawling by.
    
    It had no eyes
    to help it see
    And couldn't stare
    right back at me.
    
    After putting
    on a show
    It made its way
    deep down below.
    
    Then just when it
    was out of sight,
    It popped back up
    with all its might.
    
    Twist and bend,
    curve and turn,
    Oh my gosh,
    it's just a ....`
          },
          questions: [
              { id: 12, text: "What did the person in this poem probably find on the ground?", options: {A: "a caterpillar", B: "a worm", C: "a snake"}, ans: "B" },
              { id: 13, text: "It couldn't stare back at the person in the poem because _________________.", options: {A: "it was under the ground", B: "it was sleeping", C: "it had no eyes"}, ans: "C" },
              { id: 14, text: "When it was out of sight, it probably went _________________.", options: {A: "up the hill", B: "around the corner", C: "under the ground"}, ans: "C" }
          ]
      },
      {
          title: "Part III: Reading Comprehension (Continued)",
          instruction: "Read the story about Kangaroos.",
          passage: {
              title: "Kangaroos",
              type: "text",
              content: `This animal originated in Australia, is a marsupial, and is the largest hopping animal in the world. It carries its young in a special body pocket called a "pouch." Do you know what animal it is? If you guessed kangaroo you are right! Kangaroos are very unique. They can hop like rabbits and can go for weeks without water like camels. They feed at night, eating grass, plants, and shrubs. They get most of the water they need from the plants they eat, as well as from streams. If there is no water, kangaroos dig holes to find water. The tail of a kangaroo is as long as its body and very muscular. Kangaroos can hop for a long time without getting tired. When they have to escape danger, kangaroos can leap very fast and travel almost as fast as a car.<br><br>A baby kangaroo is called a "joey." When it is first born, a kangaroo is less than one inch long. It spends the first six months of its life hidden in its mother's pouch. While in the mother's pouch, the baby can safely explore the world. It reaches out to smell things and pick up grass to eat. The mother and baby are very close. By watching its mother, the baby learns how to eat, groom, and watch for danger. Even after it leaves her pouch, the baby kangaroo stays close to its mother until it is over one year old.<br><br>Kangaroos have very good hearing. Their large ears can turn in all directions and can pick up sounds from far away. Kangaroos spend a lot of time grooming themselves. They use the claws on their front feet as a comb. Most kangaroos have four toes on their back feet. Two of the toes are joined together, and the long one in the middle has a sharp nail used to fight with other animals. Kangaroos grow throughout their lives, not just when they are young. Most kangaroos live only seven years, but some of the larger ones can live up to 20 years.`
          },
          questions: [
              { id: 15, text: "When a kangaroo is in danger it _________________.", options: {A: "hides in its mother's pouch", B: "leaps very fast", C: "climbs a tree"}, ans: "B" },
              { id: 16, text: "Another name for a baby kangaroo is _________________.", options: {A: "an infant", B: "a pouch", C: "a joey"}, ans: "C" },
              { id: 17, text: "The best title for this story is _________________.", options: {A: "“The Unique Kangaroo”", B: "“Baby Animals”", C: "“Animals of Australia”"}, ans: "A" }
          ]
      },
      {
          title: "Part IV: Spelling",
          instruction: "Read each sentence carefully. Find the one word that is spelled correctly.",
          questions: [
              { id: 18, text: "Everyone on the team was excited when Peter ___________ the fly ball to end the inning.", options: {A: "cawt", B: "cawght", C: "cought", D: "caught"}, ans: "D" },
              { id: 19, text: "My mother said I can ride my ___________ to school only when it isn't raining.", options: {A: "bycycle", B: "bycicle", C: "bicycle", D: "bicycel"}, ans: "C" },
              { id: 20, text: "Everyone in the class had to join hands and form a big ___________.", options: {A: "circle", B: "circel", C: "cercil", D: "sercle"}, ans: "A" },
              { id: 21, text: "There were so many ___________ in the movie theater that we had to stand in the back.", options: {A: "peopel", B: "peepel", C: "peopil", D: "people"}, ans: "D" }
          ]
      },
      {
          title: "Part V: Language Structure",
          instruction: "Read each sentence carefully. Choose the correct word for the underlined space in each sentence.",
          questions: [
              { id: 22, text: "Marisa and Jenna were ___________ the boys on the playground.", options: {A: "chased", B: "chasing", C: "chases"}, ans: "B" },
              { id: 23, text: "Our family ___________ so sad that our neighbors were moving to Texas.", options: {A: "feeled", B: "felted", C: "felt"}, ans: "C" },
              { id: 24, text: "Grandma actually ___________ out all the candles on her birthday cake by herself.", options: {A: "blowed", B: "blew", C: "blows"}, ans: "B" },
              { id: 25, text: "The carpenter used wood, nails, and shingles to ___________ my new playhouse.", options: {A: "built", B: "building", C: "build"}, ans: "C" }
          ]
      }
  ],
  "2022": [
    {
        title: "Part I: Vocabulary",
        instruction: "Read each sentence. Decide which word means the same or nearly the same as the word that is underlined in the sentence.",
        questions: [
            { id: 1, text: "The teacher was <u>positive</u> that our field trip to the museum would be canceled because of bad weather.", options: {A: "uncertain", B: "confused", C: "sure", D: "concerned"}, ans: "C" },
            { id: 2, text: "I told my brother to <u>release</u> the butterfly he caught in the garden.", options: {A: "grasp", B: "capture", C: "hold", D: "free"}, ans: "D" },
            { id: 3, text: "Martha and Sarah got their kite strings <u>tangled</u> because of the strong winds.", options: {A: "twisted", B: "organized", C: "lost", D: "strayed"}, ans: "A" },
            { id: 4, text: "Mrs. Harrigan's class and our class are in a <u>competition</u> to see who can read the most books.", options: {A: "party", B: "contest", C: "celebration", D: "disagreement"}, ans: "B" }
        ]
    },
    {
        title: "Part II: Word Relationships",
        instruction: "Read the words in each group. Three of the words belong together. One word <u>does not belong</u>.",
        questions: [
            { id: 5, text: "Which word does not belong?", options: {A: "roar", B: "siren", C: "horn", D: "whistle"}, ans: "A" },
            { id: 6, text: "Which word does not belong?", options: {A: "tunnel", B: "cave", C: "well", D: "mountain"}, ans: "D" },
            { id: 7, text: "Which word does not belong?", options: {A: "milk", B: "cake", C: "soda", D: "juice"}, ans: "B" },
            { id: 8, text: "Which word does not belong?", options: {A: "bag", B: "bucket", C: "box", D: "handle"}, ans: "D" }
        ]
    },
    {
        title: "Part III: Reading Comprehension",
        instruction: "Read the passage about the Giraffe.",
        passage: {
            title: "The Giraffe",
            type: "text",
            content: `The tallest animal on earth is the giraffe. A full-grown giraffe is three times taller than a person and weighs ten times more. The newborn is 6 feet tall and grows 1 foot in the first month. A baby giraffe can drink a gallon of milk in less than one minute. A giraffe is usually very gentle, but when it is in danger, it kicks with its powerful front legs and is strong enough to kill a lion. It can also strike with its head, swinging its powerful neck.<br><br>Giraffes usually stay in small groups, but sometimes they gather in herds of over fifty. Herds usually contain females and babies. Adult males often like to wander alone. A giraffe can gallop as fast as a horse, swinging its neck back and forth with each step. Probably the most amazing thing about a giraffe is its long neck. A giraffe can bend its long neck backward and scratch its back with its nose. With its head held so high, the giraffe can see nearly two miles away and spot an enemy before it gets near.<br><br>A giraffe is so tall that it can reach the top of trees by just standing up. Since a giraffe is as tall as a tree, it uses its teeth to snip off leaves and small branches. In one day a full-grown giraffe can eat 75 pounds of leaves, twigs, flowers, and fruits. It is a very noisy eater and chews its food with its mouth open. The height of a giraffe makes it difficult for it to get up. It has to swing its neck three times as it slowly brings itself to its feet.`
        },
        questions: [
            { id: 9, text: "A baby giraffe _________________.", options: {A: "eats 75 pounds of leaves, twigs, flowers, and fruits", B: "can drink a gallon of milk in less than one minute", C: "is three times taller than a person"}, ans: "B" },
            { id: 10, text: "When a giraffe is in danger, it _________________.", options: {A: "kicks with its powerful front legs", B: "makes a loud noise", C: "swings its neck back and forth three times"}, ans: "A" },
            { id: 11, text: "It is difficult for a giraffe to lift itself up because _________________.", options: {A: "it weighs too much", B: "its legs are too weak", C: "it is so tall"}, ans: "C" }
        ]
    },
    {
        title: "Part III: Reading Comprehension (Continued)",
        instruction: "Read the Poem.",
        passage: {
            title: "Paragraph B",
            type: "poem",
            content: `Beneath the sky, above the grass,
    The world becomes my looking glass.
    As birds and planes appear on high,
    I feel as though my heart can fly.
    
    The clouds present a movie show,
    Which I enjoy from down below.
    Before my eyes, I can't believe
    How all the clouds begin to weave . . .
    
    A quilt upon a big blue screen
    Presenting such a pretty scene.
    First I see a spiral snake,
    Then realize it's just a fake.
    
    Changing shape from this or that . . .
    A bird, an animal, a child, or cat.
    When suddenly without a sign,
    A storm blows in, no more sunshine.
    
    Blue becomes gray and the day grows dim.
    And I begin to feel quite grim.
    Sparks of lightning, thunder's clap . . .
    Heavy raindrops tap, tap, tap.
    
    White and gray clouds begin to blend,
    My movie show comes to an end.
    I go inside to hide and seek . . .
    Another day at clouds I'll peek.`
        },
        questions: [
            { id: 12, text: "Where was the person in this poem when she saw the show from down below?", options: {A: "hiding inside her house", B: "outside on the ground looking up", C: "in an airplane looking out the window"}, ans: "B" },
            { id: 13, text: "In stanza three the big blue screen is probably _________________.", options: {A: "the sky", B: "the sun", C: "the clouds"}, ans: "A" },
            { id: 14, text: "The person in the poem has to wait for another day to peek at the clouds because _________________.", options: {A: "she is too tired", B: "it is beginning to rain", C: "she is frightened"}, ans: "B" }
        ]
    },
    {
        title: "Part III: Reading Comprehension (Continued)",
        instruction: "Read the story about the Tropical Rain Forest.",
        passage: {
            title: "Tropical Rain Forest",
            type: "text",
            content: `No place on earth is filled with more life than a tropical rain forest. These special forests grow in the area around the equator called the tropics, where it is always hot and humid. The temperature stays around 80°F every day of the year, and each year the rainfall is between 100 and 400 inches. A tropical rain forest covers the land like a large green carpet full of vegetables and giant animals. There are hundreds of kinds of trees, some over 125 feet tall with thick vines hanging down. You will see birds, frogs, mammals, and insects in rainbow colors and patterns that you can only imagine.<br><br>The leaves, flowers, and seeds of these rain forests give us chemicals used to make many different things. The rosy periwinkle plant produces a chemical used to make a very strong medicine. This special medicine destroys one kind of leukemia in children. People all over the world take other medicines containing chemicals that come from rain-forest plants. These chemicals can kill germs, reduce fever, lower blood pressure, relax muscles, and even make rashes disappear.<br><br>The tropical rain forests are very special and should be saved for everyone, but they are in danger of being destroyed. The problem is that people in the tropics are cutting them down to earn a living and improve their way of life. They are building farms, cattle ranches, logging camps, mines, and oil wells. Every second another piece of the rain forest disappears. We must show the people in the tropics how to use the riches of these forests without harming them. Today many tropical nations are starting to reclaim their rain forests and put a stop to all the destruction.`
        },
        questions: [
            { id: 15, text: "Tropical rain forests can be found _________________.", options: {A: "near the North Pole", B: "near the equator", C: "near the South Pole"}, ans: "B" },
            { id: 16, text: "Tropical rain forests are in danger of being destroyed because _________________.", options: {A: "they are being cut down", B: "there is too much rainfall", C: "the temperature is too hot"}, ans: "A" },
            { id: 17, text: "The best title for this story is _________________.", options: {A: "“Making Medicine”", B: "“People of the Tropics”", C: "“Tropical Rain Forests”"}, ans: "C" }
        ]
    },
    {
        title: "Part IV: Spelling",
        instruction: "Read each sentence carefully. Find the one word that is spelled correctly.",
        questions: [
            { id: 18, text: "We learned how to make a battery in our ___________ class last week.", options: {A: "sciance", B: "science", C: "sience", D: "sciense"}, ans: "B" },
            { id: 19, text: "Our gym teacher always blows her ___________ when the game is over.", options: {A: "whistle", B: "whistel", C: "wissel", D: "whisle"}, ans: "A" },
            { id: 20, text: "The ___________ was so strong that my hat flew off my head.", options: {A: "breize", B: "brize", C: "breeze", D: "breise"}, ans: "C" },
            { id: 21, text: "All the roads and homes in the ___________ were flooded because of the hurricane.", options: {A: "vilage", B: "villige", C: "villege", D: "village"}, ans: "D" }
        ]
    },
    {
        title: "Part V: Language Structure",
        instruction: "Read each sentence carefully. Choose the correct word for the underlined space in each sentence.",
        questions: [
            { id: 22, text: "Mike and Amy are ___________ their friends at the library after school today.", options: {A: "meeting", B: "meet", C: "meets"}, ans: "A" },
            { id: 23, text: "The principal will ___________ to the whole school about fire safety on Friday.", options: {A: "spoke", B: "speak", C: "speaks"}, ans: "B" },
            { id: 24, text: "Marissa and Jenna couldn't believe how much they had ___________ since first grade.", options: {A: "growed", B: "grew", C: "grown"}, ans: "C" },
            { id: 25, text: "Yesterday when Mrs. Roberts was sick, someone else ___________ our class.", options: {A: "teached", B: "taught", C: "teaches"}, ans: "B" }
        ]
    }
  ]
};

// Global State
let currentYear = "2017";
let currentQuizData = quizzes["2017"];

// App Logic
document.addEventListener('DOMContentLoaded', () => {
    const btnStart = document.getElementById('btn-start');
    const btnSubmit = document.getElementById('btn-submit');
    const btnRestart = document.getElementById('btn-restart');
    const quizContent = document.getElementById('quiz-content');
    const yearSelect = document.getElementById('year-select') as HTMLSelectElement;
    const subtitle = document.getElementById('quiz-subtitle');

    btnStart.addEventListener('click', startQuiz);
    btnSubmit.addEventListener('click', submitQuiz);
    btnRestart.addEventListener('click', restartQuiz);
    
    yearSelect.addEventListener('change', (e) => {
        const target = e.target as HTMLSelectElement;
        currentYear = target.value;
        subtitle.innerText = `${currentYear} Grade 2 Contest`;
    });

    function startQuiz() {
        currentQuizData = quizzes[currentYear];
        
        if (!currentQuizData) {
            alert("Sorry, data for this year is not available yet.");
            return;
        }

        document.getElementById('start-screen').classList.remove('active');
        document.getElementById('quiz-screen').classList.add('active');
        document.getElementById('btn-submit').style.display = 'block';
        renderQuiz();
    }
    
    function restartQuiz() {
        document.getElementById('results-screen').classList.remove('active');
        document.getElementById('start-screen').classList.add('active');
        document.getElementById('review-content').innerHTML = ''; // Clear review
        
        // Reset inputs if needed (though re-rendering handles this)
        window.scrollTo(0, 0);
    }

    function renderQuiz() {
        quizContent.innerHTML = '';

        currentQuizData.forEach((section, index) => {
            const sectionEl = document.createElement('div');
            sectionEl.className = 'section-container';

            // Section Header
            const headerEl = document.createElement('h3');
            headerEl.className = 'section-header';
            headerEl.innerText = section.title;
            sectionEl.appendChild(headerEl);

            // Instruction
            const instEl = document.createElement('div');
            instEl.className = 'instruction';
            instEl.innerHTML = section.instruction;
            sectionEl.appendChild(instEl);

            // Layout (Passage + Questions or just Questions)
            const layoutEl = document.createElement('div');
            
            // Check if passage exists
            if (section.passage) {
                layoutEl.className = 'reading-layout';
                
                // Passage Component
                const passageContainer = document.createElement('div');
                passageContainer.className = 'reading-passage-container';
                
                const passageEl = document.createElement('div');
                passageEl.className = 'reading-passage';
                
                const pTitle = document.createElement('div');
                pTitle.className = 'passage-title';
                pTitle.innerText = section.passage.title;
                
                const pText = document.createElement('div');
                pText.innerHTML = section.passage.content;
                if (section.passage.type === 'poem') {
                    pText.className = 'poem-text';
                }

                passageEl.appendChild(pTitle);
                passageEl.appendChild(pText);
                passageContainer.appendChild(passageEl);
                layoutEl.appendChild(passageContainer);
            }

            // Questions Component
            const questionsContainer = document.createElement('div');
            questionsContainer.className = 'questions-container';

            section.questions.forEach(q => {
                const card = document.createElement('div');
                card.className = 'question-card';
                card.dataset.id = q.id.toString();
                card.dataset.correct = q.ans;

                // Question Text
                const qText = document.createElement('div');
                qText.className = 'question-text';
                qText.innerHTML = `${q.id}. ${q.text}`;
                card.appendChild(qText);

                // Options
                const optionsGrid = document.createElement('div');
                optionsGrid.className = 'options-grid';

                for (const [key, value] of Object.entries(q.options)) {
                    const label = document.createElement('label');
                    label.className = 'option-label';
                    
                    const input = document.createElement('input');
                    input.type = 'radio';
                    input.name = `q${q.id}`;
                    input.value = key;
                    
                    label.appendChild(input);
                    label.appendChild(document.createTextNode(`${key}. ${value}`));
                    optionsGrid.appendChild(label);
                }
                card.appendChild(optionsGrid);

                // Feedback Placeholder
                const feedback = document.createElement('div');
                feedback.className = 'feedback-msg';
                card.appendChild(feedback);

                questionsContainer.appendChild(card);
            });

            if (section.passage) {
                layoutEl.appendChild(questionsContainer);
                sectionEl.appendChild(layoutEl);
            } else {
                sectionEl.appendChild(questionsContainer);
            }

            quizContent.appendChild(sectionEl);
        });
    }

    function submitQuiz() {
        let score = 0;
        let total = 0;
        const allCards = document.querySelectorAll('.question-card');

        allCards.forEach(element => {
            const card = element as HTMLElement;
            total++;
            const qId = card.dataset.id;
            const correctAns = card.dataset.correct;
            const selectedInput = document.querySelector(`input[name="q${qId}"]:checked`) as HTMLInputElement | null;
            const feedbackEl = card.querySelector('.feedback-msg');
            
            // Disable inputs
            const inputs = card.querySelectorAll('input');
            inputs.forEach(i => i.disabled = true);

            if (selectedInput) {
                if (selectedInput.value === correctAns) {
                    score++;
                    card.classList.add('correct');
                    feedbackEl.innerHTML = "✓ Correct!";
                } else {
                    card.classList.add('incorrect');
                    feedbackEl.innerHTML = `✗ Incorrect. The correct answer was <strong>${correctAns}</strong>.`;
                }
            } else {
                card.classList.add('incorrect');
                feedbackEl.innerHTML = `✗ Not answered. The correct answer was <strong>${correctAns}</strong>.`;
            }
        });

        // Hide Submit Button
        document.getElementById('btn-submit').style.display = 'none';

        // Show Results
        document.getElementById('quiz-screen').style.display = 'none';
        document.getElementById('results-screen').classList.add('active');
        document.getElementById('score-number').innerText = `${score} / ${total}`;
        
        // Move quiz content to review area so users can see what they missed
        const quizScreenContent = document.getElementById('quiz-content');
        document.getElementById('review-content').appendChild(quizScreenContent);
        
        window.scrollTo(0, 0);
    }
});