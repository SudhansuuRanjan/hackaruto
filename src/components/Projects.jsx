import './Main.css'
import project from './../../resources/project.png'
import { AiOutlineGithub } from 'react-icons/ai';
import {BiLink} from 'react-icons/bi';

const Projects = () => {
    return (
        <div className='mt-10 flex flex-col'>
            <h3 className="text-center text-[#0094FF] pt-10">Projects</h3>
        <h1 className="text-center text-[#000] font-extrabold text-4xl">
            Our Projects
        </h1>

        <div className='grid lg:grid-cols-3 m-[auto]'>
               <div className='max-w-xs m-12'>
                   <img src={project} alt="" className='rounded-3xl' />
                   <h2 className='pt-8 pb-5 font-bold text-xl pl-0'>
                       Meditation App
                   </h2>
                   <p className='text-gray-600 pb-3 text-sm'>
                       How systematic ASO helped this meditation app reach over 6 Million users
                   </p>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-gray-400 text-sm'>Sudhanshu | 20.04.2022</p>
                       <div className='text-gray-500 flex'>
                        <AiOutlineGithub className='text-3xl mr-3 cursor-pointer'/>
                        <BiLink className='text-3xl cursor-pointer' />
                    </div>
                    </div>
               </div>

               <div className='max-w-xs m-12'>
                   <img src={project} alt="" className='rounded-3xl' />
                   <h2 className='pt-8 pb-5 font-bold text-xl pl-0'>
                       Meditation App
                   </h2>
                   <p className='text-gray-600 pb-3 text-sm'>
                       How systematic ASO helped this meditation app reach over 6 Million users
                   </p>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-gray-400 text-sm'>Sudhanshu | 20.04.2022</p>
                       <div className='text-gray-500 flex'>
                        <AiOutlineGithub className='text-3xl mr-3 cursor-pointer'/>
                        <BiLink className='text-3xl cursor-pointer' />
                    </div>
                    </div>
               </div>

               <div className='max-w-xs m-12'>
                   <img src={project} alt="" className='rounded-3xl' />
                   <h2 className='pt-8 pb-5 font-bold text-xl pl-0'>
                       Meditation App
                   </h2>
                   <p className='text-gray-600 pb-3 text-sm'>
                       How systematic ASO helped this meditation app reach over 6 Million users
                   </p>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-gray-400 text-sm'>Sudhanshu | 20.04.2022</p>
                       <div className='text-gray-500 flex'>
                        <AiOutlineGithub className='text-3xl mr-3 cursor-pointer'/>
                        <BiLink className='text-3xl cursor-pointer' />
                    </div>
                    </div>
               </div>
        </div>
        </div>
    )
}

export default Projects;