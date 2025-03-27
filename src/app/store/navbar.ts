import { create } from "zustand";

interface NavbarState {
  isActive: string;
  setActive: (pathname: string) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  isActive: "home",
  setActive: (pathname: string) => {
    if (pathname === "/") {
      set({ isActive: "home" });
    } else {
      const path = pathname.slice(1).replace(/\//g, ":");
      set({ isActive: path });
    }
  },
}));
