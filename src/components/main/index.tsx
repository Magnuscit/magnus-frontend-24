import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMeta,
  IconBrandX,
} from "@tabler/icons-react";
import NavBar from "../NavBar";
import Link from "next/link";
import TeamCard from "../TeamCard";

const Main = () => {
  return (
    <main className="relative min-h-screen w-full overflow-y-hidden">
      <NavBar />

      <section className="relative h-screen w-full flex flex-col items-center justify-center bg-cream p-4 lg:p-24 lg:max-h-full">
        <div className="absolute top-0 right-0 h-full w-full graph-paper" />

        <div className="text-center xl:hidden">
          <h1 className="text-[140px] font-black text-accent leading-[70px]">MAG</h1>
          <h1 className="text-[140px] font-black text-accent leading-none">NUS</h1>
        </div>

        <h1 className="z-10 text-[65px] lg:text-[200px] text-accent font-black leading-none hidden xl:block lg:self-start">
          MAGNUS.
        </h1>

        <p className="z-10 text-black font-extralight text-xs lg:text-xl pl-1 xl:self-start">
          a national level technical symposiyum
        </p>
      </section>

      <section className="w-full flex flex-col items-center bg-cream justify-center px-8 py-20 xl:p-24 relative overflow-hidden">
        <div className="h-full  font-black text-accent xl:self-end">
          <h1 className="text-[80px] xl:text-[240px] line-clamp-none leading-none">
            <span className="hidden xl:inline xl:text-[300px] text-black">
              &#8641;
            </span>
            ABOUT
          </h1>
        </div>

        <div className="flex flex-col h-full xl:self-start">
          <p className="text-black max-w-4xl font-extralight text-md xl:text-3xl xl:text-left text-center">
            Magnus is the technical symposium of the department of
            CSE(Artificial Intelligence and Machine Learning) at Chennai
            Institute of Technology which was founded in 2023.
          </p>
          <p className="xl:hidden text-black max-w-4xl font-extralight text-md xl:text-3xl xl:text-left text-center">
            Magnus is the technical symposium of the department of
            CSE(Artificial Intelligence and Machine Learning) at Chennai
            Institute of Technology which was founded in 2023.
          </p>
        </div>

        <div className="h-32 w-32 xl:h-96 xl:w-96 rounded-full bg-accent absolute xl:-right-10 xl:-bottom-48  -right-10 -bottom-16" />
      </section>

      <section className="w-full bg-cream flex flex-col items-center justify-center">
        <h1 className="font-bold text-cream bg-accent text-3xl md:text-6xl tracking-[1em] border-t w-full text-center py-5">
          EVENTS
        </h1>
        <section className="w-full md:h-[500px] flex flex-col md:flex-row">
          <div className="w-full flex items-center justify-center border-r border-b border-black bg-cream h-[300px] md:h-[500px]">
            Sports
          </div>
          <div className="w-full flex items-center justify-center border-r border-b border-black bg-cream h-[300px] md:h-[500px]">
            Technical
          </div>
          <div className="w-full flex items-center justify-center border-r border-b border-black bg-cream h-[300px] md:h-[500px]">
            Non-Technical
          </div>
        </section>
      </section>

      <section className="w-full bg-cream py-24 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-accent text-[50px] lg:text-[100px] leading-[20px] lg:leading-[10px] font-black">
            MEET THE
          </h1>
          <h1 className="text-accent text-[80px] lg:text-[250px] leading-none font-black">
            TEAM
          </h1>
        </div>

        <section className="gap-y-8 w-full h-full grid grid-cols-2 grid-rows-2 place-items-center max-w-2xl pt-10">
          <TeamCard name="Krishna Kumar" title="President" />
          <TeamCard name="I Don;t Know" title="Vice President" />
          <TeamCard name="Rahul M Navneeth" title="Secretary" />
          <TeamCard name="I Don;t Know" title="Joint Secretary" />
        </section>
      </section>

      <section className="relative flex flex-col items-center justify-end h-96 w-full bg-accent overflow-hidden">
        <section className="flex items-center justify-center h-full py-10 px-24 z-20 bgteal-200 w-full">
          <div className="self-center">
            <h1 className="text-cream text-5xl font-glb font-bold">Magnus</h1>
            <div className="flex space-x-1 pt-5 text-lpurple">
              <IconBrandX
                className="cursor-pointer text-cream bg-accent hover:bg-[#fba483] p-3 rounded-full"
                size={44}
              />
              <IconBrandGithub
                className="cursor-pointer text-cream bg-accent hover:bg-[#fba483] p-3 rounded-full"
                size={44}
              />
              <IconBrandLinkedin
                className="cursor-pointer text-cream bg-accent hover:bg-[#fba483] p-3 rounded-full"
                size={44}
              />
              <IconBrandMeta
                className="cursor-pointer text-cream bg-accent hover:bg-[#fba483] p-3 rounded-full"
                size={44}
              />
            </div>
          </div>

          <div className="text-cream w-full h-full justify-end gap-x-10 text-sm lg:flex hidden">
            <div className="flex flex-col">
              <h1 className=" text-2xl font-bold ">Events</h1>
              <Link href="#">Technical</Link>
              <Link href="#">Non-Technical</Link>
              <Link href="#">Sports</Link>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">Legal Terms</h1>
              <Link href="#">Terms and Conditions</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Cookie Policy</Link>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-end h-20 w-full bg-black bg-opacity-10 p-8">
          <h1 className=" text-cream opacity-100 z-10">
            &copy; | Magnus All Rights Reserved
          </h1>
        </div>
        <h1 className="absolute -bottom-24 leading-none text-white opacity-10 font-black text-[350px]">
          MAGNUS
        </h1>
      </section>
    </main>
  );
};

export default Main;
