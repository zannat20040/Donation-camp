import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const findDetail = details.find((item) => item.id === idInt);
  // console.log(findDetail);

  const handleDonation = () => {


    const addDonation = [];

    const donationItem = JSON.parse(localStorage.getItem("Donation List"));

    if (!donationItem) {
      addDonation.push(findDetail);
      localStorage.setItem("Donation List", JSON.stringify(addDonation));
      toast.success("Donation Success", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } 
    else {
       const isExist = donationItem.find(item => item.id ==id)
       if(!isExist){
     
        addDonation.push(...donationItem,findDetail);
        localStorage.setItem("Donation List", JSON.stringify(addDonation));
  toast.success("Donation Success", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
       }
       else{
        toast.error("You have already donated", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
       }
    }

    
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="card ">
        <figure className="relative">
          <img
            src={findDetail.picture}
            alt="Shoes"
            className="w-full h-96 rounded-none"
          />
          <div className="absolute w-full bg-black bottom-0 p-7 opacity-90">
            <button
              onClick={handleDonation}
              className="btn bg-red-500 text-white border-0 rounded-none" style={{backgroundColor:findDetail.text_button_bg_color}}
            >
              Donate {findDetail.price}
            </button>
            <ToastContainer />
          </div>
        </figure>
      </div>
      <div className="">
        <h2 className="card-title text-4xl font-bold py-5">
          {findDetail.title}
        </h2>
        <p className="text-justify font-base ">{findDetail.description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default Details;
