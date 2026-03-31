import Image from "next/image";
import testeImg from '@/assets/img/teste.png';
import styles from './griditem.module.css'

export default function GridItem() {
    return <div className={styles.gridItem}>
        <Image src={testeImg}
            alt="Accessory image" />
        <div className={styles.productInfo}>
            <div className={styles.nameAmount}>
                <p className={styles.productName}>Tênis De Corrida Esportivos De Carbono Com Sola Macia, Tênis</p>
                <p className={styles.amount}>Quantidade: 437</p>
            </div>
            <p className={styles.price}>R$79,99</p>
        </div>
        <div className={styles.buttons}>
            <button className={styles.expandInfo}>Informações</button>
            <button className={styles.addToCart}>Comprar</button>
        </div>
    </div>
}

