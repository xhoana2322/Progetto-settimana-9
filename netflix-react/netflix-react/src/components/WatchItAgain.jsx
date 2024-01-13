import React from 'react'
import { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'



export default class WatchItAgain extends Component {


  state = {
    splatterFilm: []
    // isLoading: false
  }


  getSplatterFilm = () => {
    // this.setState({ isLoading: true });
    fetch("https://www.omdbapi.com/?apikey=d18e5237&s=splatter")
        .then(response => response.json())
        .then((json) => {this.setState({
          splatterFilm: json.Search
        })})
        .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getSplatterFilm();
  }

  render() {
    const { splatterFilm } = this.state;
    console.log(splatterFilm);

    return (
      <>
      <h4 className='text-white mt-4 mb-2'>Fresh tomatoes</h4>
      <Row>
        {this.state.splatterFilm.slice(0, 6).map(u => (
          <Col xs={6} md={2} key={u.imdbID} className='d-flex align-items-center'>
            <Image className='film-image img-fluid' style={{ width: "" }} src={u.Poster} alt={u.Title} />
          </Col>
        ))}
      </Row>
      </>
    )
  }
}