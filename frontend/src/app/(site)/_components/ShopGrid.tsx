'use client'

import { sportsItemType } from "@/types/sportsItem";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import GridItem from "./GridItem";
// import Sidebar from "./Sidebar";
import styles from "./shopgrid.module.css";

interface Props {
    selected: string | null;
}

export default function ShopGrid({ selected }: Props) {

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
        {sportsItem.filter((equipment) => {
            if (!selected) return true;
            console.log(`Comparando ${equipment.category.id} com ${selected}`)
            return equipment.category.id == selected
        }).map((equipment) => (
            <GridItem key={equipment.id} {...equipment} />
        ))}
    </div>
}