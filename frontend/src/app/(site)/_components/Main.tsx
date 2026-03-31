import styles from './main.module.css'
import Banner from './Banner'
import Shop from './Shop'

export default function Main() {
    return <div className={styles.main}>
        <Banner />
        <Shop />
    </div>
}