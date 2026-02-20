// ── Content Database ──────────────────────────────────────────────
const contentDatabase = [
    // ESSAYS
    { id:1, category:'essays', difficulty:'intermediate', title:'My Summer Vacation',
      preview:'Last summer was one of the most memorable times of my life. I visited my grandparents in the countryside...',
      fullText:`Last summer was one of the most memorable times of my life. I visited my grandparents in the countryside, and it was a completely different experience from my usual city life.

The countryside was peaceful and beautiful. Every morning, I woke up to the sound of birds singing instead of car horns. The air was fresh and clean, filled with the scent of flowers and grass. My grandparents' house was surrounded by green fields and tall trees that provided shade during the hot afternoons.

During my stay, I helped my grandfather in his vegetable garden. He taught me how to plant seeds, water the plants, and take care of them. It was hard work, but I felt proud when I saw the vegetables growing. I also learned to appreciate where our food comes from and how much effort farmers put into growing it.

In the evenings, my grandmother would tell me stories about her childhood. Her stories were fascinating and taught me about life in the past. We would sit on the porch, watching the sunset paint the sky in beautiful colors of orange, pink, and purple.

One of the highlights of my vacation was swimming in the nearby river with the local children. The water was cool and refreshing. We played games, splashed each other, and had so much fun. I made many new friends who showed me around the village and taught me about their daily lives.

This summer vacation taught me important lessons about simplicity, hard work, and the beauty of nature. I realized that happiness doesn't always come from expensive things or technology. Sometimes, the simple pleasures of life, like spending time with family and enjoying nature, are the most valuable. I returned home with wonderful memories and a new appreciation for the countryside.`},

    { id:2, category:'essays', difficulty:'intermediate', title:'The Importance of Education',
      preview:'Education is the foundation of a successful life and a developed society. It opens doors to opportunities...',
      fullText:`Education is the foundation of a successful life and a developed society. It opens doors to opportunities, broadens our perspectives, and empowers us to achieve our dreams. In today's world, education is more important than ever before.

First and foremost, education provides us with knowledge and skills that are essential for our future careers. It teaches us how to think critically, solve problems, and make informed decisions. Whether we want to become doctors, engineers, teachers, or artists, education gives us the tools we need to succeed in our chosen fields.

Moreover, education helps us become better citizens. It teaches us about our rights and responsibilities, helps us understand different cultures and viewpoints, and encourages us to participate in our communities. An educated society is more likely to be democratic, peaceful, and prosperous.

Education also promotes personal development. It boosts our confidence, improves our communication skills, and helps us discover our talents and interests. Through education, we learn not just from books but also from our experiences, our teachers, and our peers.

Furthermore, education is a powerful tool for breaking the cycle of poverty. It gives people from all backgrounds the opportunity to improve their lives and contribute to society. Studies have shown that educated individuals tend to have better health, higher incomes, and more stable families.

In conclusion, education is not just about getting good grades or finding a job. It is about becoming a well-rounded person who can think independently, contribute to society, and continue learning throughout life. We should value education and take advantage of every learning opportunity that comes our way.`},

    { id:3, category:'essays', difficulty:'beginner', title:'My Best Friend',
      preview:'Everyone needs a good friend in their life, and I am lucky to have found mine...',
      fullText:`Everyone needs a good friend in their life, and I am lucky to have found mine. My best friend Sarah has been by my side for five years, and our friendship has only grown stronger with time.

I first met Sarah when she transferred to our school in the sixth grade. She was shy and nervous on her first day, sitting alone during lunch. I decided to introduce myself, and we immediately connected over our shared love of reading and drawing. From that day forward, we became inseparable.

What makes Sarah such a wonderful friend is her kindness and understanding nature. She is always there to listen when I need to talk, whether I'm happy, sad, or confused. She never judges me and always offers helpful advice when I ask for it. When I went through a difficult time last year, she checked on me every day and helped me feel better.

Sarah is also incredibly loyal. She has stood up for me when others were unkind and has never shared my secrets with anyone. I know I can trust her completely, and that trust is the foundation of our friendship. We have promised to always be honest with each other, even when the truth is difficult to hear.

In conclusion, Sarah is more than just my best friend; she is like a sister to me. Our friendship has taught me about loyalty, trust, and the importance of having someone who truly understands you. I am grateful for her presence in my life and hope our friendship will last forever.`},

    { id:4, category:'essays', difficulty:'advanced', title:'How Technology Has Changed Our Lives',
      preview:'In the past few decades, technology has transformed nearly every aspect of our daily lives...',
      fullText:`In the past few decades, technology has transformed nearly every aspect of our daily lives. From how we communicate to how we work, learn, and entertain ourselves, technology has brought both amazing benefits and new challenges.

One of the most significant changes is in communication. In the past, people had to wait days or weeks for letters to arrive. Now, we can instantly message, call, or video chat with anyone around the world. Social media platforms allow us to stay connected with friends and family, share our experiences, and meet new people who share our interests.

Technology has also revolutionized education. Students today have access to unlimited information through the internet. Online courses, educational videos, and digital libraries have made learning more accessible than ever before.

However, technology also presents challenges. Many people spend too much time on their phones and computers, which can affect their physical health and social skills. Cyberbullying and online privacy concerns are serious issues that we must address.

In conclusion, technology has brought tremendous changes to our world. While it offers many benefits, we must use it wisely and responsibly. The key is finding a balance between using technology to enhance our lives and not letting it control us.`},

    { id:5, category:'essays', difficulty:'intermediate', title:'A Memorable Day at School',
      preview:'Last month, our school organized a science fair, and it turned out to be one of the most exciting days...',
      fullText:`Last month, our school organized a science fair, and it turned out to be one of the most exciting days of my school life. It was a day filled with creativity, learning, and fun that I will never forget.

For weeks before the fair, my classmates and I had been preparing our projects. I decided to create a model showing how solar panels work. I spent hours researching, gathering materials, and building my project. My parents helped me, and it became a fun family activity.

On the day of the science fair, the school gymnasium was transformed into a hub of scientific exploration. Tables were set up in rows, each displaying different projects. The creativity and hard work of my fellow students were impressive.

At the end of the day, there was an award ceremony. I was thrilled when I heard my name called for third place! But more than the award, what made the day memorable was the experience of learning, sharing ideas, and seeing the incredible work of my peers.

This science fair taught me that education is not just about textbooks and exams. It is about exploring, experimenting, and expressing our ideas.`},

    // LETTERS
    { id:6, category:'letters', difficulty:'beginner', title:'Letter to a Friend',
      preview:'Dear Maria, I hope this letter finds you in good health and high spirits...',
      fullText:`Dear Maria,

I hope this letter finds you in good health and high spirits. I am writing to share some exciting news with you and to hear about how you have been doing.

You will be happy to know that I recently won first prize in our school's art competition! I created a painting of our beautiful city park during sunset, and the judges really liked it. I wish you could have been there to see it.

How is everything at your new school? Have you made new friends? I know moving to a new city was difficult for you, but I hope you are settling in well. Please tell me about your classes, teachers, and any interesting activities you have participated in.

My family is doing well. My younger brother just started learning to play the guitar, and while he is still a beginner, he practices every day. My parents send their warm regards to you and your family.

I hope we can meet during the upcoming holidays. It would be wonderful to catch up in person. Please write back soon!

With love and best wishes,
Your friend,
Alex`},

    { id:7, category:'letters', difficulty:'advanced', title:'Complaint Letter to School Principal',
      preview:'To: The Principal. Subject: Request for Improvement of School Library Facilities...',
      fullText:`To: The Principal
Green Valley High School

Subject: Request for Improvement of School Library Facilities

Respected Sir/Madam,

I am writing this letter on behalf of the students of Grade 10 to bring to your attention some concerns regarding our school library and to request improvements that would greatly benefit all students.

First, the library has limited hours of operation. It currently closes at 3:00 PM. Many students who participate in after-school activities cannot access it. We respectfully request that the library hours be extended until at least 5:00 PM on weekdays.

Second, the library needs more updated books and resources, especially in science, technology, and current affairs.

Third, the library needs better internet connectivity. The current Wi-Fi connection is slow and unreliable, making it difficult for students to conduct online research.

We believe that these improvements would significantly enhance the learning environment for all students. We would be grateful if you could consider our requests.

Thank you for your time and consideration.

Respectfully yours,
[Your Name]
Student Representative, Grade 10`},

    { id:8, category:'letters', difficulty:'intermediate', title:'Thank You Letter to Teacher',
      preview:'Dear Mrs. Johnson, I am writing to express my sincere gratitude for all the support and guidance...',
      fullText:`Dear Mrs. Johnson,

I am writing this letter to express my sincere gratitude for all the support and guidance you have provided me throughout this school year. Your dedication to teaching and your genuine care for your students have made a significant impact on my life.

When I first joined your English class, I struggled with writing essays and understanding complex literature. However, your patient explanations, helpful feedback, and constant encouragement gave me the confidence to keep trying.

I particularly appreciate the extra time you spent with me after school to review my essays. Your willingness to help showed me how much you truly care about your students' success. Thanks to your guidance, my writing has improved significantly.

Beyond academics, you have taught me valuable life lessons about perseverance, critical thinking, and expressing my ideas clearly.

As I prepare to move on to the next grade, I want you to know that you have been one of the most influential teachers in my educational journey.

Thank you once again for everything you have done for me.

With deepest gratitude and respect,
[Your Name]`},

    { id:9, category:'letters', difficulty:'advanced', title:'Job Application Letter',
      preview:'Dear Hiring Manager, I am writing to express my interest in the part-time position at your bookstore...',
      fullText:`Dear Hiring Manager,

I am writing to express my interest in the part-time sales assistant position at BookWorld that was advertised on your website. As a passionate reader and responsible student, I believe I would be an excellent addition to your team.

I am currently a high school student in my final year. Although I do not have formal work experience in retail, I have developed relevant skills through various activities, including volunteering at our school library for the past two years.

I am also the treasurer of our school's book club, where I manage our budget and organize events. This role has helped me develop organizational skills and the ability to work as part of a team.

What attracts me to BookWorld is your reputation for excellent customer service. I have been a customer at your store for years and would be honored to become part of such a team.

I have attached my resume for your review. I am available for an interview at your convenience.

Thank you for considering my application.

Sincerely,
[Your Name]`},

    // DIALOGUES
    { id:10, category:'dialogues', difficulty:'beginner', title:'At the Restaurant',
      preview:'Waiter: Good evening! Welcome to The Garden Restaurant. Do you have a reservation?',
      fullText:`Waiter: Good evening! Welcome to The Garden Restaurant. Do you have a reservation?

Customer: Yes, I have a reservation for two under the name Smith.

Waiter: Perfect! Please follow me to your table. Here you are — a nice quiet table by the window. Is this okay?

Customer: Yes, this is perfect. Thank you.

Waiter: Here are your menus. Can I get you something to drink while you decide?

Customer: I'll have a glass of water, please. What is today's special?

Waiter: Today's special is grilled salmon with roasted vegetables and mashed potatoes. It's very popular.

Customer: That sounds delicious. I'll have that, please.

Waiter: Excellent choice! How would you like your salmon cooked?

Customer: Medium, please.

(Later, after the meal)

Waiter: How was everything? Did you enjoy your meal?

Customer: It was excellent! The salmon was cooked perfectly.

Waiter: I'm so glad! Would you like to see our dessert menu?

Customer: No, thank you. Just the check, please.

Waiter: Of course. We hope to see you again soon!`},

    { id:11, category:'dialogues', difficulty:'beginner', title:'Asking for Directions',
      preview:'Tourist: Excuse me, could you help me? I\'m looking for the Central Library.',
      fullText:`Tourist: Excuse me, could you help me? I'm looking for the Central Library.

Local: Of course! The Central Library is not too far from here. Are you walking?

Tourist: Yes. Is it within walking distance?

Local: Yes, about a fifteen-minute walk. Do you see that tall building with the clock tower?

Tourist: Yes, I can see it.

Local: Walk straight toward that clock tower. When you reach it, you'll see a large intersection. Cross it and turn left onto Main Street.

Tourist: Main Street — got it. Then what?

Local: Walk along Main Street for about two blocks. You'll see a park on your right. The library is right next to the park — a large brick building with white columns. You can't miss it.

Tourist: So — straight to the clock tower, left on Main Street, two blocks, next to the park?

Local: Exactly! You've got it.

Tourist: Is the library open today?

Local: Yes, on weekdays it's open from 9 AM to 7 PM.

Tourist: Perfect, thank you so much!

Local: You're welcome! Enjoy your visit. Have a great day!`},

    { id:12, category:'dialogues', difficulty:'advanced', title:'Job Interview Conversation',
      preview:'Interviewer: Good morning! Please have a seat. Can you tell me about yourself?',
      fullText:`Interviewer: Good morning! Please have a seat. How are you today?

Candidate: Good morning! I'm doing well, thank you. How are you?

Interviewer: I'm great, thanks. Let's begin — can you tell me a little about yourself?

Candidate: My name is Sarah Chen, and I recently graduated with a degree in Computer Science. During my studies, I completed two internships in web development. I'm passionate about creating user-friendly applications.

Interviewer: What made you interested in applying here?

Candidate: I've been following your company for some time and am impressed by your innovative approach. The role aligns perfectly with my career goals, and I believe my skills would make me a valuable addition to your team.

Interviewer: Can you describe a challenging project you worked on?

Candidate: During my last internship, I redesigned the company's internal database system. I had to learn a new system quickly and coordinate with different departments under a tight deadline.

Interviewer: How did you overcome those challenges?

Candidate: I broke the project into smaller tasks, dedicated extra hours to learning the system, and held regular feedback meetings. In the end, I completed it on time, and it improved efficiency by 40%.

Interviewer: What do you consider your greatest strength?

Candidate: My ability to adapt and learn quickly. I also have strong communication skills — I can explain technical concepts to non-technical people clearly.

Interviewer: Do you have any questions for me?

Candidate: Yes — could you tell me about the team I'd be working with, and what opportunities exist for professional development?

Interviewer: Great questions. We'll be in touch within the next week.

Candidate: Thank you very much. I look forward to hearing from you!`},

    // PARAGRAPHS
    { id:13, category:'paragraphs', difficulty:'beginner', title:'Description of My Hometown',
      preview:'My hometown is a small coastal city called Riverside, located in the southern part of the country...',
      fullText:`My hometown is a small coastal city called Riverside, located in the southern part of the country. It is a beautiful place where the river meets the ocean, creating stunning views and a peaceful atmosphere. The city has a population of about 50,000 people, which makes it feel friendly and close-knit while still offering modern amenities.

What I love most about Riverside is its perfect blend of natural beauty and urban convenience. The beaches are clean and peaceful, ideal for morning walks or watching the sunset. The old town area features charming cobblestone streets lined with small cafes, bookshops, and art galleries.

The people here are warm and welcoming, always ready to help neighbors and visitors alike. Although I have traveled to many places, Riverside will always be home to me because of its unique charm and the wonderful memories I have created there.`},

    { id:14, category:'paragraphs', difficulty:'intermediate', title:'Benefits of Reading Books',
      preview:'Reading books is one of the most beneficial habits a person can develop...',
      fullText:`Reading books is one of the most beneficial habits a person can develop. First and foremost, reading expands our knowledge and exposes us to new ideas, cultures, and perspectives that we might never encounter in our daily lives. It improves our vocabulary and language skills, making us better communicators.

Regular reading also enhances our concentration and focus, as it requires sustained attention unlike the brief, fragmented content we often consume on social media. Furthermore, reading reduces stress and can serve as a healthy escape from daily pressures.

Studies have shown that reading before bed can improve sleep quality. Additionally, reading fiction develops our empathy by allowing us to experience life through different characters' eyes. Whether it's fiction, non-fiction, poetry, or biography, every book offers something valuable.

In our fast-paced, digital world, taking time to read a physical book is not just educational — it's also a form of self-care that benefits both our minds and emotional well-being.`},

    { id:15, category:'paragraphs', difficulty:'beginner', title:'A Rainy Day',
      preview:'The rain started early in the morning, with dark clouds covering the sky...',
      fullText:`The rain started early in the morning, with dark clouds covering the sky and blocking the usual bright sunshine. The steady patter of raindrops against my window created a soothing rhythm that made me want to stay in bed a little longer.

When I finally got up, I could see the world outside transformed — the streets were glistening with water, trees were swaying gently in the wind, and small puddles were forming on the sidewalk. The air smelled fresh and clean, that distinctive earthy scent that only comes with rain.

I decided it was the perfect day to stay indoors with a good book and a cup of hot chocolate. As I sat by the window watching the rain, I felt a sense of peace and calm. There's something magical about rainy days — they slow down the usually hectic pace of life and give us permission to relax and be cozy.`},

    { id:16, category:'paragraphs', difficulty:'beginner', title:'My Favorite Sport',
      preview:'Basketball is my favorite sport, and I have been playing it for the past five years...',
      fullText:`Basketball is my favorite sport, and I have been playing it for the past five years. What I love most about basketball is that it combines physical fitness with strategy and teamwork. Every game is different and exciting, requiring quick thinking, good coordination, and constant communication with teammates.

Playing basketball has taught me valuable life lessons beyond the court. It has shown me the importance of practice and perseverance — when I first started, I could barely make a basket, but with regular practice, my skills improved significantly.

The sport has also taught me about teamwork and trust, as basketball is not a game you can win alone. Whether I'm playing in a competitive game or just shooting hoops with friends, basketball brings me joy and helps me stay active, focused, and connected with others who share my passion for the sport.`},

    // STORY WRITING
    { id:17, category:'stories', difficulty:'beginner', title:'The Lost Puppy',
      preview:'One rainy afternoon, Maya found a tiny puppy shivering beneath the old oak tree at the end of her street...',
      fullText:`One rainy afternoon, Maya found a tiny puppy shivering beneath the old oak tree at the end of her street. Its fur was soaking wet and its big brown eyes looked up at her with a mixture of fear and hope. Without a second thought, Maya scooped the puppy up in her arms and ran home.

Her mother was not pleased at first. "We can't keep a stray dog," she said, crossing her arms. But when she saw the tiny creature trembling in Maya's hands, her expression softened. "Just for tonight," she said. "We'll look for its owner tomorrow."

Maya dried the puppy with an old towel, gave it warm milk, and named it Biscuit. That night, Biscuit curled up at the foot of Maya's bed and slept soundly.

The next morning, Maya made posters and walked through the neighborhood asking if anyone had lost a puppy. By afternoon, an elderly man named Mr. Patel came to the door, his eyes red from crying. "That's Coco," he said softly. "I've been searching all night."

Maya felt a pang in her chest as she handed Biscuit — Coco — back to Mr. Patel. He shook her hand warmly. "You're a very kind girl," he said. "Would you like to visit Coco anytime you want?"

Maya smiled. She had done the right thing, and somehow, that felt better than keeping the puppy all to herself.`},

    { id:18, category:'stories', difficulty:'intermediate', title:'The Old Lighthouse',
      preview:'Nobody had entered the lighthouse at the edge of Crescent Bay for thirty years — until the night Eli\'s boat capsized...',
      fullText:`Nobody had entered the lighthouse at the edge of Crescent Bay for thirty years — until the night Eli's boat capsized.

The storm had come without warning, turning the calm sea into a churning mass of black water. Eli had been out fishing alone when the waves swallowed his small boat in minutes. He managed to grab a floating plank and kicked toward the distant light blinking on the shore.

When he finally dragged himself onto the rocks, shaking and breathless, he looked up and saw the lighthouse. Its beam swept slowly across the water, steady and unhurried, as if it had been waiting.

The door was unlocked. Inside, a small fire burned in an iron stove, and a lantern sat on the table, still warm. Eli looked around in confusion. There were no footprints, no coat on the hook, no sign of anyone — yet the fire was fresh.

He spent the night there, wrapped in a dusty blanket he found on a shelf. In the morning, the sea was glass-smooth and the sun rose gold over the water.

When Eli returned to the village and told his story, old Mrs. Calloway looked at him strangely. "That lighthouse has been abandoned since old Thomas died in 1993," she said. "He was the last keeper. They say he promised he'd keep the light burning no matter what."

Eli looked back toward the cliff. The lighthouse stood still and silent in the daylight. But he had been there. He had felt the warmth of that fire.

And he had been saved.`},

    { id:19, category:'stories', difficulty:'advanced', title:'The Last Library',
      preview:'In a city where books had been outlawed for twenty years, Ada kept the last one hidden beneath the floorboards...',
      fullText:`In a city where books had been outlawed for twenty years, Ada kept the last one hidden beneath the floorboards of her kitchen.

She didn't know what made her hide it when the officers came with their black carts and their polite instructions. Everyone else had handed their books over without argument. But Ada had pressed the small green volume against her chest and walked calmly to the kitchen while the officers searched the bedroom. It was a book of poetry — not useful, not dangerous, just beautiful. That was enough reason to keep it.

For years she read it only at night, by the light of a single candle, with the curtains drawn. She knew the poems by heart now, but she still liked the feeling of the pages — rough at the edges, soft in the middle, smelling faintly of something she couldn't name.

Then one evening, a girl appeared at her door. She was perhaps fifteen, with sharp eyes and muddy boots. "Someone said you might have something to read," the girl said quietly.

Ada stared at her for a long moment. Then she stepped aside and let her in.

That night, she read aloud for the first time in twenty years. The girl sat cross-legged on the floor and listened without moving, her eyes wide.

By the end of the following month, there were twelve of them, gathering twice a week in Ada's small kitchen, sitting in a circle around a single candle.

A library, Ada thought, doesn't need walls. It only needs people willing to remember.`},

    // SPEECHES
    { id:20, category:'speeches', difficulty:'beginner', title:'Welcome Speech for New Students',
      preview:'Good morning everyone. On behalf of the student council, I would like to warmly welcome all new students...',
      fullText:`Good morning everyone.

On behalf of the student council, I would like to warmly welcome all new students to Green Valley High School. We are so glad you are here, and I hope that from today, this school begins to feel like a second home to you.

I know that starting at a new school can feel a little scary. New faces, new classrooms, new rules — it can be a lot to take in. But I want you to know that every single person in this hall has been exactly where you are now. We all started as the new student once. And we all found our way.

This school has so much to offer you — incredible teachers who genuinely care about your success, a wide range of clubs and sports and activities, and most importantly, the chance to discover who you are and what you are capable of.

My advice to you is simple: be curious. Ask questions. Try things you've never tried before. Don't be afraid to make mistakes, because that is how all of us learn.

And if you ever feel lost or overwhelmed, please remember that help is always available — from your teachers, from the student council, and from your classmates.

Welcome to Green Valley High School. We are very happy to have you with us.

Thank you.`},

    { id:21, category:'speeches', difficulty:'intermediate', title:'Speech on the Importance of Reading',
      preview:'Good afternoon, teachers and fellow students. Today I want to talk about something that has quietly changed my life — reading...',
      fullText:`Good afternoon, teachers and fellow students.

Today I want to talk about something that has quietly changed my life — reading.

I know what some of you are thinking. Reading? Isn't that what we're forced to do for homework? But I'm not talking about reading because you have to. I'm talking about reading because you want to. And I promise you, there is a difference.

When I was eleven years old, I was given a book by my grandmother. She said, "This one will take you somewhere." I didn't believe her. I thought books were just long, slow things that adults liked. But that night I started reading, and I couldn't stop. I stayed up until two in the morning, and when I finally put the book down, I felt like I had lived an entirely different life.

That's what reading does. It takes you to places you've never been, introduces you to people who don't exist, and somehow, teaches you things about yourself that you never knew.

Studies show that regular reading improves vocabulary, concentration, empathy, and even reduces stress. But you don't need a study to tell you that. You just need to open a book and try.

So my challenge to you today is this: pick up one book — just one — that has nothing to do with school. Let yourself get lost in it. You might be surprised where it takes you.

Thank you.`},

    { id:22, category:'speeches', difficulty:'advanced', title:'Farewell Speech by a Graduating Student',
      preview:'Principal, teachers, parents, and my fellow graduating students — today is a day I have imagined many times...',
      fullText:`Principal, teachers, parents, and my fellow graduating students —

Today is a day I have imagined many times. And now that it is finally here, I find that I have too many words and not enough time. So I will try to say what matters most.

Thank you.

Thank you to our teachers, who showed up every single day — not just to teach us mathematics or literature or science, but to teach us how to think, how to ask better questions, and how to keep going when things are hard. The lessons that will stay with us longest are not the ones in the textbooks. They are the ones you gave us in quiet moments — the encouragement after a failed exam, the honest feedback that pushed us to do better, the patience when we needed it most.

Thank you to our parents, who made countless sacrifices we will only fully understand when we are older.

And to my fellow graduates — we did it. But I want to be honest with you: this is not the end. It is not even close to the end. The world outside these gates is vast and complicated and wonderful and frightening, and we are not fully ready for it. Nobody is. The question is not whether you are ready. The question is whether you are willing.

Be willing to fail. Be willing to begin again. Be willing to change your mind when the evidence asks you to.

Carry your curiosity with you like a compass. It will not always tell you where to go — but it will always tell you that there is somewhere worth going.

Congratulations, Class of 2026. Now let's go.

Thank you.`},

    // POEMS
    { id:23, category:'poems', difficulty:'beginner', title:'The Morning',
      preview:'The sun climbs slowly over the hill, / The world is quiet, the air is still...',
      fullText:`The Morning

The sun climbs slowly over the hill,
The world is quiet, the air is still,
The birds begin their morning song,
A gentle melody all day long.

The dew sits soft on every leaf,
The night has gone, it brought relief,
The sky turns gold, then blue, then bright,
The world wakes up in morning light.

I breathe it in, this brand new day,
And think of all the things I'll say,
The paths I'll walk, the words I'll write,
The stars I'll count again at night.

Each morning is a gift, I know,
A chance to learn, to love, to grow,
To be a little more than before —
Today holds things worth waiting for.`},

    { id:24, category:'poems', difficulty:'intermediate', title:'My School',
      preview:'These halls have held a thousand dreams, / More than anything is what it seems...',
      fullText:`My School

These halls have held a thousand dreams,
More wonderful than anything it seems,
Where chalk and questions fill the air,
And curious minds are everywhere.

The classroom door swings open wide,
A world of knowledge waits inside,
Of rivers, numbers, words, and art,
Of history learned off by heart.

The teachers stand at the front with care,
Their patience given everywhere,
They plant the seeds of what we know,
Then step aside and watch us grow.

And when the final bell is rung,
And school songs have been sung,
We carry forward what was taught —
The lessons learned, the battles fought.

So here I stand and smile and say:
This school has made me who I am today.`},

    { id:25, category:'poems', difficulty:'advanced', title:'The River',
      preview:'The river does not ask permission / to carve its path through ancient stone...',
      fullText:`The River

The river does not ask permission
to carve its path through ancient stone,
it simply moves with quiet ambition,
content to find its way alone.

It does not grieve the rocks it passes,
nor mourn the bridges overhead,
it gathers from the winter masses
and gives itself to lakes instead.

How strange to be a thing of motion,
to carry silt and broken light,
to mirror clouds without devotion
and turn to silver every night.

I think of all the things I've borrowed —
a borrowed name, a borrowed tongue —
and all the grief I've never swallowed,
the songs I left forever young.

Perhaps the river knows what we don't:
that moving through is not the same as gone,
that everything we pass is something we become,
and even the sea was once a stone.`},

    // BOOK REVIEWS
    { id:26, category:'bookreviews', difficulty:'beginner', title:'Review: Charlotte\'s Web',
      preview:'Charlotte\'s Web by E.B. White is one of the most beloved children\'s books ever written...',
      fullText:`Review: Charlotte's Web by E.B. White

Charlotte's Web by E.B. White is one of the most beloved children's books ever written, and after reading it, it is easy to understand why. First published in 1952, this gentle and moving story has touched the hearts of readers for generations.

The story follows Wilbur, a young pig who is saved from being slaughtered by the extraordinary kindness of Charlotte, a spider who lives in his barn. Charlotte comes up with a remarkable plan to save Wilbur's life — she weaves words into her web to convince the humans that Wilbur is special. The friendship between these two unlikely animals is the heart of the book.

What makes Charlotte's Web so memorable is the way it deals with big themes — friendship, loyalty, life, and death — in a way that is honest but never frightening. The ending is genuinely moving, and I found myself with tears in my eyes despite knowing the story was about a spider and a pig.

E.B. White's writing is simple but beautiful. His descriptions of the barn, the seasons, and the animals feel real and warm. The characters are lovable, especially Charlotte herself, who is wise, kind, and selfless.

I would recommend Charlotte's Web to readers of all ages. It is a quick read, but the lessons it teaches about love and friendship will stay with you for a long time.

Rating: 5 out of 5 stars`},

    { id:27, category:'bookreviews', difficulty:'intermediate', title:'Review: The Giver',
      preview:'The Giver by Lois Lowry is a thought-provoking novel that asks important questions about freedom, memory, and what it means to be truly human...',
      fullText:`Review: The Giver by Lois Lowry

The Giver by Lois Lowry is a thought-provoking novel that asks important questions about freedom, memory, and what it means to be truly human. First published in 1993, it remains one of the most powerful works of young adult fiction ever written.

The story is set in a seemingly perfect society called "the Community," where there is no war, no hunger, no pain — and no choice. Twelve-year-old Jonas is selected for a special role: he will become the new Receiver of Memory, the only person in the Community who holds the memories of the world before — color, music, snow, and love.

As Jonas begins to receive these memories from the old Receiver (called the Giver), he starts to see his world very differently. He realizes that what looks like perfection is actually a kind of emptiness. The Community has erased everything that makes life meaningful in order to eliminate suffering.

Lois Lowry's writing is clear and controlled, which makes the story all the more powerful. The contrast between the flat, colorless life of the Community and the vivid memories Jonas receives is brilliantly handled.

The Giver is the kind of book that stays with you long after you've finished it. It made me think about the value of pain and difference, and why a world without them would not truly be a world at all.

I would strongly recommend this book to anyone aged twelve and above.

Rating: 5 out of 5 stars`},

    { id:28, category:'bookreviews', difficulty:'advanced', title:'Review: To Kill a Mockingbird',
      preview:'Harper Lee\'s To Kill a Mockingbird is one of the great American novels — a book about justice, childhood, and the courage it takes to do what is right...',
      fullText:`Review: To Kill a Mockingbird by Harper Lee

Harper Lee's To Kill a Mockingbird is one of the great American novels — a book about justice, childhood, and the courage it takes to do what is right in a world that does not always reward it. Published in 1960, it won the Pulitzer Prize and has never gone out of print.

The story is narrated by Scout Finch, a young girl growing up in the fictional town of Maycomb, Alabama, during the 1930s. Her father, Atticus Finch, is a lawyer who agrees to defend Tom Robinson, a Black man falsely accused of a serious crime. The novel follows Scout and her brother Jem as they watch their father do the right thing in the face of a deeply prejudiced community.

What makes this novel remarkable is the way it presents its moral argument through the eyes of a child. Scout does not fully understand everything she witnesses, and that distance gives the reader space to feel the weight of what is happening without being lectured. The injustice is made more painful precisely because it is seen through innocent eyes.

Atticus Finch is one of literature's most enduring moral figures — calm, principled, and deeply human. His famous line about climbing inside another person's skin and walking around in it remains one of the most elegant arguments for empathy ever written.

To Kill a Mockingbird is a challenging but essential read. It has things to say about race, justice, and human dignity that remain urgently relevant today.

Rating: 5 out of 5 stars`},

    // DIARY ENTRIES
    { id:29, category:'diary', difficulty:'beginner', title:'First Day at a New School',
      preview:'Dear Diary, Today was the most nerve-wracking day of my life. It was my first day at Westfield High School...',
      fullText:`Dear Diary,

Today was the most nerve-wracking day of my life. It was my first day at Westfield High School, and I honestly didn't know how it was going to go.

Mum dropped me off at the gate at 8:15. I stood there for a full minute before I made myself walk through. The school is so much bigger than my old one — the corridors seem to go on forever, and everyone seemed to know exactly where they were going except me.

I got lost trying to find my homeroom and ended up in the science lab by mistake. A girl named Priya found me looking confused and walked me to the right class. She was so kind about it. She even sat next to me.

Lunch was the hardest part. I didn't know where to sit. But Priya came and found me again and introduced me to her friends. We talked about music mostly. They like the same bands I do, which felt like a small miracle.

By the end of the day, I was exhausted but not miserable, which I count as a success.

Maybe this will be okay after all.

— Lily`},

    { id:30, category:'diary', difficulty:'intermediate', title:'The Night Before the Exam',
      preview:'Dear Diary, It is 11:47 PM and I should absolutely be asleep right now. Tomorrow is the science exam...',
      fullText:`Dear Diary,

It is 11:47 PM and I should absolutely be asleep right now. Tomorrow is the science exam — the big one, the one that counts for 40% of our grade — and instead of sleeping I am lying here with my notes scattered around me, re-reading the same paragraph about photosynthesis for the fifth time.

I have studied. I know I have studied. But somehow, the moment I close my textbook, every single fact drains out of my head like water through a sieve.

Mum knocked on my door an hour ago and told me to turn off the light. I said I would. I lied.

The truth is I'm scared. Not just about the exam — about what it means. About whether I'm clever enough, whether I've worked hard enough, whether I belong in the top science class at all. Sometimes I feel like everyone else just understands things instinctively, and I'm the only one who has to fight for every mark.

But then I think about what Mr. Hassan told us last week: "Feeling nervous means you care. And caring is the first requirement for doing well."

I'm going to put the notes away now. I'm going to drink some water and close my eyes.

Whatever happens tomorrow, I did my best. And I suppose that has to be enough.

Goodnight.

— Nadia`},

    { id:31, category:'diary', difficulty:'advanced', title:'A Day I Won\'t Forget',
      preview:'Dear Diary, I have been trying to write this entry for three days now. Every time I start, I don\'t know how to say what I want to say...',
      fullText:`Dear Diary,

I have been trying to write this entry for three days now. Every time I start, I don't know how to say what I want to say. But I think if I don't write it down soon, it will just become a feeling without a shape, and I don't want that.

On Saturday, Grandpa and I drove out to the coast — just the two of us, the way we used to when I was small. We went to the same beach we always went to, the one with the grey pebbles and the broken pier. We brought a flask of tea and two blankets and sat on the stones for about two hours without saying very much at all.

At one point Grandpa said, "You know, I used to bring your mother here when she was your age." I didn't say anything, because I knew he wasn't really talking to me. He was talking to the water.

We ate fish and chips in the car on the way home, the paper bags going see-through with grease. Grandpa laughed at something on the radio — a proper laugh, the kind that crinkles his whole face — and in that moment I thought: I want to remember this exactly. The smell of vinegar and salt. The radio crackling. His laugh.

I don't know why I felt sad on the drive home. Nothing bad happened. Everything was fine.

Maybe that's exactly why.

— James`},

    // DEBATE SCRIPTS
    { id:32, category:'debates', difficulty:'intermediate', title:'Should Students Have Homework?',
      preview:'Debate Motion: This House Believes That Schools Should Abolish Homework...',
      fullText:`Debate Motion: This House Believes That Schools Should Abolish Homework

SPEAKER 1 — FOR THE MOTION:

Good afternoon. I stand before you today to argue that homework should be abolished from our schools.

First, let us consider the evidence. Multiple studies — including a well-known Stanford University study — have found that excessive homework causes high levels of stress and anxiety in students, contributes to sleep deprivation, and actually hinders academic performance rather than improving it.

Second, homework deepens inequality. Students from wealthier families have quiet study spaces, access to the internet, and parents who can help them. Students from disadvantaged backgrounds often have none of these things. Homework does not level the playing field — it widens the gap.

Third, children need time. They need time to play, to rest, to develop social skills, to pursue hobbies, to simply be children. We are asking them to spend six hours in school and then come home and continue working. This is not healthy, and it is not fair.

For these reasons, I urge you to support the motion.

---

SPEAKER 2 — AGAINST THE MOTION:

Thank you. I respect my opponent's passion, but I must respectfully disagree.

Homework, when set thoughtfully, is one of the most powerful tools for learning. It reinforces what students have learned in class, develops independent study skills, and teaches responsibility — qualities they will need for the rest of their lives.

The problem is not homework itself, but excessive or poorly designed homework. The solution is not to abolish it entirely, but to reform it: set less of it, make it meaningful, and ensure all students have the support they need to complete it.

Furthermore, research shows that students who regularly review material at home retain information far more effectively than those who don't. Regular practice is the foundation of deep learning.

I urge you to oppose the motion.`},

    { id:33, category:'debates', difficulty:'advanced', title:'Should Social Media Be Banned for Under 16s?',
      preview:'Debate Motion: This House Would Ban Social Media for Children Under the Age of 16...',
      fullText:`Debate Motion: This House Would Ban Social Media for Children Under the Age of 16

SPEAKER 1 — FOR THE MOTION:

The evidence is no longer ambiguous. Social media is causing measurable harm to young people, and we have a responsibility to act.

Multiple peer-reviewed studies have now linked heavy social media use in adolescents to increased rates of anxiety, depression, body image issues, and sleep disruption — particularly in girls. The algorithms that power these platforms are not neutral. They are designed to maximize engagement, which often means surfacing the most emotionally provocative content. Young people's developing brains are uniquely vulnerable to these manipulations.

We already restrict young people's access to alcohol, tobacco, gambling, and adult content — because we recognize that certain things can cause harm that children are not yet equipped to navigate. Social media, the data now suggests, belongs in this category.

This is not about overprotecting young people. It is about giving them time to develop the emotional resilience, critical thinking skills, and stable sense of identity that will allow them to engage with social media safely when they are older.

I support the motion.

---

SPEAKER 2 — AGAINST THE MOTION:

My opponent raises genuine concerns — but an outright ban is the wrong solution.

First, enforcement is practically impossible. Young people will simply use false ages to register, as they already do. A ban creates the illusion of protection without providing it.

Second, social media is not only harmful. For many young people — particularly those who are isolated, LGBTQ+, or living in remote areas — social media provides vital community, support, and connection. A blanket ban would cut off access to something genuinely valuable.

Third, the answer to the harms of social media is education, not prohibition. We should be teaching young people how to use these platforms critically and safely — just as we teach them to read, think, and question.

Banning social media will not make young people safer. It will simply make them less prepared.

I oppose the motion.`},

    { id:34, category:'debates', difficulty:'beginner', title:'Is Technology Making Us Less Social?',
      preview:'Debate Motion: This House Believes That Technology Is Making People Less Social...',
      fullText:`Debate Motion: This House Believes That Technology Is Making People Less Social

SPEAKER 1 — FOR THE MOTION:

Good afternoon everyone. I am here to argue that technology — and in particular, smartphones and social media — is making us less social.

Think about the last time you sat in a restaurant. How many people were looking at their phones instead of talking to the people in front of them? Think about the last family dinner where someone was scrolling through Instagram. Think about the last time you chose to text someone rather than pick up the phone and call them.

Technology encourages us to replace real, meaningful human connection with a shallow digital substitute. We have more "followers" and "friends" online than ever before, but studies consistently show that rates of loneliness, especially among young people, are rising.

True social connection requires presence, eye contact, and vulnerability — things a screen simply cannot replicate.

I urge you to support this motion.

---

SPEAKER 2 — AGAINST THE MOTION:

I would like to offer a different perspective.

Technology has not made us less social. It has changed what being social looks like — and for millions of people, it has made genuine connection possible in ways that never existed before.

My grandmother lives on the other side of the world. Without technology, I would speak to her perhaps twice a year. Instead, we video call every Sunday. Technology has not replaced that relationship — it has made it possible.

For people with social anxiety, physical disabilities, or geographic isolation, online communities provide real friendship and support. For young people who are different in some way — who don't fit in at school — the internet can be a lifeline.

Yes, we should be mindful about how we use technology. But the tool is not the problem. We are.

I oppose the motion.`}
];

