// SME-QA: Resume Review - Prototype

var $sme_rr = $('[data-object="sme-rr"]'),
  $sme_rr_select = $('.sme-rr-scoring-reason__select'),
  comps_count = $sme_rr.find('.sme-rr-comp').length + $sme_rr.find('.sme-rr-exp').length,
  current_applicant = 0,
  applicants = {
    "nps": [
      {
        "name": "Remus Lupin",
        "email": "remus.lupin@howlers.org"
      },
      {
        "name": "Alastor Moody",
        "email": "noneofyourbusiness@secret.gov"
      },
      {
        "name": "Molly Weasley",
        "email": "molly@phoenix.org"
      },
      {
        "name": "Cho Chang",
        "email": "cho.chang@hogwarts.school.org"
      },
      {
        "name": "Fleur Delacour",
        "email": "fdelacour@beauxbatons.fr"
      }
    ]
  },
  setConfirmation = function () {
    var $name = $sme_rr.find('#rr-applicant-name'),
      $msg_name = $sme_rr.find('#rr-confirmation-applicant-name');

    $msg_name.text($name.text());
  },
  getCurrentApplicant = function () {
    var current_applicants = applicants["nps"];

    return current_applicants[current_applicant];
  },
  setupForm = function () {
    var applicant = getCurrentApplicant(),
      $name = $sme_rr.find('#rr-applicant-name'),
      $email = $sme_rr.find('#rr-applicant-email'),
      $count = $sme_rr.find('#rr-applicant-count'),
      $queue = $sme_rr.find('#rr-queue-count'),
      $progress = $sme_rr.find('#rr-progress-percentage'),
      queue_count = parseInt($queue.text() - 1),
      percentage_completed = 0;

    $name.text(applicant.name);
    $email.text(applicant.email);

    current_applicant = current_applicant + 1;
    percentage_completed = parseInt((current_applicant / queue_count) * 100);

    // Update progress bar
    $count.text(current_applicant);
    $queue.text(queue_count);
    $progress.addClass('percentage-' + percentage_completed);
  },
  cleanUp = function () {
    var form = document.getElementById('sme-rr-form'),
      $does_not_meet = $sme_rr.find('.does-not-meet');

    form.reset();
    $does_not_meet.removeClass('does-not-meet');
  },
  revealSave = function (meets_count) {
    var $final_save = $sme_rr.find('#sme-rr-final-save');

    if (meets_count == comps_count) {
      $final_save.removeAttr('disabled');
    } else {
      if (!$final_save.attr('disabled')) {
        $final_save.attr('disabled', true);
      }
    }
  },
  hideAlert = function ($alert) {
    $alert.attr('aria-hidden', 'true');
  };

$sme_rr.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="sme-rr"]'),
    behavior = $el.attr('data-behavior');

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    if (action.match(/^sme-rr/)) {
      if (action === 'sme-rr.save' || action === 'sme-rr.reveal-alert') {
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
    $container = opts.object.find('#' + opts.el.attr('data-container')),
    $final_save = $sme_rr.find('#sme-rr-final-save'),
    $radios = opts.object.find('.sme-rr-scoring-reason').find('input:radio');

  $container.addClass('does-not-meet');

  // Make the Reason radios required
  $radios.prop("required", true);

  $target.slideDown(function () {
    $target.attr('aria-hidden', 'false');
    $target.attr('style', '');

    // Enable the bottom save & continue button
    $final_save.removeAttr('disabled');
  });
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

$sme_rr.on('sme-rr.validate', function(event, opts) {
  var $radios = opts.el.parent().find('input:radio');

  // Check each radio, if all are required but not selected then throw an error
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
    setConfirmation();
    cleanUp();
    setupForm();
    setTimeout(() => hideAlert($target), 30000);
  });
});

$sme_rr.on('sme-rr.reveal-alert', function(event, opts) {
  var $target = opts.object.find('#' + opts.el.attr('aria-controls'));

  $target.attr('aria-hidden', 'false');
  cleanUp();
  setupForm();

  setTimeout(() => hideAlert($target), 30000);
});

$sme_rr.on('sme-rr.reload', function(event, opts) {
  location.reload();
});

$(document).ready(function() {
  setupForm();
  /*
  getData();
  storeUrlParams();
  printData();
  getData();
  runPageFilters();
  */
});
