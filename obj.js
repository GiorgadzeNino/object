let person = {
  name: "Nino",
  age:18
};

function test (user){
  let count=0;
  if(typeof(person)!=='object'){
    alert("This in not an object")
  }
  else{
  
    for(key in user)
    {
        count++;
    }
    if(count===0){
    alert("Object is empty")
    }
    else alert(count)
    }
  
  }
    test(person)