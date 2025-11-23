"use client"

export default function DownloadBtn() {
    const handleClick = async () => {
        const response = await fetch('https://raw.githubusercontent.com/DaBluLite/Cyan/refs/heads/master/Cyan.theme.css');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Cyan.theme.css';
        link.click();
        window.URL.revokeObjectURL(url);
    };
    return <button onClick={handleClick} className="button button-accent">Download</button>
}