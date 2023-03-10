/*
Author : Subham Kumar
v1.0
Date : 11 feb 2021 6:14:31 PM
v1.1.

*/
  (function(){

      console.log('gravert:adblocker enabled');
      var volumeButton = ".volume-bar__icon-button";
      var songEndTime = "playback-bar__progress-time";

      function isAd()
      {
        song_duration = document.getElementsByClassName(songEndTime)[1].innerText;
	if (song_duration == undefined) {
	    alert('song duration component null');
	    throw new Error('song duration component null');
	}
	      
        [min, sec] = song_duration.split(":")
        min = Number(min)
        sec = Number(sec)
        is_ad = min < 1 && sec < 40
        return is_ad;
      }


      function isMuted()
      {

	const volumeButton = document.querySelector(volumeButton);

	if (volumeButton == undefined) {
	    alert('volume button empty');
	    throw new Error('volume button empty');
	}

        return volumeButton.getAttribute("aria-label") != "Mute";

      }

      function muteIfAdUnmuteIfNot()
      {

          if ( (isAd() && ! isMuted()) || (!isAd()&& isMuted()) ) {
	  
              document.querySelector(volumeButton).click()
	  }

      }

      setInterval(muteIfAdUnmuteIfNot, 5000)

  })

document.body.style.border = "5px dotted black";

console.log('subham script loaded');

