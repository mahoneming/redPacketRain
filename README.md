# RedPacketRain

 ## 这是一款H5抢红包小游戏
 #### 没有依赖任何第三方库，纯原生JS编写
 #### [点击链接查看效果,使用chrome 手机模式](https://mahoneming.github.io/redPacketRain/index.html).

# Import using script tag

```HTML
<script type="text/javascript" src="./js/rain.js"></script>
<script type="text/javascript" src="./js/rainPage.js"></script>
```

# 使用手机扫码查看效果

<img src="https://mahoneming.github.io/redPacketRain/QRCode.png" width = "50%" height = "50%" alt="QR Code" />

# 主要方法

| Methods | Options |
| ---- | ----|
| rain.create() |  id(红包ID), amount(红包的金额) |
| rain.start()  |  data(ajax请求返回的数据) |
| rain.stop()   |  无需传参|
| rain.move()   |  rains（红包数组）|
| rain.clear()  |  无需传参 |
| rain.ajax()   |  类似jQuery中的$.ajax |
    
# License
MIT