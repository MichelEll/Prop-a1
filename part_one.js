/**
 Michel Mottet Ellnefjärd, miel9299
 Fabian Johansson, fajo6716
 */
let myObject = {
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
        }
        if (this.prototypeList.length != null) {
            for (let i = 0; i < this.prototypeList.length; i++) {
                let result = this.prototypeList[i].call(funkName, parameters);
                if (result != null) {
                    return result;
                }
            }
        }
        return null;
    },
    addPrototype: function (obj) {
        if(!obj.check(this)){
            this.prototypeList.push(obj);
            console.log ("added!");
        }else{
            throw "error, would cause circular inheritence"
        }
    },
    check: function (obj) {
        let bool = false;
        if (this.prototypeList != null) {
            if (this.prototypeList.includes(obj)) {
                return true;
            }
            for (let i = 0; i < this.prototypeList.length; i++) {
                bool = this.prototypeList[i].check(obj);
            }
        }
        return bool;

    }
}


// detta är test koden för att kontrollera programmet.
var obj0 = myObject.create(null);
obj0.func = function (arg) {
    return "func0: " + arg;
};
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function (arg) {
    return "func2: " + arg;
};
var obj3 = myObject.create([obj1, obj2]);
var result = obj3.call("func", ["hello"]);
console.log("should print ’func0: hello’ ->", result);

obj0 = myObject.create(null);
obj0.func = function (arg) {
    return "func0: " + arg;
};
obj1 = myObject.create([obj0]);
obj2 = myObject.create([]);
obj3 = myObject.create([obj2, obj1]);
result = obj3.call("func", ["hello"]);
console.log("should print ’func0: hello’ ->", result);

obj0 = myObject.create(null);
obj0.func = function (arg) {
    return "func0: " + arg;
};
result = obj0.call("func", ["hello"]);
console.log("should print ’func0: hello’ ->", result);

//circular testing
var obj0 = myObject.create(null);
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([obj0]);
var obj3 = myObject.create([obj2]);
obj1.addPrototype(obj2);
obj0.addPrototype(obj1);
