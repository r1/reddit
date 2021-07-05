import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/ui/NavBar/NavBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reddit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavBar/>
    </div>
  )
}
