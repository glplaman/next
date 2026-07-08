import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero({ image, text }) {
  return (
    <div className={styles.wrap}>
      <Image
        src={image}
        alt='images'
        fill
        style={{ objectFit: 'cover' }}
      />
      <p className={styles.title}>{text}</p>
    </div>
  )
}
