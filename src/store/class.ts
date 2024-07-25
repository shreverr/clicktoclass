import { Class } from '@/types/class'
import { create } from 'zustand'

export const useClassStore = create<Class>((set) => ({
  day: "",
  startDate: new Date(),
  startTime: new Date(),
  endTime: new Date(),
  link: "",
  teacherName: "",
  forGroupA: false,
  forGroupB: false
}))

interface ClassesState {
  classes: Class[]
  pushClass: (newClass: Class) => void
  setClasses: (newClasses: Class[]) => void
}

export const useClassesStore = create<ClassesState>((set) => ({
  classes: [],
  pushClass: (newClass: Class) => set((state) => ({ classes: [...state.classes, newClass] })),
  setClasses: (newClasses: Class[]) => set({ classes: newClasses })
}))
