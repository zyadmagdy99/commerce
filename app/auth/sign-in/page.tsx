import { getCurrentSession, loginUser } from '@/app/actions/auth'
import Signin from '@/app/component/auth/Signin';
import { redirect } from 'next/navigation';
import React from 'react'
import {z} from 'zod'

type ActionState = { message: string };

const SigninSchema = z.object({
email:z.string().email(),
password:z.string().min(5)
})

const SignInPage =async () => {
    const {user} = await getCurrentSession();
    if (user){
       return redirect('/')
    }
    const action =async (prevState:ActionState|undefined,formData:FormData)=>{
        "use server"
        const parsed = SigninSchema.safeParse(Object.fromEntries(formData))
        if(!parsed.success){
            return {
                message :"Invalid Data"
            }
        }
        const {email,password} = parsed.data
        const {user,error} =  await loginUser(email,password)
            if(error){
                return {
                    message : "Something went wrong"
                }}else if(user){
                    return redirect('/')
                }
            }
    
  return <Signin action={action}/>
}

export default SignInPage
