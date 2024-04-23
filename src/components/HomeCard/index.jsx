import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomeCard(props) {
  const {id} = props.product;
  const {image, title, price} = props.product.attributes;
  // console.log(id);
  const navigate = useNavigate()
  function handleRedirect() {
    navigate(`/info/${id}`)
    // console.log(id);
  }
  return (
    <>
      <div onClick={handleRedirect} className="card-wrapper flex dark:bg-[#272935] dark:text-white mt-4">
          <div className="card border-none w-[22rem] cursor-pointer shadow-md p-2 hover:shadow-2xl duration-200 dark:bg-[#1e2029] dark:text-white">
            <img
              src={image}
              alt=""
              className="rounded-xl h-64 md:h-48 w-full object-cover mt-4"
            />
            <h2 className="card-title capitalize tracking-wider text-center mt-4">
            {title}
            </h2>
            <p className="text-secondary text-center mt-2">${price}</p>
          </div>
        </div>
    </>
  )
}

export default HomeCard

