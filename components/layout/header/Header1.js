import Link from "next/link"
import Menu from "../Menu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handleSidebar, isSearch, handleSearch }) {
    return (
        <>

            <header className={`header-section cmn-fixed hb-border py-lg-0 py-6 ${scroll ? "animated fadeInDown header-fixed" : ""}`}>
                <div className="container">
                    <div className="main-navbar">
                        <nav className="navbar-custom">
                            <div className="d-lg-flex flex-xl-nowrap flex-wrap align-items-center justify-content-lg-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link href="/" className="brand-logo">
                                        <img className="w-100" src="/assets/img/logo/logo2.png" alt="Finvico" height={80}/>
                                    </Link>
                                    <button className={`navbar-toggle-btn d-block d-lg-none ${isMobileMenu ? "open" : ""}`} type="button" onClick={handleMobileMenu}>
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </button>
                                </div>
                                <div className="navbar-toggle-item" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                                    <Menu />
                                </div>
                                <div className="d-lg-flex d-grid justify-content-center ph-clickwrap align-items-center gap-xxl-7 gap-xl-6 gap-lg-5 gap-3">
                                    <Link href="#" className="d-flex align-items-center header-ph gap-2">
                                    
                                    </Link>
                                    <div className="remove-click remove-clickbg-adding d-center m-auto" onClick={handleSidebar}>
                                        <i className="fas fa-bars" />
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    )
}
