import Image from 'next/image';
import Link from 'next/link';

interface INews {
    id: string
    title: string
    description: string
    category: string
    imageUrl: string
    imageAlt: string
}

const NewsCard = ({ news }: { news: INews }) => {
    console.log(news)
    return (
        <Link href={`/news/${news.id}`}>

            <div className="card bg-base-100  shadow-sm">
                <figure>
                    <Image
                        width={600}
                        height={600}
                        src={news.imageUrl}
                        alt={news.imageAlt}
                        className="w-full"
                    />
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-sm text-red-600">
                        {news.category}
                    </h2>

                    <p className="text-lg font-bold">
                        {news.title}
                    </p>

                    <p className="text-gray-600">
                        {news.description}
                    </p>
                </div>
            </div>

            
        </Link>
    );
};

export default NewsCard;