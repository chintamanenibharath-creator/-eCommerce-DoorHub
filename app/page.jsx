// pages/index.js



import CategoryCard from "./components/CategoryCard";
import CosmeticsSaleBanner from "./components/CosmeticsSaleBanner";
import FeaturesSection from "./components/FeaturesSection";
// import NewArrivals from "./components/NewArrivals";



export default function Home() {
  return (
    <main className="mt-5 bg-gray-200 flex flex-col items-center justify-center gap-10 p-6">
      {/* Banner */}
      <CosmeticsSaleBanner />

      {/* Category Cards Row */}
      <div className="flex flex-wrap justify-center gap-6">
       <CategoryCard/>
      </div>
  
   
      {/* <NewArrivals /> */}
      <FeaturesSection/>
    </main>
  );
}
