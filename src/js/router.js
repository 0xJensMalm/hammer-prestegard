// src/js/router.js
export const initializeRouter = () => {
  const contentContainer = document.querySelector(".content");

  const routes = {
    "#kunst": () => renderGrid("art"),
    "#arrangementer": () => renderBlog(),
    "#kollektivet": () => renderGrid("collective"),
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

  function renderGrid(type) {
    const gridItems = type === "art" ? 12 : 6; // Different number of items for art vs collective
    contentContainer.innerHTML = `
            <div class="grid-container">
                ${Array(gridItems)
                  .fill(0)
                  .map(
                    () => `
                    <div class="grid-item"></div>
                `
                  )
                  .join("")}
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
                        <h2>Post Title</h2>
                        <p>Post content goes here...</p>
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
                    <h2>Interactive Timeline</h2>
                    <p>Coming soon...</p>
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
