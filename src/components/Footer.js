import style from './Footer.module.css'
import Image from 'next/image';
const Footer = ({ year }) => {
  return (
    <footer className={style.footerContainer}>
      <p>All rights reserved &copy; 2025-{year}</p>
      <Image className={style.avatar} src='https://glplaman.github.io/imgs/avatar.jpg' width={50} height={50} alt="头像"></Image>
      {/* <Image className={style.avatar} src='/avatar.jpg' width={50} height={50} alt="头像"></Image> */}
      <p>glpla@hotmail.com</p>
    </footer>
  )
}
export default Footer;