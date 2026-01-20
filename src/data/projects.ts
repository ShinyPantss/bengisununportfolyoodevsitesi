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
    year: "2024",
    role: "Student",
    tools: ["Hand Drawing", "SketchUp", "Photoshop"],
    location: "Assignment 1"
  },
  {
    id: "assignment-2",
    title: "Assignment 2",
    category: ProjectCategory.ASSIGNMENT,
    coverImage: img("images/assigment", "assigment2.1.jpeg"),
    galleryImages: [
      img("images/assigment", "assigment2.1.jpeg"),
      img("images/assigment", "assigment2.2.jpeg"),
      img("images/assigment", "assisgment2.3.jpeg")
    ],
    description: "A multi-part assignment investigating structural systems, form, and representation through drawings and diagrams.",
    tags: ["Assignment", "Structure", "Technical Drawing"],
    year: "2024",
    role: "Student",
    tools: ["AutoCAD", "Hand Drawing", "InDesign"],
    location: "Architecture Studio"
  },
  {
    id: "assignment-3",
    title: "Assignment 3",
    category: ProjectCategory.ASSIGNMENT,
    coverImage: img("images/assigment", "assigment3.1.jpg"),
    galleryImages: [img("images/assigment", "asssigment3.2.jpg")],
    videos: [vid("assigment3.mp4")],
    description: "Architectural assignment exploring spatial design, form, and representation through drawings and visual studies.",
    tags: ["Assignment", "Spatial Design", "Representation"],
    year: "2024",
    role: "Student",
    tools: ["Hand Drawing", "SketchUp", "Photoshop"],
    location: "Architecture Studio"
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
    year: "2024",
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
    year: "2024",
    role: "Student",
    tools: ["SketchUp", "Photoshop"],
    location: "Homework 1"
  },
  {
    id: "homework-2",
    title: "Homework 2",
    category: ProjectCategory.HOMEWORK,
    coverImage: img("images/homework", "homework2.1.jpg"),
    galleryImages: [img("images/homework", "homework2.2.jpg")],
    description: "A two-part homework exploring programmatic layout, circulation, and material choices in a defined footprint.",
    tags: ["Homework", "Program", "Layout"],
    year: "2024",
    role: "Student",
    tools: ["Rhino", "V-Ray", "Illustrator"],
    location: "Architecture Studio"
  },
  {
    id: "homework-3",
    title: "Homework 3",
    category: ProjectCategory.HOMEWORK,
    coverImage: img("images/homework", "homework3.jpg"),
    galleryImages: [],
    description: "Homework addressing urban context, scale, and the integration of a small intervention in an existing fabric.",
    tags: ["Homework", "Urban", "Context"],
    year: "2024",
    role: "Student",
    tools: ["AutoCAD", "SketchUp", "Photoshop"],
    location: "Architecture Studio"
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
    year: "2024",
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
    year: "2024",
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
    year: "2024",
    role: "Designer",
    tools: ["SketchUp", "AutoCAD", "Illustrator"],
    location: "Studio Work 3"
  },
  {
    id: "studiowork-4",
    title: "Studio Work 4",
    category: ProjectCategory.STUDIOWORK,
    coverImage: img("images/studiowork", "studiowork4.jpeg"),
    galleryImages: [],
    description: "Studio work focusing on facade design, daylighting, and the public interface of the building.",
    tags: ["Studio", "Facade", "Daylighting"],
    year: "2024",
    role: "Designer",
    tools: ["Rhino", "V-Ray", "Photoshop"],
    location: "Architecture Studio"
  },
  {
    id: "studiowork-5",
    title: "Studio Work 5",
    category: ProjectCategory.STUDIOWORK,
    coverImage: img("images/studiowork", "studiowork5.jpg"),
    galleryImages: [],
    description: "Studio project exploring sectional relationships and the vertical organization of program.",
    tags: ["Studio", "Section", "Program"],
    year: "2024",
    role: "Designer",
    tools: ["Rhino", "Illustrator", "InDesign"],
    location: "Architecture Studio"
  },
  {
    id: "studiowork-6",
    title: "Studio Work 6",
    category: ProjectCategory.STUDIOWORK,
    coverImage: img("images/studiowork", "studiowork6.jpeg"),
    galleryImages: [],
    description: "Studio work addressing sustainability, passive strategies, and integration with the site.",
    tags: ["Studio", "Sustainability", "Passive Design"],
    year: "2024",
    role: "Designer",
    tools: ["Rhino", "Grasshopper", "Climate Studio"],
    location: "Architecture Studio"
  },
  {
    id: "studiowork-7",
    title: "Studio Work 7",
    category: ProjectCategory.STUDIOWORK,
    coverImage: img("images/studiowork", "studiowork7.jpg"),
    galleryImages: [],
    description: "Studio project synthesizing research, concept, and representation into a cohesive architectural proposal.",
    tags: ["Studio", "Synthesis", "Representation"],
    year: "2024",
    role: "Designer",
    tools: ["Rhino", "V-Ray", "Photoshop", "InDesign"],
    location: "Architecture Studio"
  }
];
