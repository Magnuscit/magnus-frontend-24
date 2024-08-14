import NavBar from "../NavBar";

const Main = () => {
  return (
    <main className="relative min-h-screen w-full bg-black z-0">
      <NavBar />

      <section className="relative min-h-screen w-full flex flex-col items-center justify-center">
        <div className="absolute right-0 left-0 mx-auto -top-20 bg-orange-400 w-96 h-96 blur-[170px] rounded-full -z-10"></div>
        <div className="h-full w-2/3 absolute graph-paper -z-10" />
        <h1 className="text-[150px] text-white font-black">MAGNUS</h1>
        <button className="text-xl border text-white px-3 py-1 rounded-sm border-white">
          Explore
        </button>
      </section>

      <section className="min-h-screen w-full flex items-center justify-center px-32">
        <div className="flex flex-col w-full h-full">
          <h1 className="text-white font-semibold text-5xl">About Us</h1>
          <p className="text-white text-base">
            Magnus is the technical symposium of the department of
            CSE(Artificial Intelligence and Machine Learning) at Chennai
            Institute of Technology which was founded in 2023. With over a
            footfall of 500 in its first year, it is an event that celebrates
            the achievements in the field of AI along with Machine Learning. At
            Magnus, participants get to immerse themselves in various activities
            such as workshops on AI and Open-Source platforms, non-technical
            events like Weeb Trivia and Film Fusion along with technical events
            like paper and project presentations, motivating them to think
            outside the box and incorporate AI in real life.
          </p>
        </div>
        <div className="h-full w-full bg-white"></div>
      </section>

      <section className="min-h-screen w-full bg-purple-900 flex flex-col items-center justify-center p-24">
        <h1 className="text-white font-bold text-7xl">Events</h1>
        <div className="py-10 w-full bg-red-800 flex items-center justify-center gap-x-4">
          <section className="h-64 w-56 bg-white"> </section>
          <section className="h-64 w-56 bg-white"> </section>
        </div>
      </section>
    </main>
  );
};

export default Main;
