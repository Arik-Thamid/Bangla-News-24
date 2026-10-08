'use client'
import { authClient, signOut, useSession } from '@/lib/auth-client';

import Link from 'next/link';


const AuthBtn = () => {

    const { data: session } = useSession()
    const user = session?.user
    const handlerSignOut = async()=>{
        await signOut();
    }

    return (

        <div>

            {
                user ? <div className="absolute right-4 top-4 flex items-center gap-2">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
                            <img alt="User Profile" src={user?.image} />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-lg font-bold'>{user?.name}</h2>
                        <h2 className='text-sm text-gray-500'>{user?.email}</h2>
                    </div>
                    <button onClick={handlerSignOut} className='btn btn-error'>Sign Out</button>

                </div> :
                    <div className="absolute right-4 top-4 flex items-center gap-2">
                        <Link href='/signin'>
                            <button className="btn btn-sm">
                                সাইন ইন
                            </button>
                        </Link>

                        <Link href='/signup'>
                            <button className="bg-red-500 text-white btn btn-sm">
                                সাইন আপ
                            </button>
                        </Link>
                    </div>
            }


        </div>
    );
};

export default AuthBtn;