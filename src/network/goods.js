import {request} from './request'

export function getGoodsInfo(pageIdx){
  return request({
    url:'/api/getgod',
    params:{
      pageIdx
    }
  })
}

export function getGoodsDetail(godId){
  return request({
    url:'/api/getgoddetail',
    params:{
      godId
    }
  })
}