import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Post from './Post'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </HashRouter>
  )
}
