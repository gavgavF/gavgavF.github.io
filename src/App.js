import logo from './logo.svg';
import './App.css';
import './css/tooplate-wave-cafe.css';


function App() {
  function handleClick() {
    console.log(123);
  }
  return (
    <>
      <div className="tm-container">
        <div className="tm-row">
          {/* Site Header */}
          <div className="tm-left">
            <div className="tm-left-inner">
              <div className="tm-site-header">
                <i className="fas fa-coffee fa-3x tm-site-logo" />
                <h1 className="tm-site-name">cocoa-cafe</h1>
              </div>
              <nav className="tm-site-nav">
                <ul className="tm-site-nav-ul">
                  <li className="tm-page-nav-item">
                    <a href="#drink" className="tm-page-link active">
                      <i className="fas fa-mug-hot tm-page-link-icon" />
                      <span>Drink Menu</span>
                    </a>
                  </li>
                  <li className="tm-page-nav-item">
                    <a href="#about" className="tm-page-link">
                      <i className="fas fa-users tm-page-link-icon" />
                      <span>About Us</span>
                    </a>
                  </li>
                  <li className="tm-page-nav-item">
                    <a href="#special" className="tm-page-link">
                      <i className="fas fa-glass-martini tm-page-link-icon" />
                      <span>Special Items</span>
                    </a>
                  </li>
                  <li className="tm-page-nav-item">
                    <a href="#contact" className="tm-page-link">
                      <i className="fas fa-comments tm-page-link-icon" />
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="tm-right">
            <main className="tm-main">
              <div id="drink" className="tm-page-content">
                {/* Drink Menu Page */}
                <nav className="tm-black-bg tm-drinks-nav">
                  <ul>
                    <li>
                      <a href="#" className="tm-tab-link active" data-id="cold">
                        Iced Coffee
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tm-tab-link" data-id="hot">
                        Hot Coffee
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tm-tab-link" data-id="juice">
                        Fruit Juice
                      </a>
                    </li>
                  </ul>
                </nav>
                <div id="cold" className="tm-tab-content">
                  <div className="tm-list">
                    <div className="tm-list-item">
                      <img
                        src="img/iced-americano.png"
                        alt="Image"
                        className="tm-list-item-img"
                      />
                      <div className="tm-black-bg tm-list-item-text">
                        <h3 className="tm-list-item-name">
                          Iced Americano
                          <span className="tm-list-item-price">$10.25</span>
                        </h3>
                        <p className="tm-list-item-description">
                          Here is a short description for the first item. Wave Cafe
                          Template is provided by Tooplate.
                        </p>
                      </div>
                    </div>
                    <div className="tm-list-item">
                      <img
                        src="img/iced-cappuccino.png"
                        alt="Image"
                        className="tm-list-item-img"
                      />
                      <div className="tm-black-bg tm-list-item-text">
                        <h3 className="tm-list-item-name">
                          Iced Cappuccino
                          <span className="tm-list-item-price">$12.50</span>
                        </h3>
                        <p className="tm-list-item-description">
                          Here is a list of 4 items or add more. You can use this
                          template for commercial purposes.
                        </p>
                      </div>
                    </div>
                    <div className="tm-list-item">
                      <img
                        src="img/iced-espresso.png"
                        alt="Image"
                        className="tm-list-item-img"
                      />
                      <div className="tm-black-bg tm-list-item-text">
                        <h3 className="tm-list-item-name">
                          Iced Espresso
                          <span className="tm-list-item-price">$14.25</span>
                        </h3>
                        <p className="tm-list-item-description">
                          You are not permitted to redistribute this template ZIP
                          file on any other template websites.
                        </p>
                      </div>
                    </div>
                    <div className="tm-list-item">
                      <img
                        src="img/iced-latte.png"
                        alt="Image"
                        className="tm-list-item-img"
                      />
                      <div className="tm-black-bg tm-list-item-text">
                        <h3 className="tm-list-item-name">
                          Iced Latte
                          <span className="tm-list-item-price">$11.50</span>
                        </h3>
                        <p className="tm-list-item-description">
                          Contents are organized into 3 tabs. Please{" "}
                          <a
                            href="https://www.tooplate.com/contact"
                            rel="nofollow"
                            target="_parent"
                          >
                            contact Tooplate
                          </a>{" "}
                          if you have anything to ask.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="hot" className="tm-tab-content">
                  <div className="tm-list">
                    <div className="tm-list-item">
                      <img
                        src="img/hot-americano.png"
                        alt="Image"
                        className="tm-list-item-img"
                      />
                      <div className="tm-black-bg tm-list-item-text">
                        <h3 className="tm-list-item-name">
                          Hot Americano
                          <span className="tm-list-item-price">$8.50</span>
                        </h3>
                        <p className="tm-list-item-description">
                          Here is a short description for the item along with a
                          squared thumbnail.
                        </p>
                      </div>
                    </div>
                    <div className="tm-list-item">
                      <img
                        src="img/hot-cappuccino.png"
                        alt="Image"
                        className="tm-list-item-img"
                      />
                      <div className="tm-black-bg tm-list-item-text">
                        <h3 className="tm-list-item-name">
                          Hot Cappuccino
                          <span className="tm-list-item-price">$9.50</span>
                        </h3>
                        <p className="tm-list-item-description">
                          Here is a list of 4 items that can add more as you need.
                          Only content area will be scrolling.
                        </p>
                      </div>
                    </div>
                    <div className="tm-list-item">
                      <img
                        src="img/hot-espresso.png"
                        alt="Image"
                        className="tm-list-item-img"
                      />
                      <div className="tm-black-bg tm-list-item-text">
                        <h3 className="tm-list-item-name">
                          Hot Espresso
                          <span className="tm-list-item-price">$7.50</span>
                        </h3>
                        <p className="tm-list-item-description">
                          Left side logo and main menu are fixed. The video
                          background is fixed.
                        </p>
                      </div>
                    </div>
                    <div className="tm-list-item">
                      <img
                        src="img/hot-latte.png"
                        alt="Image"
                        className="tm-list-item-img"
                      />
                      <div className="tm-black-bg tm-list-item-text">
                        <h3 className="tm-list-item-name">
                          Hot Latte<span className="tm-list-item-price">$6.50</span>
                        </h3>
                        <p className="tm-list-item-description">
                          Page contents are organized into 3 tabs to show different
                          lists of items.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="juice" className="tm-tab-content">
                  <div className="tm-list">
                    <div className="tm-list-item">
                      <img
                        src="img/smoothie-1.png"
                        alt="Image"
                        className="tm-list-item-img"
                      />
                      <div className="tm-black-bg tm-list-item-text">
                        <h3 className="tm-list-item-name">
                          Strawberry Smoothie
                          <span className="tm-list-item-price">$12.50</span>
                        </h3>
                        <p className="tm-list-item-description">
                          Here is a short description for the item along with a
                          squared thumbnail.
                        </p>
                      </div>
                    </div>
                    <div className="tm-list-item">
                      <img
                        src="img/smoothie-2.png"
                        alt="Image"
                        className="tm-list-item-img"
                      />
                      <div className="tm-black-bg tm-list-item-text">
                        <h3 className="tm-list-item-name">
                          Red Berry Smoothie
                          <span className="tm-list-item-price">$14.50</span>
                        </h3>
                        <p className="tm-list-item-description">
                          Here is a list of 4 items or add more. You can use this
                          template for commercial purposes.
                        </p>
                      </div>
                    </div>
                    <div className="tm-list-item">
                      <img
                        src="img/smoothie-3.png"
                        alt="Image"
                        className="tm-list-item-img"
                      />
                      <div className="tm-black-bg tm-list-item-text">
                        <h3 className="tm-list-item-name">
                          Pineapple Smoothie
                          <span className="tm-list-item-price">$16.50</span>
                        </h3>
                        <p className="tm-list-item-description">
                          Left side logo and main menu are fixed. The video
                          background is fixed.
                        </p>
                      </div>
                    </div>
                    <div className="tm-list-item">
                      <img
                        src="img/smoothie-4.png"
                        alt="Image"
                        className="tm-list-item-img"
                      />
                      <div className="tm-black-bg tm-list-item-text">
                        <h3 className="tm-list-item-name">
                          Spinach Smoothie
                          <span className="tm-list-item-price">$18.50</span>
                        </h3>
                        <p className="tm-list-item-description">
                          You are not allowed to redistribute the template ZIP file
                          on other template sites.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end Drink Menu Page */}
              </div>
              {/* About Us Page */}
              <div id="about" className="tm-page-content">
                <div className="tm-black-bg tm-mb-20 tm-about-box-1">
                  <h2 className="tm-text-primary tm-about-header">
                    About Wave Cafe
                  </h2>
                  <div className="tm-list-item tm-list-item-2">
                    <img
                      src="/img/about-1.png"
                      alt="Image"
                      className="tm-list-item-img tm-list-item-img-big"
                    />
                    <div className="tm-list-item-text-2">
                      <p>
                        Wave Cafe is a one-page video background HTML CSS template
                        from Tooplate. You can use this for your business websites.
                      </p>
                      <p>
                        You can also use this for your client websites which you get
                        paid for your website services. Please tell your friends
                        about us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tm-black-bg tm-mb-20 tm-about-box-2">
                  <div className="tm-list-item tm-list-item-2">
                    <div className="tm-list-item-text-2">
                      <h2 className="tm-text-primary">How we began</h2>
                      <p>
                        If you wish to support us, please contact Tooplate. Thank
                        you. Duis bibendum erat nec ipsum consectetur sodales.
                      </p>
                    </div>
                    <img
                      src="img/about-2.png"
                      alt="Image"
                      className="tm-list-item-img tm-list-item-img-big tm-img-right"
                    />
                  </div>
                  <p>
                    Donec non urna elit. Quisque ut magna in dui mattis iaculis eu
                    finibus metus. Suspendisse vel mi a lacus finibus vehicula vel
                    ut diam. Nam pellentesque, mi quis ullamcorper.
                  </p>
                </div>
              </div>
              {/* end About Us Page */}
              {/* Special Items Page */}
              <div id="special" className="tm-page-content">
                <div className="tm-special-items">
                  <div className="tm-black-bg tm-special-item">
                    <img src="img/special-01.jpg" alt="Image" />
                    <div className="tm-special-item-description">
                      <h2 className="tm-text-primary tm-special-item-title">
                        Special One
                      </h2>
                      <p className="tm-special-item-text">
                        Here is a short text description for the first special item.
                        You are not allowed to redistribute this template ZIP file.
                      </p>
                    </div>
                  </div>
                  <div className="tm-black-bg tm-special-item">
                    <img src="img/special-02.jpg" alt="Image" />
                    <div className="tm-special-item-description">
                      <h2 className="tm-text-primary tm-special-item-title">
                        Second Item
                      </h2>
                      <p className="tm-special-item-text">
                        You are allowed to download, modify and use this template
                        for your commercial or non-commercial websites.
                      </p>
                    </div>
                  </div>
                  <div className="tm-black-bg tm-special-item">
                    <img src="img/special-03.jpg" alt="Image" />
                    <div className="tm-special-item-description">
                      <h2 className="tm-text-primary tm-special-item-title">
                        Third Special Item
                      </h2>
                      <p className="tm-special-item-text">
                        Pellentesque in ultrices mi, quis mollis nulla. Quisque sed
                        commodo est, quis tincidunt nunc.
                      </p>
                    </div>
                  </div>
                  <div className="tm-black-bg tm-special-item">
                    <img src="img/special-04.jpg" alt="Image" />
                    <div className="tm-special-item-description">
                      <h2 className="tm-text-primary tm-special-item-title">
                        Special Item Fourth
                      </h2>
                      <p className="tm-special-item-text">
                        Vivamus finibus nulla sed metus sagittis, sed ultrices magna
                        aliquam. Mauris fermentum.
                      </p>
                    </div>
                  </div>
                  <div className="tm-black-bg tm-special-item">
                    <img src="img/special-05.jpg" alt="Image" />
                    <div className="tm-special-item-description">
                      <h2 className="tm-text-primary tm-special-item-title">
                        Sixth Sense
                      </h2>
                      <p className="tm-special-item-text">
                        Here is a short text description for sixth item. This text
                        is four lines.
                      </p>
                    </div>
                  </div>
                  <div className="tm-black-bg tm-special-item">
                    <img src="img/special-06.jpg" alt="Image" />
                    <div className="tm-special-item-description">
                      <h2 className="tm-text-primary tm-special-item-title">
                        Seventh Item
                      </h2>
                      <p className="tm-special-item-text">
                        Curabitur eget erat sit amet sapien aliquet vulputate quis
                        sed arcu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end Special Items Page */}
              {/* Contact Page */}
              <div id="contact" className="tm-page-content">
                <div className="tm-black-bg tm-contact-text-container">
                  <h2 className="tm-text-primary">Contact Wave</h2>
                  <p>
                    Wave Cafe Template has a video background. You can use this
                    layout for your websites. Please contact Tooplate's Facebook
                    page. Tell your friends about our website.
                  </p>
                </div>
                <div className="tm-black-bg tm-contact-form-container tm-align-right">
                  <form action="" method="POST" id="contact-form">
                    <div className="tm-form-group">
                      <input
                        type="text"
                        name="name"
                        className="tm-form-control"
                        placeholder="Name"
                        required=""
                      />
                    </div>
                    <div className="tm-form-group">
                      <input
                        type="email"
                        name="email"
                        className="tm-form-control"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div className="tm-form-group tm-mb-30">
                      <textarea
                        rows={6}
                        name="message"
                        className="tm-form-control"
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="tm-btn-primary tm-align-right"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* end Contact Page */}
            </main>
          </div>
        </div>
        <footer className="tm-site-footer">
          <p className="tm-black-bg tm-footer-text">
            Copyright 2020 Wave Cafe | Design:{" "}
            <a
              href="https://www.tooplate.com"
              className="tm-footer-link"
              rel="sponsored"
              target="_parent"
            >
              Tooplate
            </a>
          </p>
        </footer>
      </div>
      {/* Background video */}
      <div className="tm-video-wrapper">
        <i id="tm-video-control-button" className="fas fa-pause" />
        <video autoPlay="" muted="" loop="" id="tm-video">
          <source src="video/wave-cafe-video-bg.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default App;
