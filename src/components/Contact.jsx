import phone from "../images/call.png";

import ig from "../images/ig.png";

import ln from "../images/ln.png";

import fb from "../images/fb.png";

import mail from "../images/mail.png";
function Contact() {
  return (
    <>
      <div
        id="contact"
        className=" flex flex-col items-center h-[40rem] bg-slate-100 md:w-[73rem]"
      >
        <h1 className="text-center text-4xl p-5 font-thin">Contact</h1>
        <div className="flex flex-col justify-center items-center w-[30rem] shadow-2xl p-20 space-y-3 mt-10">
          <form>
            <label>Full Name</label>
            <input
              className="text-xs p-1 outline-none border-b-2 border-slate-400 w-[20rem] text-black "
              type="text"
              name="from_name"
              placeholder="Enter your full name here."
            />

            <label>Email</label>
            <input
              className="text-xs p-1 outline-none border-b-2 border-slate-400 w-[20rem] text-black "
              type="email"
              name="from_email"
              placeholder=" Enter your email address here"
            />
            <label>Phone</label>
            <input
              className="text-xs p-1 outline-none border-b-2 border-slate-400 w-[20rem] text-black "
              type="phone"
              name="from_phone"
              placeholder=" Enter your phone number here"
            />

            <label htmlFor="email">Message</label>
            <textarea
              className="text-xs p-1 outline-none border-b-2 border-slate-400 w-[20rem] text-black "
              name="message"
              type="text"
              placeholder="Enter your message here"
            />

            <button
              className="bg-slate-500 p-1 mt-2 w-20 text-white"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <section className="-mt-10">
        <div className="bg-[#CBD5E1] p-8 flex sm:flex-col justify-between md:w-[73rem]">
          <div>
            <p className="text-2xl font-bold">ANCONS International.</p>
          </div>
          <div className="text-start font-poppins text-xs space-y-2 sm:mt-5">
            <p className="flex justify-start items-center gap-2 hover:animate-pulse">
              <img className="w-5 h-5" src={mail} alt="email" /> info@ancons.in
            </p>
            <p className="flex justify-start items-center gap-2 hover:animate-pulse ">
              <img className="w-5 h-5" src={phone} alt="phone" /> +91 9393226968
            </p>
          </div>
          <div className="flex justify-between items-center space-x-8 sm:mt-3 sm:justify-center">
            <p className="hover:animate-bounce">
              <a target="blank" href="https://github.com/santoshpeddinti31">
                <img className="w-5 h-5" src={fb} alt="fb" />
              </a>
            </p>
            <p className="hover:animate-bounce">
              <a
                target="blank"
                href="https://www.linkedin.com/in/santoshkumar-peddinti-97100620b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGoOxXQjDQR2nm1yeRuitcQ%3D%3D"
              >
                <img className="w-5 h-5" src={ln} alt="linkedin" />
              </a>
            </p>
            <p className="hover:animate-bounce">
              <a
                target="blank"
                href="https://www.instagram.com/santosh_peddinti/"
              >
                <img className="w-5 h-5" src={ig} alt="instagram" />
              </a>
            </p>
          </div>
          <p className="font-thin flex sm:mt-2 items-center sm:justify-center">
            All rigths reserved by{" "}
            <b className="sm:font-semibold"> &nbsp;ANCONSInternational@2024</b>
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;
