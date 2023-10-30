import Image from 'next/image';
import React, { useState } from 'react';

type MainPlayerProps = {
    showLibrary: boolean;
    toggleLibrary: () => void;
};


const MainPlayer: React.FC<MainPlayerProps> = ({ showLibrary, toggleLibrary }) => {
    return (
        <>
        <main className='font-semibold'>
            <div className="flex justify-around min-h-[10vh] items-center text-2xl ">
                <h1 className=''>Scuik</h1>
                <button className='b' onClick={toggleLibrary}>Library</button>
            </div>
            <div className='flex mt-[10vh] min-h-[50vh] max-h-[60vh] flex-col items-center justify-center'>
                <Image className=' rounded-lg'
                    src="https://media.discordapp.net/attachments/1152778526332821649/1166651945054900224/F9RVzD4XYAA7A3F.png"
                    alt="placeholder"
                    width={500}
                    height={500}
                />
                <h1 className='text-3xl pt-8 pb-4'>Title Placeholder</h1>
                <h1>Artist Placeholder</h1>
            </div>
            <div className='flex flex-col justify-around items-center min-h-[15vh]'>
                <div className='flex flex-row w-1/2 justify-center items-center'>
                    <p className='px-8'>0:00</p>
                    <div className='w-full h-[1rem] relative rounded-lg overflow-hidden bg-transparent border-2'>
                        <input min="0" max="137.195102" type="range" value={0} className='w-full bg-transparent cursor-pointer appearance-none outline-none'/>
                    </div>
                    <p className='px-8'>99:99</p>
                </div>
                <div className='flex flex-row items-center justify-between w-[30%]'>
            
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="32px" height="32px" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M18.4,21.8 L6.4,12.8 C5.86666667,12.4 5.86666667,11.6 6.4,11.2 L18.4,2.2 C19.0592363,1.70557281 20,2.17595468 20,3 L20,21 C20,21.8240453 19.0592363,22.2944272 18.4,21.8 Z M18,5 L8.66666667,12 L18,19 L18,5 Z M6,22 L4,22 L4,2 L6,2 L6,22 Z"/>
                    </svg>
                </button>

                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="32px" height="32px" viewBox="0 0 24 24">
                       <path fill-rule="evenodd" d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M8,17 L8,7 C8,6.21456446 8.86395093,5.73572169 9.52999894,6.1520017 L17.5299989,11.1520017 C18.156667,11.5436692 18.156667,12.4563308 17.5299989,12.8479983 L9.52999894,17.8479983 C8.86395093,18.2642783 8,17.7854355 8,17 Z M15.1132038,12 L10,8.80424764 L10,15.1957524 L15.1132038,12 Z"/>
                    </svg>
                </button>

                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="32px" height="32px" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M4,21 L4,3 C4,2.17595468 4.94076375,1.70557281 5.6,2.2 L17.6,11.2 C18.1333333,11.6 18.1333333,12.4 17.6,12.8 L5.6,21.8 C4.94076375,22.2944272 4,21.8240453 4,21 Z M6,19 L15.3333333,12 L6,5 L6,19 Z M20,22 L18,22 L18,2 L20,2 L20,22 Z"/>
                    </svg>
                </button>

            </div>
            </div>
            
        </main>
            </>
    );
}

export default MainPlayer;