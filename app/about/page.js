'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Tilt } from 'react-tilt'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 1,
        },
    },
}

const toltOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.01,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",
}
export default function About() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="About Agency">
                <div>
                    {/* Cmn About Start */}
                    <section className="pt-space pb-space section-bg">
                        <div className="container">
                            <div className="row g-6 justify-content-between">
                                <div className="col-lg-6 pe-lg-14">
                                    <div className="d-flex gap-xxl-7 gap-xl-5 gap-4 position-relative z-index-1">
                                        <div className="about-small-thumb w-100" data-aos="zoom-in" data-aos-duration={1500}>
                                            <img src="/assets/img/about/abt.jpg" width={243} height={594} alt="img" className="w-100"    style={{ width: '100%', height: 'auto', maxWidth: '350px' }} 
/>
                                        </div>
                                        <div className="about-small-thumb w-100 mt-xxl-10 mt-xl-7 mt-lg-5 mt-3" data-aos="zoom-in" data-aos-duration={1800}>
                                            <img src="/assets/img/about/abt22.png" alt="img" className="w-100" />
                                        </div>
                                        {/*- About Arrow */}
                                        <img src="/assets/img/element/arrow-right-storke.png" alt="img" className="about-tumb-arrow" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-samll-content">
                                        <div className="pricing-title">
                                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1400}>
                                                ABOUT Us
                                            </div>
                                            <h2 className="stitle d-flex align-items-center mb-xxl-8 mb-xl-7 mb-lg-6 mb-5 gap-xxl-7 gap-xl-5 gap-3" data-aos="zoom-in-left" data-aos-duration={1700}>
                                                <img src="/assets/img/element/arrow-right-storke.png" alt="img" data-aos="zoom-in-up" data-aos-duration={2000} />
                                                To Create Artistic &amp; Creative Design
                                            </h2>
                                            <p className="white-clr mb-xxl-8 mb-xl-8 mb-5" data-aos="zoom-in-up" data-aos-duration={1400}>
                                                Bring to the table win-win survival strategies to ensure proactive domination. At
                                                the end of the day, going forward, a
                                                new normal that has evolved from generation on the runway heading towards a
                                                streamlined cloud.
                                            </p>
                                            <div className="result-progress-wrap" data-aos="zoom-in-up" data-aos-duration={1800}>
                                                <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                                    <div className="d-flex align-items-center justify-content-between mb-xxl-4 mb-3">
                                                        <span className="conssub">
                                                            Branding Design
                                                        </span>
                                                        <span className="cons">88%</span>
                                                    </div>
                                                    <div className="progress-solving">
                                                        <div className="progress-bar" />
                                                    </div>
                                                </div>
                                                <div className="progres-item">
                                                    <div className="d-flex align-items-center justify-content-between mb-xxl-4 mb-3">
                                                        <span className="conssub">
                                                            Business
                                                        </span>
                                                        <span className="cons">96%</span>
                                                    </div>
                                                    <div className="progress-solving">
                                                        <div className="progress-bar" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Cmn About End */}
                    {/* Key Services & Features Start */}
                    <section className="pt-space pb-space bg2-clr">
                        <div className="container">
                            <div className="row g-xxl-7 g-xl-5 g-4 justify-content-center">
                                <div className="col-lg-8 text-center mb-xxl-10 mb-xl-8 mb-lg-6 mb-5">
                                    <div className="pricing-title">
                                        <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1400}>
                                            Our Services
                                        </div>
                                        <h2 className="stitle" data-aos="zoom-in" data-aos-duration={1700}>
                                            Comprehensive <span className="fw-400">Digital Solutions</span> for Your Business
                                        </h2>
                                        <p className="white-clr mt-xxl-6 mt-xl-5 mt-4" data-aos="zoom-in" data-aos-duration={1800}>
                                            We provide end-to-end digital solutions to help your business thrive in the modern digital landscape. 
                                            From strategic planning to implementation and ongoing support.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-xxl-7 g-xl-5 g-4">
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1400}>
                                    <div className="modern-service-card bg1-clr p-xxl-8 p-xl-6 p-5 text-center h-100">
                                        <div className="icon-area mb-xxl-6 mb-xl-5 mb-4">
                                            <div className="icon d-center radius100 theme-bg">
                                                <i className="fas fa-chart-line fa-2x theme-clr"></i>
                                            </div>
                                        </div>
                                        <h4 className="white-clr mb-xxl-4 mb-3">Strategic Planning</h4>
                                        <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                            Comprehensive digital strategy development tailored to your business goals and market position.
                                        </p>
                                        <Link href="/service" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-border theme-clr gap-xxl-3 gap-2">
                                            Learn More
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1600}>
                                    <div className="modern-service-card bg1-clr p-xxl-8 p-xl-6 p-5 text-center h-100">
                                        <div className="icon-area mb-xxl-6 mb-xl-5 mb-4">
                                            <div className="icon d-center radius100 theme-bg">
                                                <i className="fas fa-code fa-2x theme-clr"></i>
                                            </div>
                                        </div>
                                        <h4 className="white-clr mb-xxl-4 mb-3">Development</h4>
                                        <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                            Custom web and mobile application development using cutting-edge technologies and best practices.
                                        </p>
                                        <Link href="/service" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-border theme-clr gap-xxl-3 gap-2">
                                            Learn More
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1800}>
                                    <div className="modern-service-card bg1-clr p-xxl-8 p-xl-6 p-5 text-center h-100">
                                        <div className="icon-area mb-xxl-6 mb-xl-5 mb-4">
                                            <div className="icon d-center radius100 theme-bg">
                                                <i className="fas fa-bullhorn fa-2x theme-clr"></i>
                                            </div>
                                        </div>
                                        <h4 className="white-clr mb-xxl-4 mb-3">Digital Marketing</h4>
                                        <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                            Data-driven digital marketing strategies to increase your online presence and drive growth.
                                        </p>
                                        <Link href="/service" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-border theme-clr gap-xxl-3 gap-2">
                                            Learn More
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Key Services & Features End */}
                    {/* Testimonial version2 Start */}
                    <section className="pt-space pb-space bg2-clr">
                        <div className="container">
                            <div className="row g-md-5 g-6 align-items-end justify-content-between bb-border pb-xxl-15 pb-lg-10 pb-9 mb-xxl-15 mb-lg-10 mb-9">
                                <div className="col-lg-7">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5">
                                        <div className="pricing-title">
                                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1500}>
                                                Testimonials
                                            </div>
                                            <h2 className="stitle" data-aos="zoom-in" data-aos-duration={1800}>
                                                Some Of Our <span className="fw-400">Respected</span> Happy Clients Say
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" data-aos="zoom-in-right" data-aos-duration={1600}>
                                    <div className="d-flex justify-content-md-end">
                                        <div className="d-flex align-items-center gap-3">
                                            <ul className="customer-man d-flex align-items-center">
                                                <li>
                                                    <img src="/assets/img/client/c1.png" alt="img" />
                                                </li>
                                                <li>
                                                    <img src="/assets/img/client/c2.png" alt="img" />
                                                </li>
                                                <li>
                                                    <img src="/assets/img/client/c3.png" alt="img" />
                                                </li>
                                                <li>
                                                    <img src="/assets/img/client/c4.png" alt="img" />
                                                </li>
                                            </ul>
                                            <div className="review-cont">
                                                <div className="d-flex align-items-center gap-2 mb-xl-2 mb-1">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-regular fa-star" />
                                                </div>
                                                <span className="texts">
                                                    450+ reviews
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center g-xxl-15 g-xl-8 g-lg-6 g-4">
                                <div className="col-lg-4">
                                    <div className="testimonial-thumb-v2 w-100" data-aos="zoom-in" data-aos-duration={1800}>
                                        <img src="/assets/img/testimonial/regulation-arrow.png" alt="img" className="w-100 h-100" />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="swiper testimonial-wrapv2">
                                        <Swiper {...swiperOptions} className="swiper-wrapper">
                                            <SwiperSlide>
                                                <div className="testimonial-item2 bg1-clr p-xxl-15 p-xl-10 p-lg-6 p-sm-5 p-5">
                                                    <svg width={60} height={43} viewBox="0 0 60 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 25.8H12.8571L4.28564 43H17.1428L25.7143 25.8V0H0V25.8Z" fill="#E3FF04" />
                                                        <path d="M34.2852 0V25.8H47.1423L38.5708 43H51.4279L59.9994 25.8V0H34.2852Z" fill="#E3FF04" />
                                                    </svg>
                                                    <p className="pra-clr mt-xxl-10 mt-xl-8 mt-lg-7 mt-6 mb-xxl-10 mb-xl-8 mb-lg-7 mb-6">
                                                        "Welcome to our digital agency We specialize in helping business most like
                                                        yours
                                                        succeed
                                                        online. From website design and
                                                        development to digital marketing agency"
                                                    </p>
                                                    <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-3">
                                                            <img src="/assets/img/client/c1.png" alt="img" className="radius100" />
                                                            <div className="cont">
                                                                <div>
                                                                    <h6 className="mb-2 white-clr">
                                                                        Delores Olivo
                                                                    </h6>
                                                                    <span className="pra-clr">
                                                                        Software Tester
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="slider-button d-flex gap-xxl-3 gap-2 align-items-center justify-content-between slider-button-60">
                                                            <button className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Next slide">
                                                                <i className="fas fa-chevron-left" />
                                                            </button>
                                                            <button className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Previous slide">
                                                                <i className="fas fa-chevron-right" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-item2 bg1-clr p-xxl-15 p-xl-10 p-lg-6 p-sm-5 p-5">
                                                    <svg width={60} height={43} viewBox="0 0 60 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 25.8H12.8571L4.28564 43H17.1428L25.7143 25.8V0H0V25.8Z" fill="#E3FF04" />
                                                        <path d="M34.2852 0V25.8H47.1423L38.5708 43H51.4279L59.9994 25.8V0H34.2852Z" fill="#E3FF04" />
                                                    </svg>
                                                    <p className="pra-clr mt-xxl-10 mt-xl-8 mt-lg-7 mt-6 mb-xxl-10 mb-xl-8 mb-lg-7 mb-6">
                                                        "Welcome to our digital agency We specialize in helping business most like
                                                        yours
                                                        succeed
                                                        online. From website design and
                                                        development to digital marketing agency"
                                                    </p>
                                                    <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-3">
                                                            <img src="/assets/img/client/c1.png" alt="img" className="radius100" />
                                                            <div className="cont">
                                                                <div>
                                                                    <h6 className="mb-2 white-clr">
                                                                        Delores Olivo
                                                                    </h6>
                                                                    <span className="pra-clr">
                                                                        Software Tester
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="slider-button d-flex gap-xxl-3 gap-2 align-items-center justify-content-between slider-button-60">
                                                            <button className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Next slide">
                                                                <i className="fas fa-chevron-left" />
                                                            </button>
                                                            <button className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Previous slide">
                                                                <i className="fas fa-chevron-right" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Testimonial version2 End */}
                </div>
            </Layout>
        </>
    )
}