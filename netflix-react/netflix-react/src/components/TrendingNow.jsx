import React from 'react'
import { Component } from 'react'
import { Row, Col } from 'react-bootstrap'



export default class TrendingNow extends Component {


  state = {
    banana: [],
    isLoading: false,
    errorMsg: ""
  }

  getBananaFilm = async () => {
    this.setState({ isLoading: true, errorMsg: "" });
    await fetch("http://www.omdbapi.com/?apikey=971cc305&s=banana")
        .then(response => {
          if(response != ok) {
            this.setState({ errorMsg: "errore nel fetch" });
          } else {
            console.log(res);
            return res.json();
          }
        })


        // .then(json => this.setState({
        //           film: json }))
        // .catch(err => console.error(err))
  }




  render() {
    return (
    <>
      <div>
        <h4 className='text-white mb-2'>Trending Now</h4>
          <Row>
          {this.state.film.map((a, index) => (
            <Col key={index.imdbID}> 
            {a.title}
            <Col />
          ))}
          </Row> 
        
      </div>
    </>    
    )
  }
}

