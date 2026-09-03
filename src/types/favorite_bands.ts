export type Member = {
  name: string;
  image: string;
  role: string;   // ← เพิ่มบรรทัดนี้
};

export type favorite_band = {
  picture: string;
  name: string;
  description: string;
  members: Member[];
};