/**
 * Created by dh1789 on 2017. 3. 3..
 */

Template.meteorErrors.helpers({
    errors: function(){
        return Errors.collection.find();
    }
});

Template.meteorError.rendered = function() {
    var error = this.data;
    Meteor.defer(function() {
        Errors.collection.update(error._id, {$set:{seen:true}});
    });
};
