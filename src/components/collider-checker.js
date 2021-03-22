import '../components/gtlf-morph.js'
var entered="none"
var morph_Object = null;
AFRAME.registerComponent('collider-checker', {
    dependencies: ['raycaster="objects: [data-raycastable]"'],
    init: function () {
        if(document.querySelector('#morph') != null) {
            morph_Object = document.querySelector('#morph')
        }
        this.el.addEventListener('raycaster-intersected', function (evt) {
            entered=this.getAttribute("id");
            console.log(entered);
            if(entered==="1"){
                AFRAME.utils.entity.setComponentProperty(morph_Object,'gltf-morph.value',"0");
            }else if(entered==="2"){
                // AFRAME.utils.entity.setComponentProperty(morph_Object,'gltf-morph__abstract.value',"1");
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