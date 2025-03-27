import { create } from "zustand";
import { CardProps } from "../constants/card";

interface CardDetailState {
  card: CardProps;
  setCardDetail: (card: CardProps) => void;
}

export const useCardDetailStore = create<CardDetailState>((set) => ({
  card: {
    title: "",
    time: "",
    readTime: "",
    id: "",
  },
  setCardDetail: (card) => set({ card }),
}));
