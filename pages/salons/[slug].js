import Link from "next/link";

const Salon = ({ salon }) => {
  console.log("The salon", salon);
  return (
    <div>
      <h1>{salon.name}</h1>
      <Link href="/salons">Gå tillbaka</Link>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/salons/${context.query.slug}`
  );
  const json = await res.json();

  return {
    props: {
      salon: json,
    },
  };
}

export default Salon;
