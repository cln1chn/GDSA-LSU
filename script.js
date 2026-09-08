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
     Home — switch calendar to agenda view on small screens
     --------------------------------------------------------------- */
  var calendarFrame = document.getElementById('gdsa-calendar');
  if (calendarFrame) {
    var gridSrc = 'https://calendar.google.com/calendar/embed?src=gdsa.lsu%40gmail.com&ctz=America%2FChicago';
    var agendaSrc = gridSrc + '&mode=AGENDA';
    var mobileQuery = window.matchMedia('(max-width: 780px)');

    function setCalendarView(isMobile) {
      var targetSrc = isMobile ? agendaSrc : gridSrc;
      if (calendarFrame.src !== targetSrc) {
        calendarFrame.src = targetSrc;
      }
    }

    setCalendarView(mobileQuery.matches);
    mobileQuery.addEventListener('change', function (e) {
      setCalendarView(e.matches);
    });
  }

  /* ---------------------------------------------------------------
     Design Competition — past prompts carousel
     Add a new month by copying an object into this array. Newest
     first is not required; the arrows just step through the list.
     --------------------------------------------------------------- */
  var pastCompetitions = [
    {
      month: 'August 2026',
      title: 'Work In Progress',
      prompt: 'Future projects will go here!',
      deadline: 'Was due: Never?',
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

});