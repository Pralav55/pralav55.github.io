import React from 'react'

import { HomeIcon ,UserIcon, BriefcaseIcon, RectangleStackIcon, RectangleGroupIcon, BuildingOfficeIcon, EnvelopeIcon   } from '@heroicons/react/24/outline'

const NavBar = () => {
  return (
    <div className='navbar fixed top-1/2 -translate-y-1/2 right-12 border-1 border-neutral-500 rounded-full flex flex-col items-center gap-6 pt-6 pb-6 text-center w-[55px]'>
        <div>
        <a> <HomeIcon className='navbar-icon'/></a>
        </div>
        <div>
        <a> <UserIcon className='navbar-icon'/></a>
        </div>
        <div>
        <a> <BriefcaseIcon className='navbar-icon'/></a>
        </div>
        <div>
        <a> <RectangleStackIcon className='navbar-icon'/></a>
        </div>
        <div>
        <a> <RectangleGroupIcon className='navbar-icon'/></a>
        </div>
        <div>
        <a> <BuildingOfficeIcon className='navbar-icon'/></a>
        </div>
        <div>
        <a> <EnvelopeIcon className='navbar-icon'/></a>
        </div>
    </div>
  )
}

export default NavBar


