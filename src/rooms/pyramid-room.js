import '../components/collider-checker.js'
import '../components/gltf-morph.js'
import '../components/proximity-event.js'

AFRAME.registerComponent('loaded', {
    init: function () {
      // This will be called after the entity has properly attached and loaded.
      console.log('I am ready!');
      //camera.add(morph.object3DMap)
    }
  });

const assests  = document.createElement("a-assests")
assests.setAttribute("timeout", "3000")
APP.scene.appendChild(assests)
const morphAsset = document.createElement("a-asset-item")
// morphAsset.setAttribute("src", "../entities/R-A.glb")
morphAsset.setAttribute("src", "https://bd556d89af2c.ngrok.io/entities/R-A.glb")
morphAsset.setAttribute("id", "morphAsset")
assests.appendChild(morphAsset);

var player = document.querySelector('#avatar-rig')
var camera = document.querySelector('#viewing-camera')

var morph = document.createElement("a-entity")
morph.setAttribute("gltf-model", "#morphAsset")
morph.setAttribute("id", "morph")
morph.setAttribute("gltf-morph","morphtarget:1; value:0")
morph.setAttribute("position",{x: 0.5, y:1.75, z:-1})
morph.setAttribute("rotation","0 -90 0")
morph.setAttribute("loaded","")
morph.object3D.scale.set(0.1, 0.1, 0.1);
//player.appendChild(morph)
camera.appendChild(morph)

const entity = document.createElement('a-box')
entity.setAttribute('material', { color: 'red' })
entity.setAttribute("position",{x: 0.5, y:2, z:2})

for(var i =0; i <6; i++){
    var c1 = document.createElement("a-cylinder")
    c1.setAttribute("position",{x: 15-(3*i), y:0, z:10})
    c1.setAttribute("height",0.5)
    c1.setAttribute("radius",1)
    c1.setAttribute("id",i+1+"")
    c1.setAttribute("color","#"+(111*(i+4)))
    c1.setAttribute("proximity-event","")
    c1.setAttribute("collider-checker","")
    c1.setAttribute("material",{shader: "flat"})
    APP.scene.appendChild(c1);
    if(i == 0){
        c1.appendChild(entity)
    }
}
