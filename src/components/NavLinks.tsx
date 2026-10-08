import Link from 'next/link';
import React from 'react';

interface Navs  {
    slug: string
    title: string
    topicId: string | null
    url: string
    scrapable: boolean
}

const NavLinks = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const catagoryData = await res.json()
    const navs:Navs[] = catagoryData.data
    const filterNavs = navs.filter(item => item.scrapable)

    return (
        <div className='flex justify-center items-center gap-2 text-[12px]'>
            <Link className='hover:underline' href='/'>হোম</Link>
            {
                filterNavs.map((item, idx) => <Link className='hover:underline' key={idx} href={`/category/${item.slug}`}>
                    {item.title}
                </Link>)
            }
        </div>
    );
};

export default NavLinks;