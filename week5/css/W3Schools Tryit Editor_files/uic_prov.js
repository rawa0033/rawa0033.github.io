const adRnd = Math.random();
let provider = (adRnd < 0.75 ? "snigel" : adRnd < 0.95 ? "bsa" : "google");
let pageType = "";
const uic_prov_pre = (pt) => {
  if (pt == "default" || pt == "landing" || pt == "tryit" || pt == "tryitdb" || pt == "exercise" || pt == "xrcise" || pt == "video" || pt == "explainer") { pageType = pt; }
  if (pageType == "video" || pageType == "explainer") { provider = "snigel"; }
  if (!_uic_u_ok()) {
    if (pageType == "landing") {
      (function(){
        const provConsent=document.createElement('script');
        provConsent.type='text/javascript';
        provConsent.async=false;
        provConsent.src='https://cdn.snigelweb.com/adconsent/adconsent.js';
        (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(provConsent);
      })();
    } else {
      if (provider == "snigel") {
        window.googletag = window.googletag || { cmd: [] };
          googletag.cmd.push(function() { googletag.pubads().setTargeting("page_section", subjectFolder); });
        if (pageType == "default") {
          window.snigelPubConf = {
            "adengine": {
              "activeLots": [
                {placement: "adngin-bottom_left-0", adUnit: "bottom_left"},
                {placement: "adngin-bottom_right-0", adUnit: "bottom_right"},
                {placement: "adngin-main_leaderboard-0", adUnit: "main_leaderboard"},
                {placement: "adngin-sidebar_top-0", adUnit: "sidebar_top"},
                {placement: "adngin-outstream-0", adUnit: "outstream"}
              ]
            }
          };
        } else if (pageType == "tryit"  || pageType == "tryitdb" || pageType == "exercise") {
          window.snigelPubConf = {
            "adengine": { "activeLots": [ {placement: "adngin-try_it_leaderboard-0", adUnit: "try_it_leaderboard" } ] }
          };
        } else if (pageType == "xrcise") {
          window.snigelPubConf = {
            "adengine": {
              "activeLots": [ 
                {placement: "adngin-try_it_leaderboard-0", adUnit: "try_it_leaderboard" },
                {placement: "adngin-adhesive-0", adUnit: "adhesive" }
              ]
            }
          };
        } else if (pageType == "video") {
          window.snigelPubConf = {
            "adengine": {
              "targeting": {
                "key1": 1
              },
              "activeLots": [
                {placement: "adngin-bottom_left-0", adUnit: "bottom_left"},
                {placement: "adngin-bottom_right-0", adUnit: "bottom_right"},
                {placement: "adngin-main_leaderboard-0", adUnit: "main_leaderboard"},
                {placement: "adngin-sidebar_top-0", adUnit: "sidebar_top"},
                {placement: "adngin-outstream-0", adUnit: "outstream"},
                {placement: "snhb-w3schools_video-0", adUnit: "video"}
              ]
            }
          };
        } else if (pageType == "explainer") {
          window.snigelPubConf = {
            "adengine": {
              "targeting": { "key1": 1 },
              "activeLots": [ {placement: "adngin-explainer_video-0", adUnit: "explainer_video" } ]
            }
          };
        }
      } else if (provider == "bsa") {
        window.optimize = window.optimize || { queue: [] };
        window.optimize.queue.push(() => { window.optimize.customTargeting.push(['w3_page_section', subjectFolder]); });
        (function(){
          const provConsent=document.createElement('script');
          provConsent.type='text/javascript';
          provConsent.async=false;
          provConsent.src='https://cdn.snigelweb.com/adconsent/adconsent.js';
          (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(provConsent);
        })();
      } else if (provider == "google") {
        let gptAdSlots = [];
        window.googletag = window.googletag || { cmd: [] };
        if (pageType == "default") {
          googletag.cmd.push(function() {
            googletag.pubads().setTargeting("page_section", subjectFolder);
            let leaderMapping = googletag.sizeMapping().addSize([0, 0], [320, 50]).addSize([512, 0], [468, 60]).addSize([812, 0], [728, 90]).addSize([1025, 0], [468, 60]).addSize([1182, 0], [728, 90]).addSize([1457, 0], [[728, 90], [970, 90]]).build();
            gptAdSlots[0] = googletag.defineSlot('/16833175/MainLeaderboard', [[728, 90], [970, 90]], 'div-gpt-ad-1422003450156-2').defineSizeMapping(leaderMapping).addService(googletag.pubads());
            let skyMapping = googletag.sizeMapping().addSize([0, 0], [320, 50]).addSize([983, 0], [120, 600]).addSize([1143, 0], [160, 600]).addSize([1683, 0], [[160, 600], [300, 600], [300, 1050]]).build();
            gptAdSlots[1] = googletag.defineSlot('/16833175/WideSkyScraper', [[160, 600], [300, 600], [300, 1050]], 'div-gpt-ad-1422003450156-5').defineSizeMapping(skyMapping).addService(googletag.pubads());
            let stickyMapping = googletag.sizeMapping().addSize([0, 0], []).addSize([983, 0], [120, 600]).addSize([1143, 0], [160, 600]).addSize([1683, 0], [[160, 600], [300, 600], [300, 250]]).build();
            gptAdSlots[4] = googletag.defineSlot('/16833175/StickySkyScraper', [[300, 600], [120, 600], [300, 250], [160, 600]], 'div-gpt-ad-1472547360578-0').defineSizeMapping(stickyMapping).addService(googletag.pubads());
            let mcontMapping = googletag.sizeMapping().addSize([0, 0], [[300, 250], [336, 280], [320, 50]]).addSize([522, 0], [[300, 250], [336, 280], [468, 60]]).addSize([782, 0], [728, 90]).addSize([1025, 0], [[300, 250], [336, 280], [468, 60]]).addSize([1167, 0], [728, 90]).addSize([1472, 0], [[728, 90], [970, 90], [970, 250]]).build();
            gptAdSlots[5] = googletag.defineSlot('/16833175/MidContent', [[300, 250], [336, 280]], 'div-gpt-ad-1493883843099-0').defineSizeMapping(mcontMapping).setCollapseEmptyDiv(true).addService(googletag.pubads());
            let bmrMapping = googletag.sizeMapping().addSize([0, 0], [[300, 250], [336, 280]]).addSize([1272, 0], [[300, 250], [336, 280], [970, 250]]).build();
            gptAdSlots[2] = googletag.defineSlot('/16833175/BottomMediumRectangle', [[300, 250], [336, 280], [970, 250]], 'div-gpt-ad-1422003450156-0').defineSizeMapping(bmrMapping).setCollapseEmptyDiv(true).addService(googletag.pubads());
            let rbmrMapping = googletag.sizeMapping().addSize([0, 0], []).addSize([1007, 0], [[300, 250], [336, 280]]).build();
            gptAdSlots[3] = googletag.defineSlot('/16833175/RightBottomMediumRectangle', [[300, 250], [336, 280]], 'div-gpt-ad-1422003450156-3').defineSizeMapping(rbmrMapping).setCollapseEmptyDiv(true).addService(googletag.pubads());
          });
          window.snigelPubConf = {
            "adengine": {
              "activeLots": [],
              "additionalGptAdSlotIds": ["div-gpt-ad-1422003450156-2", "div-gpt-ad-1422003450156-5", "div-gpt-ad-1472547360578-0", "div-gpt-ad-1493883843099-0", "div-gpt-ad-1422003450156-0", "div-gpt-ad-1422003450156-3"]
            }
          };
        } else if (pageType == "tryit" || pageType == "exercise" || pageType == "xrcise") {
          googletag.cmd.push(function() {
            googletag.pubads().setTargeting("page_section", subjectFolder);
            let leaderMapping = googletag.sizeMapping().addSize([0, 0], [320, 50]).addSize([468, 0], [468, 60]).addSize([728, 0], [728, 90]).addSize([970, 0], [[728, 90], [970, 90]]).build();
            gptAdSlots[0] = googletag.defineSlot('/16833175/TryitLeaderboard', [[728, 90], [970, 90]], 'div-gpt-ad-1428407818244-0').defineSizeMapping(leaderMapping).addService(googletag.pubads());
          });
          window.snigelPubConf = {
            "adengine": {
              "activeLots": [],
              "additionalGptAdSlotIds": ["div-gpt-ad-1428407818244-0"]
            }
          };
        } else if (pageType == "tryitdb") {
          googletag.cmd.push(function() {
            googletag.pubads().setTargeting("page_section", subjectFolder);
            let leaderMapping = googletag.sizeMapping().addSize([0, 0], [320, 50]).addSize([468, 0], [468, 60]).addSize([728, 0], [728, 90]).addSize([970, 0], [[728, 90], [970, 90]]).build();
            gptAdSlots[0] = googletag.defineSlot('/16833175/TryitLeaderboard', [[728, 90], [970, 90]], 'div-gpt-ad-1428407818244-0').defineSizeMapping(leaderMapping).addService(googletag.pubads());
            let stickyMapping = googletag.sizeMapping().addSize([0, 0], []).addSize([983, 0], [120, 600]).addSize([1143, 0], [160, 600]).addSize([1683, 0], [[160, 600], [300, 600], [300, 250]]).build();
            gptAdSlots[4] = googletag.defineSlot('/16833175/StickySkyScraper', [[300, 600], [120, 600], [300, 250], [160, 600]], 'div-gpt-ad-1472547360578-0').defineSizeMapping(stickyMapping).addService(googletag.pubads());
          });
          window.snigelPubConf = {
            "adengine": {
              "activeLots": [],
              "additionalGptAdSlotIds": ["div-gpt-ad-1428407818244-0"]
            }
          };
        }
      }
    }
  } else if (_uic_u_ok()) {
    if (pageType == "video" || pageType == "explainer") {
      if (pageType == "explainer") {
        window.snigelPubConf = {
          "adengine": {
            "targeting": { "key1": 2 },
            "activeLots": [ {placement: "adngin-explainer_video-0", adUnit: "explainer_video" } ]
          }
        };
      } else if (pageType == "video") {
        window.snigelPubConf = {
          "adengine": {
            "targeting": { "key1": 2 },
            "activeLots": [ {placement: "snhb-w3schools_video-0", adUnit: "video"} ]
          }
        };
      }
    }
  }
  if ( (!_uic_u_ok() && (pageType != "landing")) || (_uic_u_ok() && (pageType == "video" || pageType == "explainer"))) {
    (function(){
    const provLoader=document.createElement('script');
    provLoader.type='text/javascript';
    if ( provider == "snigel" || provider == "google") {
      provLoader.async=false;
      provLoader.src='https://cdn.snigelweb.com/adengine/w3schools.com/loader.js';
    } else if ( provider == "bsa") {
      provLoader.async=true;
      provLoader.src='https://cdn4.buysellads.net/pub/w3schoolscom.js?'+(new Date()-new Date()%600000);
    }
    (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(provLoader);
    })();
  }
}

const uic_prov_sec = () => {
  if (!_uic_u_ok()) {
    if (pageType == "landing") {
        adconsent('setPublisherCC', 'US');
        adconsent('enableGoogleAnalytics', false);
        adconsent('setPrivacyPolicy', 'https://www.w3schools.com/about/about_privacy.asp');
        adconsent.gdpr('setLogo', 'https://www.w3schools.com/images/w3schools_logo_500_04AA6D.webp');
        adconsent.gdpr('setPrivacyPolicy', 'https://www.w3schools.com/about/about_privacy.asp');
        adconsent.gdpr('enableWelcomeTitle');
        adconsent.gdpr('setUiMode',0);
        adconsent.gdpr('enableWelcomeText');
        adconsent.gdpr('reconsiderConsent', 48);
        adconsent.gdpr('disableLegitimateInterest', false);
        adconsent.ccpa('setUSPLink', 'ccpa');
        adconsent.ccpa('setPrivacyPolicy', 'https://www.w3schools.com/about/about_privacy.asp');
        adconsent.ccpa('setSignedLSPA');
        adconsent('start');
    } else {
      if (pageType == "default" || pageType == "video") {
        const mainHeight = Number(w3_getStyleValue(document.getElementById("main"), "height").replace("px", ""));
        if (provider == "snigel") {
          if(window.adngin && window.adngin.adnginLoaderReady) {
            if (mainHeight > 2000) {
              if (document.getElementById("adngin-mid_content-0")) {
                adngin.queue.push(function(){  adngin.cmd.startAuction([
                  {placement: "adngin-sidebar_sticky-0", adUnit: "sidebar_sticky" },
                  {placement: "adngin-mid_content-0", adUnit: "mid_content" }
                  ]);
                });
              } else {
                adngin.queue.push(function(){ adngin.cmd.startAuction([ {placement: "adngin-sidebar_sticky-0", adUnit: "sidebar_sticky" } ]); });
              }
            } else {
              if (document.getElementById("adngin-mid_content-0")) {
                adngin.queue.push(function(){ adngin.cmd.startAuction([ {placement: "adngin-mid_content-0", adUnit: "mid_content" } ]); });
              }
            }
          } else {
            window.addEventListener('adnginLoaderReady', function() {
              if (mainHeight > 2000) {
                if (document.getElementById("adngin-mid_content-0")) {
                  adngin.queue.push(function(){  adngin.cmd.startAuction([
                    {placement: "adngin-sidebar_sticky-0", adUnit: "sidebar_sticky" },
                    {placement: "adngin-mid_content-0", adUnit: "mid_content" }
                  ]);});
                } else {
                  adngin.queue.push(function(){  adngin.cmd.startAuction([ {placement: "adngin-sidebar_sticky-0", adUnit: "sidebar_sticky" } ]);});
                }
              } else {
                if (document.getElementById("adngin-mid_content-0")) {
                  adngin.queue.push(function(){  adngin.cmd.startAuction([ {placement: "adngin-mid_content-0", adUnit: "mid_content" } ]);});
                }
              }
            });
          }
        } else if (provider == "bsa") {
          if (window.optimize && window.optimize.isInitialized) {
            const midAdElement = document.getElementById("bsa-zone_1715093236946-0_123456");
            window.optimize = window.optimize || { queue: [] };
            if (mainHeight > 2000) {
              if (midAdElement) {
                window.optimize.queue.push(() => { window.optimize.push(['bsa-zone_1715095830317-3_123456', 'bsa-zone_1715093236946-0_123456']); });
              } else {
                window.optimize.queue.push(() => { window.optimize.push('bsa-zone_1715095830317-3_123456'); });
              }
            } else if (midAdElement) {
              window.optimize.queue.push(() => { window.optimize.push('bsa-zone_1715093236946-0_123456'); });
            }
          }
        } else if (provider == "google") {
          const midAdElement = document.getElementById("div-gpt-ad-1493883843099-0");
          if (mainHeight > 2000) {
            if (midAdElement) {
              googletag.cmd.push(function () { googletag.display('div-gpt-ad-1493883843099-0'); });
              googletag.cmd.push(function () { googletag.display('div-gpt-ad-1472547360578-0'); });
            } else {
              googletag.cmd.push(function () { googletag.display('div-gpt-ad-1472547360578-0'); });
            }
          } else if (midAdElement) { 
            googletag.cmd.push(function () { googletag.display('div-gpt-ad-1493883843099-0'); });
          }
        }
        window.addEventListener("scroll", fix_stickyad);
        window.addEventListener("resize", fix_stickyad);
      } else if (pageType == "tryitdb") {
        if (provider == "snigel") {
          if(window.adngin && window.adngin.adnginLoaderReady) {
            adngin.queue.push(function(){ adngin.cmd.startAuction([ {placement: "adngin-sidebar_sticky-0", adUnit: "sidebar_sticky" } ]);});
          } else {
            window.addEventListener('adnginLoaderReady', function() {
              adngin.queue.push(function(){ adngin.cmd.startAuction([ {placement: "adngin-sidebar_sticky-0", adUnit: "sidebar_sticky" } ]);});
            });
          };
        } else if (provider == "bsa") {
          if (window.optimize && window.optimize.isInitialized) {
            window.optimize = window.optimize || { queue: [] };
            window.optimize.queue.push(() => { window.optimize.push('bsa-zone_1715095830317-3_123456'); });
          }
        } else if (provider == "google") {
          googletag.cmd.push(function () { googletag.display('div-gpt-ad-1472547360578-0'); });
        }
      }
      if (provider == "bsa") {
        if (provider == "bsa") {
          adconsent('setPublisherCC', 'US');
          adconsent('enableGoogleAnalytics', false);
          adconsent('setPrivacyPolicy', 'https://www.w3schools.com/about/about_privacy.asp');
          adconsent.gdpr('setLogo', 'https://www.w3schools.com/images/w3schools_logo_500_04AA6D.webp');
          adconsent.gdpr('setPrivacyPolicy', 'https://www.w3schools.com/about/about_privacy.asp');
          adconsent.gdpr('enableWelcomeTitle');
          adconsent.gdpr('setUiMode',0);
          adconsent.gdpr('enableWelcomeText');
          adconsent.gdpr('reconsiderConsent', 48);
          adconsent.gdpr('disableLegitimateInterest', false);
          adconsent.ccpa('setUSPLink', 'ccpa');
          adconsent.ccpa('setPrivacyPolicy', 'https://www.w3schools.com/about/about_privacy.asp');
          adconsent.ccpa('setSignedLSPA');
          adconsent('start');
        }
      }
    }
  }
}

const uic_prov_al = () => {
  const mainLeaderboard = document.getElementById("mainLeaderboard");
  const midContent = document.getElementById("midcontentadcontainer");
  const wideSkyscraper = document.getElementById("skyscraper");
  const vidPos = document.getElementById("vidpos");
  const stickySkyscraper = document.getElementById("stickyadcontainer");
  const bottom = document.getElementById("bottomads");
  const tryitLeaderboard = document.getElementById("tryitLeaderboard");
  const sqlstickyadcontainer = document.getElementById("sqlstickyadcontainer");
  const bottomPlacement = document.getElementById("bottomad");
  if (_uic_u_ok()) {
    if (pageType == "default" || pageType == "video") {
      if (mainLeaderboard) { mainLeaderboard.remove(); }
      if (midContent) {
        const previousSibling = midContent.previousElementSibling;
        if (previousSibling) { previousSibling.remove(); }
        midContent.remove();
      }
      const mainElement = document.getElementById("main");
      if (mainElement) {
        mainElement.classList.remove("l10");
        mainElement.classList.add("l12");
        mainElement.style.width = "100%";
        mainElement.style.borderRight = "none";
      }
      const rightElement = document.getElementById("right");
      if (rightElement) { rightElement.remove(); }
      if (bottom.length > 0) {
        const bottomAdParentElement = bottom[0].parentElement;
        if (bottomAdParentElement) {
          const previousElement = bottomAdParentElement.previousElementSibling;
          if (previousElement) { previousElement.remove(); }
          bottomAdParentElement.remove();
        }
      }
      if (typeof fix_stickyad === "function") { 
        window.removeEventListener("scroll", fix_stickyad);
        window.removeEventListener("resize", fix_stickyad);
      }
    } else if (pageType == "tryit") {
      if (tryitLeaderboard) { tryitLeaderboard.remove(); }
      const breadcrumb = document.getElementById("breadcrumb");
      const container = document.getElementById("container");
      const tryTopNav = document.getElementsByClassName("trytopnav");
      const dragBar = document.getElementById("dragbar");
      if (breadcrumb) {
        if (tryTopNav.length > 0) { tryTopNav[0].style.top = "40px"; }
        if (dragBar) { dragBar.style.top = "85px"; }
        if (container) { container.style.top = "85px"; }
      } else {
        if (container) {
          if (tryTopNav.length > 0) { tryTopNav[0].style.top = "0px"; }
          if (dragBar) { dragBar.style.top = "45px"; }
          container.style.top = "45px";
        } else {
          const altContainer = document.getElementsByClassName("container");
          if (altContainer.length > 0) { altContainer[0].style.top = "0px"; }
        }
      }
    } else if (pageType == "tryitdb") {
      document.getElementById("tryitLeaderboard").remove();
      document.getElementById("sqlstickyadcontainer").remove();
    } else if (pageType == "xrcise") {
      document.getElementById("tryitLeaderboard").parentElement.parentElement.remove();
    } else if (pageType == "exercise") {
      if (tryitLeaderboard) { tryitLeaderboard.parentElement.parentElement.remove();}
      document.getElementById("menubtn").style.left = "";
      document.getElementById("menubtn").style.right = "20px";
      document.getElementById("assignmenttext").previousElementSibling.style.textAlign = "center";
      document.getElementById("assignmenttext").previousElementSibling.style.marginTop = "0";
      document.getElementById("assignmenttext").previousElementSibling.style.paddingTop = "0";
      document.getElementById("menubtn").style.top = "40px";
    }
  } else {
    if (pageType == "default" || pageType == "video") {
      (function(){
        let provLeaderboard=document.createElement('div');
        if (provider == "snigel") { 
          provLeaderboard.id='adngin-main_leaderboard-0';
        } else if (provider == "bsa") {
          provLeaderboard.id='bsa-zone_1715092306342-4_123456';
        } else if (provider == "google") {
          provLeaderboard.id='div-gpt-ad-1422003450156-2';
        }
        if (mainLeaderboard) {
          mainLeaderboard.appendChild(provLeaderboard);
          if (provider == "google") { googletag.cmd.push(function () { googletag.display('div-gpt-ad-1422003450156-2'); });}
        }
      })();
      (function(){
        let provMidContent=document.createElement('div');
        if (provider == "snigel") {
          provMidContent.id='adngin-mid_content-0';
        } else if (provider == "bsa") {
          provMidContent.id='bsa-zone_1715093236946-0_123456';
        } else if (provider == "google") {
          provMidContent.id='div-gpt-ad-1493883843099-0';
          provMidContent.style='display: inline-block;';
        }
        if (midContent) { midContent.appendChild(provMidContent); }
      })();
      (function(){
        let provWideSky=document.createElement('div');
        if (provider == "snigel") {
          provWideSky.id='adngin-sidebar_top-0';
        } else if (provider == "bsa") {
          provWideSky.id='bsa-zone_1715095664459-3_123456';
        } else if (provider == "google") {
          provWideSky.id='div-gpt-ad-1422003450156-5';
        }
        if (wideSkyscraper) {
          wideSkyscraper.appendChild(provWideSky);
          if (provider == "google") { googletag.cmd.push(function () { googletag.display('div-gpt-ad-1422003450156-5'); }); }
        }
      })();
      if (provider == "snigel") {
        (function(){
          let provOutstream=document.createElement('div');
          provOutstream.id='adngin-outstream-0';
          if (vidPos) { vidPos.appendChild(provOutstream); }
        })();
      }
      (function(){
        let provStickySky=document.createElement('div');
        if (provider == "snigel") {
          provStickySky.id='adngin-sidebar_sticky-0';
        } else if (provider == "bsa") {
          provStickySky.id='bsa-zone_1715095830317-3_123456';
        } else if (provider == "google") {
          provStickySky.id='div-gpt-ad-1472547360578-0';
        }
        if (stickySkyscraper) { stickySkyscraper.children[0].appendChild(provStickySky);}
      })();
      (function(){
        let provBottomAds=document.createElement('div');
        provBottomAds.class='bottomad';
        let provLeftBottom=document.createElement('div');
        let provRightBottom=document.createElement('div');
        if (provider == "snigel") {
          provLeftBottom.id='adngin-bottom_left-0';
          provLeftBottom.style='padding:0 10px 10px 0;float:left;width:auto;';
          provRightBottom.id='adngin-bottom_right-0';
          provRightBottom.style='padding:0 10px 10px 0;float:left;width:auto;';
          provBottomAds.appendChild(provLeftBottom);
          provBottomAds.appendChild(provRightBottom); 
        } else if (provider == "bsa") {
          provLeftBottom.id='bsa-zone_1715094327312-7_123456';
          provLeftBottom.class='bottomad';
          provRightBottom.id='bsa-zone_1715094688225-5_123456';
          provRightBottom.class='bottomad';
        } else if (provider == "google") {
          provLeftBottom.id='div-gpt-ad-1422003450156-0';
          provLeftBottom.class='bottomad';
          provRightBottom.id='div-gpt-ad-1422003450156-3';
          provRightBottom.class='bottomad';
        }
        if (bottom) {
          if (provider == "snigel") {
            bottom.appendChild(provBottomAds);
          } else if (provider == "bsa" || provider == "google") {
            bottom.appendChild(provLeftBottom);
            bottom.appendChild(provRightBottom);
          }
          if (provider == "google") {
            googletag.cmd.push(function () { googletag.display('div-gpt-ad-1422003450156-0'); });
            googletag.cmd.push(function () { googletag.display('div-gpt-ad-1422003450156-3'); });
          }
        }
      })(); 
      if (provider == "snigel" || provider == "google") {
        docReady(uic_prov_sec());
      } else if (provider == "bsa") {
        docReady(function() {
          // Ensure Optimize is loaded before calling secondBSA
          let checkOptimizeInitialized = setInterval(function () {
            if (window.optimize && window.optimize.isInitialized) {
              clearInterval(checkOptimizeInitialized);
              uic_prov_sec();
            }
          }, 300); // check every 300ms
        });
      }
    } else if (pageType == "landing") {
      docReady(function() {
        // Ensure Optimize is loaded before calling secondBSA
        let checkReadyState = setInterval(function () {
          if (document.readyState === "interactive" || document.readyState === "complete") {
            clearInterval(checkReadyState);
            uic_prov_sec();
          }
        }, 300); // check every 300ms
      });
    } else if (pageType == "tryit" || pageType == "xrcise" || pageType == "exercise" || pageType == "tryitdb") {
      (function(){
        let provLeaderboard=document.createElement('div');
        if (provider == "snigel") {
          provLeaderboard.id='adngin-try_it_leaderboard-0';
        } else if (provider == "bsa") {
          provLeaderboard.id='bsa-zone_1726836232860-7_123456';
        } else if (provider == "google") {
          provLeaderboard.id='div-gpt-ad-1428407818244-0';
        }
        if (tryitLeaderboard) { tryitLeaderboard.appendChild(provLeaderboard); }
      })();
      if (pageType == "xrcise") {
        if (provider == "snigel") {
          (function(){
            let provAdhesive=document.createElement('div');
            provAdhesive.id='adngin-adhesive-0';
            if (bottomPlacement) { bottomPlacement.appendChild(provAdhesive); }
          })(); 
        }
      } else if (pageType == "tryitdb") {
        (function(){
          let provDBSky=document.createElement('div');
          if (provider == "snigel") {
            provDBSky.id='adngin-sidebar_sticky-0';
          } else if (provider == "bsa") {
            provDBSky.id='bsa-zone_1726836664095-3_123456';
          } else if (provider == "google") {
            provDBSky.id='div-gpt-ad-1472547360578-0';
          }
          if (sqlstickyadcontainer) { sqlstickyadcontainer.appendChild(provDBSky); }
        })();
        if (provider == "snigel" || provider == "google") {
          docReady(uic_prov_sec());
        } else if (provider == "bsa") {
          docReady(function() {
            // Ensure Optimize is loaded before calling secondBSA
            let checkOptimizeInitialized = setInterval(function () {
              if (window.optimize && window.optimize.isInitialized) {
                clearInterval(checkOptimizeInitialized);
                uic_prov_sec();
              }
            }, 300); // check every 300ms
          });
        }
      }
      if (provider == "google") {
        googletag.cmd.push(function () { googletag.display('div-gpt-ad-1428407818244-0'); });
      }
    }
  }
}

const uic_prov_run = () => {
  if (!_uic_u_ok()) {
    const sqlstickyadcontainer = document.getElementById("sqlstickyadcontainer");
    if (pageType == "tryit" || pageType == "xrcise" || pageType == "exercise" || pageType == "tryitdb") {
      if (provider == "snigel") {
        adngin.cmd.startAuction([{placement: "adngin-try_it_leaderboard-0", adUnit: "try_it_leaderboard" },]);
      } else if (provider == "bsa") {
        window.optimize.push('bsa-zone_1726836232860-7_123456');
      } else if (provider == "google") {
        googletag.cmd.push(function () { googletag.display('div-gpt-ad-1428407818244-0'); });
      }
      if (sqlstickyadcontainer) {
        if (provider == "snigel") {
          adngin.cmd.startAuction([{placement: "adngin-sidebar_sticky-0", adUnit: "sidebar_sticky"},]);
        } else if (provider == "bsa") {
          window.optimize.push('bsa-zone_1726836664095-3_123456');
        } else if (provider == "google") {
          googletag.cmd.push(function () { googletag.display('div-gpt-ad-1472547360578-0'); });
        }
      }
      if (pageType == "xrcise") {
        if (provider == "snigel") { adngin.cmd.startAuction([{placement: "adngin-adhesive-0", adUnit: "adhesive" },]); }
      }
    }
  }
}