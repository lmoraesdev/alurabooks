import logo from '../../imgs/logo.svg';
import './style.css';

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Imagem do logo" className="logo-img"></img>
      <p>
        <strong>Alura</strong>Books
      </p>
    </div>
  );
}

export default Logo;
