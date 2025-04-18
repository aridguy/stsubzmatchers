import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import CreditCard from "../Assets/card.png"
import Footer from '../components/Footer'
import Loader from '../components/Loader' // ✅ Import Loader

const Payment = () => {
  const [delayed, setDelayed] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayed(false)
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (delayed || loading) return <Loader message="Loading Payment Page..." />

  return (
    <div>
      <Navbar />

      {
        <section className='' style={{ marginTop: "6em" }}>
          <div className="container">
            <div className='row'>
              <div className='col-md-6'>
                <h3 className='text-white'>Payment instructions</h3>
                <sup className='text-white'>
                  Payment would have to be received before the process starts. The entire process involves a lot of steps and payment is needed to expedite the process.
                  Payment would be required to cover expenses such as medical screening, visa processing and documentation,
                  insurance and logistics and this is the reason why we need to receive payment so as to provide quality
                  service to our customers. <br /><br />
                  <strong>Payment methods accepted:</strong><br />
                  • Bank wire transfer: This transfer is common and can be done from your bank to our bank for transparency reasons. <br />
                  • Western Union/Moneygram: This transfer is accepted in certain situations where wire transfer cannot be made by client. <br />
                  • Crypto-currency payment (BTC): This form of payment is accepted. This option is for clients who choose to be discreet about their involvement in the lifestyle. It provides anonymity for our clients, especially high-ranking members of industries that need to remain anonymous due to their job specifications. <br /><br />
                  <strong>Note:</strong> Payment needs to be confirmed first before we proceed. Our standard currency for transactions is the USD (US Dollar). All transactions will be converted to the USD equivalent for ease of payment. Payment receipts may need to be attached as proof of payment.
                </sup>
              </div>
              <div className='col-md-6'>
                <img src={CreditCard} alt='credit card symbol' />
              </div>
            </div>
          </div>
          <Footer />
        </section>
      }
    </div>
  )
}

export default Payment
