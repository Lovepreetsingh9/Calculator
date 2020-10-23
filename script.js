
    var ac=document.getElementById("ac");
var unary=document.getElementById("unary");
var seven=document.getElementById("seven");
var eight=document.getElementById("eight");
var nine=document.getElementById("nine");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var zero=document.getElementById("zero");


var mod=document.getElementById("percent");
var divs=document.getElementById("divs");
var multiple=document.getElementById("multiple");
var sub=document.getElementById("sub");
var add=document.getElementById("add");
var equal=document.getElementById("equal");
var dot=document.getElementById("dot");

var op1="";
var op2="";
var operator="";
var answer="";
var result=document.getElementById("result");
var c=-1;




function assignoperator(a)
{
c=0;
    operator=a;
    result.innerText=a;
    

}
// ac.addEventListener('click',function(){
// result.innerText="";
//     answer="";
//     op1="";
//     op2="";
//     operator="";
    


// });
// mod.addEventListener('click',function(){
//     assignoperator("%");
    

// });


function assignvalues(x){
 op1+=x;
   result.innerText=op1;
  
}





function assignvalue2(y){
    
    op2+=y;
    result.innerText=op2;
    
    
}
zero.addEventListener('click',function(){
    if(c==-1)
    {assignvalues("0");
    }
    else{assignvalue2("0");
                                         }
                                         });
    

one.addEventListener('click',function(){
    if(c==-1)
    {assignvalues("1");
    }
    else{assignvalue2("1");
                                         }
                                         });
    
two.addEventListener('click',function(){
    if(c==-1)
    {assignvalues("2");
    }
    else{assignvalue2("2");
                                         }
                                         });
three.addEventListener('click',function(){
    if(c==-1)
    {assignvalues("3");
    }
    else{assignvalue2("3");
                                         }
                                         });
four.addEventListener('click',function(){
    if(c==-1)
    {assignvalues("4");
    }
    else{assignvalue2("4");
                                         }
                                         });
    
    
    five.addEventListener('click',function(){
   
        if(c==-1){ 
    assignvalues("5");
    }
    else{assignvalue2("5");
                                         }
                                         });
    six.addEventListener('click',function(){
    if(c==-1)
    {assignvalues("6");
    }
    else{assignvalue2("6");
                                         }
                                         });
seven.addEventListener('click',function(){
    if(c==-1)
    {assignvalues("7");
    }
    else{assignvalue2("7");
                                         }
                                         });
    eight.addEventListener('click',function(){
    if(c==-1)
    {assignvalues("8");
    }
    else{assignvalue2("8");
                                         }
                                         });
    nine.addEventListener('click',function(){
    if(c==-1)
    {assignvalues("9");
    }
    else{assignvalue2("9");
                                         }
                                         });
    



// function assignoperatora)
// {

//     operator=a;
// c=0;

// }

function AC(){
result.innerText="";
    answer="";
    op1="";
    op2="";
    operator="";
    c=-1;
    

}
ac.addEventListener('click',AC);


multiple.addEventListener('click',function(){
    
    assignoperator("*");
    

});

divs.addEventListener('click',function(){
    
    assignoperator("/");
    

});
sub.addEventListener('click',function(){
    
    assignoperator("-");
    

});
add.addEventListener('click',function(){
    
    assignoperator("+");
    

});

mod.addEventListener('click',function(){
    
    assignoperator("%");
    

    
});
var count=1;
var s="";
// var s1=op2;

function sign(v){
 if(count%2==1){
    if(c==-1){
    s=op1;
        op1="-"+op1;
    result.innerText=op1;

    }
     else
         {s=op2;
             op2="-"+op2;
         // op2=innerText=op2;

            result.innerText=op2;
         
         }
     count=0;
    
    
 }
    else
        {if(c==-1){
            op1=s;
              result.innerText=op1;
        }else
         {   op2=s;
          result.innerText=op2;
         
         }
            count=1;
        
         
         }
    
    
}

unary.addEventListener('click',function()
{          

    
    
    sign();
    
                       });


// var z=0;

function answer1(){
    if(op2==0&&operator=="/"){
        // res
// answer=eval(op1+" "+operator+" "+op2);
    result.innerText="ERROR";
    // answer="";
    // op1=answer;
        op1="";
        
    answer="";
    op2="";
    operator="";
    c=-1;
// z=0;
// x=0;
    }
    else
        {answer=eval(op1+" "+operator+" "+op2);
    result.innerText=answer;
    // answer="";
    op1=answer;
    answer="";
    op2="";
    operator="";
    c=-1;
    // z=0;
// x=0;

        }
      }

equal.addEventListener('click',answer1);


function dotadd()
{
if(c==-1){
  if(op1.charAt(op1.length-1)!='.')
    op1=op1+".";




}
else{
  if(op2.charAt(op2.length-1)!='.')
    op2=op2+'.';

// x=-1;
}


}
dot.addEventListener('click',dotadd);




// document.addEventListener('keydown',function(event){

// if(event.keyCode==48)
//   {if(c==-1)
//     assignvalues(0);
//     else
//       assignvalue2(0);


//   }
// else if(event.keyCode==49)
//    {if(c==-1)
//     assignvalues(1);
//     else
//       assignvalue2(1);
    

//   }

// else if(event.keyCode==50)
//  {if(c==-1)
//     assignvalues(2);
//     else
//       assignvalue2(2);
    

//   }
// else if(event.keyCode==51)
//  {if(c==-1)
//     assignvalues(3);
//     else
//       assignvalue2(3);
    

//   }
// else if(event.keyCode==52)
//  {if(c==-1)
//     assignvalues(4);
//     else
//       assignvalue2(4);
    

//   }
// else if(event.keyCode==53)
//  {if(c==-1)
//     assignvalues(5);
//     else
//       assignvalue2(5);
    

//   }
// else if(event.keyCode==54)
//   {if(c==-1)
//     assignvalues(6);
//     else
//       assignvalue2(6);
    

//   }
// else if(event.keyCode==55)
//  {if(c==-1)
//     assignvalues(7);
//     else
//       assignvalue2(7);
    

//   }
// else if(event.keyCode==56)
//   {if(c==-1)
//     assignvalues(8);
//     else
//       assignvalue2(8);
    

//   }
// else if(event.keyCode==57)
//    {if(c==-1)
//     assignvalues(9);
//     else
//       assignvalue2(9);
    

//   }





// });
function remove1(){

if(c==-1)
  op1=op1.substring(0,op1.length-1);
else
  op2=op2.substring(0,op2.length-1);


}



document.addEventListener("keypress",function(event)
{
  var kc=event.keyCode;
  if(kc>=48 && kc<=57)
  {if(c==-1)
    assignvalues(event.key);
  else
    assignvalue2(event.key);
  


  }

  else if((event.shiftKey) && (kc==37 || kc==43  || kc==47 || kc==42)){
assignoperator(event.key);
  }
  else if(kc==45||kc==47)
    assignoperator(event.key);

  else if(kc==61)
  {
    answer1();

  }
   else if(kc==46)
    dotadd();
    else if(kc==97)
    AC();

// else if(kc==8)

// {
//   remove1();

// }

});

document.addEventListener("keydown",function(event){

if(event.keyCode==8)
{
  remove1();

}
});
