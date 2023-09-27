import React from 'react';

const SearchResult = ({filteredCategory}) => {
    console.log(filteredCategory)
    return (
        <div>
             {
                filteredCategory.map(data=>(
                    <Link to={`/details/${data.id}`}>
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
                ))
             }
        </div>
    );
};

export default SearchResult;