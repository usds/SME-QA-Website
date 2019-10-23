// SME-QA: Resume Review - Prototype

var $sme_rr = $('[data-object="sme-rr"]'),
  $sme_rr_select = $('.sme-rr-scoring-reason__select'),
  comps_count = 6,
  cleanUp = function () {
    // Cleans up the count, button states, reason, justification
  },
  revealSave = function (meets_count) {
    var $final_save = $sme_rr.find('#sme-rr-final-save');

    if ((meets_count + 1) == comps_count) {
      $final_save.removeAttr('disabled');
    }
  };

$sme_rr.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="sme-rr"]'),
    behavior = $el.attr('data-behavior');

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    if (action.match(/^sme-rr/)) {
      if (action === 'sme-rr.save') {
        event.preventDefault();
      }

      $el.trigger(action, { el: $el, object: $object });
    }
  });
});

$sme_rr.on('sme-rr.meets', function(event, opts) {
  var $target = opts.object.find('#' + opts.el.attr('aria-controls')),
    $container = opts.object.find('#' + opts.el.attr('data-container'));
    meets = opts.object.find('input:radio:checked').length;

  // Find how many are selected and set the count accordingly
  revealSave(meets);

  $container.removeClass('does-not-meet');

  // Close the reason and justification if they are present
  // TODO: Blank them out
  $target.slideUp(function () {
    $target.attr('aria-hidden', 'true');
    $target.attr('style', '');
  });
});

$sme_rr.on('sme-rr.does-not-meet', function(event, opts) {
  // Reveal the reason for that competency
  var $target = opts.object.find('#' + opts.el.attr('aria-controls')),
    $container = opts.object.find('#' + opts.el.attr('data-container'));

  $container.addClass('does-not-meet');

  $target.slideDown(function () {
    $target.attr('aria-hidden', 'false');
    $target.attr('style', '');
  });

  // TODO: Disable radio buttons further down the list
});

$sme_rr_select.on('change', function () {
  var $el = $(this),
    $object = $el.closest('[data-object="sme-rr"]'),
    reason_val = $el.val(),
    $target = $object.find('#' + $el.attr('aria-controls')),
    $input = $target.find('.sme-rr-scoring-reason__justification-text');

  $target.attr('aria-hidden', false);

  if (reason_val === 'other') {
    $input.attr('aria-hidden', false);
  } else {
    $input.attr('aria-hidden', true);
  }
});

$sme_rr.on('sme-rr.save', function(event, opts) {
  // Reveal the confirmation message
  // Hide exposed justification areas
  // Scroll to top of the page
  var $target = opts.object.find('#' + opts.el.attr('aria-controls')),
    $container = opts.el.closest('.sme-rr-scoring-reason');

  $target.attr('aria-hidden', 'false');
  $container.attr('aria-hidden', 'true');

  $target.slideDown(function () {
    $('html, body').animate({
      scrollTop: opts.object.offset().top
    });
  });
});

$sme_rr.on('sme-rr.reload', function(event, opts) {
  location.reload();
});

$(document).ready(function() {
  getData();
  storeUrlParams();
  printData();
  getData();
  runPageFilters();
});
