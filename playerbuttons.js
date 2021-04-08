function PlayButton() {
  player
    .play()
    .then(function () {
      // The video is playing
    })
    .catch(function (error) {
      switch (error.name) {
        case "PasswordError":
          // The video is password-protected
          break;

        case "PrivacyError":
          // The video is private
          break;

        default:
          // Some other error occurred
          break;
      }
    });
}

function PauseButton() {
  player
    .pause()
    .then(function () {
      // The video is playing
    })
    .catch(function (error) {
      switch (error.name) {
        case "PasswordError":
          // The video is password-protected
          break;

        case "PrivacyError":
          // The video is private
          break;

        default:
          // Some other error occurred
          break;
      }
    });
}
function MuteButton() {
  player
    .setVolume(0)
    .then(function (volume) {
      // The volume is set
    })
    .catch(function (error) {
      switch (error.name) {
        case "RangeError":
          // The volume is less than 0 or greater than 1
          break;

        default:
          // Some other error occurred
          break;
      }
    });
}
function UnmuteButton() {
  player
    .setVolume(1)
    .then(function (volume) {
      // The volume is set
    })
    .catch(function (error) {
      switch (error.name) {
        case "RangeError":
          // The volume is less than 0 or greater than 1
          break;

        default:
          // Some other error occurred
          break;
      }
    });
}
function CueOne() {
  player
    .setCurrentTime(100)
    .then(function (seconds) {
      // `seconds` indicates the actual time that the player seeks to
    })
    .catch(function (error) {
      switch (error.name) {
        case "RangeError":
          // The time is less than 0 or greater than the video's duration
          break;

        default:
          // Some other error occurred
          break;
      }
    });
  player
    .play()
    .then(function () {
      // The video is playing
    })
    .catch(function (error) {
      switch (error.name) {
        case "PasswordError":
          // The video is password-protected
          break;

        case "PrivacyError":
          // The video is private
          break;

        default:
          // Some other error occurred
          break;
      }
    });
}
function CueTwo() {
  player
    .setCurrentTime(200)
    .then(function (seconds) {
      // `seconds` indicates the actual time that the player seeks to
    })
    .catch(function (error) {
      switch (error.name) {
        case "RangeError":
          // The time is less than 0 or greater than the video's duration
          break;

        default:
          // Some other error occurred
          break;
      }
    });
  player
    .play()
    .then(function () {
      // The video is playing
    })
    .catch(function (error) {
      switch (error.name) {
        case "PasswordError":
          // The video is password-protected
          break;

        case "PrivacyError":
          // The video is private
          break;

        default:
          // Some other error occurred
          break;
      }
    });
}
function CueThree() {
  player
    .setCurrentTime(300)
    .then(function (seconds) {
      // `seconds` indicates the actual time that the player seeks to
    })
    .catch(function (error) {
      switch (error.name) {
        case "RangeError":
          // The time is less than 0 or greater than the video's duration
          break;

        default:
          // Some other error occurred
          break;
      }
    });
  player
    .play()
    .then(function () {
      // The video is playing
    })
    .catch(function (error) {
      switch (error.name) {
        case "PasswordError":
          // The video is password-protected
          break;

        case "PrivacyError":
          // The video is private
          break;

        default:
          // Some other error occurred
          break;
      }
    });
}
