
declare type Json = {
  [key: string]: string
}
export default class ParseQuery {
  url: string;
  json: Json;
  constructor({
    url = '',
    json = {}
  }) {
    this.url = url;
    this.json = json;
  }
  parse (): string | object {
    if (!this.url) throw new Error("url不能为空");

    if (Object.keys(this.json).length) {
      return this.json2query()
    }
    return this.query2json()
  }
  query2json (): object {
    let json: Json = {};
    let urlArr: string[] = this.url.split('?');
    // 说明有参数
    if (urlArr.length > 1) {
      let queryArr = urlArr[1].split('&');
      for (let i = 0; i < queryArr.length; i++) {
        let arrItem = queryArr[i];
        let item = arrItem.split('=');
        json[item[0]] = item[1]
      }
    }
    return {
      url: urlArr[0],
      json
    }
  }
  json2query (): string {
    let str = ''
    for (let i in this.json) {
      let oneIs = !str ? '?' : '&';
      str += `${oneIs}${i}=${this.json[i]}`;
    }
    return str
  }
}