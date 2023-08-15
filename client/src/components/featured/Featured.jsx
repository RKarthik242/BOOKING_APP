import React from 'react'
import "./featured.css"
import useFetch from '../hooks/useFetch'

const Featured = () => {

  const {data, loading, error} = useFetch("/hotels/countByCity?cities=paris,madrid,london")
  

  return (
    <div className="featured">
    {loading ? (
      "Loading please wait"
    ) : (
      <>
        <div className="featuredItem">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Paris</h1>
            <h2>{data[0]} properties</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img
            src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFkcmlkJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Madrid</h1>
            <h2>{data[1]} properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://www.propeller.co.uk/wp-content/uploads/sites/11/2018/03/benjamin-davies-484913-unsplash-1000x667.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>London</h1>
            <h2>{data[2]} properties</h2>
          </div>
        </div>
      </>
    )}
  </div>

  )
}

export default Featured