import styles from './Dooter.module.css';

export default function Dooter() {
    return (
        <div className={styles.container}>
            <style global jsx>{`
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div {
                    height: 100%;
                    background-color: black;
                }
                `}</style>
                <img
                    src={require('../../public/doot.png')}
                    alt="doot"
                    className={styles.dootman}
                    height={500}
                    onClick={playDoot}
                />
                <audio id='dooty' src='/skullsound2.mp3'></audio>
        </div>
    )
}

function playDoot() {
    const sound = document.getElementById('dooty') as HTMLMediaElement;
    sound?.play();
}