const container = document.getElementById("features-wrapper");

const cardHTML = `
    <div class="features-card flex">
      <img src="../assets/profile.jpg" alt="" />
      <h3>Card Sorting</h3>
      <p>Discover how users think about your product.</p>
      <a href="#" class="secondary-button">Learn More</a>
    </div>
  `;

for (let i = 0; i < 5; i++) {
  container.innerHTML += cardHTML;
}
