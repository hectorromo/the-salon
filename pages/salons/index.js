import Link from "next/link";

const Salons = ({ salons }) => {
  console.log(salons);
  return (
    <div>
      <h1>Salonger</h1>
      <ul>
        {salons.map((salon) => (
          <li>
            <Link href={`/salons/${salon.slug}`}>{salon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/salons`);
  const json = await res.json();

  return {
    props: {
      salons: json,
    },
  };
}

export default Salons;
