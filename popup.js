const body = document.querySelector("body");
const open = document.querySelector(".pop");
open.addEventListener("click", () => {
  const main = document.createElement("div");
  main.className = "main";
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `    <div class="item1">
        <div class="item1a">
          <img src="./images/snapshoot.png" alt="snap" />
        </div>
        <div class="item1b">
          <h1>Tonic</h1>
          <div class="frame2">
            <span style="font-size: 18px; font-weight: 500; color: #344563;">CANOPY</span>
            <ul class="role">
              <li>Back End Dev</li>
              <li>2015</li>
            </ul>
          </div>
          <p>
            A daily selection of privately personalized reads; no accounts or sign-ups required.
          </p>
          <div class="tags">
            <ul>
              <li>html</li>
              <li>css</li>
              <li>javaScript</li>
            </ul>
            <button><a href="">See Project</a></button>
          </div>
        </div>
      </div>
   `;

  main.appendChild(popup);
  body.appendChild(main);
});
