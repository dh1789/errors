/**
 * Created by dh1789 on 2017. 3. 3..
 */
Errors = {
    collection: new Mongo.Collection(null),

    throw: function(message) {
        Errors.collection.insert({message: message, seen: false})
    },

    clearSeen: function(){
        Errors.collection.remove({seen:true});
    }
};
