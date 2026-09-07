const projectCards = document.querySelectorAll(".project-card");
const modal = document.querySelector("#project-modal");

if (projectCards.length > 0 && modal) {
  const modalTitle = document.querySelector("#modal-title");
  const modalImage = document.querySelector("#modal-image");
  const modalDescription = document.querySelector("#modal-description");
  const closeButton = document.querySelector(".modal-close");
  const modalBg = document.querySelector(".modal-bg");
  const revealSteps = document.querySelectorAll(".reveal-step");

  projectCards.forEach(function(card) {
    card.addEventListener("click", function() {
      modalTitle.textContent = card.dataset.title;
      modalImage.src = card.dataset.image;
      modalImage.alt = card.dataset.title;
      modalDescription.textContent = card.dataset.description;

      modal.classList.add("open");

      revealSteps.forEach(function(step) {
        step.classList.remove("visible");
      });

      revealSteps.forEach(function(step, index) {
        setTimeout(function() {
          step.classList.add("visible");
        }, index * 200);
      });
    });
  });

  function closeModal() {
    modal.classList.remove("open");
  }

  if (closeButton) closeButton.addEventListener("click", closeModal);
  if (modalBg) modalBg.addEventListener("click", closeModal);

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") closeModal();
  });
}

/* pop-up msg */
function showPopupMessage(text) {
  let popup = document.querySelector(".custom-popup");

  if (!popup) {
    popup = document.createElement("div");
    popup.className = "custom-popup";
    document.body.appendChild(popup);
  }

  popup.textContent = text;
  popup.classList.add("show");

  setTimeout(function() {
    popup.classList.remove("show");
  }, 3500);
}

/* contact form */
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");

  function allFieldsFilled() {
    return (
      nameInput.value.trim() !== "" &&
      emailInput.value.trim() !== "" &&
      messageInput.value.trim() !== ""
    );
  }

  function checkFields() {
    if (allFieldsFilled()) {
      showPopupMessage("all fields complete");
    }
  }

  nameInput.addEventListener("input", checkFields);
  emailInput.addEventListener("input", checkFields);
  messageInput.addEventListener("input", checkFields);

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!allFieldsFilled()) {
      showPopupMessage("fill out all fields first!");
      return;
    }

    showPopupMessage("thanks for your submission :)");

    contactForm.reset();
  });
}