import Link from "next/link";
import LinkedIn from "../svg/LinkedIn";
import Twitter from "../svg/Twitter";
import GithubDark from "../svg/GithubDark";
import Dribble from "../svg/Dribble";
import Github from "../svg/Github";

export default function Footer(params) {
  return <div className="px-[30px] py-[16px] text-[var(--background)] bg-[var(--background)]">
    <div className="bg-[var(--highlight)] pt-[60px] rounded-2xl">
      <h3 className="text-[28px] mb-4 font-[600] text-center">Interesting Stories | Updates | Guides</h3>
      <p className="text-center max-w-[860px] mb-4 mx-auto text-wrap">Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.</p>
      <label htmlFor="email" className=" mx-auto w-fit rounded-sm flex items-center justify-center p-2 bg-[var(--background)]">
        <input type="text" placeholder="Enter your email" className="border-none outline-none font-light text-[var(--text)] min-w-[380px] text-sm bg-[transparent]" />
        <button className="text-sm p-2 rounded-sm text-[var(--background)] bg-[var(--text)]">Submit</button>
      </label>
      <div className="social_media flex items-center justify-center gap-3 mt-[20px]  pb-[80px]">
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
      <div className="px-[40px] py-[26px] border-t border-[var(--text)] flex items-center justify-between">
        <p>
          ©2024 TDC. All rights reserved.
        </p>
        <Link href={""} className="underline">
          sitemap.xml
        </Link>
        <p>
          Made with ♥ by <span className="underline">TDC</span>
        </p>
      </div>
    </div>
  </div>
};
