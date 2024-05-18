import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img, para }) => {
    return (
        <div>
            {title && <Cover
                img={img}
                title={title}
                para={para}
            ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-6">
                {
                    items.map(menuItem => <MenuItem key={menuItem._id} menuItem={menuItem} ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;