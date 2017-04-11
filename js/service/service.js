app.factory('service', service);

service.$inject = ["$firebaseArray", "$firebaseObject", "$firebaseAuth"];

function service($firebaseArray, $firebaseObject, $firebaseAuth) {
    var auth = $firebaseAuth();
    var ref = firebase.database().ref();
    var lists = $firebaseArray(ref);
    var email = "";
    var service = {
        getList: getList,
        removeList: removeList,
        add: addList,
        update: updateList,
        getById: getById,
        SignIn: SignIn,
        setEmail: setEmail,
        getEmail: getEmail,
        logout: logout
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
    function SignIn(data) {
        return auth.$signInWithEmailAndPassword(data.email, data.password);
    }
    function setEmail(em) {
        email = em;
    }
    function getEmail() {
        return email;
    }
    function logout() {
      return auth.$signOut();
    }

}
