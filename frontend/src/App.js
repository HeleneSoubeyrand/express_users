import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UsersContextProvider } from './contexts/Users'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import User from './pages/User'
import NotFound from './pages/NotFound'


const App = () => {
  return (
      <BrowserRouter>
        <UsersContextProvider>
          <div style={{ margin: "0 100px" }} >
            <NavBar/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/users" element={<Home />} />
                <Route path="/users/:slug" element={<User />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </UsersContextProvider>
      </BrowserRouter>
  )
}

export default App