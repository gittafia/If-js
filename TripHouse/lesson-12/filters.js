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
    max: 10,
    minAge: 0,
    maxAge: 17
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
      btn.disabled = counts[i].textContent >= max;
      btn.addEventListener('click', (e) => {
        buttonsMinus[i].disabled = false;
        e.preventDefault();
        increaseCount(counts[i]);
        btn.disabled = counts[i].textContent >= max;
      });
      if (i === 1) {
        btn.addEventListener('click', (e) => {
          if (counts[i].textContent == 1) {
            createP()
          }
          createSelect()
        })
      }
    });

    buttonsMinus.forEach((btn, i) => {
      const min = Object.entries(options)[i][1].min
      btn.disabled = counts[i].textContent <= min;
      btn.addEventListener('click', (e) => {
        buttonsPlus[i].disabled = false;
        e.preventDefault();
        decreaseCount(counts[i]);
        btn.disabled = counts[i].textContent <= 0;
      });
      if (i === 1) {
        btn.addEventListener('click', (e) => {
          if (counts[i].textContent == 0) {
            deleteP()
          }
          deleteSelect()
        })
      }
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

const createSelect = () => {
  const minAge = options.children.minAge;
  const maxAge = options.children.maxAge
  const select = document.createElement('select');
  select.classList.add('child-age-select')

  for (let i = minAge; i <= maxAge; i ++) {
    const option = document.createElement('option');
    option.textContent = `${i} years old`
    select.append(option)
  }

  filtersModal.append(select)
}

const createP = () => {
  const p = document.createElement('p');
  p.classList.add('child-age-question')
  p.textContent = `What is the age of the child you're travelling with?`
  filtersModal.append(p)
}

const deleteSelect = () => {
  const selects = document.querySelectorAll('.child-age-select');
  const lastSelect = selects[length];
  filtersModal.removeChild(lastSelect)
}

const deleteP = () => {
  const p = document.querySelector('.child-age-question');
  filtersModal.removeChild(p)
}

addListeners();