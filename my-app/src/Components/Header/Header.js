import c from './Header.module.css'

let Header = () => {
    return (
        <header className={c.header}>
            <div className={c.imageContainer}>
                <img className={c.header} src='http://goprincetontigers.com/images/logos/site/site.png' />
            </div>
        </header>
    );
}

export default Header;