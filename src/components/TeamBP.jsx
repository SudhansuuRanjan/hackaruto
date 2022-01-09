import './Main.css'
import React from 'react'
import team from './../../resources/team.png'
import { AiOutlineGithub } from 'react-icons/ai';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';

const TeamBP = () => {
    return (
        <div className='m-8'>
            <img src={team} alt=""  className='rounded-3xl h-[20rem]'/>
            <h1 className='font-bold text-lg mt-4'>Mary Jane</h1>
            <h3 className='text-md mt-1 text-sky-500'>Founder & Web Lead</h3>
            <div className='flex'>
                <AiOutlineGithub className='text-4xl m-3 ml-0 bg-gray-200 rounded-[50%] p-1 text-gray-600 cursor-pointer'/>
                <TiSocialTwitter className='text-4xl m-3 ml-0 bg-gray-200 rounded-[50%] p-1 text-gray-600 cursor-pointer'/>
                <TiSocialLinkedin className='text-4xl m-3 ml-0 bg-gray-200 rounded-[50%] p-1 text-gray-600 cursor-pointer'/>
            </div>
        </div>
    )
}

export default TeamBP
