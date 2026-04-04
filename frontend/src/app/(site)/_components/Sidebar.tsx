'use client'

import { useState, useEffect } from "react";
import { api } from "@/services/api";
import { categoryType } from "@/types/category";
import styles from "./sidebar.module.css";

export default function Sidebar() {

    const [category, setCategory] = useState<categoryType[]>([]);
    const [selectedButton, setSelectedButton] = useState('');
    const [active, setActive] = useState(false);

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
                onClick={() => {
                    setSelectedButton(categories.id)
                    setActive(!active);
                }}
                className={(selectedButton == categories.id) && !active ?
                    styles.selectedButton : ''}>{categories.name}</div>
        ))}
    </div>
}