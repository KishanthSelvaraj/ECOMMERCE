"use client";

import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from "react-icons/cg";
import AddToCartBtn from "./AddToCartBtn";

const Bike = ({ bike }) => {
    // console.log(bike);
  const popularBikeCat = bike.categories?.find(
    (category) => category.name === "popular"
  );

  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
          {/* badge */}
          {/* {popularBikeCat && ( */}
          <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
            Popular
          </div>
          {/* )} */}
          {/* {bike.images?.[0] && ( */}
            <Image
              src={urlForImage(bike.images[0])}
              width={240}
              height={147}
              alt=""
            />
          {/* )} */}
        </div>
        {/* btn group */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddToCartBtn
            price_id={bike.price_id}
            name={bike.name}
            currency="INR"
            description={bike.description}
            images={bike.images}
            price={bike.price}
            btnStyles="btn-icon btn-accent"
            icon={<CgShoppingBag />}
          />
          <Link href={`/product/${bike.slug}`}>
            <button className="btn-icon  btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      {bike.category?.[0] && (
        <h5 className="text-gray-400 font-semibold mb-2">
          {bike.category[0].name} bike
        </h5>
      )}
      <h4 className="mb-1">{bike.name}</h4>
      <div className="text-lg font-bold text-accent">${bike.price}</div>
    </div>
  );
};

export default Bike;
