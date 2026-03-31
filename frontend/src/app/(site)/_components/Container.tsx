import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import styles from './container.module.css'

export default function Container() {
    return <div className={styles.container}>
        <Header />
        <Main />
        <Footer />
    </div>
}