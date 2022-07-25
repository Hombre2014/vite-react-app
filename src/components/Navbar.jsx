import logo from '../assets/images/react.png';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img className='logo-image' src={logo} alt="React Logo" />
        <h3 className='logo-title'>ReactFacts</h3>
      </div>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
