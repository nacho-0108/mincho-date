import Image from 'next/image'
import styles from '../app/page.module.css'
import Link from 'next/link'

export default function Page2() {
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <div className={styles.question}>hehe and also get boba?</div>
                <div><Image
                    unoptimized={true}
                    src="./boba.gif"
                    alt="bobaGif"
                    width={140}
                    height={150}
                    priority
                /></div>
                <div className={styles.buttonList}>
                    <Link className={styles.yesButton} href="/page3">
                        Yes
                    </Link>
                    <Link className={styles.noButton} href="/page2">
                        No
                    </Link>
                </div>
            </div>

        </main>
    )
}