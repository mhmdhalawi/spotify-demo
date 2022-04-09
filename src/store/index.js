import create from 'zustand';

export const useStore = create((set) => ({
  access_token: '',
  setAccessToken: (token) => set(() => ({ access_token: token })),
}));
