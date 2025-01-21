<<<<<<< HEAD
import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem";
const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

=======
import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  });
>>>>>>> aa05866e6981d0e6474c19f61e20d06cb5cd03a1
  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
<<<<<<< HEAD
        {popular.map((item) => (
=======
        {menu.map((item) => (
>>>>>>> aa05866e6981d0e6474c19f61e20d06cb5cd03a1
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div
        className="
      text-center"
      >
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
