'use client'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import Link from 'next/link'

export default function InvestmentStrategies() {
    const [isAccordion, setIsAccordion] = useState(1)
    
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Investment Strategies">
                <section className="service-details-v2 pt-space pb-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="service-details-content">
                                    <h2 className="mb-xxl-6 mb-xl-5 mb-4 d-flex align-items-center gap-2">
                                        <i className="fas fa-chess theme-clr"></i> Strategic Approaches for Optimal Returns
                                    </h2>
                                    <p className="mb-xxl-6 mb-xl-5 mb-4">
                                        At Finvico, we employ a range of sophisticated investment strategies designed to meet diverse client objectives. Our approach combines rigorous analysis, risk management, and market expertise to deliver consistent, long-term performance across various market conditions.
                                    </p>
                                    
                                    <h4 className="mb-xxl-4 mb-3 d-flex align-items-center gap-2">
                                        <i className="fas fa-lightbulb theme-clr"></i> Our Investment Approaches
                                    </h4>
                                    <p className="mb-xxl-6 mb-xl-5 mb-4">
                                        We offer a comprehensive suite of investment strategies tailored to different risk profiles and investment goals.
                                    </p>

                                    {/* Modern Accordion Style Cards */}
                                    <div className="service-tabing-wrap Faqs-section">
                                        <div className={`modern-faq-card ${isAccordion === 1 ? "active" : ""}`}>
                                            <div className="header-area" onClick={() => handleAccordion(1)}>
                                                <div className="accordion-btn d-flex align-items-center justify-content-between w-100">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="faq-icon">
                                                            <i className="fas fa-search-dollar"></i>
                                                        </div>
                                                        <div>
                                                            <span className="d-inline-flex serial-badge align-items-center gap-2 cmn-border radius100 white-clr mb-2">
                                                                01
                                                                <span className="rot60 d-inline-block theme-clr">
                                                                    <i className="fa-solid fa-arrow-right" />
                                                                </span>
                                                            </span>
                                                            <h5 className="mb-0">Value Investing</h5>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className={`content-area ${isAccordion === 1 ? "active" : ""}`}>
                                                <div className="content-body">
                                                    <p>Identify and invest in undervalued securities with strong fundamentals, focusing on long-term capital appreciation.</p>
                                                    <ul className="modern-list-v2 mt-3">
                                                        <li><i className="fas fa-check"></i> Fundamental Analysis</li>
                                                        <li><i className="fas fa-check"></i> Margin of Safety</li>
                                                        <li><i className="fas fa-check"></i> Long-term Horizon</li>
                                                        <li><i className="fas fa-check"></i> Quality Focus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`modern-faq-card ${isAccordion === 2 ? "active" : ""}`}>
                                            <div className="header-area" onClick={() => handleAccordion(2)}>
                                                <div className="accordion-btn d-flex align-items-center justify-content-between w-100">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="faq-icon">
                                                            <i className="fas fa-chart-line"></i>
                                                        </div>
                                                        <div>
                                                            <span className="d-inline-flex serial-badge align-items-center gap-2 cmn-border radius100 white-clr mb-2">
                                                                02
                                                                <span className="rot60 d-inline-block theme-clr">
                                                                    <i className="fa-solid fa-arrow-right" />
                                                                </span>
                                                            </span>
                                                            <h5 className="mb-0">Growth Investing</h5>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                            <div className={`content-area ${isAccordion === 2 ? "active" : ""}`}>
                                                <div className="content-body">
                                                    <p>Target companies with above-average growth potential, often in innovative sectors with expanding market opportunities.</p>
                                                    <ul className="modern-list-v2 mt-3">
                                                        <li><i className="fas fa-check"></i> Revenue Growth</li>
                                                        <li><i className="fas fa-check"></i> Market Expansion</li>
                                                        <li><i className="fas fa-check"></i> Innovation Focus</li>
                                                        <li><i className="fas fa-check"></i> Scalable Models</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`modern-faq-card ${isAccordion === 3 ? "active" : ""}`}>
                                            <div className="header-area" onClick={() => handleAccordion(3)}>
                                                <div className="accordion-btn d-flex align-items-center justify-content-between w-100">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="faq-icon">
                                                            <i className="fas fa-coins"></i>
                                                        </div>
                                                        <div>
                                                            <span className="d-inline-flex serial-badge align-items-center gap-2 cmn-border radius100 white-clr mb-2">
                                                                03
                                                                <span className="rot60 d-inline-block theme-clr">
                                                                    <i className="fa-solid fa-arrow-right" />
                                                                </span>
                                                            </span>
                                                            <h5 className="mb-0">Income Generation</h5>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className={`content-area ${isAccordion === 3 ? "active" : ""}`}>
                                                <div className="content-body">
                                                    <p>Focus on generating consistent income through dividend-paying stocks, bonds, and other income-producing assets.</p>
                                                    <ul className="modern-list-v2 mt-3">
                                                        <li><i className="fas fa-check"></i> Dividend Stocks</li>
                                                        <li><i className="fas fa-check"></i> Fixed Income</li>
                                                        <li><i className="fas fa-check"></i> REITs</li>
                                                        <li><i className="fas fa-check"></i> Yield Optimization</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`modern-faq-card ${isAccordion === 4 ? "active" : ""}`}>
                                            <div className="header-area" onClick={() => handleAccordion(4)}>
                                                <div className="accordion-btn d-flex align-items-center justify-content-between w-100">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="faq-icon">
                                                            <i className="fas fa-cogs"></i>
                                                        </div>
                                                        <div>
                                                            <span className="d-inline-flex serial-badge align-items-center gap-2 cmn-border radius100 white-clr mb-2">
                                                                04
                                                                <span className="rot60 d-inline-block theme-clr">
                                                                    <i className="fa-solid fa-arrow-right" />
                                                                </span>
                                                            </span>
                                                            <h5 className="mb-0">Tactical Asset Allocation</h5>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className={`content-area ${isAccordion === 4 ? "active" : ""}`}>
                                                <div className="content-body">
                                                    <p>Dynamically adjust portfolio allocations based on market conditions, economic outlook, and relative valuation opportunities.</p>
                                                    <ul className="modern-list-v2 mt-3">
                                                        <li><i className="fas fa-check"></i> Market Timing</li>
                                                        <li><i className="fas fa-check"></i> Sector Rotation</li>
                                                        <li><i className="fas fa-check"></i> Risk Management</li>
                                                        <li><i className="fas fa-check"></i> Opportunistic</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="mb-xxl-4 mb-3 mt-xxl-8 mt-xl-6 mt-5 d-flex align-items-center gap-2">
                                        <i className="fas fa-shield-alt theme-clr"></i> Risk Management Integration
                                    </h4>
                                    <p>
                                       Every strategy incorporates comprehensive risk management, including position sizing, diversification, and ongoing monitoring to protect capital while pursuing investment objectives.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="service-sidebar">
                                    <div className="widget widget_categories glassmorphism">
                                        <h5 className="widget-title d-flex align-items-center gap-2"><i className="fas fa-folder-open theme-clr"></i> Resources</h5>
                                        <ul>
                                            <li className="d-flex align-items-center gap-2"><i className="fas fa-bolt"></i><a href="/resources/market-insights">Market Insights</a></li>
                                            <li className="d-flex align-items-center gap-2"><i className="fas fa-file-alt"></i><a href="/resources/research-reports">Research Reports</a></li>
                                            <li className="active d-flex align-items-center gap-2"><i className="fas fa-lightbulb"></i><a href="/resources/investment-strategies">Investment Strategies</a></li>
                                            <li className="d-flex align-items-center gap-2"><i className="fas fa-question-circle"></i><a href="/faq">FAQs</a></li>
                                        </ul>
                                    </div>

                                    <div className="widget widget_contact glassmorphism mt-4">
                                        <h5 className="widget-title d-flex align-items-center gap-2"><i className="fas fa-user-tie theme-clr"></i> Strategy Consultation</h5>
                                        <p>Ready to develop your personalized investment strategy? Our experts are here to help you create a plan tailored to your goals.</p>
                                        <Link href="/contact" className="cmn-btn w-100 text-center d-inline-flex align-items-center gap-2">
                                            <i className="fas fa-calendar-check"></i> Schedule Consultation
                                        </Link>
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