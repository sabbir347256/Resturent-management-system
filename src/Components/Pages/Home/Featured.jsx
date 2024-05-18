import SectionTitle from "../SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
const Featured = () => {
    return (
        <div className="feature-bg bg-fixed  text-white pt-10 my-20">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>

            <div className="flex py-20 px-36 bg-slate-500 bg-opacity-40 justify-center items-center">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20,2024</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugit explicabo sit ratione debitis commodi alias reprehenderit et consequatur dolore, sint neque tenetur provident atque deleniti inventore exercitationem, blanditiis ipsum cum, cupiditate iusto aliquam! Iure fuga molestias molestiae facilis deleniti modi similique cumque laborum consectetur. Quos modi fugit sint ut.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;