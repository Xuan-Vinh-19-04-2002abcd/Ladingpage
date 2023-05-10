import React, {useState} from "react";

const Newsletter = () =>{
    const [email,setEmail] = useState('')
    const handleSubmit = () =>
    {
        alert(`Địa chỉ email của bạn là ${email}`)
    }
    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
        console.log(email)
    }
    return (
        <div className="text-white w-full py-16">
                <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
                        <div className="lg:col-span-2">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want trip & tricks to optimize your flows ?</h1>
                            <p>Sign up to our newsletters and stay up to date. </p>
                        </div>
                        <div className="my-4">
                            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                                <input value={email} onChange={onChangeEmail} type="email" placeholder="Enter Email" className="p-3 flex w-full rounded-md text-black"/>
                                <button onClick={handleSubmit} className='bg-[#00df9a] text-white w-[150px] md:w-[200px] rounded font-medium md:ml-4 my-6 mx-auto px-6 py-2 truncate'>Notify me</button>
                            </div>
                            <p>We care bout the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy</span></p>
                        </div>

                </div>
        </div>
    )
}
export  default  Newsletter