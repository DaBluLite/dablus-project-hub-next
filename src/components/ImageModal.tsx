'use client'

import React, { DetailedHTMLProps, ImgHTMLAttributes, JSX, RefAttributes } from "react";
import { OnLoadingComplete, PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export function ImageModal(props: JSX.IntrinsicAttributes & Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet"> & { src: string | import("next/dist/shared/lib/get-img-props").StaticImport; alt: string; width?: number | `${number}`; height?: number | `${number}`; fill?: boolean; loader?: import("next/image").ImageLoader; quality?: number | `${number}`; priority?: boolean; loading?: "eager" | "lazy" | undefined; placeholder?: PlaceholderValue; blurDataURL?: string; unoptimized?: boolean; overrideSrc?: string; onLoadingComplete?: OnLoadingComplete; layout?: string; objectFit?: string; objectPosition?: string; lazyBoundary?: string; lazyRoot?: string; } & RefAttributes<HTMLImageElement | null>) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <Image {...props} onClick={handleOpen} className={`${props.className} cursor-pointer`} />
            {open && <dialog className="modal" open={open} onClick={handleOpen}>
                <Image {...props} className="max-w-[90%] w-fit h-[90%] object-contain" />
            </dialog>}
        </>
    );
}