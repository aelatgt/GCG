import '../components/gltf-morph.js'
import '../components/update-morph.js'

const assests  = document.createElement("a-assests")
assests.setAttribute("timeout", "3000")
APP.scene.appendChild(assests)
const morphAsset = document.createElement("a-asset-item")
morphAsset.setAttribute("src", "https://www.aelatgt.org/GCG/src/entities/morphModel.glb")
morphAsset.setAttribute("id", "morphAsset")
assests.appendChild(morphAsset);

var pov = document.querySelector('#avatar-pov-node')

//model that morphs; default value is abstract(sphere)
var morph = document.createElement("a-entity")
morph.setAttribute("gltf-model", "#morphAsset")
morph.setAttribute("id", "morph")
morph.setAttribute("gltf-morph__realistic","morphtarget:realistic; value:0")
morph.setAttribute("gltf-morph__text","morphtarget:text_Face; value:0")
morph.setAttribute("position",{x: 0.05, y:-0.25, z:-1.25})
morph.setAttribute("rotation","0 180 0")
morph.setAttribute("loaded","")
morph.object3D.scale.set(0.18, 0.18, 0.18);
pov.appendChild(morph)

//object to add update-morph componenet
var sphere= document.createElement("a-sphere")
sphere.setAttribute("update-morph","")
sphere.setAttribute("material","opacity: 0.0; transparent: true")
APP.scene.appendChild(sphere)
