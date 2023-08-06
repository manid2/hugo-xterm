// ad locations in page
const postHeader = document.querySelector(".post-header");
const postContent = document.querySelector(".post-content");
const postPagination = document.querySelector(".post-footer > .pagination");
const postFooter = document.querySelector(".post-footer");

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

const adDirectLink = document.createElement("a");
adDirectLink.href =
  "https://www.highcpmrevenuegate.com/tk17ncqp?key=484c772258d73d54a528cc874518bfaa";
adDirectLink.title = "Ad";
adDirectLink.textContent = "Click here for ad ...";

const adReferralLink = document.createElement("a");
adReferralLink.href =
  "https://beta.publishers.adsterra.com/referral/YiXLaw9kEU";
adReferralLink.title = "Adsterra referral";
adReferralLink.textContent = "Click here to join Adsterra ...";

const adNativeBanner = document.createElement("div");
adNativeBanner.id = "container-9a0b7e3f5ef184780fa822e1002f7dbe";

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

function setAdReferralBanner(isResize = false) {
  let postFooterAds = null;

  if (!isResize) {
    postFooterAds = getAdBlock();
  } else {
    postFooterAds = postFooter.querySelector(".ads");
    postFooterAds.removeChild(postFooterAds.firstElementChild);
  }

  const adBanner = document.createElement("div");
  adBanner.classList.add("banner");

  const adReferralLink = document.createElement("a");
  adReferralLink.href =
    "https://beta.publishers.adsterra.com/referral/YiXLaw9kEU";
  adReferralLink.title = "Adsterra referral";

  const adReferralGif = document.createElement("img");
  adReferralGif.alt = "Adsterra referral banner";

  if (!isPhone()) {
    adBanner.classList.add("banner--desktop");
    adReferralGif.src =
      "https://landings-cdn.adsterratech.com/referralBanners/gif/720x90_adsterra_reff.gif";
  } else {
    adBanner.classList.add("banner--mobile");
    adReferralGif.src =
      "https://landings-cdn.adsterratech.com/referralBanners/gif/300x250_adsterra_reff.gif";
  }
  adReferralLink.append(adReferralGif);
  adBanner.append(adReferralLink);
  postFooterAds.append(adBanner);

  if (!isResize) {
    postFooter.prepend(postFooterAds);
  }
}

setAdBannerLeader();
setAdReferralBanner();

function handleWinResize() {
  setAdBannerLeader(true);
  setAdReferralBanner(true);
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

const adDirectLinkButtons = document.createElement("div");
adDirectLinkButtons.classList.add("ads", "buttons", "fill");

const adDirectLinkButtonLeft = document.createElement("a");
adDirectLinkButtonLeft.classList.add("button", "outline", "left");
adDirectLinkButtonLeft.href = adDirectLink.href;
adDirectLinkButtonLeft.title = adDirectLink.title;
adDirectLinkButtonLeft.textContent = adDirectLink.textContent;

const adDirectLinkButtonRight = document.createElement("a");
adDirectLinkButtonRight.classList.add("button", "outline", "right");
adDirectLinkButtonRight.href = adReferralLink.href;
adDirectLinkButtonRight.title = adReferralLink.title;
adDirectLinkButtonRight.textContent = adReferralLink.textContent;

adDirectLinkButtons.append(adDirectLinkButtonLeft);
adDirectLinkButtons.append(adDirectLinkButtonRight);

postContent.prepend(adDirectLinkButtons);

if (postPagination) {
  postPagination.append(getAdBlock(adNativeBanner, "native--banner"));
}
