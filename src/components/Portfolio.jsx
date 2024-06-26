import kkdial from "../images/kkdial.png";
import WeatherApp from "../images/weatherapp.png";
import chaisuttabar from "../images/chaisuttabar.png";
import areamajorproject from "../images/area-majorproject.png";
import BoostedUSA from "../images/BoostedUSA.png";
import camping from "../images/camping.png";
import coffeehouse from "../images/coffeehouse.png";
import ShopFusion from "../images/ShopFusion.png";
import CUK from "../images/CUK-IQAC.png";
import TODO from "../images/todo1.png";
import Quotes from "../images/quotes.png";
import "../style/Portfolio.css";
const portfolio = [
  {
    Projectname: "KKDial",
    tech: "HTML,CSS,PHP,MySQL",
    imageUrl: kkdial,
    des: "Information Directory Portal, Dynamic DashBoard for User and Admin",
    Demo: "https://kkdial.infinityfreeapp.com/",
    github: "https://github.com/kishlaychandan/KKDial",
  },
  {
    Projectname: "Chai-Sutta-Bar (Replicate)",
    tech: "HTML, CSS, Tailwind CSS",
    imageUrl: chaisuttabar,
    des: "Created a replicate UI of Chai-Sutta-Bar",
    Demo: "https://chai-sutta-bar-replicate-ui.netlify.app/",
    github: "https://github.com/kishlaychandan/chai-sutta-bar",
  },
  {
    Projectname: "Aria-MajorProject-UI",
    tech: "HTML, CSS",
    imageUrl: areamajorproject,
    des: "Created a UI of website Aria",
    Demo: "https://aria-majorproject-ui.netlify.app/",
    github: "https://github.com/kishlaychandan/MajorProject-HTML--CSS",
  },
  {
    Projectname: "Boosted USA (Replicate)",
    tech: "HTML, CSS",
    imageUrl: BoostedUSA,
    des: "Created a replicate UI of Boosted USA",
    Demo: "https://boostedusa-replicate-ui.netlify.app/",
    github: "https://github.com/kishlaychandan/Weekly_Test_6---CSS",
  },
  {
    Projectname: "Camping",
    tech: "HTML, CSS",
    imageUrl: camping,
    des: "Created a UI for Camping services website",
    Demo: "https://campingservices.netlify.app/",
    github: "https://github.com/kishlaychandan/Weekly-Test--4-CSS-Properties",
  },
  {
    Projectname: "Coffee-House",
    tech: "HTML, CSS",
    imageUrl: coffeehouse,
    des: "Created a UI for Coffee House website",
    Demo: "https://coffee-house-24.netlify.app/",
    github: "https://github.com/kishlaychandan/Assignment_24_Coffee_house",
  },
  // {
  //   Projectname: "CUK-IQAC",
  //   tech: "Php",
  //   imageUrl: CUK,
  //   des: "Central University of Karnataka - IQAC Portal.",
  //   Demo: "https://cuk.ac.in/CUK-IQAC/index.php",
  //   github: "https://github.com/Sadanandgadwal/teckstack",
  // },
  // {
  //   Projectname: "Todo APP",
  //   tech: "MERN",
  //   imageUrl: TODO,
  //   des: "Todo using Mern Stack here we can add todo, delete todo, completed todo",
  //   Demo: "https://todoapp-yesg.netlify.app",
  //   github: "https://github.com/Sadanandgadwal/todofrontend",
  // },
  //  {
  //   Projectname: "Weather APP",
  //   tech: "Reactjs",
  //   imageUrl: WeatherApp,
  //   des: "Weather App using Reactjs using Axios, API Using OpenWeatherMap",
  //   Demo: "https://weatherappyesg.netlify.app",
  //   github: "https://github.com/Sadanandgadwal/Weatherapp",
  // },
  // {
  //   Projectname: "ShopFusion",
  //   tech: "Reactjs",
  //   imageUrl: ShopFusion,
  //   des: "ShopFusion using Reactjs and zustand, API Using FakeStoreApi",
  //   Demo: "https://storefusion.netlify.app/",
  //   github: "https://github.com/Sadanandgadwal/Ecom",
  // },
  // {
  //   Projectname: "Quotes",
  //   tech: "Reactjs",
  //   imageUrl: Quotes,
  //   des: "Quotes using Reactjs with axios, API Using API Ninjas",
  //   Demo: "https://quotes-delta-blond.vercel.app/",
  //   github: "https://github.com/Sadanandgadwal/Quotes",
  // },
];
export default function Portfolio() {
  return (
    <div className="bg-gray-900" id="Portfolio">
      <main className=" relative isolate">
        {/* Header section */}
        <div className="px-6 pt-8 lg:px-8">
          <div className="mx-auto max-w-2xl pt-14 text-center sm:pt-10">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Portfolio
            </h2>
          </div>
        </div>
        <div className="relative isolate -z-10 mt-32 sm:mt-16">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
            >
              {portfolio.map((project) => (
                <li key={project.Projectname} className="max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center max-[640px]:gap-[0.4rem]" >
                 <div className="portfolio-card w-full relative overflow-hidden rounded-2xl " >
                  <a href="">
                  <img
                      className="aspect-[14/13] brightness-[0.8]  w-full object-fill rounded-2xl border cursor-pointer  border-gray-600"
                      src={project.imageUrl}
                      alt=""
                    />
                  </a>
                  <p className="hover:cursor-pointer text-center w-full absolute z-100 top-[60%] text-white text-[1.3rem] font-bold opacity-0" >{project.Projectname}</p>
                 </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                    {project.Projectname}
                  </h3>
                  <p className="text-base leading-7 text-gray-300">
                    {project.tech}
                  </p>
                  <p className="text-sm leading-6 text-gray-500">
                    {project.des}
                  </p>
                  <span
                    className="text-sm leading-6 text-gray-50 hover:text-gray-400 cursor-pointer "
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.Demo, "_blank", "noreferrer");
                    }}
                  >
                    <button className="hover:font-semibold mx-auto text-white bg-indigo-600 border-[2.5px] border-indigo-600 hover:bg-white hover:text-indigo-600 py-1 px-5 focus:outline-none rounded text-lg">
                      View
                    </button>
                  </span>{" "}
                  <span
                    className="text-sm leading-6 text-gray-50 hover:text-gray-400 cursor-pointer "
                    onClick={(e) => {
                      e.preventDefault(); 
                      window.open(project.github, "_blank", "noreferrer");
                    }}
                  >
                    <button className=" mx-auto text-white border-[2.5px] border-indigo-600 bg-indigo-600 hover:bg-white hover:font-semibold hover:text-indigo-600  py-1 px-5 focus:outline-none  rounded text-lg">
                      Github
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
