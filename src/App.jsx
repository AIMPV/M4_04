import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MiApi from './components/MiApi';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <div>
        <NavBar />
        <section className="hero-section">
          <Container className="text-center">
            <div className='d-flex flex-column mb-4'>
              <h1 className="display-2 fw-bold">Episode search</h1>
              <h2>From season 1 to 10</h2>
            </div>
          </Container>
        </section>
        <Container>
          <MiApi></MiApi>
        </Container>
        <footer className="footer mt-auto py-3 bg-light">
          <Container>
            <span className="text-muted d-flex align-items-center justify-content-center">The Simpsons - Episode search</span>
          </Container>
        </footer>
      </div>
    </>
  )
}

export default App
