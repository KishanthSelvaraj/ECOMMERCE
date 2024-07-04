"use client";

import BikeCategories from "@/components/BikeCategories";
import { sanityFetch } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
const getData = async (slug) => {
  const query = `*[_type == 'product']{
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "categories": categories[]->{
      name
    }
  }
  `;
  const data = await sanityFetch({ query: query });
  return data;
};
const OurBikes = async () => {
  const bikes = await getData();
console.log(bikes);
  return (
    <div>
      <BikeCategories bikes={bikes} />
    </div>
  );
};

export default OurBikes;
