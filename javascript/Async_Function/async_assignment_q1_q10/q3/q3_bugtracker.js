// Q3 – Callback to Promise

function getBugs() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() < 0.8) res(["UI glitch","API timeout","Login failure"]);
      else rej("API fetch failed");
    }, 1000);
  });
}

getBugs()
  .then(bugs => console.table(bugs))
  .catch(err => console.log("Error:", err));
