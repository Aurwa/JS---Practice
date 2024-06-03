const table = document.querySelector("table");

window.addEventListener("keydown", (e) => {
  table.innerHTML += `
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  `;
});
