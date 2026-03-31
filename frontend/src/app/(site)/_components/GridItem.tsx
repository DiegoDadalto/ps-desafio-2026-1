import Image from "next/image";
import styles from './griditem.module.css'
import { sportsItemType } from "@/types/sportsItem";

export default function GridItem(props: sportsItemType) {
    return <div className={styles.gridItem}>
        <Image src={props.image}
            alt={props.name}
            width={180}
            height={180} />
        <div className={styles.productInfo}>
            <div className={styles.nameAmount}>
                <p className={styles.productName}>{props.name}</p>
                <p className={styles.amount}>{props.amount}</p>
            </div>
            <p className={styles.price}>{props.price}</p>
        </div>
        <div className={styles.buttons}>
            <button className={styles.expandInfo}>Informações</button>
            <button className={styles.addToCart}>Comprar</button>
        </div>
    </div>
}

