import React, { useState } from 'react'

function Login() {
  const [currentState, setCurrentState] = useState('Sign Up');
  const onSubmitHandler = async(event) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-6 text-gray-700">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 border border-gray-800"
          required
        />
      )}

      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border border-gray-800"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 border border-gray-800"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer text-blue-700">Forgot your password</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="rounded-lg px-2 cursor-pointer text-sm text-slate-700"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className=" rounded-lg px-2 cursor-pointer text-sm  text-slate-700"
          >
            I already have a account
          </p>
        )}
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4 rounded-md curss'>
        {currentState === "Login" ? "Login" : "Sign Up" }
      </button>
    </form>
  );
}

export default Login
