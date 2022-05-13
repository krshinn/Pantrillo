import Veggie from "../components/Veggie"
import Popular from "../components/Popular"
import Navbar from "../components/Navbar/NavbarElements"


import React from 'react'

function Home() {
  return (
    <div>
        <Navbar />
        <Veggie />
        <Popular />
    </div>
  )
}

export default Home