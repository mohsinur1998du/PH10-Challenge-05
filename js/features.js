const donationTab = document.getElementById("show-donation");
const historyTab = document.getElementById("show-history");

donationTab.addEventListener("click", function () {
  donationTab.classList.add("bg-[#B4F461]", "text-white");
  donationTab.classList.remove("border-2");
  historyTab.classList.remove("bg-[#B4F461]", "text-white");
  historyTab.classList.add("border-2");
  showSectionById("donation");
  //   showSectionById("donation");
});

historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-[#B4F461]", "text-white");
  historyTab.classList.remove("border-2");
  donationTab.classList.remove("bg-[#B4F461]", "text-white");
  donationTab.classList.add("border-2");
  showSectionById("history");
});
