import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const findDetail = details.find((item) => item.id === idInt);
  console.log(findDetail);

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
          <button className="btn bg-red-500 text-white border-0 rounded-none">Donate {findDetail.price}</button>
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
