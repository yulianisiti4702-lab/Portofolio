/* =========================================================
   DATA PORTOFOLIO YULI
   Semua isi teks website ada di file ini.
   Foto: isi "src" dengan nama file di folder assets/images
   (contoh: "assets/images/shoe-police-1.jpg"). Kalau kosong,
   website otomatis menampilkan kotak placeholder.
   ========================================================= */

const NOTE = t => `<em class="note">${t}</em>`;

const PROFILE = {
  name: "Yuliani Siti Ruswana",
  nick: "Yuli",
  title: "Graphic Designer & Illustrator",
  location: "Bandung, Indonesia",
  heroIntro: "Hi! I'm Yuli, a graphic designer and illustrator who loves bridging concept and craft, from brand visuals and social content to hand-drawn book illustrations. Every project starts with a story I want to tell visually.",
  photo: "",          // contoh: "assets/images/yuli.jpg"
  aboutPhotos: ["", "", ""],
  cv: "assets/cv-yuliani-siti-ruswana.pdf",
  email: "yuliani.siti4702@gmail.com",
  phone: "+62 851-5682-3118",
  whatsapp: "https://wa.me/6285156823118",
  linkedin: "https://www.linkedin.com/in/yuliani.47",
  behance: "https://www.behance.net/yulianisiti47",
  bio: [
    "I'm a graphic designer and illustrator with a Bachelor of Design in Visual Communication Design from Universitas Pendidikan Indonesia, where I graduated with a 3.92 GPA as a Jabar Future Leaders Scholarship awardee.",
    "My work moves between two worlds. On one side is commercial design for brands: sneaker-culture social content and YouTube thumbnails, marketplace visuals and product photography, and promotional campaigns for children's books. On the other is illustration, from realistic pencil portraits for literary titles to playful characters for young readers.",
    "Today I design visual content for Shoe Police and Shoe Workshop at PT. Kulturama Virtua Solusindo. Whatever the project, I start from the story it needs to tell, then find the visual language that tells it clearly."
  ],
  quote: "Every project starts with a story I want to tell visually.",
  // Animasi ketikan di halaman depan: "Turning stories into ..."
  typing: ["brand visuals.", "scroll-stopping content.", "marketplace campaigns.", "book illustrations.", "product photography."],
  // Ringkasan singkat di bagian "About me" halaman depan
  snapshot: "I'm a graphic designer and illustrator from Bandung with a Bachelor of Design from Universitas Pendidikan Indonesia. I create brand visuals, social content, and marketplace imagery for brands, and hand-drawn illustrations for books. Whatever the brief, I start from the story it needs to tell.",
  experienceSince: 2023   // tahun mulai kerja profesional di bidang desain (magang Mizan, Sep 2023)
};

const SKILLS = [
  { name: "Graphic Design", desc: "Visuals that carry a brand's voice", items: ["Brand Identity", "Social Media Design", "Layout Design", "Typography", "Marketplace Banners", "Book Mockups"] },
  { name: "Illustration", desc: "From pencil realism to playful characters", items: ["Digital Illustration", "Editorial Illustration", "Character Design", "Drawing", "Painting", "Comic & Storyboard"] },
  { name: "Visual Content", desc: "Content made to stop the scroll", items: ["YouTube Thumbnails", "Instagram Carousels", "Product Photography", "Basic Video Editing", "Content Planning"] }
];

const TOOLS = ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Affinity Designer", "Clip Studio Paint", "Figma", "Canva", "CapCut"];

const EXPERIENCE = [
  { company: "PT. Kulturama Virtua Solusindo", projects: ["shoe-police"], role: "Graphic Designer", type: "Full-time", start: "Apr 2026", end: "Present", location: "Bandung",
    desc: "Designing visual content for the digital media of Shoe Police and Shoe Workshop while keeping every asset consistent with each brand's identity. I produce YouTube thumbnails for long- and short-form videos, Instagram carousels, and other social assets every month, consistently reaching 95%+ of content production targets.",
    tags: ["YouTube Thumbnail", "Instagram Carousel", "Social Media Design", "Brand Consistency"] },
  { company: "PT. Bening Mata Santosa", role: "Staff Casual Admin", type: "Casual", start: "Nov 2025", end: "Feb 2026", location: "Jakarta",
    desc: "Managed company administrative documents, including activity and financial reports for partnership projects, and prepared and checked partnership contracts to make sure every document was complete.",
    tags: ["Documentation", "Reporting", "Contract Administration"] },
  { company: "SEIS Official Shop", projects: ["seis"], role: "Graphic Designer & Photographer", type: "Full-time", start: "Apr 2025", end: "Nov 2025", location: "Bandung",
    desc: "Produced product photography for marketplace and digital marketing, with multiple visual options for every product. Designed marketplace banners, promotional materials, and launch visuals in line with the brand identity, and planned social media content through Meta's platform.",
    tags: ["Product Photography", "Marketplace Banner", "Ads Visual", "Meta Business"] },
  { company: "PT. Mizan Pustaka", projects: ["dar-mizan", "kkpk"], role: "Freelance Graphic Designer", type: "Freelance", start: "Nov 2024", end: "Feb 2025", location: "Bandung",
    desc: "Designed digital and print promotional materials for DAR! Mizan and KKPK, including Instagram feeds, stories, banners, and Reels thumbnails, plus a Muslim kids' activity sheet and book mockups, producing 50+ designs a month.",
    tags: ["Instagram Feed", "Banner", "Book Mockup", "Activity Sheet"] },
  { company: "PT. Mizan Pustaka", projects: ["book-illustration"], role: "Illustrator Intern", type: "Internship", start: "Sep 2023", end: "Jan 2024", location: "Bandung",
    desc: "Created digital illustrations for book editorial needs with Adobe Illustrator and InDesign, including the realistic pencil cover illustration for Lelaki Sunni di Kota Syi'ah and interior illustrations for seven titles. Completed the internship with a 95.5/100 evaluation from the Art Director.",
    tags: ["Editorial Illustration", "Pencil Drawing", "Catalog Design"] }
];

const VOLUNTEER = [
  { org: "Yayasan MyEduSolve Karya Indonesia (YMKI)", projects: ["ymki"], role: "Graphic Designer", date: "Feb 2024 – Aug 2024", desc: "Designed 15 Instagram content pieces with consistent visuals and clear communication." },
  { org: "JFLS Goes to School 2023", role: "Field Coordinator", date: "Oct 2023 – Dec 2023", desc: "Reached 1,300+ participants across Kabupaten Bandung with an 84.95% satisfaction rate." },
  { org: "Beasiswa Rema Berdaya", cert: "assets/images/certificates/rema-berdaya.jpg", role: "Graphic Designer", date: "Sep 2022 – Jan 2023", desc: "Sponsorship proposal designs helped increase program funding by 60% and attract 153 participants." },
  { org: "JFLS Goes to School 2022", cert: "assets/images/certificates/jfls-2022.jpg", role: "Graphic Designer", date: "Apr 2022 – Jul 2022", desc: "Created Instagram designs and Reels, winning the “Most Favorite Reels Video” award." },
  { org: "HIKAVI (DKV UPI Student Association)", role: "General Secretary", date: "Oct 2021 – Aug 2022", desc: "Managed organizational documentation, archives, and administration." }
];

