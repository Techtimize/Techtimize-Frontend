import { create } from "zustand";

type JobTabState = {
  activeTab: "overview" | "application";
  setActiveTab: (tab: "overview" | "application") => void;
};

export const useJobTabStore = create<JobTabState>((set) => ({
  activeTab: "overview",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
