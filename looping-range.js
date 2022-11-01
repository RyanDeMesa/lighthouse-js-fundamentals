/*function range (start, end, step) {
  const arr = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0) {
    return arr;
  } else for (let i = start; i<= end; i =+ step) {
    arr.push(i);
  }
  return arr;
}
/////////  no idea why the code above won't work
*/


function range(start,end,step) {
  let array = [];
  if (step > 0) {
    for (let i = start ; i <= end ; i += step) {
      array.push(i);
    }
  }
  return array;
}

  console.log(range(0, 10, 2));