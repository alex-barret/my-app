import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

import NavBar from './Components/Layout/NavBar'
import Footer from './Components/Layout/Footer'
import Home from './Pages/Home'
import Empresa from './Pages/Empresa'
import Contato from './Pages/Contato'


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
        <Route path="/empresa">
          <Empresa />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}


export default App
