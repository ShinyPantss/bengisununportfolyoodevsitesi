import { Project, ProjectCategory } from "@/types/project";

// Base path for images and videos in public folder
const img = (folder: string, file: string) => `/${folder}/${file}`;
const vid = (file: string) => `/videos/${file}`;

export const PROJECTS: Project[] = [
  // ——— Assignment ———
  {
    id: "assignment-1",
    title: "Movie  collage  ‘Sevmek Zamanı’",
    category: ProjectCategory.ASSIGNMENT,
    coverImage: img("images/assigment", "asssigment1.jpeg"),
    galleryImages: [],
    description: "Sevmek Zamanı filmine ait bu kolaj çalışmasında, filmin en güçlü ve simgesel ögesi olan kadın portresi, mekânın karşı aksına yerleştirilerek iç mekân kurgusunun odak noktası hâline getirilmiştir. Filmden alınan sahneler ve karakterler kullanılarak, anlatıyı mekânsal bir dile dönüştüren bir iç mekân kompozisyonu oluşturulmuştur. Kolajda yer alan figürler, filmdeki rolleriyle birebir ilişkilendirilmiş; örneğin saz çalan karakter, mekân içerisinde saz çalma eylemiyle temsil edilmiştir. Bu çalışma, filmin duygusal atmosferini ve anlatı dilini iç mekân üzerinden yeniden yorumlamayı amaçlamaktadır.",
    tags: ["Assignment", "Architecture", "Design Study"],
    year: "2025",
    role: "Student",
    tools: ["Hand Drawing", "SketchUp", "Photoshop"],
    location: "Assignment 1"
  },
  {
    id: "assignment-2",
    title: "Bun Burger Workset",
    category: ProjectCategory.ASSIGNMENT,
    coverImage: img("images/assigment", "assigment2.1.jpeg"),
    galleryImages: [
      img("images/assigment", "assigment2.1.jpeg"),
      img("images/assigment", "assigment2.2.jpeg"),
      img("images/assigment", "assisgment2.3.jpeg")
    ],
    description: "Mevcut mekan görsellerini referans alarak yapay zeka desteğiyle oluşturduğum bu moodboard çalışmasında; grafik tasarım dilinde fiziksel atmosferi ve malzeme dokularını, dijital bir kolaj estetiğiyle yeniden yorumladım.",
    tags: ["Assignment", "Design", "Workset", "Moodboard"],
    year: "2025",
    role: "Student",
    tools: ["AutoCAD", "Hand Drawing", "InDesign"],
    location: "Assignment 2"
  },
  {
    id: "assignment-3",
    title: "AI Tool Visualation",
    category: ProjectCategory.ASSIGNMENT,
    coverImage: img("images/assigment", "assigment3.1.jpg"),
    galleryImages: [img("images/assigment", "asssigment3.2.jpg")],
    videos: [vid("assigment3.mp4")],
    description: "Bu bölümde, yapay zekayı bir görselleştirme ve render motoru olarak kullanarak tasarım sürecimi hızlandırdım. Üst kısımda; çizgisel bir eskizin mimari bir yapıya dönüşümünü, alt kısımda ise 'ÇEKÜL' projesine ait ham cephe modelinin (facade model), doku ve atmosfer eklenerek mekansal bir kimlik kazanmasını görselleştirdim. Tasarımın iç mekan kurgusunu, ham 3D modellerden (interior models) yapay zeka destekli fotorealistik renderlara dönüştürdüm. Görselleştirme sürecini statik karelerle sınırlı tutmayıp, bu verileri AI video render teknolojisiyle işleyerek mekanı hareketli bir deneyime evrilttim. Hazırladığım bu dinamik atmosfer videosuna aşağıdaki QR kod üzerinden ulaşabilirsiniz.",
    tags: ["Assignment", "Design", "AI", "Visualization"],
    year: "2025",
    role: "Student",
    tools: ["Hand Drawing", "SketchUp", "Photoshop"],
    location: "Assignment 3"
  },
  {
    id: "assignment-4",
    title: "Assignment 4",
    category: ProjectCategory.ASSIGNMENT,
    coverImage: vid("assigment4.2.mp4"),
    galleryImages: [],
    videos: [vid("assigment4.1.mp4"), vid("assigment4.2.mp4")],
    description: "Video-based assignment exploring motion, sequence, and narrative through moving image.",
    tags: ["Assignment", "Video", "Motion"],
    year: "2026",
    role: "Student",
    tools: ["Video", "Editing"],
    location: "Architecture Studio"
  },

  // ——— Homework ———
  {
    id: "homework-1",
    title: "Chromatic co-working digital collage ",
    category: ProjectCategory.HOMEWORK,
    coverImage: img("images/homework", "homework1.jpg"),
    galleryImages: [],
    description: "Bu kolaj tasarımında mekân, renk üzerinden tanımlanan kavramsal bir dil ile ele alınmıştır. Mor tonlar, odaklanmayı destekleyen sakin ve kontrollü bir atmosfer oluştururken, düzenli yerleşim ve ortak çalışma masası bireysel üretimi ön plana çıkaran bir co-working deneyimi sunmaktadır. Renk, bu mekânda dekoratif değil, mekânsal algıyı yönlendiren temel bir araç olarak kullanılmıştır.",
    tags: ["Homework", "Spatial Design", "Composition"],
    year: "2025",
    role: "Student",
    tools: ["SketchUp", "Photoshop"],
    location: "Homework 1"
  },
  {
    id: "homework-2",
    title: "Menu Design of  MapItaly",
    category: ProjectCategory.HOMEWORK,
    coverImage: img("images/homework", "homework2.1.jpg"),
    galleryImages: [img("images/homework", "homework2.2.jpg")],
    description: "MapItaly menü tasarımında, klasik İtalyan estetiğini Terracotta ve Hunter Green tonlarıyla modernize ederek mekansal bir atmosfer kurguladım. İçeriği fonksiyonel bir grid sistemi üzerine oturtarak okunabilirliği artırırken; 'Trattoria' referanslı grafik şeritler ve linear illüstrasyonlarla sayfa boşluklarını dengeleyen, yalın bir görsel hiyerarşi oluşturdum.",
    tags: ["Homework", "Design", "Menu"],
    year: "2025",
    role: "Student",
    tools: ["Rhino", "V-Ray", "Illustrator"],
    location: "Homework 2"
  },
  {
    id: "homework-3",
    title: "Wood chip finish Material Board",
    category: ProjectCategory.HOMEWORK,
    coverImage: img("images/homework", "homework3.jpg"),
    galleryImages: [],
    description: "Malzeme araştırmalarım kapsamında, %75 ahşap atığı (wood waste) ve bio-reçine kullanılarak üretilen sürdürülebilir yüzey malzemesi Foresso'yu inceledim. Hazırladığım katalogda; malzemenin el yapımı doğasından kaynaklanan yüzey varyasyonlarını, plaka ebatlarını ve kalınlık toleranslarını teknik verilerle detaylandırdım. 'Wood Chip' (ahşap yonga) dokusunun terrazzo benzeri estetiğini, farklı renk varyasyonlarını içeren sistematik bir dizilimle sundum.",
    tags: ["Homework", "Design", "Material Board"],
    year: "2025",
    role: "Student",
    tools: ["AutoCAD", "SketchUp", "Photoshop"],
    location: "Homework 3"
  },

  // ——— Studio Work ———
  {
    id: "studiowork-1",
    title: "Romantic cafe hand made collage",
    category: ProjectCategory.STUDIOWORK,
    coverImage: img("images/studiowork", "studiowork1.jpg"),
    galleryImages: [],
    description: "Bu hand-made kolajda, romantik atmosferi vurgulamak amacıyla pembe ve yeşil renkler birlikte kullanılmıştır. Pembe, sevgi ve sıcaklık hissini temsil ederken; yeşil, doğallık ve huzur duygusunu destekleyerek mekânın samimi karakterini güçlendirmektedir. Romantik hissiyatı pekiştirmek için kullanıcı figürleri bilinçli olarak çiftlerden seçilmiş, café mekânı paylaşım ve duygusal bağ kurma eylemleriyle ilişkilendirilmiştir.",

    tags: ["Studio", "Light", "Materiality"],
    year: "2025",
    role: "Designer",
    tools: ["Rhino", "V-Ray", "Photoshop"],
    location: "Studio Work 1"
  },
  {
    id: "studiowork-2",
    title: "Movie  collage  'Sevmek Zamanı' ",
    category: ProjectCategory.STUDIOWORK,
    coverImage: img("images/studiowork", "studiowork2.jpeg"),
    galleryImages: [],
    description: "Sevmek Zamanı filmine ait bu kolaj çalışmasında, filmin en güçlü ve simgesel ögesi olan kadın portresi, mekânın karşı aksına yerleştirilerek iç mekân kurgusunun odak noktası hâline getirilmiştir. Filmden alınan sahneler ve karakterler kullanılarak, anlatıyı mekânsal bir dile dönüştüren bir iç mekân kompozisyonu oluşturulmuştur. Kolajda yer alan figürler, filmdeki rolleriyle birebir ilişkilendirilmiş; örneğin saz çalan karakter, mekân içerisinde saz çalma eylemiyle temsil edilmiştir. Bu çalışma, filmin duygusal atmosferini ve anlatı dilini iç mekân üzerinden yeniden yorumlamayı amaçlamaktadır.",
    tags: ["Studio", "Form", "Landscape"],
    year: "2025",
    role: "Designer",
    tools: ["Rhino", "Grasshopper", "Photoshop"],
    location: "Studio Work 2"
  },
  {
    id: "studiowork-3",
    title: "Poster design_ CV",
    category: ProjectCategory.STUDIOWORK,
    coverImage: img("images/studiowork", "studiowork3.jpg"),
    galleryImages: [],
    description: "Bu tasarımda, profesyonel kimliğimi yalın ve modern bir dille yansıtmayı hedefledim. Tasarımın çıkış noktası, görsel denge ve netlik üzerine kuruludur. Sol üst blokta yer verdiğim profil görseli ile kullanıcıyı karşılayan tasarım, gözü doğal bir akışla deneyim ve eğitim başlıklarına yönlendirir. Yazı karakteri seçiminde tırnaksız ve geometrik formlar kullanarak teknik yetkinliklerimi (software icons) ve akademik geçmişimi modern bir çizgide sundum. Bölümler arası boşluk (white space) kullanımıyla yoğun içeriği ferahlatırken, yumuşak renk geçişleriyle samimi ama profesyonel bir algı yarattım.",
    tags: ["Studio", "Modular", "Urban"],
    year: "2025",
    role: "Designer",
    tools: ["SketchUp", "AutoCAD", "Illustrator"],
    location: "Studio Work 3"
  },
  {
    id: "studiowork-4",
    title: "Mood Board of MapItaly",
    category: ProjectCategory.STUDIOWORK,
    coverImage: img("images/studiowork", "studiowork4.jpeg"),
    galleryImages: [],
    description: "MapItaly için kurguladığım 'Trattoria Moderna' konsept moodboard'u, geleneksel İtalyan restoran atmosferini çağdaş bir perspektifle yeniden yorumluyor. Mekanın ruhunu, İtalyan mimarisinin ikonik öğesi Terrazzo zemin ve sıcak ahşap dokular (balıksırtı parke ve tavan kirişleri) üzerine inşa ettim. Menü tasarımındaki kurumsal renkleri; kadife dokular, Thonet sandalyeler ve retro grafiklerle mekana taşıyarak, hem nostaljik hem de yaşayan, sıcak bir atmosfer hedefledim.",
    tags: ["Studio", "Design", "Mood Board"],
    year: "2025",
    role: "Designer",
    tools: ["Rhino", "V-Ray", "Photoshop"],
    location: "Studio Work 4"
  },
  {
    id: "studiowork-5",
    title: "Sottsass Kaplama Material Board",
    category: ProjectCategory.STUDIOWORK,
    coverImage: img("images/studiowork", "studiowork5.jpg"),
    galleryImages: [],
    description: "Malzeme kataloğu çalışmamda, Ettore Sottsass'ın ALPI için tasarladığı ikonik kaplama serisini merkeze aldım. Malzemenin ham ağaçtan nihai yüzeye dönüşen karmaşık üretim sürecini (soyma, boyama, istifleme, presleme); izometrik illüstrasyonlar ve şematik bir akışla görselleştirdim. Teknik verileri, Sottsass'ın tasarım diline uygun pastel tonlar ve temiz bir tipografi ile sunarak, eğitici niteliği yüksek bir grafik anlatım kurguladım.",
    tags: ["Studio", "Design", "Material Board"],
    year: "2025",
    role: "Designer",
    tools: ["Rhino", "Illustrator", "InDesign"],
    location: "Studio Work 5"
  },
  {
    id: "studiowork-6",
    title: "Bun Burger Menu Design",
    category: ProjectCategory.STUDIOWORK,
    coverImage: img("images/studiowork", "studiowork6.jpeg"),
    galleryImages: [],
    description: "BUN BURGER menü tasarımında, mekanın enerjik ve renkli atmosferini doğrudan grafik dile yansıttım. Markanın dinamik yapısını vurgulayan canlı bir renk paleti kullanırken; tasarımın odak noktasına restoranın kendi hazırladığı, iştah açıcı (appetite appeal) burger fotoğraflarını yerleştirdim. Bu sayede, mekan deneyimi ile ürün sunumu arasında tutarlı ve görsel gücü yüksek bir bağ kurmayı hedefledim.",
    tags: ["Studio", "Design", "Menu"],
    year: "2025",
    role: "Designer",
    tools: ["Rhino", "Grasshopper", "Climate Studio"],
    location: "Studio Work 6"
  },
  {
    id: "studiowork-7",
    title: "Bun Burger workset and moodboard",
    category: ProjectCategory.STUDIOWORK,
    coverImage: img("images/studiowork", "studiowork7.jpg"),
    galleryImages: [],
    description: "BUN BURGER projesi kapsamında, mekanın dinamik kimliğini tanımlayan bütüncül bir tasarım süreci yürüttüm. İlk aşamada renk ve malzeme kararlarını içeren detaylı bir workset ve atmosferi belirleyen moodboard hazırladım. Bu konsepti, mekanın işleyişini çözümlediğim izometrik plan ve kurumsal kimlik çalışmalarıyla destekleyerek, mimari kurguyu grafik dille birleştiren tutarlı bir sunum oluşturdum.",
    tags: ["Studio", "Design", "Workset", "Moodboard"],
    year: "2025",
    role: "Designer",
    tools: ["Rhino", "V-Ray", "Photoshop", "InDesign"],
    location: "Studio Work 7"
  }
];
