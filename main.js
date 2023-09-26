import "./style.scss";
import { getAllVogeltjes, renderLinks, renderRechts } from "./functions.js";

async function main() {
  const app = document.querySelector(".app");
  const gridR = document.querySelector(".app__gridR");
  const gridL = document.querySelector(".app__gridL");
  const vogels = await getAllVogeltjes();
  const arrR = [];
  renderLinks({ gridL, vogels });
  renderRechts({ gridR }, arrR);

  gridL.onclick = (e) => {
    if (e.target.className === "remove") {
      e.preventDefault();
      const vogelNaam = e.target.textContent;
      const index = vogels.findIndex(
        (vogel) => vogel.latijnse_benaming === vogelNaam
      );
      vogels.splice(index, 1);

      arrR.push(vogelNaam);

      renderLinks({ gridL, vogels });
      renderRechts({ gridR }, arrR);
    }
  };

  gridR.onclick = (e) => {
    if (e.target.className === "") {
      e.preventDefault();
      const vogelNaam = e.target.textContent;
      const index = arrR.indexOf(vogelNaam);
      arrR.splice(index, 1);

      vogels.push({ latijnse_benaming: vogelNaam });

      renderLinks({ gridL, vogels });
      renderRechts({ gridR }, arrR);
    }
  };
}

main();
