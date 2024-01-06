import Image from 'next/image'
import cardImg from './../../public/image.svg'

import styles from './page.module.css'
import BlogCard from './components/blogCard/BlogCard'

export default function Home() {
  return (
    <main className={styles.main}>
      <BlogCard/>
    </main>
  )
}
