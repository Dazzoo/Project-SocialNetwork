import c from './MyNews.module.css'
import News from './News/News'
import { PreloaderSkateboardForComponent } from '../common/Preloaders/PreloaderSkateboard'


const MyNews = (props) => {
    if(!props.newsList){
        return <PreloaderSkateboardForComponent/>
    }
    console.log(props.newsList)
    return (
    <div className={c.MyNews}>
        {props.newsList.map(el => <News key={el.update_date} title={el.title} abstract={el.abstract} url={el.url}
                                        image={el.multimedia ? el.multimedia[0].url : null}    />) }
        </div>
    );
}

export default MyNews;