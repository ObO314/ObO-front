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
