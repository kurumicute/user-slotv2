function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
    }

    document.getElementById("d3").onclick = 
    function f(){
        var img = document.getElementById("i");
        var b1 = document.getElementById("b1");
        var user = ['第1個','第2個','第3個','第4個'];
        var name = document.getElementById("t1")
        var a = /^[a-zA-Z()]+$/.test(name.value);
        var b = /^[1-9()]+$/.test(name.value);
        var c = /^[1-9a-zA-Z()]+$/.test(name.value);
        var d = /^[\u4E00-\u9FA5]+$/.test(name.value);
        var e = /^[\u4E00-\u9FA51-9()]+$/.test(name.value);
        var f = /^[\u4E00-\u9FA5a-zA-Z()]+$/.test(name.value);
        var g = /^[\u4E00-\u9FA51-9a-zA-Z()]+$/.test(name.value);
        if (name.value.length == 0){
            document.getElementById("d1").innerHTML ="沒有輸入名字";
        }
        else if (a == true) {
            document.getElementById("d1").innerHTML = "我不信你名字是用英文";
        }
        else if (b == true) {
            document.getElementById("d1").innerHTML = "真•數字人";
        }
        else if (c == true){
            document.getElementById("d1").innerHTML = "我不覺得英文和數字可以組出名字";
        }
        else if (d == true){
            document.getElementById("d1").innerHTML = user.sort(randomsort)[0];
            img.style.visibility= "visible"
            b1.style.visibility= "visible"
            this.disabled=true
        }
        else if (e == true){
            document.getElementById("d1").innerHTML = "ok，數字人";
        }
        else if (f == true){
            document.getElementById("d1").innerHTML = "英文和中文組起來的名子沒有比較帥";
        }
        else if (g == true){
            document.getElementById("d1").innerHTML = "我全都要?";
        }
        else {
            document.getElementById("d1").innerHTML = "我不知道，可能有人名字不會打";
        }
    }
    function imgf(){
        var img = document.getElementById("i");
        var music = new Audio('open.ogg');
        img.style.display = "none";
        music.play();
        this.disabled=true
    }
