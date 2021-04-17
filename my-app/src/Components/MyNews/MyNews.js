import c from './MyNews.module.css'
import News from './News/News'



const MyNews = (props) => {
    debugger
    return (
    <div className={c.MyNews}>
        {props.newsList.map(el => <News title={el.title} abstract={el.abstract} url={el.url}
                                        image={el.multimedia[0].url}    />) }
        </div>
    );
}

export default MyNews;