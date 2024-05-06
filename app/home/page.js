import FeaturedPosts from "@/components/Home/FeaturedPosts";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import RecentPosts from "@/components/Home/RecentPosts";
export default function HomePage(params) {
    const allBlogs = [
        {
            title: 'How to build a blog with Next.js 0',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: "",
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y'
            },
            publishedAt: '2023-01-01'

        },
        {
            title: 'How to build a blog with Next.js 1',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y'
            },
            publishedAt: '2019-01-01'
        },
        ,
        {
            title: 'How to build a blog with Next.js 2',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y'
            },
            publishedAt: '2019-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }
        ,
        {
            title: 'How to build a blog with Next.js 3',
            description: 'This is a blog post that explains how to build a blog with Next.js',
            tags: ['Next.js', 'React', 'JavaScript'],
            url: 'how-to-build-a-blog-with-nextjs',
            image: {
                filePath: '',
                blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIDc2Vz0vDUBiH7y',
                width: '300px',
                height: '300px'
            },
            publishedAt: '2018-01-01'
        }

    ];
    return (
        <main className="flex flex-col items-center justify-center">
            <HomeCoverSection blogs={allBlogs} />
            <FeaturedPosts blogs={allBlogs}/>
            <RecentPosts blogs={allBlogs}/>
      </main>
    )
};



