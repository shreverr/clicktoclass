import { Class } from '@/types/class'
import { create } from 'zustand'

interface ClassesState {
  classes: Class[]
}
interface ClassesActions {
  pushClass: (newClass: Class) => void
  setClasses: (newClasses: Class[]) => void
}

export const useClassesStore = create<ClassesState & ClassesActions>((set) => ({
  classes: [],
  pushClass: (newClass: Class) => set((state) => ({ classes: [...state.classes, newClass] })),
  setClasses: (newClasses: Class[]) => set({ classes: newClasses })
}))
