import React from 'react'
import { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'



export default class TrendingNow extends Component {


  state = {
    bananaFilm: []
    // isLoading: false
  }


  getBananaFilm = () => {
    // this.setState({ isLoading: true });
    fetch("http://www.omdbapi.com/?apikey=971cc305&s=banana")
        .then(response => response.json())
        .then((json) => {this.setState({
          bananaFilm: json.Search
        })})
        .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getBananaFilm();
  }

  render() {
    const { bananaFilm } = this.state;
    console.log(bananaFilm);

    return (
      <>
      <h4 className='text-white mt-2 mb-2'>Choose your BANANA (movie)</h4>
      <Row>
        {this.state.bananaFilm.slice(0, 6).map(u => (
          <Col xs={3} md={2} key={u.imdbID} className='d-flex align-items-center'>
            <Image className='film-image img-fluid' style={{ width: "" }} src={u.Poster} alt={u.Title} />
          </Col>
        ))}
      </Row>
      </>
    )
  }
}