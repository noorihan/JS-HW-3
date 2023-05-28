

function billSplittingProgram(mainC,desrt,frnds=1){

    let numOfFriends = frnds;
    document.write(`Number of friend is ${numOfFriends}`);
    document.write("<br>")
    let mainCourse = mainC;
    document.write(`Price of Main course is ${mainCourse}`);
    document.write("<br>")
    let desert = desrt;
    document.write(`Price of desert is ${desert}`);
    document.write("<br>")
    let totalBill = Number(mainCourse)+Number(desert)
    document.write(`Total bill is ${totalBill}`);
    document.write("<br>")
   
    
    let splitBill = Number(totalBill)/Number(numOfFriends)
    document.write(`Per person bill is ${splitBill}`);
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
}

billSplittingProgram(20,20,3)

billSplittingProgram(250,100,5)


