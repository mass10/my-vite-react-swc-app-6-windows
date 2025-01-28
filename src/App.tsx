import { useEffect, useState } from 'react'
import './App.css'
import { DefaultPage } from './DefaultPage'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'




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

  return (
    <>
      {/* ヘッダー */}
      <Header />
      <div style={{ display: "flex" }}>
        {/* サイドバー */}
        <Sidebar pageContext={pageContext} handleAnchor={(menuitem) => {
          console.info(`[App] menuitem: [${menuitem}]`)
          setMenuitem(menuitem)
        }} />
        {/* コンテンツ */}
        <DefaultPage menuitem={menuitem} />
      </div>
      {/* フッター */}
      <Footer />
    </>
  )
}

export default App
