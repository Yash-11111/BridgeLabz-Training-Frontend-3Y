// Q8 – Retry mechanism

function submitOrder(){
  return new Promise((res, rej)=>{
    setTimeout(()=> Math.random()<0.5?res("OK"):rej("Fail"), 500);
  });
}

async function processOrder(){
  for (let i=1;i<=3;i++){
    try{
      await submitOrder();
      console.log(`Attempt ${i}: Success`);
      return;
    }catch(err){
      console.log(`Attempt ${i}: Failed`);
    }
  }
  throw new Error("Order could not be processed");
}

(async()=>{
  try{
    await processOrder();
  }catch(e){
    console.log(e.message);
  }
})();
