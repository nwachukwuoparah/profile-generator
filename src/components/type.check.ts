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
}