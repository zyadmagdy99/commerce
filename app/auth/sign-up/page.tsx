import { getCurrentSession, loginUser, registerUser } from '@/app/actions/auth'
import Signup from '@/app/component/auth/Signup';
import { redirect } from 'next/navigation';
import React from 'react'
import {z} from 'zod'

type ActionState = { message: string };

const SignupSchema = z.object({
email:z.string().email(),
password:z.string().min(5)
})

const SignUpPage =async () => {
    const {user} = await getCurrentSession();
    if (user){
       return redirect('/')
    }
    const action =async (prevState:ActionState|undefined,formData:FormData)=>{
        "use server"
        const parsed = SignupSchema.safeParse(Object.fromEntries(formData))
        if(!parsed.success){
            return {
                message :"Invalid Data"
            }
        }
        const {email,password} = parsed.data
        const {user,error} = await registerUser(email,password)
            if(error){
                return {
                    message : "Something went wrong"
                }}else if(user){
                    await loginUser(email,password)
                    return redirect('/')
                }
            }
    
  return <Signup action={action}/>
}

export default SignUpPage
