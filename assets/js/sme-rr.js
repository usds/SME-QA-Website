// SME-QA: Resume Review - Prototype

var $sme_rr = $('[data-object="sme-rr"]'),
  meets_count = 0,
  comps_count = 6,
  cleanUp = function () {
    // Cleans up the count, button states, reason, justification
  };

$sme_rr.on('click', '[data-behavior]', function () {
  var $el = $(this),
    $object = $el.closest('[data-object="sme-rr"]'),
    behavior = $el.attr('data-behavior');

  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    if (action.match(/^sme-rr/)) {
      $el.trigger(action, { el: $el, object: $object });
    }
  });
});

$sme_rr.on('sme-rr.meets', function(event, opts) {
  // Find how many are selected and set the count accordingly
});

$sme_rr.on('sme-rr.does-not-meet', function(event, opts) {
  // Reveal the reason and justification for that competency
});
