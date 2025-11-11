import React from 'react'

function KatigoriaItem({item}) {
  return (
    <div className="katigoria__card">
        <div className="katigoria__title">{item.title}</div>
        <div className="kategoria__img">
          <img src={item.img} alt="katigoria img" />
        </div>
    </div>
  )
}

export default KatigoriaItem