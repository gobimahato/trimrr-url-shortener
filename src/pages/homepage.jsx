import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 text-center text-3xl font-extrabold text-black/90 dark:text-white sm:my-16 sm:text-6xl lg:text-7xl">
        The Only URL Shortener <br /> You&apos;ll Ever Need! 👇
      </h2>

      <form
        onSubmit={handleShorten}
        className="flex w-full flex-col gap-2 sm:h-14 sm:flex-row md:w-2/4"
      >
        <Input
          type="url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter your long URL here..."
          className="px-4 py-6"
        />
        <Button type="submit" className="px-4 py-6">
          Shorten!
        </Button>
      </form>

      <img src="/banner.jpeg" alt="banner" className="my-10 w-full md:px-10" />

      <Accordion
        type="multiple"
        collapsible={"true".toString()}
        className="w-full md:px-10"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-bold md:text-xl">
            How does the Trimrr URL shortener work?
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg">
            When you enter a long URL, our system generates a shorter version of
            that URL. This shortened URL redirects to the original long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-bold md:text-xl">
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg">
            Yes. Creating an account allows you to manage your URLs, view
            analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-bold md:text-xl">
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg">
            You can view the number of clicks, geolocation data of the clicks
            and device types (mobile/desktop) for each of your shortened URLs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Homepage;
