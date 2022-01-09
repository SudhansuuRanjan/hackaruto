import './Main.css'
import TeamBP from './TeamBP';

const Team = () => {
    return (
        <div className='flex flex-col justify-center items-center '>
            <div className='m-[auto] max-w-lg'>
                <h3 className="text-center text-[#0094FF] pt-10">Team</h3>
                <h1 className="text-center text-[#000] font-extrabold text-4xl">
                    Meet the <span className='text-orange-500'> masterminds </span>behind it.
                </h1>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 m-[auto] mt-8'>
                <TeamBP/>
                <TeamBP/>
                <TeamBP/>
                <TeamBP/>    
            </div>
        </div>
    )
}

export default Team;