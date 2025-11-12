
let name = "Yash";                 
let age = 22;                      
let isStudent = true;              
let hobbies = ["coding", "music"]; 
let profile = { city: "Delhi", country: "India" }; 
let score = null;                  
let futureGoal;                    


let dataSummary = [
  { Label: "Name", Value: name, Type: typeof name },
  { Label: "Age", Value: age, Type: typeof age },
  { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
  { Label: "Hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "Profile", Value: profile, Type: typeof profile },
  { Label: "Score", Value: score, Type: typeof score },
  { Label: "Future Goal", Value: futureGoal, Type: typeof futureGoal }
];


console.table(dataSummary);
