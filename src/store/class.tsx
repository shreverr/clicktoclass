'use client'

import { intToDay } from '@/lib/utils'
import { Batch, Class } from '@/types/class'
import { create } from 'zustand'

interface ClassesState {
  classes: Class[]
}
interface ClassesActions {
  pushClass: (newClass: Class) => void
  setClasses: (newClasses: Class[]) => void
  getTodaysClass: (batch: Batch) => Class | undefined
  getClassListByBatch: (batch: Batch) => Class[] | undefined
}

export const useClassesStore = create<ClassesState & ClassesActions>((set) => ({
  classes: [],

  pushClass: (newClass: Class) => set((state) => ({
    classes: [...state.classes, newClass]
  })),

  setClasses: (newClasses: Class[]) => set({
    classes: newClasses
  }),

  getTodaysClass: (batch: Batch): Class | undefined => {
    const classes: Class[] = useClassesStore.getState().classes
    const today = intToDay(new Date().getDay())

    return classes.find((cls) => (
      (cls.day === today) && (batch === 'A' ? cls.forGroupA : cls.forGroupB)
    ))
  },

  getClassListByBatch: (batch: Batch): Class[] | undefined => {
    const classes: Class[] = useClassesStore.getState().classes

    return (classes.filter((cls) => (
      (batch === 'A' ? cls.forGroupA : cls.forGroupB)
    ))).sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
  }
}))
