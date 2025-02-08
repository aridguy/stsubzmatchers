import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      {
        <section style={{ position: "relative", top: "5em" }}>

          <div class="container">
            <div class="row">
              <div className='col-md-6'></div>
              <div className='col-md-6'>
                <form action="https://formspree.io/f/xeqwwpra" method="POST" id="form-wrap">
                  <div class="row form-group">
                    <div class="col-md-12">
                      <label for="name">Your Name</label>
                      <input type="text" class="form-control" id="name" name="name" />
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-12">
                      <label for="email">Your Email</label>
                      <input type="text" class="form-control" id="email" name="email" />
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-12">
                      <label for="message">Your Message</label>
                      <textarea name="message" id="message" cols="30" rows="10" class="form-control"></textarea>
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-12">
                      <input type="submit" class="btn btn-primary btn-outline btn-lg" value="Submit Form" />
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
