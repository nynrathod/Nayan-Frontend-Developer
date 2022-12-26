import React from "react";
import { useDispatch } from "react-redux";

import { modalOpen } from "../actions/global";

import { motion } from "framer-motion";
import { LazyMotion, domAnimation, m } from "framer-motion"

const containerss = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};


const ProductList = props => {

    const dispatch = useDispatch();

    const { products } = props;

    function openModal(e) {
        // setIsOpen(true)
        dispatch(
            modalOpen({
                status: true,
                id: e
            })
        )
    }



    const renderProducts = products.map(({ id, images, details, type, status, full_name, region }) => {
        return (
            <>

                <>
                    <motion.div className="container mx-auto" variants={containerss}
                        initial="hidden"
                        animate="visible">
                        <LazyMotion features={domAnimation}>
                            <m.div className="group relative cursor-pointer" onClick={(e) => openModal(id)} animate={{ opacity: 1 }} initial='hidden' >
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src={images.large}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4">
                                    <p className="truncate">{details}</p>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm text-gray-700">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {full_name}
                                        </h3>
                                        <p className="mt-1 text-sm italic text-gray-500">{status}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{type}, {region}</p>
                                </div>
                            </m.div>
                        </LazyMotion>
                    </motion.div>
                </>

            </>
        );
    });

    return <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">{renderProducts}</div>;
};

export default ProductList;
