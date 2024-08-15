import { create } from "zustand"

interface State {
  open: boolean
  setOpen: (open: boolean) => void
}

export const useCreateUserDialogStore = create<State>()((set) => ({
  open: false,
  setOpen: (value) => set(() => ({ open: value }))
}))
