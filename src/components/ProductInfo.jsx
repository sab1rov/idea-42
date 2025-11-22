import React from "react";
import LikeIcon from "../assets/icons/LikeIcon";
import ScalesIcon from "../assets/icons/ScalesIcon";
import ProductImgOne from "/images/honor-400-img-one.png";
import ProdictImgTwo from "/images/honor-400-img-two.png";
import ProdictImgThree from "/images/honor-400-img-three.png";
import ProductImgImgOne from "/images/product-img-img-one.png";
import ProductImgImgTwo from "/images/product-img-img-two.png";
import ProductImgImgThree from "/images/product-img-img-three.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router";

function ProductInfo() {
  return (
    <section className="product__info">
      <div className="container">
        <div className="product__info-wrap">
          <h2 className="product__info-title">Honor 400 8/256 Desert Gold</h2>
          <div className="product__info-icons">
            <Link to={"/favourite"} className="product__info-icon">
              <LikeIcon /> Tanlaganlarda
            </Link>
            <Link to={"#"} className="product__info-icon">
              <ScalesIcon /> Taqqoslash
            </Link>
          </div>
          <div className="product__info-cards">
            <div className="product__info-card">
              <div className="product__info-left-card">
                <div className="product__info-card-img">
                  <img src={ProductImgOne} alt="product-image" />
                </div>
                <div className="product__info-card-img">
                  <img src={ProdictImgTwo} alt="product-image" />
                </div>
                <div className="product__info-card-img">
                  <img src={ProdictImgThree} alt="product-image" />
                </div>
              </div>
              <div className="product__info-img-wrap">
                <div className="product__info-images">
                  <img src={ProductImgOne} alt="product-image" />
                </div>
                <div className="product-info-img-img">
                  <img src={ProductImgImgOne} alt="product-image" />
                  <img src={ProductImgImgTwo} alt="product-image" />
                  <img src={ProductImgImgThree} alt="product-image" />
                </div>
              </div>
            </div>
            <div className="product__info-card-container">
              <p className="product__info-titlee">Mahsulot haqida qisqacha</p>
              <p className="product__info-titleee">
                Brend: <span>Honor</span>
              </p>
              <div className="product__info-card-content">
                <div className="product__info-content">
                  <p className="product__info-subtitle">
                    Displey diagonali, dyuym
                  </p>
                  <p className="product__info-subtitle">6,7</p>
                </div>
                <div className="product__info-content">
                  <p className="product__info-subtitle">Protsessor</p>
                  <p className="product__info-subtitle">
                    Qualcomm Snapdragon 7 Gen 3
                  </p>
                </div>
                <div className="product__info-content">
                  <p className="product__info-subtitle">
                    Operativ xotira (RAM), GB
                  </p>
                  <p className="product__info-subtitle">8</p>
                </div>
                <div className="product__info-content">
                  <p className="product__info-subtitle">
                    O'rnatilgan xotira (ROM), GB
                  </p>
                  <p className="product__info-subtitle">256</p>
                </div>
                <div className="product__info-content">
                  <p className="product__info-subtitle">Asosiy kamera MP</p>
                  <p className="product__info-subtitle">50</p>
                </div>
                <div className="product__info-content">
                  <p className="product__info-subtitle">SKU</p>
                  <p className="product__info-subtitle">11357</p>
                </div>
                <p className="product__info-text">Barcha xususiyatlar</p>
              </div>
            </div>
            <div className="product__info-card-right">
              <div className="product__info-card-right-content">
                <p className="product__info-card-text">Mahsulot narxi</p>
                <p className="product__info-card-right-price">5 499 000 soʻm</p>
                <div className="product__info-card-right-buttons">
                  <button className="product__info-card-right-button">
                    To'liq to'lov
                  </button>
                </div>
                <div className="product__info-card-right-buttons">
                  <Link to={"/cart"} className="product__info-card-right-buttonn">
                    Savatga qo'shildi
                  </Link>
                </div>
                <div className="product__info-card-right-buttons">
                  <button className="product__info-card-right-button">
                    Sotib olish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__info-card-bottom">
          <div className="product__info-card-wrap">
            <h2 className="product__info-card-title">
              Mahsulot haqida
            </h2>
            <h2 className="product__info-card-title-two">
              Xususiyatlari
            </h2>
          </div>
          <a className="product__info-card-text">
              Ko'prok korsatish
            </a>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
