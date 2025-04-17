import { useEffect, useState } from "react"
import { PageTitle, Spacer } from "../lib/utils"
import { Information } from "../atom/Information"

/**
 * ポップアップのサンプル
 *
 * @param props コンポーネントのプロパティ
 * @returns JSX.Element
 */
export function PopupExample(props: {}): JSX.Element {
    // 拡大率
    const [scale, setScale] = useState<number>(1.0)

    useEffect(() => {
        // initializeIframe(url);
    }, [])

    useEffect(() => {
        console.log(`[TransformOrZoomPage1] scale: ${scale}`)
    }, [scale])

    return (
        <>
            <PageTitle>埋め込み IFRAME の確認</PageTitle>

            <Spacer />
            <Information>
                拡大と縮小のサンプルです。
            </Information>

            {/* 無駄な隙間 */}
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
        </>
    )
}
