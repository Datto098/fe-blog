import Image from "next/image";
import Link from "next/link";
export default function BlogCard(params) {
  const {title, category, image, slug, time, id} = params;
  return (
    <div className="blog_card">
      <div className="card-image overflow-hidden rounded-[20px]">
        <Image
          src={"/blogs/" + image}
          className="transition-all duration-300 hover:scale-[1.1] w-full aspect-[4/3] h-full"
          width={1000}
          height={600}
        />
      </div>
      <div className="">
        <h3 className="mt-4 mb-2 pb-0 text-[var(--highlight)] font-[500] text-[14px] uppercase">
          {category}
        </h3>
        <Link href={"/blogs/" + slug + "_id" + id}>
          <h2 className="font-[500] text-[20px] mb-2">
           <span className="line_style">
           {title}
           </span>
          </h2>
        </Link>
        <p className="text-sm text-[var(--gray)]">{time}</p>
      </div>
    </div>
  );
}
