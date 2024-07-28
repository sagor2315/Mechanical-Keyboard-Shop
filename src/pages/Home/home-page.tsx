import FeaturedProducts from "../../components/homepage-components/featured-products/featured-products";
import { HeroSection } from "../../components/homepage-components/hero-section/hero-section";
import ServiceAdvertisement from "../../components/homepage-components/service-advertisement/service-advertisement";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <HeroSection />
      <ServiceAdvertisement />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
