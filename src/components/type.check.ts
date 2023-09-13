export interface cardType {
    captureRef: React.RefObject<HTMLDivElement>;
}

export interface profileType {
    captureRef: HTMLDivElement | null;
    downloadLink: HTMLAnchorElement | null;
    handleDownloadClick: () => void;
}
export interface inputType {
    type: string;
    placeholder: string;
    name: string;
    icon: string;
}

export interface buttonType {
    handleClick: () => void
    children: string;
    type: string;
    style?: any
}