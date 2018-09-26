new Vue({
    el: "#app",
    data: {
        lists: "",
    },
    mounted:function(){
        //发送get请求
        this.$http.get('json/json.json').then(function(res){
            console.log(res.body);
            this.lists = res.body;

        },function(){
            console.log('请求失败处理');
        });
    },
    methods: {
        onclick: function(i,a){
            var ib = this.lists[i][a].bool = !this.lists[i][a].bool;
            console.log(this.lists[i][a].bool);
            console.log(i,a)
        },
    }
})
