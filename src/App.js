import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Contents from './components/Contents'
import NavbarCompontent from './components/NavbarCompontent'
import axios from 'axios'

class App extends Component {
  state = {
    search: "",
    articles: [],
    link: ""
  }

  componentDidMount(){
    axios.get("https://newsapi.org/v2/everything?q=international&apiKey=f9d2f27f4a784cc7a1871946aafe7730")
      .then(response => this.setState({articles: response.data.articles}))
  }

  render() {
    return (
      <>
        <NavbarCompontent onSearching={
          data => {
            const searchKey = data? data : "international"
            axios.get(`https://newsapi.org/v2/everything?q=${searchKey}&apiKey=f9d2f27f4a784cc7a1871946aafe7730`)
            .then(response => this.setState({search: data, articles: response.data.articles}))
          }
        }/>
        <Container>
          <h1 className='mt-5'>
            {
              this.state.search? 
                `Hasil Pencarian : ${this.state.search}` : "International News"
            }
          </h1>
          <Contents search={this.state.search} articles={this.state.articles}/>
        </Container>
      </>
      
    )
  }
}

export default App