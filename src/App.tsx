import "./App.css";
import CartIcon from "./assets/images/icon-cart.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import iconMinue from "./assets/images/icon-minus.svg";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [cart, setCart] = useState([]);

  const removeItem = (index: number) => {
    const newArray = cart.filter((item) => cart.indexOf(item) !== index);

    setCart(newArray);
  };

  const item = {
    brand: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    price: 250,
    discount: 0.5,
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    images: [
      {
        image: "./assets/images/image-product-1.jpg",
        thumbnail: "./assets/images/image-product-1-thumbnail.jpg",
      },
      {
        image: "./assets/images/image-product-2.jpg",
        thumbnail: "./assets/images/image-product-2-thumbnail.jpg",
      },
      {
        image: "./assets/images/image-product-3.jpg",
        thumbnail: "./assets/images/image-product-3-thumbnail.jpg",
      },
      {
        image: "./assets/images/image-product-4.jpg",
        thumbnail: "./assets/images/image-product-4-thumbnail.jpg",
      },
    ],
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleThumbClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    console.log(currentImageIndex);
    console.log(modalIsOpened);
    console.log(cart);
  }, [currentImageIndex, modalIsOpened, cart]);

  const addToCart = () => {
    if (quantity > 0) {
      setCart([
        ...cart,
        {
          title: item.title,
          url: item.images[0].thumbnail,
          quantity: quantity,
          price: item.price - item.price * item.discount,
        },
      ]);
    }
  };
  return (
    <>
      <Navbar
        cart={cart}
        handleDeleteItem={(index: number) => removeItem(index)}
      />
      <Modal
        modalIsOpened={modalIsOpened}
        images={item.images}
        currentImageIndex={currentImageIndex}
        handleCloseModal={() => setModalIsOpened(false)}
        handleThumbClick={(key) => handleThumbClick(key)}
        setCurrentImageIndex={(index) => setCurrentImageIndex(index)}
      />

      <section className="section">
        <div className="container">
          <div className="pictures">
            <div
              className="picture-wrapper picture-wrapper--main"
              onClick={() => setModalIsOpened(true)}
            >
              <img src={item.images[currentImageIndex].image} alt="" />
            </div>

            <div className="container">
              {item.images.map((image, key) => {
                console.log(key);

                return (
                  <div
                    key={key}
                    className={
                      key === currentImageIndex
                        ? "current picture-wrapper picture-wrapper--thumb"
                        : "picture-wrapper picture-wrapper--thumb"
                    }
                    id={"thumb" + key}
                    onClick={() => handleThumbClick(key)}
                  >
                    <img src={image.thumbnail} alt="" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="container container--vertical product-info">
            <header className="section__header">
              <h2 className="subtitle">{item.brand}</h2>
              <h1 className="title">{item.title}</h1>
            </header>

            <div className="section__main">
              <p>{item.description}</p>

              <div className="container container--pricing">
                <p className="current-price">
                  ${item.price - item.price * item.discount}
                </p>
                <span className="percentage">{item.discount * 100}%</span>
                <span className="price">${item.price}</span>
              </div>
            </div>

            <footer className="section__footer">
              <div className="container">
                <div className="incrementer">
                  <button
                    className="btn btn--minus"
                    onClick={() => quantity > 0 && setQuantity(quantity - 1)}
                  >
                    <img src={iconMinue} alt="" />
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="btn btn--plus"
                    onClick={() => quantity <= 9 && setQuantity(quantity + 1)}
                  >
                    <img src={iconPlus} alt="" />
                  </button>
                </div>

                <button className="btn btn--add" onClick={addToCart}>
                  <div className="icon-wrapper">
                    <img src={CartIcon} alt="" />
                  </div>
                  Add to cart
                </button>
              </div>
            </footer>
          </div>
        </div>
      </section>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">William Farré</a>.
      </div>
    </>
  );
}

export default App;
