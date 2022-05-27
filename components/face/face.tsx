import * as React from 'react';
import styles from './Face.module.css';

export default function Face() {
    const [facePic, setFacePic] = React.useState<string>('bryce');

    const handleClick = () => {
        setFacePic('doot');
        const sound = document.getElementById('dooty') as HTMLMediaElement;
        sound?.play();
        setTimeout(() => {
            setFacePic('bryce');
        }, 500)
    };

    let whichFace;
    if (facePic === 'bryce') {
        whichFace = <img
                    onClick={handleClick}
                    src={require('../../public/face80-2.jpg')}
                    alt="my face"
                    className={styles.logo}
                />;
    } else {
        whichFace = <img
                    onClick={handleClick}
                    src={require('../../public/doot.png')}
                    alt="doot"
                    className={styles.logo}
                />
    }

    return (
        <div>
            {whichFace}
            <audio id='dooty' src='/skullsound2.mp3'></audio>
        </div>
    );
}