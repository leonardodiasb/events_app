import Link from 'next/link';
import Image from 'next/image';

export const CatEvent = ({ data, pageName }) => {
  return (
    <div className='cat_events'>
      <h1>Events in {pageName}</h1>
      <div className='content'>
        {data.map((ev) => (
          <Link className='card' href={`/events/${ev.city}/${ev.id}`} key={ev.id} >
            <Image
              width={300}
              height={300}
              style={{
                maxWidth: '100%',
                /* height: 'auto', */
                /* objectFit: 'contain' */
              }}
              src={ev.image}
              alt={ev.title}
            />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
