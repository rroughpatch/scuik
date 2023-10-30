import React, { useState } from 'react'

export default function Home() {
    const [showLibrary, setShowLibrary] = useState(false)

    return (
    <>

        <main className='flex flex-col'>
            <div className='flex flex-row h-12 border-dashed border-black border-2'/* nav thing*/> 
                Logo Placeholder
            </div>

            <div className='flex flex-row min-h-[100%]'/*body*/> 
                <div className='flex flex-col w-16 h-[100%] border-dashed border-black border-2'>
                    <button>ttt</button>
                    <button>ttt</button>
                    <button>ttt</button>
                </div>
                
                <div>


                </div>
            </div>

            <div className='flex flex-col'>
                <div className='flex flex-row' /*buttons*/>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
                <div className='flex flex-row' /*progessbar*/>
                    <input type="range" value={0} />
                </div>
            </div>

        </main>
    </>
    )
}
