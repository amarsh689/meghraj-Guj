import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
const Dashboard = () => {
  return (
   <>
   <h1>
   
   Dashboard



   </h1>
   <p>Name:</p>
   <p>Email:</p>
   <p>Conctact Number:</p>
   <p>City:</p>
   <p>Gender:</p>
   
<Button type="submit" variant="dark" className="btn" value="Submit"><Link to="/login">Logout</Link></Button>



 
   </>
  )
}

export default Dashboard


