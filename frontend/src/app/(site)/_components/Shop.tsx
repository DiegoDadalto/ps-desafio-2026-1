'use client'
import ShopGrid from "./ShopGrid";
import styles from "./shop.module.css";
import { useState } from "react";
import SidebarButtons from "./SidebarButtons";

export default function Shop() {
    const [selectedButton, setSelectedButton] = useState('');

    return <div className={styles.shop}>
        <SidebarButtons selected={selectedButton} selection={setSelectedButton} />
        <ShopGrid selected={selectedButton} />
    </div>
}