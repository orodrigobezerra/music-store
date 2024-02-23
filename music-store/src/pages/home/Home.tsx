import styles from './Home.module.css';

function Home() {
  return (
    <>
      <div className={ styles.container }>
        <img className= { styles.logo } src="src/assets/VaiTudoAbaixo-LOGO2.png" alt="Logo"/>
      </div>
    </>
  )
}

export default Home;