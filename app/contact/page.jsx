"use client"
import ContactLottie from '@/components/lottie/ContactLottie';
import contact from '@/assets/contact.json';

export default function ContactPage(params) {
  return (
    <>
      <div className="w-100% h-[500px] border-[var(--text)] text-[var(--text)] border-b-2 flex bg-[var(--background)]">
        <div className="w-2/5 border-r-2 flex justify-center">
          <ContactLottie src={contact} />
        </div>
        <div className="flex items-center w-3/5">
        <div className="w-full md:w-full flex flex-col items-start justify-center px-5 xs:px-10 md:px- pb-8">
            <h2 className="font-bold capitalize text-2xl xs:text-3xl sm:text-4xl">Let's Connect!</h2>
            <form className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in">
              Hello! My name is 
              <input placeholder="your name" className="outline-none border-0 p-0 mx-2 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent" type="text" name="name"/>
              and I want to discuss a potential project. You can email me at
              <input placeholder="your@email.com" className="w-[400px] outline-none border-0 p-0 mx-2 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent" type="email" name="email"/>
              or reach out to me on
              <input placeholder="your phone" className="outline-none border-0 p-0 mx-2 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent" type="tel" name="phone number"/>
              Here are some details about my project: 
              <br/>
              <textarea name="project details" placeholder="My project is about..." rows="3" className="w-full outline-none border-0 p-0 mx-0 placeholder:text-lg border-b border-gray  focus:border-gray bg-transparent"></textarea>
                <input className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer" type="submit" value="send request"/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
