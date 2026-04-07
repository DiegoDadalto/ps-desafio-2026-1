import Image from "next/image";
import styles from './griditem.module.css'
import { sportsItemType } from "@/types/sportsItem";
//import { api } from "@/services/api";
import { useState } from "react";
import { handleBuy } from "@/actions/sportsItem";

export default function GridItem(props: sportsItemType) {
    const [sportsItem, setSportsItem] = useState<number>(props.amount);

    async function buttonClick() {
        const res = await handleBuy(props.id, { ...props, amount: sportsItem });
        if (res) {
            setTimeout(() => { setSportsItem(x => x - 1) }, 2000)
        }
    }

    if (sportsItem < 15) {

    }

    return <div className={styles.gridItem}>
        <Image src={props.image}
            alt={props.name}
            width={300}
            height={180}
            className={styles.productImage} />
        <div className={styles.productInfo}>
            <div className={styles.nameAmount}>
                <p className={styles.productName}>{props.name}</p>
                <p className={styles.amount}>Em estoque: <span className={(sportsItem < 15) ? styles.limited : ""}>{sportsItem}</span></p>
            </div>
            <p className={styles.price}>R${props.price.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}</p>
        </div>
        <div className={styles.buttons}>
            <button className={styles.expandInfo}>Informações</button>
            {(props.amount > 0) ? (
                <button className={styles.addToCart} onClick={buttonClick}>Comprar</button>
            ) : (
                <button className={styles.outOfStock} disabled>Esgotado</button>
            )}
        </div>
    </div>
}

