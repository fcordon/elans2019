import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Table, Col } from 'react-bootstrap'

const Resultats = () => {
  const [result, setResult] = useState([])

  useEffect(() => {
    let isSubscribed = true

    getResult()
    .then(res => isSubscribed && setResult(res))
    .catch(err => console.log(err))

    return () => isSubscribed = false
  }, [])

  const getResult = async () => {
    const response = await axios.get('/championnat')
    const body = await response.data
    const data = [...body]

    data.sort((a,b) => {
      const dateA = a.timestamp
      const dateB = b.timestamp

      let comparison = 0;
      if (dateA > dateB) {
        comparison = 1;
      } else if (dateA < dateB) {
        comparison = -1;
      }
      return comparison;
    })

    return data
  }

  return (
    <Row className="justify-content-md-center">
      <Col xs={12} lg={6}>
        <Table bordered>
          <tbody>
            {result.map((resultat, index) => {
              return (
                <tr key={index}>
                  <td>{resultat.date}</td>
                  <td>{resultat.equipe1}</td>
                  <td className='text-center'>{resultat.score1} - {resultat.score2}</td>
                  <td>{resultat.equipe2}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default Resultats
