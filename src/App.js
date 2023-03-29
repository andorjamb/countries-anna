import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { onAuthStateChanged } from 'firebase/auth';

import Countries from './components/Countries';
import CountriesSingle from './components/CountriesSingle';
import Home from './components/Home';
import Layout from './pages/Layout';
import Favourites from './components/Favourites';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './app/auth/firestore';
import ProtectedRoute from './app/auth/ProtectedRoute'
import { setLoggedIn} from './features/userSlice';



const App = () => {

  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.loggedIn);

  const [user, loading, error] = useAuthState(auth); //user: The auth.UserCredential if logged in, or null if not

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setLoggedIn(true));

    });
    return () => {
      unsubscribe();
    };
  }, []);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:single" element={<CountriesSingle />} />

          <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
            <Route path="/favourites" element={<Favourites />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
