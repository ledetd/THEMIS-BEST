import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Navbar = () => {

  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className='best-bg border-b  best-border mb-2'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <img className='h-10 w-auto' src={logo} alt='React Jobs' />
            </NavLink>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/projects' className={linkClass}>
                  Projects
                </NavLink>
                <NavLink to='/wells' className={linkClass}>
                  Wells
                </NavLink>
                <NavLink to='/daily_reports' className={linkClass}>
                  DailyReports
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
