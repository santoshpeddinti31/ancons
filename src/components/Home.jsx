import logo from "../images/logo.webp";

import fetchedUrl from "../images/bg.JPG";

function Home() {
  return (
    <div className="sm:w-max md:w-max">
      <nav className="flex items-center justify-between h-16 sm:h-28 bg-gray-200">
        <span className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-evenly ml-4 gap-4 sm:text-5xl  text-xl text-black">
          <img src={logo} alt="logo" />
          ANCONS
        </span>
        <ul className="flex sm:hidden  gap-16 pr-4 text-balck">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#courses">Universities</a>
          </li>
          <li>
            <a href="#apply">Courses</a>
          </li>
          <li>
            <a href="#admission">Admission</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        style={{ "--image-url": `url(${fetchedUrl})` }}
        className="relative bg-[image:var(--image-url)] bg-cover bg-center h-[40rem] sm:h-[155rem] w-full opacity-70"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-[#fff] p-4 border border-slate-400 text-center h-full pt-[10rem]">
          <h1 className="sm:hidden text-7xl">
            MS ARTIFICIAL INTELLIGENCE - USA
          </h1>
          <h1 className="hidden sm:flex text-7xl font-bold pt-[55rem]">
            MS ARTIFICIAL INTELLIGENCE - USA
          </h1>
          <h5 className="text-2xl pt-10 sm:text-6xl">
            January, May, Aug
            <b> 2025 </b>
            Semesters
          </h5>
          <p className="pt-3 sm:text-3xl sm:pt-10">
            Processing Charge of Rs.1000 per University.Choice of Top 200
            Universities
          </p>
          <button className="mt-10 border border-double w-32 h-10 border-gray-300 hover:bg-slate-200 hover:text-black uppercase tracking-widest hover:scale-90 transition-all sm:w-96 sm:h-32 sm:text-4xl sm:mt-40 sm:bg-[#6c6a6a] sm:text-white">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
