import { useEffect } from "react"
import { PageTitle, Spacer } from "../lib/utils"
import { Information } from "../atom/Information"

type YoutubePageProps = {
    url: string
}

export function YoutubePage(props: YoutubePageProps): JSX.Element {
    useEffect(() => {
        console.info(`[YoutubePage] url: [${props.url}]`)
    }, [props.url])

    return (
        <>
            <PageTitle>YouTube 動画の埋め込み</PageTitle>

            <Spacer />
            <Information>
                埋め込み IFRAME の確認ページです。
            </Information>

            <Spacer />
            <iframe width="1008" height="567" src={props.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </>
    )
}
