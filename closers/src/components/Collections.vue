
<template>
    <div>
        <div v-for="item in img" :key="item.src" class="box">
            <img class="cloImg"  :src="item.src" alt="">            
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script>


export default {
    data(){
        return{
            img: [
                { src : require("./colImg/1.jpg")},
                { src : require("./colImg/2.jpg")},
                { src : require("./colImg/3.jpg")},
                { src : require("./colImg/4.jpg")},
                { src : require("./colImg/5.jpg")},
                { src : require("./colImg/6.jpg")},
                { src : require("./colImg/7.jpg")},
                { src : require("./colImg/8.jpg")},
                { src : require("./colImg/9.jpg")},

            ],
        }
    },
    methods:{
        
        waterFall(){
            var that = this;
            that.$(document).ready(function(){
                let img = that.$('.cloImg');
                let imgWidth = img.width();
                let screenWidth = that.$(window).width();
                let cols = parseInt(screenWidth/(imgWidth+(screenWidth*0.03)));
                let heightArr = [];

                that.$.each(img,function(index,item){
                    if(index < cols){
                        heightArr[index] = that.$(item).height()+10;
                    }else{
                        let min = Math.min(...heightArr);
                        let minImgIndex = that.$.inArray(min,heightArr)
                        that.$(item).css({
                            position : "absolute",
                            left :minImgIndex*(28+3)+3+"%",
                            top : min+40 +'px',
                        })
                        
                        heightArr[minImgIndex] += that.$(item).height()+10;
                    }
                })
                that.$(".bottom").css({
                    top : Math.max(...heightArr),
                })
            });
        
        },

        load(){
            // let that = this;
            // this.$.ajax({
            //     url:"http://localhost:8080/collection.txt",
            //     dataType : "json",
            //     success(arr){
                    
            //         for(let i=0 ; i < arr.src.length;i++){
            //             let imgArr = {src : require (arr.src[i]+'')}
            //             that.img.unshift(imgArr)
            //         }
            //     },error(err){
            //         console.log("失败了"+err)
            //     }
            // })

            this.axios.get("/collection.txt").then(arr=>{
                for(let i=0 ; i < arr.data.src.length;i++){
                    let imgArr = { src : require (arr.data.src[i]+'') }
                    this.img.unshift(imgArr)
                }
            }).catch(function(err){
                    console.log(err)
            })
            this.waterFall()
        }
    },
    beforeMount: function(){
        this.load()
    }
    ,
    mounted: function(){
        setTimeout(() => {
            this.waterFall()
        }, 100);
            
        
       
    },
    
}
</script>
<style  scoped>
    .box{
        margin-left: 3%;
        height: auto;
        width: 100%;
    }
    .cloImg{
        width: 28%;
        float: left;
        margin:5px 3% 0 0;
        box-shadow: 1px 1px 1px rgba(0,0,0,.2);
        -moz-box-shadow: 1px 1px 1px rgba(0,0,0,.2);
        -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,.2);
    }
    .cloImg:hover{
        box-shadow: 0 0 0 1px #666,
                    0 0 0 2px white,
                    3px 3px #666,
                    -3px -3px #666;

    }
    .bottom{
        width: 100%;
        height: 100px;
        position: absolute;
    }
</style>