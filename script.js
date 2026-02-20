// Sample content database - You can easily add more content here
const contentDatabase = [
    // ESSAYS
    {
        id: 1,
        category: 'essays',
        title: 'My Summer Vacation',
        preview: 'Last summer was one of the most memorable times of my life. I visited my grandparents in the countryside...',
        fullText: `Last summer was one of the most memorable times of my life. I visited my grandparents in the countryside, and it was a completely different experience from my usual city life.

The countryside was peaceful and beautiful. Every morning, I woke up to the sound of birds singing instead of car horns. The air was fresh and clean, filled with the scent of flowers and grass. My grandparents' house was surrounded by green fields and tall trees that provided shade during the hot afternoons.

During my stay, I helped my grandfather in his vegetable garden. He taught me how to plant seeds, water the plants, and take care of them. It was hard work, but I felt proud when I saw the vegetables growing. I also learned to appreciate where our food comes from and how much effort farmers put into growing it.

In the evenings, my grandmother would tell me stories about her childhood. Her stories were fascinating and taught me about life in the past. We would sit on the porch, watching the sunset paint the sky in beautiful colors of orange, pink, and purple.

One of the highlights of my vacation was swimming in the nearby river with the local children. The water was cool and refreshing. We played games, splashed each other, and had so much fun. I made many new friends who showed me around the village and taught me about their daily lives.

This summer vacation taught me important lessons about simplicity, hard work, and the beauty of nature. I realized that happiness doesn't always come from expensive things or technology. Sometimes, the simple pleasures of life, like spending time with family and enjoying nature, are the most valuable. I returned home with wonderful memories and a new appreciation for the countryside.`
    },
    {
        id: 2,
        category: 'essays',
        title: 'The Importance of Education',
        preview: 'Education is the foundation of a successful life and a developed society. It opens doors to opportunities...',
        fullText: `Education is the foundation of a successful life and a developed society. It opens doors to opportunities, broadens our perspectives, and empowers us to achieve our dreams. In today's world, education is more important than ever before.

First and foremost, education provides us with knowledge and skills that are essential for our future careers. It teaches us how to think critically, solve problems, and make informed decisions. Whether we want to become doctors, engineers, teachers, or artists, education gives us the tools we need to succeed in our chosen fields.

Moreover, education helps us become better citizens. It teaches us about our rights and responsibilities, helps us understand different cultures and viewpoints, and encourages us to participate in our communities. An educated society is more likely to be democratic, peaceful, and prosperous.

Education also promotes personal development. It boosts our confidence, improves our communication skills, and helps us discover our talents and interests. Through education, we learn not just from books but also from our experiences, our teachers, and our peers.

Furthermore, education is a powerful tool for breaking the cycle of poverty. It gives people from all backgrounds the opportunity to improve their lives and contribute to society. Studies have shown that educated individuals tend to have better health, higher incomes, and more stable families.

In conclusion, education is not just about getting good grades or finding a job. It is about becoming a well-rounded person who can think independently, contribute to society, and continue learning throughout life. We should value education and take advantage of every learning opportunity that comes our way.`
    },
    {
        id: 3,
        category: 'essays',
        title: 'My Best Friend',
        preview: 'Everyone needs a good friend in their life, and I am lucky to have found mine. My best friend Sarah...',
        fullText: `Everyone needs a good friend in their life, and I am lucky to have found mine. My best friend Sarah has been by my side for five years, and our friendship has only grown stronger with time.

I first met Sarah when she transferred to our school in the sixth grade. She was shy and nervous on her first day, sitting alone during lunch. I decided to introduce myself, and we immediately connected over our shared love of reading and drawing. From that day forward, we became inseparable.

What makes Sarah such a wonderful friend is her kindness and understanding nature. She is always there to listen when I need to talk, whether I'm happy, sad, or confused. She never judges me and always offers helpful advice when I ask for it. When I went through a difficult time last year, she checked on me every day and helped me feel better.

Sarah is also incredibly loyal. She has stood up for me when others were unkind and has never shared my secrets with anyone. I know I can trust her completely, and that trust is the foundation of our friendship. We have promised to always be honest with each other, even when the truth is difficult to hear.

We share many interests, which makes spending time together easy and fun. We both love reading books, so we often exchange our favorites and discuss them. We also enjoy drawing together, going to the park, and watching movies. However, we also respect our differences. Sarah loves playing basketball, while I prefer swimming, but we support each other's interests.

Of course, like all friends, we sometimes disagree or have misunderstandings. But what makes our friendship special is that we always communicate openly and resolve our problems quickly. We have learned that apologizing and forgiving are important parts of maintaining a strong friendship.

In conclusion, Sarah is more than just my best friend; she is like a sister to me. Our friendship has taught me about loyalty, trust, and the importance of having someone who truly understands you. I am grateful for her presence in my life and hope our friendship will last forever.`
    },
    {
        id: 4,
        category: 'essays',
        title: 'How Technology Has Changed Our Lives',
        preview: 'In the past few decades, technology has transformed nearly every aspect of our daily lives...',
        fullText: `In the past few decades, technology has transformed nearly every aspect of our daily lives. From how we communicate to how we work, learn, and entertain ourselves, technology has brought both amazing benefits and new challenges.

One of the most significant changes is in communication. In the past, people had to wait days or weeks for letters to arrive. Now, we can instantly message, call, or video chat with anyone around the world. Social media platforms allow us to stay connected with friends and family, share our experiences, and meet new people who share our interests.

Technology has also revolutionized education. Students today have access to unlimited information through the internet. Online courses, educational videos, and digital libraries have made learning more accessible than ever before. Students can now study at their own pace and explore subjects that interest them, regardless of where they live.

In the workplace, technology has increased productivity and created new job opportunities. Many tasks that once took hours can now be completed in minutes with the help of computers and software. Remote work has become common, allowing people to work from home and have more flexible schedules.

However, technology also presents challenges. Many people, especially young people, spend too much time on their phones and computers, which can affect their physical health and social skills. Cyberbullying and online privacy concerns are serious issues that we must address. Additionally, not everyone has equal access to technology, creating a digital divide between those who can afford it and those who cannot.

Despite these challenges, technology continues to advance rapidly. Artificial intelligence, renewable energy, and medical technology are just a few areas where innovations are improving our lives and solving global problems.

In conclusion, technology has brought tremendous changes to our world. While it offers many benefits, we must use it wisely and responsibly. We should embrace technology's potential while being mindful of its impact on our health, relationships, and society. The key is finding a balance between using technology to enhance our lives and not letting it control us.`
    },
    {
        id: 5,
        category: 'essays',
        title: 'A Memorable Day at School',
        preview: 'Last month, our school organized a science fair, and it turned out to be one of the most exciting days...',
        fullText: `Last month, our school organized a science fair, and it turned out to be one of the most exciting days of my school life. It was a day filled with creativity, learning, and fun that I will never forget.

For weeks before the fair, my classmates and I had been preparing our projects. I decided to create a model showing how solar panels work. I spent hours researching, gathering materials, and building my project. My parents helped me, and it became a fun family activity. Though it was challenging at times, I learned so much about renewable energy and felt proud of my work.

On the day of the science fair, the school gymnasium was transformed into a hub of scientific exploration. Tables were set up in rows, each displaying different projects. The creativity and hard work of my fellow students were impressive. There were projects on everything from volcanoes and the water cycle to robotics and space exploration.

The fair officially began when our principal gave an opening speech, encouraging us to be curious and never stop asking questions. Then, students, teachers, and parents walked around to view the projects. I was nervous at first when people approached my table, but I gained confidence as I explained my project. Many visitors asked interesting questions that made me think deeper about solar energy.

One of the best parts of the day was seeing my friends' projects. My best friend created a working model of the human digestive system, which was both educational and entertaining. Another classmate built a simple robot that could move obstacles, which amazed everyone who saw it.

The judges walked around carefully, examining each project and asking questions. I tried my best to answer their questions clearly and show my enthusiasm for my topic. Win or lose, I felt satisfied knowing I had done my best.

At the end of the day, there was an award ceremony. I was thrilled when I heard my name called for third place! But more than the award, what made the day memorable was the experience of learning, sharing ideas, and seeing the incredible work of my peers.

This science fair taught me that education is not just about textbooks and exams. It is about exploring, experimenting, and expressing our ideas. It also showed me that with dedication and creativity, we can achieve amazing things. That memorable day at school will always remind me to stay curious and passionate about learning.`
    },

    // LETTERS
    {
        id: 6,
        category: 'letters',
        title: 'Letter to a Friend',
        preview: 'Dear Maria, I hope this letter finds you in good health and high spirits. I am writing to share some exciting news...',
        fullText: `Dear Maria,

I hope this letter finds you in good health and high spirits. I am writing to share some exciting news with you and to hear about how you have been doing.

You will be happy to know that I recently won first prize in our school's art competition! I created a painting of our beautiful city park during sunset, and the judges really liked it. I wish you could have been there to see it. This achievement has motivated me to continue improving my artistic skills. I have even started taking extra art classes on weekends.

I also wanted to tell you about our upcoming school trip to the science museum next month. The teachers say we will get to see many interactive exhibits and even watch a planetarium show. I am very excited about it and wish you were still studying at our school so you could join us.

How is everything at your new school? Have you made new friends? I know moving to a new city was difficult for you, but I hope you are settling in well. Please tell me about your classes, teachers, and any interesting activities you have participated in. I miss our daily conversations and the fun times we had together.

My family is doing well. My younger brother just started learning to play the guitar, and while he is still a beginner, he practices every day. My parents send their warm regards to you and your family.

I hope we can meet during the upcoming holidays. It would be wonderful to catch up in person and spend time together like we used to. Please write back soon and let me know how you are doing. I am eagerly waiting to hear from you.

Take care and stay in touch!

With love and best wishes,
Your friend,
Alex`
    },
    {
        id: 7,
        category: 'letters',
        title: 'Complaint Letter to School Principal',
        preview: 'To: The Principal, Green Valley High School. Subject: Request for Improvement of School Library Facilities...',
        fullText: `To: The Principal
Green Valley High School

Subject: Request for Improvement of School Library Facilities

Respected Sir/Madam,

I am writing this letter on behalf of the students of Grade 10 to bring to your attention some concerns regarding our school library and to request improvements that would greatly benefit all students.

Our school library is an important resource for students who wish to study, research, and read for pleasure. However, we have noticed several issues that are affecting our ability to make full use of this facility.

First, the library has limited hours of operation. It currently closes at 3:00 PM, which is right after school ends. Many students who participate in after-school activities or who prefer to study in the library cannot access it. We respectfully request that the library hours be extended until at least 5:00 PM on weekdays.

Second, the library needs more updated books and resources. While we appreciate the classic literature available, we would benefit from more recent publications, especially in science, technology, and current affairs. Additionally, many students have requested more books in different languages to help them improve their language skills.

Third, the library needs better internet connectivity. The current Wi-Fi connection is slow and unreliable, making it difficult for students to conduct online research for projects and assignments. In today's digital age, reliable internet access in the library is essential.

Finally, we would appreciate more seating arrangements and study tables. During exam periods, the library becomes crowded, and many students cannot find a place to sit and study comfortably.

We understand that these improvements may require additional resources and planning. We are willing to help in any way we can, such as organizing fundraising events or volunteering to help maintain the library.

We believe that these improvements would significantly enhance the learning environment for all students and help us make better use of our school's resources. We would be grateful if you could consider our requests and perhaps arrange a meeting to discuss these matters further.

Thank you for your time and consideration. We look forward to your positive response.

Respectfully yours,

[Your Name]
Student Representative, Grade 10
Green Valley High School

Date: [Current Date]`
    },
    {
        id: 8,
        category: 'letters',
        title: 'Thank You Letter to Teacher',
        preview: 'Dear Mrs. Johnson, I am writing this letter to express my sincere gratitude for all the support and guidance...',
        fullText: `Dear Mrs. Johnson,

I am writing this letter to express my sincere gratitude for all the support and guidance you have provided me throughout this school year. Your dedication to teaching and your genuine care for your students have made a significant impact on my life.

When I first joined your English class, I struggled with writing essays and understanding complex literature. I often felt discouraged and thought I would never improve. However, your patient explanations, helpful feedback, and constant encouragement gave me the confidence to keep trying. You never made me feel bad about my mistakes; instead, you helped me learn from them.

I particularly appreciate the extra time you spent with me after school to review my essays and explain difficult concepts. Your willingness to help, even when you had other responsibilities, showed me how much you truly care about your students' success. Thanks to your guidance, my writing has improved significantly, and I now actually enjoy reading and analyzing literature.

Beyond academics, you have taught me valuable life lessons. You have shown me the importance of perseverance, critical thinking, and expressing my ideas clearly. You have also taught me to appreciate different perspectives and to be open-minded. These lessons will stay with me long after I leave your classroom.

Your enthusiasm for teaching is contagious. You make every lesson interesting and relevant to our lives. You do not just teach from the textbook; you share your own experiences and encourage us to think deeply about what we are learning. Your classroom is a place where students feel safe to ask questions and share their thoughts.

As I prepare to move on to the next grade, I want you to know that you have been one of the most influential teachers in my educational journey. You have not only helped me academically but have also inspired me to become a better person. I will always remember your kindness, patience, and dedication.

Thank you once again for everything you have done for me. I hope I can make you proud in the future by applying all the valuable lessons you have taught me.

With deepest gratitude and respect,

[Your Name]
[Grade and Section]
[Date]`
    },
    {
        id: 9,
        category: 'letters',
        title: 'Job Application Letter',
        preview: 'Dear Hiring Manager, I am writing to express my interest in the part-time position at your bookstore...',
        fullText: `Dear Hiring Manager,

I am writing to express my interest in the part-time sales assistant position at BookWorld that was advertised on your website. As a passionate reader and responsible student, I believe I would be an excellent addition to your team.

I am currently a high school student in my final year, and I am looking for part-time work that fits around my school schedule. I am available to work on weekends and some weekday afternoons. I am a hardworking, reliable person who takes pride in doing every job well.

Although I do not have formal work experience in retail, I have developed relevant skills through various activities. I have been volunteering at our school library for the past two years, where I help organize books, assist students in finding resources, and maintain the library's catalog system. This experience has taught me how to work with books, interact with different people, and provide helpful customer service.

I am also the treasurer of our school's book club, where I manage our budget, organize book purchases, and plan events. This role has helped me develop organizational skills, attention to detail, and the ability to work as part of a team.

I am familiar with many book genres and authors, and I enjoy recommending books to others based on their interests. I believe this knowledge would help me assist customers effectively and contribute to sales. I am also comfortable learning new computer systems and am quick to adapt to new tasks.

What attracts me to BookWorld is your store's reputation for excellent customer service and your wide selection of books. I have been a customer at your store for years and have always been impressed by the knowledgeable and friendly staff. I would be honored to become part of such a team.

I am a responsible and punctual person who values honesty and hard work. I am eager to learn and willing to take on any tasks needed. I am confident that my enthusiasm for books, combined with my customer service skills and strong work ethic, would make me a valuable employee.

I have attached my resume for your review. I would welcome the opportunity to discuss this position with you in person. I am available for an interview at your convenience and can be reached by phone at [phone number] or by email at [email address].

Thank you for considering my application. I look forward to hearing from you soon.

Sincerely,

[Your Name]
[Contact Information]
[Date]`
    },

    // DIALOGUES
    {
        id: 10,
        category: 'dialogues',
        title: 'At the Restaurant',
        preview: 'Waiter: Good evening! Welcome to The Garden Restaurant. Do you have a reservation?',
        fullText: `Waiter: Good evening! Welcome to The Garden Restaurant. Do you have a reservation?

Customer: Yes, I have a reservation for two under the name Smith.

Waiter: Perfect! Let me check... Yes, here it is. Mr. Smith, party of two. Please follow me to your table.

Customer: Thank you.

Waiter: Here you are. This is a nice quiet table by the window. Is this okay for you?

Customer: Yes, this is perfect. Thank you.

Waiter: You're welcome. Here are your menus. Can I get you something to drink while you decide on your order?

Customer: I'll have a glass of water, please. And could you tell me what today's special is?

Waiter: Certainly! Today's special is grilled salmon with roasted vegetables and mashed potatoes. It's very popular and highly recommended by our chef.

Customer: That sounds delicious. I think I'll have that. What about the portion size? Is it large?

Waiter: It's a good-sized portion, quite filling. It also comes with a small garden salad.

Customer: Perfect. I'll take the grilled salmon special, please.

Waiter: Excellent choice! And how would you like your salmon cooked?

Customer: Medium, please.

Waiter: Medium it is. And would you like any appetizers to start?

Customer: What do you recommend?

Waiter: Our soup of the day is butternut squash soup, and it's quite popular. We also have crispy calamari and bruschetta.

Customer: I'll start with the butternut squash soup, please.

Waiter: Great choice! So that's one butternut squash soup to start, followed by the grilled salmon special cooked medium, with a glass of water. Is there anything else I can get for you?

Customer: No, that will be all for now. Thank you.

Waiter: You're very welcome. I'll put your order in right away. Your soup should be out in about five minutes.

(Later, after the meal)

Waiter: How was everything? Did you enjoy your meal?

Customer: It was excellent! The salmon was cooked perfectly, and the vegetables were delicious.

Waiter: I'm so glad to hear that! Would you like to see our dessert menu?

Customer: No, thank you. I'm quite full. Just the check, please.

Waiter: Of course. I'll bring that right over for you.

Customer: Thank you for the wonderful service.

Waiter: It was my pleasure! We hope to see you again soon!`
    },
    {
        id: 11,
        category: 'dialogues',
        title: 'Asking for Directions',
        preview: 'Tourist: Excuse me, could you help me? I'm looking for the Central Library.',
        fullText: `Tourist: Excuse me, could you help me? I'm looking for the Central Library.

Local: Of course! The Central Library is not too far from here. Are you walking or do you have a car?

Tourist: I'm walking. Is it within walking distance?

Local: Yes, it's about a fifteen-minute walk from here. It's quite easy to find. Do you see that tall building with the clock tower?

Tourist: Yes, I can see it.

Local: Okay, so you'll walk straight down this street toward that clock tower. When you reach the tower, you'll see a large intersection.

Tourist: Should I cross the intersection?

Local: Yes, cross the intersection and turn left. You'll be on Main Street then. Walk along Main Street for about two blocks.

Tourist: Two blocks on Main Street, got it. What happens after that?

Local: After two blocks, you'll see a park on your right side. The library is right next to the park. It's a large brick building with white columns in front. You can't miss it.

Tourist: So it's straight to the clock tower, left on Main Street, two blocks, and it's next to the park?

Local: Exactly! You've got it.

Tourist: That's very helpful. Is the library open today?

Local: Yes, it should be open. On weekdays, it's open from 9 AM to 7 PM. On Saturdays, it closes at 5 PM.

Tourist: Perfect, thank you so much for your help!

Local: You're very welcome! Enjoy your visit to the library. If you get lost, just ask anyone - most people around here know where it is.

Tourist: I appreciate it. Have a great day!

Local: You too! Goodbye!`
    },
    {
        id: 12,
        category: 'dialogues',
        title: 'Job Interview Conversation',
        preview: 'Interviewer: Good morning! Please have a seat. How are you today?',
        fullText: `Interviewer: Good morning! Please have a seat. How are you today?

Candidate: Good morning! I'm doing well, thank you. How are you?

Interviewer: I'm great, thanks for asking. Let's begin. Can you tell me a little about yourself?

Candidate: Certainly. My name is Sarah Chen, and I recently graduated from State University with a degree in Computer Science. During my studies, I completed two internships where I worked on web development projects. I'm passionate about creating user-friendly applications and I'm always eager to learn new technologies.

Interviewer: That's impressive. What made you interested in applying for this position at our company?

Candidate: I've been following your company for some time, and I'm really impressed by your innovative approach to solving real-world problems through technology. The job description mentioned working on projects that have a social impact, which aligns perfectly with my career goals. I believe my skills in web development and my enthusiasm for learning would make me a valuable addition to your team.

Interviewer: Good to hear. Can you describe a challenging project you worked on and how you handled it?

Candidate: During my last internship, I was tasked with redesigning the company's internal database system. The existing system was outdated and causing delays. I had to learn a new database management system quickly and coordinate with different departments to understand their needs. It was challenging because I had a tight deadline and limited prior experience with that particular system.

Interviewer: How did you overcome those challenges?

Candidate: I created a detailed plan, breaking the project into smaller, manageable tasks. I dedicated extra hours to learning the new system through online courses and documentation. I also scheduled regular meetings with department heads to get their feedback throughout the process. In the end, I completed the project on time, and the new system improved efficiency by 40%.

Interviewer: Excellent problem-solving skills. What do you consider your greatest strength?

Candidate: I would say my greatest strength is my ability to adapt and learn quickly. Technology changes rapidly, and I've always been someone who embraces change rather than fears it. For example, when new programming languages or frameworks emerge, I take the initiative to learn them. I also think my communication skills are strong - I can explain technical concepts to non-technical people clearly.

Interviewer: And what about your weaknesses?

Candidate: I sometimes focus too much on perfecting details, which can slow me down. However, I've been working on this by setting clear priorities and deadlines for myself. I've learned that sometimes "good enough" is better than perfect, especially when working under time constraints. I'm getting better at finding the right balance.

Interviewer: That's good self-awareness. Do you have any questions for me about the position or our company?

Candidate: Yes, I do. Could you tell me more about the team I would be working with? And what opportunities are there for professional development and growth within the company?

Interviewer: Great questions. You would be working in a team of five developers, and we strongly encourage continuous learning. We provide training budgets for courses and conferences, and we have a mentorship program for new employees.

Candidate: That sounds wonderful. I really appreciate you taking the time to speak with me today.

Interviewer: Thank you for coming in. We'll be in touch within the next week regarding the next steps.

Candidate: Thank you very much. I look forward to hearing from you. Have a great day!

Interviewer: You too. Goodbye!`
    },

    // PARAGRAPHS
    {
        id: 13,
        category: 'paragraphs',
        title: 'Description of My Hometown',
        preview: 'My hometown is a small coastal city called Riverside, located in the southern part of the country...',
        fullText: `My hometown is a small coastal city called Riverside, located in the southern part of the country. It is a beautiful place where the river meets the ocean, creating stunning views and a peaceful atmosphere. The city has a population of about 50,000 people, which makes it feel friendly and close-knit while still offering modern amenities. What I love most about Riverside is its perfect blend of natural beauty and urban convenience. The beaches are clean and peaceful, ideal for morning walks or watching the sunset. The old town area features charming cobblestone streets lined with small cafes, bookshops, and art galleries. Meanwhile, the newer part of the city has shopping centers, restaurants, and excellent schools. The people here are warm and welcoming, always ready to help neighbors and visitors alike. Although I have traveled to many places, Riverside will always be home to me because of its unique charm and the wonderful memories I have created there.`
    },
    {
        id: 14,
        category: 'paragraphs',
        title: 'Benefits of Reading Books',
        preview: 'Reading books is one of the most beneficial habits a person can develop. First and foremost, reading expands...',
        fullText: `Reading books is one of the most beneficial habits a person can develop. First and foremost, reading expands our knowledge and exposes us to new ideas, cultures, and perspectives that we might never encounter in our daily lives. It improves our vocabulary and language skills, making us better communicators. Regular reading also enhances our concentration and focus, as it requires sustained attention unlike the brief, fragmented content we often consume on social media. Furthermore, reading reduces stress and can serve as a healthy escape from daily pressures, allowing our minds to relax and wander into different worlds. Studies have shown that reading before bed can improve sleep quality. Additionally, reading fiction develops our empathy by allowing us to experience life through different characters' eyes. Whether it's fiction, non-fiction, poetry, or biography, every book offers something valuable. In our fast-paced, digital world, taking time to read a physical book is not just educational—it's also a form of self-care that benefits both our minds and emotional well-being.`
    },
    {
        id: 15,
        category: 'paragraphs',
        title: 'A Rainy Day',
        preview: 'The rain started early in the morning, with dark clouds covering the sky and blocking the usual bright sunshine...',
        fullText: `The rain started early in the morning, with dark clouds covering the sky and blocking the usual bright sunshine. The steady patter of raindrops against my window created a soothing rhythm that made me want to stay in bed a little longer. When I finally got up, I could see the world outside transformed—the streets were glistening with water, trees were swaying gently in the wind, and small puddles were forming on the sidewalk. The air smelled fresh and clean, that distinctive earthy scent that only comes with rain. I decided it was the perfect day to stay indoors with a good book and a cup of hot chocolate. As I sat by the window watching the rain, I felt a sense of peace and calm. There's something magical about rainy days—they slow down the usually hectic pace of life and give us permission to relax and be cozy. The rain continued throughout the day, sometimes heavy and sometimes just a gentle drizzle, creating a peaceful atmosphere that made me appreciate the simple pleasure of being warm and dry inside while nature performed its beautiful, cleansing dance outside.`
    },
    {
        id: 16,
        category: 'paragraphs',
        title: 'My Favorite Sport',
        preview: 'Basketball is my favorite sport, and I have been playing it for the past five years. What I love most about basketball...',
        fullText: `Basketball is my favorite sport, and I have been playing it for the past five years. What I love most about basketball is that it combines physical fitness with strategy and teamwork. Every game is different and exciting, requiring quick thinking, good coordination, and constant communication with teammates. Playing basketball has taught me valuable life lessons beyond the court. It has shown me the importance of practice and perseverance—when I first started, I could barely make a basket, but with regular practice, my skills improved significantly. The sport has also taught me about teamwork and trust, as basketball is not a game you can win alone; success depends on working together and supporting each other. Additionally, basketball keeps me physically fit and healthy, improving my stamina, strength, and agility. The friendships I have made through basketball are some of the strongest I have, as there's a special bond that forms when you work together toward a common goal. Whether I'm playing in a competitive game or just shooting hoops with friends, basketball brings me joy and helps me stay active, focused, and connected with others who share my passion for the sport.`
    }
];

