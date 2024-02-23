import { Outlet } from "react-router-dom";
import styles from '../../pages/home/Home.module.css'
import { useState } from "react";
import { Menu } from "..";

function Layout() {  
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };
  
  return (   
    <>
      <header className={ styles.headcontainer }>
        <div className="menu" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          {hovered ? (
            <>
              { <img src="src/assets/VaiTudoAbaixo-LOGO-WTEXT.png" width="25%"/> }
              <img 
                className={ styles.headimg }
                src="src/assets/outra-imagem.png"
                alt=""
              />
              {/* Renderizar o menu aqui */}
              <Menu />
            </>
          ) : (
            <img 
              className={ styles.headimg }
              src="src/assets/VaiTudoAbaixo-LOGO-white.png"
              alt=""
            />
          )}
        </div>
        <h3>VAITUDOABAIXO</h3>
        <span>Rodrigo</span>
      </header>
      <div className={ styles.container }>
        <img className= { styles.logo } src="src/assets/VaiTudoAbaixo-LOGO2.png" alt="Logo"/>
        <Outlet />
      </div>
    </>
  )
}

export default Layout;