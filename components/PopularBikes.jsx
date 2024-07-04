"use client";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client"; // Ensure correct import
import PopularBikeCarousel from "./PopularBikeCarousel";

const PRODUCT_QUERY = `*[_type == "product" && !(_id in path("drafts.*"))]{
_id, 
  name, 
  description, 
  price, 
  price_id, 
  images[]{asset -> {url}}, 
   "slug": slug.current,
  category[]-> {_id,name}
}`;

const getData = async () => {
  const data = await sanityFetch({ query: PRODUCT_QUERY });
  return data;
};

const PopularBikes = async () => {
  const bikes = await getData();
  // console.log(bikes)
  return (
    <>
      <section className="py-24">
        <div className="container mx-auto">
          <h2 className="text-center">Most Popular Bikes</h2>
          <p className="text-center mb-[30px]">
            The Worlds Premium Brands In One Destination.
          </p>
          <PopularBikeCarousel bikes={bikes}/>
          <Link href="/our-bikes">
            <button className="btn btn-accent mx-auto">See all bikes</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PopularBikes;
