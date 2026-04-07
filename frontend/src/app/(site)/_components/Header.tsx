import styles from './header.module.css'
import SearchBar from './SearchBar'
import Image from 'next/image'
import logo from '@/assets/img/logoetc.png'
import settings from '@/assets/img/setting.png'
import user from '@/assets/img/user.png'

export default function Header() {
    return <div className={styles.header}>
        <Image
            className={styles.logo}
            src={logo}
            width={50}
            height={50}
            alt="Logo" />

        <div className={styles.configOptions}>
            <div className={styles.config}>
                <Image
                    className={styles.clickable}
                    src={settings}
                    width={40}
                    height={40}
                    alt="Settings" />
                <p>Configurações</p>
            </div>
            <div className={styles.configMenu}>
                Modo Noturno
                <div className={styles.toggleDarkMode}></div>
            </div>
        </div>
        <div className={styles.user}>
            <Image
                className={styles.clickable}
                src={user}
                width={40}
                height={40}
                alt="User" />
            <p>Usuário</p>
        </div>
    </div>
}