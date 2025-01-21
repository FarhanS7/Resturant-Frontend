import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Divine Dine | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"} />
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* Offered Items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert Items */}
      <MenuCategory
        items={dessert}
        title="dessert"
        img={dessertImg}
      ></MenuCategory>
      {/* Soup Items */}
      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
      {/* Salad Items */}
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
      {/* Pizza Items */}
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
    </div>
  );
};

export default Menu;
