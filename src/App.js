import ProductsList from "./components/ProductsList";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductsList} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
