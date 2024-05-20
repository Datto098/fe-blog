"use client";
import { strHandle } from "@/utils/str";
import { blogs } from "@/variables/global";
import {
  faAnglesUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const index = 0;
export default function page(params) {
  const param = useParams();
  const slug = param.slug;
  const [showTableContent, setShowTableContent] = useState(true);
  const [blog, setBlog] = useState(null);
  const tableContentViewRef = useRef(null);
  const tableContentViewParentRef = useRef(null);

  // Change position of table content view when scrolling
  useEffect(() => {
    const windowScrollHandler = () => {
      if (tableContentViewRef.current && tableContentViewParentRef.current) {
        const rect = tableContentViewParentRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          tableContentViewRef.current.style.maxWidth = tableContentViewParentRef.current.offsetWidth + "px";
          tableContentViewRef.current.classList.add("active_position");
        } else if (rect.top > 0) {
          tableContentViewRef.current.classList.remove("active_position");
        }
      }
    };

    window.addEventListener("scroll", windowScrollHandler);

    return () => {
      window.removeEventListener("scroll", windowScrollHandler);
    };
  }, []);

  useEffect(() => {
    const parts = slug.split("_id");
    const id = parseInt(parts[1]);

    blogs.forEach((blog) => {
      if (blog.blog_contents.id === id) {
        setBlog(blog);
      }
    });
  }, [slug]);

  return (
    blog && (
      <div className="bg-[var(--background)] text-[var(--text)]">
        {/* blog banner */}
        <div className="relative h-[70vh] overflow-hidden">
          {/* banner overlay */}
          <div className="overlay_bg absolute top-0 left-0 right-0 bottom-0 h-full bg-gradient-to-tl from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.1)] z-10"></div>
          {/* banner image */}
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-left-top">
            <Image
              src={`/blogs/${blog.blog_contents.image}`}
              width={10000}
              height={10000}
              className="aspect-square w-full h-full object-cover object-center"
            />
          </div>
          {/* banner content */}
          <div className="absolute z-10 top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] flex items-center justify-center flex-col gap-[30px]">
            <Link
              href={"/categories/" + blog.blog_types.blog_category_slug}
              className="px-[30px] border-2 border-[var(--text)] py-3 rounded-full bg-[var(--background)] capitalize text-[var(--text)] "
            >
              {blog.blog_types.blog_category_name}
            </Link>
            <h1 className="text-[42px] text-center font-[500] text-white">
              {blog.blog_contents.title}
            </h1>
          </div>
        </div>
        {/* detail bar */}
        <div className="px-[30px] py-[16px]">
          <div className="p-4 text-[20px] bg-[var(--highlight)] text-[var(--background)] rounded-lg grid grid-cols-4 text-center">
            <p>{blog.blog_contents.created_at}</p>
            <p>{blog.blog_contents.view} views</p>
            <p>{blog.blog_contents.time} min read</p>
            <p>#{blog.blog_types.blog_category_slug}</p>
          </div>
        </div>
        {/* blog content */}
        <div className="px-[30px] py-[16px]">
          <div className="grid grid-cols-3 gap-4">
            {/* blog table content */}
            <div
              className="grid-cols-subgrid col-span-1"
              ref={tableContentViewParentRef}
            >
              <div
                className={`p-4 border-2 border-[var(--gray)] bg-[var(--background)] text-[var(--text)]`}
                ref={tableContentViewRef}
              >
                <div
                  className="toggle_table select-none cursor-pointer flex items-center justify-start gap-2"
                  onClick={() => {
                    setShowTableContent((prev) => {
                      return !prev;
                    });
                  }}
                >
                  <div
                    className="flex items-center justify-center transition-all duration-300 ease-linear"
                    style={
                      showTableContent
                        ? { transform: "rotate(-90deg)" }
                        : { transform: "rotate(0deg)" }
                    }
                  >
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="w-[18px] h-[18px]"
                    />
                  </div>
                  <p>Table of content</p>
                </div>
                {showTableContent && (
                  <div className="mt-[20px] flex flex-col items-start justify-start gap-4">
                    {blog.blog_topics.map((topic) => {
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
                )}
              </div>
            </div>
            <div className="grid-cols-subgrid col-span-2">
              <div
                className="col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max prose-blockquote:bg-accent/20  prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg  prose-li:marker:text-accent dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark first-letter:text-3xl sm:first-letter:text-5xl"
                dangerouslySetInnerHTML={{
                  __html: blog.blog_contents.content,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <Link
          href={"#header"}
          className="w-[46px] h-[46px] flex items-center justify-center text-[22px] shadow-lg rounded-full fixed bottom-4 right-4 bg-[var(--text)] text-[var(--highlight)]"
        >
          <FontAwesomeIcon icon={faAnglesUp} />
        </Link>
      </div>
    )
  );
}
