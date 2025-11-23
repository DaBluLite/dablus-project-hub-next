import Spinner from "@/components/Spinner";
import styles from "./loading.module.css";

export default function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <Spinner className="text-black dark:text-white"/>
        </div>
    );
}
