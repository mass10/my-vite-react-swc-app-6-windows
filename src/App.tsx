import { useEffect, useState } from 'react'
import './App.css'
import { ContentPane } from './DefaultPage'
import { HeaderPane } from './Header'
import { SidebarPane } from './Sidebar'
import { Footer } from './Footer'

// function generateRandomToken(): string {
//   return Math.random().toString(36).slice(-8)
// }

function getElementHeight(elementId: string): number {
  const e = document.getElementById(elementId);
  return e?.clientHeight || 0
}

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

  useEffect(() => {
    const headerHeight = getElementHeight("header-pane")
    const contentAreaHeight = getElementHeight("content-base-pane");
    const footerHeight = getElementHeight("footer-pane")
    const pageHeight = window.innerHeight;

    console.info(`[App] header height: [${headerHeight}], content-pane 高さ: [${contentAreaHeight}], footer height: [${footerHeight}], page height: [${pageHeight}]`)
  }, []);

  return (
    <>
      {/* ヘッダー */}
      <HeaderPane />
      <div id="content-base-pane" style={{ display: "flex", height: "calc(100vh - 80px - 89px - 2px)" }}>
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
