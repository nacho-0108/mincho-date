import Image from 'next/image'
import styles from './page.module.css'
import bobaGif from 'public/peach-goma-boba.gif'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          unoptimized={true}
          src="./peach-goma-boba.gif"
          alt="bobaGif"
          width={180}
          height={150}
          priority
        />
      </div>

      <div className={styles.grid}>

      </div>
    </main>
  )
}
