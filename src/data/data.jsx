import HeaderBasketIcon from "../assets/icon/HeaderBasketIcon";
import HeaderComparatorIcon from "../assets/icon/HeaderComparatorIcon";
import HeaderFooterHomeIcon from "../assets/icon/HeaderFooterHomeIcon";
import HeaderHEartIcon from "../assets/icon/HeaderHEartIcon";
import HeaderPersonIcon from "../assets/icon/HeaderPersonIcon";
import { fridgeImg, Iphone17Pro, phoneImg, smartTVImg } from "./cartImages";

export const headerfooter =[
    {
        id: 1,
        path:"/",
        icon: <HeaderFooterHomeIcon/>,
        title: "Bosh sahifa"
    },
    {
        id: 2,
        path:"/product-item",
        icon: <HeaderComparatorIcon />,
        title: "Bosh sahifa"
    },
    {
        id: 3,
        path:"/favourite",
        icon: <HeaderHEartIcon />,
        title: "Bosh sahifa"
    },
    {
        id: 4,
        path:"/cart",
        icon: <HeaderBasketIcon />,
        title: "Bosh sahifa"
    },
    {
        id: 5,
        path:"/",
        icon: <HeaderPersonIcon />,
        title: "Bosh sahifa"
    },
]

export const headermenuleft = [
    {
        id: 1,
        title: "Smartfonlar va telefonlar"
    },
    {
        id: 2,
        title: "TV, audio va video"
    },
    {
        id: 3,
        title: "Maishiy texnika"
    },
    {
        id: 4,
        title: "Go'zallik va so'glik"
    },
    {
        id: 5,
        title: "Noutbuklar va kompyuterlar"
    },
    {
        id: 6,
        title: "Gadjetlar va aksessuarlar"
    },
    {
        id: 7,
        title: "Avto zona"
    },
    {
        id: 8,
        title: "Ta'mirlash uchun asboblar"
    },
    {
        id: 9,
        title: "Bolalar uchun tovarlar"
    },
    {
        id: 10,
        title: "Video kuzatuv tizimlari"
    },
    {
        id: 11,
        title: "Ofis va uy uchun mebel"
    },
    {
        id: 12,
        title: "Oshxona jixozlari"
    },
]

export const cartItemData = [
  {
    img: fridgeImg,
    price: 5999000,
    name: "Sovutgich Indesit ITS 4200 NG UZ",
    model: "ITS 4200 NG UZ",
    code: 11071,
    count: 1,
  },
  {
    img: phoneImg,
    price: 5499000,
    name: "Honor 400 8/256 Desert Gold",
    model: "Honor 400 8/256 Desert Gold",
    code: 11357,
    count: 1,
  },
  {
    img: smartTVImg,
    price: 1399000,
    name: "KÖNNEN 32KN100HS televizori",
    model: "32KN100HS",
    code: 10808,
    count: 1,
  },
  {
    img: Iphone17Pro,
    price: 20199000,
    name: "Смартфон iPhone 17 Pro 256GB Deep Blue",
    model: "IPHONE 17 Pro 256GB Deep Blue",
    code: 11749,
    count: 1,
  },
];
