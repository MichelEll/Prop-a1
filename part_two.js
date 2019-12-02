/**
 Michel Mottet Ellnefjärd, miel9299
 Fabian Johansson,fajo6716
 */
function createClass(name, superClassList) {

    let myClass = {
        className: name,
        inheritanceList: superClassList,


        addSuperClass: function (obj) {
            if (!obj.__check(this)) {
                this.inheritanceList.push(obj);
                console.log("added!");
            } else {
                throw "error, would cause circular inheritence"
            }
        },
        __check: function (obj) {
            let bool = false;
            if (this.inheritanceList != null) {
                if (this.inheritanceList.includes(obj)) {
                    return true;
                }
                for (let i = 0; i < this.inheritanceList.length; i++) {
                    bool = this.inheritanceList[i].__check(obj);
                }
            }
            return bool;
        },
        __find: function (funcName) {
            if (typeof this[funcName] === "function") {
                return this;
            }
            if (this.inheritanceList != null) {
                for (let i = 0; i < this.inheritanceList.length; i++) {
                    let obj = this.inheritanceList[i].__find(funcName);
                    if (obj != null) {
                        return obj;
                    }
                }
                return null;
            }
        },
        new: function () {
            var obj = Object.create(this);

            obj.call = function (funcName, parameters) {
                if (typeof this[funcName] === "function") {
                    return this[funcName](parameters);
                }
                if (this.inheritanceList != null) {
                    for (let i = 0; i < this.inheritanceList.length; i++) {
                        let obj = this.inheritanceList[i].__find(funcName);
                        if (obj != null) {
                            return obj[funcName](parameters);
                        }
                    }
                }
                return null;
            }
            return obj;
        },
    };
    return myClass;
}


// testing code used to test

var class0 = createClass("Class0", null);

class0.func = function (arg) {
    return "func0: " + arg;
};
var class1 = createClass("Class1", [class0]);
var class2 = createClass("Class2", []);
class2.func = function (arg) {
    return "func2: " + arg;
};
var class3 = createClass("Class3", [class1, class2]);
var obj3 = class3.new();
console.log(obj3);
var result = obj3.call("func", ["hello"]);

class0 = createClass("Class0", null);
class0.func = function (arg) {
    return "func0: " + arg;
};
class1 = createClass("Class1", [class0]);
class2 = createClass("Class2", []);
class3 = createClass("Class3", [class2, class1]);
obj3 = class3.new();
result = obj3.call("func", ["hello"]);

class0 = createClass("Class0", null);
class0.func = function (arg) {
    return "func0: " + arg;
};
var obj0 = class0.new();
result = obj0.call("func", ["hello"]);
console.log("should print ’func0: hello’ ->", result);



var class0 = createClass("Class 0", null);
var class1 = createClass("Class 1", [class0]);
class0.addSuperClass(class1);



