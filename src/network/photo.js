import {request} from './request'

export function getPhotoinfo(phoId){
  return request({
    url:'/api/getphodetail',
    params:{
      phoId
    }
  })
}


export function getPhotocomment(phoId){
  return request({
    url:'/api/getphocom',
    params:{
      phoId
    }
  })
}