import React, { Component } from 'react'


 class Map extends Component {
  
render() {
    return (
      <div className='google-map'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7032.7965353705285!2d-82.38046!3d28.19521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b0a50013f227%3A0x316a492cb1f71df5!2s3173+Cypress+Ridge+Blvd%2C+Wesley+Chapel%2C+FL+33544%2C+USA!5e0!3m2!1sen!2srs!4v1552153340418" frameBorder="0" allowfullscreen></iframe>
      </div>
    )
  }
}
export default Map;