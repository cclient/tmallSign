### 天猫淘宝api请求签名算法服务

### 该项目简单封装了从天猫淘宝，前端web页面提取的签名算法，因数据抓取服务不全是由js实现，为方便应用，封装为web服务，供其他语言项目调用

### 天猫淘宝的接口访问方式为 http jsonp api，调用时需对请求作签名

#### 示例

```js

function test() {
    // s = a(n.token + "&" + i + "&" + r + "&" + t.data)
    var token = "36cf6e2437097843b0c2671005d480aa"
    var i = '1478745430781'
    var r = '12574478'
    var data = '{"app":"tlive","sourceId":"900acac6-0d83-4b8a-9d26-dca8e9336ca9","type":1,"timeStamp":1477488912630,"id":"200216664"}'
    var s = sign(token + "&" + i + "&" + r + "&" + data)
// s=50985d6f8f00c9cbb2fb7c5a98f3008a
    var tt = 'e7648eaf00c07e744ffe27e1ae37db5f_1478764995915&1478763990723&12574478&{"app":"tlive","sourceId":"900acac6-0d83-4b8a-9d26-dca8e9336ca9","type":1,"direction":0,"timeStamp":1477485240775,"id":199720496,"count":20,"includeCommentCount":true}'
    var aa = '7e666c912e7a55abe5010f804722d5a5&1478748652065&12574478&{"app":"tlive","sourceId":"900acac6-0d83-4b8a-9d26-dca8e9336ca9","type":1,"timeStamp":1477484451253,"id":"199686181"}'
    var ss = sign(aa)
    console.log(ss)
// 22ed6f6eaa5334f70b3a9ac66e1b33f6
    '7e666c912e7a55abe5010f804722d5a5&1478756923699&12574478&{"app":"tlive","sourceId":"900acac6-0d83-4b8a-9d26-dca8e9336ca9","type":1,"timeStamp":1477485727641,"id":"199770637"}'
}

```

