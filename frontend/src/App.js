import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Product from './Pages/Product';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={Product} exact />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
