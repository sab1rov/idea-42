import { CartPage, FavouritePage, HomePage, NotFoundPage, ProductItem } from "../pages";

export const routes = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/cart",
        element: <CartPage />
    },
    {
        path: "/favourite",
        element: <FavouritePage />
    },
    {
        path: "/product-item",
        element: <ProductItem />
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]