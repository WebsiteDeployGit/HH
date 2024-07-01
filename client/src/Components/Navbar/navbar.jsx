import React from 'react';

const Navbar = () => {
  return (
    <div className="container-fluid" style={{ background: "#FEF5E7", padding: 0 }}>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-0 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"style={{ paddingLeft: '20px' }}>
          <img className="bi me-2" width="35" height="32" src='https://purepng.com/public/uploads/large/purepng.com-photos-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596102asedt.png' alt="Logo" />
          <span className="fs-4">HHConcreations</span>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item"><a href="/" className="nav-link" style={{ color: 'black' }} aria-current="page">Home</a></li>
          <li className="nav-item"><a href="/about" className="nav-link" style={{ color: 'black' }}>About</a></li>
          <li className="nav-item"><a href="/gallery" className="nav-link" style={{ color: 'black' }}>Gallery</a></li>
          <li className="nav-item"><a href="/contact-us" className="nav-link" style={{ color: 'black' }}>Contact Us</a></li>
          <li className="nav-item"><a href="/login" className="nav-link" style={{ color: 'black' }}><button type="button" className="btn btn-warning">Login</button></a></li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
