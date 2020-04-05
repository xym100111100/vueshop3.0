import echo from '../libs/echo'

function lazyImg() {
   echo.init({
      offset: 100,//可是区域多少像素可以被加载
      throttle: 0 //设置图片延迟加载的时间
   });
}
// 这样是导出一个对象，使用的时候用.lazyImg()
export default {
   lazyImg
}

// 这样是导出一个方法，使用的时候用直接()
// export default  lazyImg；