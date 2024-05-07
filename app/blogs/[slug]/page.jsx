"use client";
import Down from "@/components/svg/Down";
import { strHandle } from "@/utils/str";
import { blogs } from "@/variables/global";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function page(params) {
  // const param = useParams();
  // const slug = param.slug;

  return (
    <div>
      {/* blog banner */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* banner overlay */}
        <div className="overlay_bg absolute top-0 left-0 right-0 bottom-0 h-full bg-gradient-to-tl from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.1)] z-10"></div>
        {/* banner image */}
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-left-top">
          <Image
            src={`/blogs/${blogs[0].blog_contents.image}`}
            width={1000}
            height={1000}
            className="aspect-square w-full h-full object-cover object-center"
          />
        </div>
        {/* banner content */}
        <div className="absolute z-10 top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] flex items-center justify-center flex-col gap-[30px]">
          <Link
            href={"/categories/" + blogs[0].blog_types.blog_category_name}
            className="px-[30px] border-2 border-[var(--text)] py-3 rounded-full bg-[var(--background)] capitalize text-[var(--text)] "
          >
            {blogs[0].blog_types.blog_category_name}
          </Link>
          <h1 className="text-[42px] text-center font-[500]">
            RESTful APIs: Building Blocks Of Modern Web Applications
          </h1>
        </div>
      </div>
      {/* detail bar */}
      <div className="px-[30px] py-[16px]">
        <div className="p-4 text-[20px] bg-[var(--highlight)] text-[var(--background)] rounded-lg grid grid-cols-4 text-center">
          <p>{blogs[0].blog_contents.created_at}</p>
          <p>{blogs[0].blog_contents.view} views</p>
          <p>{blogs[0].blog_contents.time} min read</p>
          <p>#{blogs[0].blog_types.blog_category_slug}</p>
        </div>
      </div>
      {/* blog content */}
      <div className="px-[30px] py-[16px]">
        <div className="grid grid-cols-3 gap-4">
          {/* blog table content */}
          <div className="grid-cols-subgrid col-span-1">
            <div className="toggle_table flex items-center justify-start gap-2 mb-[20px]">
              <div className="w-[18px] h-[18px] flex">
                <Down />
              </div>
              <p>Table of content</p>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              {blogs[0].blog_topics.map((topic) => {
                return (
                  <div>
                    <Link
                      href={`#${strHandle(topic.title)}`}
                      className="transition-all duration-300 hover:underline"
                    >
                      {topic.title}
                    </Link>
                    <div className="flex flex-col items-start justify-start gap-2">
                      {topic.sub_title.map((sub_topic) => {
                        return (
                          <Link
                            href={`#${strHandle(sub_topic.title)}`}
                            className="ms-[36px] transition-all duration-300 hover:underline"
                          >
                            {sub_topic.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid-cols-subgrid col-span-2">
            <div
              className="col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max prose-blockquote:bg-accent/20  prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg  prose-li:marker:text-accent dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark first-letter:text-3xl sm:first-letter:text-5xl"
              dangerouslySetInnerHTML={{
                __html: blogs[0].blog_contents.content,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
