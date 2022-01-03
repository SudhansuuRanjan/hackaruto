import './Main.css'
import dots from '../../resources/Dots.png'
const Hero = () => {
    return (
        <div className='hero'>
           <div className="hero-left max-w-md">
               <h1 className='text-5xl text-black font-bold '>
                   <span className='text-black flex'>
                      Simplify your
                   </span>
                   <span className='text-green-500 flex'>
                       SEO strategy.
                   </span>
               </h1>
               <p className='text-md text-gray-500 my-2'>
                   Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
               </p>
               <div className='flex'>
                   <button className='bg-green-500 py-1.5 px-4 rounded-xl ml-0 mr-3 my-5 text-white'>Let's Work Together</button>
                   <button className='py-1.5 px-4 rounded-xl ml-0 mr-3 my-5 text-green-500 hover:bg-green-500 hover:text-white border-2  border-green-500 hover:border-white'>Join the team</button>
               </div>
           </div>
           <div className="bg-[url('https://media.istockphoto.com/vectors/gray-small-dots-gradient-on-white-background-vector-id666264768?k=20&m=666264768&s=612x612&w=0&h=YapkOeOrGgAH5FVKSbAxeAV1yvym5nTn4bDXeMm_EfM=')] bg-repeat-y">
               ugyqweuygw
           </div>
        </div>
    )
}

export default Hero