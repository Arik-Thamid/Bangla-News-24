'use client'
import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";


const SignUpPage = () => {

    const onSubmit = async(e: React.SubmitEvent<HTMLElement>) =>{
        e.preventDefault()

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as 
        {
            name: string,
            email: string
            image: string
            password: string
        }

        const {data, error} = await signUp.email({
           ...user,
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

                    <label className="label">নাম</label>
                    <input type="text" className="input" name="name" />

                    <label className="label">Image</label>
                    <input type="url" className="input" name="image" />

                    <label className="label">ইমেইল</label>
                    <input type="email" className="input" name="email" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input type="password" className="input" name="password" />

                    <button type="submit" className="btn btn-neutral mt-4">সাইন আপ করুন</button>

                </fieldset>
                <p className="text-center">অ্যাকাউন্ট আছে?  <Link href='/signin' className="text-red-600 hover:underline">সাইন ইন করুন</Link></p>
            </form>

            
        </div>
    );
};

export default SignUpPage;