import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { createClient } from 'contentful';
import Swal from 'sweetalert2';
import Loader from '../components/Loader';

// Initialize Contentful Client
const clientModels = createClient({
  space: 'nuqhfe659p4v',
  accessToken: 'LlIuZIxV8nvxSiXCxLnVLcmCNWv-lO0dAXgpyYLAkts',
});

const Gallery = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true); // Manage loading state

  // Fetch Contentful data
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await clientModels.getEntries({
          content_type: 'models', // Specify the content type
        });
        setModels(entries.items);
        console.log(entries.items);

      } catch (error) {
        console.error('Error fetching Contentful data:', error);
      } finally {
        setLoading(false); // Loading complete
      }
    };

    getAllEntries();
  }, []);

  // Carousel responsive settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // Optional, default to 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // Optional, default to 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // Optional, default to 1
    },
  };

  const [delayed, setDelayed] = useState(true); // Delay flag

  // Simulate 2.5s initial loading delay
  useEffect(() => {
    const timer = setTimeout(() => setDelayed(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  if (delayed || loading) return <Loader message="Loading gallery, please wait..." />;


  return (
    <main>
   
      <div>
        <Navbar />

        <section className="mt-4">
          <div className="container">
            <div className="row">
              <h1 className="galHead text-white text-center">See Our Gallery</h1>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <div className="container">
            <div className="row">
              <h1 className="galHead text-white text-center">Our Models</h1>
            </div>
            <div className="row justify-content-center">
              <div className='col-md-1'></div>
              <div className="col-md-10">
                {loading ? (
                  <p className="text-white text-center">Loading models, please wait while we load the gurls...</p>
                ) : models.length > 0 ? (
                  <Carousel
                    swipeable
                    draggable
                    showDots
                    responsive={responsive}
                    ssr // Server-side rendering
                    infinite
                    autoPlay
                    autoPlaySpeed={3000}
                    keyBoardControl
                    customTransition="all .5"
                    transitionDuration={500}
                    containerclassName="carousel-container"
                    removeArrowOnDeviceType={['tablet', 'mobile']}
                    dotListclassName="custom-dot-list-style"
                    itemclassName="carousel-item-padding-40-px"
                  >
                    {models.map((item) => (
                      <div
                        key={item.sys.id}
                        className="card  card-spacing"
                        style={{ marginBottom: "20px", width: "17em", height: "30em", background: "#000000", display: "flex", gap: "4" }} // Add spacing between cards
                      >
                        <div className="prac-card ">
                          <img
                            width="305px"
                            height="350em"
                            className="prac-image "
                            loading='lazy'

                            src={
                              item?.fields?.modelImage?.fields?.file?.url ||
                              "https://via.placeholder.com/150"
                            }
                            alt={item?.fields?.modelCode || "Default Model"}
                          />
                          <div style={{ padding: "1em", color: "white" }} className="mt-2">
                            <small className="text-black lead fw-bold text-uppercase">
                              Model Code: {item?.fields?.modelCode || "N/A"}
                            </small>
                            <br />
                            <small>Age: {item?.fields?.modelAge || "Unknown"}</small>
                            <br />
                            <small>Height: {item?.fields?.modelHeight || "N/A"} cm</small>
                            <br />
                            <div className="d-flex justify-content-between align-items-center mt-2">
                              <button
                                className="text-white fw-bold"
                                style={{
                                  border: "none",
                                  background: "#228b22",
                                  padding: "0.7em 1em",
                                  borderRadius: "7px",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  Swal.fire({
                                    title: `<h3 style="color: #fff;">${item?.fields?.modelCode || "N/A"}</h3>`,
                                    html: `
                  <div style="text-align: center;">
                    <img
                      src="${item?.fields?.modelImage?.fields?.file?.url ||
                                      "https://via.placeholder.com/150"}"
                      alt="${item?.fields?.modelCode || "Default Model"}"
                      style="width: 80%; height: auto; margin-bottom: 15px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);"
                    />
                    <p style="color: #ccc; font-size: 16px; line-height: 1.5; margin-top: 10px;">
                      <strong>Model Code:</strong> ${item?.fields?.modelCode || "N/A"}<br/>
                      <strong>Age:</strong> ${item?.fields?.modelAge || "Unknown"}<br/>
                      <strong>Height:</strong> ${item?.fields?.modelHeight || "N/A"} cm<br/>
                      <strong>Weight:</strong> ${item?.fields?.modelWeight || "N/A"} kg<br/>
                      <strong>Breast Cup Size:</strong> ${item?.fields?.modelBreastCupSize || "N/A"}<br/>
                      <strong>Nationality:</strong> ${item?.fields?.modelNationality || "N/A"}<br/>
                    </p>
                  </div>
                `,
                                    background: "#222", // Dark background for the modal
                                    color: "#fff", // Text color
                                    confirmButtonColor: "#228b22", // Green confirm button
                                    confirmButtonText: "Close",
                                    customClass: {
                                      popup: "swal2-popup-custom", // Add a custom class if needed
                                    },
                                    width: "500px", // Adjust the modal width
                                    padding: "20px", // Padding around the content
                                    showCloseButton: true, // Add a close button at the top-right
                                  })
                                }
                              >
                                Check Model Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                ) : (
                  <p className="text-white text-center">
                    No models found in the gallery.
                  </p>
                )}
              </div>
              <div className='col-md-1'></div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Gallery;
