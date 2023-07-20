import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("https://react-events-backend.onrender.com/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    // throw new Response(JSON.stringify({ message: "Failed to fetch evetns." }), {
    //   status: 500,
    // });
    return json(
      { message: "Failed to fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json()
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}