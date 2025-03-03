'use client'

import ImageInternal from "next/image";

export default function Image(props: any) {
    return <ImageInternal
        loader={({ src }) => {
            return src;
        }}
        {...props}
    />
}