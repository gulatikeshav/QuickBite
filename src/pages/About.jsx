import { ABOUT_URL_IMAGE } from "../utils/constants";

const About = () => {
  return (
    <div className="w-full flex flex-col  justify-center  lg:flex-row mt-28 pb-8 ">
      <div className="w-full lg:w-5/12 p-2 text-center">
        <h1 className="text-2xl md:text-5xl  leading-10 md:leading-[4rem] lg:leading-[5rem]">
          Welcome to the world of <br />
          <strong className="bg-amber-600 px-2">Tasty & Fresh Food</strong>
        </h1>

        <h4 className="text-base md:text-2xl">
          <i>"Better you will feel if you eat a QuickBite's healthy meal"</i>
        </h4>
      </div>

      <div className="w-full lg:w-5/12 mt-4">
        <img
          src={ABOUT_URL_IMAGE}
          alt="about-image"
          className="rounded-lg w-8/12 md:w-5/12 mx-auto lg:w-full"
        />
      </div>
    </div>
  );
};

export default About;
