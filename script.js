// testing variables
    var aeaeae = 20 + 15;
    console.log(aeaeae)

// testing functions

    function wordBlanks(myNoum, myAdjective, myVerb, myAdverb) {

        var result = "";

        result += "the " + myAdjective + " " + myNoum + " " + myVerb + " to the store" + " " + myAdverb;

        return result;
    }

    console.log(wordBlanks("dog", "big", "ran", "quickly"))
    console.log(wordBlanks("bike", "slow", "flew", "slowly"))

// testing changing the element in an array

    var ourArray = [18, 64, 99];

    ourArray[1] = 45;

    console.log(ourArray[1]) //it showed "45" as a result

//appending data in the end of the array with the push function

    var myArray1 = [["john", 23], ["cat", 2]];
    myArray1.push(["dog", 3]);
    console.log(myArray1)
    console.log(myArray1.length) //just checking array length

//"stand in line" bellow: trying to understand this:

    function nextInLine(arr, item) {

        arr.push(item) //you use "push" to appending data in the end of the array
        return arr.shift(); //you use "shift" to remove the first element from an array
    }

    var testArr = [1,2,3,4,5];

    console.log("before: " + JSON.stringify(testArr)); // this just results the testArr itself

    console.log(nextInLine(testArr, 6)); // it modified the data on testArr... how: it includes the changes made on the function "nextInLine" which means: -push- add something in the end, in this case we are adding item, and item is equal 6; and -shift- with this we exclude the first item 

    console.log("after: " + JSON.stringify(testArr)) // with this line we just show what the anterior line made

//if and conditions

    function trueOrFalse(wasThatTrue){
        if (wasThatTrue){
            return "yes, it was true"
        }
        return "no, it was false"
    }

    console.log(trueOrFalse(true));

    //another examples inside of the same topic

    function testEqual(val) {
        if (val == 12) { // here i am using two "=" because i dont want to give an assignment, i want to check it values
            return "equal";    
        }
        return "not equal"
    }

    console.log(testEqual(13)); // here shows the results: the results can just be "equal" when its 12 betwen the parentheses

// if else if

    function testElseIf(val){
        if (val > 10){
            return "greater than 10";
        } else if (val < 5){
            return "smaller than 5";
        } else {
            return "between 5 and 10"
        }
    }

    console.log(testElseIf(2));

//card counting

    var count = 0;

    function cc(card) {
        switch(card) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                count ++; // this makes it increase 1 to the value
                break;
            case 10:
            case "J":
            case "Q":
            case "K":
            case "A":
                count --;// this is the same than do count = (count - 1).
                break;
        }

        var holdbet = "hold"
        if (count > 0) {
            holdbet = "Bet"
        }

        return count + " " + holdbet;
    }

    cc(2); cc(3); cc(4); cc("K"); cc("A");
    console.log(cc(4))

//  Testing Objects for Properties

    var myObj = {
        gift: "pony",
        pet: "kitten",
        bed: "sleight"
    };

    function checkObj(checkProp) {

        if (myObj.hasOwnProperty(checkProp)) {
            return myObj[checkProp];
        } else {
            return "not found"
        }
    }

    console.log(checkObj("gift"));

// record collection
    //the goal of the code in bellow is to update the list using code...

    var collection = {
        "2458": {
            "album": "slippery when wet",
            "artist": "bon jovi",
            "tracks": [
                "let it rock",
                "you give love a bad name"
            ]
        },
        "2468": {
            "album": "1999",
            "artist": "Prince",
            "tracks": [
                "1999",
                "little red corvette"
            ]
        },
        "1245": {
            "artist": "Robert Palmer",
            "tracks": []
        },
        "5439": {
            "album": "ABBA GOLD"
        }
    };

    var collectionCopy = JSON.parse(JSON.stringify(collection)); // this garants a copy of the collection when it gets alterations

    function updateRecords(id, prop, value) { // this function goals is to ,firstly, check the value based on id and prop, if its a new information, this function should update the element.. if we have a empty string for the value it should just delete that prop

        if (value === "") {
            delete collection[id][prop]; // this first if checks if the values is empty, if yes, it just deletes the line
        } else if (prop === "tracks") {
            collection[id][prop] = collection[id][prop] || [];
            collection[id][prop].push(value); // this else if check if the track already has content, if it has this function just keep, but if it has new imput, this function push the information to the end of the array
        } else {
            collection[id][prop] = value;
        }

        return collection;
    }

    console.log(updateRecords(2468, "tracks", "test"));
    console.log(updateRecords(5439, "artist", "ABBA"));

//understanding the while loops

    var myArray3 = [];

    var i = 0;
    while(i < 7) {
        myArray3.push(i)
        i++;
    }

    console.log(myArray3);

// for loops

    var myArray4 = [];

    for (var i = 1; i < 9; i++) {
        myArray4.push(i);
    }

    console.log(myArray4);

//Iterate Through an Array with a For Loop

    // var myArray5 = [2, 3, 4];
    // var total = 0;

    // for (var i = 0; myArray5.length; i++){
    //     total += myArray5[i];
    // }

    // console.log(total);

    // i blocked the code above because it was running in loop and it was not showing the result

//nesting for loops
    //search more about this
    function multiplyAll(array6){
        var product = 1;

        for (var i=0; i < array6.length; i++){
            for (var j=0; j < array6[i].length; j++){
                product *= array6[i][j];
            }
        }
        return product;
    }

    var product = multiplyAll([[1,2],[3,4],[5,10]]);

    console.log(product);

//profile Lookup

    var contacts = [
        {
            "firstName": "akira",
            "lastName": "laine",
            "number": "7436",
            "likes": ["pizza", "coke", "lemon pie"]
        },  

        {
            "firstName": "harry",
            "lastName": "potter",
            "number": "327",
            "likes": ["hogwards", "music"]
        },  
    ];

    function lookUpPorfile(name, prop){ // the goal of the function is to use the name and prop as bases to get a result, example: if i informe the name "harry" and the "lastName" as a property, i should get as a result "potter"
        for (i = 0; i < contacts.length; i++) { //this for loop make happen an interation with each element
            if(contacts[i].firstName === name) { //firstly, we need to check if the name is a name in this list
                return contacts[i][prop] || "no such propertie"; //if the name is in the contacts lint we are going to return the value that the propertie that was pasted in
            }
        } 
        return "no such contact"
    }

    var data = lookUpPorfile("akira", "likes");
    console.log(data);

//convert to interger



    function converToInterger(str) {
        return parseInt(str);
    }

    converToInterger("56");

    console.log(converToInterger);