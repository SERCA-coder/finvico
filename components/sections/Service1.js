'use client'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Service1() {
    const [isAccordion, setIsAccordion] = useState(1)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    return (
        <>

            <section className="service-section pt-space pb-space">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                OUR SERVICES
                            </div>
                            <h2 className="stitle">
                                Professional <span className="fw-400">portfolio management</span> solutions
                            </h2>
                        </div>
                        <Link href="/service" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            View All Services
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    {/*Service Tabing section*/}
                    <div className="row g-xxl-6 g-4">
                        <div className="service-tabing-wrap Faqs-section">
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${isAccordion === 1 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(1)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                01
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                    Asset Management
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                Professional portfolio management services tailored to your investment goals. 
                                                We provide comprehensive asset allocation strategies and ongoing portfolio optimization.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Portfolio Construction
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Risk Management
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Performance Monitoring
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Rebalancing Services
                                                </li>
                                            </ul>
                                            <div className="tab-remove-thumb">
                                                <img src="/assets/img/service/tab1.jpg" alt="img" width={350} height={200}  style={{ width: '100%', height: 'auto', maxWidth: '350px' }}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${isAccordion === 2 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(2)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                02
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                    Custody & Clearing
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                Secure custody services with comprehensive clearing and settlement solutions. 
                                                We ensure the safekeeping of your assets with institutional-grade security.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Asset Safekeeping
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Trade Settlement
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Corporate Actions
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Reporting Services
                                                </li>
                                            </ul>
                                            <div className="tab-remove-thumb">
                                                <img src="/assets/img/service/tab2.jpg" alt="img"  width={350} height={200}   style={{ width: '100%', height: 'auto', maxWidth: '350px' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${isAccordion === 3 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(3)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                03
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                    Brokerage Services
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                Access to global markets with competitive execution and comprehensive trading solutions. 
                                                We provide liquidity across multiple asset classes and jurisdictions.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Fixed Income Trading
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Equity Execution
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> FX Trading
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Derivatives
                                                </li>
                                            </ul>
                                            <div className="tab-remove-thumb">
                                                <img src="/assets/img/service/tab3.jpg" alt="img"   style={{ width: '100%', height: 'auto', maxWidth: '350px' }}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border ${isAccordion === 4 ? "active" : ""}`}>
                                <div className="header-area" onClick={() => handleAccordion(4)}>
                                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                        <div className="mtitle-ara">
                                            <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                04
                                                <span className="rot60 d-inline-block theme-clr">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </span>
                                            <span className="mtitle d-block mt-6">
                                                    Underwriting
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                Capital markets expertise with comprehensive underwriting services for debt and equity offerings. 
                                                We help issuers access capital markets efficiently.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Debt Underwriting
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Equity Offerings
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Structured Products
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Advisory Services
                                                </li>
                                            </ul>
                                            <div className="tab-remove-thumb">
                                                <img src="/assets/img/service/tab4.png" alt="img"  style={{ width: '100%', height: 'auto', maxWidth: '350px' }}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Service Tabing section*/}
                </div>
            </section>
        </>
    )
}
