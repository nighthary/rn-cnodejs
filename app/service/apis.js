import {get, post} from '../util/request'

let rootPath = `http://malldev.goodsogood.com`

export function buildParams(obj) {
  let result = [];
    for(var key in obj){
      result.push(`${key}=${obj[key]}`)
    }
    return result.join('&')
}

export function getList(pageNo, pageSize){
  const path = `${rootPath}/app/commodity/recommendList?openId=f0a9c82b1f07ea88f52d5b314be037f0`;
  return post(path, buildParams({ pageSize, pageNo}))
}

export function getDetail(id{
  const path = `${rootPath}`;
  return get(path, buildParams(id))
}
