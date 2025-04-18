import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutImg from "../Assets/gallery_1.jpg"
import { Link } from 'react-router-dom'
import Loader from '../components/Loader' // Import the Loader

const About = () => {
  const [delayed, setDelayed] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayed(false)
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (delayed || loading) return <Loader message="Loading About Page..." />

  return (
    <div>
      <Navbar />
      {
        <section style={{ position: "relative", top: "5em" }}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <img width="100%" src={AboutImg} alt='about-img' />
              </div>
              <div className='col-md-6'>
                <h1 className='text-white'>About Us!</h1>
                <i className='text-white'>
                  We have been in this business for almost 2 decades now and our services are being provided to fill up
                  the void in the industry for Dominant men that seek submissive and playful women to use whenever and
                  however they desire to. This is all consensual and absolutely no laws are being broken here. We have
                  helped loads of satisfied clients around the globe. We are just a click away from helping all your
                  desires come to pass. We always advise our clients not to waste their time on various bdsm platforms
                  and websites sourcing for a girl to own and use. Let us help reduce your struggles searching for a
                  girl. We would match you effortlessly with your girl of choice and also help deliver her to your
                  doorstep.
                </i>
                <div style={{ marginTop: "4em" }}>
                  <Link className='btn btn-primary btn-outline' to="/contact">Contact us today</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      <Footer />
    </div>
  )
}

export default About
