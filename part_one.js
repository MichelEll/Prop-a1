/**
 Michel Mottet Ellnefjärd, 8512270052, miel9299
 Fabian Johansson,
 */
var myObject = {
    prototypeList: [],

    create: function(listOfParents) {
    //skapa ny funktion för
       return {
            prototypeList : [listOfParents],
                //prototypeList.push(newObject);
           __proto__:this,
             call: function(funkName,parameters) {
        }



    }


    }
}


