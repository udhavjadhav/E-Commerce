import React from 'react'

const Carousel = () => {
  return (
    <div className='container-fluid'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div  style={{height:'40vh', overflow:'visible'}} className="carousel-inner">
  <div className="carousel-item active" data-bs-interval="2000">
      <img style={{height:'40vh'}} src="./src/assets/car1.jpg" className="d-block w-100" alt="..."/>
    </div>
    {/* <div className="carousel-item " data-bs-interval="10000">
      <img style={{height:'45vh'}}  src="https://img.freepik.com/free-vector/big-diwali-sale-banner-with-crackers-decoration_1017-21252.jpg?w=1380&t=st=1673609968~exp=1673610568~hmac=659359fe42911ff7b9bd9616487deec7c2044bd40079487abfac7b3268661df8 " className="d-block w-100" alt="..."/>
    </div> */}
    
     <div className="carousel-item">
      <img style={{height:'40vh'}}  src="./src/assets/car2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height:'40vh'}}  src="./src/assets/car3.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height:'40vh'}}  src="./src/assets/car4.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height:'40vh'}}  src="./src/assets/car5.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height:'40vh'}}  src="./src/assets/car6.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
