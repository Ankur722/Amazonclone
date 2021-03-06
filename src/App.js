import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home';
import Orders from './Orders';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51KeBiESGtfd28WY0b34LjVeiDEVa0WArmr2OVqMw7rWblQUPZkyxA3W8ZumKZqgwmDs8xOx0q4LrtGVpFQvMoVtD00YS6KT78u");

function App() {

  const[{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log("The user is", authUser);

      if (authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/orders">
        <Header />
        <Orders />
      </Route>
      <Route path="/checkout">
        <Header />
        <Checkout />
      </Route>
      <Route path="/payment">
        <Header />
        <Elements stripe={promise}>
          <Payment />
        </Elements>
      </Route>
      <Route path="/">
        <Header />
        <Home />
      </Route>
    </Switch>
      </div>
    </Router>
  );
}

export default App;
