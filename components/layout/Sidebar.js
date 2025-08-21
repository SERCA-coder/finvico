import Link from 'next/link'
export default function Sidebar({ isSidebar, handleSidebar }) {
    return (
        <>
            <div className={`subside-barmenu ${isSidebar ? "active" : ""}`}>
                <div className="remove-click d-flex justify-content-center align-items-center" onClick={handleSidebar}>
                    <i className="fas fa-times" />
                </div>
                <div className="sub-contact-wrapper d-grid">
                    <Link href="/" className="side-logo">
                        <img src="/assets/img/logo/logo2.png" alt="Finvico"  width={110} height={80}/>
                    </Link>
                    <p style={{color: "black"}}>
                       Finvico is a proprietary trading firm specializing in advanced trading strategies and capital management. Empowering skilled traders with firm-funded accounts to maximize market opportunities.
                    </p>
                    <div className="sub-contact-left d-grid">
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    Address
                                </span>
                                <span className="textp">
                                    Sky Tower Office Building. HaMasger Street 35, Tel Aviv-Yafo
                                </span>
                            </div>
                        </div>
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    Email
                                </span>
                                <Link href="/javascript:void(0)" className="textp">
                                    info@finvico.com
                                </Link>
                            </div>
                        </div>
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    Call now
                                </span>
                                <Link href="/jasacript:void(0)" className="textp">
                                    +972 52‑549‑0816
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/contact" className="d-flex cmn-btn cmn-border justify-content-center fw-500 align-items-center gap-2 py-xl-3 py-2 px-2 rounded">
                        <span className="icons">
                            <i className="fas fa-arrow-up white" />
                        </span>
                        <span className="get-text">
                            Contact Us
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}
