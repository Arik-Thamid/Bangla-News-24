
import Image from "next/image";
import Link from "next/link";

interface Inews {
    id: string
    description: string
    imageUrl: string
    imageAlt: string
    title: string
    category: string
}

const MainNews = ({ news }: { news: Inews[] }) => {
    const [firstNews, ...otherNews] = news;
    console.log(firstNews)
    return (
        <div className="px-4 py-4 flex gap-6">
            {/* First News */}
            <Link href={`/news/${firstNews.id}`}>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <Image
                            width={600}
                            height={600}
                            src={firstNews.imageUrl}
                            alt={firstNews.imageAlt}
                            className="w-full"
                        />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title text-sm text-red-600">
                            {firstNews.category}
                        </h2>

                        <p className="text-lg font-bold">
                            {firstNews.title}
                        </p>

                        <p className="text-gray-600">
                            {firstNews.description}
                        </p>
                    </div>
                </div>
            </Link>

            {/* Other News */}
            <div className="flex-1 border border-gray-300 rounded-xl overflow-hidden">
                {otherNews.slice(0, 4).map((oNews) => (
                    
                        <Link href={`/news/${oNews.id}`} key={oNews.id}
                            className="card bg-base-100 rounded-none px-3 py-4 border-b border-gray-300 last:border-b-0"
                        >
                            <p className="text-sm text-red-600 font-bold">
                                {oNews.category}
                            </p>

                            <p className="font-semibold hover:underline">
                                {oNews.title}
                            </p>
                        </Link>
                    
                ))}
            </div>
        </div>
    );
};

export default MainNews;

