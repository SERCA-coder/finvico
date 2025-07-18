import Link from "next/link"
import Menu from "../Menu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handleSidebar, isSearch, handleSearch }) {
    return (
        <>
            <header className={`header-section cmn-fixed py-lg-0 py-6 ${scroll ? "animated fadeInDown header-fixed" : ""}`}>
                <div className="container">
                    <div className="main-navbar">
                        <nav className="navbar-custom">
                            <div className="d-lg-flex flex-xl-nowrap flex-wrap align-items-center justify-content-lg-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link href="/" className="brand-logo">
                                        <img className="w-100" src="/assets/img/logo/logo2.png" alt="Finvico" height={80}/>
                                    </Link>
                                    <div className="d-flex align-items-center gap-xxl-5 gap-5">
                                        <Link href="/javascript:void(0)" className="search-trigger search-icon d-lg-none d-block">
                                            <i className="fal fa-search" />
                                        </Link>
                                        <button className={`navbar-toggle-btn d-block d-lg-none ${isMobileMenu ? "open" : ""}`} type="button" onClick={handleMobileMenu}>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </button>
                                    </div>
                                </div>
                                <div className="navbar-toggle-item" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                                    <Menu />
                                </div>
                                <div className="d-lg-flex d-none d-grid justify-content-center ph-clickwrap align-items-center gap-xxl-7 gap-xl-6 gap-lg-5 gap-3">
                                    <div className="search-shopcart d-flex gap-xxl-9 gap-xl-5 gap-3">
                                        <a onClick={handleSearch} className="search-trigger search-icon">
                                            <i className="fal fa-search" />
                                        </a>
                                    </div>
                                    <Link href="/login" className="d-flex align-items-center gap-2 soft-login-btn">
                                        <span className="login-icon">
                                            <i className="fas fa-user-circle" />
                                        </span>
                                        <span className="login-text">Client Portal</span>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
