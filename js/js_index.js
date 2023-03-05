var table = new Vue({
    el: '#table',
    data: {
        index: 0,
    },
    methods: {
        toclick: function() {
            var index = this.index;
            console.log(index);
        }
    }
})
