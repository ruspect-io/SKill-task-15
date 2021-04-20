const objRus = {
  a:1,
  b:'Hello',
  c: function(){
    console.log("My name is WAKA");
  },
  city: 'Moscow'
};
// console.log(objRus.c());

const obj = Object.create(objRus);
obj.ownCity = "Piter";
// console.log(obj);

for(let key in obj){
  if(obj.hasOwnProperty(key)){
      console.log(key);

  }
};

