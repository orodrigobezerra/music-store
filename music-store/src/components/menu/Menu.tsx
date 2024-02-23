import styles from '../../pages/home/Home.module.css'

function Menu() {
  return (
    <>
      <nav className={ styles.navcontainer }>
        <h3>Users</h3>
          <ul >
            <li><a href="" target="_self">Users List</a></li>
            <li><a href="" target="_self">Register User</a></li>
            <li><a href="" target="_self">Update User</a></li>
            <li><a href="" target="_self">Delete User</a></li>
          </ul>
        <br />
        <h3 >Articles</h3>
          <ul>
            <li><a href="" target="_self">Articles List</a></li>
            <li><a href="" target="_self">Add Article</a></li>
            <li><a href="" target="_self">Search Article</a></li>
            <li><a href="" target="_self">Update Article</a></li>
            <li><a href="" target="_self">Delete Article</a></li>
          </ul>
      </nav>
    </>
  )
}

export default Menu;
