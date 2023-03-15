/*
Author : Subham Kumar
v1.0
Date : 11 feb 2021 6:14:31 PM
v2.0
Date : 15 mar 2023
- DOM id changed
*/

function muteSpotifyAd(){


  console.log('gravert:adblocker enabled');


  function isAd()
  {
    const progressBar = document.querySelector(".playback-bar");
    const songDuration =  progressBar.childNodes[2].innerText;
    console.log(`song Time ${songDuration}`);

    if (songDuration == undefined) {
      alert('song duration component null');
      throw new Error('song duration component null');
    }
    
    let [min, sec] = songDuration.split(":")
    min = Number(min)
    sec = Number(sec)
    is_ad = min < 1 && sec < 40
    return is_ad;
  }


  function isMuted()
  {

    const volumeButton = document.querySelector(".volume-bar__icon-button");

    if (volumeButton == undefined) {
        alert('volume button empty');
        throw new Error('volume button empty');
    }

    return volumeButton.getAttribute("aria-label") != "Mute";

  }

  function muteIfAdUnmuteIfNot()
  {

      if ( (isAd() && ! isMuted()) || (!isAd()&& isMuted()) ) {
          console.log("Ads so muting");
          document.querySelector(volumeButton).click()
      }
      else {
        console.log("no Ads so playing");
      }

  }

  setInterval(muteIfAdUnmuteIfNot, 1000)

}

setTimeout(muteSpotifyAd, 10000);

console.log('adblocker active');


