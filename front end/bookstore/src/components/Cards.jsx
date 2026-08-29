import React from "react";

function NewFile({ item }) {
  // console.log(item)
  return (
    <>
      <div className="mt-4 my-3 p-3" >
        <div className="card bg-base-100 dark:bg-slate-900 dark:text-white dark:border w-92 shadow-sm mt-6 my-2 hover:scale-105 bg-white shadow-lg rounded-xl overflow-hidden p-6 transition-transform duration-300">
          <figure>
            <img src={item.image} alt="Books" className="w-full h-48 object-cover rounded-md mb-4 dark:bg-slate-600 dark:text-white" />
          </figure>
          <div className="card-body">
            <h2 className="text-lg font-semibold mb-2">
              {item.name}
              <div className="badge badge-secondary mb-4"> {item.category}</div>
            </h2>
            <p >{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{item.price}$</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-2 py-1 duration-200 cursor-pointer border-[2px]">
                Buy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewFile;
