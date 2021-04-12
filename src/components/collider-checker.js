import '../components/gltf-morph.js'
AFRAME.registerComponent('collider-checker', {
    init: function () {
        var entered="none"
        var morphTarget;
        var oldTarget;
        var step;
        var morph = document.querySelector('#morph')
        this.el.addEventListener('bump', function (evt) {
            entered=this.getAttribute("id")
            // console.log(entered)
            step = entered.substring(1);
            entered = entered.charAt(0);
            if (entered == 'a'){
                //red: abstract to face
                morphTarget = "gltf-morph__realistic"
                oldTarget = null
                AFRAME.utils.entity.setComponentProperty(morph, "gltf-morph__text.value","0")
            } else if (entered == 'b'){
                //green: text to abstract
                morphTarget = null
                oldTarget = "gltf-morph__text"
                AFRAME.utils.entity.setComponentProperty(morph, "gltf-morph__realistic.value","0")
            } else if (entered == 'c'){
                //blue: face to text
                morphTarget = "gltf-morph__text"
                oldTarget = "gltf-morph__realistic"
                AFRAME.utils.entity.setComponentProperty(morph, "gltf-morph__realistic.value","0")
            }
            if (morphTarget != null){
                if(step == 15){
                    AFRAME.utils.entity.setComponentProperty(morph, morphTarget + ".value","1")
                } else {
                    AFRAME.utils.entity.setComponentProperty(morph, morphTarget + ".value","" + parseInt(step) * 0.066667)
                }
            }
            if (oldTarget != null){
                if (step == 15){
                    AFRAME.utils.entity.setComponentProperty(morph, morphTarget + ".value","0")
                } else {
                    AFRAME.utils.entity.setComponentProperty(morph, oldTarget + ".value",""+1 - (parseInt(step) * 0.066667))
                }
            }
        });
    },
});