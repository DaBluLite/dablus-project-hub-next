import styles from "./mouse-scroll-indicator.module.css";
export default function MouseScrollIndicator({ className }: { className?: string }) {
    return (
        <div className={styles.scrollDowns + (className ? " " + className : "")}>
            <div className={styles.mousey}>
                <div className={styles.scroller}/>
            </div>
        </div>
    );
}