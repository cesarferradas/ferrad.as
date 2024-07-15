(() => {
  let base_url = "https:\/\/app.tinyanalytics.io\/";
  let pixel_key = "AkTWvNFWUCn1LxMM";
  let is_dnt = () => {
    return navigator['doNotTrack'] == '1' || navigator['msDoNotTrack'] == '1';
  };
  let send_data_beacon = data => {
    navigator.sendBeacon(`${base_url}pixel-track/${pixel_key}`, JSON.stringify(data));
  };
  let track = () => {
    let url_params = new URLSearchParams(window.location.search);
    let data = {
      path: window.location.pathname,
      referrer: document.referrer.includes(`${location.protocol}//${location.host}${location.pathname}`) ? null : document.referrer,
      utm: {
        source: url_params.get('utm_source'),
        medium: url_params.get('utm_medium'),
        campaign: url_params.get('utm_campaign'),
      },
      resolution: {
        width: window.screen.width,
        height: window.screen.height
      }
    };
    let referrer_url = document.createElement('a');
    referrer_url.href = document.referrer;
    let current_url = document.createElement('a');
    current_url.href = window.location.href;
    let type = document.referrer.trim() == '' || referrer_url.hostname != current_url.hostname ? 'landing_page' : 'pageview';
    send_data_beacon({
      type,
      url: window.location.href,
      data
    });
  };
  if (!is_dnt()) track();
})();
