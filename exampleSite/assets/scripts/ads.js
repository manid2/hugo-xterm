// ad locations in page
const postHeader = document.querySelector(".post-header");

// media queries
const phoneQuery = getComputedStyle(document.body).getPropertyValue(
  "--phone",
);
const isPhone = () => window.matchMedia(phoneQuery).matches;

// ad configuration options
const adBannerLeaderConfDesktop = {
  key: "bee96be5c69e7af0f2691329a379a004",
  format: "iframe",
  height: 90,
  width: 728,
  params: {},
};

const adBannerLeaderConfMobile = {
  key: "684d5fd86fbcfeea0b3b2c8dac191a20",
  format: "iframe",
  height: 50,
  width: 320,
  params: {},
};

function getAdBannerLeaderDevice(adDevice, adConf) {
  const atOptionsScript = document.createElement("script");
  atOptionsScript.type = "text/javascript";
  atOptionsScript.textContent = "atOptions = " + JSON.stringify(adConf);

  const adSrcScript = document.createElement("script");
  adSrcScript.type = "text/javascript";
  adSrcScript.src =
    "https://www.profitablecreativeformat.com/" + adConf.key + "/invoke.js";

  const adBanner = document.createElement("div");
  adBanner.classList.add("banner", "banner--" + adDevice);
  adBanner.append(atOptionsScript);
  adBanner.append(adSrcScript);
  return adBanner;
}

function setAdBannerLeader(isResize = false) {
  let postHeaderAds = null;

  if (!isResize) {
    postHeaderAds = getAdBlock();
  } else {
    postHeaderAds = postHeader.querySelector(".ads");
    postHeaderAds.removeChild(postHeaderAds.firstElementChild);
  }

  if (!isPhone()) {
    postHeaderAds.append(
      getAdBannerLeaderDevice("desktop", adBannerLeaderConfDesktop),
    );
  } else {
    postHeaderAds.append(
      getAdBannerLeaderDevice("mobile", adBannerLeaderConfMobile),
    );
  }

  if (!isResize) {
    postHeader.prepend(postHeaderAds);
  }
}

setAdBannerLeader();

function handleWinResize() {
  setAdBannerLeader(true);
}

window.addEventListener("resize", handleWinResize);

function getAdBlock(adContent, styles) {
  const adBlock = document.createElement("div");
  adBlock.classList.add("ads");

  if (styles) {
    adBlock.classList.add(styles);
  }

  if (adContent) {
    adBlock.append(adContent);
  }

  return adBlock;
}
