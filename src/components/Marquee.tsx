import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface Itype{
    id: string
    title: string
}

const Marquee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json()
    const news:Itype[] = data.data

    return (
        <div className="bg-red-700 text-white my-4">
            <div className="max-w-7xl mx-auto flex  text-sm">
                <span className="py-1 px-5 bg-red-800 font-bold">সর্বশেষ</span>
                <MarqueeText className="py-1" direction="right" pauseOnHover duration={8}>
                    {
                        news.map((item) => <Link href={`/news/${item.id}`} key={item.id}>
                            <span className="hover:underline">{item.title}</span>
                            <span className="mx-4">•</span>
                        </Link>)
                    }
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;