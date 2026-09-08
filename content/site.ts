export type ContactChannel = {
  name: string;
  label: string;
  description: string;
  qrImage: string | null;
  account: string | null;
};

export const contactChannels: ContactChannel[] = [
  {
    name: "WeChat",
    label: "Бөөний захиалга · Үнийн санал",
    description: "QR кодыг WeChat апп-аар уншуулж бидэнтэй холбогдоорой.",
    qrImage: null,
    account: null,
  },
];

export const site = {
  brand: {
    name: "BURBAY",
    legalName: "Burbay Mongolia",
    role: "Монгол дахь албан ёсны төлөөлөгч",
    city: "Улаанбаатар, Монгол",
  },
  collections: [
    { id: "strollers", label: "Хүүхдийн тэрэг", english: "Strollers" },
    { id: "car-seats", label: "Машины суудал", english: "Car seats" },
    { id: "beds", label: "Хүүхдийн манеж", english: "Home & living" },
    { id: "walkers", label: "Хөлд оруулагч", english: "First steps" },
    { id: "accessories", label: "Дагалдах хэрэгсэл", english: "Accessories" },
  ],
  hero: {
    eyebrow: "BURBAY · MONGOLIA",
    heading: ["Хамтдаа туулах", "гайхалтай аялал."],
    body: "Бяцхан үрийн тань анхны өдрөөс эхлэн. Тав тух, ухаалаг шийдэл, нандин мөч бүрд зориулсан загвар.",
    cta: "Цуглуулгатай танилцах",
  },
  contact: {
    eyebrow: "LET’S CONNECT",
    heading: "Сайхан бүхнийг\nхамтдаа эхлүүлье.",
    body: "Бөөний захиалга, хамтын ажиллагаа болон бүтээгдэхүүний үнийн саналын талаар манай багтай холбогдоорой.",
  },
  footer: {
    note: "Бяцхан үрстэйгээ бүтээх том ертөнц.",
    developer: { label: "JustTuruu", href: "https://github.com/JustTuruu" },
  },
} as const;
