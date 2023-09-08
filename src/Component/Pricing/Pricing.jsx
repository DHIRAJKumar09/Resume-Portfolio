import React from 'react'
import "./pricing.css";
import Image1 from "../../assets/price-1.svg";
import Image2 from "../../assets/price-2.svg";
import Image3 from "../../assets/price-3.svg";

const Pricing = () => {
  return (
    <section className="pricing container section">
        <h2 className="section_title">Pricing</h2>

        <div className="pricing_container grid">
            <div className="pricing_items">
                <img src={Image1} alt="" className="pricing_img" />
                <h3 className="pricing_plan">Basic</h3>
                <p className="pricing_title">A Simple option but powerful to manage your business .</p>
                <p className="pricing_support"></p>
                <h3 className="price">
                    <em>$</em>9 <span>Months</span>
                </h3>
                <a href="" className="btn">Get Started</a>

            </div>


            <div className="pricing_items">
                <span className="badge">Recommended</span>
                <img src={Image2} alt="" className="pricing_img" />
                <h3 className="pricing_plan"></h3>
                <p className="pricing_title"></p>
                <p className="pricing_support"></p>
                <h3 className="price">
                    <em>$</em>9 <span>Months</span>
                </h3>
                <a href="" className="btn">Get Started</a>

            </div>



            <div className="pricing_items">
                <img src={Image3} alt="" className="pricing_img" />
                <h3 className="pricing_plan"></h3>
                <p className="pricing_title"></p>
                <p className="pricing_support"></p>
                <h3 className="price">
                    <em>$</em>9 <span>Months</span>
                </h3>
                <a href="" className="btn">Get Started</a>

            </div>
        </div>
    </section>
  )
}
export default Pricing