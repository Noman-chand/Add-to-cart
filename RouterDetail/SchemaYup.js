import * as Yup from 'yup'

export const signUpSchema = Yup.object({
name:Yup.string().min(2).max(25).required("please Enter Your Name"),
email:Yup.string().email().required("please Enter your Emial"),
password:Yup.string().max(6).required("please enter Your password"),
confirm_password:Yup.string().required().oneOf([Yup.ref("password"),null,],
 "password must be match")
})
