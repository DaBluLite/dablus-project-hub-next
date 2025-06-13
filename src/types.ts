/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Colorway {
    [key: string]: any,
    name: string,
    "dc-import"?: string,
    accent: string,
    primary: string,
    secondary: string,
    tertiary: string,
    original?: boolean,
    author: string,
    colors?: string[],
    isGradient?: boolean,
    sourceType?: "online" | "offline" | "temporary" | null,
    source?: string,
    linearGradient?: string;
}