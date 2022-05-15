// // // function number5times(){
// // // var number = +prompt();
// // // var i=0;
// // // while (i<5){
// // //     console.log(number)
// // //     i++;
// // // }
// // // }
// // // number5times()


// // // function number5times(number){
// // //     var i=0;
// // //     while (i<5){
// // //         console.log(number)
// // //         i++;
// // //     }
// // //     }
// // //     number5times(+prompt())
    

// // function printeven(){
// //     for ( var i=0; i<=50; i++) {
// //         if (i%2==0){
// //             console.log(i)
// //         }
// //     }
// // }
// //     printeven()

// // function sumup(number1,number2){
// // var result=(number1+number2)

// // console.log(result)

// // }
// // var num1 =+prompt()
// // var num2 =+prompt()
// // sumup(num1,num2);

// // function printhello(){
// //     console.log("hello world"*3)
// // }
// // printhello();

// // function sumup(){
// // var firstName =prompt("enter name")
// // var number = +prompt("enter number")
// // for ( i=0; i < number;i++){
// //     document.writeln(i+"hello" + firstName + "<br>")
// // }
// // sumup()
// // }

// // function getfromprompt(text){

// //     varfirstName=prompt("please enter"+  text );
// // }
// // getfromprompt(" first Name")
// // getfromprompt(" last Name")

// // function getfromprompt(text){

// //     var result=prompt("please enter"+  text );
// //     return result;
// // }

// פונקציה 

// function sumfunction(){

//     for (var i = 0 ; i< parseint(getFromPrompt ("enter a number")) ;i++){
//         document.write (i)
//         document.write (getTextForDom("first name"))
//         document.write (getTextForDom("last name"))
//         document.write (getTextForDom("city"))
//     }
     
// }
// function getTextForDom(title){

//     return getfromprompt(title)+"<br>"
// }
// function getfromprompt(text){

//     return prompt("please enter" + text );
     
// }
// sumfunction()

// function helloThreeTimes(){
// for (var i=0; i<3;i++){
    
//     document.writeln("hello world")
// }
// }
// helloThreeTimes()

// function twonumbersreturn(number1,number2){
//     if (number1>number2){
//         return number1;
//     }
//     return number2;
// }

// twonumbersreturn(+prompt(),+prompt());
// function max(){
//     var num1 = +prompt();
//     var num2=+prompt();
//     if (num1>num2){
//         return num1;
//     }
//     return num2;
// }



// function twonumbersreturn(number1,number2){
//     if (number1>number2){
//         return number1;
//     }
//     return number2;
// }
// function max(){
// return twonumbersreturn(+prompt("enter a number:"),+prompt("enter a number:"));
// }
// // console.log(max());
// // // 
// // function backfactorialback(num1,num2){
    
// //     return num1+num2;
    
// // }
// // document.write(backfactorialback(3.5,4.2))
// // backfactorialback(3.5,4.2)

// // function sumup(number){
// //     var sum =0;
// //     for (var i=0 ; i<=number ; i++){
// //         sum += i;
// //     }
// //     return sum;
// // }

// // document.write(sumup(0))
// // sumup(10)


// var num1=23;
// var num2=3;
// function switchnum(num1,num2){
// var num3=0;

// console.log(num1,num2);

// num3=num1;
// num1=num2;;
// num2=num3;

// console.log(num1,num2);

// }

// switchnum(23,3)

// function switchnum(num1,num2){
//     var num3=num1;
    
//     console.log(num1,num2);
//     num1=num2;
//     num2=num3;
    
//     console.log(num1,num2);
    
//     }
    
//     switchnum(23,3)

// function print5times(text){
//     for(i=0; i<5; i++){

//         document.writeln(text);  
//     }
// }

// print5times("hello")

function backmin(num1,num2){
    if (num1>num2){
        return num2
    }
    return num1
}
document.writeln(backmin(10,7),backmin(backmin(10,3),9))

backmin(backmin(10,7),9)

function avgnumbers(num1,num2,num3){
    var sum =num1+num2+num3;
    var avg =sum/3;
}
document.writeln(sum)
avgnumbers(12,6,4)