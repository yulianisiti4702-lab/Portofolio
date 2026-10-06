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
  quote: "Every project starts with a story I want to tell visually."
};

const SKILLS = [
  { name: "Graphic Design", desc: "Visuals that carry a brand's voice", items: ["Brand Identity", "Social Media Design", "Layout Design", "Typography", "Marketplace Banners", "Book Mockups"] },
  { name: "Illustration", desc: "From pencil realism to playful characters", items: ["Digital Illustration", "Editorial Illustration", "Character Design", "Drawing", "Painting", "Comic & Storyboard"] },
  { name: "Visual Content", desc: "Content made to stop the scroll", items: ["YouTube Thumbnails", "Instagram Carousels", "Product Photography", "Basic Video Editing", "Content Planning"] },
  { name: "UI/UX Design", desc: "User-centered digital products", items: ["UX Research", "User Flow", "Wireframing", "Prototyping", "Design Thinking"] }
];

const TOOLS = ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Affinity Designer", "Clip Studio Paint", "Figma", "Canva", "CapCut", "Blender", "Unity"];

const EXPERIENCE = [
  { company: "PT. Kulturama Virtua Solusindo", role: "Graphic Designer", type: "Full-time", start: "Apr 2026", end: "Present", location: "Bandung",
    desc: "Designing visual content for the digital media of Shoe Police and Shoe Workshop while keeping every asset consistent with each brand's identity. I produce YouTube thumbnails for long- and short-form videos, Instagram carousels, and other social assets every month, consistently reaching 95%+ of content production targets.",
    tags: ["YouTube Thumbnail", "Instagram Carousel", "Social Media Design", "Brand Consistency"] },
  { company: "PT. Bening Mata Santosa", role: "Staff Casual Admin", type: "Casual", start: "Nov 2025", end: "Feb 2026", location: "Jakarta",
    desc: "Managed company administrative documents, including activity and financial reports for partnership projects, and prepared and checked partnership contracts to make sure every document was complete.",
    tags: ["Documentation", "Reporting", "Contract Administration"] },
  { company: "SEIS Official Shop", role: "Graphic Designer & Photographer", type: "Full-time", start: "Apr 2025", end: "Nov 2025", location: "Bandung",
    desc: "Produced product photography for marketplace and digital marketing, with multiple visual options for every product. Designed marketplace banners, promotional materials, and launch visuals in line with the brand identity, and planned social media content through Meta's platform.",
    tags: ["Product Photography", "Marketplace Banner", "Ads Visual", "Meta Business"] },
  { company: "PT. Mizan Pustaka", role: "Freelance Graphic Designer", type: "Freelance", start: "Nov 2024", end: "Feb 2025", location: "Bandung",
    desc: "Designed digital and print promotional materials for DAR! Mizan and KKPK, including Instagram feeds, stories, banners, and Reels thumbnails, plus a Muslim kids' activity sheet and book mockups, producing 50+ designs a month.",
    tags: ["Instagram Feed", "Banner", "Book Mockup", "Activity Sheet"] },
  { company: "PT. Mizan Pustaka", role: "Illustrator Intern", type: "Internship", start: "Sep 2023", end: "Jan 2024", location: "Bandung",
    desc: "Created digital illustrations for book editorial needs with Adobe Illustrator and InDesign, including the realistic pencil cover illustration for Lelaki Sunni di Kota Syi'ah and interior illustrations for seven titles. Completed the internship with a 95.5/100 evaluation from the Art Director.",
    tags: ["Editorial Illustration", "Pencil Drawing", "Catalog Design"] },
  { company: "BISA AI (MSIB Independent Study)", role: "UI/UX Design Participant", type: "Independent Study", start: "Feb 2023", end: "Jun 2023", location: "Bandung",
    desc: "Learned user-centered digital product design and designed a mobile app interface in Figma through UX research, user flows, wireframing, and prototyping, closing with a design-thinking capstone project.",
    tags: ["Figma", "UX Research", "Prototyping"] }
];

const VOLUNTEER = [
  { org: "Yayasan MyEduSolve Karya Indonesia (YMKI)", role: "Graphic Designer", date: "Feb 2024 – Aug 2024", desc: "Designed 15 Instagram content pieces with consistent visuals and clear communication." },
  { org: "JFLS Goes to School 2023", role: "Field Coordinator", date: "Oct 2023 – Dec 2023", desc: "Reached 1,300+ participants across Kabupaten Bandung with an 84.95% satisfaction rate." },
  { org: "Beasiswa Rema Berdaya", role: "Graphic Designer", date: "Sep 2022 – Jan 2023", desc: "Sponsorship proposal designs helped increase program funding by 60% and attract 153 participants." },
  { org: "JFLS Goes to School 2022", role: "Graphic Designer", date: "Apr 2022 – Jul 2022", desc: "Created Instagram designs and Reels, winning the “Most Favorite Reels Video” award." },
  { org: "HIKAVI (DKV UPI Student Association)", role: "General Secretary", date: "Oct 2021 – Aug 2022", desc: "Managed organizational documentation, archives, and administration." }
];

