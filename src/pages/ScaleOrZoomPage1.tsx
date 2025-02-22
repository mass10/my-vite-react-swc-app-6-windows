import { useEffect, useState } from "react"
import { PageTitle, Spacer } from "../lib/utils"
import { Information } from "../atom/Information"
import { MicrosoftLogoSvg } from "../atom/MicrosoftLogoSvg"

/**
 * transform によって、拡大・縮小表示するキャンバス
 */
function TransformCanvas(props: { scale: number | null }): JSX.Element {
    const { scale } = props

    const baseStyle = {
        width: 500,
        height: 500,
        border: "1px solid black",
    }

    const canvasStyle = {
        ...baseStyle,
        transform: `scale(${scale})`,
        transformOrigin: "0 0",
    }

    return (
        <div style={canvasStyle}>
            <MicrosoftLogoSvg />
        </div>
    )
}

/**
 * zoom によって、拡大・縮小表示するキャンバス
 */
function ZoomCanvas(props: { scale: number }): JSX.Element {
    const { scale } = props

    return (
        <div style={{ width: 500, height: 500, border: "1px solid black", zoom: scale }}>
            <MicrosoftLogoSvg />
        </div>
    )
}

export function TransformOrZoomPage1(props: {}): JSX.Element {

    // 拡大率
    const [scale, setScale] = useState<number>(1.0)

    useEffect(() => {
        console.info(`[TransformOrZoomPage1] $$$ LOAD $$$`)
        return () => {
            console.info(`[TransformOrZoomPage1] --- UNLOAD ---`)
        }
    }, [])

    useEffect(() => {
        console.log(`[TransformOrZoomPage1] scale: ${scale}`)
    }, [scale])

    return (
        <>
            <PageTitle>transform/zoom の確認</PageTitle>

            <Spacer />
            <Information>
                拡大と縮小のサンプルです。
            </Information>

            <Spacer />
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <div style={{ textAlign: "left" }}>拡大率: 0.1～2.0</div>
                <input type="range" min="0.1" max="2.0" step="0.1" defaultValue="1.0"
                    onChange={(e) => {
                        const scale = parseFloat(e.target.value)
                        setScale(scale)
                    }}
                />
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <div style={{ padding: 5, width: 500, height: 500, border: "0px solid black", backgroundColor: "lightgray" }}>
                    <TransformCanvas scale={scale} />
                </div>
                <div style={{ padding: 5, width: 500, height: 500, border: "0px solid black", backgroundColor: "lightgray" }}>
                    <ZoomCanvas scale={scale} />
                </div>
            </div>
        </>
    )
}
