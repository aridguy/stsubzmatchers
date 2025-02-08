import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Faq = () => {
  return (
    <div>
      <Navbar />

      {
        /* FAQ Section */
        <main style={{ position: "relative", top: "5em" }}>
        <section className="mt-5">
          <div className="container">
         
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
              <h2 className='text-white '>See frequently ask Questions</h2>
                <div className="faq-container">
                  <details className="faq-item">
                    <summary>Where would my girl be delivered to?</summary>
                    <p>
                      Your girl would be delivered to the airport of your choice. You
                      would have to pick her up at the airport or arrange for her to
                      take a cab and join you up.
                    </p>
                  </details>
                  <details className="faq-item">
                    <summary>How long would it take for my girl to get to me after payment?</summary>
                    <p>
                      It would take a maximum of 5 weeks for the girl of your choice
                      to join you depending on your location.
                    </p>
                  </details>
                  <details className="faq-item">
                    <summary>How can I make payments?</summary>
                    <p>
                      We have several options for making payments. You can use a wire
                      transfer from your bank to our bank, Western Union/MoneyGram,
                      Crypto deposits, or local bank transfers. We can tailor payment
                      options that best fit your situation based on your location.
                    </p>
                  </details>
                  <details className="faq-item">
                    <summary>Do I get a discount if I get more than one girl?</summary>
                    <p>
                      Yes, you would get a discount. The discount would be subjective
                      and communicated to you based on your order.
                    </p>
                  </details>
                  <details className="faq-item">
                    <summary>Can I get more than one girl?</summary>
                    <p>
                      Yes, you can get up to a maximum of 5 girls, but we usually
                      advise our clients to go for the number of girls they are sure
                      they can handle properly.
                    </p>
                  </details>
                  <details className="faq-item">
                    <summary>How can I be guaranteed of delivery after payment?</summary>
                    <p>
                      We have been doing this for years and have built a solid
                      reputation for ourselves. You would get exactly what you pay for
                      when using our services. You would be updated every single step
                      of the way.
                    </p>
                  </details>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </section>
      
        {/* Styles */}
        <style jsx>{`
          .faq-item {
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
          }
      
          summary {
            font-weight: bold;
            cursor: pointer;
            padding: 10px 0;
            list-style: none;
          }
      
          summary::marker {
            display: none;
          }
      
          summary:hover {
            color: #007bff;
          }
      
          p {
            margin-top: 10px;
            padding-left: 10px;
          }
        `}</style>
      </main>

      }
      <Footer />
    </div>
  )
}

export default Faq
