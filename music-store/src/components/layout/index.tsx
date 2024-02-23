import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Outlet />
      <footer>
        <span>Trybe - todos os direitos reservados</span>
      </footer>
    </>
  )
}

export default Layout;