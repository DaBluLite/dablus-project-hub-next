'use client'

import { PlaceholderValue, OnLoadingComplete } from "next/dist/shared/lib/get-img-props";
import ImageInternal from "next/image";
import { JSX, DetailedHTMLProps, ImgHTMLAttributes, RefAttributes } from "react";

export default function Image(props: JSX.IntrinsicAttributes & Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet"> & { src: string | import("next/dist/shared/lib/get-img-props").StaticImport; alt: string; width?: number | `${number}`; height?: number | `${number}`; fill?: boolean; loader?: import("next/image").ImageLoader; quality?: number | `${number}`; priority?: boolean; loading?: "eager" | "lazy" | undefined; placeholder?: PlaceholderValue; blurDataURL?: string; unoptimized?: boolean; overrideSrc?: string; onLoadingComplete?: OnLoadingComplete; layout?: string; objectFit?: string; objectPosition?: string; lazyBoundary?: string; lazyRoot?: string; } & RefAttributes<HTMLImageElement | null>) {
    return <ImageInternal
        loader={({ src }) => {
            return src;
        }}
        {...props}
    />
}