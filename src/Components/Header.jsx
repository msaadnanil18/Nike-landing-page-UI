import React from 'react'

function Header() {
  return (
    <>
    <header>
        <div className="font-bold flex justify-between uppercase text-7xl" >
       <div className=" mx-40 m-20 tracking-widest space-y-7 ">
       <h1>your feet</h1>
       <h1>deserve</h1>
       <h1>the best</h1>
       </div>
       <img className="my-10"  src="/images/shoe_image.png" alt="" />
      </div>
      <div className="mx-40 space-y-5 " >
            <p>YOUR FEET DESERVE THE BEST AND WE’RE <br/> HERE TO HELP YOU WITH OUR SHOES.<br/>YOUR FEET DESERVE THE BEST AND <br/>WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="flex">
            <div className=" bg-red-600 cursor-pointer p-2 rounded-md text-lg font-semibold hover:bg-green-400 " >shop Now</div>
            <div className="bg-slate-100 cursor-pointer p-2 mx-10 border rounded-md font-semibold text-lg hover:bg-slate-400 " >Category</div>
            </div>
            <p>Also Available On</p>
            <div className="flex"> 
            <img src="/images/flipkart.png" alt="" />
            <img className="mx-4" src="/images/amazon.png" alt="" />
            </div>
        </div>



       
    </header>
    </>
  )
}

export default Header
