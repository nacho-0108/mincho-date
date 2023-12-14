import Image from 'next/image'
import styles from '../app/page.module.css'

export default function Page3() {
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <div className={styles.question}>aww yayayay gcal rn!</div>
                <div><Image
                    unoptimized={true}
                    src="./chu-cat.gif"
                    alt="chu cat gif"
                    width={180}
                    height={150}
                    priority
                /></div>
                <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ18GWWY0JVYIKT1iHGSInuv7Pj0aQRVI7o3x_Esgjg-UHGPCX3SA1u9gkjEKxfgLCcznKNNPXyM?gv=true" width="800px" height="400px" frameBorder={0}></iframe>
            </div>

        </main>
    )
}