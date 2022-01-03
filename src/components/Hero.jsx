import './Main.css'
import coding from '../../resources/5522876.jpg'
import fitbit from '../../resources/fitbit.svg'
import airbnb from '../../resources/airbnb.svg'
import google from '../../resources/google.svg'
import nasa from '../../resources/nasa.svg'
import homeimg from '../../resources/home-img.svg'

const Hero = () => {
    
    return (
        <div className='hero flex items-center justify-evenly mt-[8rem] ml-[3rem]'>
           <div className="hero-left max-w-md">
               <h1 className='text-5xl text-black font-bold '>
                   <span className='text-black flex'>
                      Simplify your
                   </span>
                   <span className='text-green-500 flex'>
                       SEO strategy.
                   </span>
               </h1>
               <p className='text-md text-gray-500 my-4'>
                   Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quasi.
               </p>
               <div className='flex'>
                   <button className='bg-green-600 py-1.5 px-4 rounded-xl ml-0 mr-3 my-5 text-white'>Let's Work Together</button>
                   <button className='py-1.5 px-4 rounded-xl ml-0 mr-3 my-5 text-green-600 hover:bg-green-600 hover:text-white border-2  border-green-600 hover:border-white'>Join the team</button>
               </div>
               <div className='mt-[0.5rem]'>
                   <p className='text-gray-400'>
                       TRUSTED BY:
                   </p>
                   <div className='flex items-center mt-[0.5rem]'>
                       <img src={fitbit} alt="" className='' />
                       <img src={nasa} alt="" className='' />
                       <img src={google} alt="" className='' />
                       <img src={airbnb} alt="" className='' />
                   </div>
               </div>
           </div>
           <div className="z-1">
               <img src={homeimg} alt="" className='h-[28rem] z-1 ml-[5rem] mt-[1rem]'/>
           </div>
        </div>
    )
}

export default Hero