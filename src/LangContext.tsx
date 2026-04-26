import { createContext, useContext, useState, type ReactNode } from 'react'

type Lang = 'en' | 'cn'

const LangContext = createContext<{ lang: Lang; toggleLang: () => void }>({
  lang: 'en',
  toggleLang: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem('site-lang') as Lang) ?? 'en'
  )
  function toggleLang() {
    setLang(l => {
      const next = l === 'en' ? 'cn' : 'en'
      localStorage.setItem('site-lang', next)
      return next
    })
  }
  return <LangContext.Provider value={{ lang, toggleLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
