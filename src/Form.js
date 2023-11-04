import React from 'react'
import Button from './Button'

const Form = ({ requestType, setRequestType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <Button
           buttonText='Users'
           requestType={requestType}
           setRequestType={setRequestType}  
        />
        <Button 
            buttonText='Posts'
            requestType={requestType}
            setRequestType={setRequestType}
        />
        <Button 
            buttonText='Comments'
            requestType={requestType}
            setRequestType={setRequestType}
        />
    </form>
  )
}

export default Form