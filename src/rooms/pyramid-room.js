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

/*const c1 = document.createElement("a-cylinder")
c1.setAttribute("position",{x: 15, y:0, z:10})
c1.setAttribute("height",0.5)
c1.setAttribute("radius",1)
c1.setAttribute("id","1")
c1.setAttribute("color","#d1d1d1")
c1.setAttribute("proximity-event","")
c1.setAttribute("collider-checker","")
c1.setAttribute("material",{shader: "flat"})
APP.scene.appendChild(c1);
c1.appendChild(entity)


const c2 = document.createElement("a-cylinder")
c2.setAttribute("id","2")
c2.setAttribute("position",{x: 9, y:0, z:10})
c2.setAttribute("height",0.5)
c2.setAttribute("radius",1)
c2.setAttribute("color","#a1a1a1")
c2.setAttribute("material",{shader: "flat"})
c2.setAttribute("proximity-event","")
c2.setAttribute("collider-checker","")
APP.scene.appendChild(c2);

const c3 = document.createElement("a-cylinder")
c3.setAttribute("position",{x: 3, y:0, z:10})
c3.setAttribute("height",0.5)
c3.setAttribute("radius",1)
c3.setAttribute("color","#7a7a7a")
c3.setAttribute("material",{shader: "flat"})
c3.setAttribute("proximity-event","")
c3.setAttribute("collider-checker","")
c3.setAttribute("id","3")
APP.scene.appendChild(c3);

const c4 = document.createElement("a-cylinder")
c4.setAttribute("position",{x: -3, y:0, z:10})
c4.setAttribute("height",0.5)
c4.setAttribute("radius",1)
c4.setAttribute("color","#545454")
c4.setAttribute("material",{shader: "flat"})
c4.setAttribute("proximity-event","")
c4.setAttribute("collider-checker","")
c4.setAttribute("id","4")
APP.scene.appendChild(c4);

const c5 = document.createElement("a-cylinder")
c5.setAttribute("position",{x: -9, y:0, z:10})
c5.setAttribute("height",0.5)
c5.setAttribute("radius",1)
c5.setAttribute("color","#333333")
c5.setAttribute("material",{shader: "flat"})
c5.setAttribute("proximity-event","")
c5.setAttribute("collider-checker","")
c5.setAttribute("id","5")
APP.scene.appendChild(c5);

const c6 = document.createElement("a-cylinder")
c6.setAttribute("position",{x:-15, y:0, z:10})
c6.setAttribute("height",0.5)
c6.setAttribute("radius",1)
c6.setAttribute("color","#1a1a1a")
c6.setAttribute("material",{shader: "flat"})
c6.setAttribute("proximity-event","")
c6.setAttribute("collider-checker","")
c6.setAttribute("id","6")
APP.scene.appendChild(c6);*/
