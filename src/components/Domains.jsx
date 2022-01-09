import './Main.css'
import domain from './../../resources/domains.svg'
import {TiTick} from 'react-icons/ti';

const Domains = () => {
    return (
        <div className='mt-8 flex flex-col'>
             <h3 className="text-center text-[#0094FF] pt-10">Domains</h3>
        <h1 className="text-center text-[#000] font-extrabold text-4xl">
            Hackaruto Domains
        </h1>

        <div className='flex m-[auto] justify-evenly items-center flex-col md:flex-col lg:flex-row mt-12 lg:gap-[3rem]'>
            <div>
                <img src={domain} alt="" className='max-w-sm md:max-w-md lg:max-w-md' />
            </div>
            <div className='mt-10'>
                <div className='flex items-center border-2 p-5 rounded-2xl m-2 ml-0 mr-0'>
                   <div className='bg-orange-100 h-[3rem] w-[3rem] flex justify-center items-center rounded-lg mr-5'>
                        <TiTick className='text-orange-500 text-4xl m-[auto]'/>
                   </div>
                    <h2 className='text-xl font-semibold'>Technical Team</h2>
                </div>

                 <div className='flex items-center border-2 p-5 rounded-2xl m-2  ml-0 mr-0'>
                   <div className='bg-orange-100 h-[3rem] w-[3rem] flex justify-center items-center rounded-lg mr-5'>
                        <TiTick className='text-orange-500 text-4xl m-[auto]'/>
                   </div>
                    <h2 className='text-xl font-semibold'>Projects Team</h2>
                </div>

                 <div className='flex items-center border-2 p-5 rounded-2xl m-2  ml-0 mr-0'>
                   <div className='bg-orange-100 h-[3rem] w-[3rem] flex justify-center items-center rounded-lg mr-5'>
                        <TiTick className='text-orange-500 text-4xl m-[auto]'/>
                   </div>
                    <h2 id='Events' className='text-xl font-semibold'>Design & Content Team</h2>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Domains;