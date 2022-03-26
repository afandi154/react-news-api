import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

function Content({link, search}) {
  const [articles, setArticles] = useState([])
  const [loading, setLoad] = useState(true)

  useEffect(() => {
    Axios.get(link)
      .then(res => {
        setLoad(true)
        return setArticles(res.data.articles)
      })
      .finally(() => setTimeout(() => setLoad(false), 1000))
      .catch((err) => console.log(err))
  }, [link])
  
  return (
      loading? <h4 className='text-center mt-5'>Loading...</h4>:
      <Row className="mt-4">
        {
          (articles.length > 0)?
          articles.map((data, index) => {
            let title = (data.title.length > 60)? data.title.slice(0, 60)+"..." : data.title;
            let author = (data.author != null)? ((data.author.length > 55)? data.author.slice(0, 55): data.author) : 'Unknown';
            let desc = data.description? data.description.replace(/[<>=/"]/gi, "") : "undefined";

            return(
              <Col xs md="6" lg="4" key={index}>
                <Card className="my-3 shadow-sm">
                  <Card.Img variant="top" height="200px" src={data.urlToImage} />
                  <Card.Body>
                    <Card.Title style={{height: "70px"}}>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{height: "40px"}}>
                      {author} - {data.publishedAt}
                    </Card.Subtitle>
                    <Card.Text style={{height: "80px", overflowY: "scroll"}}>
                      {desc}
                    </Card.Text>
                    <Button href={data.url} target="_blank" variant="primary">Read More...</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          }) : 
          <div className='alert alert-danger'>
            <h5>Maaf, data {search} tidak ditemukan.</h5>
          </div>
        }
      </Row>
  )
}

export default Content