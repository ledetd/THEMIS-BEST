import React from 'react'

const Navbar = () => {
  return (
 <>
    <nav className="best-body border-b best-border">
<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  <div className="flex h-20 items-center justify-between">
    <div
      className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
    >
    


      {/* <Link className="flex flex-shrink-0 items-center mr-4" to="/">
        <img
          className="h-10 w-auto"
          src={ best_logo }
          alt="BEST Operations"
        />
        <span className="hidden md:block text-white text-2xl font-bold ml-2 uppercase"
          ></span
        >
        
      </Link> */}

      <div className="md:ml-auto">
        <div className="flex space-x-2">
            
            <a href='#'>Projects</a>
            <a href='#'>Wells</a>
            <a href='#'>DailyReports</a>

        </div>
      </div>
    </div>
  </div>
</div>
</nav>
</>
  )
}

export default Navbar
