'use client'

import { Batch } from "@/types/class";
import { create } from 'zustand'

interface BatchState {
  batch: Batch
}

interface BatchActions {
  setBatch: (newBatch: Batch) => void
}

export const useBatchStore = create<BatchState & BatchActions>((set) => ({
  batch: 'A',
  setBatch: (newBatch: Batch) => set({ batch: newBatch })
}))
