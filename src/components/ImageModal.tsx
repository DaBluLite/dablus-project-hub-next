'use client'

import React, { DetailedHTMLProps, ImgHTMLAttributes, JSX, RefAttributes } from "react";
import { OnLoadingComplete, PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Modals } from "@/api";

export function ImageModal(props: JSX.IntrinsicAttributes & Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet"> & { src: string | import("next/dist/shared/lib/get-img-props").StaticImport; alt: string; width?: number | `${number}`; height?: number | `${number}`; fill?: boolean; loader?: import("next/image").ImageLoader; quality?: number | `${number}`; priority?: boolean; loading?: "eager" | "lazy" | undefined; placeholder?: PlaceholderValue; blurDataURL?: string; unoptimized?: boolean; overrideSrc?: string; onLoadingComplete?: OnLoadingComplete; layout?: string; objectFit?: string; objectPosition?: string; lazyBoundary?: string; lazyRoot?: string; } & RefAttributes<HTMLImageElement | null>) {
    return (
        <Image {...props} onClick={() => {
            Modals.openModal(propss => <div className="dc-image-modal pointer-events-none">
                <Image {...props} width={1920} height={0} quality={100} className="image-modal-img max-w-[90%] w-fit h-[90%] object-contain" />
            </div>)
        }} className={`${props.className} cursor-pointer`} />
    );
}