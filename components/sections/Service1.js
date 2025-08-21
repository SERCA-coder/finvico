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
                                Structured evaluation-based <span className="fw-400">funding for retail</span> traders
                            </h2>
                        </div>
                        <Link href="/about" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            Read more about us
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
                                                    Funded Trading Accounts
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                Access company-provided capital by passing our evaluation. No management of client assets — just performance-based opportunities for independent traders.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Evaluation-Based Access

                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Capital Allocation

                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Drawdown Protection
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Payout Tracking
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
                                                    Funded Account Access

                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                               Get access to company-backed capital through a structured, rule-based evaluation. All trading is initially performed in a simulated environment with real-time market conditions.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Simulated Trading Environment
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Rule-Based Evaluation
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Compliance-Based Funded Accounts
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Transparent Payout Process
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
                                                    Trader-Focused Access
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                We provide funded account opportunities for skilled traders using real market data. All trading begins in a simulated environment, with structured risk parameters and performance-based progression.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Live Market Data
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Trading Evaluation
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Payout Eligibility
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Capital Allocation
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
                                                    Trader Evaluation Program
                                            </span>
                                            <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                Our structured evaluation gives traders the opportunity to qualify for company-funded accounts. There’s no need to raise capital or manage outside investments — just focus on consistent, disciplined trading.
                                            </span>
                                        </div>
                                        <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                            <ul className="modern-list d-grid gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clear Rules
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> No Capital Needed
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Pass to Get Funded
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Trade with Confidence
                                                </li>
                                            </ul>
                                            <div className="tab-remove-thumb">
                                                <img src="/assets/img/service/tab2.jpg" alt="img"  style={{ width: '100%', height: 'auto', maxWidth: '350px' }}/>
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
