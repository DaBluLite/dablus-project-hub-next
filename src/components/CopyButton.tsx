'use client';

export default function CopyButton({ text }: { text: string }) {
    return <div className="accent-button py-1 px-4 cursor-pointer select-none rounded-sm transition" onClick={() => navigator.clipboard.writeText(text)} >Copy import to clipboard</div>
}