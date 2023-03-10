import Image from 'next/image';
import Link from 'next/link';

export const HomePage = ({ data }) => {
  return (
    <div className='home_body'>
      {data.map((ev) => (
        <Link className='card' href={`/events/${ev.id}`} key={ev.id}>
          <div className='image'>
            <Image
              width={600}
              height={300}
              style={{
                maxWidth: '100%',
                /* height: 'auto', */
                /* objectFit: 'contain' */
              }}
              src={ev.image}
              alt={ev.title}
            />
          </div>
          <div className='content'>
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
