import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (

    <main className={styles.main}>
      <div className={styles.center}>
          <div className={styles.question}>click the mincho icecream...</div>
          <div>
              <Link href="/page1">
                  <div className={styles.mincho}><Image
                      unoptimized={true}
                      src="./mincho.png"
                      alt="mincho"
                      width={200}
                      height={200}
                      priority
                  /></div>
              </Link>
          </div>
      </div>
    </main>
  )
}
