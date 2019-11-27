/**
 Michel Mottet Ellnefjärd, 8512270052, miel9299
 Fabian Johansson,
 */
var myObject = {

    prototypeList: [],

    call: function (funkName, parameters) {
    },

    create: function (listOfParents) {
        //skapa ny funktion för
        return {
            prototypeList: [listOfParents],
            //prototypeList.push(newObject);
            __proto__: this,
        }
    }
}


