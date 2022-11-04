import create from "zustand";
import { combine } from "zustand/middleware";

export const useHeaderMenuStore = create(
  combine({ isMenuOpened: false }, (set) => ({
    toggleDrawer: () => set(({ isMenuOpened }) => ({ isMenuOpened: !isMenuOpened })),
  })),
);
