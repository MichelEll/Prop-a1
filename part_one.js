/**
 Michel Mottet Ellnefjärd, 8512270052, miel9299
 Fabian Johansson,
 */
var myObject = {
    prototypeList: [],

    call: function(funkName,parameters) {
    },

    create: function(listOfParents) {
    //Return new object
       return {
            prototypeList : [listOfParents],
           __proto__:this,




    }


    }
}


