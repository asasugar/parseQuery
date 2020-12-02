# parseQuery
实现转化url参数和json互相转化


## url参数转化为json
```js
    const url = "https://www.baidu.com?a=123&b=456";
    const parse = new ParseQuery({ url });
    const r = parse.parse();
    console.log(r); // { url: 'https://www.baidu.com', json: { a: 123, b: 456}}
```


## url地址、json转化为get地址
```js
    const url = "https://www.baidu.com";
    const json = { a: 123, b: 456};
    const parse = new ParseQuery({ url ,json});
    const r = parse.parse();
    console.log(r); // https://www.baidu.com?a=123&b=456
```