const EDUCATION = {
  school: "Universitas Pendidikan Indonesia",
  degree: "Bachelor of Design | Visual Communication Design",
  years: "2020 – 2024",
  gpa: "GPA: 3.92 out of 4.00",
  photos: ["", "", ""],
  text: [
    "I studied Visual Communication Design at Universitas Pendidikan Indonesia on a full Jabar Future Leaders Scholarship from the West Java Provincial Government.",
    "My thesis brought illustration, book design, and augmented reality together in an interactive book that introduces traditional Sundanese musical instruments to elementary school children, tested directly with sixth-grade students.",
    "Outside class, I designed for scholarship programs and community events, and served as General Secretary of HIKAVI, the DKV UPI student association."
  ]
};

const ACHIEVEMENTS = [
  { year: "2024", items: [
    { title: "Adobe Certified Professional", sub: "Graphic Design & Illustration Using Adobe Illustrator 2021 · Score 882/1000", date: "2024" },
    { title: "95.5/100 Internship Evaluation", sub: "Art Director, PT. Mizan Pustaka", date: "Jan 2024" } ] },
  { year: "2022", items: [
    { title: "Most Favorite Reels Video", sub: "JFLS Goes to School 2022", date: "2022" } ] },
  { year: "2020", items: [
    { title: "Jabar Future Leaders Scholarship", sub: "Full undergraduate scholarship, West Java Provincial Government", date: "2020" } ] },
  { year: "Tahun?", items: [
    { title: "BNSP Intermediate Graphic Designer", sub: "Desain Grafis Madya · Certified Competent " + NOTE("tahun?"), date: "" },
    { title: "Registered Copyright: Tongkat Ajaib", sub: "Kemenkumham RI " + NOTE("tahun?"), date: "" } ] }
];

const CATEGORIES = [
  { key: "brand", label: "Brand & Social Media" },
  { key: "product", label: "Marketplace & Product" },
  { key: "editorial", label: "Editorial & Illustration" },
  { key: "personal", label: "Personal Work" }
];

