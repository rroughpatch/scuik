'use client'

import React, { useState } from 'react'
import Mainpage from '@/components/MainPage'
import MainPlayer from '@/components/MainPlayer'
import Library from '@/components/Library'



export default function Home() {
    const [showLibrary, setShowLibrary] = useState(false)

    return (
        <main>
            <MainPlayer showLibrary={showLibrary} toggleLibrary={() => setShowLibrary(!showLibrary)}/>
            {showLibrary && <Library />}
            {/* <MainPlayer /> */}
        </main>
    )
}
