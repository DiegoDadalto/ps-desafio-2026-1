import styles from './banner.module.css'
import Image from 'next/image'
import bannerImg from '@/assets/img/bannerfull.jpg'

export default function Banner() {
    return <div className={styles.banner}>
        <Image
            src={bannerImg}
            width={1920}
            height={350}
            alt="test"
            className={styles.image} />
    </div>
}