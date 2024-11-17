import React from "react";
import list from "../../public/list.json";
import Cards from "../componenet/Cards";
import { Link } from "react-router-dom";

function Course() {


  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We are delight to have you{" "}
            <span className="text-pink-700">here! </span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            illo quis a error nam minus odio delectus, harum illum nulla
            nesciunt aliquid voluptate beatae, suscipit ea itaque corrupti cum.
            Fugit animi reiciendis tenetur delectus incidunt illo, eveniet porro
            soluta omnis modi minima, libero neque sapiente cupiditate
            voluptates repellendus sunt nisi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ut, accusantium.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
