/**
 * Emit an event of your choosing when the player is within a given
 * radius of the entity
 */

var vec = new THREE.Vector3() // Scratch variable
var abstract = new THREE.Vector3(0, 0, -17)
var text = new THREE.Vector3(-15, 0, 9)
var reality = new THREE.Vector3(15, 0, 9)
var morphModel;
var x;
var z;
var path = null;
AFRAME.registerComponent('update-morph', {
  schema: {
  },
  init: function () {
    this.player = document.querySelector('#avatar-rig').object3D;
    morphModel = document.querySelector('#morph');
  },
  log : function () {
    console.log("pos:"+this.player.position.x.toFixed(2)+ " "+this.player.position.z.toFixed(2))
  },

  tick: function () {
    x = this.player.position.x
    z = this.player.position.z

    //morphing between abstract and text
    if (x > 0 && z < (217 * x / 375) + (17 / 50) && z >= -17){
      path = "abstract and text"
      AFRAME.utils.entity.setComponentProperty(morphModel, "gltf-morph__text.value","0")
      AFRAME.utils.entity.setComponentProperty(morphModel, "gltf-morph__real.value","" + (abstract.distanceTo(this.player.position)/30))
    //morphing between abstract and reality
    } else if (x <= 0 && z < (-217 * x / 375) + (17 / 50) && z >= -17) {
      path = "abstract and reality"
      AFRAME.utils.entity.setComponentProperty(morphModel, "gltf-morph__real.value","0")
      AFRAME.utils.entity.setComponentProperty(morphModel, "gltf-morph__text.value","" + (abstract.distanceTo(this.player.position)/30))
    //morphing between reality and text
    } else if (z > -17) {
      path = "reality and text"
      AFRAME.utils.entity.setComponentProperty(morphModel, "gltf-morph__real.value","" + (text.distanceTo(this.player.position)/30))
      AFRAME.utils.entity.setComponentProperty(morphModel, "gltf-morph__text.value","" + (1 - text.distanceTo(this.player.position)/30))
    }
  },
})
