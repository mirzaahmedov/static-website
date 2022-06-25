const tables = document.querySelectorAll(".products-table");

tables?.forEach((table) => {
  const rows = table.querySelectorAll("table tbody tr");

  function clearSelection() {
    table
      .querySelector("table tbody tr.selected")
      ?.classList.remove("selected");
  }

  rows.forEach((row) => {
    row.addEventListener("click", () => {
      clearSelection();
      row.classList.add("selected");
    });
  });
});

const menuCloseBtn = document.querySelector(".menu-close-button");
const menuOverlay = document.querySelector(".menu-overlay");

document.querySelectorAll(".menu-button").forEach((button) => {
  button?.addEventListener("click", () => {
    menuOverlay.classList.add("open");
  });
});

menuCloseBtn?.addEventListener("click", () => {
  menuOverlay.classList.remove("open");
});

const tabs = document.querySelectorAll(".tab-container");

tabs?.forEach((tab) => {
  const buttons = tab.querySelectorAll(".tabs button");
  const contents = tab.querySelectorAll(".tab-contents .content");

  function clearSelection() {
    tab
      .querySelector(".tab-contents .content.active")
      ?.classList.remove("active");
    tab.querySelector(".tabs button.active")?.classList.remove("active");
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      clearSelection();

      button.classList.add("active");
      contents.item(index)?.classList.add("active");
    });
  });
});
