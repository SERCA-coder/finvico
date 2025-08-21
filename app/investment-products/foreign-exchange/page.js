'use client'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'

export default function ForeignExchange() {
    const [isAccordion, setIsAccordion] = useState(1)
    
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Foreign Exchange">
                <section className="service-details-v2 pt-space pb-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="service-details-content">
                                    <h2 className="mb-xxl-6 mb-xl-5 mb-4">Navigating the Global Currency Markets</h2>
                                    <p className="mb-xxl-6 mb-xl-5 mb-4">
                                        The Foreign Exchange (FX) market is the largest and most liquid financial market in the world. At PF-MGMNT, we provide our clients with direct access to this dynamic market, offering competitive pricing, cutting-edge technology, and expert insights to help you manage currency risk and seize opportunities.
                                    </p>
                                    
                                    <h4 className="mb-xxl-4 mb-3">Our FX Services</h4>
                                    <p className="mb-xxl-6 mb-xl-5 mb-4">
                                        Whether you are looking to hedge currency exposure, speculate on market movements, or facilitate international trade, our comprehensive FX services are designed to meet your needs.
                                    </p>

                                    {/* Modern Accordion Style Cards */}
                                    <div className="service-tabing-wrap Faqs-section">
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
                                                                Spot FX Trading
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Execute real-time currency trades at the current market rate with tight spreads and deep liquidity across a wide range of currency pairs.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Major Pairs
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Minor Pairs
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Exotic Currencies
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Real-time Execution
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
                                                                Forwards & Swaps
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Lock in an exchange rate for a future date with FX forwards, or manage liquidity with currency swaps, mitigating risk from volatile market swings.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Forward Contracts
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Currency Swaps
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> NDF Trading
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Custom Tenors
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
                                                                Hedging Strategies
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Our experts design and implement tailored hedging strategies to protect your international investments from adverse currency movements.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Natural Hedging
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Options Hedging
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Dynamic Hedging
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Portfolio Hedging
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
                                                                24-Hour Dealing Desk
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Gain a competitive edge with our 24-hour dealing desk, providing continuous access to market liquidity and expert support.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Global Coverage
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Expert Traders
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Market Analysis
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Risk Management
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="mb-xxl-4 mb-3 mt-xxl-8 mt-xl-6 mt-5">Advanced Trading Technology</h4>
                                    <p>
                                       Utilize our state-of-the-art trading platforms, offering advanced charting tools, real-time data, and algorithmic execution to optimize your trading performance.
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
                                            <li className="active"><a href="/investment-products/foreign-exchange">Foreign Exchange</a></li>
                                            <li><a href="/investment-products/derivatives">Derivatives</a></li>
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