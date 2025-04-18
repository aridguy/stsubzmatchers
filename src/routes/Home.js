import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero2 from "../Assets/person_1.jpeg";
import Gal1 from "../Assets/gallery_1.jpg";
import Gal2 from "../Assets/gallery_3.jpg";
import Gal3 from "../Assets/gallery_2.jpg";
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Home = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a 2.5 second loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader message="Loading Home, please wait..." />;

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className='' style={{ marginTop: "5em" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-10'>
              <div className='row'>
                <div className='col-md-6'>
                  <img width="100%" src={Hero2} alt='models' />
                </div>
                <div className='col-md-6'>
                  <i className='text-white'>
                    “ About Asian Subz Matchers(BDSM Matching and Mail Order Bride Services): Life is more of a marathon than a journey and
                    there are so many activities and events that come across our way in life. One life changing event or activity is
                    immersing yourself deep into the alternative and BDSM lifestyle. [...] Contact us today so we can help you achieve your desires of having your own personal Asian girl that you can use however you desire. ”
                    — M.Chee
                  </i>
                </div>
              </div>
            </div>
            <div className='col-md-1'></div>
          </div>
        </div>
      </section>

      {/* Gallery Cards */}
      <section style={{ marginTop: "6em" }}>
        <div className="container">
          <div className="row">
            <div className='col-md-1'></div>
            <div className="col-md-10">
              <div className="row">
                {/* Card 1 */}
                <div className="col-md-4">
                  <div className="card shadow-sm">
                    <img
                      width="100%"
                      src={Gal2}
                      className="card-img-top"
                      alt="gals"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h2 className="card-title text-white">Obedient girl ready for use</h2>
                      <p className="card-text">
                        You would be pleased with any girl you get from us. You
                        can use her domestically and sexually as you please.
                      </p>
                      <a href="/" className="btn btn-primary">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                  <div className="card shadow-sm">
                    <img
                      width="100%"
                      src={Gal1}
                      className="card-img-top"
                      alt="gals"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h2 className="card-title text-white">
                        You can also select a nationality you desire
                      </h2>
                      <p className="card-text">
                        Use your girl however you desire. Explore all your
                        fantasies. Get a girl today.
                      </p>
                      <a href="/" className="btn btn-primary">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                  <div className="card shadow-sm">
                    <img
                      width="100%"
                      src={Gal3}
                      className="card-img-top"
                      alt="gals"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h2 className="card-title text-white">
                        Beautiful and submissive girls
                      </h2>
                      <p className="card-text">
                        Our girls have all given their consent and are ready to
                        play and more. Join our large family of satisfied clients
                        today.
                      </p>
                      <a href="/" className="btn btn-primary">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-1'></div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='actionsBg' style={{ marginTop: "6em" }}>
        <div className="container">
          <div
            className="row  d-flex justify-content-center align-items-center text-center"
            style={{ minHeight: "100vh" }}
          >
            <div className='col-md-3'></div>
            <div className='col-md-6'>
              <p style={{ color: "white", marginTop: "4em" }}>
                We always advise clients looking for a submissive play partner or a mail
                order bride not to waste their time on social sites and other platforms.
                We will do the dirty work for you and put a lasting smile on your face.
                We are one click away.
              </p>
              <a className="btn btn-primary btn-outline" href="/contact">Contact Us</a>
            </div>
            <div className='col-md-3'></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
