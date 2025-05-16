import { useState, useEffect } from 'react'

import ProjectListings from './components/ProjectListings'
import WellListings from './components/WellListings'
import CrewListings from './components/CrewListings'
import PraListings from './components/PraListings'
import HomePage from './pages/HomePage'


function App() {

 
  return (
    <>


<HomePage />
<ProjectListings />
<WellListings />
<CrewListings />
<PraListings />


    
    </>
  )
}

export default App
