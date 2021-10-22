import React from 'react';
import { Mole } from '../index';
import styles from './Board.module.css';

function Board() {
    const moles = [true, true, true, true, true, true];

    return (
        <section className={styles.Board}>
            <h1 className={styles.Board_title}>Whac-a-Mole</h1>

            <div className={styles.Board_field}>
                <div className={styles.Field}>
                    <Mole className={styles.Field_one} />
                    <Mole className={styles.Field_two} />
                    <Mole className={styles.Field_three} />
                    <Mole className={styles.Field_four} />
                    <Mole className={styles.Field_five} />
                    <Mole className={styles.Field_six} />
                </div>

                <button className={styles.Board_btn}>
                    Randomize
                </button>
            </div>
        </section>
    );
}

export default Board;