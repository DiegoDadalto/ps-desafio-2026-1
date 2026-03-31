/*

'use client'

import { sportsItemType } from "@/types/sportsItem";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import GridItem from "./GridItem";

export default function Products() {
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
}
*/