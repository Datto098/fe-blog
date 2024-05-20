import avatar from "@/assets/profile-img.webp";
import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../svg/LinkedIn";
import Twitter from "../svg/Twitter";
import Dribble from "../svg/Dribble";
import Github from "../svg/Github";
import DarkMore from "../darkmore/DarkMore";

export default function Header(params) {
  return (
    <>
    {/* Fixed nav */}
    <div className="nav z-20 fixed top-[47px] left-[50%] translate-x-[-50%] translate-y-[-50%] px-[40px] py-[12px] rounded-[100px] bg-[var(--light-gray)] text-[var(--text)] backdrop-blur-sm border border-[var(--text)]">
      <ul className="flex items-center justify-center gap-3 font-[500]">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <DarkMore/>
        </li>
      </ul>
    </div>
    {/* Header */}
    <div id="header" className="px-[30px] py-[16px] bg-[var(--background)] text-[var(--text)] flex items-center justify-between">
      <div className="flex items-center justify-start gap-3">
        <div className="profile_avatar">
          <Image
            src={avatar}
            alt="avatar"
            width={1000}
            height={1000}
            className="w-[62px] h-[62px] rounded-full border border-1 border-[var(--gray)]"
          />
        </div>
        <h3 className="profile_name">TDC Dev</h3>
      </div>

      <div className="social_media flex items-center justify-center gap-3">
        <Link href={"#"}>
          <div className="w-[24px] h-[24px]">
            <LinkedIn />
          </div>
        </Link>
        <Link href={"#"}>
          <div className="w-[24px] h-[24px]">
            <Twitter />
          </div>
        </Link>
        <Link href={"#"}>
          <div className="w-[24px] h-[24px]">
            <Github />
          </div>
        </Link>
        <Link href={"#"}>
          <div className="w-[24px] h-[24px]">
            <Dribble />
          </div>
        </Link>
      </div>
    </div>
    </>
  );
}
