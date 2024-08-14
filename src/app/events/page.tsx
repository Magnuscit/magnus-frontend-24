import EventsCardComponent from "@/components/events/EventsCardComponent";
import NavBar from "@/components/NavBar";

export default function Events() {
  return (
    <div>
      <div className="relative bg-beige w-full p-10 xl:p-20 flex flex-col items-center justify-center overflow-clip">
        <NavBar />
      </div>
      <div className="items-center justify-center flex lg:px-10 lg:pt-0 relative">
        <section className="max-w-7xl grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <EventsCardComponent
            title="Event 1"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
            i={12}
          />
          <EventsCardComponent
            title="Event 2"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
            i={12}
          />
          <EventsCardComponent
            title="Event 3"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
            i={12}
          />
          <EventsCardComponent
            title="Event 4"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
            i={12}
          />
          <EventsCardComponent
            title="Evnet 5"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
            i={12}
          />
          <EventsCardComponent
            title="Evnet 6"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
            i={12}
          />
        </section>
      </div>
    </div>
  );
}