const EDUCATION = {
  school: "Universitas Pendidikan Indonesia",
  degree: "Bachelor of Design | Visual Communication Design",
  years: "2020 – 2024",
  gpa: "GPA: 3.92 out of 4.00",
  photos: ["", "", ""],
  // Ijazah & transkrip: isi dengan path gambar (JPG). Transkrip boleh lebih dari 1 halaman.
  // Data pribadi (tanggal lahir, NIK, QR) sudah ditutup di file gambarnya.
  diploma: ["assets/docs/ijazah.jpg"],
  transcript: ["assets/docs/transkrip-1.jpg", "assets/docs/transkrip-2.jpg"],
  text: [
    "I studied Visual Communication Design at Universitas Pendidikan Indonesia on a full Jabar Future Leaders Scholarship from the West Java Provincial Government.",
    "My thesis brought illustration, book design, and augmented reality together in an interactive book that introduces traditional Sundanese musical instruments to elementary school children, tested directly with sixth-grade students.",
    "Outside class, I designed for scholarship programs and community events, and served as General Secretary of HIKAVI, the DKV UPI student association."
  ],
  programs: [
    { title: "Kampus Merdeka Independent Study (MSIB) · Batch 4", org: "PT. Bisa Artifisial Indonesia (BISA AI) · UI/UX track", date: "Feb 2023 – Jun 2023",
      desc: "A government-backed independent study program where I completed the UI/UX track, covering UX research, UI design, content creation, and video editing, and closed with a capstone project built from user research to prototype. I scored between 80 and 100 in every graded class.",
      id: "msib", tab: "MSIB", projects: [],
      cert: ["assets/images/certificates/msib/msib-01.jpg", "assets/images/certificates/msib/msib-02.jpg", "assets/images/certificates/msib/msib-03.jpg", "assets/images/certificates/msib/msib-04.jpg", "assets/images/certificates/msib/msib-05.jpg", "assets/images/certificates/msib/msib-06.jpg", "assets/images/certificates/msib/msib-07.jpg", "assets/images/certificates/msib/msib-08.jpg", "assets/images/certificates/msib/msib-09.jpg", "assets/images/certificates/msib/msib-10.jpg"], certCaps: ["Certificate", "Learning outcomes 1/9", "Learning outcomes 2/9", "Learning outcomes 3/9", "Learning outcomes 4/9", "Learning outcomes 5/9", "Learning outcomes 6/9", "Learning outcomes 7/9", "Learning outcomes 8/9", "Learning outcomes 9/9"],
      courses: ["assets/images/certificates/msib/course-05.jpg", "assets/images/certificates/msib/course-10.jpg", "assets/images/certificates/msib/course-11.jpg", "assets/images/certificates/msib/course-18.jpg", "assets/images/certificates/msib/course-24.jpg", "assets/images/certificates/msib/course-28.jpg", "assets/images/certificates/msib/course-33.jpg", "assets/images/certificates/msib/course-46.jpg"], courseCaps: ["Basic Tools Online Graphic Design: Canva", "Basic Motion Graphic: After Effects Keyframe", "Basic Mobile Video Editing: CapCut", "Basic Video Editing: Adobe Premiere", "Basic Mobile Video Editing: InShot", "Basic Figma: Mobile App UI", "Building a Mobile App UX Prototype", "UX Design Fundamentals for a UX Career"] },
    { title: "Illustrator Internship", org: "PT. Mizan Pustaka · Artistic Division", date: "Sep 2023 – Jan 2024",
      desc: "A 4-month internship at a Bandung-based publishing house, creating editorial and cover illustrations for published titles and designing digital catalogs. I finished with a 95.5/100 evaluation from the Art Director.",
      id: "mizan", tab: "Magang Mizan", projects: ["book-illustration"] }
  ]
};

const ACHIEVEMENTS = [
  { year: "2024", items: [
    { title: "Adobe Certified Professional", cert: ["assets/images/certificates/adobe.jpg", "assets/images/certificates/adobe-score.jpg"], certCaps: ["Certificate", "Exam score report"], sub: "Graphic Design & Illustration Using Adobe Illustrator · Score 882/1000", date: "Apr 2024" },
    { title: "BNSP Certificate of Competence", cert: "assets/images/certificates/bnsp.jpg", sub: "Medior Graphic Designer (Desain Grafis Madya) · LSP P1 Universitas Pendidikan Indonesia", date: "Apr 2024" },
    { title: "Winner, MyEduSolve Design Challenge", cert: "assets/images/certificates/myedusolve.jpg", sub: "“The Happiness of Giving” · MyEduSolve, YMKI & Hoshizora Foundation", date: "Feb 2024" },
    { title: "PTESOL English Proficiency · 467/677", cert: "assets/images/certificates/ptesol.jpg", sub: "Language Center, Universitas Pendidikan Indonesia", date: "Jan 2024" },
    { title: "95.5/100 Internship Evaluation", sub: "Art Director, PT. Mizan Pustaka", date: "Jan 2024" } ] },
  { year: "2023", items: [
    { title: "Registered Copyright: Tongkat Ajaib", cert: "assets/images/certificates/hki-tongkat-ajaib.jpg", sub: "Children's storybook illustration · Kemenkumham RI", date: "Dec 2023" },
    { title: "MSIB Batch 4 Certificate · UI/UX", cert: ["assets/images/certificates/msib/msib-01.jpg", "assets/images/certificates/msib/msib-02.jpg", "assets/images/certificates/msib/msib-03.jpg", "assets/images/certificates/msib/msib-04.jpg", "assets/images/certificates/msib/msib-05.jpg", "assets/images/certificates/msib/msib-06.jpg", "assets/images/certificates/msib/msib-07.jpg", "assets/images/certificates/msib/msib-08.jpg", "assets/images/certificates/msib/msib-09.jpg", "assets/images/certificates/msib/msib-10.jpg"], certCaps: ["Certificate", "Learning outcomes 1/9", "Learning outcomes 2/9", "Learning outcomes 3/9", "Learning outcomes 4/9", "Learning outcomes 5/9", "Learning outcomes 6/9", "Learning outcomes 7/9", "Learning outcomes 8/9", "Learning outcomes 9/9"], sub: "Kampus Merdeka Independent Study · PT. Bisa Artifisial Indonesia (BISA AI)", date: "Jun 2023" },
    { title: "Basic Adobe Illustrator: Mastering Fundamental", cert: "assets/images/certificates/sekolahdesain.jpg", sub: "Training completion · SekolahDesain", date: "Jan 2023" } ] },
  { year: "2022", items: [
    { title: "Most Favorite Reels Video", sub: "JFLS Goes to School 2022", date: "2022" } ] },
  { year: "2020", items: [
    { title: "Jabar Future Leaders Scholarship", sub: "Full undergraduate scholarship, West Java Provincial Government", date: "2020" } ] }
];

// "the brands along the journey" di halaman depan.
// style: gaya huruf (bold / light / script / spaced / heavy / round). link boleh kosong.
const BRANDS = [
  { name: "Shoe Police", style: "bold", role: "Graphic Designer", year: "2026", link: "project.html?id=shoe-police" },
  { name: "Shoe Workshop", style: "light", role: "Graphic Designer", year: "2026", link: "project.html?id=shoe-police" },
  { name: "Kulturama", style: "script", role: "Graphic Designer · PT. Kulturama Virtua Solusindo", year: "2026", link: "" },
  { name: "seis", style: "spaced", role: "Product Photographer & Graphic Designer", year: "2025", link: "project.html?id=seis" },
  { name: "Mizan", style: "heavy", role: "Illustrator Intern & Freelance Designer", year: "2023 – 2025", link: "project.html?id=book-illustration" },
  { name: "DAR!", style: "round", role: "Freelance Graphic Designer", year: "2024 – 2025", link: "project.html?id=dar-mizan" },
  { name: "KKPK", style: "bold", role: "Freelance Graphic Designer", year: "2024 – 2025", link: "project.html?id=kkpk" },
  { name: "YMKI", style: "light", role: "Volunteer Graphic Designer", year: "2024", link: "project.html?id=ymki" },
  { name: "MyEduSolve", style: "script", role: "Winner, Design Challenge", year: "2024", link: "" },
  { name: "BISA AI", style: "spaced", role: "MSIB Independent Study · UI/UX", year: "2023", link: "about.html#edu-msib" },
  { name: "UPI", style: "heavy", role: "Visual Communication Design, GPA 3.92", year: "2020 – 2024", link: "about.html#edu-upi" },
  { name: "JFLS", style: "round", role: "Designer & Field Coordinator", year: "2022 – 2023", link: "" },
  { name: "Rema Berdaya", style: "script", role: "Graphic Designer", year: "2022", link: "" },
  { name: "HIKAVI", style: "light", role: "General Secretary", year: "2021 – 2022", link: "" }
];

