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


