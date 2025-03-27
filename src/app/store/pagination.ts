import { create } from "zustand";
import { cardConstants } from "../constants/card";

const ITEMS_PER_PAGE = 6;
interface PaginationStore {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  setItemsPerPage: (itemsPerPage: number) => void;
  setCurrentPage: (page: number) => void;
}

const usePaginationStore = create<PaginationStore>((set) => ({
  currentPage: 1,
  totalPages: Math.ceil(cardConstants.length / ITEMS_PER_PAGE),
  itemsPerPage: ITEMS_PER_PAGE,
  setItemsPerPage: (itemsPerPage) => set({ itemsPerPage }),
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default usePaginationStore;
