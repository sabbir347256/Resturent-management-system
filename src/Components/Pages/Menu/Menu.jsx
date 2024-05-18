import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImage from '../../../assets/menu/banner3.jpg'
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImage}
                title={'our menu'}
                para={'would you like to try a dish?'}
            ></Cover>
            <SectionTitle
                subHeading="Don't miss"
                heading={'todays offer'}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory
                title={'Dessert'}
                img={dessertImage}
                para={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                items={dessert}
            ></MenuCategory>
            <MenuCategory
                title={'pizza'}
                img={pizzaImage}
                para={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                items={pizza}
            ></MenuCategory>
            <MenuCategory
                title={'Soup'}
                img={soupImage}
                para={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                items={soup}
            ></MenuCategory>
            <MenuCategory
                title={'Salad'}
                img={saladImage}
                para={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                items={salad}
            ></MenuCategory>
        </div>
    );
};

export default Menu;