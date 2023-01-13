import Image from 'next/image';

const EventPage = ({data}) => {
  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
      <Image
        width={1000}
        height={500}
        style={{
          maxWidth: '100%',
          /* height: 'auto', */
          /* objectFit: 'contain' */
        }}
        src={data.image}
        alt={data.title}
      />
      <p>{data.description}</p>
      
      <input type="email" /><button>Submit</button>
    </div>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const {allEvents} = await import('/data/data.json');
   
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      }
    };
  }); 

  return {
    paths: allPaths,
    fallback: false
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  const {allEvents} = await import('/data/data.json');
  const eventData = allEvents.find(ev => (ev.id === id));

  return {
    props: {
      data: eventData
    }
  };
}