// DOM elements
const searchBar = document.getElementById('searchBar');
const searchResults = document.getElementById('searchResults');
const categoryCards = document.querySelectorAll('.category-card');
const contentGrid = document.getElementById('contentGrid');
const categoryTitle = document.getElementById('categoryTitle');
const showAllBtn = document.getElementById('showAllBtn');

let currentFilter = 'all';

// Initialize the page
function init() {
    displayContent('all');
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchBar.addEventListener('input', handleSearch);
    searchBar.addEventListener('focus', () => {
        if (searchBar.value.trim()) {
            searchResults.classList.add('active');
        }
    });

    // Click outside search to close results
    document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });

    // Category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            filterByCategory(category);
        });
    });

    // Show all button
    showAllBtn.addEventListener('click', () => {
        filterByCategory('all');
    });
}

// Handle search
function handleSearch(e) {
    const query = e.target.value.trim().toLowerCase();
    
    if (query === '') {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        return;
    }

    const results = contentDatabase.filter(item => {
        return item.title.toLowerCase().includes(query) ||
               item.preview.toLowerCase().includes(query) ||
               item.fullText.toLowerCase().includes(query) ||
               item.category.toLowerCase().includes(query);
    });

    displaySearchResults(results, query);
}

// Display search results
function displaySearchResults(results, query) {
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No results found for "' + query + '"</div>';
        searchResults.classList.add('active');
        return;
    }

    let html = '';
    results.forEach(item => {
        html += `
            <div class="search-result-item" data-id="${item.id}">
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-category">${item.category}</div>
                <div class="search-result-preview">${item.preview}</div>
            </div>
        `;
    });

    searchResults.innerHTML = html;
    searchResults.classList.add('active');

    // Add click listeners to search results
    document.querySelectorAll('.search-result-item').forEach(resultItem => {
        resultItem.addEventListener('click', () => {
            const id = parseInt(resultItem.dataset.id);
            openModal(id);
            searchResults.classList.remove('active');
            searchBar.value = '';
        });
    });
}

