import React from 'react'

const Card = (input) => {
  return (
    <div className="card">
      <img src={input.img} alt="" />
      <h1>{input.user}, {input.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, asperiores!</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card