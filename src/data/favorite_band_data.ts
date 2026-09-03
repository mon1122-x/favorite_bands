import type { favorite_band } from "@/types/favorite_bands";

export const favorite_band_data: favorite_band[] = [
  {
    picture: "/images/bands/Lipta.jpg",
    name: "Lipta",
    description: `วงลิปตาก่อตั้งขึ้นในปี พ.ศ. 2548...`,
    members: [
      { name: "คัดโตะ", image: "/images/members/khadto.jpg", role: "นักร้องนำ" },
      { name: "แทน", image: "/images/members/tan.jpg", role: "โปรดิวเซอร์" },
    ],
  },
  {
    picture: "/images/bands/Freehand.jpg",
    name: "Freehand",
    description: `Freehand ที่ไม่ต้องมีเครื่องมือขับซ้อนแต่สื่อความรู้สึกได้ดี...`,
    members: [
      { name: "เข้ม", image: "/images/members/khem.jpg", role: "นักร้องนำ" },
      { name: "แฮม", image: "/images/members/ham.jpg", role: "มือกีตาร์" },
      { name: "โจ๊ก", image: "/images/members/jok.jpg", role: "มือเบส" },
      { name: "การ์ฟิลด์", image: "/images/members/garfield.jpg", role: "มือกลอง" },
    ],
  },
  {
    picture: "/images/bands/threemandown.jpg",
    name: "threemandown",
    description: `จุดเริ่มต้นวง: เดเป็นเพื่อนกับดูน (กีตาร์) และโอม (เบส) มาก่อน...`,
    members: [
      { name: "กิด", image: "/images/members/kit.jpg", role: "นักร้องนำ" },
      { name: "ดูน", image: "/images/members/toon.jpg", role: "มือกีตาร์" },
      { name: "เด", image: "/images/members/te.jpg", role: "มือเบส" },
      { name: "เส็ง", image: "/images/members/seng.jpg", role: "มือกลอง" },
    ],
  },
];