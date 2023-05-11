import React from "react";
import Laptop from "../Assets/laptop.jpg"
const Analytic = () =>{
    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt='Error '/>
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold ">DATA ANALYST DASHBOARD </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p>Việc lựa chọn một nghề nghiệp phù hợp là một trong những quyết định quan trọng nhất của cuộc đời. Nó không chỉ ảnh hưởng đến sự
                        thành công và hạnh phúc cá nhân mà còn ảnh hưởng đến cả gia đình và xã hội.Để chọn được nghề nghiệp phù hợp, chúng ta cần tìm hiểu bản thân mình, điểm mạnh và điểm yếu của bản thân, đam mê và khả năng. Đồng thời, cần tìm hiểu về các ngành nghề, xu hướng phát triển của thị
                        trường lao động để có thể đưa ra quyết định đúng đắn.</p>
                    <button className='bg-black text-[#00df9a] w-[150px] md:w-[200px] rounded font-medium my-6 mx-auto   px-6 py-2 truncate'>Get Started</button>
                </div>

            </div>
        </div>
    )
}
export  default  Analytic