    // 定义取ID方法
    var g = function (id) {
        return document.getElementById(id);
    };
    // 倒计时准备工作
    g('mask').style.display = 'block';
    document.getElementsByClassName('header')[0].style.display = 'none';
    // 开场倒计时
    var clockCount = 3,
        clockTimer = setInterval(clockCountDecrease, 1000);
    // 抢红包时间设置
    var count = 20,
        timer
    // 倒计时321函数
    function clockCountDecrease() {
        g('clock').innerText = clockCount;
        clockCount--;
        if (clockCount < 0) {
            clearInterval(clockTimer);
            g('clock').style.display = 'none';
            g('mask').style.display = 'none';
            // 开启红包雨
            document.getElementsByClassName('header')[0].style.display = 'block';
            rain.start(data);
            timer = setInterval(Count, 1000);
        }
    }
    // 开启红包函数
    function Count() {
        g('countDown').innerText = count;
        count--;
        if (count < 0) {
            clearInterval(timer);
            rain.stop();
            rain.clear();
            showPop();
        }
    }
    // 红包设置
    var el = g('box'),
        redCount = 0, // 抢到红包数
        redIdArr = [], // 卡券名
        redAmountArr = [], // 数量
        redList = [], // 卡券列表
        allAmount = 0; // 总价钱（暂未使用）
    var rain = new redPack({
        el: el, // 容器
        //chance: 0.5,  // 几率,暂时不要
        speed: 10, // 速度，越小越快
        density: 200, //  红包密度，越小越多
        callback: function (e) { // 点击红包的回调
            redIdArr.push(e.target.getAttribute('redId'));
            redAmountArr.push(e.target.getAttribute('redAmount'));
            if (e.target.getAttribute('redAmount') !== '0') {
                redCount++;
                // 抢到红包的个数
                g('redCount').innerText = redCount;
                redList.push({
                    type: e.target.getAttribute('redId'),
                    count: e.target.getAttribute('redAmount')
                })
            }
        }
    });
    // 抢完打开弹窗
    function showPop() {
        g('mask').style.display = 'block';
        g('pop').className = 'animated fadeIn'
        g('pop').style.display = 'block';
        var list = [];
        redList.forEach(function (item) {
            if (list.length) {
                for (var i in list) {
                    if (list[i].type == item.type) {
                        list[i].count = (parseInt(list[i].count) + 1).toString();
                        return;
                    }
                }
                list.push({
                    "type": item.type,
                    "count": item.count
                });
            } else {
                list.push({
                    "type": item.type,
                    "count": item.count
                });
            }
        });
        for (var i = 0; i < list.length; i++) {
            var name = document.createElement("div");
            name.className = "list-item-name";
            name.innerText = list[i].type;

            var count = document.createElement("div");
            count.className = "list-item-count";
            count.innerText = `x${list[i].count}`;

            var contain = document.createElement("div");
            contain.className = "list-item animated fadeInUp";
            contain.style.animationDelay = i+"s";
            contain.appendChild(name);
            contain.appendChild(count);

            document.querySelector('.list').appendChild(contain);
        }
        if (!list.length) {
            document.querySelector('.list').innerHTML = '<div style="text-align: center;">暂未抢到红包!</div>'
        }
        // document.querySelectorAll('.list-item').style.opacity = 1;
        // 添加到dom上
        // g('allAmount').innerText = (allAmount).toFixed(2);
    }
    g('closeBtn').addEventListener('click', function () {
        closePop();
    });
    // 关闭弹窗
    function closePop() {
        g('mask').style.display = 'none';
        g('pop').style.display = 'none';
    }