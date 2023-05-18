import React from 'react'
import Typed from 'react-typed';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/json/wired-lineal-497-truck-delivery.json";


const Product = () => {
  const TypingComponent: any = () => {
    return (
      <>
        <Typed
          strings={['and benefits', 'beautiful and smart design.', 'need to build complex projects.', ]}
          typeSpeed={80}
          loop
        />
      </>
    );
  }


  return (
<>
    <div className='h-screen w-full'>
      <div className='flex'>
      <div className=' h-[680px] flex flex-col ml-[7.7rem] gap-16'>
        <p className='font-semibold text-5xl mt-64'> <span className='text-orange-600' >Perks </span><TypingComponent /></p>
        <p className='font-semibold text-5xl'>Case Studies</p>
        <p className='w-[890px] text-1xl '>We believe that great products cannot happen without passion, intelligence, and personal  <br /> commitment, and it is demonstrated by our portfolio that spans different customers, <br /> industries, and target audiences.</p>
      </div>
       <div>
      <Lottie animationData={groovyWalkAnimation} loop={true} style={{marginTop:"373px",marginRight:"121px" }} />
      </div>
      </div>
      <div className='flex gap-[95px]'>
        <div className='mt-20 ml-[114px]  '>
          <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
          <img src="../src/assets/symbioosa-lighting-llev.jpg" alt="" className='w-[530px] h-[480px]  ' />
          </div>
          <p className='font-semibold mt-7'>Product Design</p>
          <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Issue tracking app</p>
          <p className='font-semibold mt-7 ' >Make your work routine simple and convenient, <br /> say goodbye to the stress and chaos of managing multiple <br /> tasks and hello to a more productive workday</p>
        </div>
        <div className='mt-56 mr-28'>
        <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
          <img src="../src/assets/bob-corner-sofa-module.jpg" alt="" className='w-[570px] h-[450px] ' />
          </div>
          <p className='font-semibold mt-7'>UX/UI Design Research</p>
          <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Homely app</p>
          <p className='font-semibold mt-7 ' >The main goal of the platform is to offer high-level,<br /> elegant, and modern properties across Europe and South America.</p>
        </div>
      </div>

      <div className='flex gap-[95px]'>
        <div className='mt-20 ml-[114px] '>
        <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
          <img src="../src/assets/istockphoto2.jpg" alt="" className='w-[530px] h-[520px] ' />
          </div>
          <p className='font-semibold mt-7'>UX/UI Design Research</p>
          <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>The #1 app for making <br /> music on your phone</p>
          <p className='font-semibold mt-7 ' >Join 10 million other music creators</p>
        </div>
        <div className='mt-56 mr-28'>
        <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
          <img src="../src/assets/istockphoto3.jpg" alt="" className='w-[570px] h-[450px] ' /></div>
          <p className='font-semibold mt-7'>Product Design</p>
          <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Duds app</p>
          <p className='font-semibold mt-7 ' >Shazam for clothes. An antidote to the feeling when you <br />  really
            want some sneakers that you saw on a blogger,  but he doesn't respond <br /> to comments, and you can't find them on the brand's website</p>
        </div>
      </div>



      <div className='flex gap-[95px]'>
        <div className='mt-20 ml-[114px]  '>
        <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
          <img src="../src/assets/istockphoto.jpg" alt="" className='w-[530px] h-[520px] ' /></div>
          <p className='font-semibold mt-7'>Product Design</p>
          <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Bo app</p>
          <p className='font-semibold mt-7 ' >Bo is the easiest way to send someone the perfect present at <br /> the perfect time. Gifting made simple - so you can simply focus on <br /> the people  and moments you care.</p>
        </div>
        <div className='mt-56  mr-28'>
        <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
          <img src="../src/assets/istockphoto1.jpg" alt="" className='w-[570px] h-[450px] ' /></div>
          <p className='font-semibold mt-7'>Branding Product Design</p>
          <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>ByNext. All-in-one home <br /> services provider</p>
          <p className='font-semibold mt-7 ' >Laundry, Dry Cleaning & Home Cleaning From home cleaning to <br /> dry cleaning and laundry we're here to help, every step of the way.</p>
        </div>
      </div>

      <div className='flex gap-[95px]'>
        <div className='mt-20 ml-[114px] '>
        <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
          <img src="../src/assets/istockphoto4.jpg" alt="" className='w-[530px] h-[520px] ' /></div>
          <p className='font-semibold mt-7'>Product Design</p>
          <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Hot-desk booking app</p>
          <p className='font-semibold mt-7 ' >Hybrid work is reinventing the way we work. It changes the way
            <br /> we use the workplace but also the way we communicate and manage <br /> our teams. So, we have created a booking platform that <br /> helps easily manage hybrid work</p>
        </div>
        <div className='mt-56  mr-28'>
        <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
          <img src="../src/assets/bob-corner-sofa-module5.jpg" alt="" className='w-[570px] h-[450px] ' /></div>
          <p className='font-semibold mt-7'>Product Design</p>
          <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Sweet Analytics Website Redesign</p>
          <p className='font-semibold mt-7 ' >During the design process, our top priority was the user's <br /> perception of the company. We focused on a simple and clean <br /> presentation of the platform, as well as graphics that <br /> clearly reflect its capabilities.</p>
        </div>
      </div>

      <div className='flex gap-[95px]'>
        <div className='mt-20 ml-[114px]  '>
        <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
          <img src="../src/assets/istockphoto6.jpg" alt="" className='w-[530px] h-[520px] ' /></div>
          <p className='font-semibold mt-7'>Product Design</p>
          <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Quinlex - Project
            Management <br /> Application</p>
          <p className='font-semibold mt-7 ' >The aim is to create an app which will make lives of
            <br />
            people with diabetes simplier.</p>
        </div>
        <div className='mt-56  mr-28'>
        <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
          <img src="../src/assets/istockphoto7.jpg" alt="" className='w-[570px] h-[450px] ' /></div>
          <p className='font-semibold mt-7'>Product Design</p>
          <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Diabetes Control</p>
          <p className='font-semibold mt-7 ' >Catch here how we designed the mobile experience  for teams
            <br /> on the  go. There is nothing better than a top-notch project <br /> management  app that helps keep everyone productive</p>
        </div>
      </div>

      <div className='flex gap-[95px]'>
        <div className='mt-20 ml-[114px] '>
        <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
          <img src="../src/assets/istockphoto8.jpg" alt="" className='w-[530px] h-[520px] '/></div>
          <p className='font-semibold mt-7'>Product Design</p>
          <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>TuneGo</p>
          <p className='font-semibold mt-7 ' >TuneGO is a free platform to protect your rights and <br />   distribute your music globally through hundreds of digital <br /> music stores, and collect royalties.</p>
        </div>
        <div className='mt-56  mr-28'>
        <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
          <img src="../src/assets/istockphoto10.jpg" alt="" className='w-[570px] h-[450px]' /></div>
          <p className='font-semibold mt-7'>UX/UI Design Research</p>
          <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Lime Home</p>
          <p className='font-semibold mt-7 ' >Limehome is better than a hotel. Run by hospitality professionals and <br />  equipped by interior designers, they are able to combine the quality standard  <br /> of a hotel with the advantages of an apartment.</p>
        </div>
      </div>
      <div className='flex items-center p-28'>
        <p className='font-sans font-semibold text-6xl' >Let's make Something amazing together Start by <span className='text-orange-600 border-b-4 border-orange-600 hover:text-gray-400 hover:border-gray-400' >saying hi</span></p>
      </div>
    
    </div>
    
    </>

  )
}

export default Product
