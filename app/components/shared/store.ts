"use client";

import create from "zustand";
import { combine } from "zustand/middleware";

export const useHeaderMenuStore = create(
  combine({ isMenuOpened: false }, (set) => ({
    toggleNavbar: () => set(({ isMenuOpened }) => ({ isMenuOpened: !isMenuOpened })),
  })),
);
