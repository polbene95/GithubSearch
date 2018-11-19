var app = new Vue({
    el: "#app",
    data: {
        data: {},
        repos: [],
        firstCall: false,
    },
    methods: {
        getData: function (url) {
            fetch("https://api.github.com/users/" + url)
                .then(response => response.json())
                .then(data => {
                    app.data = data;
                    //console.log(data);
                    app.firstCall = true;
                })
                .catch(error => {
                    //console.log(error);
                })
        },
        getRepoData: function (url) {
            fetch("https://api.github.com/users/" + url + "/repos")
                .then(response => response.json())
                .then(data => {
                    app.repos = data;
                    //console.log(data);
                })
                .catch(error => {
                    //console.log(error)
                })
        },
        getUser: function () {
            var input = document.getElementById("search");
            var value = input.value;
            this.getData(value);
            this.getRepoData(value);
        }
    }
});
