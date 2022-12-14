// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './MyComponents/Home'
// import Contact from './MyComponents/Contact';
import Contactus from './MyComponents/Contactus';
import About from './MyComponents/About';
import Navbar from './MyComponents/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom';
import Service from './MyComponents/Service';
import Teams from './MyComponents/Teams';
import Footer from './MyComponents/Footer'
import GotoTop from './MyComponents/GotoTop'
// import Footer from '../src/MyComponents/footer'
function App() {
  return (
    <>
      
      <Navbar />
      <Switch>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contactus} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/teams" component={Teams} />

        <Redirect to="/" />

      </Switch>
      <Footer />
    </>
  );
}

export default App;
