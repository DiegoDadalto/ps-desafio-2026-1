'use client'

import { useState, useEffect } from "react";
import { api } from "@/services/api";
import { categoryType } from "@/types/category";
import styles from "./sidebarButtons.module.css";

interface Props {
    selected: string
    selection: (id: string) => void
}

export default function SidebarButtons({ selected, selection }: Props) {
    const [category, setCategory] = useState<categoryType[]>([]);

    useEffect(() => {
        async function getCategory() {
            const { response, error } = await api('GET', '/category');

            if (response) {
                setCategory(response as categoryType[])
            }
            else {
                console.error(error?.message);
            }

        }

        getCategory();

    }, [])

    return <div className={styles.sidebar}>
        {category.map((categories) => (
            <div
                key={categories.id}
                onClick={() => {
                    if (selected === categories.id) {
                        selection('');
                    } else {
                        selection(categories.id);
                    }
                    console.log(selected)
                    console.log(categories.id)
                }}
                className={selected === categories.id ?
                    styles.selectedButton : ''}>{categories.name}</div>
        ))}
    </div>
}