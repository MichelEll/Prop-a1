/**
 Michel Mottet Ellnefjärd, 8512270052, miel9299
 Fabian Johansson, fajo6716
 */
var myObject = {
    prototypeList: [],

    create: function (listOfParents) {
        return {
            prototypeList: listOfParents,
            __proto__: this,
        }
    },
    call: function (funkName, parameters) {
        if (typeof this[funkName] === "function") {
            return this[funkName](parameters);
        }else if(this.prototypeList !== null){
            for(var i = 0; i < this.prototypeList.length; i++) {
                if(this.prototypeList[i].call(funkName,parameters) !== undefined){
                    return this.prototypeList[i].call(funkName,parameters);
                }
            }

        }else{
            return "Sorry no such function available";
        }
    }
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


