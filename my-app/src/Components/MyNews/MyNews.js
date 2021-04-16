import c from './MyNews.module.css'
import News from './News/News'



const MyNews = (props) => {
    return (
    <div className={c.MyNews}>
        {props.newsList.data.map(el => <News title={el.title} description={el.description} image={el.image} url={el.url} published_at={el.published_at}  />) }
        </div>
    );
}

export default MyNews;