import NavBar from "../NavBar";

const Main = () => {
  return (
    <main className="relative min-h-screen w-full">
      <NavBar />

      <section className="relative min-h-screen w-full flex flex-col  justify-center bg-cream p-24">
        <div className="absolute top-0 right-0 h-screen w-full graph-paper" />
        <h1 className="z-10 text-[200px] text-accent font-black leading-none">
          MAGNUS.
        </h1>
        <p className="z-10 text-black font-bold text-xl">
          a national level technical symposiyum
        </p>
      </section>

      <section className="w-full flex flex-col items-center bg-cream justify-center p-24 relative overflow-hidden">
        <div className="h-full  font-black text-accent self-end">
          <h1 className="text-[240px] line-clamp-none leading-none">
            <span className="text-[300px] text-black">&#8641;</span>ABOUT
          </h1>
        </div>

        <div className="flex flex-col h-full self-start">
          <p className="text-black max-w-4xl font-bold text-3xl textcenter">
            Magnus is the technical symposium of the department of
            CSE(Artificial Intelligence and Machine Learning) at Chennai
            Institute of Technology which was founded in 2023.
          </p>
        </div>

        <div className="h-96 w-96 rounded-full bg-accent absolute -right-10 -bottom-48" />
      </section>

      <section className="w-full bg-cream flex flex-col items-center justify-center">
        <h1 className="font-bold text-cream bg-accent text-6xl tracking-[1em] border-t w-full text-center py-5">
          EVENTS
        </h1>
        <section className="w-full h-[500px] flex">
          <div className="w-full flex items-center justify-center border-r border-black bg-cream">
            Sports
          </div>
          <div className="w-full flex items-center justify-center border-r border-black bg-cream">
            Technical
          </div>
          <div className="w-full flex items-center justify-center border-r border-black bg-cream">
            Non-Technical
          </div>
        </section>
      </section>
    </main>
  );
};

export default Main;
