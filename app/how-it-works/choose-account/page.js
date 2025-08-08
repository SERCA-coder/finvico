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
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Choose Account">
                <section className="service-details-v2 pt-space pb-space" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="service-details-content">
                                    <div className="investment-card-fixed p-xxl-8 p-xl-6 p-5 h-100 d-flex flex-column mb-5 position-relative"data-aos="fade-up" data-aos-duration="1200">
                                        <div className="icon-area d-flex justify-content-center">
                                            <span className="icon"><i className="fas fa-piggy-bank"></i></span>
                                        </div>
                                        <h2 className="mb-xxl-6 mb-xl-5 mb-4 text-center">Define Your Capital Base</h2>
                                        <p className="mb-xxl-6 mb-xl-5 mb-4 text-center"  style={{ color: 'black' }} >
                                            Establish the foundation of your investment journey with a tailored account structure. At Finvico, we grant you access to a handpicked range of fixed income opportunities — from sovereign bonds to investment-grade corporate debt — engineered to deliver predictable yields while preserving principal.
                                            Through disciplined credit analysis, precise portfolio construction, and vigilant risk management, we ensure your capital works securely and efficiently from day one.                                        </p>
                                        <div className="flow-container position-relative mb-4">
                                            <div className="flow-step active">
                                                <div className="step-icon">
                                                    <i className="fas fa-search"></i>
                                                </div>
                                                <div className="step-content">
                                                    <h6> Market Intelligence</h6>
                                                    <p  style={{ color: 'black' }} >Deep credit evaluation paired with forward-looking macroeconomic analysis</p>
                                                </div>
                                            </div>
                                            <div className="flow-step">
                                                <div className="step-icon">
                                                    <i className="fas fa-chart-line"></i>
                                                </div>
                                                <div className="step-content">
                                                    <h6>Capital Architecture</h6>
                                                    <p  style={{ color: 'black' }} > Precision allocation and disciplined multi-asset diversification</p>
                                                </div>
                                            </div>
                                            <div className="flow-step">
                                                <div className="step-icon">
                                                    <i className="fas fa-shield-alt"></i>
                                                </div>
                                                <div className="step-content">
                                                    <h6> Risk Governance</h6>
                                                    <p  style={{ color: 'black' }} >Continuous oversight with adaptive capital protection strategies</p>
                                                </div>
                                            </div>
                                            <div className="flow-step">
                                                <div className="step-icon">
                                                    <i className="fas fa-dollar-sign"></i>
                                                </div>
                                                <div className="step-content">
                                                    <h6> Yield Delivery</h6>
                                                    <p  style={{ color: 'black' }} >Sustainable income generation with principal preservation at the core</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="stats-section mb-xxl-6 mb-xl-5 mb-4" >
                                        <div className="row" >
                                            <div className="col-md-3 col-6">
                                                <div className="stat-card text-center" >
                                                    <div className="stat-number" >Account Size</div>
                                                    <div className="stat-label">Select from different capital levels available for trading.</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <div className="stat-card text-center">
                                                    <div className="stat-number">Evaluation Period</div>
                                                    <div className="stat-label">Defined demo trading phase duration to verify compliance with rules.</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <div className="stat-card text-center">
                                                    <div className="stat-number">Risk Limits</div>
                                                    <div className="stat-label">Maximum daily loss and total drawdown allowed during evaluation.</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <div className="stat-card text-center">
                                                    <div className="stat-number">Profit Target</div>
                                                    <div className="stat-label">Clear profit goal required to advance to a funded account.</div>
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
                                                    <i className="fas fa-envelope"  style={{ color: 'black' }} ></i>
                                                </div>
                                                <div>
                                                    <span className="d-block">Email Us</span>
                                                    <a href="mailto:info@finvico.com"  style={{ color: 'black' }} >info@finvico.com</a>
                                                </div>
                                            </div>
                                            <div className="contact-item d-flex align-items-center gap-3">
                                                <div className="contact-icon">
                                                    <i className="fas fa-clock"  style={{ color: 'black' }} ></i>
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