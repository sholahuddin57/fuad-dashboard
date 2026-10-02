import { create } from 'zustand';

export const useDashboardStore = create((set) => ({
  // 1. State awal: array kosong
  pinnedActivities: [],
  
  // 2. Fungsi/Aksi untuk menambah atau menghapus pin
  togglePin: (activityTitle) => set((state) => {
    // Kalau judulnya sudah ada di array, kita hapus (unpin)
    if (state.pinnedActivities.includes(activityTitle)) {
      return { 
        pinnedActivities: state.pinnedActivities.filter(title => title !== activityTitle) 
      };
    }
    // Kalau belum ada, kita tambahkan ke dalam array (pin)
    return { 
      pinnedActivities: [...state.pinnedActivities, activityTitle] 
    };
  }),
}));