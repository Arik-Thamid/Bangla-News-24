'use client'

import { signIn } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const page = () => {

     const onSubmit = async(e: React.SubmitEvent<HTMLElement>) =>{
            e.preventDefault()
    
            const formData = new FormData(e.target)
            const user = Object.fromEntries(formData.entries()) as 
            {
                email: string,
                password: string
            }
    
            const {data, error} = await signIn.email({
               ...user,
                rememberMe: true,
               callbackURL:'/'
            })
            if(data){
                redirect('/')
            }
            if(error){
                console.log(error)
            }
        }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" name='email' className='input' />

                    <label className="label">Password</label>
                    <input type="password" name='password' className='input' />

                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p className='text-center'>অ্যাকাউন্ট নেই? <Link href='/signup' className="text-red-600 hover:underline">সাইন আপ করুন</Link></p>
            </form>
        </div>
    );
};

export default page;