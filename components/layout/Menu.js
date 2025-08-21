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
        <a href="#0" className="position-relative ps-5 fw_500 white-clr cus-z1">
            How It Works
        </a>
        <ul className="sub-menu px-lg-4 py-xxl-3 py-2">
            <li className="menu-link py-1">
                <Link href="/how-it-works/choose-account" className="fw_500 white-clr">Get Capital Access</Link>
            </li>
            <li className="menu-link py-1">
                <Link href="/how-it-works/evaluation" className="fw_500 white-clr">Pass Evaluation</Link>
            </li>
            <li className="menu-link py-1">
                <Link href="/how-it-works/funded-account" className="fw_500 white-clr">Funded Account</Link>
            </li>
            <li className="menu-link py-1">
                <Link href="/how-it-works/earnPayouts" className="fw_500 white-clr">Earn Payouts</Link>
            </li>
        </ul>
    </li>
    {/*<li className="menu-item position-relative">
        <a href="#0" className="position-relative ps-5 fw_500 white-clr cus-z1">
            Resources
        </a>
        <ul className="sub-menu px-lg-4 py-xxl-3 py-2">
            <li className="menu-link py-1">
                <Link href="/resources/market-insights" className="fw_500 white-clr">FAQs</Link>
            </li>
            <li className="menu-link py-1">
                <Link href="/resources/research-reports" className="fw_500 white-clr">Risk Disclosure</Link>
            </li>
            <li className="menu-link py-1">
                <Link href="/resources/investment-strategies" className="fw_500 white-clr">Terms & Conditions</Link>
            </li>
            <li className="menu-link py-1">
                <Link href="/faq" className="fw_500 white-clr">Privacy Policy</Link>
            </li>
        </ul>
    </li>*/}
    <li className="menu-item position-relative">
        <Link href="/contact" className="fw_500 white-clr">
            Contact Us
        </Link>
    </li>
</ul>


        </>
    )
}

