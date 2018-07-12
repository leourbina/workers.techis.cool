function main() {
  let button = document.getElementById("test-button");
  button.addEventListener("click", handleClick);
}

function handleClick() {
  fetch("https://techis.cool/cf-analytics/heap", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      app_id: 129324163,
      identity: "leo@cloudflare.com",
      identity_type: "email",
      event: "Worker Event",
      timestamp: Date.now(),
      properties: {
        worker: true
      }
    })
  }).then(res => res.text().then(data => console.log("Done", data)));
}

window.addEventListener("DOMContentLoaded", main);
