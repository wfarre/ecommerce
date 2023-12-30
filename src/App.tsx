import "./App.css";
import CartIcon from "./assets/images/icon-cart.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import iconMinue from "./assets/images/icon-minus.svg";
import Navbar from "./components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import Modal from "./components/Modal/Modal";
import type { Item } from "./libs/types";
import Carousel from "./components/Carousel/Carousel";
import { CartContext } from "./libs/context";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const { cart, addItem } = useContext(CartContext);

  const item: Item = {
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

  const handleThumbClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const addToCart = () => {
    if (quantity > 0) {
      addItem(item, quantity);
    }
    setQuantity(0);
  };

  return (
    <>
      <div className="menu-background"></div>
      <Navbar cart={cart} />
      <Modal
        modalIsOpened={modalIsOpened}
        images={item.images}
        currentImageIndex={currentImageIndex}
        handleCloseModal={() => setModalIsOpened(false)}
        handleThumbClick={(key) => handleThumbClick(key)}
        setCurrentImageIndex={(index) => setCurrentImageIndex(index)}
      />
      <main>
        <section className="section">
          <div className="container">
            <Carousel
              images={item.images}
              currentImageIndex={currentImageIndex}
              handleThumbClick={(key) => handleThumbClick(key)}
              setModalIsOpened={() => setModalIsOpened(true)}
            />

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
      </main>

      <Footer />
    </>
  );
};

export default App;
