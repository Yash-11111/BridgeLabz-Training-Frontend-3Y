// Q4 – Concurrent servers

function serverA(){
  return new Promise((res, rej)=> setTimeout(()=> Math.random()<0.9?res("A done"):rej("A fail"),2000));
}
function serverB(){
  return new Promise((res, rej)=> setTimeout(()=> Math.random()<0.9?res("B done"):rej("B fail"),3000));
}

Promise.all([serverA(), serverB()])
  .then(()=>console.log("Deployment completed for all servers"))
  .catch(err=>console.log("Failure:", err));

Promise.race([serverA(), serverB()])
  .then(f=>console.log("Fastest response:", f))
  .catch(err=>console.log("Race failed:", err));
