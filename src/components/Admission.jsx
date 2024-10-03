import img1 from "../images/img17.webp";
import img2 from "../images/img16.webp";
function Admission() {
  return (
    <div id="admission" className="pb-[5rem] md:w-[73rem]">
      <h1 className="text-center text-4xl p-5 font-thin">Admission</h1>
      <h5 className="text-center text-xl font-light">
        Register for the Free Admission Processing for MS in AI in USA
      </h5>
      <div className="flex items-center justify-center pt-[3rem]">
        <form className="felx flex-col items-center justify-center w-[40rem] p-10 shadow-2xl rounded-3xl ">
          <label htmlFor="full_name">Fullname*</label>
          <br />
          <input
            type="text"
            placeholder="Please Enter your name"
            className=" text-xs w-full  outline-none"
          />
          <br />
          <label htmlFor="phone">Phone*</label>
          <br />
          <input
            type="phone"
            className="text-xs outline-none"
            placeholder="+91 5938535753"
          />
          <br />
          <label htmlFor="email">Email*</label>
          <br />
          <input
            type="email"
            className="text-xs outline-none"
            placeholder="Please Enter your email address"
          />
          <br />
          <label htmlFor="qualify">Qualification*</label>
          <br />
          <input
            type="text"
            className="text-xs outline-none"
            placeholder="Please Enter your Qualification"
          />
          <br />
          <label htmlFor="">
            Are you planning for Jan or May or Aug'25 semester admission?
          </label>
          <br />
          <input
            type="text"
            className="text-xs outline-none w-full"
            placeholder="Please Enter your Month for admission "
          />
          <br />
          <label htmlFor="">
            Are you planning to write TOEFL or GRE or both at ANCONS Test
            Center?
          </label>
          <br />
          <input
            type="text"
            placeholder="Please Enter your Test Center"
            className="w-full text-xs"
          />
          <br />
          <br />
          <span>
            <input type="file" className="text-xs" />
            Attach Resume
          </span>
          <br />
          <button className="mt-4 space-x-6 bg-slate-500 h-7 text-xs text-white pl-5 pr-5 rounded-sm">
            Submit Premilinary Application
          </button>
        </form>
      </div>
      <h1 className="p-10 pt-[7rem] text-xl underline underline-offset-4">
        Test Centers:
      </h1>
      <div className="flex items-center justify-evenly sm:flex-col">
        <div className="flex items-center justify-center">
          <div className="p-10">
            <img className="w-[50rem] " src={img1} alt="toefl ibt" />
          </div>
          <div className="w-[52rem] md:w-[45rem]">
            <h1 className="font-bold text-xl text-slate-500">New TOEFL iBT</h1>
            <h5 className="font-semibold text-slate-400">
              Features of the New TOEFL iBT, which is now 2 hours long:
            </h5>
            <p className="text-xs text-justify text-slate-600">
              Test Length: 2 hours long. Test Structure: Comprises four sections
              – Reading, Listening, Speaking, and Writing. Reading Section:
              Shortened to 2 reading passages with 10 questions each; focuses on
              comprehension of academic texts. Listening Section: Features
              shorter lectures and conversations with fewer questions, assessing
              listening comprehension. Speaking Section: Contains 4 tasks
              instead of 6; includes both independent and integrated speaking
              tasks. Writing Section: Remains with 2 tasks: an integrated task
              (combining reading and listening) and an independent essay. Score
              Validity: Scores are valid for 2 years. Scoring: Sectional scoring
              ranges from 0 to 30, with a total score out of 120. Registration
              and Fees: Discounted Fees provide by ANCONS International Official
              Prep Resources: TOEFL provides official guides, and practice tests
            </p>
            <h1 className="font-bold text-xl pt-6 text-slate-500">New GRE</h1>
            <h5 className="font-semibold text-slate-400">
              Key features of the New GRE:
            </h5>
            <p className="text-xs text-justify text-slate-600 ">
              Test Length: 2 hours (reduced from the previous 3 hours 45
              minutes). Test Structure: Three sections – Analytical Writing,
              Verbal Reasoning, and Quantitative Reasoning. Analytical Writing:
              1 task (Analyze an Issue); 30 minutes. Verbal Reasoning: 2
              sections, each with 27 questions, 29 minutes per section; measures
              reading comprehension, critical reasoning, and vocabulary.
              Quantitative Reasoning: 2 sections, each with 27 questions, 47
              minutes per section; tests arithmetic, algebra, geometry, and data
              analysis. Score Range: Verbal Reasoning: 130–170 Quantitative
              Reasoning: 130–170 Analytical Writing: 0–6 (in half-point
              increments) No Experimental Section: The unscored "experimental"
              or "research" section has been removed in the new GRE. Adaptive
              Testing: The test remains section-level adaptive, meaning
              performance in one section can influence the difficulty of
              subsequent sections. Score Validity: Scores are valid for 5 years.
              Registration and Fees: Discounted Fees provided by ANCONS
              International Official Prep Resources: ETS provides official prep
              materials, including PowerPrep practice tests and apps. The new
              GRE is shorter and more streamlined, while maintaining a
              comprehensive assessment of verbal, quantitative, and writing
              skills.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img className="p-10" src={img2} alt="ets" />
          </div>
          <div className="p-10">
            <h1 className="text-slate-500 text-xl">
              ANCONS INTERNATIONAL (ETS GRE & TOEFL Test Center) Vijayawada
            </h1>
            <p className="text-slate-500 text-sm">
              0-5/7-8B, Sree Square Building, Municipal Employees Colony Main
              Rd, Municipal Employees Colony, Acharya Ranga Nagar, Benz Circle,
              Vijayawada, AP 520010, India Email: info@ancons.in Phones:
              9032022693/ 90320223693/ 9032024693 Head Office: ANCONS
              International, Hyderabad Phones: 9032022693/ 9032045693 /
              9393226968
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;
