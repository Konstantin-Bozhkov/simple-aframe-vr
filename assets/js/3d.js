(function(){
    AFRAME.registerComponent("foo", {
        init: function() {
          let anim = document.querySelector("a-animation")
    
          this.el.addEventListener("click", (e) => {
            console.log("hello")
            this.el.emit("bar")
            anim.emit("fallclick")
          })
    
        }
    })
    
    
    window.addEventListener("wheel", event => {
        const delta = Math.sign(event.wheelDelta);
        //getting the mouse wheel change (120 or -120 and normalizing it to 1 or -1)
        var mycam=document.getElementById('cam').getAttribute('camera');
        var finalZoom=document.getElementById('cam').getAttribute('camera').zoom+delta;
    
        console.log(document.getElementById('cam').getAttribute('camera'))
        //limiting the zoom so it doesnt zoom too much in or out
        if(finalZoom<1) finalZoom=1;
        if(finalZoom>10) finalZoom=10;  
        mycam.zoom=finalZoom;
        //setting the camera element
        document.getElementById('cam').setAttribute('camera',mycam);
    });  
}())