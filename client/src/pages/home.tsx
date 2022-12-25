
import React, { useState } from "react";

import Layout from "../components/Layout";
import { Link } from "react-router-dom";

import Checkbox from "./Checkbox";
import ProductList from "./ProductList";


const dataList = {
    "dataList": [
        {
            "id": 1,
            "title": "Product 1",
            "category": "first"
        },
        {
            "id": 2,
            "title": "Product 2",
            "category": "second"
        },
        {
            "id": 3,
            "title": "Product 3",
            "category": "first"
        },
        {
            "id": 4,
            "title": "Product 4",
            "category": "second"
        }
    ]
}

export default function Home() {

    const [productData, setProductData] = useState({
        products: dataList.dataList,
        categories: {
            first: false,
            second: false
        }
    })

    function handleChange(e: any, prevState: any) {
        const { name } = e.target;
        setProductData(prevState => {
            return {
                products: dataList.dataList,
                categories: {
                    ...prevState.categories,
                    [name]: e.target.checked
                }
            };
        });
    };

    const checkedProducts = Object.entries(productData.categories)
        .filter(category => category[1])
        .map(category => category[0]);
    const filteredProducts = productData.products.filter(({ category }) =>
        checkedProducts.includes(category)
    );

    return (
        <>
            <Layout>
                {/* <Checkbox
                    id="1"
                    title="show first category products"
                    name="first"
                    checked={productData.categories.first}
                    handleChange={handleChange}
                />
                <Checkbox
                    id="2"
                    title="show second categor productsy"
                    name="second"
                    handleChange={handleChange}
                    checked={productData.categories.second}
                />
                <ProductList
                    products={
                        filteredProducts.length === 0
                            ? productData.products
                            : filteredProducts
                    }
                /> */}
                <section className="text-gray-600 body-font">
                    <div className="max-w-7xl mx-auto lg:flex px-5 py-[120px] content-center items-center home-banner">
                        <div className="lg:w-3/6  md:ml-24 flex flex-col md:items-start lg:text-left items-center text-center">
                            <h1 className="mb-5 sm:text-6xl font-bold text-5xl items-center Avenir lg:w-3/4 xl:w-2/2 text-gray-900">
                                What is Lorem Ipsum?
                            </h1>
                            <p className="mb-4 lg:w-2/2 text-gray-600 text-lg lg:text-left text-center">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <div className="flex justify-center sm:m-auto md:ml-0">
                                <Link to="#"
                                    className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out border rounded-lg bg-gray-800 hover:bg-gray-900"
                                >
                                    <span className="justify-center">Find out more</span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-2/4 mb-0 lg:mb-0 md:pl-10 m-auto">
                            <img
                                className="md:ml-1 ml-24"
                                src="/images/rocket-banner.png"
                            />
                        </div>
                    </div>
                    <section className="mx-auto">
                        <div className="container mx-auto">
                            <div className="mx-auto max-w-2xl py-16 sm:py-24 sm:px-6 lg:max-w-7xl">
                                <h3 className="mb-8 text-2xl text-center font-semibold text-black">Customers also purchased</h3>
                                <div className="flex justify-end">
                                    <button type="button" className="flex items-center cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                        <input id="vue-checkbox" type="checkbox" value="" className="w-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 ml-3" />
                                        <label htmlFor="vue-checkbox" className=" ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 px-5 pl-0 py-2.5">Vue JS</label>
                                    </button>
                                </div>

                                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                    <div className="group relative">
                                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                            <img
                                                src="/images/rocket-banner.png"
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a href="#">
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        product name
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">red</p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">blue</p>
                                        </div>
                                    </div>
                                    <div className="group relative">
                                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                            <img
                                                src="/images/rocket-banner.png"
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a href="#">
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        product name
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">red</p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">blue</p>
                                        </div>
                                    </div>
                                    <div className="group relative">
                                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                            <img
                                                src="/images/rocket-banner.png"
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a href="#">
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        product name
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">red</p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">blue</p>
                                        </div>
                                    </div>
                                    <div className="group relative">
                                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                            <img
                                                src="/images/rocket-banner.png"
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a href="#">
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        product name
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">red</p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">blue</p>
                                        </div>
                                    </div>

                                </div>
                            </div>



                            <div className="flex flex-col w-full mb-4 text-left lg:text-center">
                                <h3 className="mb-8 text-2xl Avenir font-semibold text-black">
                                    Trusted by top-tier product companies
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4 lg:px-36">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="/images/Google-Logo.webp"
                                        alt="Google Logo"
                                        className="block object-contain h-16 greyC"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        src="/images/Shopify-Logo.svg"
                                        alt="Shopify Logo"
                                        className="block object-contain h-16 greyC"
                                    />
                                    {/* </div> */}
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        src="/images/Cloudflare-Logo.svg"
                                        alt="Cloudflare Logo"
                                        className="block object-contain h-16 greyC"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        src="/images/PayPal-Logo.png"
                                        alt="Paypal Logo"
                                        className="block object-contain h-16 greyC"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="grr max-w-7xl pt-20 mx-auto text-center">
                        <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
                            Less code, less effort.
                        </h1>
                        <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
                            Minify your CSS with Tailwinds built in PostCSS support.
                        </h1>
                        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg">
                            <img
                                className="w-4/6 md:ml-1 ml-24 border"
                                src="/images/placeholder.png"
                            />
                        </div>
                    </div>
                    <section className="relative">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                            <div className="py-24 md:py-36">
                                <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
                                    Subscribe to our newsletter
                                </h1>
                                <h1 className="mb-9 text-2xl font-semibold text-gray-600">
                                    Enter your email address and get our newsletters straight away.
                                </h1>
                                <input
                                    placeholder="jack@example.com"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
                                />
                                <Link to="/"
                                    className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white ease-in-out border rounded-lg bg-gray-800 hover:bg-gray-900"
                                >
                                    <span className="justify-center">Subscribe</span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </section>
            </Layout>
        </>
    )
}