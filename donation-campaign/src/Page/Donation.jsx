import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

const Donation = () => {
  const [displayDonated, setDisplayDonated] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const donationItem = JSON.parse(localStorage.getItem("Donation List"));
    setDisplayDonated(donationItem);
  }, []);

  //   console.log(displayDonated);

  return (
    <>
      {!displayDonated ? (
        <div className="text-center mt-4">
          <p>No data found</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols lg:grid-cols-2  my-6  gap-3 container mx-auto rounded-sm shadow-none">
            {displayDonated.map((item, index) => (
              <div
                className={` flex-col sm:flex-row flex items-center card card-side bg-base-100 py-2 shadow-xl ${
                  !showAll && index >= 4 ? "hidden" : ""
                }`}
                key={item.id}
                style={{
                  backgroundColor: item.card_bg,
                }}
              >
                <figure>
                  <img src={item.picture} className="w-auto mr-6 " />
                </figure>
                <div className="text-left mt-3 sm:mt-0">
                  <h2
                    className="w-fit py-1 px-2 rounded-sm my-1"
                    style={{
                      color: item.text_button_bg_color,
                      backgroundColor: item.category_bg,
                    }}
                  >
                    {item.category}
                  </h2>
                  <h2 className="card-title font-semibold text-xl text-black">
                    {item.title}
                  </h2>
                  <p
                    style={{ color: item.text_button_bg_color }}
                    className="font-semibold"
                  >
                    {item.price}
                  </p>
                  <div className="card-actions justify-start mt-1">
                    <button
                      className="btn btn-primary rounded-md text-white border-0 "
                      style={{ backgroundColor: item.text_button_bg_color }}
                      onClick={() => {
                        window.location.href = `/details/${item.id}`;
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
          {displayDonated.length >= 4 && (
  <div>
    <button
      className="btn bg-green-600 rounded-md text-white flex mt-10 border-0 mx-auto"
      onClick={() => setShowAll(true)}
    >
      Show All
    </button>
  </div>
)}
{/* 
            {!showAll && (
              <div>
                <button
                  className="btn bg-green-600 rounded-md text-white flex mt-10 border-0 mx-auto"
                  onClick={() => setShowAll(true)}
                >
                  Show All
                </button>
              </div>
            )} */}
          </div>
        </>
      )}
    </>
  );
};

export default Donation;
