import map from "../images/map.jpg";

function About() {
  return (
    <div id="about" className="h-[45rem] bg-slate-50 sm:w-max md:w-[73rem]">
      <h1 className="text-center text-4xl p-5 font-thin">About</h1>
      <h5 className="text-center text-2xl pt-5">
        Write <span className="font-extrabold">TOEFL & GRE</span> AT{" "}
        <span className="text-red-600"> ANCONS INTERNATIONAL </span>& GET A FREE
        I-20 FOR MS ARTIFICIAL INTELLIGENCE
      </h5>
      <div className="flex justify-evenly sm:gap-[4rem]  mt-5">
        <div>
          <h1 className="pb-2 text-start font-semibold">
            APPLY FOR JAN/ MAY/ AUG 2025 SEMESTERS
          </h1>
          <ul className=" text-center text-xs">
            <li className="shadow-lg p-3 hover:animate-bounce ">
              FLORIDA INSTITUE OF TECHNOLOGY
            </li>
            <li className="shadow-lg p-3 hover:animate-bounce ">
              FLORIDA INSTITUE OF TECHNOLOGY
            </li>
            <li className="shadow-lg p-3 hover:animate-bounce ">
              FLORIDA INTERNATIONAL UNIVERSITY
            </li>
            <li className="shadow-lg p-3 hover:animate-bounce ">
              FAIRLEIGH DICKINSON UNIVERSITY
            </li>
            <li className="shadow-lg p-3 hover:animate-bounce ">
              UNIVERSITY OF BRIDGEPORT
            </li>
            <li className="shadow-lg p-3 hover:animate-bounce ">
              UNIVERSITY OF NEW HAVEN
            </li>
            <li className="shadow-lg p-3 hover:animate-bounce ">
              WILLIAM PATERSON UNIVERSITY
            </li>
            <li className="shadow-lg p-3 hover:animate-bounce ">
              NOVA SOUTHEASTERN UNIVERSITY
            </li>
            <li className="shadow-lg p-3 hover:animate-bounce ">
              WICHITA STATE UNIVERSITY
            </li>
            <li className="shadow-lg p-3 hover:animate-bounce ">
              UNIVERSITY OF FINDLAY
            </li>
            <li className="shadow-lg p-3 hover:animate-bounce ">
              UNIVERSITY OF MICHIGAN FLINT
            </li>
            <li className="shadow-lg p-3 hover:animate-bounce ">
              NORTHWEST MISSUOURI STATE UNIVERSITY
            </li>
            <li className="shadow-lg p-3 hover:animate-bounce ">
              TEXAS A&M UNIVERSITY KINGSVILLE
            </li>
          </ul>
        </div>
        <div className="w-[24rem]">
          <h1 className="pb-2 text-start font-semibold">
            ANCONS INTERNATION CONSULTANCY
          </h1>
          <p className=" text-justify">
            ANCONS International represents universities in the USA, fousing on
            facilitating the admission process for international students who
            wish to study in American institutions. ANCONS provides assistance
            with application procedures, guiding students through visa
            requiremnts, and offering support throughout the entire process of
            studying in the USA.
            <br />
            <span className="font-light">
              <h1 className="font-bold uppercase pt-6">Our Services:</h1>
              Application Fee Waviers Low <br />
              Consultancy Fees <br />
              Minimum Scholorships
              <br />
              Expert VISA Counselling <br /> CPT/OPT Placements
            </span>
          </p>
          <p className="pt-10">
            Contact : +91 9393226968 For 2000/- Discount Codes on TOEFL & GRE
            Exams
          </p>
        </div>
        <div className="w-[25rem]">
          <h1 className="pb-10 font-semibold">
            ANCONS INTERNATIONAL OFFICIALLY REPRESENTS USA UNIVERSITIES
          </h1>
          <img className="w-full h-[20rem]" src={map} alt="map" />
          <p className="pt-10">
            Note:
            <br />
            <span className="font-bold text-yellow-600 shadow-xl">
              FREE ADMISSION PROCESSING & VISA COUNSELING JAN '25
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
