import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import Register from 'pages/Register';
import Login from 'pages/Login';
import BookContacts from 'pages/BookContacts';
import Private from './Private';
import Public from './Public';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar/>}>
          <Route path="register" element={
            <Public restricted redirectTo='/contacts' component={<Register/>}/>
          }/>
          <Route path="login" element={
            <Public restricted redirectTo='/contacts' component={<Login/>}/>}/>
          <Route
            path="/contacts"
            element={
              <Private redirectTo="/login" component={<BookContacts />} />
            }
          />
        </Route>
      </Routes>
    </>
  )
}