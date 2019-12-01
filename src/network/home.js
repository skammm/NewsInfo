import {request} from './request'
export function getHomedata(){
  return request({
    url:'/api/getcover'
  })
}


export function getNewslist(pageIdx){
  return request({
    url:'/api/getnews',
    params:{
      pageIdx
    }
  })
}

export function getNewsinfo(newsId){
  return request({
    url:'/api/getnewsdetail',
    params:{
      newsId
    }

  })
}

export function getNewscomment(newsId,pageIdx){
  return request({
    url:'/api/getnewscom',
  params:{
    newsId,
    pageIdx
  }
  })
}


export function getNewstypes(){
  return request({
    url:'/api/getphotypes',
  })
}

export function getNewspic(pageIdx,type){
  return request({
    url:'/api/getpho',
    params:{
      pageIdx,
      type
    }
  })
}