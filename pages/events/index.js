import React from 'react';
import { AllEvents } from '../../src/components/Events/events-page';

const EventsPage = ({ data }) => {
  return (
    <AllEvents data={data} />
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
