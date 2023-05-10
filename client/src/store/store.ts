import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { categoryState, initialScrollState, isShowState, scrollState } from '@/types/variableType';

export const useModalStore = create<isShowState>()(
    devtools(
        persist(
            set => ({
                isShow: false,
                yesIsShow: () => set({ isShow: true }),
                noIsShow: () => set({ isShow: false }),
            }),
            {
                name: 'modal-storage',
                storage: createJSONStorage(() => sessionStorage),
            },
        ),
    ),
);

export const useScrollStore = create<scrollState>()(
    devtools(
        persist(
            set => ({
                scrollIndex: 0,
                setScrollIndex: (position: number) => set({ scrollIndex: position }),
            }),
            {
                name: 'scroll-storage',
                storage: createJSONStorage(() => sessionStorage),
            },
        ),
    ),
);
export const useInitialScrollStore = create<initialScrollState>()(
    devtools(
        persist(
            set => ({
                initialScrollState: true,
                setInitialScrollState: (state: boolean) => set({ initialScrollState: state }),
            }),
            {
                name: 'initial-scroll-storage',
                storage: createJSONStorage(() => sessionStorage),
            },
        ),
    ),
);

export const useCategoryStore = create<categoryState>()(
    devtools(
        persist(
            set => ({
                categoryName: 'Day',
                setCategoryName: (state: string) => set({ categoryName: state }),
            }),
            {
                name: 'categoryName-storage',
                storage: createJSONStorage(() => sessionStorage),
            },
        ),
    ),
);
