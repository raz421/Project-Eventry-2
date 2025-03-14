import EventDetails from "@/components/Details/EventDetails";
import EventMap from "@/components/Details/EventMap";
import Hero from "@/components/Details/Hero";
import { eventById } from "@/db/queries";

export default async function EventDetailsPage({ params: { id } }) {
  const eventInfo = await eventById(id);

  return (
    <>
      <section className="container">
        <Hero event={eventInfo} />
        <EventDetails event={eventInfo} />
      </section>
      <EventMap event={eventInfo} />
    </>
  );
}
