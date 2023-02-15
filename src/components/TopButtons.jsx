import React from "react";

const TopButtons = () => {
  const cities = [
    {
      id: 1,
      title: "Manila",
    },
    {
      id: 2,
      title: "Singapore",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Bali",
    },
    {
      id: 5,
      title: "Kuala Lumpur",
    },
  ];

  return (
    <div className=" flex justify-around items-center my-6">
      {cities.map(({ id, title }) => (
        <button key={id} className=" text-white text-lg font-medium">
          {title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
