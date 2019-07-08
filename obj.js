let person = {
  name: "Nino",
  age:18,
 
};
let count=0;
function test (user){
    for(key in user)
    {
        count++;
    }
    if(count===0){
    console.log("obieqti araa")
    }
    else console.log(count)
    }

    test(person)