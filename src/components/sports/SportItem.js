import React from 'react'

const SportItem = ({ item }) => {
  console.log(item)
  return (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={item.strSportThumb} alt='' />
      </div>
      <div className='card-back'>
        <h1>{item.strSport}</h1>
        <ul>
          <li>
            <strong>Type:</strong> {item.strFormat}
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default SportItem