// Filter by category
function filterByCategory(category) {
    currentFilter = category;
    
    if (category === 'all') {
        categoryTitle.textContent = 'All Content';
        showAllBtn.style.display = 'none';
    } else {
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        showAllBtn.style.display = 'block';
    }

    displayContent(category);
    
    // Scroll to content section
    document.querySelector('.content-section').scrollIntoView({ behavior: 'smooth' });
}

// Display content
function displayContent(category) {
    let itemsToDisplay = contentDatabase;
    
    if (category !== 'all') {
        itemsToDisplay = contentDatabase.filter(item => item.category === category);
    }

    let html = '';
    itemsToDisplay.forEach(item => {
        html += `
            <div class="content-card" data-id="${item.id}">
                <span class="content-badge">${item.category}</span>
                <h3>${item.title}</h3>
                <p class="content-preview">${item.preview}</p>
                <span class="read-more">Read more →</span>
            </div>
        `;
    });

    contentGrid.innerHTML = html;

    // Add click listeners to content cards
    document.querySelectorAll('.content-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            openModal(id);
        });
    });
}

// Open modal with full content
function openModal(id) {
    const item = contentDatabase.find(i => i.id === id);
    if (!item) return;

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <span class="modal-badge">${item.category}</span>
            <h2>${item.title}</h2>
            <div class="modal-text">${item.fullText}</div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // ESC key to close
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);
