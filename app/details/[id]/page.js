import EventDetails from "@/components/Details/EventDetails";
import EventMap from "@/components/Details/EventMap";
import Hero from "@/components/Details/Hero";
import { eventById } from "@/db/queries";

export default async function EventDetailsPage({ params: { id } }) {
  const eventInfo = await eventById(id);

  return (
    <>
      <Hero event={eventInfo} />

      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails event={eventInfo} />
          <EventMap event={eventInfo} />
        </div>
      </section>
    </>
  );
}
