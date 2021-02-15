import c from './Sidebar.module.css'

let Sidebar = () => {
    return (
        <aside className={c.sideBar}>
            <ul>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </aside>
    );
};

export default Sidebar;