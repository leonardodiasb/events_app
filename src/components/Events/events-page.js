import Image from 'next/image';
import Link from 'next/link';

export const AllEvents = ({ data }) => {
  return (
    <div className='events_page'>
      {data.map((ev) => (
        <Link className='card' href={`/events/${ev.id}`} key={ev.id}>
          <Image width={400} height={400} src={ev.image} alt={ev.title} />
          <h2>{ev.title}</h2>
        </Link>
      ))}
    </div>
  );
};
