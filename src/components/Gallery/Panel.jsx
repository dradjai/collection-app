import { Col, Card, Image } from "react-bootstrap";

export default function Panel ({ data: {id, teamName, location, conference, colors, mascotEmblem}}) {

  return(
    <Col key={id} sm={10} md={6} lg={4}>
      <Card className="p-3">
        <figure>
            <Image src={mascotEmblem} fluid />
        </figure>
        <div className="content">
          <h3>{teamName}</h3>
          <p>{location}</p>
          <p>{conference}</p>
        </div>
         
      </Card>
    </Col>
    
    
  )
}