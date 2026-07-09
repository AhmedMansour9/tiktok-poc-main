export const PLAYER_SCRIPT = `
window.addEventListener('message', function(event) {
  if (event.data && event.data['x-tiktok-player']) {
    window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
  }
});

window.open = function() {
  return null;
};

window.location.assign = function() {};

window.location.replace = function() {};

document.addEventListener(
  'click',
  function(event) {
    const target = event.target.closest('a');

    if (target && target.href) {
      event.preventDefault();
      event.stopPropagation();
    }
  },
  true
);

true;
`;