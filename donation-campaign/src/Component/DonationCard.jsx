import React from "react";
import PropTypes from 'prop-types';  
import { Link } from "react-router-dom";

const DonationCard = ({data}) => {
    const {id} = data
  return (
    <>
    <Link to={`/details/${id}`}>
    <div className={`w-auto rounded-md`} style={{backgroundColor:data.card_bg}}>
        <figure className="h-32 w-full">
          <img src={data.picture} alt="Shoes" className="h-full rounded-t-md rounded-none w-full"/>
        </figure>
        <div className="p-3">
          <div className={`text-xs font-medium inline-block py-1 px-4 rounded-md`} style={{color:data.text_button_bg_color, backgroundColor: data.category_bg}}>
            {data.category}
          </div>
          <h2 className="font-semibold text-base mt-2 " style={{color:data.text_button_bg_color}}>
            {data.title}
          </h2>
        </div>
      </div>
    </Link>
    </>
  );
};



DonationCard.propTypes = {  
    data: PropTypes.object   
}  

export default DonationCard;
