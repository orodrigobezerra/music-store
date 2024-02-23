import { Link } from "react-router-dom";


function SoonPage() {
  return (
    <>
      <h1>Can't wait for...</h1>

      <Link to="/home">
        <img src="src/assets/VaiTudoAbaixo-LOGO-WTEXT.png" className="logo vaitudoabaixo" alt="Ir para Home" />
        <br></br>
        <em>Go to Home Page</em>
      </Link>
      
      <p>
        <i>Released by Rodrigo Nunes and Nélio Costa</i>
      </p>

    </>
  )
}

export default SoonPage;
