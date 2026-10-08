import Link from "next/link";

interface IMostReadType {
    id: string
    rank: number
    title: string

}
const MostRead = async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const MostReadData = await res.json()
    const data: IMostReadType[] = MostReadData.data

    return (
        <div className='px-4 py-4 card bg-base-100 border border-gray-300 rounded-xl '>
            <h1 className='text-2xl font-bold'>সর্বাধিক পঠিত</h1>
            <div className='grid gap-3 py-3'>
                {
                    data.map(item => <div key={item.id}>

                        <Link href={`/news/${item.id}`}>
                            <div className='flex font-bold gap-4'>
                                <span className='text-red-700 text-xl'>{item.rank}</span>
                                <p className='text-sm hover:underline'>{item.title}</p>
                            </div>
                        </Link>

                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default MostRead;