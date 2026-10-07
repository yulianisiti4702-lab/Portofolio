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
    tags: ["Editorial Illustration", "Pencil Drawing", "Catalog Design"] }
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
  ],
  programs: [
    { title: "Kampus Merdeka Independent Study (MSIB)", org: "BISA AI", date: "Feb 2023 – Jun 2023",
      desc: "A government-backed program where I learned user-centered design and design thinking, closing with a capstone project built from user research to prototype." }
  ]
};

const ACHIEVEMENTS = [
  { year: "2024", items: [
    { title: "Adobe Certified Professional", sub: "Graphic Design & Illustration Using Adobe Illustrator · Score 882/1000", date: "Apr 2024" },
    { title: "BNSP Certificate of Competence", sub: "Medior Graphic Designer (Desain Grafis Madya) · LSP P1 Universitas Pendidikan Indonesia", date: "Apr 2024" },
    { title: "Winner, MyEduSolve Design Challenge", sub: "“The Happiness of Giving” · MyEduSolve, YMKI & Hoshizora Foundation", date: "Feb 2024" },
    { title: "PTESOL English Proficiency · 467/677", sub: "Language Center, Universitas Pendidikan Indonesia", date: "Jan 2024" },
    { title: "95.5/100 Internship Evaluation", sub: "Art Director, PT. Mizan Pustaka", date: "Jan 2024" } ] },
  { year: "2023", items: [
    { title: "Registered Copyright: Tongkat Ajaib", sub: "Children's storybook illustration · Kemenkumham RI", date: "Dec 2023" },
    { title: "Basic Adobe Illustrator: Mastering Fundamental", sub: "Training completion · SekolahDesain", date: "Jan 2023" } ] },
  { year: "2022", items: [
    { title: "Most Favorite Reels Video", sub: "JFLS Goes to School 2022", date: "2022" } ] },
  { year: "2020", items: [
    { title: "Jabar Future Leaders Scholarship", sub: "Full undergraduate scholarship, West Java Provincial Government", date: "2020" } ] }
];

