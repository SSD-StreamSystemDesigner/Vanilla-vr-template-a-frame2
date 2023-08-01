AFRAME.registerComponent('blood', {

    schema: {
      blood_type: {type:"string", default:"0-type"}, 
      oxygen_level:{type:"string", default:"normal"} 
    },

    init: function () {
      console.log(this.data.oxygen_level + " " + this.data.blood_type)
      console.log(this.el)
      let Julian = document.querySelector("#Julian")
      console.log(Julian)  

      let data = this.data
    

      //adding event listener
      this.el.addEventListener("click", (e)=>{ 

        //get component that we want to change
        let oldPosition = e.srcElement.getAttribute("position")
        console.log(oldPosition)

        let newY = oldPosition.y + 0.2

        e.srcElement.setAttribute("position", "0 "+ newY +" -3")

      })
    },

    tick: function() {
        this.el.getObject3D("mesh").rotation.y += 0.01
    }

});