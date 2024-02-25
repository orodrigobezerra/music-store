import { Link } from 'react-router-dom';
import styles from '../../pages/home/Home.module.css'

function Menu() {
  return (
    <>
      <nav className={ styles.navcontainer }>
      { <img src="src/assets/VaiTudoAbaixo-LOGO-WTEXT.png"/> }
        <h3>Users</h3>
          <ul >
            <li><Link to="" target="_self">Users List</Link></li>
            <li><Link to="" target="_self">Register User</Link></li>
            <li><Link to="" target="_self">Update User</Link></li>
            <li><Link to="" target="_self">Delete User</Link></li>
          </ul>
        <h3 >Articles</h3>
          <ul>
            <li><Link to="/articles-list" target="_self">Articles List</Link></li>
            <li><Link to="" target="_self">Add Article</Link></li>
            <li><Link to="" target="_self">Search Article</Link></li>
            <li><Link to="" target="_self">Update Article</Link></li>
            <li><Link to="" target="_self">Delete Article</Link></li>
          </ul>
      </nav>
    </>
  )
}

export default Menu;
