export interface TitleTextProps {
    titleText: string;
}

export interface disabeldProps {
    disabled: boolean;
}

export interface subMenuProps {
    subMenu: string;
}

export interface menuValueProps {
    menuValue: string;
}

export interface isShowProps {
    isShow: boolean;
}

export interface isShowState extends isShowProps {
    yesIsShow: () => void;
    noIsShow: () => void;
}

export interface indexProps {
    index: number;
}

export interface scrollState {
    scrollIndex: number;
    setScrollIndex: (position: number) => void;
}

export interface initialScrollState {
    initialScrollState: boolean;
    setInitialScrollState: (state: boolean) => void;
}

export interface isClickedArrayProps {
    name: string;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
    value: boolean;
}
export interface isClickedProps {
    isClicked: boolean;
}

export interface categoryState {
    categoryName: string;
    setCategoryName: (state: string) => void;
}