// Kartu sertifikat di "Portfolio Showcase" halaman depan.
// img kosong = kartu teks saja (dipakai untuk dokumen yang memuat data pribadi).
const CERTIFICATES = [
  { title: "Adobe Certified Professional", issuer: "Adobe · Graphic Design & Illustration Using Adobe Illustrator", date: "Apr 2024", img: "assets/images/certificates/adobe.jpg" },
  { title: "BNSP Certificate of Competence", issuer: "Medior Graphic Designer · LSP P1 Universitas Pendidikan Indonesia", date: "Apr 2024", img: "assets/images/certificates/bnsp.jpg" },
  { title: "Winner, MyEduSolve Design Challenge", issuer: "MyEduSolve, YMKI & Hoshizora Foundation", date: "Feb 2024", img: "assets/images/certificates/myedusolve.jpg" },
  { title: "Basic Adobe Illustrator: Mastering Fundamental", issuer: "SekolahDesain", date: "Jan 2023", img: "assets/images/certificates/sekolahdesain.jpg" },
  { title: "Registered Copyright: Tongkat Ajaib", issuer: "Kemenkumham RI · Children's storybook illustration", date: "Dec 2023", img: "" },
  { title: "PTESOL English Proficiency · 467", issuer: "Language Center, Universitas Pendidikan Indonesia", date: "Jan 2024", img: "" }
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
 { id: "shoe-police", cat: "brand", title: "Shoe Police", year: "2026",
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
   imgBase: "assets/images/dar/",
   thumb: "assets/images/dar/dongeng-rafa.jpg",
   cover: { label: "Buy 1 Kisah 25 Nabi promo banner", src: "assets/images/dar/promo-banner.jpg" },
   gallery: [{ label: "Dongeng Sebelum Tidur", src: "assets/images/dar/dongeng-rafa.jpg" }],
   sections: [
     { title: "Instagram Feed Promotions", layout: "grid-2",
       desc: "Feed posts that introduce each book through a small story, a quote, or a learning moment, instead of a hard sell. Bright yellows and greens, rounded shapes, and friendly characters keep every post approachable for parents and their preschool children.",
       images: [["dongeng-rafa", "Dongeng Sebelum Tidur"], ["einstein", "Read them fairy tales (Albert Einstein quote)"], ["al-ikhlas", "Juz Amma learning post"], ["juz-amma", "Juz Amma for Kids launch"]] },
     { title: "Activity Sheet & Marketplace Banner", layout: "grid-2",
       desc: "A bonus activity sheet created as a purchase incentive for Juz Amma for Kids, letting children track their daily Qur'an reading, prayers, and good deeds, plus a marketplace banner for a bundle promotion.",
       images: [["activity-sheet", "Muslim kids' daily activity sheet"], ["promo-banner", "Kisah 25 Nabi bundle banner"]] }
   ],
 },

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
   imgBase: "assets/images/kkpk/",
   thumb: "assets/images/kkpk/neighbors-secret.jpg",
   cover: { label: "The Neighbor's Secret comic teaser", src: "assets/images/kkpk/neighbors-secret.jpg" },
   gallery: [{ label: "The Neighbor's Secret", src: "assets/images/kkpk/neighbors-secret.jpg" }],
   sections: [
     { title: "Book Promotion Content", layout: "grid-3",
       desc: "Carousel openers and teasers that pull young readers into each new title, from a spooky comic preview to a story setup that ends on a cliffhanger, always written and designed to make kids want to read the book.",
       images: [["neighbors-secret", "The Neighbor's Secret — comic teaser"], ["robot-persahabatan", "Robot Persahabatan — story teaser"], ["quiz", "KKPK & DAR! book quiz"]] },
     { title: "Campaigns & Event Posters", layout: "grid-3",
       desc: "Posters for KKPK's reader programs, including a school roadshow with Gramedia, a review challenge, and an English short story competition, keeping the brand's mascots and cheerful palette consistent across every campaign.",
       images: [["roadshow", "KKPK school roadshow poster"], ["pena-sahabat", "Pena Sahabat review challenge"], ["english-competition", "English Short Story Competition"]] }
   ],
 },

 { id: "seis", cat: "product", featured: true, title: "SEIS Official Shop", year: "2025",
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
   imgBase: "assets/images/seis/",
   cover: { label: "Payday Sale banner", src: "assets/images/seis/banner-payday.jpg" },
   thumb: "assets/images/seis/ads-venice.jpg",
   gallery: [{ label: "Venice ad", src: "assets/images/seis/ads-venice.jpg" }, { label: "Meredith Instagram post", src: "assets/images/seis/ig-meredith.jpg" }, { label: "Top 5 Best Seller banner", src: "assets/images/seis/banner-top5.jpg" }],
   sections: [
     { title: "Ad Photography", layout: "grid-3",
       desc: "Photos created specifically for paid ads, each built on the same layout system: one hero product, a serif product name, a short tagline, and plenty of white space so the shoe stands out in a fast-scrolling feed. I delivered 30 ad photos every month to support ongoing campaigns.",
       images: [["ads-venice", "Venice"], ["ads-jeslin", "Jeslin"], ["ads-clover", "Clover"], ["ads-jona", "Jona"], ["ads-esme", "Esme"], ["ads-joy", "Joy"]] },
     { title: "Instagram Campaign Series", layout: "grid-3 tall",
       desc: "Two visual series for the brand's Instagram feed. The Maroon series uses a deep red backdrop to make each product feel bold and premium, while the Light Editorial series pairs soft grey backgrounds with playful hand and leg poses for a magazine-like look. Building posts as series keeps the feed cohesive while every product still gets its own moment.",
       images: [["ig-meredith", "Maroon series — Meredith"], ["ig-meredith-set", "Maroon series — Meredith collection"], ["ig-wilona-red", "Maroon series — Wilona"], ["ig-mercy", "Light Editorial — Celeste"], ["ig-wilona", "Light Editorial — Wilona"], ["ig-valencia", "Light Editorial — Valencia"]] },
     { title: "Marketplace Banners & Campaigns", layout: "grid-2",
       desc: "Banners for product launches and major marketplace campaigns such as Payday, 6.6, and the affiliate program, designed to grab attention among hundreds of competing listings. I produced 12 banners a month with 3 design options each, all aligned with the brand's warm, minimal visual identity.",
       images: [["banner-payday", "Payday Sale"], ["banner-66", "6.6 Mid Year Sale"], ["banner-affiliate", "Affiliate Program"], ["banner-top5", "Top 5 Best Seller"], ["banner-sale50", "Sale up to 50%"], ["size-chart", "Size chart & foot measuring guide"]] },
     { title: "Collection Banners", layout: "stack",
       desc: "A banner set for each product category in the store. One shared layout, typography, and color treatment ties every collection together, so shoppers can move between categories and still feel they're in the same store.",
       images: [["collection-sandals", "Sandals Collection"], ["collection-docmart", "Docmart Collection"], ["collection-mules", "Mules Collection"]] },
     { title: "Product Photography", layout: "grid-2",
       desc: "Clean product shots that show every detail of the shoe, from silhouette and material to embellishment and sole. Every new release gets a complete set per color variant, from styled shots with props to plain catalog shots from multiple angles.",
       images: [["product-1", "Clovis — styled shot"], ["product-2", "Clovis — styled shot"], ["product-3", "Pixie — styled shot"], ["product-4", "Pixie — top view catalog shot"]] },
     { title: "Model & Lifestyle Shots", layout: "grid-2",
       desc: "Styled shots with a model that show real-world fit, scale, and how each pair looks when worn, helping customers picture the product in their own daily life.",
       images: [["model-1", "Clovis on model"], ["model-2", "Pixie on model"], ["model-3", "Styled with lace socks"], ["model-4", "Denver flats"]] },
     { title: "TikTok Covers", layout: "grid-2 tall",
       desc: "Video covers for TikTok campaigns, designed to communicate the offer at a glance while keeping the product as the hero.",
       images: [["tiktok-1", "9.9 Super Shopping Sale"], ["tiktok-2", "9.9 Super Shopping Sale — model version"]] }
   ] },

 { id: "ymki", cat: "brand", title: "YMKI", year: "2024",
   short: "Posters and campaign visuals for a digital literacy foundation's programs.",
   intro: "Yayasan MyEduSolve Karya Indonesia (YMKI) is a foundation that promotes digital literacy among young Indonesians. As a volunteer graphic designer, I created Instagram posters, event visuals, and campaign materials for its programs, from a virtual seminar with Telkom Indonesia to the Duta Komunitas Literasi ambassador recruitment.",
   meta: ["Graphic Designer", "Volunteer", "Feb 2024 – Aug 2024"],
   obj: null, res: null, kv: null,
   tags: ["Event Poster", "Infographic", "Illustration"], tools: [],
   imgBase: "assets/images/ymki/",
   thumb: "assets/images/ymki/hari-perempuan.jpg",
   cover: { label: "Duta Komunitas Literasi recruitment", src: "assets/images/ymki/duta-literasi.jpg" },
   gallery: [{ label: "International Women's Day", src: "assets/images/ymki/hari-perempuan.jpg" }],
   sections: [
     { title: "Event & Campaign Posters", layout: "grid-3",
       desc: "Posters for seminars and recruitment campaigns, built on a bold, playful system of organic shapes in red, blue, and yellow so every announcement is instantly recognizable as YMKI.",
       images: [["telkom-seminar", "YMKI × Telkom virtual seminar"], ["duta-literasi", "Duta Komunitas Literasi recruitment"], ["duta-literasi-requirements", "Recruitment requirements"]] },
     { title: "Educational Content", layout: "grid-2",
       desc: "Infographic posts that break digital literacy into simple, friendly visuals for a young audience.",
       images: [["pilar-literasi", "4 Pillars of Digital Literacy"], ["ymki-awareness", "Get to know YMKI"]] },
     { title: "Commemorative Day Illustration", layout: "grid-2",
       desc: "An illustrated greeting for International Women's Day, using flowing hair and flowers to celebrate women with warmth and color.",
       images: [["hari-perempuan", "International Women's Day"]] }
   ] },

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
   imgBase: "assets/images/mizan/",
   thumb: "assets/images/mizan/pencil-mother.jpg",
   cover: { label: "Pencil illustration", src: "assets/images/mizan/pencil-church.jpg" },
   gallery: [{ label: "Pencil illustration", src: "assets/images/mizan/pencil-mother.jpg" }],
   sections: [
     { title: "Editorial Pencil Illustrations", layout: "grid-3",
       desc: "Realistic grayscale illustrations drawn with graphite pencil for adult non-fiction and literary titles. Each piece started from an editor's brief or a story excerpt, then moved through sketch, revision, and final rendering.",
       images: [["pencil-mother", "Mother and child"], ["pencil-siblings", "Siblings portrait"], ["pencil-boy", "Boy with a drawing"], ["pencil-conversation", "Conversation scene"], ["pencil-church", "Church entrance scene"]] },
     { title: "Original Artwork", layout: "grid-2",
       desc: "The hand-drawn originals behind the published illustrations, including the Kita dan Mereka illustration that was approved on its first submission.",
       images: [["original-kita-dan-mereka", "Kita dan Mereka — original drawing"], ["original-gua-plato", "Plato's Cave — original drawing"]] },
     { title: "Published Titles", layout: "grid-2",
       desc: "Books from Mizan Pustaka that I worked on during the internship. " + NOTE("cek: ilustrasi apa yang dikerjakan di tiap buku ini?"),
       images: [["book-lelaki-sunni", "Lelaki Sunni di Kota Syi'ah"], ["book-filsafat-moral", "Filsafat Moral"], ["book-dunia-anna", "Dunia Anna"], ["book-magic-library", "The Magic Library"]] },
     { title: "KKPK Digital Catalog", layout: "grid-2",
       desc: "Digital product catalogs for the KKPK series (2021 and 2022 editions), designed within the brand guidelines: playful mascots, a bright palette, and a clear layout that lets parents and schools compare dozens of titles at a glance.",
       images: [["catalog-2021-cover", "Catalog 2021 — cover"], ["catalog-2022-cover", "Catalog 2022 — cover"], ["catalog-2021-page", "Catalog 2021 — inside page"], ["catalog-2022-page", "Catalog 2022 — inside page"]] }
   ],
 },

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

 { id: "tongkat-ajaib", cat: "editorial", title: "Tongkat Ajaib", year: "",
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
