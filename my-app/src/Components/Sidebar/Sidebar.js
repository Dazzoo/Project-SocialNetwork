import c from './Sidebar.module.css'

let Sidebar = () => {
    return (
        <aside className={c.sideBar}>
            <ul>
                <li><a href='/profile'>Profile</a></li>
                <li><a href='/messages'>Messages</a></li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </aside>
    );
};

export default Sidebar;