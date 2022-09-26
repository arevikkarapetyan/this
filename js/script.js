"use strict";

// object and this || call, apply, bind methods

const music = {
    title: "Black or White",
    duration: "3 minutes, 25 seconds",
    artist: "Michael Jackson",
    year:1997,
    play() {
      console.log(this.title);     // Black or White
    }
};

music.play();

function musicVideo (a) {
    console.log(this.artist);    // Michael Jackson 
    console.log(a + a);
}
//  call
musicVideo.call(music, 7);

// apply
musicVideo.apply(music, [5]);

// bind
const boundBind = musicVideo.bind(music);

boundBind(2);


//function constructor example

function Person(name= "Anna", age = 35) {
    this.name = name;
    this.age = age;
}

const ani = new Person("Ani", 26);
console.log(ani.name);

const anna = new Person();
console.log(anna.age);



// arrow function

const nameGenerator = {
        firstName: "Armen",
        secondName: "Nare",
        thirdName: "Armine",

        callFirstName:function() {
            console.log(nameGenerator.firstName);       // object
        },

        callSecondName:() => {
            console.log(nameGenerator.secondName);  // object
        }
};

nameGenerator.callFirstName();

nameGenerator.callSecondName();
