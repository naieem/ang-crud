app.factory('service', service);

service.$inject = ["$firebaseArray", "$firebaseObject"];

function service($firebaseArray, $firebaseObject) {
    var ref = firebase.database().ref().child("products");
    var lists = $firebaseArray(ref);
    var service = {
        getList: getList,
        removeList: removeList,
        add: addList,
        update: updateList,
        getById: getById
    };
    return service;

    ////////////

    function getList() {
        return $firebaseArray(ref);
    };

    function removeList(id) {
        var obj = ref.child(id);
        var listobj = $firebaseObject(obj);
        return listobj.$remove();
    };
    function addList(data) {
        return lists.$add(data);
    };
    function updateList(data) {
        return data.$save();
    };
    function getById(id) {
        var obj = ref.child(id);
        return $firebaseObject(obj);
    }
}
