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

  nav: [
    { label: "Нүүр", href: "/", id: "top" },
    {
      label: "Тэрэг",
      href: "/categories/strollers",
      id: "strollers",
      children: [
        { label: "3-н хос тэрэг (3 in 1)", href: "/categories/strollers#3in1" },
        { label: "2 хос тэрэг (2 in 1)", href: "/categories/strollers#2in1" },
        { label: "Дан тэрэг", href: "/categories/strollers#single" },
        { label: "Хөнгөн, аялалын тэрэг", href: "/categories/strollers#light" },
      ],
    },
    {
      label: "Машины суудал",
      href: "/categories/car-seats",
      id: "car-seats",
      children: [
        { label: "Машины суудал, 0-12 нас", href: "/categories/car-seats" },
        { label: "Суудлын өндөрлөгч", href: "/categories/accessories" },
      ],
    },
    { label: "Хүүхдийн манеж", href: "/categories/beds", id: "beds" },
    { label: "Хөлд оруулагч", href: "/categories/walkers", id: "walkers" },
    { label: "Хэрэгсэл", href: "/categories/accessories", id: "accessories" },
  ],

  header: {
    menu: "Цэс",
    products: "Бүх бүтээгдэхүүн",
    close: "Цэсийг хаах",
    search: "Хайх",
    bag: "Онлайн дэлгүүр",
  },

  hero: {
    eyebrow: "Нярайгаас 4 нас хүртэл",
    heading: "Хөдөлгөөн бүрд тав тух, аюулгүй байдал.",
    body: "Хялбар эвхэгддэг, тансаг зөөлөн материалтай Burbay тэрэг таны гэр бүлийн өдөр тутмын аяллыг хөнгөн болгоно.",
    cta: { label: "Цуглуулга үзэх", href: "/products" },
    secondary: { label: "Онцлох загварууд", href: "/#featured" },
  },

  systemBanner: {
    eyebrow: "E83 · 2 хос тэрэг",
    heading: "Нярайн ор, үндсэн суудал — нэг хүрээнд",
    body: "Нярайгаас 4 нас хүртэл хэрэглэх E83 нь хоёр тийш харуулж түрэх, хэвтэх хүртэл 3 төрлөөр налуулах боломжтой. UPF50+ халхавч, агааржуулах торон цонх, нэмэлт амортизатор. Нярайн ор, Mommy bag, хөлийн хучлага дагалдана.",
    cta: { label: "E83 үзэх", href: "/products/e83-black" },
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
        link: { label: "Бүх тэрэг", href: "/categories/strollers" },
        image: "strollers",
      },
      {
        id: "car-seats",
        title: "Өсөлтөд зориулан бүтээсэн",
        body:
          "Нярайгаас 12 нас хүртэл хэрэглэх, 360° эргэдэг машины суудал. Isofix суурилуулалт, зөөлөн даавуу, олон түвшний налуу — үе шат бүрд аюулгүй.",
        link: { label: "Машины суудал", href: "/categories/car-seats" },
        image: "carSeats",
      },
      {
        id: "beds",
        title: "Тайван нойронд зориулсан",
        body:
          "Гэрт ч, аялалд ч хялбар эвхэгддэг манеж. Нярайгаас 4 нас хүртэл — тоглох, унтах аюулгүй орон зай.",
        link: { label: "Хүүхдийн манеж", href: "/categories/beds" },
        image: "playpen",
      },
      {
        id: "walkers",
        title: "Анхны алхмуудад",
        body:
          "6 сараас дээш насны хүүхдэд зориулсан тогтвортой суурьтай, хөгжүүлэх тоглоомтой хөлд оруулагч.",
        link: { label: "Хөлд оруулагч", href: "/categories/walkers" },
        image: "walker",
      },
      {
        id: "accessories",
        title: "Юунд ч бэлэн",
        body:
          "Машины суудлын өндөрлөгч, тэрэгний аяга тогтоогч зэрэг өдөр тутмын хэрэгслүүд — аялал бүрийг хялбар болгоно.",
        link: { label: "Хэрэгсэл", href: "/categories/accessories" },
        image: "booster",
      },
    ],
  },

  featured: {
    eyebrow: "Онцлох",
    heading: "Хамгийн их сонирхогдож буй",
    cta: { label: "Бүх бүтээгдэхүүн", href: "/products" },
  },

  statement: {
    text:
      "Бидний зорилго — гэр бүлийн амьдралыг хөнгөвчлөх ухаалаг бүтээгдэхүүн бүтээх. Ингэснээр та бяцхан үртэйгээ илүү их нандин мөчүүдийг хамт өнгөрүүлнэ.",
    cta: { label: "Бидний тухай", href: "/#about" },
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
          { label: "Тэрэг", href: "/categories/strollers" },
          { label: "Машины суудал", href: "/categories/car-seats" },
          { label: "Хүүхдийн манеж", href: "/categories/beds" },
          { label: "Хөлд оруулагч", href: "/categories/walkers" },
          { label: "Хэрэгсэл", href: "/categories/accessories" },
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
          { label: "Бидний тухай", href: "/#about" },
          { label: "Онлайн дэлгүүр", href: `${STORE}/products?name=burbay`, external: true },
        ],
      },
    ],
    contact: {
      heading: "Холбогдох",
      lines: ["Bolorhon Kids Store", "Улаанбаатар, Монгол"],
      socials: [
        { label: "bolorhonkids.mn", href: STORE },
        { label: "Facebook", href: "https://facebook.com" },
      ],
    },
    legal: [
      { label: "Нууцлалын бодлого", href: "#privacy" },
      { label: "Үйлчилгээний нөхцөл", href: "#terms" },
    ],
    note: "Burbay — Монгол дахь албан ёсны дистрибьютер. Борлуулалт: Bolorhon Kids Store.",
  },
} as const;
