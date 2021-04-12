import '../components/collider-checker.js'
import '../components/gltf-morph.js'
import '../components/proximity-event.js'

const assests  = document.createElement("a-assests")
assests.setAttribute("timeout", "3000")
APP.scene.appendChild(assests)
const morphAsset = document.createElement("a-asset-item")
morphAsset.setAttribute("src", "https://www.aelatgt.org/GCG/src/entities/morphModel.glb")
morphAsset.setAttribute("id", "morphAsset")
assests.appendChild(morphAsset);

var pov = document.querySelector('#avatar-pov-node')

//default = abstract
var morph = document.createElement("a-entity")
morph.setAttribute("gltf-model", "#morphAsset")
morph.setAttribute("id", "morph")
morph.setAttribute("gltf-morph__realistic","morphtarget:realistic; value:0")
morph.setAttribute("gltf-morph__text","morphtarget:text_Face; value:0")
morph.setAttribute("position",{x: 0.2, y:-0.25, z:-1.25})
morph.setAttribute("rotation","0 180 0")
morph.setAttribute("loaded","")
morph.object3D.scale.set(0.18, 0.18, 0.18);
pov.appendChild(morph)


//reality to abstract
for(var i =0; i < 16; i++){
    var c1 = document.createElement("a-box")
    c1.setAttribute("position",{x: -11 + (1.5*i), y:0, z:8})
    c1.setAttribute("height",0.5)
    c1.setAttribute("depth", 5)
    c1.setAttribute("width",1)
    c1.setAttribute("id","a" +(i))
    c1.setAttribute("color",'red')
    c1.setAttribute("proximity-event","")
    c1.setAttribute("collider-checker","")
    c1.setAttribute("material",{shader: "flat"})
    //c1.setAttribute("material","opacity: 0.0; transparent: true")
    APP.scene.appendChild(c1);
}

// //abstract to text 
for(var i =0; i < 16; i++){
    var c1 = document.createElement("a-box")
    c1.setAttribute("position",{x: -2 - (0.75*i), y:0, z: -14 +(1.25*i)})
    c1.setAttribute("rotation",{x: 0, y:-120, z:0})
    c1.setAttribute("height",0.5)
    c1.setAttribute("depth", 5)
    c1.setAttribute("width",1)
    c1.setAttribute("id","b" + (i))
    c1.setAttribute("color",'green')
    c1.setAttribute("proximity-event","")
    c1.setAttribute("collider-checker","")
    c1.setAttribute("material",{shader: "flat"})
    //c1.setAttribute("material","opacity: 0.0; transparent: true")
    APP.scene.appendChild(c1);
}

//text to reality
for(var i =0; i < 16; i++){
    var c1 = document.createElement("a-box")
    c1.setAttribute("position",{x: 13-(0.75*i), y:0, z:5-(1.25*i)})
    c1.setAttribute("rotation",{x: 0, y:-60, z:0})
    c1.setAttribute("height",0.5)
    c1.setAttribute("depth", 5)
    c1.setAttribute("width",1)
    c1.setAttribute("id","c" + (i))
    c1.setAttribute("color",'blue')
    c1.setAttribute("proximity-event","")
    c1.setAttribute("collider-checker","")
    c1.setAttribute("material",{shader: "flat"})
    //c1.setAttribute("material","opacity: 0.0; transparent: true")
    APP.scene.appendChild(c1);
}
