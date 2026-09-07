// =====================================================================
// GDSA site — shared behavior across pages.
// Nothing here is required for content to be readable; it progressively
// enhances markup that already works without JavaScript.
// =====================================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---------------------------------------------------------------
     Mobile nav toggle
     --------------------------------------------------------------- */
  var navToggle = document.querySelector('.nav-toggle');
  var siteNav = document.getElementById('site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ---------------------------------------------------------------
     Design Competition — past prompts carousel
     Add a new month by copying an object into this array. Newest
     first is not required; the arrows just step through the list.
     --------------------------------------------------------------- */
  var pastCompetitions = [
    {
      month: 'September 2026',
      title: 'Field Notes',
      prompt: 'Design a fictional poster series for a campus event called "Field Notes," a student research symposium. Submit a single-page PDF with your logo, your color palette, and one mock-up or application in use.',
      deadline: 'Was due: September 4.',
      formLink: 'https://forms.gle/REPLACE_WITH_FORM_LINK'
    }
    // {
    //   month: 'August 2026',
    //   title: 'Prompt title',
    //   prompt: 'Full prompt text.',
    //   deadline: 'Was due: August 7.',
    //   formLink: 'https://forms.gle/REPLACE'
    // },
  ];

  var carousel = document.getElementById('past-carousel');
  if (carousel && pastCompetitions.length) {
    var index = 0;
    var labelEl = document.getElementById('carousel-label');
    var titleEl = document.getElementById('carousel-title');
    var promptEl = document.getElementById('carousel-prompt');
    var deadlineEl = document.getElementById('carousel-deadline');
    var linkEl = document.getElementById('carousel-link');
    var prevBtn = document.getElementById('carousel-prev');
    var nextBtn = document.getElementById('carousel-next');

    function render() {
      var item = pastCompetitions[index];
      labelEl.textContent = item.month;
      titleEl.textContent = item.title;
      promptEl.textContent = item.prompt;
      deadlineEl.textContent = item.deadline;
      linkEl.href = item.formLink;
      prevBtn.disabled = pastCompetitions.length <= 1 || index === 0;
      nextBtn.disabled = pastCompetitions.length <= 1 || index === pastCompetitions.length - 1;
    }

    prevBtn.addEventListener('click', function () {
      if (index > 0) { index -= 1; render(); }
    });
    nextBtn.addEventListener('click', function () {
      if (index < pastCompetitions.length - 1) { index += 1; render(); }
    });

    render();
  }

  /* ---------------------------------------------------------------
     Photos — lightbox
     --------------------------------------------------------------- */
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxCaption = document.getElementById('lightbox-caption');
    var closeBtn = document.getElementById('lightbox-close');
    var openers = document.querySelectorAll('#photo-grid button');

    openers.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var full = btn.getAttribute('data-full');
        var caption = btn.getAttribute('data-caption') || '';
        if (full) {
          lightboxImg.src = full;
          lightboxImg.alt = caption;
          lightboxImg.style.display = '';
        } else {
          // No real image wired up yet for this placeholder tile.
          lightboxImg.style.display = 'none';
        }
        lightboxCaption.textContent = caption;
        lightbox.showModal();
      });
    });

    closeBtn.addEventListener('click', function () {
      lightbox.close();
    });
  }

});
