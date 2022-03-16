import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Contents from './components/Contents'
import NavbarCompontent from './components/NavbarCompontent'
import axios from 'axios'

class App extends Component {
  state = {
    search: "",
    articles: [],
    loading: true
  }

  componentDidMount(){
    axios.get("https://newsapi.org/v2/everything?q=international&apiKey=f9d2f27f4a784cc7a1871946aafe7730")
      .then(response => {
        return setTimeout(() => this.setState({articles: response.data.articles, loading: false}), 2000)
      })
      .catch(err => console.log(err))
      .finally(() => this.setState({loading: true}))
  }

  onSearch = (data) => {
    const searchKey = data? data : "international"
    axios.get(`https://newsapi.org/v2/everything?q=${searchKey}&apiKey=f9d2f27f4a784cc7a1871946aafe7730`)
    .then(response => {
      return setTimeout(() => this.setState({articles: response.data.articles, loading: false}), 2000)
    })
    .catch(err => console.log(err))
    .finally(() => this.setState({loading: true}))
  }
  
  render() {
    return (
      <>
        <NavbarCompontent onSearching={
          data => {
            this.setState({search: data})
            this.onSearch(data)
          }
        }/>
        <Container>
          <h1 className='mt-5'>
            {
              this.state.search? 
                `Hasil Pencarian : ${this.state.search}` : "International News"
            }
          </h1>
          <Contents 
            search={this.state.search} 
            articles={this.state.articles}
            isLoad={this.state.loading}
          />
        </Container>
      </>
      
    )
  }
}

export default App