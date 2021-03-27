
AFRAME.registerComponent('add-morph-object', {
    init:function() {
        const loader = new THREE.GLTFLoader();
        // Load a glTF resource
        loader.load('https://dc42b8c78030.ngrok.io/entities/R-A.glb',
            // called when the resource is loaded
            function ( gltf ) {
                scene.add( gltf );
                // gltf.animations; // Array<THREE.AnimationClip>
                // gltf.scene; // THREE.Group
                // gltf.scenes; // Array<THREE.Group>
                // gltf.cameras; // Array<THREE.Camera>
                // gltf.asset; // Object

            },
            // called while loading is progressing
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            // called when loading has errors
            function ( error ) {

                console.log( 'An error happened' );

            }
        );
        }
  })