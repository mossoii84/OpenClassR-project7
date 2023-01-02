import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Apropos from '../pages/Apropos'
import Logement from '../pages/Logement'
import Error from '../error/Error'

export default function Routers() {
  return (
    <div>
        <Routes>
          <Route exact  path="/" element={<Home />} />
          <Route exact  path="/apropos" element={<Apropos />} />
          <Route exact  path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </div>
  )
}
