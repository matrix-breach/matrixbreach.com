async function loadComponent(id, file) {
  const response = await fetch(file);
  const data = await response.text();
  document.getElementById(id).innerHTML = data;
}

loadComponent("navbar", "/components/navbar.html");
loadComponent("footer", "/components/footer.html");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const links = document.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname.replace(/\/$/, "");

    links.forEach(link => {
      const linkPath = new URL(link.href).pathname.replace(/\/$/, "");

      if (currentPath === linkPath || currentPath.startsWith(linkPath)) {
        link.classList.remove("text-neutral-400");
        link.classList.add(
          "text-[#175CFF]",
          "border-b",
          "border-[#175CFF]",
          "pb-1"
        );
      }
    });
  }, 100); // small delay ensures navbar is loaded
});