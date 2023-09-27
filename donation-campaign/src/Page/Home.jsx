import { useLoaderData } from "react-router-dom";
import DonationCard from "../Component/DonationCard";
import Header from "../Component/Header";

const Home = () => {
  const donations = useLoaderData();

//   console.log(donations);

  return (
    <div>
      <Header donations={donations}></Header>
      <div className=" mt-14 mb-14 container mx-auto card-container grid grid-cols-4 gap-4">
      {donations.map((data) => (
        <DonationCard data={data} key={data.id}></DonationCard>
      ))}
      </div>
    </div>
  );
};

export default Home;
