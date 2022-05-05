import React, { useState } from 'react'
import "./SignUp.css"
// import TextField from '@mui/material/TextField'
// import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import InputField from "../Components/NavBar/InputField"
export const SignUp = () => {
    const [number,setNumber] = useState(""); 
    const history = useHistory();
    const setMobileNumber = (e) => {
      setNumber(
          e.target.value);
  };
  function handleSubmit(e){
      e.preventDefault()
    if(number.length === 10){
      localStorage.setItem("phone",number)
          console.log(number)
          history.push("/otp")
    }
    else{
        window.alert("Enter Valid Number")
    }
  }
    return (
        <>
        <div className='sign_up'>
            <div className='signup_page'>
        <img 
        className='sign_up_img'
        src='https://images.meesho.com/images/marketing/1648820929975.jpeg'
        alt='item.title'
        />
        <p className='sign_up_profile'>
            Sign Up to view your profile
        </p>
        <p className='country_code'>Country</p>
        <div className='number'>
        <p className='Phone_number'>IN +91</p>
        <div className="numberField">
        <InputField 
                    // className="number_input"
                    type="number"
                    name="phone" 
                    required={true}            
                    val={number} 
                    isError={false}
                    maxLen={10}
                    onChange={setMobileNumber} 
                    label="Phone Number" 
                />
          </div>
        </div>
        <button style={{cursor:"pointer"}} onClick={handleSubmit} className='otp'>Send OTP</button>
        <p className='signup_policy'style={{color:"gray", marginTop: "25%"}}>By continuing, you agree to Meesho’s </p>
        
       <p className='signup_policy'style={{color:"gray"}}><span style={{color:"rgb(244,51,151)"}}> Terms & Conditions </span> and <span style={{color:"rgb(244,51,151)"}}> Privacy Policy</span></p>

        </div>
        </div>
        </>
    )
}
