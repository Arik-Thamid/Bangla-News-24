import NewsCard from '@/components/NewsCard';

interface ICategoryNews{
    title: string
    id: string
    description: string
    category: string
    imageUrl: string
    imageAlt: string
}

const CategoryPage = async ({ params }:{params:{categoryid: string}}) => {
    const { categoryid } = await params
    console.log(categoryid)

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryid}`)
    const data = await res.json()
    const news:ICategoryNews[] = data.data
    console.log(news)
    return (
        <div className='grid gap-5 px-4 py-4'>

            <h1 className='py-2 font-bold text-xl border-b-3 border-red-700'>{data.title}</h1>

            <div className='grid grid-cols-3 gap-4  '>
                {
                    news.map(item => <div key={item.id}>
                        <NewsCard news={item} />
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryPage;