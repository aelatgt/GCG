/**
 * Emit an event of your choosing when the player is within a given
 * radius of the entity
 */

var vec = new THREE.Vector3() // Scratch variable
var playerCollider= new THREE.Box3()
var playerBox = null
var boxCollider = new THREE.Box3()

AFRAME.registerComponent('proximity-event', {
  schema: {
    event: { type: 'string', default: 'bump' },
    // depth: { type: 'number', default: 2.5 },
    // width: { type: 'number', default: 0.5 },
  },
  init: function () {
    boxCollider.setFromObject(this.el.object3D)
    boxCollider.name = AFRAME.utils.entity.getComponentProperty(this.el,"id")
    this.player = document.querySelector('#avatar-rig').object3D;
    document.querySelector('#playerBox').addEventListener('loaded', function () {
      console.log("whooo")
      playerBox = document.querySelector('#playerBox').object3D
      playerCollider.setFromObject(playerBox)
    })
    this.active = false
  },
  tick: function () {
    if(playerBox != null) {
      playerCollider.setFromObject(playerBox)
      // playerCollider.getCenter(playerPos)
      // console.log(playerCollider.getCenter(vec))
      if (playerCollider.intersect(boxCollider)) {
        console.log(boxCollider.name)
        !this.active && this.el.emit(this.data.event)
        this.active = true
      } else {
        this.active = false
      }
    }

  },
})
