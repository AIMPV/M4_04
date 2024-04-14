import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Search from './Search';
import moment from 'moment';
import CardItem from './CardItem';


const MiApi = () => {
  const [episodes, setEpisodes] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState(true);

  const url = 'https://api.sampleapis.com/simpsons/episodes';

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setEpisodes(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let results = [];
  if (!search) {
    results = episodes;
  } else {
    results = episodes.filter((episode) =>
      episode.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const handleReverse = () => {
    setSortOrder(!sortOrder);
    setEpisodes([...episodes].reverse());
  };

  return (
    <div className='d-flex flex-column bg-white p-4 main-container'>
      <div className='d-flex flex-column flex-lg-row mb-4'>
        <div className='d-flex flex-grow-1 mb-4 mb-lg-0'>
          <Search search={search} onChange={handleSearch} />
        </div>
        <div className='d-flex flex-grow-1 justify-content-end'>
          <button className='d-flex flex-grow-1 flex-lg-grow-0 btn btn-primary justify-content-center' onClick={handleReverse}>
            {sortOrder ? 'Last released' : 'First released'}
          </button>
        </div>
      </div>
      <Row>
          {results.map((episode) => (
            <Col lg={3} md={6} className='mb-4'>
                <CardItem
                  key={episode.id}
                  season={episode.season}
                  episode={episode.episode}
                  name={episode.name}
                  description={episode.description}
                  airDate={moment(episode.airDate).format('DD/MM/YYYY')}
                  thumbnailUrl={episode.thumbnailUrl}
                  rating={episode.rating}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://i.pinimg.com/originals/d7/69/9f/d7699fe324036f1afa98bbbab4ff82d6.jpg';
                  }}
                  id={episode.id}
                />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default MiApi;
