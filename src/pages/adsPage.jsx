import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const adsPage = () => {
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const {id} = useParams()

    const fatchData = async (adID) => {
      setLoading(true)
      try{
        const { data } = await axios.get(`http://localhost:3000/${adID}`)
        window.location.href = data;
        setLoading(false)
      }catch(err){
        console.log(err)
      }
    }
  return (
    <div>
      <button className='cursor-pointer' onClick={() => fatchData(id)}>click</button>
    </div>
  )
}

export default adsPage