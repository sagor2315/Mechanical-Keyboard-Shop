import CustomerReviews from "../../components/homepage-components/customer-reviews/customer-reviews";
import FaqSection from "../../components/homepage-components/faq-section/faq-section";
import FeaturedBrands from "../../components/homepage-components/featured-brands/featured-brands";
import FeaturedProducts from "../../components/homepage-components/featured-products/featured-products";
import { HeroSection } from "../../components/homepage-components/hero-section/hero-section";
import KeyboardAccessories from "../../components/homepage-components/keyboard-accessories/keyboard-accessories";
import ServiceAdvertisement from "../../components/homepage-components/service-advertisement/service-advertisement";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <ServiceAdvertisement />
      <FeaturedProducts />
      <FeaturedBrands />
      <CustomerReviews />
      <KeyboardAccessories />
      <FaqSection />
    </div>
  );
};

export default HomePage;
