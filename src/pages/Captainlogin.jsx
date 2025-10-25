import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const Captainlogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {captain, setCaptain} = React.useContext(CaptainDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e)=>{
      e.preventDefault()
      const captain = {
        email:email,
        password:password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)
      
      if(response.status === 200){
        const data = response.data

        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }


      setEmail('')
      setPassword('')
    }
  return (
     <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://th.bing.com/th/id/R.76842e9e30bb36645a34f47584166bb9?rik=ZFOaSE97%2bKmT3Q&riu=http%3a%2f%2fblog-shima-haxtuti.com%2fwp-content%2fuploads%2f2022%2f04%2fIMG_0177.png&ehk=NrjSyw6WSp%2f3FPqgOTW9sOSG7pR8UlHhltxdwI7C1tc%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium  mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
             value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
          <p className="text-center">
           Join a fleet? <Link to='/captain-signup' className="text-blue-600">Register as a Captain</Link>
          </p>
      </div>
      <div>
        <Link to='/login' className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default Captainlogin
