import './Main.css'
const Contact = () => {
    return (
        <div>
           <h3 className="text-center text-[#0094FF] pt-10">Contact</h3>
        <h1 className="text-center text-[#000] font-extrabold text-4xl">
            Contact Us
        </h1>

        <div className='flex flex-col justify-evenly items-center'>
            

            <div className='flex flex-col justify-evenly md:gap-[5rem] mt-12 md:flex-row'>
                <div className='bg-orange-50 max-w-lg rounded-xl  w-[20rem] mt-5'>
                    <div className='p-5 pb-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg> 
                    </div> 
                    <h2 className='text-xl font-bold text-orange-900 pl-5'>Call Us</h2>
                    <h3 className='text-gray-500 pl-5 pb-3'>+1 5589 55488 53</h3>
                </div>
                <div className='bg-orange-50 max-w-lg rounded-xl w-[20rem] mt-5'>
                    <div className='p-5 pb-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                        </svg>
                    </div>
                    <h2 className='text-xl font-bold text-orange-900 pl-5'>Mail Us</h2>
                    <h3 className='text-gray-500 pl-5 pb-3'>hackaruto.nitp@gmail.com</h3>
                </div>
            </div>

            <div className='bg-orange-50 rounded-2xl max-w-xs md:max-w-3xl text-center mt-5 md:mt-12'>
                <h1 className='font-bold text-2xl text-orange-800 mt-5 mb-5'>
                    Wanna join our team?
                </h1>
                <p className='text-gray-500 pl-12 pr-12'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero optio iste corporis! Porro dignissimos in impedit amet architecto, rerum voluptatem?
                </p>
                <button className='pt-2 pb-2 pl-6 pr-6 bg-orange-500 rounded-xl text-white m-8'>Register</button>

            </div>
            

            </div>

        </div>
    )
}

export default Contact;