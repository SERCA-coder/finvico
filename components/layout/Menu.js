'use client'

import Link from 'next/link'
// import { usePathname } from 'next/navigation'

export default function Menu() {
    // const pathname = usePathname()
    // const [currentMenuItem, setCurrentMenuItem] = useState("")

    // useEffect(() => {
    //     setCurrentMenuItem(pathname)
    // }, [pathname])

    // const checkCurrentMenuItem = (path) => currentMenuItem === path ? "active" : ""
    // const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "active" : ""

    return (
        <>
            {/* <ul className="menu">
                <li className={`dropdown ${checkParentActive(["/home-02", "/home-03"])}`}>
                    <Link href="/#">Home</Link>
                    <ul className="sub-menu">
                        <li className={`item ${checkCurrentMenuItem("/")}`}>
                            <Link href="//">Home 1</Link>
                        </li>
                        <li className={`item ${checkCurrentMenuItem("/home-02")}`}>
                            <Link href="//home-02">Home 2</Link>
                        </li>
                    </ul>
                </li>
                <li className={`item ${pathname === "/about" ? "active" : ""}`}>
                    <Link href="//about">about</Link>
                </li>
            </ul> */}
            <ul className="custom-nav d-lg-flex d-grid gap-xxl-10 gap-xl-8 gap-lg-5 gap-md-2 gap-2 pt-lg-0 pt-5">
                <li className="menu-item position-relative">
                    <Link href="/" className="fw_500 white-clr">
                        Home
                    </Link>
                </li>
                <li className="menu-item position-relative">
                    <Link href="/about" className="fw_500 white-clr">
                        About
                    </Link>
                </li>
                <li className="menu-item position-relative">
                    <Link href="/service" className="fw_500 white-clr">
                        Services
                    </Link>
                </li>
                <li className="menu-item position-relative">
                    <a href="#0" className="position-relative ps-5 fw_500 white-clr cus-z1">
                        Investment Products
                    </a>
                    <ul className="sub-menu px-lg-4 py-xxl-3 py-2">
                        <li className="menu-link py-1">
                            <Link href="/investment-products/fixed-income" className="fw_500 white-clr">Fixed Income</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/investment-products/equities" className="fw_500 white-clr">Equities</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/investment-products/foreign-exchange" className="fw_500 white-clr">Foreign Exchange</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/investment-products/derivatives" className="fw_500 white-clr">Derivatives</Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item position-relative">
                    <a href="#0" className="position-relative ps-5 fw_500 white-clr cus-z1">
                        Resources
                    </a>
                    <ul className="sub-menu px-lg-4 py-xxl-3 py-2">
                        <li className="menu-link py-1">
                            <Link href="/resources/market-insights" className="fw_500 white-clr">Market Insights</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/resources/research-reports" className="fw_500 white-clr">Research Reports</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/resources/investment-strategies" className="fw_500 white-clr">Investment Strategies</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/faq" className="fw_500 white-clr">FAQs</Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item position-relative">
                    <Link href="/contact" className="fw_500 white-clr">
                        Contact
                    </Link>
                </li>
            </ul>
        </>
    )
}

