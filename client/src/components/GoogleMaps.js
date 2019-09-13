import React, { useEffect } from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"

const MapContainer = (props) => {
  useEffect(() =>{
    GoogleApiWrapper({
      apiKey: 'AIzaSyCmsH-1no9HAJRmIDbNv1AOIzBKcUCcPhI'
    })
  })
  return (
    <Map
      google={props.google}
      zoom={8}
      initialCenter={{ lat: 47.444, lng: -122.176}}
    />
  )
}

export default MapContainer
