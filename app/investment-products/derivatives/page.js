'use client'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'

export default function Derivatives() {
    const [isAccordion, setIsAccordion] = useState(1)
    
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Derivatives">
                <section className="service-details-v2 pt-space pb-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="investment-card-derivatives p-xxl-8 p-xl-6 p-5 h-100 d-flex flex-column mb-5 position-relative" data-aos="fade-up" data-aos-duration="1200">
                                    <div className="icon-area d-flex justify-content-center">
                                        <span className="icon"><i className="fas fa-random"></i></span>
                                    </div>
                                    <h2 className="mb-xxl-6 mb-xl-5 mb-4 text-center">Sophisticated Tools for Advanced Strategies</h2>
                                    <p className="mb-xxl-6 mb-xl-5 mb-4 text-center">
                                        Derivatives are powerful financial instruments used for hedging, speculation, and managing risk. At Finvico, we offer access to a broad array of derivative products, supported by expert analysis and strategic guidance to help you implement sophisticated investment strategies effectively.
                                    </p>
                                    <div className="service-tabing-wrap Faqs-section mt-4">
                                        <div className={`accordion-single py-xxl-6 py-xl-5 py-lg-4 py-4 bt-border ${isAccordion === 1 ? "active" : ""}`}>
                                            <div className="header-area" onClick={() => handleAccordion(1)}>
                                                <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                    <div className="mtitle-ara">
                                                        <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                            01
                                                            <span className="rot60 d-inline-block theme-clr">
                                                                <i className="fa-solid fa-arrow-right" />
                                                            </span>
                                                        </span>
                                                        <span className="mtitle d-block mt-4">
                                                            <span className="white-clr whitehover">
                                                                Options
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Utilize options contracts (puts and calls) to hedge existing positions, generate income, or speculate on market direction with limited risk.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Call Options
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Put Options
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Option Strategies
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Volatility Trading
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`accordion-single py-xxl-6 py-xl-5 py-lg-4 py-4 bt-border ${isAccordion === 2 ? "active" : ""}`}>
                                            <div className="header-area" onClick={() => handleAccordion(2)}>
                                                <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                    <div className="mtitle-ara">
                                                        <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                            02
                                                            <span className="rot60 d-inline-block theme-clr">
                                                                <i className="fa-solid fa-arrow-right" />
                                                            </span>
                                                        </span>
                                                        <span className="mtitle d-block mt-4">
                                                            <span className="white-clr whitehover">
                                                                Futures
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Trade futures contracts to speculate on the future price of commodities, indices, and financial instruments, or to hedge against price volatility.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Index Futures
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Commodity Futures
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Currency Futures
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Interest Rate Futures
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`accordion-single py-xxl-6 py-xl-5 py-lg-4 py-4 bt-border ${isAccordion === 3 ? "active" : ""}`}>
                                            <div className="header-area" onClick={() => handleAccordion(3)}>
                                                <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                    <div className="mtitle-ara">
                                                        <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                            03
                                                            <span className="rot60 d-inline-block theme-clr">
                                                                <i className="fa-solid fa-arrow-right" />
                                                            </span>
                                                        </span>
                                                        <span className="mtitle d-block mt-4">
                                                            <span className="white-clr whitehover">
                                                                Structured Products
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Access bespoke, pre-packaged investment strategies that combine various derivatives to achieve specific risk-return objectives.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Principal Protected
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Yield Enhancement
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Leveraged Products
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Custom Solutions
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`accordion-single py-xxl-6 py-xl-5 py-lg-4 py-4 bb-border bt-border ${isAccordion === 4 ? "active" : ""}`}>
                                            <div className="header-area" onClick={() => handleAccordion(4)}>
                                                <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                    <div className="mtitle-ara">
                                                        <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                            04
                                                            <span className="rot60 d-inline-block theme-clr">
                                                                <i className="fa-solid fa-arrow-right" />
                                                            </span>
                                                        </span>
                                                        <span className="mtitle d-block mt-4">
                                                            <span className="white-clr whitehover">
                                                                Advanced Risk Management
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Leverage our expertise to develop and implement robust risk management frameworks using a combination of derivative instruments.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Portfolio Hedging
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> VaR Management
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Stress Testing
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Scenario Analysis
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="mb-xxl-4 mb-3 mt-xxl-8 mt-xl-6 mt-5">Expertise You Can Trust</h4>
                                    <p>
                                       Our team of specialists provides deep market knowledge and quantitative analysis to help you understand the risks and rewards associated with derivative trading, ensuring your strategies are both sound and effective.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="service-sidebar">
                                    <div className="widget widget_categories bg1-clr">
                                        <h5 className="widget-title">Investment Products</h5>
                                        <ul>
                                            <li><a href="/investment-products/fixed-income">Fixed Income</a></li>
                                            <li><a href="/investment-products/equities">Equities</a></li>
                                            <li><a href="/investment-products/foreign-exchange">Foreign Exchange</a></li>
                                            <li className="active"><a href="/investment-products/derivatives">Derivatives</a></li>
                                        </ul>
                                    </div>

                                    <div className="widget widget_contact_box bg1-clr">
                                        <h5 className="widget-title">Get Expert Advice</h5>
                                        <p>Contact us for a personalized consultation with one of our investment experts.</p>
                                        <a href="/contact" className="cmn-btn w-100 text-center">Contact Us</a>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
} 