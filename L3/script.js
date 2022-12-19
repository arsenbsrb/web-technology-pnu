console.log("Call method ArrayMethod() to see some magic.")

function ArrayMethod() {
    let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
    
    for (let i=0; i < names.length; i++) {
        if (names[i].toLowerCase().indexOf('j') == 0) {
            let name = "J" + names[i];
            speakGoodbye (name);
       } else {
            let name = names[i];
            speakHello (name);
       }
    }

    console.log("In the following selection we would add letter A if it is the last letter in the name");

    for (let i=0; i < names.length; i++) {
        if (names[i].toLowerCase().charAt(names[i].length - 1) == "a") {
            let name = "A" + names[i];
            speakGoodbye (name);
       } else {
            let name = names[i];
            speakHello (name);
       }
    }
}
