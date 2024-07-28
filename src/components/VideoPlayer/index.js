import styles from './VideoPlayer.module.scss';

function VideoPlayer() {
    return (
        <div className={styles.frame}>
            <iframe
                width="320"
                height="570"
                src="https://www.youtube.com/embed/zPxQjuFoUBc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default VideoPlayer;