// ── Utilities ──────────────────────────────────────────────────────
function countWords(text) {
    return text.trim().split(/\s+/).length;
}

function getFavorites() {
    try { return JSON.parse(localStorage.getItem('elFavorites') || '[]'); }
    catch { return []; }
}

function saveFavorites(favs) {
    localStorage.setItem('elFavorites', JSON.stringify(favs));
}

function isFavorite(id) {
    return getFavorites().includes(id);
}

function toggleFavorite(id) {
    let favs = getFavorites();
    if (favs.includes(id)) {
        favs = favs.filter(f => f !== id);
    } else {
        favs.push(id);
    }
    saveFavorites(favs);
    return favs.includes(id);
}

// ── Search (runs on every page) ────────────────────────────────────
function initSearch() {
    const searchBar = document.getElementById('searchBar');
    const searchResults = document.getElementById('searchResults');
    if (!searchBar) return;

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.trim().toLowerCase();
        if (!query) { searchResults.classList.remove('active'); searchResults.innerHTML = ''; return; }

        const results = contentDatabase.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.preview.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        ).slice(0, 8);

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No results found.</div>';
            searchResults.classList.add('active');
            return;
        }

        searchResults.innerHTML = results.map(item => `
            <div class="search-result-item" data-id="${item.id}">
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-meta">${item.category} · ${item.difficulty}</div>
                <div class="search-result-preview">${item.preview}</div>
            </div>
        `).join('');
        searchResults.classList.add('active');

        searchResults.querySelectorAll('.search-result-item').forEach(el => {
            el.addEventListener('click', () => {
                openModal(parseInt(el.dataset.id));
                searchResults.classList.remove('active');
                searchBar.value = '';
            });
        });
    });

    document.addEventListener('click', e => {
        if (!searchBar.contains(e.target) && !searchResults.contains(e.target))
            searchResults.classList.remove('active');
    });
}

