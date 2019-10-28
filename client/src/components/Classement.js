import React from 'react'

const Classement = (props) => {
  return (
    <tr>
      <td>
        {props.place + 1}
      </td>
      <td className='equipe-logo'>
        <img src={'./equipes/logo-' + props.equipe + '-100x100.png'} alt={props.nom + props.equipe} /> {props.equipe}
      </td>
      <td>
        {props.match}
      </td>
      <td>
        {props.victoire}
      </td>
      <td>
        {props.nul}
      </td>
      <td>
        {props.defaite}
      </td>
      <td>
        {props.butsplus} - {props.butsmoins}
      </td>
      <td>
        {props.diff}
      </td>
      <td>
        {props.points}
      </td>
      <td>
        {props.malus}
      </td>
    </tr>
  )
}

export default Classement
