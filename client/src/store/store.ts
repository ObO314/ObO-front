import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { isShowState } from '@/types/variableType';

export const useModalStore = create<isShowState>()(
    devtools(
        persist(
            set => ({
                isShow: false,
                yesIsShow: () => set({ isShow: true }),
                noIsShow: () => set({ isShow: false }),
            }),
            {
                name: 'modal-storage', // unique name
                storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
            },
        ),
    ),
);
