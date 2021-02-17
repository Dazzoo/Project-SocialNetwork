import c from './Sidebar.module.css'

let Sidebar = () => {
    return (
        <aside className={c.sideBar}>
            <ul>
                <li><a href='/profile'>Profile</a></li>
                <li><a href='/messages'>Messages</a></li>
                <li><a href='/news'>News</a></li>
                <li><a href='/music'>Music</a></li>
                <li><a href='/settings'>Settings</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;