import React, { useRef } from "react";
import PercentIcon from "../assets/icon/PercentIcon";
import LocationIcon from "../assets/icon/LocationIcon";
import NumberIcon from "../assets/icon/NumberIcon";
import HeaderImg from "/img/headerImg.png";
import HeaderLogoIcon from "../assets/icon/HeaderLogoIcon";
import HeaderButtonIcon from "../assets/icon/HeaderButtonIcon";
import HeaderSearchIcon from "../assets/icon/HeaderSearchIcon";
import HeaderHEartIcon from "../assets/icon/HeaderHEartIcon";
import HeaderBasketIcon from "../assets/icon/HeaderBasketIcon";
import HeaderComparatorIcon from "../assets/icon/HeaderComparatorIcon";
import HeaderPersonIcon from "../assets/icon/HeaderPersonIcon";
import { Link } from "react-router";
import HeaderFLexLogo from "../assets/icon/HeaderFLexLogo";
import HeaderFlexButtonIcon from "../assets/icon/HeaderFlexButtonIcon";
import HeaderFlexSearchIcon from "../assets/icon/HeaderFlexSearchIcon";
import { headerfooter, headermenuleft } from "../data/data";
import HeaderMenuRightIcon from "../assets/icon/HeaderMenuRightIcon";
import HeaderMewnuCloseIcon from "../assets/icon/HeaderMewnuCloseIcon";

function Header() {
  const MenuButtonRef = useRef(null)
  const MenuRef = useRef(null)
  const MenuCloseRef = useRef(null)
  const MenuIconRef = useRef(null)

  function Menu(){
    MenuButtonRef.current.classList.toggle("active");
    MenuRef.current.classList.toggle("active");
    MenuCloseRef.current.classList.toggle("active");
    MenuIconRef.current.classList.toggle("active");
    
  }

  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__top">
          <div className="container">
            <div className="header__top-wrap">
              <div className="header__top-left">
                <a href="#" className="header__percent">
                  <PercentIcon />
                  <p className="header__percent-title">Aksiya va chegirmalar</p>
                </a>
                <a href="#" className="header__location">
                  <LocationIcon />
                  <p className="header__location">Do'konlar</p>
                </a>
              </div>
              <div className="header__top-right">
                <a href="tel:712307799" className="header__number">
                  <NumberIcon />
                  <p className="header__number-title">71 230 77 99</p>
                </a>
                <div className="header__translate">
                  <div className="header__translate-img">
                    <img src={HeaderImg} alt="Header-Img" />
                  </div>
                  <p className="header__translate-title">O'zbekcha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container">
            <div className="header__bottom-wrap">
              <Link to="/" className="header__bottom-logo">
                <HeaderLogoIcon />
              </Link>
              <button ref={MenuButtonRef} onClick={Menu} className="header__bottom-button">
                <p className="header__bottom-button-title">
                  Mahsulotlar katalogi
                </p>
                <div ref={MenuIconRef} onClick={Menu} className="header__bottom-button-icon">
                  <HeaderButtonIcon />
                </div>
                <button ref={MenuCloseRef} onClick={Menu} className="header__bottom-close-button">
                  <HeaderMewnuCloseIcon/>
                </button>
              </button>
              <div className="header__bottom-input">
                <input
                  className="header__input"
                  type="text"
                  placeholder="Qidiruv"
                />
                <HeaderSearchIcon />
              </div>
              <Link to="/favourite" className="header__bottom-heaart">
                <HeaderHEartIcon />
                <p className="header__bottom-heaart-title">Tanlanganlar</p>
              </Link>
              <Link to="/cart" className="header__bottom-basket">
                <HeaderBasketIcon />
                <p className="header__bottom-basket-title">Savatcha</p>
              </Link>
              <Link to="/product-item" className="header__bottom-comparator">
                <HeaderComparatorIcon />
                <p className="header__bottom-comparator-title">Taqqoslash</p>
              </Link>
              <Link to="#" className="header__bottom-signin">
                <HeaderPersonIcon />
                <p className="header__bottom-signin-title">Kirish</p>
              </Link>
            </div>
            <div className="header-flex">
              <div className="header-flex-wrap">
                <div className="header-flex-logo">
                  <HeaderFLexLogo />
                  <HeaderFlexButtonIcon />
                </div>
                <div className="header-flex-right">
                  <Link to="#" className="header-flex-search-button">
                    <HeaderFlexSearchIcon />
                  </Link>
                  <a href="tel:712307799" className="header-flex-call">
                    <NumberIcon />
                  </a>
                  <div className="header-flex-img">
                    <img src={HeaderImg} alt="Header flex Img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header-footer */}
      <div className="header__footer">
        <div className="container">
          <div className="header__footer-wrap">
            {headerfooter.map((item) => (
              <Link to={item.path} className="header__footer-icon">
                {item.icon}
                <p className="header__footer-icon-title">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div ref={MenuRef} className="header__menu">
        <div className="header__menu-left">
          {headermenuleft.map((item) => (
            <button  className="header__menu-button">
              <p className="header__menu-button-title">{item.title}</p>
              <div className="header__menu-button-icon">
                <HeaderMenuRightIcon />
              </div>
            </button>
          ))}
        </div>
        <div className="header__menu-middle"></div>
        <div className="header__menu-right"></div>
      </div>
    </header>
  );
}

export default Header;
