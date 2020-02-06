//Declaration
let form =document.createElement("form");
let str = "";
let divcard=document.createElement("div");
let divcontainer= document.createElement("div");
//setAttribute
form.setAttribute("action","#");
divcard.setAttribute("class","card");
divcontainer.setAttribute("class","container");
//strchange
str='<input type ="text">';
str+='<input type="text">';
str+='<input type ="submit" class ="btn">';
form.innerHTML = str;
//append
divcard.append(divcontainer);
divcontainer.append(form);
document.body.append(divcard);



fetch("http://localhost:3000/post")
.then((res)=>res.json())
.then((data)=>{
	console.log(data);
	makelist(data);
});
let divlist = document.createElement("div");


function makelist(data) {
	// body...
	str ="";
	data.forEach((ele)=>{   //ele any name
	str += "<p>"  + ele["title"] + "=>" + ele["desc"];
	str += "</p>";                
	})
	divlist.innerHTML = str;
    document.body.append(divlist);
}
let myheaders = new Headers();
myheaders.append("Content-Type","application/json");
form.onsubmit = (evt)=>{
	evt.preventDefault(
		);
	fetch("http://localhost:3000/post",{
		method: "post",
		body:JSON.stringify({
				"title":form.children[0].value,
				"disc":form.children[1].value
		}),
		headers:myheaders
	})
   	.then((res)=>res.json())
	.then((data)=>{
		console.log(data);
		makelist(data);
	});
}
