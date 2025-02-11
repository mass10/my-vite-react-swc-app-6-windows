import { useEffect, useState } from 'react'
import './App.css'
import { ContentPanel } from './atom/ContentPanel'
import { HeaderPanel } from './atom/HeaderPanel'
import { SidePanel } from './atom/SidePanel'
import { FooterPanel } from './atom/FooterPanel'
import { Utils } from './lib/utils'


/**
 * アプリケーション ルート コンポーネント
 */
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
    const headerHeight = Utils.getElementHeight("header-pane")
    const contentAreaHeight = Utils.getElementHeight("content-base-pane");
    const footerHeight = Utils.getElementHeight("footer-pane")
    const pageHeight = window.innerHeight;

    console.info(`[App] header height: [${headerHeight}], content-pane 高さ: [${contentAreaHeight}], footer height: [${footerHeight}], page height: [${pageHeight}]`)
  }, []);

  return (
    <>
      {/* ヘッダー */}
      <HeaderPanel />
      <div id="content-base-pane" style={{ display: "flex" }}>
        {/* サイドバー */}
        <SidePanel pageContext={pageContext} handleAnchor={(menuitem) => {
          console.info(`[App] menuitem: [${menuitem}]`)
          setMenuitem(menuitem)
          setCurrentTimestamp(Date.now())
        }} />
        {/* コンテンツ */}
        <ContentPanel menuitem={menuitem} />
      </div>
      {/* フッター */}
      <FooterPanel />
    </>
  )
}

export default App
