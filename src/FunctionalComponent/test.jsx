import { axios } from 'axios'
import React, { useEffect } from 'react'

function TestFunction() {

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=international&apiKey=f9d2f27f4a784cc7a1871946aafe7730`)
    .then(res => console.log(res))
  }, [])

  return (
    <div>
      
      <h4>{
        "Test"
      }</h4>
    </div>
  )
}

export default TestFunction