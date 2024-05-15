import logo from './logo.svg';
import './App.css';
import './css/tooplate-wave-cafe.css';
import { useState } from 'react';

let coffee = [
  {
    src: "img/iced-americano.png",
    title: "Iced Americano",
    description: "Many people choose iced Americano for its taste - refreshing, sour and bitter.",
    price: "$3.25",
    tags: [
      "iced"
    ],
  },
  {
    src: "img/iced-cappuccino.png",
    title: "Iced Cappuccino",
    description: "An Italian coffee drink made from espresso. It has a mild taste with a slight coffee bitterness.",
    price: "$4.50",
    tags: [
      "iced"
    ],
  },
  {
    src: "img/iced-espresso.png",
    title: "Iced Espresso",
    description: "This is a great opportunity to experiment by adding different ingredients from our range to the basic recipe.",
    price: "$4.25",
    tags: [
      "iced"
    ],
  },
  {
    src: "img/iced-latte.png",
    title: "Iced Latte",
    description: "The classic drink is made from espresso and milk. The ingredients are taken in a 1:3 ratio, and a small amount of foam is added on top.",
    price: "$3.50",
    tags: [
      "iced"
    ],
  },
  {
    src: "img/hot-americano.png",
    title: "Hot Americano",
    description: "Here is a short description for the item along with a squared thumbnail.",
    price: "$4.50",
    tags: [
      "hot"
    ],
  },
  {
    src: "img/hot-cappuccino.png",
    title: "Hot Cappuccino",
    description: "Here is a list of 4 items that can add more as you need. Only content area will be scrolling.",
    price: "$4.50",
    tags: [
      "hot"
    ],
  },
  {
    src: "img/hot-espresso.png",
    title: "Hot Espresso",
    description: "Left side logo and main menu are fixed. The video background is fixed.",
    price: "$3.50",
    tags: [
      "hot"
    ],
  },
  {
    src: "img/hot-latte.png",
    title: "Hot Latte",
    description: "Page contents are organized into 3 tabs to show different lists of items.",
    price: "$2.50",
    tags: [
      "hot"
    ],
  },
  {
    src: "img/smoothie-1.png",
    title: "Strawberry Smoothie",
    description: "Here is a short description for the item along with a squared thumbnail.",
    price: "$5.50",
    tags: [
      "fruit"
    ],
  },
  {
    src: "img/smoothie-2.png",
    title: "Red Berry Smoothie",
    description: "Here is a list of 4 items or add more. You can use this template for commercial purposes.",
    price: "$6.50",
    tags: [
      "fruit"
    ],
  },
  {
    src: "img/smoothie-3.png",
    title: "Pineapple Smoothie",
    description: "Left side logo and main menu are fixed. The video background is fixed.",
    price: "$6.50",
    tags: [
      "fruit"
    ],
  },
  {
    src: "img/smoothie-4.png",
    title: "Spinach Smoothie",
    description: "You are not allowed to redistribute the template ZIP file on other template sites.",
    price: "$7.50",
    tags: [
      "fruit"
    ],
  },
]



function App() {

  const [tag, setTag] = useState("iced", "hot", "fruit");

  function filterCoffee(e) {
    setTag(e.target.dataset.tag);
  }
  let coffeeJsx = []
  coffee.forEach((coff, i) => {
    if (coff.tags.includes(tag)) {
      coffeeJsx.push(<CoffeeItem key={i} coffee={coff} />);
    }
  });


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
                      <span>Меню</span>
                    </a>
                  </li>
                  <li className="tm-page-nav-item">
                    <a href="#about" className="tm-page-link">
                      <i className="fas fa-users tm-page-link-icon" />
                      <span>О нас</span>
                    </a>
                  </li>
                  <li className="tm-page-nav-item">
                    <a href="#special" className="tm-page-link">
                      <i className="fas fa-glass-martini tm-page-link-icon" />
                      <span>Акции</span>
                    </a>
                  </li>
                  <li className="tm-page-nav-item">
                    <a href="#contact" className="tm-page-link">
                      <i className="fas fa-comments tm-page-link-icon" />
                      <span>Контакты</span>
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
                      <a href="#" className="tm-tab-link active" data-id="iced" data-tag="iced" onClick={filterCoffee}>
                        Iced Coffee
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tm-tab-link" data-id="hot" data-tag="hot" onClick={filterCoffee}>
                        Hot Coffee
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tm-tab-link" data-id="fruit" data-tag="fruit" onClick={filterCoffee}>
                        Fruit Juice
                      </a>
                    </li>
                  </ul>
                </nav>
                <div id="cold" className="tm-tab-content">
                  <div className="tm-list">
                    {coffeeJsx}
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
      </div>
      {/* Background video */}
      <div className="tm-video-wrapper">
          <img src="/img/img_100.jpg"></img>

      </div>
    </>
  );
}

function CoffeeItem({ coffee }) {
  return (
    <div className="tm-list-item">
      <img
        src={coffee.src}
        alt="Image"
        className="tm-list-item-img"
      />
      <div className="tm-black-bg tm-list-item-text">
        <h3 className="tm-list-item-name">
          {coffee.title}
          <span className="tm-list-item-price">{coffee.price}</span>
        </h3>
        <p className="tm-list-item-description">
          {coffee.description}
        </p>
      </div>
    </div>
  );
} 


export default App;
