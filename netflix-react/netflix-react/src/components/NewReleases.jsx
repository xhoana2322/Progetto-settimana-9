import React from 'react'
import { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'



export default class NewRealses extends Component {


  state = {
    toastFilm: []
    // isLoading: false
  }


  getToastFilm = () => {
    // this.setState({ isLoading: true });
    fetch("https://www.omdbapi.com/?apikey=d18e5237&s=toast")
        .then(response => response.json())
        .then((json) => {this.setState({
          toastFilm: json.Search
        })})
        .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getToastFilm();
  }

  render() {
    const { toastFilm } = this.state;
    console.log(toastFilm);

    return (
      <>
      <h4 className='text-white mt-4 mb-3'>Toast of the day</h4>
      <Row>
        {this.state.toastFilm.slice(0, 6).map(u => (
          <Col xs={6} md={2} key={u.imdbID} className='d-flex mb-5'>
            <Image className='film-image img-fluid' style={{ width: "" }} src={u.Poster} alt={u.Title} />
          </Col>
        ))}
      </Row>
      </>
    )
  }
}
