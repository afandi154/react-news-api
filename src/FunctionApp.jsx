import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Content from './FunctionalComponent/Content'
import FunctionNavbar from './FunctionalComponent/Navbar'

function FunctionApp() {
  const [search, setSearch] = useState(null)
  const [link, setLink] = useState("https://newsapi.org/v2/everything?q=international&apiKey=f9d2f27f4a784cc7a1871946aafe7730")

  useEffect(() => {
    setLink(
      `https://newsapi.org/v2/everything?q=${
        search? search : "international"
      }&apiKey=f9d2f27f4a784cc7a1871946aafe7730`
    )
  }, [search])

  return (
    <>
      <FunctionNavbar onSearch={(search) => setSearch(search)}/>
      <Container>
        <h1 className='mt-5'>
          {
            search? `Hasil Pencarian : ${search}` : "International News"
          }
        </h1>
        <Content link={link} search={search}/>
      </Container>
    </>
  )
}

export default FunctionApp