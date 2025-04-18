import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loader from '../components/Loader' // Don't forget this import!

const Contact = () => {
  const [delayed, setDelayed] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayed(false)
      setLoading(false) // You can set this based on real async tasks if needed
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (delayed || loading) return <Loader message="Loading Contact Page, please wait..." />

  return (
    <div>
      <Navbar />
      {
        <section style={{ position: "relative", top: "5em" }}>
          <div className="container">
            <div className="row">
              <div className='col-md-6'></div>
              <div className='col-md-6'>
                <form action="https://formspree.io/f/xeqwwpra" method="POST" id="form-wrap">
                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" className="form-control" id="name" name="name" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="email">Your Email</label>
                      <input type="text" className="form-control" id="email" name="email" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="message">Your Message</label>
                      <textarea name="message" id="message" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <input type="submit" className="btn btn-primary btn-outline btn-lg" value="Submit Form" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      }
      <Footer />
    </div>
  )
}

export default Contact
