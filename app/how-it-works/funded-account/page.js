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
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Funded Account">
                <section className="service-details-v2 pt-space pb-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="investment-card-forex p-xxl-8 p-xl-6 p-5 h-100 d-flex flex-column mb-5 position-relative" data-aos="fade-up" data-aos-duration="1200">
                                    <div className="icon-area d-flex justify-content-center">
                                        <span className="icon"><i className="fas fa-coins"></i></span>
                                    </div>
                                    <h2 className="mb-xxl-6 mb-xl-5 mb-4 text-center">Funded Account</h2>
                                    <p className="mb-xxl-6 mb-xl-5 mb-4 text-center" style={{color:"black"}}>
                                        Gain access to professional trading capital with stringent risk controls and performance targets. Our funded account program empowers traders by providing capital resources while maintaining disciplined evaluation standards to ensure sustainable growth and risk management.                                    </p>
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
                                                        <span className="mtitle d-block mt-4" >
                                                            <span className="white-clr whitehover" >
                                                                Capital Allocation
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Careful distribution and monitoring of funds to maximize trading potential while managing exposure.
                                                        </span>
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
                                                                Performance Monitoring
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Continuous assessment of trading results to align with risk appetite and return objectives.
                                                        </span>
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
                                                                Risk Management
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                            Strict enforcement of limits and safeguards to protect both capital and operational integrity.
                                                        </span>
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
                                                                Compliance & Reporting
                                                            </span>
                                                        </span>
                                                        <span className="pras mt-xxl-4 mt-xl-3 mt-3 d-block">
                                                           Transparent, timely reporting ensures accountability and adherence to regulatory standards.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="service-sidebar">

                                    <div className="widget widget_contact_box bg1-clr">
                                        <h5 className="widget-title">Get Expert Advice</h5>
                                        <p style={{color:"black"}}>Contact us for a personalized consultation with one of our investment experts.</p>
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