// Kartu sertifikat di "Portfolio Showcase" halaman depan.
// img kosong = kartu teks saja (dipakai untuk dokumen yang memuat data pribadi).
const CERTIFICATES = [
  { title: "Adobe Certified Professional", issuer: "Adobe · Graphic Design & Illustration Using Adobe Illustrator", date: "Apr 2024", img: "assets/images/certificates/adobe.jpg" },
  { title: "BNSP Certificate of Competence", issuer: "Medior Graphic Designer · LSP P1 Universitas Pendidikan Indonesia", date: "Apr 2024", img: "assets/images/certificates/bnsp.jpg" },
  { title: "Winner, MyEduSolve Design Challenge", issuer: "MyEduSolve, YMKI & Hoshizora Foundation", date: "Feb 2024", img: "assets/images/certificates/myedusolve.jpg" },
  { title: "Basic Adobe Illustrator: Mastering Fundamental", issuer: "SekolahDesain", date: "Jan 2023", img: "assets/images/certificates/sekolahdesain.jpg" },
  { title: "Registered Copyright: Tongkat Ajaib", issuer: "Kemenkumham RI · Children's storybook illustration", date: "Dec 2023", img: "assets/images/certificates/hki-tongkat-ajaib.jpg" },
  { title: "MSIB Batch 4 · UI/UX", issuer: "Kampus Merdeka · PT. Bisa Artifisial Indonesia", date: "Jun 2023", img: "assets/images/certificates/msib/msib-01.jpg" },
  { title: "PTESOL English Proficiency · 467", issuer: "Language Center, Universitas Pendidikan Indonesia", date: "Jan 2024", img: "assets/images/certificates/ptesol.jpg" }
];

// Keterangan singkat tiap software untuk tab "Tools" di halaman depan
const TOOL_INFO = {
  "Adobe Illustrator": ["Ai", "Vector illustration, layouts & key visuals"],
  "Adobe Photoshop": ["Ps", "Photo editing, compositing & thumbnails"],
  "Adobe InDesign": ["Id", "Book layouts & product catalogs"],
  "Affinity Designer": ["Af", "Vector & digital illustration"],
  "Clip Studio Paint": ["Cs", "Comics & character illustration"],
  "Figma": ["Fg", "Mockups & design presentation"],
  "Canva": ["Cv", "Quick social content & templates"],
  "CapCut": ["Cc", "Short-form video editing"]
};

const CATEGORIES = [
  { key: "brand", label: "Brand & Social Media" },
  { key: "product", label: "Marketplace & Product" },
  { key: "editorial", label: "Editorial & Illustration" },
  { key: "personal", label: "Personal Work" }
];

