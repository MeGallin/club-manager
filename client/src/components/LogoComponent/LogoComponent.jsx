import './LogoComponent.scss';
import logo from '../../assets/club-manager-logo.png';

const LogoComponent = () => {
  return (
    <>
      <div className="logo-wrapper">
        <img src={logo} alt="logo" className="logo-image" />
        <div>
          <span className="logo-main-text">Anorthosis</span>
          <div className="logo-secondary-text">Football Academy</div>
        </div>
      </div>
    </>
  );
};

export default LogoComponent;
