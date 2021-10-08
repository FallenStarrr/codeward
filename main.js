let s = "abcdefg";

const strs = (s) => {
  let res;
  let arr = s.split("");
  let dash;
  let arr2 = [];
  let arr3 = [];
  for (let i of arr) {
    let id = arr.indexOf(i) + 1;
    let rep = arr[id];
    let count = 0;

    dash = i.repeat(id);

    dash;
    arr2.push(dash);
  }
  arr2;
  for (a of arr2) {
    let slice = a.slice(1);
    slice;
    let t = a[0].toUpperCase();
    res = t + a;

    arr3.push(res);
  }

  let joined = arr3.join("-");
  return joined;
};

let dashed = strs(s);
dashed;
for (dash of dashed) {
}
console.log();







// More easy version but i think 
let s = "abcdefg";

const strs = (s) => {
  let res;
  let arr = s.split("");
  let dash;
  let arr2 = [];
  let arr3 = [];
  for (let i of arr) {
    let id = arr.indexOf(i);
    let rep = arr[id];
    let count = 0;

    dash = i.repeat(id + 1);

    dash;
    arr2.push(dash);
  }
  arr2;
   
  for (let i = 0; i < arr2.length; i++) {
      

  }

  
  
   arr2
  return arr2.join(' ');
};

let dashed = strs(s);
dashed;

for( let dash of dashed ) {
    console.log(dash)
}
   arr2
  return arr2.join(' ');
};

let dashed = strs(s).split(' ');
dashed;
let capitals = []  
for( let i = 0; i < dashed.length; i++ ) {
       
      capitals.push(dashed[i][0] = dashed[i][0].toUpperCase())
       
}
capitals
dashed


let strs = []


let arr = dashed.forEach((i) => {
       strs.push(i.replace(i, i.toUpperCase()))
})


strs

