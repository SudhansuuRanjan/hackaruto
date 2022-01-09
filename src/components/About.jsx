import "./Main.css";
import vision from './../../resources/vision-image.png'
import about from './../../resources/about.jpg'
const About = () => {
  return (
    <div className="mt-5">
      <h3 className="text-center text-[#0094FF]">About</h3>
      <h1 className="text-center text-[#000] font-extrabold text-4xl">
        Not just any other
      </h1>
      <h1 className="text-center text-orange-500 font-extrabold text-4xl mt-2">
        Technical Club
      </h1>

      <div>
        <div className="flex container content-between items-center justify-center m-[auto] mt-20 mb-20 flex-col-reverse md:flex-col lg:flex-row">
          <div className='bg-orange-100 max-w-xs md:max-w-xl lg:max-w-xl lg:max-h-[22rem]'>
                <p className="text-orange-600 font-bold p-[2rem] pb-[0]">WHO WE ARE</p>
                <h2 className="text-orange-900 text-2xl font-extrabold p-[2rem] pb-[0rem] pt-[1rem]">Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
                <p className="text-gray-700 p-[2rem] pb-[3rem]">Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.</p>
          </div>
          <div>
            <img src={about} alt="" className="max-w-xs md:max-w-xl"/>
          </div>
      </div>
      </div>


      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center m-[auto] gap-[1rem] mt-[2rem] md:mt-[5rem] lg:m-[6rem] mb-[4rem]">
        <div className="bg-gray-200 max-w-xs text-center rounded-[1.5rem] border-b-4 border-box border-gray-200 hover:border-orange-500 ease-in duration-300 hover:drop-shadow-xl">
          <div className="m-[auto] flex items-center justify-center max-w-[4rem]
                   pt-10 pb-5 mt-5">
            <div className="p-2 bg-orange-500 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-trophy"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <line x1="7" y1="4" x2="17" y2="4" />
                <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                <circle cx="5" cy="9" r="2" />
                <circle cx="19" cy="9" r="2" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-extrabold">Find clients</h3>
          <p className="pt-5 pb-10 pl-5 pr-5">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
        </div>
        <div className="bg-gray-200 max-w-xs text-center rounded-[1.5rem]">
          <div
            className=" m-[auto] flex items-center justify-center max-w-[4rem]
                   pt-10 pb-5 mt-5"
          >
            <div className="p-2 bg-orange-500 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-trophy"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <line x1="7" y1="4" x2="17" y2="4" />
                <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                <circle cx="5" cy="9" r="2" />
                <circle cx="19" cy="9" r="2" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-extrabold">Find clients</h3>
          <p className="pt-5 pb-10 pl-5 pr-5">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
        </div>
        <div className="bg-gray-200 max-w-xs text-center rounded-[1.5rem]">
          <div
            className=" m-[auto] flex items-center justify-center max-w-[4rem]
                   pt-10 pb-5 mt-5"
          >
            <div className="p-2 bg-orange-500 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-trophy"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <line x1="7" y1="4" x2="17" y2="4" />
                <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                <circle cx="5" cy="9" r="2" />
                <circle cx="19" cy="9" r="2" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-extrabold">Find clients</h3>
          <p className="pt-5 pb-10 pl-5 pr-5">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
        </div>
      </div>

      <h1 className="text-center text-[#000] font-extrabold text-4xl">
        Our Vision
      </h1>
      <h1 className="text-center text-orange-500 font-extrabold text-4xl mt-2">
        and Motivation
      </h1>

          <div className="flex flex-col items-center lg:flex-row md:flex-row justify-center lg:justify-evenly m-[auto] mt-[2rem] content-around self-center items-center mb-[3rem]">
              <div className="mt-[2rem]">
                     <img src={vision} alt="" className="max-h-[32rem] " />
              </div>
              <div className="max-w-md mt-[2rem] md:max-w-md lg:max-w-lg">
                   <h2 className="text-2xl md:text-xl font-extrabold pl-10 pr-10">
                       <span className="text-orange-600 text-3xl  md:text-xl">“</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi ratione cupiditate<span className="text-orange-600 text-2xl md:text-xl">iste dolorum molestias</span> itaque! Quod optio itaque numquam, neque ea obcaecati quia illum enim est possimus <span className="text-orange-600 text-2xl md:text-xl">iste dolorum molestias</span> vero quam, vitae voluptas alias laudantium provident, et beatae cumque ipsa libero. Quos, similique optio! Iusto rerum <span className="text-orange-600 text-2xl md:text-xl">iste dolorum molestias</span>molestiae animi unde quam aperiam! Lorem ipsum dolor Lorem ipsum dolor sit amet. <span className="text-orange-600 text-3xl md:text-xl"> ”</span>
                   </h2>

                
              </div>
      </div>

      <div className="flex flex-col items-center justify-center">
           <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:max-w-[80%] m-[auto] mt-20 mb-20">
             <div className="flex rounded-2xl p-8 m-5 shadow-md items-center">
                   <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-smile" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="10" x2="9.01" y2="10" />
                        <line x1="15" y1="10" x2="15.01" y2="10" />
                        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                      </svg>
                   </div>
                   <div className="pl-5">
                     <h1 className="text-orange-500 text-3xl font-bold">
                         232
                     </h1>
                     <p>Happy Clients</p>
                   </div>
             </div>

              <div className="flex rounded-2xl p-8 m-5 shadow-md items-center">
                   <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-digit" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <rect x="9" y="12" width="3" height="5" rx="1" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <path d="M15 12v5" />
                      </svg>
                   </div>
                   <div className="pl-5">
                     <h1 className="text-orange-500 text-3xl font-bold">
                         521
                     </h1>
                     <p>Projects</p>
                   </div>
             </div>

              <div className="flex rounded-2xl p-8 m-5 shadow-md items-center">
                   <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop-analytics" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="4" width="18" height="12" rx="1" />
                        <path d="M7 20h10" />
                        <path d="M9 16v4" />
                        <path d="M15 16v4" />
                        <path d="M9 12v-4" />
                        <path d="M12 12v-1" />
                        <path d="M15 12v-2" />
                        <path d="M12 12v-1" />
                      </svg>
                   </div>
                   <div className="pl-5">
                     <h1 className="text-orange-500 text-3xl font-bold">
                         17+
                     </h1>
                     <p>Webinars and Workshops</p>
                   </div>
             </div>

              <div className="flex rounded-2xl p-8 m-5 shadow-md items-center">
                   <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-devices" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="13" y="8" width="8" height="12" rx="1" />
                        <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
                        <line x1="16" y1="9" x2="18" y2="9" />
                      </svg>
                   </div>
                   <div className="pl-5">
                     <h1 className="text-orange-500 text-3xl font-bold">
                         10
                     </h1>
                     <p>Hard Workers</p>
                   </div>
             </div>

           </div>  

           <div className="grid grid-cols-1 lg:grid-cols-3 m-[auto] items-center gap-10">
               <div className="max-w-sm md:max-w-lg lg:max-w-sm bg-sky-100 rounded-3xl">
                       <div className="p-2 pl-5 pt-8">
                             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a905b6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                              <rect x="4" y="5" width="16" height="16" rx="2" />
                              <line x1="16" y1="3" x2="16" y2="7" />
                              <line x1="8" y1="3" x2="8" y2="7" />
                              <line x1="4" y1="11" x2="20" y2="11" />
                              <line x1="11" y1="15" x2="12" y2="15" />
                              <line x1="12" y1="15" x2="12" y2="18" />
                            </svg>
                       </div>
                       <h1 className=" text-2xl font-bold p-2 pl-5">Sessions</h1>
                       <p className="text-gray-500 p-2 pl-5 pb-8">Learn and teach and the baton is passed Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ipsam?</p>
               </div>

               <div className="max-w-sm md:max-w-lg lg:max-w-sm bg-orange-100 rounded-3xl">
                       <div className="p-2 pl-5 pt-8">
                             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flag-3" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                              <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
                            </svg>
                       </div>
                       <h1 className=" text-2xl font-bold p-2 pl-5">Flagship Events</h1>
                       <p className="text-gray-500 p-2 pl-5 pb-8">Hackaruto is what put us on the map and define the way Webwiz moves forward. Lorem ipsum dolor sit amet.</p>
               </div>

               <div className="max-w-sm md:max-w-lg lg:max-w-sm bg-green-100 rounded-3xl">
                       <div className="p-2 pl-5 pt-8">
                             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-devices" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="13" y="8" width="8" height="12" rx="1" />
                            <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
                            <line x1="16" y1="9" x2="18" y2="9" />
                          </svg>
                       </div>
                       <h1 className=" text-2xl font-bold p-2 pl-5">Workshop</h1>
                       <p className="text-gray-500 p-2 pl-5 pb-8">We believe the best way to learn is through experiencing and we make sure we give you lots of it.</p>
               </div>

           </div>
      </div>

    </div>
  );
};

export default About;
