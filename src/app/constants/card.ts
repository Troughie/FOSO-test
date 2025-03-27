import { formatUrlText } from "../utils";

export interface CardProps {
  title: string;
  time: string;
  readTime: string;
  id: string;
}

export const cardConstants: CardProps[] = [
  {
    title: "Quy trình 5S là gì?",
    time: "26/03/2025",
    readTime: "10 phút",
  },
  {
    title: "Seiri (Ngăn nắp) trong 5S",
    time: "27/03/2025",
    readTime: "8 phút",
  },
  {
    title: "Seiton (Trật tự) và ứng dụng thực tế",
    time: "28/03/2025",
    readTime: "12 phút",
  },
  {
    title: "Seiso (Sạch sẽ) - Giữ môi trường làm việc sạch sẽ",
    time: "29/03/2025",
    readTime: "7 phút",
  },
  {
    title: "Seiketsu (Tiêu chuẩn hóa) - Duy trì 5S lâu dài",
    time: "30/03/2025",
    readTime: "9 phút",
  },
  {
    title: "Shitsuke (Kỷ luật) - Văn hóa tuân thủ 5S",
    time: "31/03/2025",
    readTime: "11 phút",
  },
  {
    title: "Lợi ích của 5S đối với doanh nghiệp",
    time: "01/04/2025",
    readTime: "13 phút",
  },
  {
    title: "Áp dụng 5S trong sản xuất",
    time: "02/04/2025",
    readTime: "14 phút",
  },
  {
    title: "5S trong văn phòng - Nâng cao hiệu quả công việc",
    time: "03/04/2025",
    readTime: "10 phút",
  },
  {
    title: "Những sai lầm phổ biến khi triển khai 5S",
    time: "04/04/2025",
    readTime: "12 phút",
  },
  {
    title: "5S giúp tiết kiệm chi phí như thế nào?",
    time: "05/04/2025",
    readTime: "9 phút",
  },
  {
    title: "Ứng dụng công nghệ vào 5S",
    time: "06/04/2025",
    readTime: "11 phút",
  },
  {
    title: "5S và Lean Manufacturing",
    time: "07/04/2025",
    readTime: "15 phút",
  },
  {
    title: "Checklist kiểm tra 5S trong doanh nghiệp",
    time: "08/04/2025",
    readTime: "10 phút",
  },
  {
    title: "Cách đào tạo nhân viên về 5S",
    time: "09/04/2025",
    readTime: "12 phút",
  },
  {
    title: "5S và an toàn lao động",
    time: "10/04/2025",
    readTime: "13 phút",
  },
  {
    title: "So sánh 5S và Kaizen",
    time: "11/04/2025",
    readTime: "14 phút",
  },
  {
    title: "5S và văn hóa doanh nghiệp",
    time: "12/04/2025",
    readTime: "10 phút",
  },
  {
    title: "Bí quyết duy trì 5S lâu dài",
    time: "13/04/2025",
    readTime: "11 phút",
  },
  {
    title: "Câu chuyện thành công khi áp dụng 5S",
    time: "14/04/2025",
    readTime: "13 phút",
  },
].map((item) => ({ ...item, id: formatUrlText(item.title) }));
