import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap'
import Courses from './components/Courses';

const App = () => {
  return (
    <>
    <Header/>
    <main className='py-3'>
    <Container>
      <Courses/>
    </Container>  
    </main>
    <Footer/>
    </>
  )
}

export default App;
