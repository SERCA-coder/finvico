'use client'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'

export default function Equities() {
    const [isAccordion, setIsAccordion] = useState(1)
    
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Equities">
                <section className="service-details-v2 pt-space pb-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="investment-card-equities p-xxl-8 p-xl-6 p-5 h-100 d-flex flex-column mb-5 position-relative" data-aos="fade-up" data-aos-duration="1200">
                                    <div className="icon-area d-flex justify-content-center">
                                        <span className="icon"><i className="fas fa-chart-line"></i></span>
                                    </div>
                                    <h2 className="mb-xxl-6 mb-xl-5 mb-4 text-center">Unlocking Growth Through Equity Investments</h2>
                                    <p className="mb-xxl-6 mb-xl-5 mb-4 text-center">
                                        Equities, or stocks, represent ownership in a publicly-traded company and are a fundamental component of any growth-oriented investment strategy. At Finvico, we provide access to global equity markets, backed by expert research and analysis to help you navigate the complexities of stock investing.
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
                                                                Blue-Chip Stocks
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Invest in established, financially sound companies with a history of stable growth and dividend payments.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Large Cap Companies
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Dividend Aristocrats
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Defensive Sectors
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Quality Metrics
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
                                                                Growth Stocks
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Identify and invest in companies with high growth potential, often in innovative and emerging sectors.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Technology Leaders
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Emerging Markets
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Disruptive Innovation
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Revenue Growth
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
                                                                International Equities
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Diversify your portfolio across geographies with access to major international stock exchanges and markets.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Developed Markets
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Emerging Economies
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Regional Focus
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Currency Hedging
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
                                                                ETFs & Thematic Investing
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Gain exposure to specific sectors, themes, or indices through a wide range of Exchange-Traded Funds.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Sector ETFs
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Thematic Funds
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> ESG Investing
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Smart Beta
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="mb-xxl-4 mb-3 mt-xxl-8 mt-xl-6 mt-5">Data-Driven Approach</h4>
                                    <p>
                                        Our investment decisions are powered by rigorous quantitative analysis, fundamental research, and a deep understanding of market dynamics, ensuring you are always positioned for success.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="service-sidebar">
                                    <div className="widget widget_categories bg1-clr">
                                        <h5 className="widget-title">Investment Products</h5>
                                        <ul>
                                            <li><a href="/investment-products/fixed-income">Fixed Income</a></li>
                                            <li className="active"><a href="/investment-products/equities">Equities</a></li>
                                            <li><a href="/investment-products/foreign-exchange">Foreign Exchange</a></li>
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