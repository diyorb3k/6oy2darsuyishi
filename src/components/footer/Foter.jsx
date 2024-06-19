import "./Foter.scss";
import turt from "../header/img/Frame.svg";

const Foter = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="foter1">
            <h6>Quality cleaning for your home</h6>
            <p>
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <img src={turt} alt="" />
          </div>
          <div className="foter2">
            <span className="contac">Contact us</span>
            <p>
              1827 Nickel Road, Los Angeles, <br /> CA, 90017, United States
            </p>
            <p>(414) 567 - 2109</p>
            <p>contact@cleaning.com</p>
          </div>
          <div className="foter3">
            <p>Hours</p>
            <h4>Monday to Friday</h4>
            <a href="">6:00 AM - 9:00 PM</a>
            <h6>Saturday & Sunday</h6>
            <a href="">8:00 AM - 8:00 PM</a>
          </div>
          <div className="foter4">
            <span>Get a free estimate</span>
            <p>(414) 567 - 2109</p>
            <h6>
              Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
              eiusmod.
            </h6>

            <button>Request a free quote</button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
export default Foter;
