'use client'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'

export default function FixedIncome() {
    const [isAccordion, setIsAccordion] = useState(1)
    
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Fixed Income">
                <section className="service-details-v2 pt-space pb-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="service-details-content">
                                    <h2 className="mb-xxl-6 mb-xl-5 mb-4">Secure Returns Through Fixed Income Investments</h2>
                                    <p className="mb-xxl-6 mb-xl-5 mb-4">
                                        Fixed income securities provide a stable foundation for any investment portfolio. At PF-MGMNT, we offer access to a diverse range of fixed income instruments, from government bonds to corporate debt, helping you generate consistent income while managing risk effectively.
                                    </p>
                                    
                                    {/* Modern Investment Flow Diagram */}
                                    <div className="investment-flow-diagram mb-xxl-6 mb-xl-5 mb-4">
                                        <h4 className="mb-4">Investment Process Flow</h4>
                                        <div className="flow-container position-relative">
                                            <div className="flow-step active">
                                                <div className="step-icon">
                                                    <i className="fas fa-search"></i>
                                                </div>
                                                <div className="step-content">
                                                    <h6>Research & Analysis</h6>
                                                    <p>Credit analysis and market research</p>
                                                </div>
                                            </div>
                                            <div className="flow-arrow">
                                                <i className="fas fa-arrow-right"></i>
                                            </div>
                                            <div className="flow-step">
                                                <div className="step-icon">
                                                    <i className="fas fa-chart-line"></i>
                                                </div>
                                                <div className="step-content">
                                                    <h6>Portfolio Construction</h6>
                                                    <p>Strategic allocation and diversification</p>
                                                </div>
                                            </div>
                                            <div className="flow-arrow">
                                                <i className="fas fa-arrow-right"></i>
                                            </div>
                                            <div className="flow-step">
                                                <div className="step-icon">
                                                    <i className="fas fa-shield-alt"></i>
                                                </div>
                                                <div className="step-content">
                                                    <h6>Risk Management</h6>
                                                    <p>Ongoing monitoring and adjustments</p>
                                                </div>
                                            </div>
                                            <div className="flow-arrow">
                                                <i className="fas fa-arrow-right"></i>
                                            </div>
                                            <div className="flow-step">
                                                <div className="step-icon">
                                                    <i className="fas fa-dollar-sign"></i>
                                                </div>
                                                <div className="step-content">
                                                    <h6>Income Generation</h6>
                                                    <p>Consistent returns and capital preservation</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Statistics Section */}
                                    <div className="stats-section mb-xxl-6 mb-xl-5 mb-4">
                                        <div className="row">
                                            <div className="col-md-3 col-6">
                                                <div className="stat-card text-center">
                                                    <div className="stat-number">$2.5B+</div>
                                                    <div className="stat-label">Assets Under Management</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <div className="stat-card text-center">
                                                    <div className="stat-number">15+</div>
                                                    <div className="stat-label">Years Experience</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <div className="stat-card text-center">
                                                    <div className="stat-number">4.2%</div>
                                                    <div className="stat-label">Average Yield</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <div className="stat-card text-center">
                                                    <div className="stat-number">98%</div>
                                                    <div className="stat-label">Client Satisfaction</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <h4 className="mb-xxl-4 mb-3">Our Fixed Income Solutions</h4>
                                    <p className="mb-xxl-6 mb-xl-5 mb-4">
                                        We provide comprehensive fixed income services designed to meet your income generation and capital preservation objectives.
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
                                                                Government Bonds
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Access to sovereign debt instruments from major developed and emerging markets, offering predictable income streams and capital preservation.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Treasury Securities
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Sovereign Bonds
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Agency Debt
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Municipal Bonds
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
                                                                Corporate Bonds
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Investment-grade and high-yield corporate debt offering enhanced returns while maintaining portfolio diversification.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Investment Grade
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> High Yield Bonds
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Convertible Bonds
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Floating Rate Notes
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
                                                                Emerging Market Debt
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Access to sovereign and corporate debt from emerging markets, offering attractive yields and growth potential.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Local Currency Bonds
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Hard Currency Debt
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Frontier Markets
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Regional Focus
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
                                                                Structured Products
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Customized fixed income solutions designed to meet specific investment objectives and risk tolerance levels.
                                                        </span>
                                                    </div>
                                                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-6 gap-4">
                                                        <ul className="modern-list d-grid gap-2">
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Asset-Backed Securities
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Collateralized Debt
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Inflation-Linked Bonds
                                                            </li>
                                                            <li className="d-flex align-items-center gap-2">
                                                                <i className="fas fa-chevron-right" /> Bespoke Solutions
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="mb-xxl-4 mb-3 mt-xxl-8 mt-xl-6 mt-5">Expert Portfolio Management</h4>
                                    <p>
                                        Our fixed income specialists provide comprehensive portfolio management services, including credit analysis, duration management, and yield curve positioning to optimize your fixed income returns.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="service-sidebar">
                                    <div className="widget widget_categories bg1-clr">
                                        <h5 className="widget-title">Investment Products</h5>
                                        <ul>
                                            <li className="active"><a href="/investment-products/fixed-income">Fixed Income</a></li>
                                            <li><a href="/investment-products/equities">Equities</a></li>
                                            <li><a href="/investment-products/foreign-exchange">Foreign Exchange</a></li>
                                            <li><a href="/investment-products/derivatives">Derivatives</a></li>
                                        </ul>
                                    </div>
                                    
                                    {/* Enhanced Sidebar with Visual Elements */}
                                    <div className="widget widget_contact bg1-clr mt-4">
                                        <h5 className="widget-title">Get Started Today</h5>
                                        <div className="contact-info">
                                            <div className="contact-item d-flex align-items-center gap-3 mb-3">
                                                <div className="contact-icon">
                                                    <i className="fas fa-phone"></i>
                                                </div>
                                                <div>
                                                    <span className="d-block">Call Us</span>
                                                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                                                </div>
                                            </div>
                                            <div className="contact-item d-flex align-items-center gap-3 mb-3">
                                                <div className="contact-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div>
                                                    <span className="d-block">Email Us</span>
                                                    <a href="mailto:info@pf-mgmnt.com">info@pf-mgmnt.com</a>
                                                </div>
                                            </div>
                                            <div className="contact-item d-flex align-items-center gap-3">
                                                <div className="contact-icon">
                                                    <i className="fas fa-clock"></i>
                                                </div>
                                                <div>
                                                    <span className="d-block">Business Hours</span>
                                                    <span>Mon-Fri: 9AM-6PM</span>
                                                </div>
                                            </div>
                                        </div>
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