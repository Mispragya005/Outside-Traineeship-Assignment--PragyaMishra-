const addInput = document.getElementById("add-input");
const addBtn = document.getElementById("add-btn");
const itemList = document.getElementById("item-list");
const itemCount = document.getElementById("item-count");
const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("clear-btn");
const noResults = document.getElementById("no-results");
const toast = document.getElementById("toast");
const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");


window.onload = function () {
  setTimeout(function () {
    modalOverlay.classList.add("visible");
  }, 1000);
};


modalClose.onclick = function () {
  modalOverlay.classList.remove("visible");
};


function showToast(message) {
  const msg = document.createElement("div");
  msg.className = "toast-message";
  msg.innerText = message;

  toast.appendChild(msg);

  setTimeout(function () {
    msg.classList.add("hide");
  }, 1500);

  setTimeout(function () {
    msg.remove();
  }, 2000);
}


function updateCount() {
  const total = itemList.getElementsByTagName("li").length;
  itemCount.innerText = "TOTAL ITEMS: " + total;

  if (total === 0) {
    clearBtn.disabled = true;
  } else {
    clearBtn.disabled = false;
  }
}


addBtn.addEventListener("click", function () {
  const value = addInput.value.trim();

  if (value === "") {
    return;
  }

  const li = document.createElement("li");
  li.className = "list-item";

  const span = document.createElement("span");
  span.className = "item-text";
  span.innerText = value;

  const btn = document.createElement("button");
  btn.className = "remove-btn";
  btn.innerText = "REMOVE";

  li.appendChild(span);
  li.appendChild(btn);
  itemList.appendChild(li);

  addInput.value = "";

  updateCount();
  filterItems(); 
  showToast("TOAST MESSAGE ITEM ADDED!");
});


addInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});


itemList.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    const li = e.target.parentElement;
    li.remove();

    updateCount();
    filterItems();
    showToast("TOAST MESSAGE ITEM REMOVED! ");
  }
});


clearBtn.addEventListener("click", function () {
  itemList.innerHTML = "";

  updateCount();
  noResults.style.display = "none";

  showToast("TOAST MESSAGE All items cleared!");
});


itemList.addEventListener("mouseover", function (e) {
  const li = e.target.closest("li");
  if (li) {
    li.style.backgroundColor = "lightblue";
  }
});

itemList.addEventListener("mouseout", function (e) {
  const li = e.target.closest("li");
  if (li) {
    li.style.backgroundColor = "";
  }
});


function debounce(fn, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(function () {
      fn();
    }, delay);
  };
}

function filterItems() {
  const text = searchInput.value.toLowerCase();
  const items = itemList.getElementsByTagName("li");

  let visible = 0;

  for (let i = 0; i < items.length; i++) {
    const itemText = items[i].innerText.toLowerCase();

    if (itemText.includes(text)) {
      items[i].style.display = "";
      visible++;
    } else {
      items[i].style.display = "none";
    }
  }

  if (items.length > 0 && visible === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
}


searchInput.addEventListener("input", debounce(filterItems, 500));


updateCount();