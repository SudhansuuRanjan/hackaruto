import './Main.css'
import coding from '../../resources/5522876.jpg'
import fitbit from '../../resources/fitbit.svg'
import airbnb from '../../resources/airbnb.svg'
import google from '../../resources/google.svg'
import nasa from '../../resources/nasa.svg'
import homeimg from '../../resources/home-img.svg'

const Hero = () => {
    
    return (
        <div className='hero flex flex-col items-center justify-center lg:justify-evenly mt-[8rem] lg:ml-[3rem] lg:flex-row '>
           <div className="hero-left max-w-sm">
               <h1 className='text-4xl lg:text-5xl text-black font-bold '>
                   <span className='text-black flex'>
                      Simplify your
                   </span>
                   <span className='text-orange-500 flex'>
                       SEO strategy.
                   </span>
               </h1>
               <p className='text-md text-gray-500 my-4 max-w-xs md:max-w-lg lg:max-w-lg'>
                   Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quasi.
               </p>
               <div className='flex flex-col lg:flex-row my-5'>
                   <button className='bg-orange-500 py-2 px-4 rounded-xl ml-0 mr-3 my-0 text-white'>Let's Work Together</button>
                   <button className='py-2 px-4 rounded-xl ml-0 mr-3 my-5 lg:my-0 text-orange-500 hover:bg-orange-500 hover:text-white border-2  border-orange-500 hover:border-white'>Join the team</button>
               </div>
               <div className='mt-[0.5rem]'>
                   <p className='text-gray-400'>
                       TRUSTED BY:
                   </p>
                   <div className='justify-center grid items-center mt-[0.5rem] grid-cols-2 lg:grid-cols-4'>
                       <img src={fitbit} alt="" className='' />
                       <img src={nasa} alt="" className='' />
                       <img src={google} alt="" className='' />
                       <img src={airbnb} alt="" className='' />
                   </div>
               </div>
           </div>
           <div className="z-1">
               <img src={homeimg} alt="" className='h-[28rem] z-1  mt-[-2rem] md:mt-[0rem] lg:ml-[5rem] lg:mt-[1rem]'/>
           </div>
        </div>
    )
}

export default Hero