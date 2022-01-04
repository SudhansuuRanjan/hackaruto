import "./Main.css";
import vision from './../../resources/vision-image.png'
const About = () => {
  return (
    <div className="mt-5">
      <h3 className="text-center text-[#0094FF]">About</h3>
      <h1 className="text-center text-[#000] font-extrabold text-4xl">
        Not just any other
      </h1>
      <h1 className="text-center text-[#01D77D] font-extrabold text-4xl mt-2">
        Technical Club
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center m-[auto] gap-[1rem] mt-[2rem] md:mt-[5rem] lg:m-[6rem] mb-[4rem]">
        <div className="bg-gray-200 max-w-xs text-center rounded-[1.5rem]">
          <div className="m-[auto] flex items-center justify-center max-w-[4rem]
                   pt-10 pb-5 mt-5">
            <div className="p-2 bg-green-500 rounded-xl">
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
            <div className="p-2 bg-green-500 rounded-xl">
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
            <div className="p-2 bg-green-500 rounded-xl">
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
      <h1 className="text-center text-[#01D77D] font-extrabold text-4xl mt-2">
        and Motivation
      </h1>

          <div className="flex flex-col items-center lg:flex-row md:flex-row justify-center lg:justify-evenly m-[auto] mt-[2rem] content-around self-center">
              <div className="mt-[2rem]">
                     <img src={vision} alt="" className="max-h-[35rem]" />
              </div>
              <div className="max-w-md mt-[2rem]">
                   <h2 className="text-2xl font-extrabold pl-10 pr-10">
                       <span className="text-green-600 text-3xl">“</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi ratione cupiditate<span className="text-green-600 text-2xl">iste dolorum molestias</span> itaque! Quod optio itaque numquam, neque ea obcaecati quia illum enim est possimus <span className="text-green-600 text-2xl">iste dolorum molestias</span> vero quam, vitae voluptas alias laudantium provident, et beatae cumque ipsa libero. Quos, similique optio! Iusto rerum <span className="text-green-600 text-2xl">iste dolorum molestias</span>molestiae animi unde quam aperiam! Lorem ipsum dolor Lorem ipsum dolor sit amet. <span className="text-green-600 text-3xl"> ”</span>
                   </h2>

                
              </div>
      </div>
      

    </div>
  );
};

export default About;
