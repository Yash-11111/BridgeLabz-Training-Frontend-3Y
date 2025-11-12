
let temperature = 28;
let isRaining = false;
let windSpeed = 10;


let advice;

if (isRaining) {
  advice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  advice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  advice = "Too cold and windy — stay home.";
} else {
  advice = "Perfect day for a walk.";
}


console.log("------ Weather Activity Planner ------");
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Suggestion: ${advice}`);
