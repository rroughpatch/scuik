import Image from 'next/image';


export default function Library() {
    return (
        <>
        <div className='fixed z-[9] top-0 left-0 w-[24rem] h-full bg-zinc-900 shadow-xl select-none overflow-scroll transformxyz text-xl font-medium'>
            <h2 className='p-8'>Library</h2>
            <div className='flex flex-col'>
                <div className="flex px-8 h-full w-full flex-row items-center">
                    <Image 
                        src="https://media.discordapp.net/attachments/1152778526332821649/1166651945054900224/F9RVzD4XYAA7A3F.png" 
                        alt="Beaver Creek" 
                        height={64}
                        width={64}
                        className="my-5 h-[60px] rounded-md"
                    />
                    <div className=" w-full h-full flex flex-col justify-center">
                        <h3 className=" pl-4 text-base">Title Placeholder</h3>
                        <h4 className="pl-4 text-xs">Artist Placeholder</h4>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}
