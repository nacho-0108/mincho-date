import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (

    <main className={styles.main}>
      <div className={styles.center}>
          <div>click the mincho icecream!</div>
          <div className={styles.buttonList}>
              <Link href="/page1">
                  <div className={styles.mincho}><Image
                      unoptimized={true}
                      src="./mincho.png"
                      alt="mincho"
                      width={300}
                      height={300}
                      priority
                  /></div>
              </Link>
          </div>
      </div>
    </main>
  )
}
