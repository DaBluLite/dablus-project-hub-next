import { JSX } from "react";
import { colorToHex } from "@/api/Colors";

export default function ColorwayItem(props: {
    prefix?(): JSX.Element,
    suffix?(): JSX.Element,
    menu?: React.ReactNode,
    id: string,
    colors?: string[],
    text: string,
    descriptions?: string[],
    onClick?(event: React.MouseEvent<HTMLDivElement>): void;
}) {
    return <div
        onClick={props.onClick}
        className="colorway-pure"
        role="button"
    >
        {props.prefix ? <props.prefix /> : (props.colors ? <div className="dc-color-swatch">
            {props.colors.map((colorStr: string, i: number) => <div
                key={i}
                className="dc-color-swatch-part"
                style={{
                    backgroundColor: `#${colorToHex(colorStr)}`,
                }}
            />)}
        </div> : null)}
        <div className="dc-label-wrapper">
            <span className="dc-label">{props.text}</span>
            {props.descriptions ? <span className="dc-label dc-subnote dc-note">{props.descriptions.join(" • ")}</span> : null}
        </div>
    </div>;
}
