
// displaying output of function using forEAch loop in console


let myData = [
    {
       first_name: "Liaqat",
       last_name: "Ali ",
       Period: "1947 - 1951" ,
       fullname: function () {
         return this.first_name + " " + this.last_name;
       }
    },

    {
        first_name: "Khawaja ",
        last_name: "Nazimuddin",
        Period: "1951 - 1953",
        fullname: function () {
          return this.first_name + " " + this.last_name;
        }
     },

     {
        first_name: "Muhammad",
        last_name: "Ali Bogra",
        Period: "1953 - 1955",
        fullname: function () {
          return this.first_name + " " + this.last_name;
        }
     },

     {
      first_name: "Chaudhry",
      last_name: "Muhammad Ali",
      Period: "1955 - 1956",
      fullname: function () {
        return this.first_name + " " + this.last_name;
      }
   },

   {
    first_name: "Hussain",
    last_name: "Shaheed ",
    Period: "1956 - 1957",
    fullname: function () {
      return this.first_name + " " + this.last_name;
    }
 }
];

// console.log(myData[0].first_name);
// console.log(myData[0].last_name);
// console.log(myData[0].Period);
// console.log(myData[0].fullname());




myData.forEach((item, idx) => {
    console.log(idx + " : "+ item.first_name );
});    



// 

let listHolder = document.querySelector("#listHolder");
let first_name = document.querySelector("#firstName");
let last_name = document.querySelector("#lastName");
let Period = document.querySelector("#Period");
let btnsubmit =document.querySelector("#btnsubmit");

btnsubmit.addEventListener('click', function () {
if (first_name.value.trim() == "" || last_name.value.trim() == "" || Period.value.trim() == ""){
 alert("Please fill the form completely");
}
else{
    let copyData =[...myData];
    let newEntry = {
      first_name: first_name.value.trim(),
      last_name: last_name.value.trim(),
      Period: Period.value.trim(),
      fullname: function () {
        return this.first_name + " " + this.last_name;
      }
    }
    copyData.push(newEntry);
    myData.splice(0, myData.length, ...copyData);
    
    listHolder.innerHTML = "";

    rendorRecord(); 

    first_name.value = "";
    last_name.value = "" ;
    Period.value = "";
}
})





function rendorRecord() {
myData.forEach((item, index) => {
  let tr = document.createElement("tr");

tr.innerHTML = `     
          <td>${index + 1}</td>
          <td>${item.fullname()}</td>
          <td>${item.Period}</td>                `;       
  
listHolder.appendChild(tr);
});
}

rendorRecord();