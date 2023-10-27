import Image from 'next/image'
import styles from './page.module.css'
import { Banner } from "./componentes/banner/banner";

export default function Home() {
  return (
    <>
    <Banner />
    <main className={styles.main}>
     
    </main>
    </>    
  )
}
