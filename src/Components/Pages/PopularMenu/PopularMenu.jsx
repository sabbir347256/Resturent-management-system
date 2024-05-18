import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category ==='popular');

    return (
        <section>
            <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10 my-6">
                {
                    popular.map(menuItem => <MenuItem key={menuItem._id} menuItem={menuItem} ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;