import style from './MyMusic.module.css'
import React, { useState, useEffect } from 'react'
import { PreloaderSkateboardForComponent } from '../common/Preloaders/PreloaderSkateboard'

const MyMusic = () => {
    const [loading, setLoading] = useState(true);






    return (
    <div className={style.MyMusicWrapper} >
        <div>
            <iframe src="https://open.spotify.com/embed/track/248OFOZef6ShXv6DGgbnxU" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div>
            <iframe src="https://open.spotify.com/embed/track/7K0ZlJjakCdXBFqdOcsFV3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div>
            <iframe src="https://open.spotify.com/embed/track/3CRDbSIZ4r5MsZ0YwxuEkn" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div>
            <iframe src="https://open.spotify.com/embed/track/1VGzxJnVQND7Cg5H5wGj14" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div>
            <iframe src="https://open.spotify.com/embed/track/27SdWb2rFzO6GWiYDBTD9j" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div>
            <iframe src="https://open.spotify.com/embed/track/5fgHQws1Cj6KDLQmlqM6lF" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div>
            <iframe src="https://open.spotify.com/embed/track/4rfaoyaZvNa60cj3OKSQV9" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div>
            <iframe src="https://open.spotify.com/embed/track/68NsOuum1AegLDhOIr2ADL" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div>
            <iframe src="https://open.spotify.com/embed/track/6Z8R6UsFuGXGtiIxiD8ISb" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    </div>
    );
}

export default MyMusic;