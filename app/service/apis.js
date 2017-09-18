import {get, post} from '../util/request'

// let rootPath = `http://malldev.goodsogood.com`
let rootPath = `https://cnodejs.org`

export function buildParams(obj) {
  let result = [];
    for(var key in obj){
      result.push(`${key}=${obj[key]}`)
    }
    return result.join('&')
}

export function getHomeList(page, limit, tab){
  // const path = `${rootPath}/app/commodity/recommendList?openId=f0a9c82b1f07ea88f52d5b314be037f0`;
  const path = `${rootPath}/api/v1/topics?` + buildParams({ limit, page, tab});
  console.log(`${path}`)
  return get(path)
}

export function getDetail(id){
  const path = `${rootPath}`;
  return get(path, buildParams(id))
}

export function login(accesstoken){
  const path = `${rootPath}/accesstoken${buildParams(accesstoken)}`;
  return get(path)
}