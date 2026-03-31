'use client'

import { sportsItemType } from "@/types/sportsItem";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import GridItem from "./GridItem";
import Sidebar from "./Sidebar";
import styles from "./shopgrid.module.css";

export default function ShopGrid() {

    const [sportsItem, setSportsItem] = useState<sportsItemType[]>([]);

    useEffect(() => {
        async function getSportsItem() {
            const { response, error } = await api('GET', '/equipments');

            if (response) {
                setSportsItem(response as sportsItemType[])
            }
            else {
                console.error(error?.message);
            }

        }

        getSportsItem();

    }, [])

    return <div className={styles.shopGrid}>
        {sportsItem.map((equipment) => (
            <GridItem key={equipment.id} {...equipment} />
        ))}
    </div>
}