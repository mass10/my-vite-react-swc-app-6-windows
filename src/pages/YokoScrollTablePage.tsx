import { useEffect, useState } from "react"
import { PageTitle, Spacer } from "../lib/utils"
import { Information } from "../atom/Information"
import { MicrosoftLogoSvg } from "../atom/MicrosoftLogoSvg"

export function YokoScrollTablePage(props: {}): JSX.Element {

    // ランダムなログインデータ (20件)
    // ・アクセス日時
    // ・ユーザ名(local-part@my-company.co.jp)
    // ・アクセス元 IP アドレス
    // ・アクセス先 URL
    // ・アクセス結果 (成功 or 失敗)
    // ・アクセス結果の詳細
    const records = [
        {
            accessId: 1,
            userId: "user1",
            timestamp: "2023-10-27 10:00:00",
            ipAddress: "192.168.1.100",
            device: "desktop",
            os: "Windows 10",
            browser: "Chrome",
            pageUrl: "https://example.com/dashboard",
            action: "login",
            status: "success",
        },
        {
            accessId: 2,
            userId: "user2",
            timestamp: "2023-10-27 10:05:00",
            ipAddress: "192.168.1.101",
            device: "mobile",
            os: "Android 11",
            browser: "Chrome",
            pageUrl: "https://example.com/profile",
            action: "profile view",
            status: "success",
        },
        {
            accessId: 3,
            userId: "user3",
            timestamp: "2023-10-27 10:10:00",
            ipAddress: "192.168.1.102",
            device: "desktop",
            os: "macOS 12",
            browser: "Safari",
            pageUrl: "https://example.com/settings",
            action: "settings change",
            status: "success",
        },
        {
            accessId: 4,
            userId: "user1",
            timestamp: "2023-10-27 10:15:00",
            ipAddress: "192.168.1.100",
            device: "desktop",
            os: "Windows 10",
            browser: "Chrome",
            pageUrl: "https://example.com/dashboard",
            action: "data download",
            status: "success",
        },
        {
            accessId: 5,
            userId: "user4",
            timestamp: "2023-10-27 10:20:00",
            ipAddress: "192.168.1.103",
            device: "mobile",
            os: "iOS 15",
            browser: "Safari",
            pageUrl: "https://example.com/search",
            action: "search",
            status: "success",
        },
        {
            accessId: 6,
            userId: "user2",
            timestamp: "2023-10-27 10:25:00",
            ipAddress: "192.168.1.101",
            device: "mobile",
            os: "Android 11",
            browser: "Chrome",
            pageUrl: "https://example.com/logout",
            action: "logout",
            status: "success",
        },
        {
            accessId: 7,
            userId: "user5",
            timestamp: "2023-10-27 10:30:00",
            ipAddress: "192.168.1.104",
            device: "desktop",
            os: "Linux",
            browser: "Firefox",
            pageUrl: "https://example.com/help",
            action: "help view",
            status: "success",
        },
        {
            accessId: 8,
            userId: "user3",
            timestamp: "2023-10-27 10:35:00",
            ipAddress: "192.168.1.102",
            device: "desktop",
            os: "macOS 12",
            browser: "Safari",
            pageUrl: "https://example.com/dashboard",
            action: "data upload",
            status: "success",
        },
        {
            accessId: 9,
            userId: "user6",
            timestamp: "2023-10-27 10:40:00",
            ipAddress: "192.168.1.105",
            device: "mobile",
            os: "Android 12",
            browser: "Chrome",
            pageUrl: "https://example.com/login",
            action: "login",
            status: "failure",
        },
        {
            accessId: 10,
            userId: "user1",
            timestamp: "2023-10-27 10:45:00",
            ipAddress: "192.168.1.100",
            device: "desktop",
            os: "Windows 10",
            browser: "Chrome",
            pageUrl: "https://example.com/report",
            action: "report creation",
            status: "success",
        },
        {
            accessId: 11,
            userId: "user7",
            timestamp: "2023-10-27 10:50:00",
            ipAddress: "192.168.1.106",
            device: "mobile",
            os: "iOS 16",
            browser: "Safari",
            pageUrl: "https://example.com/notification",
            action: "notification check",
            status: "success",
        },
        {
            accessId: 12,
            userId: "user4",
            timestamp: "2023-10-27 10:55:00",
            ipAddress: "192.168.1.103",
            device: "mobile",
            os: "iOS 15",
            browser: "Safari",
            pageUrl: "https://example.com/edit",
            action: "data edit",
            status: "success",
        },
        {
            accessId: 13,
            userId: "user8",
            timestamp: "2023-10-27 11:00:00",
            ipAddress: "192.168.1.107",
            device: "desktop",
            os: "Windows 11",
            browser: "Edge",
            pageUrl: "https://example.com/login",
            action: "login",
            status: "success",
        },
        {
            accessId: 14,
            userId: "user2",
            timestamp: "2023-10-27 11:05:00",
            ipAddress: "192.168.1.101",
            device: "mobile",
            os: "Android 11",
            browser: "Chrome",
            pageUrl: "https://example.com/dashboard",
            action: "dashboard view",
            status: "success",
        },
        {
            accessId: 15,
            userId: "user9",
            timestamp: "2023-10-27 11:10:00",
            ipAddress: "192.168.1.108",
            device: "desktop",
            os: "macOS 13",
            browser: "Chrome",
            pageUrl: "https://example.com/logout",
            action: "logout",
            status: "success",
        },
        {
            accessId: 16,
            userId: "user5",
            timestamp: "2023-10-27 11:15:00",
            ipAddress: "192.168.1.104",
            device: "desktop",
            os: "Linux",
            browser: "Firefox",
            pageUrl: "https://example.com/download",
            action: "file download",
            status: "success",
        },
        {
            accessId: 17,
            userId: "user10",
            timestamp: "2023-10-27 11:20:00",
            ipAddress: "192.168.1.109",
            device: "mobile",
            os: "Android 13",
            browser: "Chrome",
            pageUrl: "https://example.com/register",
        }
    ];

    const COLUMNS = [
        "アクセス ID",
        "ユーザ ID",
        "アクセス日時",
        "IP アドレス",
        "デバイス",
        "OS",
        "ブラウザ",
        "ページ URL",
    ];


    return (
        <>
            <PageTitle>横スクロールするコンテンツ</PageTitle>

            <Spacer />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <Information>
                    横にスクロールするコンテンツです。
                </Information>
            </div>

            <Spacer />
            <div style={{ height: "600px", border: "1px solid red", overflowX: "scroll" }}>
                <table>
                    <tr>
                        <th style={{ minWidth: "150px" }} >アクセス ID</th>
                        <th style={{ minWidth: "150px" }} >ユーザ ID</th>
                        <th style={{ minWidth: "150px" }} >アクセス日時</th>
                        <th style={{ minWidth: "150px" }} >IP アドレス</th>
                        <th style={{ minWidth: "150px" }} >デバイス</th>
                        <th style={{ minWidth: "150px" }} >OS</th>
                        <th style={{ minWidth: "150px" }} >ブラウザ</th>
                        <th style={{ minWidth: "240px" }} >ページ URL</th>
                        <th style={{ minWidth: "140px" }} >HTTP Status</th>
                    </tr>
                    {records.map((record, index) => {
                        return (
                            <tr key={index}>
                                <td>{record.accessId}</td>
                                <td>{record.userId}</td>
                                <td>{record.timestamp}</td>
                                <td>{record.ipAddress}</td>
                                <td>{record.device}</td>
                                <td>{record.os}</td>
                                <td>{record.browser}</td>
                                <td>{record.pageUrl}</td>
                                <td>200</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </>
    )
}
