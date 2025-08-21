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
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Get Capital Access">
                <section className="service-details-v2 pt-space pb-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="service-details-content">
                                    <div className="investment-card-fixed p-xxl-8 p-xl-6 p-5 h-100 d-flex flex-column mb-5 position-relative" data-aos="fade-up" data-aos-duration="1200">
                                        <div className="icon-area d-flex justify-content-center">
                                            <span className="icon"><i className="fas fa-piggy-bank"></i></span>
                                        </div>
                                        <h2 className="mb-xxl-6 mb-xl-5 mb-4 text-center">Access Proprietary Capital</h2>
                                        <p className="mb-xxl-6 mb-xl-5 mb-4 text-center" style={{ color: 'black' }}>
                                            Join Finvico’s proprietary trading network and gain access to institutional-grade capital. Our capital partners empower skilled traders to operate with firm-backed liquidity — no personal risk, no upfront fees.
                                            You focus on trading performance, while we handle infrastructure, risk protocols, and capital allocation. Align with a firm that rewards consistency and precision in execution.
                                        </p>
                                        <div className="flow-container position-relative mb-4">
                                            <div className="flow-step active">
                                                <div className="step-icon">
                                                    <i className="fas fa-search"></i>
                                                </div>
                                                <div className="step-content">
                                                    <h6>Trading Assessment</h6>
                                                    <p style={{ color: 'black' }}>Demonstrate strategy and discipline under live market conditions</p>
                                                </div>
                                            </div>
                                            <div className="flow-step">
                                                <div className="step-icon">
                                                    <i className="fas fa-chart-line"></i>
                                                </div>
                                                <div className="step-content">
                                                    <h6>Capital Onboarding</h6>
                                                    <p style={{ color: 'black' }}>Seamless integration into our liquidity network with full transparency</p>
                                                </div>
                                            </div>
                                            <div className="flow-step">
                                                <div className="step-icon">
                                                    <i className="fas fa-shield-alt"></i>
                                                </div>
                                                <div className="step-content">
                                                    <h6>Risk Alignment</h6>
                                                    <p style={{ color: 'black' }}>Structured safeguards that balance firm and trader interest</p>
                                                </div>
                                            </div>
                                            <div className="flow-step">
                                                <div className="step-icon">
                                                    <i className="fas fa-dollar-sign"></i>
                                                </div>
                                                <div className="step-content">
                                                    <h6>Profit Sharing</h6>
                                                    <p style={{ color: 'black' }}>Earn performance-based payouts with no capital liability</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="stats-section mb-xxl-6 mb-xl-5 mb-4">
                                        <div className="row">
                                            <div className="col-md-3 col-6">
                                                <div className="stat-card text-center">
                                                    <div className="stat-number">Capital Tier</div>
                                                    <div className="stat-label">Start with trading capital based on your skill and evaluation outcome.</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <div className="stat-card text-center">
                                                    <div className="stat-number">Initial Review</div>
                                                    <div className="stat-label">Brief assessment phase focused on risk awareness and strategy logic.</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <div className="stat-card text-center">
                                                    <div className="stat-number">Risk Framework</div>
                                                    <div className="stat-label">Trade within defined guardrails tailored to your trading profile.</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <div className="stat-card text-center">
                                                    <div className="stat-number">Payout Cycle</div>
                                                    <div className="stat-label">Receive regular profit distributions based on net performance.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="service-sidebar">
                                    <div className="widget widget_contact bg1-clr mt-4">
                                        <h5 className="widget-title">Get Started Today</h5>
                                        <div className="contact-info">
                                            <div className="contact-item d-flex align-items-center gap-3 mb-3">
                                                <div className="contact-icon">
                                                    <i className="fas fa-envelope" style={{ color: 'black' }}></i>
                                                </div>
                                                <div>
                                                    <span className="d-block">Email Us</span>
                                                    <a href="mailto:info@finvico.com" style={{ color: 'black' }}>info@finvico.com</a>
                                                </div>
                                            </div>
                                            <div className="contact-item d-flex align-items-center gap-3">
                                                <div className="contact-icon">
                                                    <i className="fas fa-clock" style={{ color: 'black' }}></i>
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
