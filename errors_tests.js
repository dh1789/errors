/**
 * Created by dh1789 on 2017. 3. 6..
 */


Tinytest.add("Errors collection works", function(test){
    test.equal(Errors.collection.find({}).count(), 0);

    Errors.throw("A new error!");
    test.equal(Errors.collection.find({}).count(),1);

    Errors.collection.remove({});
});


Tinytest.addAsync("Errors template works", function(test, done){
    Errors.throw("A new error!");
    test.equal(Errors.collection.find({}).count(), 1);

    UI.insert(UI.render(Template.meteorErrors), document.body);

    Meteor.setTimeout(function(){
        Errors.clearSeen();
        test.equal(Errors.collection.find({}).count(), 0);
        done();
    }, 1500);
});