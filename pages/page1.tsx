import Image from 'next/image'
import styles from '../app/page.module.css'
import Link from 'next/link'

export default function Page2() {
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <div className={styles.question}>hi do you wanna go on a dinner date with me?</div>
                <div><Image
                    unoptimized={true}
                    src="./plz-cat.gif"
                    alt="bobaGif"
                    width={160}
                    height={150}
                    priority
                /></div>
                <div className={styles.buttonList}>
                    <Link className={styles.yesButton} href="/page2">
                        Yes
                    </Link>
                    <Link className={styles.noButton} href="/page1">
                        No
                    </Link>
                </div>
            </div>

        </main>
    )
}