window.addEventListener("load",init);

function init()
{
	if(typeof(Storage)!=="undefined")
	{

	display();

	var button=document.getElementById("button");
	button.addEventListener("click",saveInfo);
	}

	else{
	//old bowser
	}
}
function saveInfo()
{

	var customerName=document.getElementById("customerName").value;
	var flavor=document.getElementById("flavor").value;
	var quantity=document.getElementById("quantity").value;
	var price=document.getElementById("price").value;

	localStorage.setItem("customerName", customerName);
	localStorage.setItem("flavor", flavor);
	localStorage.setItem("quantity", quantity);
	localStorage.setItem("price", price);

}

function display()
{
	var rightBox=document.getElementById("useroutput");

	var customerName=localStorage.getItem("customerName");
	var flavor=localStorage.getItem("flavor");
	var quantity=localStorage.getItem("quantity");
	var price=localStorage.getItem("price");

	rightBox.innerHTML+="OUTPUT <hr /><br />Customer Name: "+customerName+ "<br /><br />  Flavor: " +flavor+"<br /><br />Quantity: "+quantity+"<br /><br /> Price: "+ price;

	//if(rightBox==undefined){
		////document.getElementById("useroutput").innerHTML="";
		//}
		//else
		//{
			//rightBox.innerHTML +="OUTPUT <hr /><br />Donut Name: "+donutName+ "<br /><br/>  Flavor: " +flavor+"<br /><br/>Quantity: "+quantity+"<br /><br/> Price:  "+price;
		//}

}
