import c from './MyNews.module.css'
import News from './News/News'

const MyNews = (props) => {
    debugger
    return (
    <div className={c.MyNews}>
        {props.newsList.map(el => <News title={el.title} description={el.description} urlToImage={el.urlToImage} />) }
        </div>
    );
}

export default MyNews;