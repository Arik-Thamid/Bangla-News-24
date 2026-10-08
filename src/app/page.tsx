import MainNews from '@/components/MainNews';
import Marquee from '@/components/Marquee';
import MostRead from '@/components/MostRead';
import NewsCard from '@/components/NewsCard';
import React from 'react';

interface IOthersSection{
  curationId: string
  title: string
  articles:{
    id: string
    title: string
    description: string
    category: string
    imageUrl: string
    imageAlt: string
  }[]
}

const page = async () => {

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  const allData = data.data
  const mainNews = allData[0].articles
  const otherNews:IOthersSection[] = allData.slice(1)


  return (
    <div>
      <div className='grid grid-cols-3'>

        {/*Main news*/}
        <div className='col-span-2 '>
          <MainNews news={mainNews} />

          <div className='grid gap-5 px-4 py-4'>
            {
              otherNews.map(item => <div key={item.curationId} >
                <h1 className='mb-4 pb-2 font-bold text-xl border-b-3 border-red-700'>{item.title}</h1>

                <div className='grid grid-cols-3 gap-4 my-5 '>
                  {
                    item.articles.map(news => <NewsCard key={news.id} news={news} />)
                  }
                </div>

              </div>
              )
            }
          </div>

        </div>

        {/*right col*/}
        <div className='col-span-1 px-4 py-4'>
            <MostRead/>
        </div>

      </div>
    </div>
  );
};

export default page;