import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Post from './Post'
import { LangProvider } from './LangContext'

export default function App() {
  return (
    <LangProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Post />} />
        </Routes>
      </HashRouter>
    </LangProvider>
  )
}
