var _tiltGamma = 0;
var _tiltBeta = 0;
var _direction = 0;

//Initializer
function jchtml5_tilt_init() {
	if(window.DeviceOrientationEvent) {
		window.addEventListener('deviceorientation', function(eventData) {
			_direction = eventData.alpha
			_tiltBeta = eventData.beta;
			_tiltGamma = eventData.gamma;			

			//If the device is landscape, switch the values
			if (window.innerHeight > window.innerWidth) {
				_tiltBeta = [_tiltGamma, _tiltGamma = _tiltBeta][0];
				_tiltBeta *= -1;
			}

			if (window.orientation == -90 || window.orientation == 0){
				_tiltBeta *= -1;
				_tiltGamma *= -1;
			}

		}, 0);
	}
}

// Returns the device orientation (0,90,-190,180)
function jchtml5_window_orientation(){
	return window.orientation;
}

// Return the tilt direction
function jchtml5_tilt_direction() {
	return _direction;
}

// Return tilt gamma
function jchtml5_tilt_gamma() {
	return _tiltGamma;
}

// Return tilt beta
function jchtml5_tilt_beta() {
	return _tiltBeta;
}