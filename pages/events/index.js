import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EventsPage = ({ data }) => {
  return (
    <div>
      <div>
        {data.map((ev) => (
          <Link href={`/events/${ev.id}`} key={ev.id}>
            <Image width={200} height={200} src={ev.image} alt={ev.title} />
            <h2>{ev.title}</h2>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');

  return {
    props:{
      data: events_categories
    }
  };

}
