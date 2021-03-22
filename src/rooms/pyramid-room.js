import '../components/collider-checker.js'
import '../components/gtlf-morph.js'
import '../components/normal-material.js'
// Create your A-Frame entity

AFRAME.registerComponent('morph-model', {
    init: function () {
    //   this.el.setAttribute("id", "morph");

    //   c1.setAttribute("collider-checker","")
    //   c2.setAttribute("collider-checker","")
    //   c3.setAttribute("collider-checker","")
    //   c4.setAttribute("collider-checker","")
    //   c5.setAttribute("collider-checker","")
    //   c6.setAttribute("collider-checker","")
    const c = document.createElement("a-cylinder")
    c.setAttribute("position",{x: 0, y:-0.5, z:3})
      console.log("letsgoo")
      this.el.setAttribute('normal-material', '')

    },
})
  
AFRAME.GLTFModelPlus.registerComponent('morph-model', 'morph-model')

// const morph = document.createElement("a-entity")
// morph.setAttribute("id", "morph")
// // morph.setAttribute("rotation", " 0 -90 0")
// morph.setAttribute("position", { x: 0, y: 2, z: 0 })
// morph.setAttribute("gtlf-model", "../entities/R_A.glb")
// // morph.setAttribute("gtlf-morph", {morphtarger:1, value:1})
// APP.scene.appendChild(morph);

const c1 = document.createElement("a-cylinder")
c1.setAttribute("id","1")
c1.setAttribute("position",{x: 8, y:-0.5, z:0})
c1.setAttribute("class", "collidable")
c1.setAttribute("height",10)
c1.setAttribute("radius",1)
c1.setAttribute("material",{opacity: 0.8})
// c1.setAttribute("collider-checker","")

APP.scene.appendChild(c1);

const c12 = document.createElement("a-cylinder")
c12.setAttribute("position",{x: 8, y:-0.5, z:0})
c12.setAttribute("height",1.2)
c12.setAttribute("radius",1)
c12.setAttribute("color","#d1d1d1")
c12.setAttribute("material",{shader: "flat"})
APP.scene.appendChild(c12);

const c2 = document.createElement("a-cylinder")
c1.setAttribute("id","2")
c2.setAttribute("position",{x: 6, y:-0.5, z:0})
c2.setAttribute("class", "collidable")
c2.setAttribute("height",10)
c2.setAttribute("radius",1)
c2.setAttribute("material",{opacity: 0.8})
// c2.setAttribute("collider-checker","")
APP.scene.appendChild(c2);

const c22 = document.createElement("a-cylinder")
c22.setAttribute("position",{x: 6, y:-0.5, z:0})
c22.setAttribute("height",1.2)
c22.setAttribute("radius",1)
c22.setAttribute("color","#a1a1a1")
c22.setAttribute("material",{shader: "flat"})
APP.scene.appendChild(c22);

const c3 = document.createElement("a-cylinder")
c3.setAttribute("id","3")
c3.setAttribute("position",{x: 4, y:-0.5, z:0})
c3.setAttribute("class", "collidable")
c3.setAttribute("height",10)
c3.setAttribute("radius",1)
c3.setAttribute("material",{opacity: 0.8})
// c3.setAttribute("collider-checker","")
APP.scene.appendChild(c3);

const c32 = document.createElement("a-cylinder")
c32.setAttribute("position",{x: 4, y:-0.5, z:0})
c32.setAttribute("height",1.2)
c32.setAttribute("radius",1)
c32.setAttribute("color","#7a7a7a")
c32.setAttribute("material",{shader: "flat"})
APP.scene.appendChild(c32);

const c4 = document.createElement("a-cylinder")
c4.setAttribute("id","4")
c4.setAttribute("position",{x: 2, y:-0.5, z:0})
c4.setAttribute("class", "collidable")
c4.setAttribute("height",10)
c4.setAttribute("radius",1)
c4.setAttribute("material",{opacity: 0.8})
// c4.setAttribute("collider-checker","")
APP.scene.appendChild(c4);

const c42 = document.createElement("a-cylinder")
c42.setAttribute("position",{x: 2, y:-0.5, z:0})
c42.setAttribute("height",1.2)
c42.setAttribute("radius",1)
c42.setAttribute("color","#545454")
c42.setAttribute("material",{shader: "flat"})
APP.scene.appendChild(c42);

const c5 = document.createElement("a-cylinder")
c5.setAttribute("id","5")
c5.setAttribute("position",{x: 0, y:-0.5, z:0})
c5.setAttribute("class", "collidable")
c5.setAttribute("height",10)
c5.setAttribute("radius",1)
c5.setAttribute("material",{opacity: 0.8})
// c5.setAttribute("collider-checker","")
APP.scene.appendChild(c5);

const c52 = document.createElement("a-cylinder")
c52.setAttribute("position",{x: 0, y:-0.5, z:0})
c52.setAttribute("height",1.2)
c52.setAttribute("radius",1)
c52.setAttribute("color","#333333")
c52.setAttribute("material",{shader: "flat"})
APP.scene.appendChild(c52);

const c6= document.createElement("a-cylinder")
c6.setAttribute("id","6")
c6.setAttribute("position",{x: -2, y:-0.5, z:0})
c6.setAttribute("class", "collidable")
c6.setAttribute("height",10)
c6.setAttribute("radius",1)
c6.setAttribute("material",{opacity: 0.8})
// c6.setAttribute("collider-checker","")
APP.scene.appendChild(c6);

const c62 = document.createElement("a-cylinder")
c62.setAttribute("position",{x: -2, y:-0.5, z:0})
c62.setAttribute("height",1.2)
c62.setAttribute("radius",1)
c62.setAttribute("color","#1a1a1a")
c62.setAttribute("material",{shader: "flat"})

APP.scene.appendChild(c62);
