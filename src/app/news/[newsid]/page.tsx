import Image from 'next/image';
import { notFound } from "next/navigation";


const NewsdetailsPage = async ({ params }: { params: { newsid: string } }) => {

    const { newsid } = await params

    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsid}`)

      if (!res.ok) {
        notFound()
    }

    const data = await res.json()
    const news = data.data

    if (!news) {
        notFound()
    }

     const publishedDate = new Date(news.firstPublished).toLocaleDateString(
        "bn-BD",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    );

    const publishedTime = new Date(news.firstPublished).toLocaleTimeString(
        "bn-BD",
        {
            hour: "numeric",
            minute: "numeric",
        }
    )

    
    return (
        <main className="bg-white">
            <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">

                {/* Title */}
                <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                    {news.title}
                </h1>

                {/* Description */}
                <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                    {news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text}
                </p>

                {/* Author & Date */}
                <div className="mt-5 border-b border-gray-200 pb-5 text-sm text-gray-500">
                    {news.byline?.map(
                        (author: { name: string; role: string }) => (
                            <div key={author.name}>
                                <p className="font-semibold text-gray-700">
                                    {author.name}
                                </p>

                                <p>{author.role}</p>
                            </div>
                        )
                    )}

                    <div className="mt-2 flex flex-wrap gap-2">
                        <span>{publishedDate}</span>
                        <span>•</span>
                        <span>{publishedTime}</span>
                    </div>
                </div>

                {/* Article Body */}
                <div className="mt-6">
                    {news.body?.map(
                        (
                            item: {
                                type: string;
                                text?: string;
                                url?: string;
                                width?: number;
                                height?: number;
                                caption?: string | null;
                                altText?: string;
                                copyrightHolder?: string;
                            },
                            index: number
                        ) => {
                            /* Text */
                            if (item.type === "text") {
                                return (
                                    <div
                                        key={index}
                                        className="mb-6 whitespace-pre-line text-[17px] leading-8 text-gray-800"
                                    >
                                        {item.text}
                                    </div>
                                );
                            }

                            /* Subheading */
                            if (item.type === "subheading") {
                                return (
                                    <h2
                                        key={index}
                                        className="mb-5 mt-10 text-2xl font-bold leading-tight text-gray-900"
                                    >
                                        {item.text}
                                    </h2>
                                );
                            }

                            /* Image */
                            if (item.type === "image" && item.url) {
                                return (
                                    <figure key={index} className="my-8">
                                        <div className="overflow-hidden rounded-lg">
                                            <Image
                                                src={item.url}
                                                alt={item.altText || news.title}
                                                width={item.width || 1200}
                                                height={item.height || 675}
                                                className="h-auto w-full object-cover"
                                            />
                                        </div>

                                        {(item.caption ||
                                            item.copyrightHolder ||
                                            item.altText) && (
                                                <figcaption className="mt-2 text-xs leading-5 text-gray-500">
                                                    {item.caption || item.altText}

                                                    {item.copyrightHolder && (
                                                        <span>
                                                            {" "}
                                                            (
                                                            {
                                                                item.copyrightHolder
                                                            }
                                                            )
                                                        </span>
                                                    )}
                                                </figcaption>
                                            )}
                                    </figure>
                                );
                            }

                            return null;
                        }
                    )}
                </div>

                {/* Topics */}
                {news.topics?.length > 0 && (
                    <div className="mt-10 border-t border-gray-200 pt-5">
                        <div className="flex flex-wrap gap-2">
                            {news.topics.map(
                                (topic: {
                                    id: string;
                                    name: string;
                                }) => (
                                    <span
                                        key={topic.id}
                                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                                    >
                                        {topic.name}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                )}

                {/* Tags */}
                {news.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {news.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="text-sm text-gray-500"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Source */}
                <div className="mt-10 border-t border-gray-200 pt-5 text-sm text-gray-500">
                    Source: BBC Bangla
                </div>
            </article>
        </main>
    );
};

export default NewsdetailsPage;