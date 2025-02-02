import { useEffect, useState } from 'react'
import './App.css'
import { ContentPane } from './DefaultPage'
import { HeaderPane } from './Header'
import { SidebarPane } from './Sidebar'
import { Footer } from './Footer'

// function generateRandomToken(): string {
//   return Math.random().toString(36).slice(-8)
// }

function App(): JSX.Element {
  useEffect(() => {
    console.info(`[App] $$$ LOAD $$$`)
    return () => {
      console.info(`[App] --- UNLOAD ---`)
    }
  }, [])

  const pageContext = {
    title: 'Home',
    description: 'Home page',
    keywords: 'home, page',
  }

  const [menuitem, setMenuitem] = useState<string>('')
  const [currentTimestamp, setCurrentTimestamp] = useState<number>(Date.now())

  return (
    <>
      {/* ヘッダー */}
      <HeaderPane />
      <div style={{ display: "flex" }}>
        {/* サイドバー */}
        <SidebarPane pageContext={pageContext} handleAnchor={(menuitem) => {
          console.info(`[App] menuitem: [${menuitem}]`)
          setMenuitem(menuitem)
          setCurrentTimestamp(Date.now())
        }} />
        {/* コンテンツ */}
        <ContentPane menuitem={menuitem} random={"" + currentTimestamp} />
      </div>
      {/* フッター */}
      <Footer />
    </>
  )
}

export default App