// ── Content Grid (category pages) ─────────────────────────────────
function initContentPage(category) {
    const grid = document.getElementById('contentGrid');
    if (!grid) return;

    const items = contentDatabase.filter(i => i.category === category);

    grid.innerHTML = items.map(item => {
        const words = countWords(item.fullText);
        const fav = isFavorite(item.id);
        return `
        <div class="content-card" data-id="${item.id}">
            <div class="card-top">
                <span class="content-badge">${item.category}</span>
                <span class="difficulty-badge ${item.difficulty}">${item.difficulty}</span>
            </div>
            <h3>${item.title}</h3>
            <p class="content-preview">${item.preview}</p>
            <div class="card-footer">
                <span class="word-count">${words} words</span>
                <div style="display:flex;align-items:center;gap:12px;">
                    <button class="fav-btn ${fav ? 'saved' : ''}" data-id="${item.id}" title="${fav ? 'Remove from favourites' : 'Save to favourites'}">${fav ? '❤️' : '🤍'}</button>
                    <span class="read-more">Read more →</span>
                </div>
            </div>
        </div>`;
    }).join('');

    grid.querySelectorAll('.content-card').forEach(card => {
        card.addEventListener('click', e => {
            if (e.target.classList.contains('fav-btn')) return;
            openModal(parseInt(card.dataset.id));
        });
    });

    grid.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const saved = toggleFavorite(id);
            btn.textContent = saved ? '❤️' : '🤍';
            btn.classList.toggle('saved', saved);
            btn.title = saved ? 'Remove from favourites' : 'Save to favourites';
        });
    });
}

