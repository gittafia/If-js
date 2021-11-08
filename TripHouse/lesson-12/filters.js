const input = document.querySelector('.persons'),
  buttonsMinus = document.querySelectorAll('.filter-button-minus'),
  buttonsPlus = document.querySelectorAll('.filter-button-plus'),
  counts = document.querySelectorAll('.filter-count'),
  filtersModal = document.querySelector('.filters'),
  modalOverlay = document.querySelector('.modal-overlay');

const options = {
  adults: {
    min: 0,
    max: 30
  },
  children: {
    min: 0,
    max: 10
  },
  rooms: {
    min: 0,
    max: 30
  }
}

const addListeners = () => {
  input.addEventListener('click', () => {
    openModal(filtersModal, modalOverlay)
  });

  if (modalOverlay && filtersModal) {
    modalOverlay.addEventListener('click', () => {
      closeModal(filtersModal, modalOverlay);
    });

    buttonsPlus.forEach((btn, i) => {
      const max = Object.entries(options)[i][1].max
      btn.disabled = counts[i].textContent >= max ? true : false;
      btn.addEventListener('click', (e) => {
        buttonsMinus[i].disabled = false;
        e.preventDefault();
        increaseCount(counts[i]);
        btn.disabled = counts[i].textContent >= max ? true : false;
      });
    });

    buttonsMinus.forEach((btn, i) => {
      const min = Object.entries(options)[i][1].min
      btn.disabled = counts[i].textContent <= min ? true : false;
      btn.addEventListener('click', (e) => {
        buttonsPlus[i].disabled = false;
        e.preventDefault();
        decreaseCount(counts[i]);
        btn.disabled = counts[i].textContent <= 0 ? true : false;
      });
    });
  }

}

const openModal = (modal, overlay) => {
  if (modal.classList.contains('hide')) {
    modal.classList.remove('hide');
    overlay.classList.remove('hide')
  }
}

const closeModal = (modal, overlay) => {
  if (!modal.classList.contains('hide') && this.event.target === overlay) {
    modal.classList.add('hide');
    overlay.classList.add('hide');
  }
}

const increaseCount = (count) => {
  count.textContent++;
  updateInputValue();
}

const decreaseCount = (count) => {
  count.textContent--;
  updateInputValue();
}

const updateInputValue = () => {
  input.value = `${counts[0].textContent} Adults \u2013 ${counts[1].textContent} Children \u2013 ${counts[2].textContent} Rooms`
}

addListeners();