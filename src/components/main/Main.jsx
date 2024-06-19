import "./Main.scss";
import tilfon from "./Img/tilfon.svg";
import odam from "./Img/Group (1).png";
import card from "./Img/card_img.png";
import rasim2 from "./Img/rasim2.png";
import rasim13 from "./Img/rasim13.png";
import uyrasim from "./Img/uy rasim.svg/";
import domrasim from "./Img/domi.svg";
import zavod from "./Img/zavod.svg";
import qiz from "./Img/qiz rasimi.png";
import cardt from "./Img/cardtilfon.png";
import filisoz from "./Img/Filisoz.png";
import ayol from "./Img/Ayol.png";
import vector from "./Img/Vectorr.svg";

const Main = () => {
  return (
    <>
      <div className="hero_container">
        <div className="hero_page">
          <div className="hero_right">
            <h1>Quality cleaning for your home</h1>
            <p>
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <div className="hero_but">
              <button>Get a free quote</button>
              <div className="btn_img">
                <img src={tilfon} alt="" />

                <div>
                  <p className="call">Call us now</p>
                  <p className="namberr">(414) 567 - 2109</p>
                </div>
              </div>
            </div>
          </div>
          <div className="her_left">
            <img src={odam} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section_hero">
          <h3>About Us</h3>
          <p>
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            <br />
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
        </div>
        <div className="cardtex">
          <div className="cardlar1">
            <img src={card} alt="" />
            <h3>1. Schedule online</h3>
            <p>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>

          <div className="cardlar1">
            <img src={rasim2} alt="" />
            <h3>2. Pay online easily</h3>
            <p>
              Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
              {/* at nunc. */}
            </p>
          </div>

          <div className="cardlar1">
            <img src={rasim13} alt="" />
            <h3>3. Get your house cleaned</h3>
            <p>
              Nunc maecenas sollicitudin metus tellus mattis sed porttitor
              cursus eleifend.
            </p>
          </div>
        </div>
        <div className="btn_grupa">
          <button>Get a free quote</button>
          <button className="explore">Explore services</button>
        </div>
        <div className="get">
          <h5>Our Services</h5>

          <button>Get a free quote</button>
        </div>
        <div className="geet">
          <div className="itim1">
            <img src={uyrasim} alt="" />
            <h5>House cleaning</h5>
            <p className="lorem">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>

          <div className="itim11">
            <img src={domrasim} alt="" />
            <h5>Office cleaning</h5>
            <p className="lorem">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>

          <div className="itim12">
            <img src={zavod} alt="" />
            <h5>Industrial cleaning</h5>
            <p className="lorem">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
        <div className="cartlayt">
          <img src={qiz} alt="" />
          <div className="foolow">
            <p className="covid">Covid-19 sanitization</p>
            <h6>
              We follow guidelines to keep you safe from the COVID-19 virus
            </h6>
            <p clas>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa <br /> mauris lectus.
            </p>

            <div className="gett">
              <button>Get a free quote</button>
              <div className="btn_img">
                <img src={cardt} alt="" />

                <div className="cal_number">
                  <p className="calli">Call us now</p>
                  <span className="namberr">(414) 567 - 2109</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="btntex">
          <span>Articles & resources</span>
          <div className="free">
            <button>Get a free quote</button>
            <button className="artic">Browse articles</button>
          </div>
        </div>
        <div className="poziy">
          <div className="card_itim_left">
            <img src={filisoz} alt="" />
            <div className="filisoz">
              <span className="besr">
                8 best vacuum cleaners to clean any <br /> mess for your home in
                2022
              </span>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="jan">
                <h6>Jan 28, 2022</h6>
                <div className="ugl"></div>
              </div>
            </div>
          </div>

          <div className="card_itim_left">
            <img src={ayol} alt="" />
            <div className="filisoz">
              <span className="besr">
                How to properly disinfect your phone and other electronics
              </span>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="jan">
                <h6>Feb 1, 2022</h6>
                <div className="ugl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tashqi">
        <div className="container">
          <div className="contact">
            <div className="contackt_left">
              <h3>Contact Us</h3>
              <p>
                In dignissim euismod pretium amet enim a eu nam <br /> ut urna
                accumsan pellentesque lacus duis pharetra eutortor.
              </p>
              <div className="btn_img">
                <img src={vector} alt="" />

                <div>
                  <h6 className="call">Call us now</h6>
                  <h6 className="namberr">(414) 567 - 2109</h6>
                </div>
              </div>
              <div className="hech"></div>
              <span>Not convinced yet?</span>
              <p>
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna <br /> purus diam.
              </p>
              <button>Browse our packages</button>
            </div>
            <div className="contackt_right">
              <div className="input_tyupe">
                <div className="input_right">
                  <div className="input">
                    <p>Full name</p>
                    <input type="text" name="username" />
                  </div>

                  <div className="input">
                    <p>Address</p>
                    <input type="text" name="username" />
                  </div>

                  <div className="input">
                    <p>Requested service</p>
                    <input type="text" name="username" />
                  </div>
                </div>
                <div className="input_left">
                  <div className="input">
                    <p>Phone number</p>
                    <input type="text" name="username" />
                  </div>

                  <div className="input">
                    <p>Email</p>
                    <input type="text" name="username" />
                  </div>

                  <div className="input">
                    <p>Day of service</p>
                    <input type="text" name="username" />
                  </div>
                </div>
              </div>
              <p className="Add">Add a note</p>
              <textarea
                className="texar"
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>
              <button className="Submit">Submit message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
