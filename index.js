//https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBd_iePMG5xevaGfJk_x_cQiRw1Wt5MgrA&part=snippet&chart=mostPopular&maxResult=1&regionCode=IN
const videoContainer=document.querySelector('.video-container') 

async function youtube(video_data){
    var res=await fetch('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBd_iePMG5xevaGfJk_x_cQiRw1Wt5MgrA&part=snippet&chart=mostPopular&maxResult=1&regionCode=IN')
    var res1=await res.json()
    console.log(res1);
}
   //  .then((res1)=>{
   //    video_data.channelThumbnail=res1.items[0].snippet.thumbnails.default.
   //  })
   





//   var out=document.querySelector('.video-container')
//   out.innerHTML=<div class="video" onclic="location.href='https://youtube.com/watch?v=${res1.id}">
//      <img src="${res1.item[0.]snippet.thumbnails.default.url}" class="channel-icon">
//     <div class="content">
//          <img src="${res1.channelThumbnail}"  class="chennel-icon"alt="">
//          <div class="info">
//             <h4 class="title">${res1.snippet.title}</h4>
//               <p class="channel-name">${res1.snippet.channelTitle}</p>
//         </div> 
//      </div>
//    </div>
//    document.body.append(out)
// }

var output=youtube();

// const makeVideoCard=(res1)=>{
//    videoContainer.innerHTML =`<div class="video" onclic="location.href='https://youtube.com/watch?v=${res1.id}">
//    <img src="${res1.snippet.thumbnails.high.url}" class="thumbnail"alt="" srcset="">
//    <div class="content">
//        <img src="${res1.channelThumbnail}"  class="chennel-icon"alt="">
//        <div class="info">
//            <h4 class="title">${res1.snippet.title}</h4>
//            <p class="channel-name">${res1.snippet.channelTitle}</p>
//        </div> 
//    </div>
// </div>`

// }