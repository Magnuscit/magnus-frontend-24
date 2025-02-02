import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


export interface User {
    name: string;
    email: string;
    picture: string;
    access_token: string;
    verified: boolean;
    jwt?: string;
}

interface AuthState {
  auth: User | null;
  setAcessToken: (user: User) => void;
  removeToken: () => void;
  setVerificationStatus: () => void;
}

const initUser = null;

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      auth: initUser,
      setAcessToken: (user) => {
        const newUser: User = { ...user, verified: false };
        set(() => ({
          auth: newUser,
        }));
      },
      removeToken: () => {
        set(() => ({ auth: null }));
      },
      setVerificationStatus: () => {
        set((state) => ({
          auth: state.auth
            ? {
              ...state.auth,
              verified: true,
            }
            : null,
        }));
      },
    }),
    {
      name: "user",

      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

interface RazorpayStore {
  isRazorpayOpen: boolean;
  openRazorpay: () => void;
  closeRazorpay: () => void;
}
export const useRazorpayStore = create<RazorpayStore>((set) => ({
  isRazorpayOpen: false,
  openRazorpay: () => set({ isRazorpayOpen: true }),
  closeRazorpay: () => set({ isRazorpayOpen: false }),
}));

