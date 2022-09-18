import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutLineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../data/dummy'

const Sidebar = () => {
  const activeMenu = true;

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 rounded-md'>
      {activeMenu && (<>
        <div className='flex justify-between items-center p-3'> 
          <Link to='/' onClick={() => {}} className='items-center'>
            
          </Link>
        </div>
      </>
      )}
      Sidebar
    </div>
  )
}

export default Sidebar