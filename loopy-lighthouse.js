let loopy = 100;

for (loopy = 100; loopy <= 200; ++loopy) {
  
  if (loopy % 3 === 0 && loopy % 4 === 0) {
    console.log("LoopyLighthouse");
    
} else if (loopy % 3 === 0) {
    console.log("Loopy")

} else if (loopy % 4 === 0) {
    console.log("Lighthouse");

} else {
  console.log(loopy);}
}
