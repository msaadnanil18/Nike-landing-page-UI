import React from 'react'

function Navbar() {
  return (
    <nav className=" bg-slate-100 w-full h-14 flex justify-between" >
      <div className="m-2" >
        <img src="/images/brand_logo.png" alt="logo" />
        </div>
       <ul className="flex my-4 " >
        <li className="mx-2 hover:text-slate-950 font-semibold cursor-pointer " ><a href>LOCATION</a></li>
        <li className="mx-2 hover:text-slate-950 font-semibold cursor-pointer " ><a href>ABOUT</a></li>
        <li className="mx-2 hover:text-slate-950 font-semibold cursor-pointer " ><a href>MENU</a></li>
        <li className="mx-2 hover:text-slate-950 font-semibold cursor-pointer " ><a href>CONTACT</a></li>
       </ul>
      
     
      <div className=" hover:bg-slate-950 cursor-pointer rounded-lg m-4 px-4 bg-slate-600 text-slate-50 " >
        <button >Login</button>
      </div>
     
    </nav>
    
  )
}

export default Navbar
