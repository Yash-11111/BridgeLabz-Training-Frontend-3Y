// Q7 – Promise.allSettled

function loadProfile(){ return new Promise((res,rej)=> setTimeout(()=> Math.random()<0.8?res("Profile Loaded"):rej("Profile Fail"),2000));}
function loadPosts(){ return new Promise((res,rej)=> setTimeout(()=> Math.random()<0.8?res("Posts Loaded"):rej("Posts Fail"),1500));}
function loadMessages(){ return new Promise((res,rej)=> setTimeout(()=> Math.random()<0.8?res("Messages Loaded"):rej("Messages Fail"),1000));}

async function run(){
  const start = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  console.log(results);
  console.log("Time:", Date.now()-start, "ms");
}
run();
