import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface EmailState {
  email: string;
  fullname: string;
  setEmail: (value: string) => void;
  setFullname: (value: string) => void;
}

const useEmailStore = create<EmailState>()(
  devtools(
    persist(
      (set) => ({
        email: "",
        fullname: "",
        setEmail: (value) => set({ email: value }),
        setFullname: (value) => set({ fullname: value }),
      }),
      {
        name: "EmailForm",
        version: 1,
        storage: createJSONStorage(() => localStorage), 
        partialize: (state) => ({ email: state.email, fullname: state.fullname }), 
      }
    )
  )
);

export default useEmailStore;
