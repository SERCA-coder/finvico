import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <section
                className="breadcrumnd-banner position-relative"
                style={{
                    backgroundImage: "linear-gradient(rgb(197, 196, 196), rgba(255, 255, 255, 0.37)), url('/assets/img/banner/thumb.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                    
                  }}
            >
                <div className="container">
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-7">
                            <div className="breadcrumnd-content text-center">
                                <h1 className="white mb-xxl-10 mb-xl-8 mb-6" data-aos="zoom-in-left" data-aos-duration={1800}>
                                    {breadcrumbTitle}
                                </h1>
                                <ul
                                    className="breadcrumnd d-inline-flex align-items-center gap-2 pra-border radius100 py-xxl-3 py-2 px-xxl-4 px-4"
                                    data-aos="zoom-in-right"
                                    data-aos-duration={2000}
                                    style={{borderColor: '#000000', background: 'rgba(0, 0, 0, 0.7)'}}
                                >
                                    <li>
                                        <Link href="/" className="text-uppercase" style={{color: 'white'}}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <span className="rot60 d-inline-block">
                                            <i className="fas fa-arrow-right" style={{color: '#fff'}} />
                                        </span>
                                    </li>
                                    <li style={{color: '#fff'}}>
                                        {breadcrumbTitle}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Elementi kao sa slike */}
                <img src="/assets/img/element/cmn-dost.png" alt="img" className="cmn-dots" style={{ right: '5%', top: '35%', opacity: 0.5 }} />
                <div className="cmn-svg-shape cmn-svg" style={{ left: '5%', top: '25%', width: '150px' }}>
                <svg width="211" height="211" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M153.353 98.3617V190.413H210V1H20.5872V57.6468H112.638L2 168.285L42.7149 209L153.353 98.3617Z" stroke="url(#paint0_linear_6584_3026)" stroke-width="2"></path>
  <defs>
    <linearGradient id="paint0_linear_6584_3026" x1="416.867" y1="-216.267" x2="8.49998" y2="192.1" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#007BFF"></stop>
      <stop offset="1" stop-color="#007BFF" stop-opacity="0"></stop>
    </linearGradient>
  </defs>
</svg>

                </div>
            </section>
        </>
    )
}
