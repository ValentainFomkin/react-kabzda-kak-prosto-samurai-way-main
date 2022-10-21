import React from "react";
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (

        <div>
            <div className={s.img1}>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
            </div>
            <div className={s.gridForProfile}>
                <div className={s.img2}>
                    <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt=""/>
                </div>
                <div className={s.profile}>
                    <div className={s.title}>
                        Valentin Fomkin
                    </div>

                    <div className={s.infoOfProfile}>
                        <p>Date of Birth: 30 june</p>
                        <p>City: Volgograd</p>
                        <p>Profile github: <a
                            target={"_blank"}
                            rel={'noreferrer'}
                            href="https://github.com/ValentainFomkin">ValentainFomkin</a></p>
                    </div>
                </div>
            </div>
        </div>

    )
}
