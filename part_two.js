/**
 Michel Mottet Ellnefjärd, miel9299
 Fabian Johansson,
 */
function createClass(name, superClassList) {

    let myClass = {
        className: name,
        inheritanceList: superClassList,
        call: function (funkName, parameters) {
            if (typeof this[funkName] === "function") {
                return this[funkName](parameters);
            }
            if (this.inheritanceList.length != null) {
                for (let i = 0; i < this.inheritanceList.length; i++) {
                    let result = this.inheritanceList[i].call(funkName, parameters);
                    if (result != null) {
                        return result;
                    }
                }
            }
            return null;
        },

        new: function () {
            return Object.create(this);
        },
    };
    return myClass;
}



/*
createClass = function(className, superClassList){
    let myClass= {

        name: className,
        inheritanceList: superClassList,

    }
    new: function () {


    }
}
*/


/*
let MyObject = {
    inheritenceList: [],
    className,

    createClass: function (className, superClassList) {
        return {
            this.className = className,
            inheritenceList: superClassList,
    },

 */
/*
  new: function(){

  }
  call: function (funcName, parameters) {



  }

  addSuperClass: function (classParam) {

          return null;
  }

 */


// testing code used to test

var class0 = createClass("Class0", null);

class0.func = function(arg) { return "func0: " + arg; };
var class1 = createClass("Class1", [class0]);
var class2 = createClass("Class2", []);
class2.func = function(arg) { return "func2: " + arg; };
var class3 = createClass("Class3", [class1, class2]);
var obj3 = class3.new();
var result = obj3.call("func", ["hello"]);

class0 = createClass("Class0", null);
class0.func = function(arg) { return "func0: " + arg; };
class1 = createClass("Class1", [class0]);
class2 = createClass("Class2", []);
class3 = createClass("Class3", [class2, class1]);
obj3 = class3.new();
result = obj3.call("func", ["hello"]);

class0 = createClass("Class0", null);
class0.func = function(arg) { return "func0: " + arg; };
var obj0 = class0.new();
result = obj0.call("func", ["hello"]);





