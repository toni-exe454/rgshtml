window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme18"]=window.wsb["Theme18"]||window.radpack("@widget/LAYOUT/bs-layout18-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-14147\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"adamina\",\"poppins\",\"\"],\"colors\":[\"#0029ff\"],\"locale\":\"en-IN\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"a3f9f2b8-9a07-4b59-8f38-edd05c5a6436\":{\"pageId\":\"05688f47-65ce-4529-8721-4b1f486e6a18\",\"routePath\":\"/home\"},\"0dcfc277-ebab-49c0-9d50-93d3afb5e107\":{\"pageId\":\"9fa05b1d-1bad-4505-b4da-e8b19f2256cc\",\"widgetId\":null,\"routePath\":\"/about-rgs\"},\"33066217-8360-45e1-b86d-5e27c5dee5f1\":{\"pageId\":\"97a47aae-03f8-4334-9842-852b14879e1b\",\"widgetId\":null,\"routePath\":\"/contact\"},\"70245402-32c9-434c-befd-9d289a361aeb\":{\"pageId\":\"3c4c6f6d-7a26-4ce5-8bb2-021432c13aad\",\"widgetId\":null,\"routePath\":\"/services\"},\"6535d58b-024c-4c4d-a0b3-c45156a1083c\":{\"pageId\":\"2edc7a91-f495-4d84-bfdf-4c7f10cd8e83\",\"widgetId\":null,\"routePath\":\"/listings\"}},\"isInternalPage\":true,\"navigationMap\":{\"ddf59aca-b6dd-4af0-a7dd-11699b34d647\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ddf59aca-b6dd-4af0-a7dd-11699b34d647\",\"name\":\"Blog\",\"href\":\"/blog\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"b8bdedbf-8aa6-4246-97e4-0f3673e64cbb\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"b8bdedbf-8aa6-4246-97e4-0f3673e64cbb\",\"name\":\"For Sellers\",\"href\":\"/for-sellers\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"c11e39d4-4dee-4683-a6e7-c73e5d6a934b\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"c11e39d4-4dee-4683-a6e7-c73e5d6a934b\",\"name\":\"Privacy Policy\",\"href\":\"/privacy-policy\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"74c567fe-b47a-41fc-869d-a9e39026c6d3\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"74c567fe-b47a-41fc-869d-a9e39026c6d3\",\"name\":\"For OFWs\",\"href\":\"/for-ofws\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"05688f47-65ce-4529-8721-4b1f486e6a18\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"05688f47-65ce-4529-8721-4b1f486e6a18\",\"name\":\"Home\",\"href\":\"/home\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"9fa05b1d-1bad-4505-b4da-e8b19f2256cc\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"9fa05b1d-1bad-4505-b4da-e8b19f2256cc\",\"name\":\"About RGS\",\"href\":\"/about-rgs\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"c718d667-1764-42b4-9efc-93c23fed0740\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"c718d667-1764-42b4-9efc-93c23fed0740\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"3f9d51e2-7097-4d67-a0d8-370e893819f2\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"3f9d51e2-7097-4d67-a0d8-370e893819f2\",\"name\":\"Events\",\"href\":\"/events\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"fb719ed5-7d36-4a1f-b0f4-4b734787b46d\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"fb719ed5-7d36-4a1f-b0f4-4b734787b46d\",\"href\":\"/idx/wrapper\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"ABSOLUTE_URL\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"2edc7a91-f495-4d84-bfdf-4c7f10cd8e83\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"2edc7a91-f495-4d84-bfdf-4c7f10cd8e83\",\"name\":\"Listings\",\"href\":\"/listings\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"3c4c6f6d-7a26-4ce5-8bb2-021432c13aad\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"3c4c6f6d-7a26-4ce5-8bb2-021432c13aad\",\"name\":\"Services\",\"href\":\"/services\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"511759dc-7a97-4ee0-b686-df5f2f76844c\":{\"isFlyoutMenu\":true,\"active\":false,\"pageId\":\"511759dc-7a97-4ee0-b686-df5f2f76844c\",\"name\":\"About\",\"href\":\"/about\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"97a47aae-03f8-4334-9842-852b14879e1b\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"97a47aae-03f8-4334-9842-852b14879e1b\",\"name\":\"Contact\",\"href\":\"/contact\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"425ad46c-8bca-44c5-83c4-c8b0ca69341a\":{\"isFlyoutMenu\":true,\"active\":false,\"pageId\":\"425ad46c-8bca-44c5-83c4-c8b0ca69341a\",\"name\":\"Client Resources\",\"href\":\"/client-resources\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"fa74bbc4-5d88-4957-b7e1-d9ce4648c42b\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"fa74bbc4-5d88-4957-b7e1-d9ce4648c42b\",\"name\":\"Market Updates\",\"href\":\"/market-updates\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#0029ff\",\"meta\":{\"primary\":\"rgb(0, 41, 255)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"adamina\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":2,\"primary\":{\"id\":\"adamina\",\"name\":\"Adamina\",\"url\":\"//fonts.googleapis.com/css?family=Adamina:400&display=swap\",\"family\":\"'Adamina', serif\",\"size\":14,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"1px\"}},\"alternate\":{\"id\":\"poppins\",\"name\":\"Poppins\",\"url\":\"//fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap\",\"family\":\"'Poppins', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,600,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesPrimary\":[{\"languages\":[\"en\"],\"meta\":{\"primary\":{\"styles\":{\"textTransform\":\"uppercase\"}}}}]},\"alternate\":{\"id\":\"poppins\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":15,\"alternate\":{\"id\":\"poppins\",\"name\":\"Poppins\",\"url\":\"//fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap\",\"family\":\"'Poppins', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,600,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme18\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-14145-navId-mobile\",\"uniqueId\":\"n-14145\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"41a17f67-b0c8-4338-bb88-db0b4cd84b97\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"41a17f67-b0c8-4338-bb88-db0b4cd84b97\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"size\":\"default\"}},\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingGamma\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}}}}},\"widgetThemeOverrides\":{\"BodyBeta\":{\"byType\":{\"HeroText\":{\"value\":{\"fontScaleMultiplier\":1}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-FlyoutMenu-Component',props:JSON.parse("{\"toggleId\":\"511759dc-7a97-4ee0-b686-df5f2f76844c-nav-14156-toggleId\",\"label\":\"About\",\"navBarId\":\"navBarId-14154\",\"parentId\":\"nav-14156\",\"widgetId\":\"41a17f67-b0c8-4338-bb88-db0b4cd84b97\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"41a17f67-b0c8-4338-bb88-db0b4cd84b97\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"size\":\"default\"}},\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingGamma\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}}}}},\"widgetThemeOverrides\":{\"BodyBeta\":{\"byType\":{\"HeroText\":{\"value\":{\"fontScaleMultiplier\":1}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-FlyoutMenu-Component"},false);
Core.utils.deferBootstrap({elId:'bs-3',componentName:'@widget/LAYOUT/bs-FlyoutMenu-Component',props:JSON.parse("{\"toggleId\":\"425ad46c-8bca-44c5-83c4-c8b0ca69341a-nav-14156-toggleId\",\"label\":\"Client Resources\",\"navBarId\":\"navBarId-14154\",\"parentId\":\"nav-14156\",\"widgetId\":\"41a17f67-b0c8-4338-bb88-db0b4cd84b97\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"41a17f67-b0c8-4338-bb88-db0b4cd84b97\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"size\":\"default\"}},\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingGamma\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}}}}},\"widgetThemeOverrides\":{\"BodyBeta\":{\"byType\":{\"HeroText\":{\"value\":{\"fontScaleMultiplier\":1}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-FlyoutMenu-Component"},false);
Core.utils.deferBootstrap({elId:'bs-4',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-14157\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBarId-14154\",\"widgetId\":\"41a17f67-b0c8-4338-bb88-db0b4cd84b97\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"41a17f67-b0c8-4338-bb88-db0b4cd84b97\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"size\":\"default\"}},\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingGamma\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}}}}},\"widgetThemeOverrides\":{\"BodyBeta\":{\"byType\":{\"HeroText\":{\"value\":{\"fontScaleMultiplier\":1}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function(e){let{containerId:a,navId:n,logoImageId:l,inlineUtilitiesMenu:i,forceBreakpoint:o}=e;let r,c,s,g,p,d,u;const y=document.getElementById(n);function m(){if(c||!y||!R(y))return;s=Array.from(y.children),s.forEach(f),i&&(g=s.pop(),I(g)),p=s.pop();const e=p.querySelector("ul");d=e?Array.from(e.children):[],y.style.whiteSpace="normal",u=R(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(b)}function b(){const e=s.map((e=>R(e)));const t=g?R(g):0,a=u-t;if(E(e)>a){const t=R(p);for(let n=E(e);n+t>a;n-=e.pop());const n=e.length;h(s,0,n,I),h(d,0,n,w),h(s,n,s.length,w),h(d,n,s.length,I),I(p)}else s.forEach(I),w(p);window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&o&&o!==t.Q||(window.clearTimeout(r),r=window.setTimeout(m,50))}function h(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function f(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function w(e){e.style.display="none",e.classList.remove("visible")}function I(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function E(e){return e.reduce(((e,t)=>e+t),0)}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil";return"ceil"===t?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{c=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{c=!0,window.removeEventListener("resize",v,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-14156\",\"logoImageId\":\"logo-14153\",\"containerId\":\"navBarId-14154\"}"));
window.wsb["StickyNav"]=function(e){let{uniqueId:t,logoHeight:o,hasAnimation:a,anchorId:n}=e;const r=o>104?120:80;let i,c,s,l,g=window.innerWidth<768,d=0;const u=()=>{const e=Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]')).find((e=>e.offsetHeight));if(!e)return null;const t=window.getComputedStyle(e);return s=t.getPropertyValue("box-shadow"),l=t.getPropertyValue("margin-top"),e},p={i18nBar:document.querySelector('[data-aid="i18n_BAR_RENDERED"]'),stickyNav:document.getElementById(t),stickyNavParent:document.querySelector("[data-stickynav-wrapper]"),logo:u(),freemiumAd:document.querySelector("[data-freemium-ad]"),anchor:document.getElementById(n)},y=()=>{const{stickyNav:e,stickyNavParent:t}=p;let a=e.offsetHeight;g&&e.offsetHeight<o&&o<=104&&(a=o),t.style.height=`${a}px`};new IntersectionObserver((e=>e.forEach((e=>{let{isIntersecting:t}=e;return window.requestAnimationFrame((()=>(e=>{if(c===e)return;const{stickyNav:t,logo:n,i18nBar:i,freemiumAd:u,stickyNavParent:h}=p;p.freemiumAd=u||document.querySelector("[data-freemium-ad]"),d=d||p.freemiumAd?.offsetHeight,e&&h&&!h.style.height&&y(),i&&(i.style.display=e?"none":"flex"),n&&(n.style.cssText=e?`max-height:${g?50:64}px;box-shadow:none;margin-top:0px;`:`max-height:${g?r:o}px;box-shadow:${s};margin-top:${l};`,"HEADER_LOGO_OVERHANG_CONTAINER"===n.parentNode.getAttribute("data-aid")&&(n.parentNode.style.height=e?"auto":"1em")),t.style.cssText=e?`position:fixed;z-index:10000;left:0px;right:0px;top:${d||0}px;`:"",a&&(e?t.classList.add("sticky-animate","x-c-bg"):t.classList.remove("sticky-animate","x-c-bg")),c=e})(!t)))})))).observe(p.anchor);const h=/#[^\\?]*/;function m(e){const t=(e.target.href.match(h)[0]||[]).slice(1),o=document.getElementById(t);o&&f(o)}function f(e){const t=p.stickyNav.clientHeight;let o=e.offsetTop;const a=setInterval((()=>{e.offsetTop===o?(clearInterval(a),scrollTo({top:e.offsetTop-t})):o=e.offsetTop}),300)}if(Array.from(document.querySelectorAll("a")).filter((e=>h.test(e.href))).forEach((e=>e.addEventListener("click",m))),window.location.hash){const e=document.getElementById(window.location.hash.slice(1));e&&f(e)}window.addEventListener("resize",(()=>{clearTimeout(i),i=setTimeout((()=>{g=window.innerWidth<768,p.logo=u(),y()}),250)}),{passive:!0})};
window.wsb["StickyNav"](JSON.parse("{\"uniqueId\":\"header_stickynav14148\",\"anchorId\":\"header_stickynav-anchor14149\",\"logoHeight\":91,\"hasAnimation\":true}"));
Core.utils.deferBootstrap({elId:'bs-5',componentName:'@widget/LAYOUT/bs-MobileFlyoutMenu-Component',props:JSON.parse("{\"item\":{\"isFlyoutMenu\":true,\"active\":false,\"pageId\":\"511759dc-7a97-4ee0-b686-df5f2f76844c\",\"name\":\"About\",\"href\":\"/about\",\"target\":\"\",\"visible\":true,\"navigation\":[{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"9fa05b1d-1bad-4505-b4da-e8b19f2256cc\",\"name\":\"About RGS\",\"href\":\"/about-rgs\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"3c4c6f6d-7a26-4ce5-8bb2-021432c13aad\",\"name\":\"Services\",\"href\":\"/services\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}],\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"styles\":{\"mobileOnly\":{\"@xs\":{\"display\":\"block\"},\"@md\":{\"display\":\"none\"}},\"overlay\":{\"position\":\"fixed\",\"overflow\":\"hidden\",\"display\":\"flex\",\"flexDirection\":\"column\"},\"innerContainer\":{\"overflowY\":\"auto\",\"overflowX\":\"hidden\",\"width\":\"100%\",\"overscrollBehavior\":\"none\"},\"topContainer\":{\"paddingHorizontal\":\"medium\"},\"membershipHeader\":{\"paddingBottom\":\"large\"},\"close\":{\"position\":\"absolute\",\"top\":15,\"right\":15,\"fontSize\":\"xlarge\"},\"list\":{\"textAlign\":\"left\",\"paddingVertical\":\"0\",\"paddingHorizontal\":\"0\",\"wordWrap\":\"break-word\",\"overflowWrap\":\"break-word\"},\"subList\":{\"paddingHorizontal\":\"0\",\"paddingTop\":\"0\",\"paddingBottom\":\"small\"},\"subListItem\":{\"display\":\"block\",\"marginBottom\":\"0\",\"borderBottomWidth\":\"0\",\":last-child\":{\"paddingBottom\":\"medium\"}},\"socialContainer\":{\"display\":\"flex\",\"justifyContent\":\"flex-start\",\"alignItems\":\"center\",\"marginBottom\":\"large\",\"flexDirection\":\"column\",\"> :not(:first-child)\":{\"marginTop\":\"small\"}},\"searchFormContainer\":{\"position\":\"relative\",\"height\":\"auto\"},\"translateContainer\":{\"@md\":{\"display\":\"none\"}}},\"domainName\":\"robertgsarmiento.com\",\"pageRoute\":\"/privacy-policy\",\"widgetId\":\"41a17f67-b0c8-4338-bb88-db0b4cd84b97\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"41a17f67-b0c8-4338-bb88-db0b4cd84b97\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"NavigationDrawer\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"size\":\"default\"}},\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingGamma\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}}}}},\"widgetThemeOverrides\":{\"BodyBeta\":{\"byType\":{\"HeroText\":{\"value\":{\"fontScaleMultiplier\":1}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-MobileFlyoutMenu-Component"},false);
Core.utils.deferBootstrap({elId:'bs-6',componentName:'@widget/LAYOUT/bs-MobileFlyoutMenu-Component',props:JSON.parse("{\"item\":{\"isFlyoutMenu\":true,\"active\":false,\"pageId\":\"425ad46c-8bca-44c5-83c4-c8b0ca69341a\",\"name\":\"Client Resources\",\"href\":\"/client-resources\",\"target\":\"\",\"visible\":true,\"navigation\":[{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"b8bdedbf-8aa6-4246-97e4-0f3673e64cbb\",\"name\":\"For Sellers\",\"href\":\"/for-sellers\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"fa74bbc4-5d88-4957-b7e1-d9ce4648c42b\",\"name\":\"Market Updates\",\"href\":\"/market-updates\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"74c567fe-b47a-41fc-869d-a9e39026c6d3\",\"name\":\"For OFWs\",\"href\":\"/for-ofws\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"3f9d51e2-7097-4d67-a0d8-370e893819f2\",\"name\":\"Events\",\"href\":\"/events\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}],\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"styles\":{\"mobileOnly\":{\"@xs\":{\"display\":\"block\"},\"@md\":{\"display\":\"none\"}},\"overlay\":{\"position\":\"fixed\",\"overflow\":\"hidden\",\"display\":\"flex\",\"flexDirection\":\"column\"},\"innerContainer\":{\"overflowY\":\"auto\",\"overflowX\":\"hidden\",\"width\":\"100%\",\"overscrollBehavior\":\"none\"},\"topContainer\":{\"paddingHorizontal\":\"medium\"},\"membershipHeader\":{\"paddingBottom\":\"large\"},\"close\":{\"position\":\"absolute\",\"top\":15,\"right\":15,\"fontSize\":\"xlarge\"},\"list\":{\"textAlign\":\"left\",\"paddingVertical\":\"0\",\"paddingHorizontal\":\"0\",\"wordWrap\":\"break-word\",\"overflowWrap\":\"break-word\"},\"subList\":{\"paddingHorizontal\":\"0\",\"paddingTop\":\"0\",\"paddingBottom\":\"small\"},\"subListItem\":{\"display\":\"block\",\"marginBottom\":\"0\",\"borderBottomWidth\":\"0\",\":last-child\":{\"paddingBottom\":\"medium\"}},\"socialContainer\":{\"display\":\"flex\",\"justifyContent\":\"flex-start\",\"alignItems\":\"center\",\"marginBottom\":\"large\",\"flexDirection\":\"column\",\"> :not(:first-child)\":{\"marginTop\":\"small\"}},\"searchFormContainer\":{\"position\":\"relative\",\"height\":\"auto\"},\"translateContainer\":{\"@md\":{\"display\":\"none\"}}},\"domainName\":\"robertgsarmiento.com\",\"pageRoute\":\"/privacy-policy\",\"widgetId\":\"41a17f67-b0c8-4338-bb88-db0b4cd84b97\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"41a17f67-b0c8-4338-bb88-db0b4cd84b97\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"NavigationDrawer\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"size\":\"default\"}},\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingGamma\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}}}}},\"widgetThemeOverrides\":{\"BodyBeta\":{\"byType\":{\"HeroText\":{\"value\":{\"fontScaleMultiplier\":1}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-MobileFlyoutMenu-Component"},false);
window.wsb["CookieBannerScript"]=function(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"914013bd-fa22-4f40-9fe1-f1d6d1f1f9b1\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
document.getElementById('page-14144').addEventListener('click', function() {}, false);