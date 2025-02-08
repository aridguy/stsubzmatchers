import React from 'react'
// import Hero1 from "../Assets/hero_1.jpeg"

const Navbar = () => {
  return (
    <div>
      <nav className="fh5co-nav" role="navigation">
        <div className="top-menu">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 text-center logo-wrap">
                <div id="fh5co-logo"><a href="index.html">Subz Matchers<span>.</span></a></div>
              </div>
              <div className="col-xs-12 text-center menu-1 menu-wrap">
                <ul>
                  <li className="active"><a href="index.html">Home</a></li>

                  <li className="">
                    <a href="gallery.html">gallery</a>
                  </li>
                  <li><a href="/payment">Payment</a></li>
                  <li><a href="/faq">FAQ</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div className='container-fluid banners1'>
          <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
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
