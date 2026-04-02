import Image from "next/image";
import styles from './griditem.module.css'
import { sportsItemType } from "@/types/sportsItem";

export default function GridItem(props: sportsItemType) {
    return <div className={styles.gridItem}>
        <Image src={props.image}
            alt={props.name}
            width={300}
            height={180} />
        <div className={styles.productInfo}>
            <div className={styles.nameAmount}>
                <p className={styles.productName}>{props.name}</p>
                <p className={styles.amount}>Em estoque: {props.amount}</p>
            </div>
            <p className={styles.price}>R${props.price.toLocaleString()}</p>
        </div>
        <div className={styles.buttons}>
            <button className={styles.expandInfo}>Informações</button>
            {(props.amount > 0) ? (
                <button className={styles.addToCart}>Comprar</button>
            ) : (
                <button className={styles.outOfStock} disabled>Esgotado</button>
            )}
        </div>
    </div>
}

