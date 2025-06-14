/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function HexToHSL(H: string) {
    // Convert hex to RGB first
    let r: number = 0, g: number = 0, b: number = 0;
    if (H.length === 4) {
        r = Number("0x" + H[1] + H[1]);
        g = Number("0x" + H[2] + H[2]);
        b = Number("0x" + H[3] + H[3]);
    } else if (H.length === 7) {
        r = Number("0x" + H[1] + H[2]);
        g = Number("0x" + H[3] + H[4]);
        b = Number("0x" + H[5] + H[6]);
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    const cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin;
    let h = 0,
        s = 0,
        l = 0;

    if (delta === 0)
        h = 0;
    else if (cmax === r)
        h = ((g - b) / delta) % 6;
    else if (cmax === g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
        h += 360;

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return [Math.round(h), Math.round(s), Math.round(l)];
}

export const canonicalizeHex = (hex: string) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = hex;
    hex = ctx.fillStyle;
    canvas.remove();

    return hex;
};

export function getHSLIndex(a: string) {
    if (a === "h") return 0;
    if (a === "s") return 1;
    if (a === "l") return 2;
    return 0;
}

export const stringToHex = (str: string) => {
    let hex = "";
    for (
        let i = 0;
        i < str.length;
        i++
    ) {
        const charCode = str.charCodeAt(i);
        const hexValue = charCode.toString(16);
        hex += hexValue.padStart(2, "0");
    }
    return hex;
};

export const hexToString = (hex: string) => {
    let str = "";
    for (let i = 0; i < hex.length; i += 2) {
        const hexValue = hex.substr(i, 2);
        const decimalValue = parseInt(hexValue, 16);
        str += String.fromCharCode(decimalValue);
    }
    return str;
};

export function getHex(str: string): string {
    const color = Object.assign(
        document.createElement("canvas").getContext("2d") as {},
        { fillStyle: str }
    ).fillStyle;
    if (color.includes("rgba(")) {
        return getHex(String([...color.split(",").slice(0, 3), ")"]).replace(",)", ")").replace("a", ""));
    } else {
        return color;
    }
}

export function getFontOnBg(bgColor: string) {
    const color = (bgColor.charAt(0) === "#") ? bgColor.substring(1, 7) : bgColor;
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
        "#000000" : "#ffffff";
}

export function hslToHex(h: number, s: number, l: number) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r: any, g: any, b: any;
    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = (x: number) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function rgbToHex(r: number, g: number, b: number) {
    const toHex = (x: number) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function colorToHex(color: string) {
    let colorType = "hex";
    if (color.includes("hsl")) {
        colorType = "hsl";
    } else if (color.includes("rgb")) {
        colorType = "rgb";
    }
    color = color.replaceAll(",", "").replace(/.+?\(/, "").replace(")", "").replaceAll(/[ \t]+\/[ \t]+/g, " ").replaceAll("%", "").replaceAll("/", "");
    if (colorType === "hsl") {
        color = hslToHex(Number(color.split(" ")[0]), Number(color.split(" ")[1]), Number(color.split(" ")[2]));
    }
    if (colorType === "rgb") {
        color = rgbToHex(Number(color.split(" ")[0]), Number(color.split(" ")[1]), Number(color.split(" ")[2]));
    }
    return color.replace("#", "");
}

export const parseClr = (clr: number) => (clr & 0x00ffffff).toString(16).padStart(6, "0");
