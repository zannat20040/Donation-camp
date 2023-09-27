import { useLoaderData } from "react-router-dom";
import DonationCard from "../Component/DonationCard";
import Header from "../Component/Header";

const Home = () => {
  const donations = useLoaderData();


  return (
    <div>
      <Header donations={donations}></Header>
      <div className="grid-cols-1  sm:grid-cols-2 mt-14 mb-14 container mx-auto card-container grid md:grid-cols-4 gap-4">
      {donations.map((data) => (
        <DonationCard data={data} key={data.id}></DonationCard>
      ))}
      </div>
    </div>
  );
};

export default Home;
