// src/js/router.js
import { generateHistoryPosts } from "./history.js";

export const initializeRouter = () => {
  const contentContainer = document.querySelector(".content");

  const routes = {
    "#kunst": () => renderArtGrid(),
    "#arrangementer": () => renderBlog(),
    "#kollektivet": () => renderCollectiveGrid(),
    "#prestegarden": () => renderHistory(),
  };

  function updateActiveLink(hash) {
    document.querySelectorAll(".navbar-links a").forEach((link) => {
      link.classList.remove("active");
    });

    const activeLink = document.querySelector(
      `.navbar-links a[href="${hash}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  function renderCollectiveGrid() {
    const gridItems = Array.from(
      { length: 14 },
      () => `
                <div class="collective-item">
                    <img 
                        src="./assets/images/kollektivet/1.png" 
                        alt="Collective member"
                        class="collective-image"
                    />
                </div>
            `
    ).join("");

    contentContainer.innerHTML = `
            <div class="collective-grid">
                ${gridItems}
            </div>
        `;
  }

  function renderArtGrid() {
    const gridItems = Array.from(
      { length: 12 },
      () => `
                <div class="art-item">
                    <img 
                        src="./assets/thumbnails/art/art_placeholder.png"
                        data-full="./assets/images/art/art_placeholder.png" 
                        alt="Artwork"
                        class="art-image"
                    />
                </div>
            `
    ).join("");

    contentContainer.innerHTML = `
            <div class="art-grid">
                ${gridItems}
            </div>
        `;
  }

  function renderBlog() {
    contentContainer.innerHTML = `
            <div class="blog-container">
                ${Array(3)
                  .fill(0)
                  .map(
                    () => `
                        <article class="blog-post">
                            <h2>Julekonsert</h2>
                            <p>Innhold...</p>
                        </article>
                    `
                  )
                  .join("")}
            </div>
        `;
  }

  function renderHistory() {
    contentContainer.innerHTML = `
            <div class="history-container">
                <h1 class="history-title">Prestegårdens Historie</h1>
                ${generateHistoryPosts()}
            </div>
        `;
  }

  // Handle navigation
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash || "#kunst";
    const render = routes[hash] || routes["#kunst"];
    updateActiveLink(hash);
    render();
  });

  // Initial render
  const initialHash = window.location.hash || "#kunst";
  updateActiveLink(initialHash);
  routes[initialHash]();
};
