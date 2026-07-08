import Image from 'next/image'
import style from './Hero.module.css'

export default function Hero({ image, text }) {
  return (
    <div className={style.wrap}>
      <Image
        src={image}
        alt='images'
        fill
        style={{ objectFit: 'cover' }}
      />
      <p className={style.title}>{text}</p>
    </div>
  )
}
