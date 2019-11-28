/**
 Michel Mottet Ellnefjärd, 8512270052, miel9299
 Fabian Johansson, fajo6716
 */
var myObject = {
    prototypeList: [],

    create: function (listOfParents) {
        //Return new object  //ta bort när klart
        return {
            prototypeList: [listOfParents],
            __proto__: this,
        }
    },
    call: function (funkName, parameters) {
        //var results = null;
        console.log("test");  //ta bort när klart
        console.log (typeof this[funkName]);   //ta bort när klart
        if (typeof this[funkName] === "function") {
            console.log("test inside ttype off");  // ta bort när klart

            return this[funkName](parameters);
        }
    }

    /*
    if (this.hasOwnProperty(funkName)) {
        results = this.funkName();
    } else {
        while (results == null) {
            //results = prototypeList.forEach(call(funkName,parameters));
        }
        return results;
    }
}

     */
}

// detta är test koden som vi ska köra
var obj0 = myObject.create(null);
obj0.func = function(arg) { return "func0: " + arg; };
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function(arg) { return "func2: " + arg; };
var obj3 = myObject.create([obj1, obj2]);
obj3.func = function(arg) { return "func3: " + arg; };
var result = obj3.call("func", ["hello"]) ;
console.log("should print ’func0: hello’ ->", result);