// ── Modal ──────────────────────────────────────────────────────────
function openModal(id) {
    const item = contentDatabase.find(i => i.id === id);
    if (!item) return;
    const words = countWords(item.fullText);

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-meta">
                <span class="modal-badge">${item.category}</span>
                <span class="difficulty-badge ${item.difficulty}">${item.difficulty}</span>
                <span class="modal-wordcount">${words} words</span>
            </div>
            <h2>${item.title}</h2>
            <div class="modal-text">${item.fullText}</div>
            <div class="modal-actions">
                <button class="copy-btn">📋 Copy Text</button>
                <button class="print-btn">🖨️ Print</button>
            </div>
        </div>`;
    document.body.appendChild(modal);

    modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
    document.addEventListener('keydown', function esc(e) {
        if (e.key === 'Escape') { modal.remove(); document.removeEventListener('keydown', esc); }
    });

    modal.querySelector('.copy-btn').addEventListener('click', function() {
        navigator.clipboard.writeText(item.fullText).then(() => {
            this.textContent = '✅ Copied!';
            setTimeout(() => { this.textContent = '📋 Copy Text'; }, 2000);
        });
    });

    modal.querySelector('.print-btn').addEventListener('click', () => window.print());
}

// ── Back to Top ────────────────────────────────────────────────────
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 300);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Homepage search redirect ───────────────────────────────────────
function initHomepageSearch() {
    // On homepage, clicking a search result opens a modal directly
}

// ── Init ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    initBackToTop();

    // Auto-detect category page
    const grid = document.getElementById('contentGrid');
    if (grid && grid.dataset.category) {
        initContentPage(grid.dataset.category);
    }
});
