import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul id="header">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="administrador">Administrador</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
