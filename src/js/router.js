// src/js/router.js
export const initializeRouter = () => {
  const contentContainer = document.querySelector(".content");

  const routes = {
    "#kunst": () => renderArtGrid(),
    "#arrangementer": () => renderBlog(),
    "#kollektivet": () => renderCollectiveGrid(),
    "#prestegarden": () => renderTimeline(),
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
    // Create grid items with both thumbnail and full-size image paths
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

  function renderTimeline() {
    contentContainer.innerHTML = `
            <div class="timeline-container">
                <div class="timeline-placeholder">
                    <h2>Interaktiv tidslinje for prestegården</h2>
                    <p>Kommer snart...?</p>
                </div>
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