const PROJECTS = [
 { id: "shoe-police", cat: "brand", featured: true, title: "Shoe Police", year: "2026",
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
   tags: ["Instagram Carousel", "YouTube Thumbnail", "Video Editing"], tools: [],
   gallery: [{ label: "Mockup HP", src: "" }, { label: "Carousel", src: "" }, { label: "Thumbnail YouTube", src: "" }, { label: "Video", src: "" }] },

 { id: "dar-mizan", cat: "brand", title: "DAR! Mizan", year: "2024 – 2025",
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
   tags: ["Instagram Feed", "Activity Sheet", "Book Mockup"], tools: [],
   gallery: [{ label: "Mockup", src: "" }, { label: "Carousel", src: "" }, { label: "Banner", src: "" }, { label: "Activity sheet", src: "" }] },

 { id: "kkpk", cat: "brand", title: "KKPK", year: "2024 – 2025",
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
   tags: ["Instagram Feed", "Story", "Marketplace Banner"], tools: [],
   gallery: [{ label: "Mockup", src: "" }, { label: "Carousel", src: "" }, { label: "Story / Banner", src: "" }] },

 { id: "seis", cat: "product", title: "SEIS Official Shop", year: "2025",
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
   tags: ["Product Photography", "Marketplace Banner", "Ads"], tools: [],
   gallery: [{ label: "Mockup HP", src: "" }, { label: "Foto model", src: "" }, { label: "Foto produk", src: "" }, { label: "Banner", src: "" }, { label: "Iklan", src: "" }, { label: "Carousel", src: "" }] },

 { id: "book-illustration", cat: "editorial", title: "Book Illustration — Mizan Pustaka", year: "2023 – 2024",
   short: "Realistic pencil illustrations for 7 book titles and KKPK digital catalogs.",
   intro: "A 4-month internship in the Artistic division of PT. Mizan Pustaka, a Bandung-based publishing house. The work covered two tracks: designing digital product catalogs and illustrating editorial content for books released in 2023–2024.",
   meta: ["Illustrator Intern", "Internship", "Sep 2023 – Jan 2024"],
   obj: ["Design digital product catalogs for KKPK (2021 & 2022 editions) following brand guidelines: colorful, with a consistent palette, typography, and mascot characters.",
         "Illustrate editorial content for 7 book titles, mainly realistic grayscale pencil portraits and scene illustrations based on briefs and story excerpts from editors.",
         "Collaborate closely with the editorial and artistic teams, incorporating feedback through structured revision cycles."],
   res: ["Delivered digital catalog designs for KKPK 2021 and 2022; the 2022 edition needed fewer revisions by building on the design system established in 2021.",
         "Illustrated 7 book titles, including 2 illustrations (Seni dan Estetika Islam; Kita dan Mereka) approved on first submission with a perfect internal rating.",
         "Completed the internship with an evaluation score of 95.5/100 from the Art Director, covering discipline, work quality, and collaboration."],
   kv: "The editorial illustrations use a realistic pencil style with visible graphite texture, valued for its strong artistic character in adult non-fiction and literary titles. The work ranged from portraits (Kisah Kita, Seni dan Estetika Islam) to narrative scenes (Dunia Anna, The Magic Library, Kita dan Mereka), plus digital map illustrations for non-fiction content.",
   tags: ["Pencil Illustration", "Editorial", "Catalog Design"], tools: ["Adobe Illustrator", "Adobe InDesign"],
   gallery: [{ label: "Lelaki Sunni di Kota Syi'ah", src: "" }, { label: "Orang Makan Orang", src: "" }, { label: "Katalog KKPK", src: "" }, { label: "Kisah Kita", src: "" }, { label: "Seni dan Estetika Islam", src: "" }, { label: "Kita dan Mereka", src: "" }, { label: "Dunia Anna (re-publish)", src: "" }, { label: "The Magic Library (re-publish)", src: "" }, { label: "Filsafat Moral", src: "" }] },

 { id: "ar-book", cat: "editorial", title: "Mengenal Waditra Sunda", year: "2024",
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
   tags: ["Book Design", "Illustration", "Augmented Reality"], tools: ["Unity", "Vuforia", "Blender"],
   gallery: [{ label: "Mockup buku & AR", src: "" }, { label: "Logo, aplikasi & pengujian", src: "" }, { label: "Karakter & alat musik", src: "" }, { label: "UI, aset 3D & recording", src: "" }] },

 { id: "tongkat-ajaib", cat: "editorial", title: "Tongkat Ajaib", year: "",
   short: "A copyrighted fantasy storybook about kindness, written and illustrated from scratch.",
   intro: "A fantasy storybook created as the final project for a Digital Illustration course, aimed at early elementary readers (ages 6–10). “Tongkat Ajaib” follows Tia, a young girl who chooses to care for her sick mother instead of playing with her friends, and is rewarded with a magic wand for her devotion. The story carries a moral message about devotion and kindness toward parents.",
   meta: ["Writer & Illustrator", "Course Project"],
   obj: ["Develop the full pre-production, including synopsis, moral message, and an 8-page visual breakdown, before moving into illustration.",
         "Illustrate a complete 8-page children's storybook with consistent character design and expressive, narrative-driven scenes.",
         "Translate the story's emotional beats (joy, worry, exhaustion, and wonder) into visuals appropriate for young readers."],
   res: ["Completed a full pre-production package (synopsis, moral message, and 8-page breakdown), ensuring a clear narrative structure from the first page.",
         "Illustrated 8 complete pages with consistent character design across a range of emotions and settings.",
         "Officially registered the work for copyright with Kemenkumham RI, securing legal ownership and protection as an original literary and artistic work."],
   kv: "Character-driven illustrations with warm, expressive scenes that follow the story's emotional arc, from Tia's cheerful walk home, to the quiet tension of caring for her sick mother, to the magical arrival of the fairy godmother. Each spread balances a clear narrative focus with soft, child-friendly visual storytelling.",
   tags: ["Children's Book", "Character Design", "Storytelling"], tools: [],
   gallery: [{ label: "Cover buku", src: "" }, { label: "Mockup isi buku", src: "" }, { label: "Karakter", src: "" }] },

 { id: "wind-blow", cat: "personal", title: "Wind Blow", year: "",
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
   tags: ["Comic", "World-building", "Character Design"], tools: [],
   gallery: [{ label: "Mockup buku", src: "" }, { label: "Isi komik", src: "" }, { label: "Karakter", src: "" }] },

 { id: "portrait", cat: "personal", title: "Portrait Drawing", year: "",
   short: "Hand-drawn portrait studies. " + NOTE("deskripsi menyusul"),
   intro: NOTE("Deskripsi Portrait Drawing belum ada (di PDF masih ter-copy dari Wind Blow). Nanti diisi."),
   meta: [], obj: null, res: null, kv: null,
   tags: ["Drawing", "Portrait"], tools: [],
   gallery: [{ label: "Portrait 1", src: "" }, { label: "Portrait 2", src: "" }, { label: "Portrait 3", src: "" }] }
];
