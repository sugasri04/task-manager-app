import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';
import PerfumeImage5 from './images/p1.jpg';
import PerfumeImage6 from './images/p2.webp';
import PerfumeImage7 from './images/p3.png';
import PerfumeImage8 from './images/p4.webp';
import PerfumeImage9 from './images/p5.webp';
import PerfumeImage10 from './images/p6.jpg';

const Home = () => {

  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Task Manager";
  }, [authState]);



  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div className='bg-primary text-white h-[40vh] py-8 text-center'>
            <h1 className='text-2xl'> Welcome to Task Manager App</h1>
            <Link to="/signup" className='mt-10 text-xl block space-x-2 hover:space-x-4'>
              <span className='transition-[margin]'>Join now to manage your tasks</span>
              <span className='relative ml-4 text-base transition-[margin]'><i className="fa-solid fa-arrow-right"></i></span>
            </Link>
          </div>
        ) : (
          <>
            <h1 className='text-lg mt-8 mx-8 border-b border-b-gray-300'>Welcome {authState.user.name}</h1>
            <Tasks />
          </>
          
        )}


        <div>
      <center>
      <h1 style={{color:'black' ,fontSize:'30px',marginTop:'30px'}}>Create Your Tasks</h1>
      <h1 style={{color:'#008a5c' ,fontSize:'40px'}}>And Make You Perfect</h1>
      <h1>________</h1>
      </center>  
    </div>
        <div className='i'>
        <center>
       <img src={PerfumeImage5} alt="Perfume" style={{width:'100px' , height:'100px' , marginLeft:'100px' , borderRadius:'50px'}} />
        <img src={PerfumeImage6} alt="Perfume" style={{width:'100px' , height:'100px', marginLeft:'100px' , borderRadius:'50px' }} />
         <img src={PerfumeImage7} alt="Perfume" style={{width:'100px' , height:'100px'  , marginLeft:'100px' , borderRadius:'50px'}} />
        <img src={PerfumeImage8} alt="Perfume" style={{width:'100px' , height:'100px' , marginLeft:'100px' , borderRadius:'50px'}} />
         <img src={PerfumeImage9} alt="Perfume" style={{width:'100px' , height:'100px' , marginLeft:'100px' , borderRadius:'50px'}} />
          <img src={PerfumeImage10} alt="Perfume" style={{width:'100px' , height:'100px' , marginLeft:'100px' , borderRadius:'50px'}} />
       </center>
    </div>
      </MainLayout>
      
    </>
    
  )
}

export default Home