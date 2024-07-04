import { sanityFetch } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import AddToCartBtn from "@/components/AddToCartBtn";
import Link from "next/link";
import {
  Bike,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
} from "lucide-react";
const PRODUCT_QUERY = `*[_type == "product" && name == "Yamaha R15" && !(_id in path("drafts.*"))] {
  _id, 
  name, 
  description, 
  price, 
  price_id, 
  images[]{asset -> {url}}, 
  "slug": slug.current,
  categories[]-> {_id, name}
}

`;

const ProductDetails = async () => {
  try {
    const bike = await sanityFetch({ query: PRODUCT_QUERY });

    console.log("Fetched products:", bike);

    // Filter out null products
    const validProducts = bike.filter((bike) => bike !== null);
    validProducts.forEach((bike) => {
      console.log("Product categories:", bike.name);
    });

    return (
      <section className="pt-24 pb-32">
        {validProducts.map((bike) => (
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-14">
              {/* img */}
              <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
                <Image
                  src={urlForImage(bike.images[0])}
                  width={473}
                  height={290}
                  priority
                  alt=""
                />
              </div>
              <div className="flex-1 flex flex-col justify-center items-start gap-10">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <ChevronLeft size={20} />
                  Back
                </Link>
                <div className="flex flex-col gap-6 items-start">
                  <div>
                    <h3>{bike.name}</h3>
                    <p className="text-lg font-semibold">${bike.price}</p>
                  </div>
                  <p>{bike.description}</p>
                  <AddToCartBtn
                    text="Add to cart"
                    btnStyles="btn btn-accent"
                    price_id={bike.price_id}
                    name={bike.name}
                    currency="USD"
                    description={bike.description}
                    images={bike.images}
                    price={bike.price}
                  />
                </div>
                {/* info */}
                <div className=" flex flex-col gap-3">
                  <div className="flex gap-2">
                    <PackageCheck size={20} className="text-accent" />
                    <p>Free shipping on orders over $130</p>
                  </div>
                  <div className="flex gap-2">
                    <RefreshCw size={20} className="text-accent" />
                    <p>Free return for 30 days</p>
                  </div>
                  <div className="flex gap-2">
                    <Bike size={20} className="text-accent" />
                    <p>
                      The bicycles are partially assembled and benefit from
                      transport insurance
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <PackageCheck size={20} className="text-accent" />
                    <p>Fast delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return <div>Failed to load products</div>;
  }
};

export default ProductDetails;
