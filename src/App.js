import React, { useEffect, Suspense, lazy } from 'react';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth';

import './App.css';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
// const NotFoundView = lazy(() => import('./views/NotFoundView'));

const App = () => {
  const dispatch = useDispatch();
  // componentDidMount() {
  //   this.props.onGetCurrentUser();
  // }

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />

          <PublicRoute
            path="/register"
            restricted
            component={RegisterView}
            redirectTo="/contacts"
          />

          <PublicRoute
            path="/login"
            restricted
            component={LoginView}
            redirectTo="/contacts"
          />

          <PrivateRoute
            path="/contacts"
            component={ContactsView}
            redirectTo="/login"
          />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser();
//   }

//   render() {
//     return (
//       <Container>
//         <AppBar />

//         <Suspense fallback={<p>Loading...</p>}>
//           <Switch>
//             <PublicRoute exact path="/" component={HomeView} />
//             <PublicRoute
//               path="/register"
//               restricted
//               component={RegisterView}
//               redirectTo="/contacts"
//             />
//             <PublicRoute
//               path="/login"
//               restricted
//               component={LoginView}
//               redirectTo="/contacts"
//             />
//             <PrivateRoute
//               path="/contacts"
//               component={ContactsView}
//               redirectTo="/login"
//             />
//             {/* <PublicRoute component={NotFoundView} /> */}
//           </Switch>
//         </Suspense>
//       </Container>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
