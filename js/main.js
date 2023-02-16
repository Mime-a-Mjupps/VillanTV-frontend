window.onload = function() {
	
	//Turn of screensaver!
	webapis.appcommon.setScreenSaver(
			  webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_OFF,
			  function(result) {
			    console.log(result);
			  }, function(error) {
			    console.log(JSON.stringify(error));
			  }
			);
    document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case 37: //LEFT arrow
    		break;
    	case 38: //UP arrow
    		break;
    	case 39: //RIGHT arrow
    		break;
    	case 40: //DOWN arrow
    		break;
    	case 13: //OK button
    		break;
    	case 10009: //RETURN button
		tizen.application.getCurrentApplication().exit();
    		break;
    	default:
    		console.log('Key code : ' + e.keyCode);
    		break;
    	}
    });
}
