import React from 'react';
import MoleImg from './mole.png';
import HoleImg from './hole.png';
import styles from './Mole.module.css';

function Mole() {
    const isVisible = true;

    return (
        <div className={styles.Mole}>
            { isVisible ? (
                <img
                    src={MoleImg}
                    alt="Mole coming out of a hole in the ground"
                    className={styles.Mole_img}
                />
            ) : (
                <img
                    src={HoleImg}
                    alt="Hole in the ground"
                    className={styles.Mole_img}
                />
            )}
        </div>
    );
}

export default Mole;