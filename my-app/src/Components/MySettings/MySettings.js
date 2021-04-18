import c from './MySettings.module.css'
import ComingSoon from '../../assets/ComingSoon.png'
import withAuthRedirect from './../../hoc/withAuthRedirect'


const MySettings = () => {
    return (
        <div className={c.settings}>
            <img src={ComingSoon} />
        </div>
    );
}

export default withAuthRedirect(MySettings);