import style from './MyMusic.module.css'
import React, { useState, useEffect } from 'react'
import { PreloaderSkateboardForComponent } from '../common/Preloaders/PreloaderSkateboard'

const MyMusic = (props) => {
    let [loading, setLoading] = useState(true);

    useEffect(() => {
            setTimeout(() => setLoading(false), 1500)

    }, [])


    return (
        <>
            {loading ? <PreloaderSkateboardForComponent/> : null }
        <div className={style.MyMusicWrapper} >


                <iframe src="https://open.spotify.com/embed/track/248OFOZef6ShXv6DGgbnxU" className={style.musicItem} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/track/7K0ZlJjakCdXBFqdOcsFV3" className={style.musicItem} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/track/3CRDbSIZ4r5MsZ0YwxuEkn" className={style.musicItem} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/track/1VGzxJnVQND7Cg5H5wGj14" className={style.musicItem} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/track/27SdWb2rFzO6GWiYDBTD9j" className={style.musicItem} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/track/5fgHQws1Cj6KDLQmlqM6lF" className={style.musicItem} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/track/4rfaoyaZvNa60cj3OKSQV9" className={style.musicItem} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/track/68NsOuum1AegLDhOIr2ADL" className={style.musicItem} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/track/6Z8R6UsFuGXGtiIxiD8ISb" className={style.musicItem} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </>
    );
}

export default MyMusic