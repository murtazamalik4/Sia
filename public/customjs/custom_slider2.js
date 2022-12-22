var tpj = jQuery;

var revapi1;

if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {
    once: RS_MODULES.modules["revslider11"] !== undefined ? RS_MODULES.modules["revslider11"].once : undefined,
    init: function () {
        window.revapi1 = window.revapi1 === undefined || window.revapi1 === null || window.revapi1.length === 0 ? document.getElementById("rev_slider_1_1") : window.revapi1;
        if (window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length == 0) {
            window.revapi1initTry = window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1;
            if (window.revapi1initTry < 20) requestAnimationFrame(function () {
                RS_MODULES.modules["revslider11"].init()
            });
            return;
        }
        window.revapi1 = jQuery(window.revapi1);
        if (window.revapi1.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_1_1");
            return;
        }
        revapi1.revolutionInit({
            revapi: "revapi1",
            sliderLayout: "fullscreen",
            visibilityLevels: "1240,1240,778,480",
            gridwidth: "1410,1410,778,480",
            gridheight: "870,870,380,320",
            lazyType: "smart",
            spinner: "spinner13",
            perspectiveType: "local",
            spinnerclr: "#f22f2f",
            editorheight: "870,768,380,320",
            responsiveLevels: "1240,1240,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                onHoverStop: false,
                touch: {
                    touchenabled: true,
                    touchOnDesktop: true
                },
                arrows: {
                    enable: true,
                    style: "nav-chit-club",
                    hide_onmobile: true,
                    hide_under: "1025px",
                    left: {
                        h_offset: 65
                    },
                    right: {
                        h_offset: 65
                    }
                },
                bullets: {
                    enable: true,
                    tmp: "",
                    style: "chit-club-bullets",
                    v_offset: 22,
                    space: 13
                }
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript

if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
};
setREVStartSize({
    c: 'rev_slider_1_1',
    rl: [1240, 1240, 778, 480],
    el: [870, 870, 380, 320],
    gw: [1410, 1410, 778, 480],
    gh: [870, 870, 380, 320],
    type: 'standard',
    justify: '',
    layout: 'fullscreen',
    offsetContainer: '',
    offset: '',
    mh: "0"
});
if (window.RS_MODULES !== undefined && window.RS_MODULES.modules !== undefined && window.RS_MODULES.modules["revslider11"] !== undefined) {
    window.RS_MODULES.modules["revslider11"].once = false;
    window.revapi1 = undefined;
    if (window.RS_MODULES.checkMinimal !== undefined) window.RS_MODULES.checkMinimal()
}