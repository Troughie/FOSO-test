import { useState, useEffect, useRef } from "react";

interface Props {
  text: string;
  interval?: number;
}

function useSlowText({ text = "", interval = 500 }: Props) {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Reset state khi text thay đổi
    const currentText = text.charAt(0).toUpperCase() + text.slice(1);
    setDisplayedText("");
    indexRef.current = 0;

    // Clear timeout nếu có trước khi bắt đầu mới
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    function showNextCharacter() {
      if (indexRef.current < currentText.length) {
        setDisplayedText((prev) => prev + currentText[indexRef.current]);
        indexRef.current++;
        timeoutRef.current = setTimeout(showNextCharacter, interval);
      }
    }

    timeoutRef.current = setTimeout(showNextCharacter, interval); // Bắt đầu hiệu ứng

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, interval]);

  return displayedText;
}

export default useSlowText;

export const formatUrlText = (text: string): string => {
  return text
    .normalize("NFD") // Tách dấu ra khỏi ký tự
    .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") // Xóa dấu câu
    .replace(/\s+/g, "-") // Thay khoảng trắng bằng dấu "-"
    .replace(/-+/g, "-") // Thay nhiều dấu "-" liên tiếp bằng một dấu "-"
    .trim(); // Xóa khoảng trắng đầu & cuối
};
