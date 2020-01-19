import React, {useState} from 'react'

import './Home.scss'

const Home = ({ children }) => {

  const [user, setUser] = useState({
    name : "",
    id : ""
  })

  const getData = async () =>{
    const res = await (await fetch(`http://localhost:8080/users?queryParams={"model": "users" ,  "fields" : ""   , "skip" : 0, "limit":0 }`)).json()
   
    console.log(res[0])
    setUser({
      name : res[0].name,
      id : res[0]._id
    })
  }

  return(
      <div>hello home component
          <div>
          {user.id} <br/>
            {user.name}
           
          </div>
          <button onClick={getData}>get data</button>
    </div>
  )

}



export default Home

