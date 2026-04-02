import styles from './main.module.css'
import Banner from './Banner'
import Shop from './Shop'
import SectionTitle from './SectionTitle'

export default function Main() {
    return <div className={styles.main}>
        <Banner />
        <SectionTitle />
        <Shop />
    </div>
}