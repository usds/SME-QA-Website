
var pwd,
  unlockSite = function () {
    var $prompt = document.getElementById('prompt-form'),
      $cover = document.getElementById('cover');

    $prompt.style.display = 'none';
    $cover.style.display = 'none';
  },
  protectSite = function (pwd) {
    var attempt_count = 1,
      pass1 = '';

    pass1 = prompt('This site is currently under review. Please enter the password for full access.',' ');

    while (attempt_count < 3) {
      if (!pass1) {
        history.go(-1);
      }

      if (pass1.toLowerCase() == pwd) {
        unlockSite();
        writeCookie();
        break;
      }

      attempt_count += 1;
      pass1 = prompt('Access Denied - Password incorrect. Please try again.','');
    }

    if (pass1.toLowerCase()!= pwd && attempt_count == 3) {
      history.go(-1);
      return '';
    }
  },
  fetchAuthFile = function () {
    var request = new XMLHttpRequest(),
      data;

    request.open('GET', '/auth-file.json', true);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        data = JSON.parse(this.response);
        protectSite(window.atob(data.pwd));
      } else {
        history.go(-1);
        return '';
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      history.go(-1);
      return '';
    };

    request.send();
  },
  writeCookie = function () {
    // Sets a cookie for one week
    document.cookie = "name=sme-qa;samesite=strict;max-age=" + 60*60*24*7;
  },
  readCookie = function () {
    if (document.cookie.split(';').filter((item) => item.includes('name=sme-qa')).length > 0) {
      window.console.log('The cookie exists');
      return true;
    } else {
      return false;
    }
  },
  checkCookie = function () {
    if (readCookie()) {
      unlockSite();
    }
  },
  checkAccess = function () {
    if (readCookie()) {
      unlockSite();
    } else {
      fetchAuthFile();
    }
  };

checkCookie();
