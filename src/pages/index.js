import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import styles from '@/styles/Index.module.css'
import Home from '@/components/Home/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <div className={styles.main}>
      <Header/>
      <Home/>
    </div>
  )
}
