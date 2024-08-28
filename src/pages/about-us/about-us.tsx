import { Card, CardContent } from "../../components/ui/card";
import aboutus_img from "../../img/aboutus-img.jpg";

const AboutUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 pt-2 pb-7 bg-background min-h-[calc(100vh-200px)]">
      <div className="relative">
        <img src={aboutus_img} alt="" />
        <h3 className="absolute bg-black bg-opacity-30 inset-0 flex justify-center lg:pt-5 md:pt-3 pt-1 lg:text-5xl md:text-3xl font-bold text-white">
          About Us
        </h3>
      </div>

      <Card x-chunk="dashboard-07-chunk-0" className="rounded-none">
        <CardContent>
          <div className="lg:pt-10 md:pt-8 pt-6">
            <h2 className="lg:text-2xl text-2xl font-bold md:pb-5 pb-3">
              About KeyLand
            </h2>
          </div>
          <div>
            <p>
              Welcome to KeyLand - Your Ultimate Destination for Mechanical
              Keyboards
            </p>
            <p className="pt-2">
              At KeyLand, we believe that a keyboard is more than just a
              tool—it's an extension of your personality, a gateway to
              creativity, and a crucial part of your daily life. Whether you're
              a gamer, a coder, a writer, or simply someone who values the
              tactile satisfaction of a well-crafted keyboard, KeyLand is here
              to cater to all your typing needs.
            </p>
            <h2 className="lg:text-2xl text-2xl font-bold lg:pt-10 md:pt-8 pt-6 md:pb-5 pb-3">
              Who We Are
            </h2>
            <p className="p">
              KeyLand was founded by a team of passionate keyboard enthusiasts
              who understand the value of quality and performance. Our mission
              is to bring the best mechanical keyboards to users around the
              world, offering a curated selection that suits every style and
              preference. From sleek and minimalist designs to vibrant and
              customizable RGB setups, we offer something for everyone.
            </p>
          </div>

          <div className="lg:pt-10 md:pt-8 pt-6">
            <h3 className="lg:text-2xl text-2xl font-bold md:pb-5 pb-3 ">
              What We Offer
            </h3>
          </div>
          <div className="">
            <div>
              <p>
                At KeyLand, we offer a wide range of mechanical keyboards, each
                handpicked for its superior build quality, innovative features,
                and aesthetic appeal. Our collection includes:
              </p>
              <li className="pt-2">
                Specialty Keyboards: Explore our range of specialty keyboards,
                featuring unique layouts, vintage designs, and rare key switch
                options.
              </li>
            </div>

            <div>
              <li className="pt-2">
                Gaming Keyboards: Built for speed and precision, our gaming
                keyboards come with customizable keys, RGB lighting, and macro
                capabilities to give you the edge in any game.
              </li>
              <li className="pt-2">
                Ergonomic Keyboards: Designed for comfort and efficiency, our
                ergonomic keyboards reduce strain and help you maintain peak
                productivity during long typing sessions.
              </li>
            </div>

            <div>
              <li className="pt-2">
                Customizable Keyboards: Unleash your creativity with our custom
                keyboard options. Choose your switches, keycaps, and layouts to
                build a keyboard that is uniquely yours.
              </li>
              <li className="pt-2">
                Compact Keyboards: Perfect for those who prefer a minimalist
                setup, our compact keyboards offer all the functionality you
                need in a space-saving design.
              </li>
            </div>
          </div>
          <p className="pt-3">
            Thank you for choosing KeyLand. We look forward to helping you find
            the keyboard of your dreams! This text reflects the passion,
            commitment, and quality that KeyLand stands for, while also giving
            potential customers a clear understanding of what the brand offers.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;
