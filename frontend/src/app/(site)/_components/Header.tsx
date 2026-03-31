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
        <SearchBar />
        <Image
            className={styles.clickable}
            src={settings}
            width={40}
            height={40}
            alt="Settings" />
        <Image
            className={styles.clickable}
            src={user}
            width={40}
            height={40}
            alt="User" />
    </div>
}