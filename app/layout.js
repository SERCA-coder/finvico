import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/all.min.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/nice-select.css"
import "/public/assets/css/swiper.min.css"
import "/public/assets/css/aos.css"
import "/public/assets/css/main.css"
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: "--manrope",
  display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: "--jakarta",
  display: 'swap',
})

export const metadata = {
  title: 'Finvico - Professional Portfolio Management',
  description: 'CySEC licensed investment firm specializing in portfolio management, custody, and brokerage services since 2006.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js"
          strategy="afterInteractive"
        />
        <link rel="shortcut icon" href="favi1.png" />
      </head>
      <body className={`${manrope.variable} ${jakarta.variable} position-relative bg2-clr`}>
        {children}
        <Script id="custom-scripts" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function () {
              // Initialize WOW.js
              if (typeof WOW !== 'undefined') {
                new WOW().init();
              }

              // Initialize Magnific Popup
              if (typeof jQuery !== 'undefined' && typeof jQuery.fn.magnificPopup !== 'undefined') {
                jQuery('.popup-video').magnificPopup({
                  type: 'iframe',
                  mainClass: 'mfp-fade',
                  removalDelay: 160,
                  preloader: false,
                  fixedContentPos: false
                });
              }

              // Initialize Nice Scroll
              if (typeof jQuery !== 'undefined' && typeof jQuery.fn.niceScroll !== 'undefined') {
                jQuery("html").niceScroll();
              }

              // Preloader and Counter animations on window load
              window.addEventListener('load', function () {
                var preloader = document.getElementById('preloader');
                if (preloader) {
                  jQuery(preloader).fadeOut('slow', function () {
                    jQuery(this).remove();
                  });
                }

                jQuery('.counter').each(function () {
                  jQuery(this).prop('Counter', 0).animate({
                    Counter: jQuery(this).text()
                  }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                      jQuery(this).text(Math.ceil(now));
                    }
                  });
                });
              });
            });
          `}
        </Script>
      </body>
    </html>
  )
}
