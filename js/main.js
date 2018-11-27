// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var scene = new ScrollMagic.Scene({
    triggerElement: `#section-1`,
		duration: 1200,	
		offset:-300	
	})
  .setPin("#image-1") // pins the element for the the scene's duration
  // scene.setClassToggle(`#section-container`, "active")
  // .reverse(false);
  controller.addScene(scene); // assign the scene to the controller
  
