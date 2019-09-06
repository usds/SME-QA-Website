
protectSite = function () {
  var $prompt = document.getElementById('prompt-form'),
    $cover = document.getElementById('cover'),
    attempt_count = 1,
    pass1 = prompt('This site is currently under review. Please enter the password for full access.',' ');

  while (attempt_count < 3) {
    if (!pass1) {
      history.go(-1);
    }

    if (pass1.toLowerCase() == "opm-can-see") {
      $prompt.style.display = 'none';
      $cover.style.display = 'none';
      break;
    }

    attempt_count += 1;
    pass1 = prompt('Access Denied - Password incorrect. Please try again.','Password');
  }

  if (pass1.toLowerCase()!= "password" & attempt_count == 3) {
    history.go(-1);
    return " ";
  }
};
