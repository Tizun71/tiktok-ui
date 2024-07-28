import VideoPlayer from '~/components/VideoPlayer';
import styles from './Home.module.scss';

function Home() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                {/* Video */}
                <VideoPlayer></VideoPlayer>
                <div className={styles['action-item-container']}>{/*Action Item */}</div>
            </div>
        </div>
    );
}

export default Home;
