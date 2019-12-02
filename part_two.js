/**
 Michel Mottet Ellnefjärd, 8512270052, miel9299
 Fabian Johansson, fajo6716
 */

function createClass(className, superClassList){
    /*var superClasses = []
    this.name = className;
    if(superClassList !== null){
        for(var i = 0; i < superClassList.length; i++) {
            var parent = superClassList[i];
            superClasses.push(parent);
        }
    }else {
        superClasses = null;
    }*/

    var newClass =  {
        name: className,
        superClasses: superClassList,
        new: function () {
            //return this;
            var newObj = this;
            newObj.call = function(funcName, parameters) {
                if(this.hasOwnProperty(funcName)) {
                    return this[funcName](parameters);
                }else {
                    if(this.superClasses.length !== undefined){
                        for(var i = 0; i < this.superClasses.length; i++){
                            if(superClasses[i].hasOwnProperty(funcName) === 'function'){
                                var temp = superClasses[i];
                                return temp[funcName](parameters);
                            }
                            if(superClasses[i].new().call(funcName,parameters) !== undefined) {
                                return this.superClasses[i].this.call(funcName,parameters) ;
                            }
                        }
                    }
                }
            }
            return newObj;
        }

    }
    return newClass;
}
/* Test code 1 */
var class0 = createClass("Class0", null);
class0.func = function(arg) { return "func0: " + arg; };
var class1 = createClass("Class1", [class0]);
var class2 = createClass("Class2", []);
class2.func = function(arg) { return "func2: " + arg; };
var class3 = createClass("Class3", [class1, class2]);
var obj3 = class3.new();
var result = obj3.call("func", ["hello"]);
/*Test code 2*/
class0 = createClass("Class0", null);
class0.func = function(arg) { return "func0: " + arg; };
class1 = createClass("Class1", [class0]);
class2 = createClass("Class2", []);
class3 = createClass("Class3", [class2, class1]);
obj3 = class3.new();
result = obj3.call("func", ["hello"]);
/*Test code 3*/
class0 = createClass("Class0", null);
class0.func = function(arg) { return "func0: " + arg; };
var obj0 = class0.new();
result = obj0.call("func", ["hello"]);
