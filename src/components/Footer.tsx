import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

function Footer() {
  return (
    <div className="w-screen flex flex-col items-start justify-start pt-4 bg-cream2 relative font-space mix-blend-screen ">
      <div className="w-full text-center text-black overflow-hidden h-full">
        <div className="text-xl sm:text-2xl md:text-3xl flex flex-row items-center justify-between px-8 p-3 font-bold w-full bg-black text-cream py-5 shadow-lg">

          <div className="text-left md:flex flex-row gap-2 text-[13px] hidden md:w-0 md:flex-grow">
            <a href="/term-and-condition" className="hover:underline"> TERMS & CONDITIONS </a>
            *
            <a href="/shipping-policy" className="hover:underline"> SHIPPING POLICY </a>
            *
            <a href="/cancellation-policy" className="hover:underline"> CANCELLATION POLICY </a>
          </div>

          <h1 className="text-cream text-center font-space font-bold md:w-0 md:flex-grow">
            &copy; MAGNUS
          </h1>

          <div className="flex  flex-row items-center justify-end md:w-0 md:flex-grow">
            <a href="https://www.instagram.com/magnus.cit/">
              <IconBrandInstagram
                className="cursor-pointer text-cream p-3 rounded-full"
                size={44}
              />
            </a>
            <a href="http://github.com/magnuscit/">
              <IconBrandGithub
                className="cursor-pointer text-cream p-3 rounded-full"
                size={44}
              />
            </a>
            <a href="https://www.linkedin.com/in/magnus-cit-7158a2287/?originalsubdomain=in">
              <IconBrandLinkedin
                className="cursor-pointer text-cream p-3 rounded-full"
                size={44}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
