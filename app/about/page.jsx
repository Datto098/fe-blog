import Image from "next/image";
import character from "@/assets/character.webp";

export default function AboutPage(params) {
  return (
    <>
      <div className="w-100% h-[500px] border-[var(--text)] text-[var(--text)] border-b-2 flex bg-[var(--background)]">
        <div className="w-1/2 border-r-2 flex justify-center">
          <Image src={character} className="w-4/5 h-100%" alt="character" />
        </div>
        <div class="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
          <h2 class="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left">
            Dream Big, Work Hard, Achieve More!
          </h2>
          <p class="font-medium capitalize mt-4 text-base">
            This Mantra Drives My Work As A Passionate Freelancer. I Blend Innovative Technology With Timeless Design For Captivating Digital Experiences. Inspired By Nature And Literature, I'm A Perpetual Learner Embracing Challenges. With Each Project, I Aim To Leave A Lasting Impact—One Pixel At A Time.
          </p>
        </div>
      </div>
    </>
  );
};