const PROJECTS = [
 { id: "shoe-police", stats: [["60+", "Instagram carousels / month"], ["20+", "Long-form thumbnails / month"], ["50+", "Short-form thumbnails / month"]], cat: "brand", title: "Shoe Police", year: "2026",
   short: "Scroll-stopping carousels and YouTube thumbnails for a sneaker-culture media brand.",
   intro: "Shoe Police is a media company focused on sneaker culture, covering the latest footwear trends, product recommendations, and industry insights. As part of the content team, I create visual assets that turn trend-driven topics into scroll-stopping social media content.",
   meta: ["Graphic Designer", "Full-time", "Apr 2026 – Present"],
   obj: ["Design Instagram carousels that break down sneaker trends and recommendations in a visually engaging, easy-to-follow format.",
         "Produce YouTube thumbnails for long-form and short-form videos that drive clicks and stay true to the brand's visual identity.",
         "Support video content through editing to strengthen overall content performance and audience engagement."],
   res: ["Designed an average of 60+ Instagram carousels per month, often exceeding 100% of the monthly target thanks to additional brand-partnership content.",
         "Produced 20+ long-form and 50+ short-form YouTube thumbnails every month. " + NOTE("data CTR menyusul"),
         "Contributed video editing for selected content pieces."],
   kv: "Shoe Police's visual identity is built on a bold black and golden-yellow palette that reflects the premium, trend-forward character of the sneaker niche. This color theme is applied consistently across carousels, thumbnails, and other social media assets.",
   tags: ["Instagram Carousel", "YouTube Thumbnail", "Video Editing"], tools: ["Affinity Designer", "Claude AI", "Adobe Photoshop", "Adobe Illustrator", "Canva", "CapCut"],
   gallery: [{ label: "Mockup HP", src: "" }, { label: "Carousel", src: "" }, { label: "Thumbnail YouTube", src: "" }, { label: "Video", src: "" }] },

 { id: "dar-mizan", stats: [["15+", "Instagram feeds / month"], ["1", "Bonus activity sheet"]], cat: "brand", title: "DAR! Mizan", year: "2024 – 2025",
   short: "Bright, toddler-friendly promotional visuals for flagship children's book series.",
   intro: "DAR! Mizan is a children's book publisher for early readers, known for colorful, educational, and kid-friendly board books. I designed promotional visuals for several of its flagship series, including Halo Balita (good habits and early character-building) and Juz Amma for Kids (Qur'an learning for children), as well as other preschool titles.",
   meta: ["Graphic Designer", "Freelance", "Nov 2024 – Feb 2025"],
   obj: ["Design Instagram carousel feeds tailored to each book's theme, covering promotions, book highlights, and mini-games in a bright, toddler-friendly style.",
         "Produce supporting visuals such as Instagram stories, marketplace banners, and a bonus activity sheet for the Juz Amma for Kids release.",
         "Create book mockups for promotional and marketing needs."],
   res: ["Designed 15+ Instagram carousel feeds per month, each tailored to a specific book's theme, from promotions to interactive mini-games.",
         "Created a bonus activity sheet as a purchase incentive for Juz Amma for Kids, plus additional Instagram stories and marketplace banners on request.",
         "Produced book mockups used consistently across promotional materials."],
   kv: "The designs use a warm, playful color palette with soft, rounded shapes suited to toddlers and preschoolers, balancing an educational tone (character-building and Qur'an learning) with visuals that feel approachable and fun for young children.",
   tags: ["Instagram Feed", "Marketplace Banner", "Book Mockup"], tools: ["Adobe Illustrator", "Spreadsheet"],
   imgBase: "assets/images/dar/",
   thumb: "assets/images/dar/feed-picky-eater.jpg",
   cover: { label: "Ramadan Juz 'Amma Instagram post", src: "assets/images/dar/feed-ramadan.jpg" },
   gallery: [{ label: "Picky eater Instagram post", src: "assets/images/dar/feed-picky-eater.jpg" }, { label: "DAR! Festival banner", src: "assets/images/dar/banner-festival.jpg" }, { label: "Juz 'Amma quiz spread", src: "assets/images/dar/spread-juz-quiz.webp" }],
   sections: [
     { title: "Instagram Feed", layout: "fan",
       desc: "Feed posts that introduce each book through a small story, a parenting question, a quote, or a learning moment rather than a hard sell, alongside seasonal campaigns and real reader reviews. Bright yellows and greens, rounded shapes, and friendly characters keep every post approachable for parents and their preschool children.",
       images: [["feed-picky-eater", "Picky eater — Halo Balita"], ["feed-say-no", "It's OK to say no"], ["feed-bilang-tidak", "Aku Boleh Bilang Tidak — book promo"], ["feed-bonding", "Bonding moments"], ["feed-favorite-stories", "Kids' favourite stories"], ["einstein", "Read them fairy tales (Albert Einstein quote)"], ["feed-parenting-values", "Islamic parenting values"], ["feed-al-ikhlas", "Did you know? Surah Al-Ikhlas"], ["feed-fathers-quran", "Fathers in the Qur'an"], ["feed-juz-amma", "Meet Juz 'Amma DAR! Mizan"], ["feed-ramadan", "Ramadan Juz 'Amma campaign"], ["feed-hari-ayah", "National Father's Day"], ["feed-festival", "DAR! Festival special price"], ["feed-25-nabi", "Kisah 25 Nabi bundle promo"], ["feed-kemandirian", "Independence-themed book picks"], ["feed-kemandirian-2", "Independence-themed book picks — photo edition"], ["feed-testimonial", "A mom's story about DAR! Mizan"], ["feed-reviews-1", "Reader reviews — Aku Boleh Bilang Tidak"], ["feed-reviews-2", "Reader reviews — Aku Suka Sikat Gigi"]] },
     { title: "Marketplace Product Slides", layout: "fan",
       desc: "A set of product-detail slides for the Juz 'Amma titles on marketplace listings, each one zooming in on a single feature (murottal audio, tajwid colour coding, writing practice, quizzes) so parents can understand the book at a glance before buying.",
       images: [["mp-anak-muslim", "Juz 'Amma Untuk Anak Muslim — overview"], ["mp-for-kids", "Juz 'Amma for Kids — overview"], ["mp-murottal", "Murottal audio via QR code"], ["mp-tajwid", "Tajwid colour guide"], ["mp-writing", "Writing practice pages"], ["mp-quiz", "Activities & quizzes"]] },
     { title: "Reels Thumbnails", layout: "fan",
       desc: "Cover frames for Instagram Reels, layering bold titles and the brand's characters over a tinted video still so each reel stays readable and on-brand in the profile grid.",
       images: [["reels-chemistry", "Chemistry Test!"], ["reels-quiz", "How well does the Mizan team know DAR! books?"], ["reels-hari-anak", "Hari Anak Nasional"], ["reels-maulid", "Maulid Nabi Muhammad SAW"]] },
     { title: "Marketplace Banners", layout: "fan",
       desc: "Campaign banners for Shopee, Tokopedia, and Lazada, designed in several formats for different placements while keeping the same campaign look across every size.",
       subs: [
         { title: "Header Banners",
           desc: "Wide banners for the top of the store page, built around one clear headline and the featured books.",
           images: [["banner-ramadan", "Ramadan Juz 'Amma"], ["banner-festival", "DAR! Festival special price"], ["banner-25-nabi", "Kisah 25 Nabi — free keychain"], ["banner-kemandirian", "Independence-themed book picks"]] },
         { title: "Vertical & Promo Banners",
           desc: "Tall banners and promo posters for mobile placements and campaign pages.",
           images: [["banner-festival-v", "DAR! Festival — vertical"], ["banner-25-nabi-v", "Kisah 25 Nabi — vertical"], ["banner-special-offer", "Juz 'Amma special offer"]] }
       ] },
     { title: "Activity Sheet", layout: "fan",
       desc: "A bonus activity sheet created as a purchase incentive for Juz 'Amma for Kids, letting children track their daily Qur'an reading, prayers, and good deeds.",
       images: [["activity-sheet", "Muslim kids' daily activity sheet"]] },
     { title: "Book Mockups", layout: "fan",
       desc: "3D covers and inside-page spreads made for promotions and marketplace listings, so parents can see the size, finish, and content of each book before they buy.",
       subs: [
         { title: "3D Covers",
           desc: "Standing hardcover mockups for the Halo Balita and preschool titles.",
           images: [["book-sikat-gigi.webp", "Aku Suka Sikat Gigi"], ["book-kata-ajaib.webp", "Aku Tahu 4 Kata Ajaib"], ["book-dongeng.webp", "Dongeng Sebelum Tidur"], ["book-memukul.webp", "Aku Tidak Suka Memukul"]] },
         { title: "Inside Spreads",
           desc: "Open-book mockups that show real pages from each title.",
           images: [["spread-bilang-tidak.webp", "Aku Boleh Bilang Tidak"], ["spread-bangun-pagi.webp", "Aku Bisa Bangun Pagi"], ["spread-jajan.webp", "Aku Tidak Jajan Sembarangan"], ["spread-juz-quiz.webp", "Juz 'Amma — quiz pages"], ["spread-al-qadr.webp", "Juz 'Amma — Surah Al-Qadr"], ["spread-asy-syarh.webp", "Juz 'Amma — Surah Asy-Syarh"]] }
       ] }
   ],
 },

 { id: "kkpk", stats: [["15+", "Instagram feeds / month"]], cat: "brand", title: "KKPK", year: "2024 – 2025",
   short: "Colorful, kid-friendly content promoting a beloved book series by young authors.",
   intro: "KKPK (Kecil-Kecil Punya Karya) is a beloved children's book series under DAR! Mizan, written by young authors for young readers, with stories full of imagination, friendship, and adventure. I created colorful, kid-friendly visual content to promote each new title to its core audience of elementary school children.",
   meta: ["Graphic Designer", "Freelance", "Nov 2024 – Feb 2025"],
   obj: ["Design Instagram carousel feeds tailored to each book's theme, covering promotions, book highlights, and mini-games in a colorful style suited to young readers.",
         "Produce supporting visuals such as Instagram stories and marketplace banners based on ongoing briefs and requests.",
         "Create book mockups for promotional and marketing needs."],
   res: ["Designed 15+ Instagram carousel feeds per month, each tailored to a specific book's theme, from promotions to interactive mini-games.",
         "Delivered additional Instagram stories and marketplace banners on request, supporting marketing across multiple book releases.",
         "Produced book mockups used consistently across promotional materials."],
   kv: "Every design uses a bright, playful palette suited to elementary-aged readers, reflecting the imaginative, friendship-filled world of KKPK while staying true to each book's individual theme.",
   tags: ["Instagram Feed", "Reels Thumbnail", "Book Mockup"], tools: ["Adobe Illustrator", "Spreadsheet"],
   imgBase: "assets/images/kkpk/",
   thumb: "assets/images/kkpk/feed-mystery-funtime.jpg",
   cover: { label: "Mystery Funtime book promo", src: "assets/images/kkpk/feed-mystery-funtime.jpg" },
   gallery: [{ label: "Mystery Funtime", src: "assets/images/kkpk/feed-mystery-funtime.jpg" }, { label: "The Neighbor's Secret comic teaser", src: "assets/images/kkpk/neighbors-secret.jpg" }, { label: "Top 10 KKPK December", src: "assets/images/kkpk/feed-top-10.jpg" }],
   sections: [
     { title: "Instagram Feed", layout: "fan",
       desc: "Carousel posts that bring each new KKPK title to life for young readers, from bold cover openers and story teasers to launch announcements, interactive English games, and reader campaigns, all kept bright, playful, and on-brand with the KKPK mascots.",
       subs: [
         { title: "Book Promotion",
           desc: "Carousel openers and story teasers that pull kids into each new title and end on a cliffhanger, so they want to read the book.",
           images: [["feed-mystery-funtime", "Mystery Funtime"], ["feed-robot", "Robot Persahabatan"], ["robot-persahabatan", "Robot Persahabatan — story teaser"], ["feed-zigeshi", "Penyihir Negeri Zigeshi"]] },
         { title: "New Releases & Top 10",
           desc: "Launch announcements for the Special English Edition comics, collection reminders, and a monthly best-seller chart.",
           images: [["feed-terbit-neighbors", "Out now: The Neighbor's Secret"], ["feed-terbit-new-york", "Out now: New Year in New York"], ["feed-collection-1", "Complete the collection"], ["feed-collection-2", "Complete the collection — alternate"], ["feed-top-10", "Top 10 KKPK December"]] },
         { title: "Mini Games & Interactive Posts",
           desc: "Weekly #KamisInggris posts and comic quizzes that invite kids to practise English and comment with their answers.",
           images: [["neighbors-secret", "The Neighbor's Secret — fill in the dialogue"], ["feed-kamis-inggris-1", "#KamisInggris — fill in the blank"], ["feed-kamis-inggris-2", "#KamisInggris — quiz"], ["feed-scrabble-1", "#KamisInggris — Scrabble time"], ["feed-scrabble-2", "#KamisInggris — word puzzle"]] },
         { title: "Campaigns",
           desc: "Posts for KKPK's reader programs, including the Pena Sahabat review challenge and the English Short Story Competition.",
           images: [["pena-sahabat", "Pena Sahabat review challenge"], ["feed-english-competition", "English Short Story Competition"]] }
       ] },
     { title: "Instagram Stories", layout: "fan",
       desc: "Story frames that invite readers to vote on a new book's title and preview its blurb, turning the audience into part of the publishing process.",
       images: [["story-vote", "Vote for the book title"], ["story-blurb", "Book blurb preview"]] },
     { title: "Reels Thumbnails", layout: "fan",
       desc: "Cover frames for Instagram Reels from school roadshows, writing events, and promotions, layering bold titles and the KKPK mascots over a tinted video still.",
       images: [["reels-roadshow-binus", "Roadshow at Binus School Bekasi"], ["reels-bulan-bahasa", "Bulan Bahasa short story contest"], ["reels-sahabat-istimewa", "Sahabat Istimewa book"], ["reels-giveaway", "Giveaway with Kak Safira"], ["reels-promo-sticker", "Buy 2 books, free sticker set"]] },
     { title: "Event Poster", layout: "fan",
       desc: "A poster inviting schools to host the KKPK writing roadshow with Gramedia, where students join a writing class with KKPK editors.",
       images: [["roadshow", "KKPK school roadshow poster"]] },
     { title: "KKPK Digital Catalog", layout: "fan",
       desc: "Digital product catalogs for the KKPK series (2021 and 2022 editions), designed within the brand guidelines: playful mascots, a bright palette, and a clear layout that lets parents and schools compare dozens of titles at a glance.",
       images: [["catalog-2021-cover", "Catalog 2021 — cover"], ["catalog-2021-page", "Catalog 2021 — inside page"], ["catalog-2022-cover", "Catalog 2022 — cover"], ["catalog-2022-page", "Catalog 2022 — inside page"]] },
     { title: "Book Mockups", layout: "fan",
       desc: "3D covers and inside-page spreads for the Komik KKPK titles, used across launch posts and marketplace listings.",
       subs: [
         { title: "3D Covers", desc: "Standing cover mockups for each new comic title.",
           images: [["book-mystery-funtime.webp", "Mystery Funtime"], ["book-new-york.webp", "New Year in New York"], ["book-neighbors-secret.webp", "The Neighbor's Secret"]] },
         { title: "Inside Spreads", desc: "Open-book mockups showing real comic pages.",
           images: [["spread-mystery-funtime.webp", "Mystery Funtime"], ["spread-new-york.webp", "New Year in New York"], ["spread-neighbors-secret.webp", "The Neighbor's Secret"]] }
       ] }
   ],
 },

 { id: "seis", stats: [["24", "Shots per new product"], ["30", "Ad photos / month"], ["12", "Marketplace banners / month"], ["45", "Instagram post options / month"]], cat: "product", featured: true, title: "SEIS Official Shop", year: "2025",
   short: "Full visual catalogs, banners, and ad photography for a local footwear brand.",
   intro: "SEIS Official Shop is a local online footwear brand offering everything from heels, mules, and sandals to loafers and sneakers. As product photographer and graphic designer, I produced the full visual catalog for every new release and periodic reshoot, making sure each product was presented with a consistent, marketplace-ready look.",
   meta: ["Product Photographer & Graphic Designer", "Full-time", "Apr 2025 – Nov 2025"],
   obj: ["Produce a complete photo set for every new product, including solo shots, full-color layouts, and model shots for each color variant, so customers can clearly see every option.",
         "Create marketplace banners and product overview videos to support new launches.",
         "Deliver monthly visual content, including marketplace banners, Instagram product posts, and ad photography, to sustain marketing and sales activity."],
   res: ["Delivered a full 24-shot visual set per new product (3 colors on average), covering solo, full-color, and model shots, plus 3 banner options and a product video for every launch.",
         "Produced 12 marketplace banners per month (3 options each) and 30 ad photos per month to support ongoing marketplace campaigns.",
         "Delivered 15 themed Instagram product posts per month (3 photo options each, 45 in total), keeping the brand's visual presence consistent."],
   kv: "Each shoot is planned to give customers full visual context before buying: solo shots for clean product detail, and styled shots with a model to show real-world fit and scale, repeated consistently across every color variant.",
   tags: ["Product Photography", "Marketplace Banner", "Ads"], tools: ["Professional Camera", "Adobe Photoshop", "Adobe Illustrator", "Meta Business Suite", "Canva"],
   imgBase: "assets/images/seis/",
   cover: { label: "Clovis Payday Instagram post", src: "assets/images/seis/ig2-clovis.jpg" },
   thumb: "assets/images/seis/ig2-meredith.jpg",
   gallery: [{ label: "Greisy slingbacks in three colors", src: "assets/images/seis/hero-greisy.jpg" }, { label: "Meredith Instagram post", src: "assets/images/seis/ig2-meredith.jpg" }, { label: "Top 5 Best Seller banner", src: "assets/images/seis/banner-top5.jpg" }],
   sections: [
     { title: "Ad Photography", layout: "fan",
       desc: "Photos created specifically for paid ads, each built on the same layout system: one hero product, a serif product name, a short tagline, and plenty of white space so the shoe stands out in a fast-scrolling feed. I delivered 30 ad photos every month to support ongoing campaigns.",
       // Disusun per jenis sepatu. Tambah foto baru: taruh file di assets/images/seis/, lalu tulis ["nama-file", "Keterangan"] di grup yang sesuai.
       groups: [
         { label: "Heels", images: [["ads-agnes", "Agnes"], ["ads-audrey", "Audrey"]] },
         { label: "Slingbacks", images: [["ads-viona", "Viona"], ["ads-maurice", "Maurice"], ["ads-oswald", "Oswald"], ["ads-valencia", "Valencia"], ["promo-dont-wait", "Don't Wait!"]] },
         { label: "Flats", images: [["ads-venice", "Venice"]] },
         { label: "Mules", images: [["ads-joy", "Joy"], ["promo-amazing-discounts", "Amazing Discounts"]] },
         { label: "Sandals", images: [["ads-geovany", "Geovany"]] },
         { label: "Loafers", images: [["ads-clover", "Clover"], ["promo-wallet-thank-you", "Your Wallet Will Thank You"]] },
         { label: "Sneakers", images: [["ads-phoenix", "Phoenix"], ["promo-shop-smart", "Shop Smart, Spend Less"]] }
       ] },
     { title: "Instagram Campaign Series", layout: "fan",
       desc: "Instagram feed posts and stories for new arrivals, paydays, and product highlights. Each post pairs one hero product with clean type and a soft, warm palette so the brand feed stays cohesive, while every shoe still gets its own moment.",
       images: [["ig2-flora", "Flora — Feed"], ["ig2-celeste", "Celeste — Story"], ["ig2-clovis", "Clovis — Feed"], ["ig2-eleanor", "Eleanor — Feed"], ["ig2-greisy", "Greisy — Feed"], ["ig2-lorys", "Lorys — Feed"], ["ig2-macys", "Macys — Feed"], ["ig2-maurice", "Maurice — Feed"], ["ig2-meredith", "Meredith — Feed"], ["ig2-moira", "Moira — Story"], ["ig2-pixie", "Pixie — Feed"], ["ig2-siena", "Siena — Feed"], ["ig2-valencia", "Valencia — Feed"], ["ig2-vici", "Vici — Feed"], ["ig2-oswald", "Oswald — Feed"]] },
     { title: "Marketplace Banners & Campaigns", layout: "fan",
       desc: "Banners for new arrivals and major marketplace campaigns such as Payday, 6.6, and the affiliate program, designed to grab attention among hundreds of competing listings. I produced 12 banners a month with 3 design options each, all aligned with the brand's warm, minimal visual identity.",
       images: [["banner-payday", "Payday Sale"], ["banner-66", "6.6 Mid Year Sale"], ["banner-affiliate", "Affiliate Program"], ["banner-sale50", "Sale up to 50%"], ["banner-na-clovis", "New Arrival — Clovis"], ["banner-na-asya", "New Arrival — Asya"], ["banner-top5", "Top 5 Best Seller"], ["size-chart", "Size chart & foot measuring guide"]] },
     { title: "Collection Banners", layout: "fan",
       desc: "A banner set for each product category in the store. One shared layout, typography, and color treatment ties every collection together, so shoppers can move between categories and still feel they're in the same store.",
       images: [["collection-docmart", "Docmart Collection"], ["collection-heels", "Heels Collection"], ["collection-mules", "Mules Collection"], ["collection-loafers", "Loafers Collection"], ["collection-sandals", "Sandals Collection"], ["collection-sneakers", "Sneakers Collection"]] },
     { title: "Product Photography", layout: "fan",
       desc: "Every new release gets a complete marketplace photo set for each color variant, from clean solo shots to on-model shots and catalog photos made to each marketplace's guidelines.",
       subs: [
         { title: "Product Shots — Single Color",
           desc: "One product, one color per frame. Clean solo shots that let shoppers check the silhouette, material, and details of each color variant before they choose.",
           images: [["pp2-valencia-1", "Valencia"], ["pp2-greisy-1", "Greisy"], ["pp2-oswald-1", "Oswald"], ["pp2-clovis-1", "Clovis"], ["pp2-pixie-1", "Pixie"]] },
         { title: "Product Shots — All Colors",
           desc: "Every color variant of a product arranged in a single frame, so shoppers can compare the whole range at a glance and pick their favorite faster.",
           images: [["pp2-valencia-11", "Valencia — all colors"], ["pp2-greisy-10", "Greisy — all colors"], ["pp2-oswald-12", "Oswald — all colors"], ["pp2-clovis-11", "Clovis — all colors"], ["pp2-pixie-12", "Pixie — all colors"]] },
         { title: "On-Model Shots — Single Color",
           desc: "Each color worn by a model, showing the real fit, proportion, and heel height, and how the shoe looks in everyday wear.",
           images: [["pp2-valencia-14", "Valencia on model"], ["pp2-greisy-15", "Greisy on model"], ["pp2-oswald-15", "Oswald on model"], ["pp2-clovis-16", "Clovis on model"], ["pp2-pixie-21", "Pixie on model"]] },
         { title: "On-Model Shots — All Colors",
           desc: "All color variants styled together with a model, giving shoppers a quick sense of the full collection in a real-life setting.",
           images: [["pp2-valencia-22", "Valencia — all colors on model"], ["pp2-greisy-23", "Greisy — all colors on model"], ["pp2-oswald-24", "Oswald — all colors on model"], ["pp2-clovis-26", "Clovis — all colors on model"], ["pp2-pixie-24", "Pixie — all colors on model"]] },
         { title: "Zalora Catalog Shots",
           desc: "Standardized catalog photos made to Zalora's marketplace guidelines: a plain white background, no logo, and fixed top and front angles for every color variant.",
           images: [["pp2-greisy-depan-black", "Greisy — Black, front view"], ["pp2-oswald-samping-black", "Oswald — Black, side view"], ["pp2-clovis-atas-bronze", "Clovis — Bronze, top view"]] }
       ] }
   ] },

 { id: "ymki", stats: [["2", "Partner events"], ["18", "Designs featured"]], cat: "brand", title: "YMKI", year: "2024",
   short: "Posters and campaign visuals for a digital literacy foundation's programs.",
   intro: "Yayasan MyEduSolve Karya Indonesia (YMKI) is a foundation that promotes digital literacy among young Indonesians. As a volunteer graphic designer, I created Instagram posters, event visuals, and campaign materials for its programs, from a virtual seminar with Telkom Indonesia to the Duta Komunitas Literasi ambassador recruitment.",
   meta: ["Graphic Designer", "Volunteer", "Feb 2024 – Aug 2024"],
   obj: ["Design announcement posters, recaps, and testimonial posts for YMKI's events with partners such as Telkom Indonesia and GTP UGM.",
         "Create regular educational Instagram posts that explain digital literacy topics, such as cyber grooming and children's screen time, in a simple, friendly way.",
         "Produce greeting posts for national and religious commemorative days."],
   res: ["Designed the full visual flow for two partner events, from the pre-event poster to the post-event recap and participant testimonials.",
         "Delivered educational posts and recruitment campaigns, including the Literacy Community Ambassador (Duta Komunitas Literasi) program.",
         "Kept every post consistent with YMKI's visual system of bold organic shapes in red, blue, and yellow."],
   kv: "YMKI's feed is built on bold organic shapes in red, blue, and yellow, paired with grayscale photo cut-outs so the people in each post stand out. The playful shapes keep serious topics like cyber grooming approachable for a young audience, while clear headlines make every post easy to read at a glance.",
   tags: ["Event Poster", "Educational Post", "Commemorative Day"], tools: ["Adobe Illustrator", "Spreadsheet"],
   imgBase: "assets/images/ymki/",
   thumb: "assets/images/ymki/hari-perempuan.jpg",
   cover: { label: "Duta Komunitas Literasi recruitment", src: "assets/images/ymki/duta-literasi.jpg" },
   gallery: [{ label: "International Women's Day", src: "assets/images/ymki/hari-perempuan.jpg" }, { label: "YMKI × Telkom virtual seminar", src: "assets/images/ymki/telkom-seminar.jpg" }, { label: "Cyber grooming awareness", src: "assets/images/ymki/cyber-grooming.jpg" }],
   sections: [
     { title: "Event Collaboration", layout: "fan",
       desc: "Visuals for YMKI's events with partner institutions: a virtual seminar with Telkom Indonesia and a Microsoft Excel training with GTP UGM. Each event got a matching set, from the announcement poster to the recap and the participants' testimonials, so the whole story reads as one campaign.",
       images: [["telkom-seminar", "YMKI × Telkom virtual seminar — speaker poster"], ["telkom-recap", "Virtual seminar recap"], ["seminar-testimonials", "Virtual seminar — participant testimonials"], ["excel-recap", "Microsoft Excel Training YMKI × GTP UGM — recap"], ["excel-testimonials", "Excel Training — participant testimonials"]] },
     { title: "Regular Educational Post", layout: "fan",
       desc: "Regular feed posts that break digital literacy into simple, friendly visuals for a young audience, from awareness topics like cyber grooming and screen time to quotes, program recaps, and the Duta Komunitas Literasi ambassador recruitment.",
       images: [["cyber-grooming", "Ever heard of cyber grooming?"], ["literacy-quote", "Literacy quote — Taylor Ellwood"], ["pilar-literasi", "4 Pillars of Digital Literacy"], ["screen-time", "Should children's screen time be limited?"], ["ambassador-recruitment", "Duta Komunitas Literasi — recruitment"], ["duta-literasi", "Duta Komunitas Literasi — registration extended"], ["duta-literasi-requirements", "Duta Komunitas Literasi — requirements"], ["program-recap", "YMKI program recap"]] },
     { title: "Commemorative Days", layout: "fan",
       desc: "Greeting posts for national and religious holidays, each pairing a grayscale photo cut-out with the brand's colorful shapes so the feed stays warm and recognizable throughout the year.",
       images: [["hari-perempuan", "International Women's Day"], ["nyepi", "Nyepi Day, Saka New Year 1946"], ["ramadan", "Ramadan 1445 H"], ["pancasila", "Pancasila Day 2024"], ["eid-al-adha", "Eid al-Adha 1445 H"]] }
   ] },

 { id: "book-illustration", stats: [["8", "Book titles illustrated"], ["43", "Illustrations & maps"], ["95.5", "Art Director evaluation"]], cat: "editorial", title: "Book Illustration — Mizan Pustaka", year: "2023 – 2024",
   short: "Realistic pencil illustrations, maps, and diagrams for 8 Mizan book titles.",
   intro: "A 4-month internship in the Artistic division of PT. Mizan Pustaka, a Bandung-based publishing house. The work focused on illustrating editorial content for books released in 2023–2024. After the internship ended, I continued to take on book illustration projects on request.",
   meta: ["Illustrator Intern", "Internship", "Sep 2023 – Jan 2024"],
   obj: ["Illustrate editorial content for each book title, mainly realistic grayscale pencil portraits and scene illustrations based on briefs and story excerpts from editors.",
         "Collaborate closely with the editorial and artistic teams, incorporating feedback through structured revision cycles."],
   res: ["Redrew historical maps and diagrams in a clean grayscale style so they sit naturally beside the text in non-fiction titles.",
         "Illustrated 8 book titles, including 2 illustrations (Seni dan Estetika Islam; Kita dan Mereka) approved on first submission with a perfect internal rating.",
         "Completed the internship with an evaluation score of 95.5/100 from the Art Director, covering discipline, work quality, and collaboration."],
   kv: "The editorial illustrations use a realistic pencil style with visible graphite texture, valued for its strong artistic character in adult non-fiction and literary titles. The work ranged from portraits (Kisah Kita, Seni dan Estetika Islam) to narrative scenes (Dunia Anna, The Magic Library, Kita dan Mereka), plus digital map illustrations for non-fiction content.",
   tags: ["Pencil Illustration", "Editorial", "Map & Diagram"], tools: ["Pencil and Paper"],
   imgBase: "assets/images/mizan/",
   thumb: "assets/images/mizan/ml-1.jpg",
   cover: { label: "Rainy night bookstall, Dunia Anna", src: "assets/images/mizan/da-5.jpg" },
   gallery: [{ label: "Mother and child, The Magic Library", src: "assets/images/mizan/ml-1.jpg" }, { label: "Rainy night bookstall, Dunia Anna", src: "assets/images/mizan/da-5.jpg" }],
   sections: [
     { title: "Filsafat Moral", layout: "fan",
       desc: "A series of graphite portraits of the thinkers discussed in the book, drawn in a consistent vignette format so they read as one set across the chapters.",
       images: [["fm-1", "Portrait I"], ["fm-2", "Portrait II"], ["fm-3", "Portrait III"], ["fm-4", "Portrait IV"], ["fm-5", "Portrait V"]] },
     { title: "Orang Makan Orang", layout: "fan",
       desc: "A character illustration for the book, combining a traditional mask and a ceremonial robe into a single satirical figure.",
       images: [["omo-1", "Masked figure in a ceremonial robe"]] },
     { title: "Kita dan Mereka", layout: "fan",
       desc: "The largest set of the project: pencil illustrations for the book's reflective passages, plus maps and diagrams redrawn in a clean grayscale style so they sit naturally beside the text.",
       images: [["kdm-1", "Scholar portrait"], ["kdm-2", "Man by the water"], ["kdm-3", "Plato's cave"], ["kdm-4", "The triune brain"], ["kdm-5", "Evolution of the letter A"], ["kdm-6", "Indo-European migration map"], ["kdm-7", "Indian Ocean & Pacific migration map"], ["kdm-8", "Silk Road trade routes"], ["kdm-9", "The Columbian Exchange"], ["kdm-10", "Expansion of the Russian Empire, 1553–1914"], ["kdm-11", "Sykes–Picot line, 1916"], ["kdm-12", "Wakhan Corridor, Afghanistan"], ["kdm-13", "Border walls in Europe, 1990–2017"]] },
     { title: "Kisah Kita", layout: "fan",
       desc: "A realistic pencil portrait of the author couple, drawn from a reference photo for the book.",
       images: [["kk-1", "Author portrait"]] },
     { title: "Seni dan Estetika Islam", layout: "fan",
       desc: "Graphite portraits of the figures featured in the book, including one illustration approved on its first submission with a perfect internal rating.",
       images: [["sei-1", "Portrait I"], ["sei-2", "Portrait II"], ["sei-3", "Portrait III"], ["sei-4", "Portrait IV"]] },
     { title: "Dunia Anna", layout: "fan",
       desc: "Scene illustrations that follow the story's settings, from quiet interiors to snowy landscapes, rendered with soft graphite tones to match the novel's reflective mood.",
       images: [["da-1", "Elderly woman by the bed"], ["da-2", "Girl at the shelf"], ["da-3", "Conversation by the winter window"], ["da-4", "Sleigh ride through the pines"], ["da-5", "Rainy night bookstall"], ["da-6", "Courtyard archway"], ["da-7", "Mountain courtyard at dusk"], ["da-8", "Reader under the night sky"]] },
     { title: "The Magic Library", layout: "fan",
       desc: "Narrative illustrations for a children's novel, focusing on the characters' expressions and the spaces where the story unfolds.",
       images: [["ml-1", "Mother and child"], ["ml-2", "Boy with a drawing"], ["ml-3", "Girl at the café window"], ["ml-4", "Siblings"], ["ml-5", "Children at the library entrance"], ["ml-6", "Conversation in the hallway"], ["ml-7", "Bedroom interior"]] },
     { title: "Lelaki Sunni di Kota Syi'ah — Cover", layout: "fan",
       desc: "Pencil artwork prepared for the book cover: the flag bearer figure, a study of the walking pose, and the open landscape used as the background, shown next to the published cover.",
       images: [["ls-1", "Published cover"], ["ls-2", "Flag bearer"], ["ls-3", "Walking figure study"], ["ls-4", "Landscape background"]] }
   ],
 },

 { id: "ar-book", stats: [["52", "Pages"], ["16", "Traditional instruments"], ["25", "Students tested"]], cat: "editorial", title: "Mengenal Waditra Sunda", year: "2024",
   short: "An illustrated children's book that comes alive in AR, introducing 16 Sundanese instruments.",
   intro: "My undergraduate thesis project, exploring where illustration, book design, and technology meet. “Mengenal Waditra Sunda” is a printed children's book paired with an AR mobile app that introduces 16 traditional Sundanese musical instruments to elementary school readers through illustrations, 3D models, and interactive audio.",
   meta: ["Illustrator, Book Designer & AR Developer", "Undergraduate Thesis"],
   obj: ["Illustrate and design a complete 52-page book covering 16 traditional Sundanese instruments, in a cartoon style suited to elementary school readers.",
         "Design the full book layout, including cover, typography, and page structure, where each instrument illustration also works as an AR marker.",
         "Build an AR mobile experience that brings each illustration to life with 3D models and audio, developed and validated through testing with real students."],
   res: ["Illustrated and laid out a 52-page softcover book featuring 16 traditional instruments, validated by subject-matter and media experts, including practitioners from PT. Mizan Pustaka.",
         "Built a marker-based AR experience with Unity and Vuforia, combining custom 3D models (Blender) and recorded audio for each instrument.",
         "Usability-tested with 25 sixth-grade students at SD Labschool UPI, with a strongly positive response; most students were eager to keep exploring the instruments through the app."],
   kv: "The illustrations follow a warm, cartoon style common in children's textbooks, paired with a decorative script font for headlines to evoke a traditional feel and a clean sans-serif for readable body text. Each instrument has a full-page illustration (doubling as its AR marker), alongside a scene showing the instrument being played in its cultural context.",
   tags: ["Book Design", "Illustration", "Augmented Reality"], tools: ["Adobe InDesign", "Adobe Illustrator", "Clip Studio Paint", "Figma", "Blender", "Adobe Audition", "Unity 3D", "Vuforia"],
   imgBase: "assets/images/ar/",
   thumb: "assets/images/ar/cover.jpg",
   cover: { label: "Mengenal Waditra Sunda book cover", src: "assets/images/ar/cover.jpg" },
   gallery: [{ label: "Book cover", src: "assets/images/ar/cover.jpg" }],
   sections: [
     { title: "Book Cover & Printed Book", layout: "grid-2",
       desc: "The full wraparound cover and the final printed softcover. A decorative script headline and swirling golden ornaments give the book a traditional Sundanese feel, while the teal and yellow palette keeps it bright and inviting for children.",
       images: [["cover", "Full cover spread"], ["printed-book", "Printed book"]] },
     { title: "Instrument Illustrations", layout: "grid-3",
       desc: "Each of the 16 traditional instruments was illustrated in detail, and many are shown being played in their cultural context. Every full-page illustration also works as the AR marker that triggers the 3D model in the app.",
       images: [["ilus-calung", "Calung gantung, played"], ["ilus-goong", "Goong"], ["ilus-kendang", "Kendang"], ["ilus-celempung", "Celempung"], ["ilus-kendang-dogdog", "Dogdog"]] },
     { title: "3D Models", layout: "grid-2",
       desc: "Custom 3D models built in Blender so children can rotate and explore each instrument in augmented reality.",
       images: [["3d-rebab", "Rebab 3D model"], ["3d-dogdog", "Dogdog 3D model"]] },
     { title: "AR App Interface", layout: "grid-3 tall",
       desc: "A mobile app interface designed to match the book's visual identity, with the same ornaments, palette, and characters, so the printed book and the app feel like one experience.",
       images: [["app-mainmenu-mockup", "Main menu on device"], ["app-mainmenu", "Main menu"], ["app-settings", "Settings screen in AR mode"]] },
     { title: "UI Elements & User Flow", layout: "stack",
       desc: "The UI building blocks and the app's user flow, mapped out before development to keep navigation simple for young users.",
       images: [["ui-elements", "UI elements"], ["user-flow", "Mind map & user flow"]] }
   ],
 },

 { id: "tongkat-ajaib", stats: [["8", "Illustrated pages"], ["2023", "Copyright registered"]], cat: "editorial", title: "Tongkat Ajaib", year: "2023",
   short: "A copyrighted fantasy storybook about kindness, written and illustrated from scratch.",
   intro: "A fantasy storybook created as the final project for a Digital Illustration course, aimed at early elementary readers (ages 6–10). “Tongkat Ajaib” follows Tia, a young girl who chooses to care for her sick mother instead of playing with her friends, and is rewarded with a magic wand for her devotion. The story carries a moral message about devotion and kindness toward parents.",
   meta: ["Writer & Illustrator", "Course Project"],
   obj: ["Develop the full pre-production, including synopsis, moral message, and an 8-page visual breakdown, before moving into illustration.",
         "Illustrate a complete 8-page children's storybook with consistent character design and expressive, narrative-driven scenes.",
         "Translate the story's emotional beats (joy, worry, exhaustion, and wonder) into visuals appropriate for young readers."],
   res: ["Completed a full pre-production package (synopsis, moral message, and 8-page breakdown), ensuring a clear narrative structure from the first page.",
         "Illustrated 8 complete pages with consistent character design across a range of emotions and settings.",
         "Officially registered the work for copyright with Kemenkumham RI in December 2023, securing legal ownership and protection as an original literary and artistic work."],
   kv: "Character-driven illustrations with warm, expressive scenes that follow the story's emotional arc, from Tia's cheerful walk home, to the quiet tension of caring for her sick mother, to the magical arrival of the fairy godmother. Each spread balances a clear narrative focus with soft, child-friendly visual storytelling.",
   tags: ["Children's Book", "Character Design", "Storytelling"], tools: ["Clip Studio Paint", "Adobe Illustrator"],
   gallery: [{ label: "Cover buku", src: "" }, { label: "Mockup isi buku", src: "" }, { label: "Karakter", src: "" }] },

 { id: "wind-blow", stats: [["6", "Characters designed"]], cat: "personal", title: "Wind Blow", year: "",
   short: "A supernatural drama comic built from world-building to finished pages.",
   intro: "A solo comic created as the final project for a Comic course, covering the full production pipeline from world-building and character design to finished comic pages. “Wind Blow” follows Nala, a young painter chasing an international art award with the help of a mysterious imaginary friend, in a supernatural drama about grief, ambition, and letting go.",
   meta: ["Writer & Comic Artist", "Course Project"],
   obj: ["Develop a complete pre-production package (premise, synopsis, plot breakdown, timeline, character design, and environment design) to build a cohesive story world.",
         "Design the main and supporting characters, including each one's personality, backstory, and visual identity.",
         "Produce final comic pages from the storyboard, turning the pre-production work into finished sequential art."],
   res: ["Built a complete story world from scratch: premise, synopsis, plot breakdown, and a cast of 6 characters with individual backstories and a relationship map.",
         "Completed environment designs, a mood board, and a storyboard as the visual foundation for the final artwork.",
         "Illustrated the final comic pages independently, completing the entire pipeline from concept to finished sequential art."],
   kv: "The characters and scenes use a grounded, expressive art style that balances everyday school-life realism with the story's supernatural undertone. Mood boards and environment designs set a consistent emotional tone across the comic's intimate, drama-driven scenes.",
   tags: ["Comic", "World-building", "Character Design"], tools: ["Clip Studio Paint", "Adobe Illustrator"],
   gallery: [{ label: "Mockup buku", src: "" }, { label: "Isi komik", src: "" }, { label: "Karakter", src: "" }] },

 { id: "portrait", cat: "personal", title: "Portrait Drawing", year: "",
   short: "Hand-drawn portrait studies. " + NOTE("deskripsi menyusul"),
   intro: NOTE("Deskripsi Portrait Drawing belum ada (di PDF masih ter-copy dari Wind Blow). Nanti diisi."),
   meta: [], obj: null, res: null, kv: null,
   tags: ["Drawing", "Portrait"], tools: ["Pencil and Paper"],
   gallery: [{ label: "Portrait 1", src: "" }, { label: "Portrait 2", src: "" }, { label: "Portrait 3", src: "" }] }
];
