import React from 'react'
import { Component } from 'react'

export default class TrendingNow extends Component {

  state = {
    film: []
  }

  // componentDidMount() {
  //   this.setState({
  //     film: []
  //   })
  // }


  render() {
    return (
    <>
      <div>
        <h4 className='text-white mb-2'>Trending Now</h4> 
        
      </div>
    </>    
    )
  }
}

