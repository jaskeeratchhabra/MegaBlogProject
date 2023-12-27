import {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import authService from './appwrite/auth';
import {login,logout} from './store/authSlice'
import { Header,Footer } from './components';
import { Outlet } from 'react-router-dom';
function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL)
  const [loading,setLoading] = useState(true);
  const  dispatch=useDispatch();
  
  useEffect(()=>{
     authService.getCurrentUser()
     .then((userData) => {
      if(userData){
            dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
     }).catch((err) => {
       console.log("error in login/logout",err);
     })
     .finally(()=>
        setLoading(false))
  }, [])
    
  return !loading ?(
    <div className='min-h-screen flex flex-wrap flex-col content-between bg-white'>
        <div className='w-full block'>
          <Header/>
            <main>
               <Outlet/>
            </main>
          <Footer/>
        </div>
    </div>
  ): null

}

export default App;
