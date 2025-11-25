// Q5 – Callback hell vs async/await

function stage(name, cb){
  setTimeout(()=>{ console.log(name); cb(); },1000);
}

// CALLBACK HELL
stage("design", ()=> {
  stage("build", ()=> {
    stage("test", ()=> {
      stage("deploy", ()=> {
        stage("celebrate", ()=> console.log("Done (callback hell)!"));
      });
    });
  });
});

// ASYNC/AWAIT
function stageP(name){
  return new Promise(res=> setTimeout(()=>{console.log(name); res();},1000));
}

async function run(){
  await stageP("design");
  await stageP("build");
  await stageP("test");
  await stageP("deploy");
  await stageP("celebrate");
  console.log("Done (async/await)");
}
run();

// Async/await improves readability by avoiding deep nested callbacks.
