/**
 * Сайтын бүх текст энд төвлөрсөн байна.
 * Агуулгаа шинэчлэхдээ зөвхөн энэ файлыг засахад хангалттай —
 * компонентууд өөрчлөгдөхгүй.
 *
 * Бүтээгдэхүүн, үнэ, зураг — bolorhonkids.mn дээрх Burbay барааны
 * бодит мэдээлэл (2026-09 байдлаар). Үнэ өөрчлөгдвөл энд шинэчилнэ.
 */

const STORE = "https://bolorhonkids.mn";

export const site = {
  brand: {
    name: "BURBAY",
    legalName: "Burbay Mongolia",
    role: "Монгол дахь албан ёсны дистрибьютер",
    city: "Улаанбаатар",
    since: "2026",
  },

  store: {
    name: "Bolorhon Kids Store",
    url: `${STORE}/products?name=burbay`,
    categories: {
      strollers: `${STORE}/products?category_id=116291`,
      carSeats: `${STORE}/products?category_id=116721`,
      beds: `${STORE}/products?category_id=338493`,
      walkers: `${STORE}/products?category_id=116724`,
      accessories: `${STORE}/products?category_id=156175`,
    },
  },

  /** Header-ийн таб маягийн цэс. `children` байвал dropdown гарна. */
  nav: [
    { label: "Нүүр", href: "#top", id: "top" },
    {
      label: "Тэрэг",
      href: "#strollers",
      id: "strollers",
      children: [
        { label: "3-н хос тэрэг (3 in 1)", href: "#featured" },
        { label: "2 хос тэрэг (2 in 1)", href: "#featured" },
        { label: "Дан тэрэг", href: "#featured" },
        { label: "Хөнгөн, аялалын тэрэг", href: "#featured" },
      ],
    },
    {
      label: "Машины суудал",
      href: "#car-seats",
      id: "car-seats",
      children: [
        { label: "Машины суудал, 0-12 нас", href: "#featured" },
        { label: "Суудлын өндөрлөгч", href: "#accessories" },
      ],
    },
    { label: "Хүүхдийн манеж", href: "#beds", id: "beds" },
    { label: "Хөлд оруулагч", href: "#walkers", id: "walkers" },
    { label: "Хэрэгсэл", href: "#accessories", id: "accessories" },
  ],

  header: {
    menu: "Цэс",
    close: "Цэсийг хаах",
    search: "Хайх",
    bag: "Онлайн дэлгүүр",
  },

  hero: {
    eyebrow: "Нярайгаас 4 нас хүртэл",
    heading: "Хөдөлгөөн бүрд тав тух, аюулгүй байдал.",
    body: "Хялбар эвхэгддэг, тансаг зөөлөн материалтай Burbay тэрэг таны гэр бүлийн өдөр тутмын аяллыг хөнгөн болгоно.",
    cta: { label: "Цуглуулга үзэх", href: "#featured" },
    secondary: { label: "Онлайн дэлгүүр", href: `${STORE}/products?name=burbay`, external: true },
  },

  systemBanner: {
    eyebrow: "E83 · 2 хос тэрэг",
    heading: "Нярайн ор, үндсэн суудал — нэг хүрээнд",
    body: "Нярайгаас 4 нас хүртэл хэрэглэх E83 нь хоёр тийш харуулж түрэх, хэвтэх хүртэл 3 төрлөөр налуулах боломжтой. UPF50+ халхавч, агааржуулах торон цонх, нэмэлт амортизатор. Нярайн ор, Mommy bag, хөлийн хучлага дагалдана.",
    cta: { label: "E83 үзэх", href: `${STORE}/products/116291/781862`, external: true },
  },

  categories: {
    heading: "Таны амьдралын хэв маягт зориулан бүтээсэн",
    subheading: "Тэрэг, машины суудал, манеж, хөлд оруулагч — хүүхдийн эхний жилүүдэд хэрэгтэй бүхэн нэг брэндэд.",
    items: [
      {
        id: "strollers",
        title: "Адал явдалд зориулсан",
        body:
          "Дан, 2 хос, 3 хос тэрэг — хотын явган зам, аялал, өдөр тутмын хэрэглээнд. Хамгийн хялбар хураах шийдэл, бат бөх дугуй, зөөлөн түдгэлзүүлэлт.",
        link: { label: "Бүх тэрэг", href: `${STORE}/products?category_id=116291`, external: true },
        image: "strollers",
      },
      {
        id: "car-seats",
        title: "Өсөлтөд зориулан бүтээсэн",
        body:
          "Нярайгаас 12 нас хүртэл хэрэглэх, 360° эргэдэг машины суудал. Isofix суурилуулалт, зөөлөн даавуу, олон түвшний налуу — үе шат бүрд аюулгүй.",
        link: { label: "Машины суудал", href: `${STORE}/products?category_id=116721`, external: true },
        image: "carSeats",
      },
      {
        id: "beds",
        title: "Тайван нойронд зориулсан",
        body:
          "Гэрт ч, аялалд ч хялбар эвхэгддэг манеж. Нярайгаас 4 нас хүртэл — тоглох, унтах аюулгүй орон зай.",
        link: { label: "Хүүхдийн манеж", href: `${STORE}/products?category_id=338493`, external: true },
        image: "playpen",
      },
      {
        id: "walkers",
        title: "Анхны алхмуудад",
        body:
          "6 сараас дээш насны хүүхдэд зориулсан тогтвортой суурьтай, хөгжүүлэх тоглоомтой хөлд оруулагч.",
        link: { label: "Хөлд оруулагч", href: `${STORE}/products?category_id=116724`, external: true },
        image: "walker",
      },
      {
        id: "accessories",
        title: "Юунд ч бэлэн",
        body:
          "Машины суудлын өндөрлөгч, тэрэгний аяга тогтоогч зэрэг өдөр тутмын хэрэгслүүд — аялал бүрийг хялбар болгоно.",
        link: { label: "Хэрэгсэл", href: `${STORE}/products?category_id=156175`, external: true },
        image: "booster",
      },
    ],
  },

  featured: {
    eyebrow: "Онцлох",
    heading: "Хамгийн их сонирхогдож буй",
    cta: { label: "Бүх Burbay бараа", href: `${STORE}/products?name=burbay`, external: true },
    products: [
      {
        name: "E83",
        type: "2 хос тэрэг · 0-4 нас · Black",
        price: "1,399,000₮",
        oldPrice: "1,499,000₮",
        discount: "-6%",
        image: "e83-black",
        colors: ["#1c1c1c", "#6b3f2a", "#5a5a5a"],
        href: `${STORE}/products/116291/781862`,
        badge: "Бестселлер",
      },
      {
        name: "PC600",
        type: "3-н хос тэрэг · Grey",
        price: "899,000₮",
        oldPrice: "989,000₮",
        discount: "-9%",
        image: "pc600-grey",
        colors: ["#6f6f6f", "#6f8f7a", "#b08c7a"],
        href: `${STORE}/products/116291/899827`,
      },
      {
        name: "J02",
        type: "3-н хос тэрэг · Grey",
        price: "1,599,000₮",
        oldPrice: "1,699,000₮",
        discount: "-5%",
        image: "j02-grey",
        colors: ["#4b4b4b"],
        href: `${STORE}/products/116291/817856`,
        badge: "Luxury",
      },
      {
        name: "E77",
        type: "3-н хос тэрэг · Light Grey",
        price: "1,399,000₮",
        oldPrice: "1,499,000₮",
        discount: "-6%",
        image: "e77-light-grey",
        colors: ["#a9a9a9", "#4a4a4a"],
        href: `${STORE}/products/116291/753701`,
      },
      {
        name: "Apollo Pro",
        type: "Машины суудал · 0-12 нас",
        price: "589,000₮",
        image: "apollo-pro",
        colors: ["#c9b59a", "#1c1c1c"],
        href: `${STORE}/products/116721/899839`,
        badge: "Шинэ",
      },
      {
        name: "Машины суудал 360°",
        type: "0-12 нас",
        price: "359,000₮",
        image: "carseat-360",
        colors: ["#1c1c1c", "#8a8a8a", "#b9a08a"],
        href: `${STORE}/products/212820/927950`,
      },
      {
        name: "Хүүхдийн манеж",
        type: "0-4 нас",
        price: "299,000₮",
        oldPrice: "359,000₮",
        discount: "-16%",
        image: "playpen",
        colors: ["#9a9a9a"],
        href: `${STORE}/products/338494/924706`,
      },
      {
        name: "Хөлд оруулагч",
        type: "6 сар+",
        price: "159,000₮",
        oldPrice: "189,000₮",
        discount: "-15%",
        image: "walker",
        colors: ["#8c8c8c"],
        href: `${STORE}/products/116724/759387`,
      },
    ],
  },

  statement: {
    text:
      "Бидний зорилго — гэр бүлийн амьдралыг хөнгөвчлөх ухаалаг бүтээгдэхүүн бүтээх. Ингэснээр та бяцхан үртэйгээ илүү их нандин мөчүүдийг хамт өнгөрүүлнэ.",
    cta: { label: "Бидний тухай", href: "#about" },
  },

  trust: {
    heading: "Яагаад Burbay гэж",
    items: [
      { value: "0–4 нас", label: "Нярайгаас хэрэглэх боломжтой" },
      { value: "UPF 50+", label: "Нарнаас хамгаалах халхавч" },
      { value: "72 цаг", label: "Захиалгаас хойш хүргэлт" },
      { value: "4 хүртэл", label: "Хуваан төлөх (StorePay, ArdPay, LendMN)" },
    ],
  },

  footer: {
    columns: [
      {
        heading: "Дэлгүүр",
        links: [
          { label: "Тэрэг", href: `${STORE}/products?category_id=116291`, external: true },
          { label: "Машины суудал", href: `${STORE}/products?category_id=116721`, external: true },
          { label: "Хүүхдийн манеж", href: `${STORE}/products?category_id=338493`, external: true },
          { label: "Хөлд оруулагч", href: `${STORE}/products?category_id=116724`, external: true },
          { label: "Хэрэгсэл", href: `${STORE}/products?category_id=156175`, external: true },
        ],
      },
      {
        heading: "Тусламж",
        links: [
          { label: "Хүргэлтийн нөхцөл", href: STORE, external: true },
          { label: "Төлбөрийн нөхцөл", href: STORE, external: true },
          { label: "Үйлчилгээний нөхцөл", href: STORE, external: true },
        ],
      },
      {
        heading: "Компани",
        links: [
          { label: "Бидний тухай", href: "#about" },
          { label: "Онлайн дэлгүүр", href: `${STORE}/products?name=burbay`, external: true },
        ],
      },
    ],
    contact: {
      heading: "Холбогдох",
      lines: ["Bolorhon Kids Store", "Улаанбаатар, Монгол"],
      socials: [
        { label: "bolorhonkids.mn", href: STORE },
        { label: "Facebook", href: "https://facebook.com" }, // TODO: албан ёсны хуудсын холбоос
      ],
    },
    legal: [
      { label: "Нууцлалын бодлого", href: "#privacy" },
      { label: "Үйлчилгээний нөхцөл", href: "#terms" },
    ],
    note: "Burbay — Монгол дахь албан ёсны дистрибьютер. Борлуулалт: Bolorhon Kids Store.",
  },
} as const;
