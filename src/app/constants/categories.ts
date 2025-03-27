export interface Category {
  label: string;
  href: string;
  count: number;
}

export const categories: Category[] = [
  {
    label: "Tất cả",
    href: "/",
    count: 110,
  },
  {
    label: "Thiết Kế Website",
    href: "/",
    count: 36,
  },
  {
    label: "Thiết Kế App Mobile",
    href: "/",
    count: 24,
  },
  {
    label: "Quản Lý Sản Xuất",
    href: "/",
    count: 20,
  },
  {
    label: "Quản Lý Bán Hàng",
    href: "/",
    count: 15,
  },
  {
    label: "Báo Chí Nói Về FOSO",
    href: "/",
    count: 10,
  },
  {
    label: "Tin Tức FOSO",
    href: "/",
    count: 5,
  },
];
interface MenuItem {
  title: string;
  link: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  { title: "Quy trình 5S là gì?", link: "/#quy-trinh-5s" },
  { title: "Lợi ích quy trình 5S đem lại", link: "/#loi-ich-5s" },
  {
    title: "Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
    link: "/#tai-sao-ap-dung",
    children: [
      {
        title: "Cải thiện rõ nét môi trường làm việc",
        link: "/#cai-thien-moi-truong",
      },
      { title: "Tiết kiệm thời gian đáng kể", link: "/#tiet-kiem-thoi-gian" },
      { title: "Tăng năng suất làm việc", link: "/#tang-nang-suat" },
      { title: "Tiết kiệm chi phí", link: "/#tiet-kiem-chi-phi" },
      { title: "Tăng chất lượng sản phẩm", link: "/#tang-chat-luong" },
    ],
  },
  {
    title: "Quy trình 5S gồm các bước",
    link: "/#cac-buoc-5s",
    children: [
      { title: "Seiri (Ngăn nắp)", link: "/#seiri" },
      { title: "Seiton (Sắp xếp)", link: "/#seiton" },
      { title: "Seiso (Vệ sinh)", link: "/#seiso" },
      { title: "Seiketsu (Tiêu chuẩn hóa)", link: "/#seiketsu" },
      { title: "Shitsuke (Kỷ luật)", link: "/#shitsuke" },
    ],
  },
  {
    title: "Quy trình được thực hiện như sau",
    link: "/#quy-trinh-thuc-hien",
    children: [
      { title: "Giai đoạn chuẩn bị", link: "/#giai-doan-chuan-bi" },
      { title: "Triển khai rộng rãi", link: "/#trien-khai-rong-rai" },
      {
        title: "Thực hiện vệ sinh toàn bộ doanh nghiệp",
        link: "/#thuc-hien-ve-sinh",
      },
      { title: "Sàng lọc, sắp xếp và đánh giá", link: "/#sang-loc-danh-gia" },
      { title: "Đánh giá", link: "/#danh-gia" },
    ],
  },
  { title: "Quy trình 5S có giống với Kaizen?", link: "/#5s-va-kaizen" },
  { title: "Đối tượng nào nên áp dụng 5S?", link: "/#doi-tuong-ap-dung" },
  {
    title: "Các yếu tố tạo nên thành công cho quy trình 5S",
    link: "/#thanh-cong-5s",
  },
];
