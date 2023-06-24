AFRAME.registerComponent("rotate",{
    schema:{
        rotateY:{type:"number",default:1}
    },
    tick:function(){
        this.data.rotateY+=0.3

        var rotation=this.el.getAttribute("rotation")
        rotation.y=this.data.rotateY

        this.el.setAttribute("rotation",{x:rotation.x,y:rotation.y,z:rotation.z})
    }
})