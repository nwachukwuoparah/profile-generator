import { UseFormRegister } from "react-hook-form"
export interface cardType {
    captureRef: React.RefObject<HTMLDivElement>;
    value: any
}

export interface profileType {
    captureRef: HTMLDivElement | null;
    downloadLink: HTMLAnchorElement | null;
    handleDownloadClick: () => void;
}

export interface IFormInput {
    profilePicture: string
    email: string;
    fullName: string;
    password: string;
    select: string;
}
export interface inputType {
    type: string;
    placeholder: string;
    icon: string;
    name: any
    register: UseFormRegister<any>
    errors: any
}

export interface buttonType {
    handleClick?: () => void
    children: string;
    type: string;
    style?: any;
    isLoading?: boolean
}