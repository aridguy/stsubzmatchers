// import { Link } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
// import Hero1 from "../Assets/hero_1.jpeg"

const Navbar = () => {
  const Navigate = useNavigate("/")
  const containerStyle = {
    display: 'flex', // Use Flexbox
    justifyContent: 'space-between', // Add space between items
    alignItems: 'center', // Align items vertically in the center
    padding: '10px', // Add some padding
    border: '1px solid #ccc', // Optional: Add a border for visual clarity
    color: "white"
  };
  return (
    <div>
      <nav style={{ width: "100%", background: "#00000061", padding: "1em", }}>
        <div className='container text-center'>
          <div className='row'>
            <div className='logo-wrap'>
              <h1 id="fh5co-logo" className='logo text-white'>Subz Matchers<span style={{ color: "red" }}>.</span></h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
              <div style={containerStyle}>
              <small className='cursor' onClick={() => Navigate("/")}>Home</small>
                <small className='cursor' onClick={() => Navigate("/gallery")}>Gallery</small>
                <small className='cursor' onClick={() => Navigate("/payment")}>Payment</small>
                <small className='cursor' onClick={() => Navigate("/faq")}>Faq</small>
                <small className='cursor' onClick={() => Navigate("/about")}>About</small>
                <small className='cursor' onClick={() => Navigate("/contact")}>Contact</small>
              </div>
            </div>
            <div className='col-md-2'></div>
          </div>
        </div>
      </nav>
      <section>
        <div className='container-fluid banners1'>
          <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8' style={{ marginTop: "10em" }}>
              <h1>
                The Best BDSM Matching Services <em>in</em> South East Asia and around the globe.
              </h1>
            </div>
            <div className='col-md-2'></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Navbar
