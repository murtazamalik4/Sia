import React from "react";
import "./heroSection.css";
import useScript from "../../hooks/useScript";

function HeroSection() {
  useScript("/customjs/custom_slider.js");
  useScript("/customjs/rbtools.min.js");
  useScript("/customjs/rs6.min.js");
  useScript("/customjs/custom_slider2.js");

    return (<div style={{ minHeight: '100vh' }}>
        <link property="stylesheet" rel='stylesheet' id='e-animations-css' href='/customcss/e-animations.min.css' type='text/css' media='all' />
        <link property="stylesheet" rel='stylesheet' id='rs-plugin-settings-css' href='/customcss/rs-plugin.css' type='text/css' media='all' />
        <rs-module-wrap id="rev_slider_1_1_wrapper" data-source="gallery" style={{ visibility: 'hidden', background: 'transparent', padding: 0 }}>
            <rs-module id="rev_slider_1_1" style={{}} data-version="6.5.25">
                <rs-slides >
                    <rs-slide style={{ position: 'absolute' }} data-key="rs-1" data-title="Slide" data-thumb="//images/slider1-1.jpg" data-anim="ms:1000;r:0;" data-in="o:0;" data-out="a:false;">
                        <img src="/images/slider1-1.jpg"  alt="" title="about-slider-1-copyright" width={1920} height={870} className="rev-slidebg tp-rs-img rs-lazyload " data-lazyload="/images/slider1-1.jpg" data-panzoom="d:10000;ss:100;se:106%;" data-no-retina />
                        <div className="after"></div>
                        <rs-layer id="slider-1-slide-1-layer-0" className="slider-main-title" data-type="text" data-color="white" data-xy="x:c;y:m;yo:6px,6px,3px,-19px;" data-text="w:normal;s:75,75,40,17;l:90,90,50,20;fw:900;a:center;" data-frame_0="rX:70deg;oZ:-50;" data-frame_0_chars="d:5;y:cyc(-100||100);o:0;" data-frame_1="oZ:-50;sp:700;" data-frame_1_chars="e:power2.out;dir:middletoedge;d:5;" data-frame_999="o:0;st:w;" style={{zIndex: 5, fontFamily: 'FivoSans,sans-serif',textShadow: "2px 1px  5px black" }}>
                            <span>Welcome to </span>
                            <br />
                            <span>Singapore Indian Association</span>
                        </rs-layer>
                        <a id="slider-1-slide-1-layer-1" className="rs-layer slider_button rev-btn" href="/history/" target="_self" rel="nofollow" data-type="button" data-xy="x:c;y:m;yo:175px,175px,96px,69px;" data-text="w:normal;s:16,16,14,8;l:18,18,16,9;ls:1px,1px,0px,0px;fw:700;" data-dim="minh:0px,0px,none,none;" data-rsp_bd="off" data-padding="t:23,23,13,6;r:48,48,27,17;b:23,23,13,6;l:48,48,27,17;" data-frame_0="y:50,50,27,16;" data-frame_1="e:power2.out;st:600;sp:1300;" data-frame_999="o:0;st:w;" data-frame_hover="c:#12101c;bgc:#fff;bor:0px,0px,0px,0px;sp:0ms;" style={{ zIndex: 6, backgroundColor: '#F31237', fontFamily: 'FivoSans,sans-serif', cursor: 'pointer' }}>Know More
                        </a>
                    </rs-slide>
                    <rs-slide style={{ position: 'absolute' }} data-key="rs-8" data-title="Slide" data-thumb="/images/slider2-1.jpg" data-anim="ms:1000;r:0;" data-in="o:0;" data-out="a:false;">
                        <img src="/images/slider2-1.jpg" alt="" title="about-slider-2-copyright" width={1920} height={870} className="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="/images/slider2-1.jpg" data-panzoom="d:10000;ss:100;se:106%;" data-no-retina />
                        <div className="after"></div>
                        <rs-layer id="slider-1-slide-8-layer-0" className="slider-main-title" data-type="text" data-color="white" data-xy="x:c;y:m;yo:6px,6px,3px,-19px;" data-text="w:normal;s:75,75,40,17;l:90,90,50,20;fw:900;a:center;" data-frame_0="rX:70deg;oZ:-50;" data-frame_0_chars="d:5;y:cyc(-100||100);o:0;" data-frame_1="oZ:-50;sp:700;" data-frame_1_chars="e:power2.out;dir:middletoedge;d:5;" data-frame_999="o:0;st:w;" style={{ zIndex: 5, fontFamily: 'FivoSans,sans-serif',textShadow: "2px 1px  5px black" }}>
                            A place for our community
                            <br />
                            <span>  engagement and sports development</span>
                        </rs-layer>
                        <a id="slider-1-slide-8-layer-1" className="rs-layer slider_button rev-btn" href="/events/" target="_self" rel="nofollow" data-type="button" data-xy="x:c;y:m;yo:175px,175px,96px,69px;" data-text="w:normal;s:16,16,14,8;l:18,18,16,9;ls:1px,1px,0px,0px;fw:700;" data-dim="minh:0px,0px,none,none;" data-rsp_bd="off" data-padding="t:23,23,13,6;r:48,48,27,17;b:23,23,13,6;l:48,48,27,17;" data-frame_0="y:50,50,27,16;" data-frame_1="e:power2.out;st:600;sp:1300;" data-frame_999="o:0;st:w;" data-frame_hover="c:#12101c;bgc:#fff;bor:0px,0px,0px,0px;sp:0ms;" style={{ zIndex: 6, backgroundColor: '#F31237', fontFamily: 'FivoSans,sans-serif', cursor: 'pointer' }}>Visit
                            Our Events
                        </a>
                    </rs-slide>
                    <rs-slide style={{ position: 'absolute' }} data-key="rs-9" data-title="Slide" data-thumb="/images/slider3-1.jpg" data-anim="ms:1000;r:0;" data-in="o:0;" data-out="a:false;">
                        <img src="/images/slider3-1.jpg" alt="" title="about-slider-3-copyright" width={1920} height={870} className="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="/images/slider3-1.jpg" data-panzoom="d:10000;ss:100;se:106%;" data-no-retina />
                        <div className="after"></div>
                        <rs-layer id="slider-1-slide-9-layer-0" className="slider-main-title" data-type="text" data-color="white" data-xy="x:c;y:m;yo:6px,6px,3px,-19px;" data-text="w:normal;s:75,75,40,17;l:90,90,50,20;fw:900;a:center;" data-frame_0="rX:70deg;oZ:-50;" data-frame_0_chars="d:5;y:cyc(-100||100);o:0;" data-frame_1="oZ:-50;sp:700;" data-frame_1_chars="e:power2.out;dir:middletoedge;d:5;" data-frame_999="o:0;st:w;" style={{ zIndex: 5, fontFamily: 'FivoSans,sans-serif',textShadow: "2px 1px  5px black" }}>
                            Time to celebrating our 
                            <br />
                            <span> history and build a legacy for the future
                            </span>
                        </rs-layer>
                        <a id="slider-1-slide-9-layer-1" className="rs-layer slider_button rev-btn" href="/events/" target="_self" rel="nofollow" data-type="button" data-xy="x:c;y:m;yo:175px,175px,96px,69px;" data-text="w:normal;s:16,16,14,8;l:18,18,16,9;ls:1px,1px,0px,0px;fw:700;" data-dim="minh:0px,0px,none,none;" data-rsp_bd="off" data-padding="t:23,23,13,6;r:48,48,27,17;b:23,23,13,6;l:48,48,27,17;" data-frame_0="y:50,50,27,16;" data-frame_1="e:power2.out;st:600;sp:1300;" data-frame_999="o:0;st:w;" data-frame_hover="c:#12101c;bgc:#fff;bor:0px,0px,0px,0px;sp:0ms;" style={{ zIndex: 6, backgroundColor: '#F31237', fontFamily: 'FivoSans,sans-serif', cursor: 'pointer' }}>VIEW
                            Gallery
                        </a>
                    </rs-slide>
                </rs-slides>
            </rs-module>
        </rs-module-wrap>
    </div>)
}

export default HeroSection;
