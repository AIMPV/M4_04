import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CardItem({ season, episode, name, description, airDate, thumbnailUrl, rating, onError }) {

  const truncatedDescription = description.length > 100 ? `${description.substring(0, 100)}...` : description;

  return (
    <Card className="episode-card">
      <div className='d-flex align-items-center justify-content-center overflow-hidden episode-card-img'>
        <Card.Img variant="top" src={thumbnailUrl} onError={onError} />
      </div>
      <Card.Body>
        <div className='d-flex align-items-center mb-1'>
          <div className='d-flex flex-grow-1'>
            <Badge bg="secondary">
              S{season}.E{episode}
            </Badge>
          </div>
          <Badge pill bg="light" text="dark" className='d-flex align-items-center justify-content-center'>
            <FontAwesomeIcon className='me-2' icon={faCalendar} />
            {airDate}
          </Badge>
        </div>
        <Card.Title>{name}</Card.Title>
        <div className='d-flex align-items-center mb-2'>
          <FontAwesomeIcon className='me-1 primary' icon={faStar} />
          {rating}
        </div>
        <Card.Text>
          {truncatedDescription}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardItem;