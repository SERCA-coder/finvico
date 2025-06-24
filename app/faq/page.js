'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Faq() {
    const [isAccordion, setIsAccordion] = useState(0)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    return (
        <>

            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="FAQ’S">
                <section className="Faqs-section pt-space pb-space">
                    <div className="container">
                        <div className="faqs-title text-center mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-9 mb-sm-8 mb-7">
                            <Link href="/blog-details" className="radius-btn cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                FAQ’S
                            </Link>
                            <h2 className="stitle">
                                Frequently asked <span className="fw-400">questions</span>
                            </h2>
                        </div>
                        <div className="row g-5 justify-content-center">
                            <div className="col-lg-6">
                                <div className="faq">
                                    <div className="accordion-section">
                                        <div className={`modern-faq-card mb-4 py-4 px-4 ${isAccordion === 1 ? "active" : ""}`}>
                                            <h5 className="header-area d-flex align-items-center gap-2" onClick={() => handleAccordion(1)}>
                                                <span className="faq-icon"><i className="fas fa-shield-alt"></i></span>
                                                <button className="accordion-btn d-flex align-items-center text-start position-relative w-100" type="button">
                                                    Is Finvico regulated and licensed?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Yes, Finvico is a CySEC-licensed investment firm, fully regulated to provide portfolio management and investment services across Europe and globally.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`modern-faq-card mb-4 py-4 px-4 ${isAccordion === 2 ? "active" : ""}`}>
                                            <h5 className="header-area d-flex align-items-center gap-2" onClick={() => handleAccordion(2)}>
                                                <span className="faq-icon"><i className="fas fa-user-tie"></i></span>
                                                <button className="accordion-btn d-flex align-items-center text-start position-relative w-100" type="button">
                                                    What types of clients do you serve?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        We serve both institutional and private clients, including high-net-worth individuals, family offices, corporations, and funds seeking tailored investment solutions.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`modern-faq-card mb-4 py-4 px-4 ${isAccordion === 3 ? "active" : ""}`}>
                                            <h5 className="header-area d-flex align-items-center gap-2" onClick={() => handleAccordion(3)}>
                                                <span className="faq-icon"><i className="fas fa-chart-pie"></i></span>
                                                <button className="accordion-btn d-flex align-items-center text-start position-relative w-100" type="button">
                                                    What investment products does Finvico offer?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Our offering includes equities, fixed income, foreign exchange, derivatives, and bespoke structured products, all managed with a focus on risk and performance.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`modern-faq-card mb-4 py-4 px-4 ${isAccordion === 4 ? "active" : ""}`}>
                                            <h5 className="header-area d-flex align-items-center gap-2" onClick={() => handleAccordion(4)}>
                                                <span className="faq-icon"><i className="fas fa-lock"></i></span>
                                                <button className="accordion-btn d-flex align-items-center text-start position-relative w-100" type="button">
                                                    How is my money protected at Finvico?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Client funds are held in segregated accounts with top-tier banks, and we adhere to strict regulatory standards for security and transparency.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`modern-faq-card mb-4 py-4 px-4 ${isAccordion === 5 ? "active" : ""}`}>
                                            <h5 className="header-area d-flex align-items-center gap-2" onClick={() => handleAccordion(5)}>
                                                <span className="faq-icon"><i className="fas fa-envelope-open-text"></i></span>
                                                <button className="accordion-btn d-flex align-items-center text-start position-relative w-100" type="button">
                                                    How can I contact Finvico for support?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        You can reach us via our contact form, email (info@finvico.com), or phone. Our team is available to assist you with any questions or support you need.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`modern-faq-card mb-4 py-4 px-4 ${isAccordion === 6 ? "active" : ""}`}>
                                            <h5 className="header-area d-flex align-items-center gap-2" onClick={() => handleAccordion(6)}>
                                                <span className="faq-icon"><i className="fas fa-globe-europe"></i></span>
                                                <button className="accordion-btn d-flex align-items-center text-start position-relative w-100" type="button">
                                                    Can I invest with Finvico from outside Cyprus?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 6 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Yes, we serve clients globally and provide cross-border investment solutions in compliance with international regulations.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`modern-faq-card mb-4 py-4 px-4 ${isAccordion === 7 ? "active" : ""}`}>
                                            <h5 className="header-area d-flex align-items-center gap-2" onClick={() => handleAccordion(7)}>
                                                <span className="faq-icon"><i className="fas fa-file-contract"></i></span>
                                                <button className="accordion-btn d-flex align-items-center text-start position-relative w-100" type="button">
                                                    How do I open an account with Finvico?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 7 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Simply fill out our online application or contact our team. We will guide you through the onboarding process and required documentation.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`modern-faq-card mb-4 py-4 px-4 ${isAccordion === 8 ? "active" : ""}`}>
                                            <h5 className="header-area d-flex align-items-center gap-2" onClick={() => handleAccordion(8)}>
                                                <span className="faq-icon"><i className="fas fa-sync-alt"></i></span>
                                                <button className="accordion-btn d-flex align-items-center text-start position-relative w-100" type="button">
                                                    Can I transfer my existing portfolio to Finvico?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 8 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Yes, we offer seamless portfolio transfer services. Our team will coordinate with your current provider to ensure a smooth transition.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}