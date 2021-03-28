import '../components/gltf-morph.js'
var entered="none"
AFRAME.registerComponent('collider-checker', {
    init: function () {
        var morph_Object = document.querySelector('#morph');
        this.el.addEventListener('bump', function (evt) {
            entered=this.getAttribute("id");
            console.log(entered);
            if(entered==="1"){
                AFRAME.utils.entity.setComponentProperty(morph_Object,'gltf-morph.value',"0");
            }else if(entered==="2"){
                AFRAME.utils.entity.setComponentProperty(morph_Object,'gltf-morph.value',"0.2");
            }else if(entered==="3"){
                AFRAME.utils.entity.setComponentProperty(morph_Object,'gltf-morph.value',"0.4");
            }else if(entered==="4"){
                AFRAME.utils.entity.setComponentProperty(morph_Object,'gltf-morph.value',"0.6");
            }else if(entered==="5"){
                AFRAME.utils.entity.setComponentProperty(morph_Object,'gltf-morph.value',"0.8");
            }else if(entered==="6"){
                AFRAME.utils.entity.setComponentProperty(morph_Object,'gltf-morph.value',"1");
            }
        });
    },
});