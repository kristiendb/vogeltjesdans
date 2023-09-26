export const getAllVogeltjes = async () =>
  await (await fetch("https://ap-examen.surge.sh/vogels.json")).json();

export function renderRechts({ gridR }, arrR) {
  gridR.innerHTML = arrR
    .map((name) => `<li><a href="#">${name}</a></li>`)
    .join("");
}

export function renderLinks({ gridL, vogels }) {
  gridL.innerHTML = vogels
    .map(
      ({ latijnse_benaming: name }) =>
        `<li><a href="#" class="remove",data-name="${name}">${name}</a></li>`
    )
    .join("");
}
