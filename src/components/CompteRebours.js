import React, { useState } from 'react'

const CompteRebours = () => {
  const [decompte, setDecompte] = useState('0 jours 0h 0min 0s')

  function diffDate() {
    let date = new Date().getTime()
    let gameDate = new Date(2019, 8, 1, 18, 30, 0).getTime()

    let timestampToDate = new Date(gameDate - date)
    let day = timestampToDate.getDay()
    let hours = timestampToDate.getHours()
    let minutes = timestampToDate.getMinutes()
    let secondes = timestampToDate.getSeconds()

    setDecompte(day + ' jours ' + hours + 'h ' + minutes + 'min ' + secondes + 's')
  }

  setInterval(diffDate, 1000)

  return (
    <div className='home-compteRebours'>
      <p>Prochain match dans :</p>
      <p className='home-compteRebours-decompte'>{decompte}</p>
    </div>
  )
}

export default CompteRebours
