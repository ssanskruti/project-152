AFRAME.registerComponent("click",{
    schema:{
        rotateY:{type:"number",default:1},
        rotation:{type:"number",default:0},
        position:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(y)=>{
            this.data.rotation=this.el.getAttribute("rotation")
            this.data.position=this.el.getAttribute("position")
            var pos=this.data.position
            var rot=this.data.rotation

            if(y.key==="ArrowRight"){
                rot.y+=1
                this.el.setAttribute("rotation",rot)
            }
            if(y.key==="ArrowLeft"){
                rot.y-=1
                this.el.setAttribute("rotation",rot)   
            }
        })
    }
})
