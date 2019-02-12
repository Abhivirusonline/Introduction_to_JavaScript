var n=prompt("Enter the no of employees:");
var arr=new Array(n);
for(var i=0;i<n;i++)
{
	var name=prompt("Enter Name:");
	var age=prompt("Enter age:");
	var sal=prompt("Enter salary :");
	var dob=prompt("Enter Date of birth DD-MM_YYYY:");
	var employee={name:name,age:age,sal:sal,dob:dob};
	arr[i]=employee;
}


function a(){
	if(arr[0]==undefined)
		document.getElementById('disp').innerHTML="Sorry, You do not have any entries...";
	else {
		var ans="<table><tr><th>Sr.</th><th>Name</th> <th>Age</th> <th>Salary</th> <th> Date Of Birth</th></tr>";
		for(var j=0;j<n;j++)
		{
			ans+="<tr><td>"+((j+1)+"</td><td>"+arr[j].name+"</td><td>"+arr[j].age+"</td><td>"+arr[j].sal+"</td><td>"+arr[j].dob+"</td></tr>");
		}
		document.getElementById('disp').innerHTML=ans+"</table>";
	}
}
function b()
{
	if(arr[0]==undefined)
		document.getElementById('b').innerHTML="Sorry, You do not have any entries...";
	else {
	var ans="<table><tr><th>Sr.</th><th>Name</th> <th>Age</th> <th>Salary</th> <th> Date Of Birth</th></tr>";
	var j=0;
	var f=0;
	for(var i=0;i<n;i++)
	{
		if(arr[i].sal>	5000)
		{
			ans+="<tr><td>"+((j+1)+"</td><td>"+arr[j].name+"</td><td>"+arr[j].age+"</td><td>"+arr[j].sal+"</td><td>"+arr[j].dob+"</td></tr>");
			j++; f=1;
		}	
	}
	if(f==0)
	ans="No entries greater than 5000";	
	document.getElementById('b').innerHTML=ans+"</table>";
	}
}
function c()
{
	if(arr[0]==undefined)
		document.getElementById('c').innerHTML="Sorry, You do not have any entries...";
	else {
	    var i=0;
		var str="<table><tr><th>18-29</th> <th>30-49</th> <th>50-75</th> <th> More than 75</th> </tr>";
		var row="";
		var arr1=new Array();
		var arr2=new Array();
		var arr3=new Array();
		var arr4=new Array();	
		var c1=0,c2=0,c3=0,c4=0;
		for(i=0;i<n;i++){
			var C_age=arr[i].age;
			if(C_age >17 && C_age<30)
		       arr1[c1++]=arr[i];
			else if(C_age > 29 && C_age < 50)
				arr2[c2++]=arr[i];	
			else if(C_age > 49 && C_age < 76)
				arr3[c3++]=arr[i];
			else if(C_age>75)
				arr4[c4++]=arr[i];
		 }	
			var arrSize=[c1,c2,c3,c4];
			var max=arrSize[0];
			for(i=1;i<4;i++)
			{
				if(max < arrSize[i])
					max=arrSize[i];
			}
			for(i=0;i<max;i++){
				var v1,v2,v3,v4;
				for(var j=0;j<4;j++)
				{
				 if(arr1[i]==undefined) v1="";
				 else v1=arr1[i].name;
				 if(arr2[i]==undefined) v2="";
				 else v2=arr2[i].name;
				 if(arr3[i]==undefined) v3="";
				 else v3=arr3[i].name;
				 if(arr4[i]==undefined) v4="";
				 else v4=arr4[i].name;
				}	
				row+="<tr><td>"+v1+"</td><td>"+v2+"</td><td>"+v3+"</td><td>"+v4+"</td></tr>";
			
			}
			str+=row+"</table>";
			document.getElementById('c').innerHTML=str;
 }
}
function d()
{
	if(arr[0]==undefined)
		document.getElementById('d').innerHTML="Sorry, You do not have any entries...";
	else {
		var ans="<table><tr><th>Sr.</th><th>Name</th> <th>Age</th> <th>Salary</th> <th> Date Of Birth</th></tr>";
		for(var j=0;j<n;j++)
		{
			if(arr[j].sal<1000 && arr[j].age>20)
			{
				arr[j].sal*=5;
			}	
			ans+="<tr><td>"+(j+1)+"</td><td>"+arr[j].name+"</td><td>"+arr[j].age+"</td><td>"+arr[j].sal+"</td><td>"+arr[j].dob+"</td></tr>";
		}
		document.getElementById('d').innerHTML=ans+"</table>";
	}
}