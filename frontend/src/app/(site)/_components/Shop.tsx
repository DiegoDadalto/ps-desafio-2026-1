import Sidebar from "./Sidebar";
import ShopGrid from "./ShopGrid";
import styles from "./shop.module.css";

export default function Shop() {
    return <div className={styles.shop}>
        <Sidebar />
        <ShopGrid />
    </div>
}