"use client";
import BlogCard from "@/components/blogs/card/BlogCard";
import { strHandle } from "@/utils/str";
import { blogs, categories } from "@/variables/global";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page(params) {
  // Get category from params
  const urlParams = useParams();
  const slug = urlParams.slug;
  const [filterBlogs, setFilterBlogs] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");


  // Check slug and category
  useEffect(() => {
    if (slug === "all") {
      setFilterBlogs(blogs);
      setCategoryTitle("all");
    }else {
      categories.forEach(cate => {
        if (cate.slug === slug) {
          setCategoryTitle(cate.name);
        }
      });
      const filter = blogs.filter(
        (blog) => blog.blog_types.blog_category_slug === slug
      );
      setFilterBlogs(filter);
    }

  }, [slug]);

  return (
    <div className="bg-[var(--background)] text-[var(--text)]">
      {/* Category header */}
      <div className="cate-header px-[100px] pt-[40px] pb-[30px]">
        <h1 className="text-[48px] font-[500]">#{categoryTitle}</h1>
        <p>Discover more categories and expand your knowledge!</p>
      </div>
      {/* Category bar */}
      <div className="mx-[30px] py-[30px] bg-[var(--background)] text-[var(--text)] flex items-center justify-center border-t-2 border-b-2 border-[var(--text)] gap-4">
        <Link
          href={"/categories/all"}
          className={`py-2 px-4 border-2 border-[var(--text)] rounded-full min-w-[140px] text-center lowercase hover:scale-[1.05] hover:bg-[var(--text)] hover:text-[var(--background)] transition-all duration-300 ease ${
            slug === "all"
              ? "bg-[var(--text)] text-[var(--background)]"
              : "bg-[var(--backgrounnd)] text-[var(--text)]"
          }`}
        >
          #all
        </Link>
        {categories.map((category) => {
          return (
            <Link
              href={"/categories/" + category.slug}
              className={`py-2 px-4 border-2 border-[var(--text)] rounded-full min-w-[140px] text-center lowercase hover:scale-[1.05] hover:bg-[var(--text)] hover:text-[var(--background)] transition-all duration-300 ease ${
                slug === category.slug
                  ? "bg-[var(--text)] text-[var(--background)]"
                  : "bg-[var(--backgrounnd)] text-[var(--text)]"
              }`}
            >
              #{category.slug}
            </Link>
          );
        })}
      </div>

      {/* Blog posts */}
      <div className="pt-[120px] bg-[var(--background)] text-[var(--text)] px-[100px]">
        <div className="grid grid-cols-3 gap-[60px]">
          {filterBlogs.length > 0 &&
            filterBlogs.map((blog) => {
              return (
                <BlogCard
                  title={blog.blog_contents.title}
                  category={blog.blog_types.blog_category_name}
                  image={blog.blog_contents.image}
                  slug={strHandle(blog.blog_contents.title)}
                  time={blog.blog_contents.created_at}
                  id={blog.blog_contents.id}
                  key={blog.blog_contents.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
