import Image from "next/image";
import PopularBikes from "../components/PopularBikes";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div>
      <Hero />
      <PopularBikes />
    </div>
  );
}
