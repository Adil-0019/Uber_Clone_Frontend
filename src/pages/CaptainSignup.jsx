import React,{useState} from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')
      const [userData, setUserData] = useState({})
      const submitHandler=(e)=>{
        e.preventDefault()
          const newUser = {
        fullName: {
          firstName,
          lastName,
        },
        email,
        password,
      };
        
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
      }
  return (
     <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
                    src="https://th.bing.com/th/id/R.76842e9e30bb36645a34f47584166bb9?rik=ZFOaSE97%2bKmT3Q&riu=http%3a%2f%2fblog-shima-haxtuti.com%2fwp-content%2fuploads%2f2022%2f04%2fIMG_0177.png&ehk=NrjSyw6WSp%2f3FPqgOTW9sOSG7pR8UlHhltxdwI7C1tc%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
           <h3 className="text-lg font-medium mb-2">What's your fullName</h3>
            <div className="flex gap-4 mb-6">
                <input
            className="bg-[#eeeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base"
            required
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value)
            }}
          />
            <input
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
            required
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value)
            }}
          />
            </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          <h3 className="text-lg font-medium  mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
          <p className="text-center">
            Already have a account? <Link to='/captain-login' className="text-blue-600">Login here</Link>
          </p>
      </div>
      <div className="text-[10px] leading-tight">
         <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignup
