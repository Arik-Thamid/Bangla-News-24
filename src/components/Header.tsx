import Image from 'next/image';
import React from 'react';
import NavLinks from './NavLinks';
import AuthBtn from './AuthBtn';

const Header = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full',
    });

    return (
        <header className="w-full">

            <div className="relative mx-auto max-w-7xl  px-4 py-4">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center items-center">
                    <Image
                        className="w-8 h-8"
                        src="/logo.webp"
                        alt="Bangla News 24 logo"
                        height={50}
                        width={50}
                    />

                    <div className='flex flex-col items-center sm:items-start'>
                        <h1 className="text-red-600 text-2xl font-bold">
                            Bangla News 24
                        </h1>

                        <p className="text-gray-400 text-[8px] font-bold">
                            {date}
                        </p>
                    </div>
                </div>

               <AuthBtn/>
            </div>

            <NavLinks></NavLinks>

        </header>
    );
};

export default Header;