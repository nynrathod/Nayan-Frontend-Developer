
import React, { Fragment, useState } from "react";
import axios from "axios";

import { motion } from "framer-motion";

import Layout from "../components/Layout";
import { Link } from "react-router-dom";

import Checkbox from "./Checkbox";
import ProductList from "./ProductList";
import { Dialog, Transition } from "@headlessui/react";
import { store } from '../store/store'
import { useDispatch, useSelector } from "react-redux";

import { modalOpen } from "../actions/global";

const baseURL = "http://localhost/spacex/server/";


export default function Home() {

    const state = useSelector(state => state)
    const dispatch = useDispatch();

    const modalStatus = useSelector((state: any) => state.global.modalOpen)
    // console.log(modalStatus)

    const productId = useSelector((state: any) => state.global.modalOpen.id)

    function closeModal() {
        dispatch(
            modalOpen(false)
        )
    }



    const [dataList, setDataList] = useState([]);

    const [productData, setProductData] = useState({
        products: dataList,
    })

    const [productStatus, setProductStatus] = useState({
        status: {
            active: false,
            retired: false
        }
    })

    const [productType, setProductType] = useState({
        type: {
            RTLS: false,
            ASDS: false
        }
    })

    const [productRegion, setProductRegion] = useState({
        region: {
            Florida: false,
            California: false
        }
    })



    // console.log(productData)

    React.useLayoutEffect(() => {
        axios.get(`${baseURL}/page.php`).then((response) => {
            const data = response.data;
            setDataList(data);
            setProductData({ products: data });
        });
    }, []);

    function handleChange(e: any, prevState: any) {
        const { name } = e.target;
        setProductType(prevState => {
            return {
                type: {
                    ...prevState.type,
                    [name]: e.target.checked
                }
            };
        });

        setProductStatus(prevState => {
            return {
                status: {
                    ...prevState.status,
                    [name]: e.target.checked
                }
            };
        });

        setProductRegion(prevState => {
            return {
                region: {
                    ...prevState.region,
                    [name]: e.target.checked
                }
            };
        });



    };


    const checkedProducts =
        Object.entries(productStatus.status)
            .filter(status => status[1])
            .map(status => status[0]).concat(
                Object.entries(productType.type)
                    .filter(type => type[1])
                    .map(type => type[0])).concat(
                        Object.entries(productRegion.region)
                            .filter(region => region[1])
                            .map(region => region[0]));

    const filteredProducts =
        productData.products.filter(({ status }) =>
            checkedProducts.includes(status)).concat(
                productData.products.filter(({ type }) =>
                    checkedProducts.includes(type))).concat(
                        productData.products.filter(({ region }) =>
                            checkedProducts.includes(region)));


    const unique = (value: any, index: any, self: string | any[]) => {
        return self.indexOf(value) === index
    }

    const uniqueAges = filteredProducts.filter(unique)

    const [uniqueModal, setUniqueModal] = useState([]);
    React.useEffect(() => {
        setUniqueModal(uniqueAges);
    }, []);
    // console.log(modalStatus)


    const [itemData, setItemData] = React.useState({
        image: "",
        name: "",
        full_name: "",
        status: "",
        type: "",
        locality: "",
        region: "",
        latitude: "",
        longitude: "",
        landing_attempts: "",
        landing_successes: "",
        wikipedia: "",
        details: "",
        launches: "",
    })


    React.useEffect(() => {
        if (modalStatus.status === true) {

            dataList.filter(function (element) {
                if (element['id'] === productId) {
                    setItemData({
                        image: element['images']['large'],
                        name: element['name'],
                        full_name: element['full_name'],
                        status: element['status'],
                        type: element['type'],
                        locality: element['locality'],
                        region: element['region'],
                        latitude: element['latitude'],
                        longitude: element['longitude'],
                        landing_attempts: element['landing_attempts'],
                        landing_successes: element['landing_successes'],
                        wikipedia: element['wikipedia'],
                        details: element['details'],
                        launches: element['launches'],

                    });
                }
            });
            console.log(itemData)
        }
    }, [dataList, itemData, modalStatus.status, productId]);


    // console.log(dataList)
    return (
        <>
            <Layout>
                <Transition appear show={modalStatus.status === "" ? false : modalStatus.status === true ? true : false} as={Fragment}>
                    <Dialog as="div" className="relative z-50" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900 flex justify-between"
                                        >
                                            <div>
                                                <p>{itemData.full_name} ({itemData.name})</p>
                                                <p className="text-base">Status: {itemData.status}</p>
                                                <p className="text-base">Type: {itemData.type}</p>
                                                <p className="text-base">Locality: {itemData.locality}</p>
                                            </div>
                                            <img src={itemData.image}
                                                className="w-32"
                                            />

                                        </Dialog.Title>
                                        <div className="mt-4 ">

                                            <p className="text-sm text-gray-500">
                                                {itemData.details}
                                            </p>
                                        </div>

                                        <div className="mt-4">
                                            <p><strong>Other Detail:</strong></p>
                                            <div className="flex justify-start">
                                                <p className="text-base mr-4">latitude: {itemData.latitude}</p>
                                                <p className="text-base">longitude:  {itemData.longitude}</p>

                                            </div>
                                            <div className="flex justify-start">
                                                <p className="text-base mr-4">Landing Attempts: {itemData.landing_attempts}</p>
                                                <p className="text-base">Landing Successes: {itemData.landing_successes} </p>
                                            </div>

                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                <a href="">
                                                    Read More
                                                </a>
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>


                <>
                    {console.log(filteredProducts)}
                </>
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
                                <div className="flex justify-between">
                                    <div>
                                        <h5>Filter by Status</h5>
                                        <div className="flex justify-end">
                                            <Checkbox
                                                id="1"
                                                title="Active"
                                                name="active"
                                                handleChange={handleChange}
                                            />
                                            <Checkbox
                                                id="2"
                                                title="Retired"
                                                name="retired"
                                                handleChange={handleChange}

                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h5>Filter by Type</h5>
                                        <div className="flex justify-end">
                                            <Checkbox
                                                id="3"
                                                title="RTLS"
                                                name="RTLS"
                                                handleChange={handleChange}
                                            />
                                            <Checkbox
                                                id="4"
                                                title="ASDS"
                                                name="ASDS"
                                                handleChange={handleChange}

                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h5>Filter by Region</h5>
                                        <div className="flex justify-end">
                                            <Checkbox
                                                id="5"
                                                title="California"
                                                name="California"
                                                handleChange={handleChange}
                                            />
                                            <Checkbox
                                                id="6"
                                                title="Florida"
                                                name="Florida"
                                                handleChange={handleChange}

                                            />
                                        </div>
                                    </div>
                                </div>


                                <ProductList
                                    products={
                                        uniqueAges.length === 0
                                            ? productData.products
                                            : uniqueAges
                                    }
                                />

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