import React, { useState } from 'react'
import { Howl } from 'howler'

import SoundStart from '../../assets/Sounds effects/Start_Sound_effect.mp3'

import './home.scss'

import Footer from '../Footer/Footer'

export default function Home() {

    const sound = new Howl({
        src: [SoundStart],
    });

    const playSound = () => {
        sound.play();
    };

    const [popup, setPopup] = useState(true);

    const closePopup = () => {
        setPopup(false);
    }

    return (

        <div className="container">

            <div className="buttons">

                <button onMouseEnter={playSound}> Start </button>
                <button onMouseEnter={playSound}> About </button>
                <button onMouseEnter={playSound}> Not Exit </button>

            </div>

            {popup && (

                <div className="popupContainer">

                    <p> It's strange to write a letter to the person who was here until recently. You are a terrible person. Slow, stupid, imbecile. The first time I saw you I was five years old. It was during the recital at the piano school I attended. The boy appeared so nervous, he made everyone laugh </p>

                    <div className='closeArea'>
                        <button className='close' onClick={closePopup}> Close </button>
                    </div>

                </div>

            )}

            <Footer />

        </div>

    )
}
