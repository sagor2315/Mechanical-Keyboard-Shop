import HeadingTitle from "../../reusable-components/HeadingTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

/* 

Q: What are mechanical keyboards?
A: Mechanical keyboards use individual switches for each key, offering tactile feedback and durability.

Q: Why are mechanical keyboards better?
A: They provide better typing feel, customization options, and longevity compared to membrane keyboards.

Q: What are the different types of switches?
A: Common types include Cherry MX, Gateron, and Kailh, each offering unique tactile and sound profiles.

Q: Can I customize my mechanical keyboard?
A: Yes, you can customize keycaps, switches, and even the case and layout.

Q: Are mechanical keyboards loud?
A: Some switches are loud, like clicky switches, but others, like linear or silent switches, are quieter.

Q: Do mechanical keyboards improve typing speed?
A: Many users find that mechanical keyboards improve typing speed and accuracy due to better tactile feedback.

*/

const FaqSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-5 px-4 py-5">
      <div className="py-5">
        <HeadingTitle>{"FAQ"}</HeadingTitle>
        <h2 className="md:text-xl text-lg font-semibold text-text">
          Want to Know More About Us? We Are Waiting to Help You.
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What are mechanical keyboards?</AccordionTrigger>
            <AccordionContent>
              Mechanical keyboards use individual switches for each key,
              offering tactile feedback and durability.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Why are mechanical keyboards better?
            </AccordionTrigger>
            <AccordionContent>
              They provide better typing feel, customization options, and
              longevity compared to membrane keyboards.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Why are we the best choice for mechanical keyboards, and why
              should you buy from us?
            </AccordionTrigger>
            <AccordionContent>
              We offer a curated selection of high-quality mechanical keyboards,
              expert advice, and exceptional customer service. Shop with us for
              competitive prices, fast shipping, and a satisfaction guarantee.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Can I customize my mechanical keyboard?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can customize keycaps, switches, and even the case and
              layout.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Do mechanical keyboards improve typing speed?
            </AccordionTrigger>
            <AccordionContent>
              Many users find that mechanical keyboards improve typing speed and
              accuracy due to better tactile feedback.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              What are the different types of switches?
            </AccordionTrigger>
            <AccordionContent>
              Common types include Cherry MX, Gateron, and Kailh, each offering
              unique tactile and sound profiles.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqSection;
