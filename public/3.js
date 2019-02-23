webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/src/components/auth/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

var _Ladda = __webpack_require__("./resources/assets/src/vendor/libs/ladda/Ladda.vue");

var _Ladda2 = _interopRequireDefault(_Ladda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'login',
  metaInfo: {
    title: 'Login'
  },
  components: {
    LaddaBtn: _Ladda2.default
  },
  data: function data() {
    return {
      token: localStorage.getItem('token') || null,
      loading: false,
      loginError: null,
      user: {
        email: '',
        password: '',
        rememberMe: false
      }
    };
  },
  validations: {
    user: {
      email: {
        required: _validators.required,
        minLength: (0, _validators.minLength)(4),
        maxLength: (0, _validators.maxLength)(128)
      },
      password: {
        required: _validators.required,
        minLength: (0, _validators.minLength)(4)
      }
    }
  },
  methods: {
    submitForm: function submitForm() {
      $("#submit_form").click();
    },
    login: function login() {
      var _this = this;

      this.loginError = null;
      this.loading = true;

      this.$store.dispatch('generateToken', {
        username: this.user.email,
        password: this.user.password
      }).then(function (response) {
        setTimeout(function () {
          _this.$router.push({ name: 'dashboard' });
        }, 500);
      }).catch(function (error) {
        console.log(error);
        _this.loginError = error.response.data;
        _this.loading = false;
      });
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/src/vendor/libs/ladda/Ladda.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ladda = __webpack_require__("./node_modules/ladda/js/ladda.js");

var Ladda = _interopRequireWildcard(_ladda);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  name: 'ladda-btn',
  props: {
    loading: {
      default: false
    },
    tag: {
      type: String,
      default: 'button'
    }
  },
  render: function render(createElement) {
    var attrs = this.tag === 'button' ? { type: 'button' } : {};

    return createElement(this.tag, { attrs: attrs }, this.$slots.default);
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.ladda) return;
    this.ladda.remove();
    this.ladda = null;
  },
  mounted: function mounted() {
    this.ladda = Ladda.create(this.$el);
  },

  watch: {
    loading: function loading(value) {
      if (!this.ladda) return;
      if (typeof value === 'boolean') {
        this.ladda[value ? 'start' : 'stop']();
      } else if (typeof value === 'number') {
        if (!this.ladda.isLoading()) {
          this.ladda.start();
        }

        this.ladda.setProgress(value);
      }
    }
  }
}; //
//

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ab8fae0\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/libs/ladda/ladda.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Ladda\r\n * http://lab.hakim.se/ladda\r\n * MIT licensed\r\n *\r\n * Copyright (C) 2018 Hakim El Hattab, http://hakim.se\r\n */\n@-webkit-keyframes ladda-spinner-line-fade {\n0%, 100% {\n    opacity: 0.22;\n}\n1% {\n    opacity: 1;\n}\n}\n@keyframes ladda-spinner-line-fade {\n0%, 100% {\n    opacity: 0.22;\n}\n1% {\n    opacity: 1;\n}\n}\n.ladda-button {\n  position: relative;\n}\n.ladda-button .ladda-spinner {\n  position: absolute;\n  z-index: 2;\n  display: inline-block;\n  width: 32px;\n  top: 50%;\n  margin-top: 0;\n  opacity: 0;\n  pointer-events: none;\n}\n.ladda-button .ladda-label {\n  position: relative;\n  z-index: 3;\n}\n.ladda-button .ladda-progress {\n  position: absolute;\n  width: 0;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.2);\n  display: none;\n  -webkit-transition: 0.1s linear all !important;\n  transition: 0.1s linear all !important;\n}\n.ladda-button[data-loading] .ladda-progress {\n  display: block;\n}\n.ladda-button, .ladda-button .ladda-spinner, .ladda-button .ladda-label {\n  -webkit-transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important;\n  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important;\n}\n.ladda-button[data-style=zoom-in], .ladda-button[data-style=zoom-in] .ladda-spinner, .ladda-button[data-style=zoom-in] .ladda-label, .ladda-button[data-style=zoom-out], .ladda-button[data-style=zoom-out] .ladda-spinner, .ladda-button[data-style=zoom-out] .ladda-label {\n  -webkit-transition: 0.3s ease all !important;\n  transition: 0.3s ease all !important;\n}\n.ladda-button[data-style=expand-right] .ladda-spinner {\n  right: -6px;\n}\n.ladda-button[data-style=expand-right][data-size=\"s\"] .ladda-spinner, .ladda-button[data-style=expand-right][data-size=\"xs\"] .ladda-spinner {\n  right: -12px;\n}\n.ladda-button[data-style=expand-right][data-loading] {\n  padding-right: 56px;\n}\n.ladda-button[data-style=expand-right][data-loading] .ladda-spinner {\n  opacity: 1;\n}\n.ladda-button[data-style=expand-right][data-loading][data-size=\"s\"], .ladda-button[data-style=expand-right][data-loading][data-size=\"xs\"] {\n  padding-right: 40px;\n}\n.ladda-button[data-style=expand-left] .ladda-spinner {\n  left: 26px;\n}\n.ladda-button[data-style=expand-left][data-size=\"s\"] .ladda-spinner, .ladda-button[data-style=expand-left][data-size=\"xs\"] .ladda-spinner {\n  left: 4px;\n}\n.ladda-button[data-style=expand-left][data-loading] {\n  padding-left: 56px;\n}\n.ladda-button[data-style=expand-left][data-loading] .ladda-spinner {\n  opacity: 1;\n}\n.ladda-button[data-style=expand-left][data-loading][data-size=\"s\"], .ladda-button[data-style=expand-left][data-loading][data-size=\"xs\"] {\n  padding-left: 40px;\n}\n.ladda-button[data-style=expand-up] {\n  overflow: hidden;\n}\n.ladda-button[data-style=expand-up] .ladda-spinner {\n  top: -32px;\n  left: 50%;\n  margin-left: 0;\n}\n.ladda-button[data-style=expand-up][data-loading] {\n  padding-top: 54px;\n}\n.ladda-button[data-style=expand-up][data-loading] .ladda-spinner {\n  opacity: 1;\n  top: 26px;\n  margin-top: 0;\n}\n.ladda-button[data-style=expand-up][data-loading][data-size=\"s\"], .ladda-button[data-style=expand-up][data-loading][data-size=\"xs\"] {\n  padding-top: 32px;\n}\n.ladda-button[data-style=expand-up][data-loading][data-size=\"s\"] .ladda-spinner, .ladda-button[data-style=expand-up][data-loading][data-size=\"xs\"] .ladda-spinner {\n  top: 4px;\n}\n.ladda-button[data-style=expand-down] {\n  overflow: hidden;\n}\n.ladda-button[data-style=expand-down] .ladda-spinner {\n  top: 62px;\n  left: 50%;\n  margin-left: 0;\n}\n.ladda-button[data-style=expand-down][data-size=\"s\"] .ladda-spinner, .ladda-button[data-style=expand-down][data-size=\"xs\"] .ladda-spinner {\n  top: 40px;\n}\n.ladda-button[data-style=expand-down][data-loading] {\n  padding-bottom: 54px;\n}\n.ladda-button[data-style=expand-down][data-loading] .ladda-spinner {\n  opacity: 1;\n}\n.ladda-button[data-style=expand-down][data-loading][data-size=\"s\"], .ladda-button[data-style=expand-down][data-loading][data-size=\"xs\"] {\n  padding-bottom: 32px;\n}\n.ladda-button[data-style=slide-left] {\n  overflow: hidden;\n}\n.ladda-button[data-style=slide-left] .ladda-label {\n  position: relative;\n}\n.ladda-button[data-style=slide-left] .ladda-spinner {\n  left: 100%;\n  margin-left: 0;\n}\n.ladda-button[data-style=slide-left][data-loading] .ladda-label {\n  opacity: 0;\n  left: -100%;\n}\n.ladda-button[data-style=slide-left][data-loading] .ladda-spinner {\n  opacity: 1;\n  left: 50%;\n}\n.ladda-button[data-style=slide-right] {\n  overflow: hidden;\n}\n.ladda-button[data-style=slide-right] .ladda-label {\n  position: relative;\n}\n.ladda-button[data-style=slide-right] .ladda-spinner {\n  right: 100%;\n  margin-left: 0;\n  left: 16px;\n}\n[dir=\"rtl\"] .ladda-button[data-style=slide-right] .ladda-spinner {\n  right: auto;\n}\n.ladda-button[data-style=slide-right][data-loading] .ladda-label {\n  opacity: 0;\n  left: 100%;\n}\n.ladda-button[data-style=slide-right][data-loading] .ladda-spinner {\n  opacity: 1;\n  left: 50%;\n}\n.ladda-button[data-style=slide-up] {\n  overflow: hidden;\n}\n.ladda-button[data-style=slide-up] .ladda-label {\n  position: relative;\n}\n.ladda-button[data-style=slide-up] .ladda-spinner {\n  left: 50%;\n  margin-left: 0;\n  margin-top: 1em;\n}\n.ladda-button[data-style=slide-up][data-loading] .ladda-label {\n  opacity: 0;\n  top: -1em;\n}\n.ladda-button[data-style=slide-up][data-loading] .ladda-spinner {\n  opacity: 1;\n  margin-top: 0;\n}\n.ladda-button[data-style=slide-down] {\n  overflow: hidden;\n}\n.ladda-button[data-style=slide-down] .ladda-label {\n  position: relative;\n}\n.ladda-button[data-style=slide-down] .ladda-spinner {\n  left: 50%;\n  margin-left: 0;\n  margin-top: -2em;\n}\n.ladda-button[data-style=slide-down][data-loading] .ladda-label {\n  opacity: 0;\n  top: 1em;\n}\n.ladda-button[data-style=slide-down][data-loading] .ladda-spinner {\n  opacity: 1;\n  margin-top: 0;\n}\n.ladda-button[data-style=zoom-out] {\n  overflow: hidden;\n}\n.ladda-button[data-style=zoom-out] .ladda-spinner {\n  left: 50%;\n  margin-left: 32px;\n  -webkit-transform: scale(2.5);\n          transform: scale(2.5);\n}\n.ladda-button[data-style=zoom-out] .ladda-label {\n  position: relative;\n  display: inline-block;\n}\n.ladda-button[data-style=zoom-out][data-loading] .ladda-label {\n  opacity: 0;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n.ladda-button[data-style=zoom-out][data-loading] .ladda-spinner {\n  opacity: 1;\n  margin-left: 0;\n  -webkit-transform: none;\n          transform: none;\n}\n.ladda-button[data-style=zoom-in] {\n  overflow: hidden;\n}\n.ladda-button[data-style=zoom-in] .ladda-spinner {\n  left: 50%;\n  margin-left: -16px;\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2);\n}\n.ladda-button[data-style=zoom-in] .ladda-label {\n  position: relative;\n  display: inline-block;\n}\n.ladda-button[data-style=zoom-in][data-loading] .ladda-label {\n  opacity: 0;\n  -webkit-transform: scale(2.2);\n          transform: scale(2.2);\n}\n.ladda-button[data-style=zoom-in][data-loading] .ladda-spinner {\n  opacity: 1;\n  margin-left: 0;\n  -webkit-transform: none;\n          transform: none;\n}\n.ladda-button[data-style=contract] {\n  overflow: hidden;\n  width: 100px;\n}\n.ladda-button[data-style=contract] .ladda-spinner {\n  left: 50%;\n  margin-left: 0;\n}\n.ladda-button[data-style=contract][data-loading] {\n  border-radius: 50%;\n  width: 52px;\n}\n.ladda-button[data-style=contract][data-loading] .ladda-label {\n  opacity: 0;\n}\n.ladda-button[data-style=contract][data-loading] .ladda-spinner {\n  opacity: 1;\n}\n.ladda-button[data-style=contract-overlay] {\n  overflow: hidden;\n  width: 100px;\n  -webkit-box-shadow: 0px 0px 0px 2000px transparent;\n          box-shadow: 0px 0px 0px 2000px transparent;\n}\n.ladda-button[data-style=contract-overlay] .ladda-spinner {\n  left: 50%;\n  margin-left: 0;\n}\n.ladda-button[data-style=contract-overlay][data-loading] {\n  border-radius: 50%;\n  width: 52px;\n  -webkit-box-shadow: 0px 0px 0px 2000px rgba(0, 0, 0, 0.8);\n          box-shadow: 0px 0px 0px 2000px rgba(0, 0, 0, 0.8);\n}\n.ladda-button[data-style=contract-overlay][data-loading] .ladda-label {\n  opacity: 0;\n}\n.ladda-button[data-style=contract-overlay][data-loading] .ladda-spinner {\n  opacity: 1;\n}\n[dir=\"rtl\"] .ladda-spinner > div {\n  left: 25% !important;\n}\n.ladda-button[data-style=contract-overlay][data-loading] {\n  -webkit-box-shadow: 0px 0px 0px 2000px rgba(0, 0, 0, 0.8) !important;\n          box-shadow: 0px 0px 0px 2000px rgba(0, 0, 0, 0.8) !important;\n}\n.ladda-button[data-style=\"contract\"],\n.ladda-button[data-style=\"contract-overlay\"] {\n  width: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e56ab208\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/authentication.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.authentication-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n}\n.authentication-wrapper .authentication-inner {\n    width: 100%;\n}\n.authentication-wrapper.authentication-1, .authentication-wrapper.authentication-2, .authentication-wrapper.authentication-4 {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.authentication-wrapper.authentication-1 .authentication-inner {\n    max-width: 300px;\n}\n.authentication-wrapper.authentication-2 .authentication-inner {\n    max-width: 380px;\n}\n.authentication-wrapper.authentication-3 {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    -webkit-box-pack: stretch;\n        -ms-flex-pack: stretch;\n            justify-content: stretch;\n}\n.authentication-wrapper.authentication-3 .authentication-inner {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: stretch;\n          -ms-flex-align: stretch;\n              align-items: stretch;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-pack: stretch;\n          -ms-flex-pack: stretch;\n              justify-content: stretch;\n}\n.authentication-wrapper.authentication-4 .authentication-inner {\n    max-width: 800px;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n.authentication-wrapper:after {\n    content: '';\n    display: block;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    min-height: inherit;\n    width: 0;\n    font-size: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e56ab208\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./resources/assets/src/components/auth/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-e56ab208] {\n   height: auto;\n   width: 100%;\n}\na[data-v-e56ab208] {\n    color: #1e70cd !important;\n}\n.error-msg[data-v-e56ab208] {\n  color:red; \n  text-align:center; \n  font-weight:bold\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/ladda/js/ladda.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["bind"] = bind;
/* harmony export (immutable) */ __webpack_exports__["stopAll"] = stopAll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_spin_js__ = __webpack_require__("./node_modules/spin.js/spin.js");
/*!
 * Ladda
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2018 Hakim El Hattab, http://hakim.se
 */

 

// All currently instantiated instances of Ladda
var ALL_INSTANCES = [];

/**
 * Creates a new instance of Ladda which wraps the
 * target button element.
 *
 * @return An API object that can be used to control
 * the loading animation state.
 */
function create( button ) {

	if( typeof button === 'undefined' ) {
		console.warn( "Ladda button target must be defined." );
		return;
	}

	// The button must have the class "ladda-button"
	if ( !button.classList.contains('ladda-button') ) {
		button.classList.add( 'ladda-button' );
	}

	// Style is required, default to "expand-right"
	if( !button.hasAttribute( 'data-style' ) ) {
		button.setAttribute( 'data-style', 'expand-right' );
	}

	// The text contents must be wrapped in a ladda-label
	// element, create one if it doesn't already exist
	if( !button.querySelector( '.ladda-label' ) ) {
		var laddaLabel = document.createElement( 'span' );
		laddaLabel.className = 'ladda-label';
		wrapContent( button, laddaLabel );
	}

	// The spinner component
	var spinner,
		spinnerWrapper = button.querySelector( '.ladda-spinner' );

	// Wrapper element for the spinner
	if( !spinnerWrapper ) {
		spinnerWrapper = document.createElement( 'span' );
		spinnerWrapper.className = 'ladda-spinner';
	}

	button.appendChild( spinnerWrapper );

	// Timer used to delay starting/stopping
	var timer;

	var instance = {

		/**
		 * Enter the loading state.
		 */
		start: function() {

			// Create the spinner if it doesn't already exist
			if( !spinner ) {
				spinner = createSpinner( button );
			}

			button.disabled = true;
			button.setAttribute( 'data-loading', '' );

			clearTimeout( timer );
			spinner.spin( spinnerWrapper );

			this.setProgress( 0 );

			return this; // chain

		},

		/**
		 * Enter the loading state, after a delay.
		 */
		startAfter: function( delay ) {

			clearTimeout( timer );
			timer = setTimeout( function() { instance.start(); }, delay );

			return this; // chain

		},

		/**
		 * Exit the loading state.
		 */
		stop: function() {

			if (instance.isLoading()) {
				button.disabled = false;
				button.removeAttribute( 'data-loading' );	
			}

			// Kill the animation after a delay to make sure it
			// runs for the duration of the button transition
			clearTimeout( timer );

			if( spinner ) {
				timer = setTimeout( function() { spinner.stop(); }, 1000 );
			}

			return this; // chain

		},

		/**
		 * Toggle the loading state on/off.
		 */
		toggle: function() {
			return this.isLoading() ? this.stop() : this.start();
		},

		/**
		 * Sets the width of the visual progress bar inside of
		 * this Ladda button
		 *
		 * @param {Number} progress in the range of 0-1
		 */
		setProgress: function( progress ) {

			// Cap it
			progress = Math.max( Math.min( progress, 1 ), 0 );

			var progressElement = button.querySelector( '.ladda-progress' );

			// Remove the progress bar if we're at 0 progress
			if( progress === 0 && progressElement && progressElement.parentNode ) {
				progressElement.parentNode.removeChild( progressElement );
			}
			else {
				if( !progressElement ) {
					progressElement = document.createElement( 'div' );
					progressElement.className = 'ladda-progress';
					button.appendChild( progressElement );
				}

				progressElement.style.width = ( ( progress || 0 ) * button.offsetWidth ) + 'px';
			}

		},

		isLoading: function() {

			return button.hasAttribute( 'data-loading' );

		},

		remove: function() {

			clearTimeout( timer );

			button.disabled = false;
			button.removeAttribute( 'data-loading' );

			if( spinner ) {
				spinner.stop();
				spinner = null;
			}

			ALL_INSTANCES.splice( ALL_INSTANCES.indexOf(instance), 1 );

		}

	};

	ALL_INSTANCES.push( instance );

	return instance;

}

/**
 * Binds the target buttons to automatically enter the
 * loading state when clicked.
 *
 * @param target Either an HTML element or a CSS selector.
 * @param options
 *          - timeout Number of milliseconds to wait before
 *            automatically cancelling the animation.
 *          - callback A function to be called with the Ladda
 *            instance when a target button is clicked.
 */
function bind( target, options ) {

	var targets;

	if( typeof target === 'string' ) {
		targets = document.querySelectorAll( target );
	}
	else if( typeof target === 'object' ) {
		targets = [ target ];
	} else {
		throw new Error('target must be string or object');
	}

	options = options || {};

	for( var i = 0; i < targets.length; i++ ) {
		bindElement(targets[i], options);
	}

}

/**
 * Stops ALL current loading animations.
 */
function stopAll() {

	for( var i = 0, len = ALL_INSTANCES.length; i < len; i++ ) {
		ALL_INSTANCES[i].stop();
	}

}

/**
* Get the first ancestor node from an element, having a
* certain type.
*
* @param elem An HTML element
* @param type an HTML tag type (uppercased)
*
* @return An HTML element
*/
function getAncestorOfTagType( elem, type ) {

	while ( elem.parentNode && elem.tagName !== type ) {
		elem = elem.parentNode;
	}

	return ( type === elem.tagName ) ? elem : undefined;

}

function createSpinner( button ) {

	var height = button.offsetHeight,
		spinnerColor,
		spinnerLines;

	if( height === 0 ) {
		// We may have an element that is not visible so
		// we attempt to get the height in a different way
		height = parseFloat( window.getComputedStyle( button ).height );
	}

	// If the button is tall we can afford some padding
	if( height > 32 ) {
		height *= 0.8;
	}

	// Prefer an explicit height if one is defined
	if( button.hasAttribute( 'data-spinner-size' ) ) {
		height = parseInt( button.getAttribute( 'data-spinner-size' ), 10 );
	}

	// Allow buttons to specify the color of the spinner element
	if( button.hasAttribute( 'data-spinner-color' ) ) {
		spinnerColor = button.getAttribute( 'data-spinner-color' );
	}

	// Allow buttons to specify the number of lines of the spinner
	if( button.hasAttribute( 'data-spinner-lines' ) ) {
		spinnerLines = parseInt( button.getAttribute( 'data-spinner-lines' ), 10 );
	}

	var radius = height * 0.2,
		length = radius * 0.6,
		width = radius < 7 ? 2 : 3;

	return new __WEBPACK_IMPORTED_MODULE_0_spin_js__["a" /* Spinner */]( {
		color: spinnerColor || '#fff',
		lines: spinnerLines || 12,
		radius: radius,
		length: length,
		width: width,
		animation: 'ladda-spinner-line-fade',
		zIndex: 'auto',
		top: 'auto',
		left: 'auto',
		className: ''
	} );

}

function wrapContent( node, wrapper ) {

	var r = document.createRange();
	r.selectNodeContents( node );
	r.surroundContents( wrapper );
	node.appendChild( wrapper );

}

function bindElement( element, options ) {
	if( typeof element.addEventListener !== 'function' ) {
		return;
	}

	var instance = create( element );
	var timeout = -1;

	element.addEventListener( 'click', function() {

		// If the button belongs to a form, make sure all the
		// fields in that form are filled out
		var valid = true;
		var form = getAncestorOfTagType( element, 'FORM' );

		if( typeof form !== 'undefined' && !form.hasAttribute('novalidate') ) {
			// Modern form validation
			if( typeof form.checkValidity === 'function' ) {
				valid = form.checkValidity();
			}
		}

		if( valid ) {
			// This is asynchronous to avoid an issue where disabling
			// the button prevents forms from submitting
			instance.startAfter( 1 );

			// Set a loading timeout if one is specified
			if( typeof options.timeout === 'number' ) {
				clearTimeout( timeout );
				timeout = setTimeout( instance.stop, options.timeout );
			}

			// Invoke callbacks
			if( typeof options.callback === 'function' ) {
				options.callback.apply( null, [ instance ] );
			}
		}

	}, false );

}


/***/ }),

/***/ "./node_modules/spin.js/spin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var defaults = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    scale: 1.0,
    corners: 1,
    color: '#000',
    fadeColor: 'transparent',
    animation: 'spinner-line-fade-default',
    rotate: 0,
    direction: 1,
    speed: 1,
    zIndex: 2e9,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: '0 0 1px transparent',
    position: 'absolute',
};
var Spinner = /** @class */ (function () {
    function Spinner(opts) {
        if (opts === void 0) { opts = {}; }
        this.opts = __assign({}, defaults, opts);
    }
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
     * stop() internally.
     */
    Spinner.prototype.spin = function (target) {
        this.stop();
        this.el = document.createElement('div');
        this.el.className = this.opts.className;
        this.el.setAttribute('role', 'progressbar');
        css(this.el, {
            position: this.opts.position,
            width: 0,
            zIndex: this.opts.zIndex,
            left: this.opts.left,
            top: this.opts.top,
            transform: "scale(" + this.opts.scale + ")",
        });
        if (target) {
            target.insertBefore(this.el, target.firstChild || null);
        }
        drawLines(this.el, this.opts);
        return this;
    };
    /**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */
    Spinner.prototype.stop = function () {
        if (this.el) {
            if (typeof requestAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.animateId);
            }
            else {
                clearTimeout(this.animateId);
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
            this.el = undefined;
        }
        return this;
    };
    return Spinner;
}());

/**
 * Sets multiple style properties at once.
 */
function css(el, props) {
    for (var prop in props) {
        el.style[prop] = props[prop];
    }
    return el;
}
/**
 * Returns the line color from the given string or array.
 */
function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length];
}
/**
 * Internal method that draws the individual lines.
 */
function drawLines(el, opts) {
    var borderRadius = (Math.round(opts.corners * opts.width * 500) / 1000) + 'px';
    var shadow = 'none';
    if (opts.shadow === true) {
        shadow = '0 2px 4px #000'; // default shadow
    }
    else if (typeof opts.shadow === 'string') {
        shadow = opts.shadow;
    }
    var shadows = parseBoxShadow(shadow);
    for (var i = 0; i < opts.lines; i++) {
        var degrees = ~~(360 / opts.lines * i + opts.rotate);
        var backgroundLine = css(document.createElement('div'), {
            position: 'absolute',
            top: -opts.width / 2 + "px",
            width: (opts.length + opts.width) + 'px',
            height: opts.width + 'px',
            background: getColor(opts.fadeColor, i),
            borderRadius: borderRadius,
            transformOrigin: 'left',
            transform: "rotate(" + degrees + "deg) translateX(" + opts.radius + "px)",
        });
        var delay = i * opts.direction / opts.lines / opts.speed;
        delay -= 1 / opts.speed; // so initial animation state will include trail
        var line = css(document.createElement('div'), {
            width: '100%',
            height: '100%',
            background: getColor(opts.color, i),
            borderRadius: borderRadius,
            boxShadow: normalizeShadow(shadows, degrees),
            animation: 1 / opts.speed + "s linear " + delay + "s infinite " + opts.animation,
        });
        backgroundLine.appendChild(line);
        el.appendChild(backgroundLine);
    }
}
function parseBoxShadow(boxShadow) {
    var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
    var shadows = [];
    for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {
        var shadow = _a[_i];
        var matches = shadow.match(regex);
        if (matches === null) {
            continue; // invalid syntax
        }
        var x = +matches[2];
        var y = +matches[5];
        var xUnits = matches[4];
        var yUnits = matches[7];
        if (x === 0 && !xUnits) {
            xUnits = yUnits;
        }
        if (y === 0 && !yUnits) {
            yUnits = xUnits;
        }
        if (xUnits !== yUnits) {
            continue; // units must match to use as coordinates
        }
        shadows.push({
            prefix: matches[1] || '',
            x: x,
            y: y,
            xUnits: xUnits,
            yUnits: yUnits,
            end: matches[8],
        });
    }
    return shadows;
}
/**
 * Modify box-shadow x/y offsets to counteract rotation
 */
function normalizeShadow(shadows, degrees) {
    var normalized = [];
    for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
        var shadow = shadows_1[_i];
        var xy = convertOffset(shadow.x, shadow.y, degrees);
        normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);
    }
    return normalized.join(', ');
}
function convertOffset(x, y, degrees) {
    var radians = degrees * Math.PI / 180;
    var sin = Math.sin(radians);
    var cos = Math.cos(radians);
    return [
        Math.round((x * cos + y * sin) * 1000) / 1000,
        Math.round((-x * sin + y * cos) * 1000) / 1000,
    ];
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e56ab208\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/src/components/auth/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login" }, [
    _c(
      "div",
      {
        staticClass:
          "authentication-wrapper authentication-2 ui-bg-cover ui-bg-overlay-container px-4",
        style: "background-image: url('" + _vm.baseUrl + "img/bg/21.jpg');"
      },
      [
        _c("div", { staticClass: "ui-bg-overlay bg-dark opacity-25" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "authentication-inner py-5" },
          [
            _c(
              "b-card",
              { attrs: { "no-body": "" } },
              [
                _c("div", { staticClass: "p-4 p-sm-5" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-center align-items-center pb-2 mb-4"
                    },
                    [
                      _c("div", { staticClass: "w-100 position-relative" }, [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__("./resources/assets/src/assets/img/mdb_logo.png"),
                            alt: "MyDebtBuddy"
                          }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "h5",
                    {
                      staticClass:
                        "text-center text-muted font-weight-normal mb-4"
                    },
                    [_vm._v("Login to your account")]
                  ),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      attrs: { action: "#" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.login($event)
                        }
                      }
                    },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Email" } },
                        [
                          _c("b-input", {
                            attrs: {
                              type: "text",
                              state: _vm.$v.user.email.$dirty
                                ? !_vm.$v.user.$error
                                : null,
                              "aria-describedby": "input1LiveFeedback"
                            },
                            on: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                _vm.submitForm()
                              }
                            },
                            model: {
                              value: _vm.user.email,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.user,
                                  "email",
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "user.email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-between align-items-end",
                              attrs: { slot: "label" },
                              slot: "label"
                            },
                            [_c("div", [_vm._v("Password")])]
                          ),
                          _vm._v(" "),
                          _c("b-input", {
                            attrs: { type: "password" },
                            on: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                _vm.submitForm()
                              }
                            },
                            model: {
                              value: _vm.user.password,
                              callback: function($$v) {
                                _vm.$set(_vm.user, "password", $$v)
                              },
                              expression: "user.password"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-between align-items-center m-0"
                        },
                        [
                          _c(
                            "ladda-btn",
                            {
                              staticClass: "btn btn-info btn-block",
                              attrs: {
                                id: "submit_form",
                                loading: _vm.loading,
                                type: "submit",
                                "data-style": "zoom-out",
                                disabled: _vm.$v.user.$invalid
                              }
                            },
                            [
                              _vm._v(
                                "\n                  Login\n                "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.loginError
                        ? _c("p", { staticClass: "mt-4 mb-0 error-msg" }, [
                            _vm._v(_vm._s(_vm.loginError))
                          ])
                        : _vm._e()
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("b-card-footer", { staticClass: "py-3 px-4 px-sm-5" }, [
                  _c(
                    "div",
                    { staticClass: "text-center text-muted" },
                    [
                      _vm._v("\n            Don't have an account yet? "),
                      _c(
                        "router-link",
                        { attrs: { to: { name: "register" } } },
                        [_vm._v("Register")]
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e56ab208", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ab8fae0\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/libs/ladda/ladda.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ab8fae0\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/libs/ladda/ladda.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("65d06181", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ab8fae0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./ladda.scss", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ab8fae0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./ladda.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e56ab208\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/authentication.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e56ab208\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/authentication.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3b618c90", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e56ab208\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./authentication.scss", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e56ab208\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./authentication.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e56ab208\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./resources/assets/src/components/auth/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e56ab208\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./resources/assets/src/components/auth/Login.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("389067bd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e56ab208\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e56ab208\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alpha.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alpha', /^[a-zA-Z]*$/);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alphaNum.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/and.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'and'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid && fn.apply(_this, args);
    }, true);
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/between.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min, max) {
  return (0, _common.withParams)({
    type: 'between',
    min: min,
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value;
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withParams", {
  enumerable: true,
  get: function get() {
    return _withParams.default;
  }
});
exports.regex = exports.ref = exports.len = exports.req = void 0;

var _withParams = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/withParams.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var req = function req(value) {
  if (Array.isArray(value)) return !!value.length;

  if (value === undefined || value === null) {
    return false;
  }

  if (value === false) {
    return true;
  }

  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }

  if (_typeof(value) === 'object') {
    for (var _ in value) {
      return true;
    }

    return false;
  }

  return !!String(value).length;
};

exports.req = req;

var len = function len(value) {
  if (Array.isArray(value)) return value.length;

  if (_typeof(value) === 'object') {
    return Object.keys(value).length;
  }

  return String(value).length;
};

exports.len = len;

var ref = function ref(reference, vm, parentVm) {
  return typeof reference === 'function' ? reference.call(vm, parentVm) : parentVm[reference];
};

exports.ref = ref;

var regex = function regex(type, expr) {
  return (0, _withParams.default)({
    type: type
  }, function (value) {
    return !req(value) || expr.test(value);
  });
};

exports.regex = regex;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/decimal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('decimal', /^[-]?\d*(\.\d+)?$/);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/email.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

var _default = (0, _common.regex)('email', emailRegex);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "alpha", {
  enumerable: true,
  get: function get() {
    return _alpha.default;
  }
});
Object.defineProperty(exports, "alphaNum", {
  enumerable: true,
  get: function get() {
    return _alphaNum.default;
  }
});
Object.defineProperty(exports, "numeric", {
  enumerable: true,
  get: function get() {
    return _numeric.default;
  }
});
Object.defineProperty(exports, "between", {
  enumerable: true,
  get: function get() {
    return _between.default;
  }
});
Object.defineProperty(exports, "email", {
  enumerable: true,
  get: function get() {
    return _email.default;
  }
});
Object.defineProperty(exports, "ipAddress", {
  enumerable: true,
  get: function get() {
    return _ipAddress.default;
  }
});
Object.defineProperty(exports, "macAddress", {
  enumerable: true,
  get: function get() {
    return _macAddress.default;
  }
});
Object.defineProperty(exports, "maxLength", {
  enumerable: true,
  get: function get() {
    return _maxLength.default;
  }
});
Object.defineProperty(exports, "minLength", {
  enumerable: true,
  get: function get() {
    return _minLength.default;
  }
});
Object.defineProperty(exports, "required", {
  enumerable: true,
  get: function get() {
    return _required.default;
  }
});
Object.defineProperty(exports, "requiredIf", {
  enumerable: true,
  get: function get() {
    return _requiredIf.default;
  }
});
Object.defineProperty(exports, "requiredUnless", {
  enumerable: true,
  get: function get() {
    return _requiredUnless.default;
  }
});
Object.defineProperty(exports, "sameAs", {
  enumerable: true,
  get: function get() {
    return _sameAs.default;
  }
});
Object.defineProperty(exports, "url", {
  enumerable: true,
  get: function get() {
    return _url.default;
  }
});
Object.defineProperty(exports, "or", {
  enumerable: true,
  get: function get() {
    return _or.default;
  }
});
Object.defineProperty(exports, "and", {
  enumerable: true,
  get: function get() {
    return _and.default;
  }
});
Object.defineProperty(exports, "not", {
  enumerable: true,
  get: function get() {
    return _not.default;
  }
});
Object.defineProperty(exports, "minValue", {
  enumerable: true,
  get: function get() {
    return _minValue.default;
  }
});
Object.defineProperty(exports, "maxValue", {
  enumerable: true,
  get: function get() {
    return _maxValue.default;
  }
});
Object.defineProperty(exports, "integer", {
  enumerable: true,
  get: function get() {
    return _integer.default;
  }
});
Object.defineProperty(exports, "decimal", {
  enumerable: true,
  get: function get() {
    return _decimal.default;
  }
});
exports.helpers = void 0;

var _alpha = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/alpha.js"));

var _alphaNum = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/alphaNum.js"));

var _numeric = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/numeric.js"));

var _between = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/between.js"));

var _email = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/email.js"));

var _ipAddress = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/ipAddress.js"));

var _macAddress = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/macAddress.js"));

var _maxLength = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/maxLength.js"));

var _minLength = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/minLength.js"));

var _required = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/required.js"));

var _requiredIf = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/requiredIf.js"));

var _requiredUnless = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/requiredUnless.js"));

var _sameAs = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/sameAs.js"));

var _url = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/url.js"));

var _or = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/or.js"));

var _and = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/and.js"));

var _not = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/not.js"));

var _minValue = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/minValue.js"));

var _maxValue = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/maxValue.js"));

var _integer = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/integer.js"));

var _decimal = _interopRequireDefault(__webpack_require__("./node_modules/vuelidate/lib/validators/decimal.js"));

var helpers = _interopRequireWildcard(__webpack_require__("./node_modules/vuelidate/lib/validators/common.js"));

exports.helpers = helpers;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/integer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('integer', /^-?[0-9]*$/);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/ipAddress.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'ipAddress'
}, function (value) {
  if (!(0, _common.req)(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  var nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
});

exports.default = _default;

var nibbleValid = function nibbleValid(nibble) {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  var numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/macAddress.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return (0, _common.withParams)({
    type: 'macAddress'
  }, function (value) {
    if (!(0, _common.req)(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    var parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;
    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  });
};

exports.default = _default;

var hexValid = function hexValid(hex) {
  return hex.toLowerCase().match(/^[0-9a-f]{2}$/);
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxLength.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'maxLength',
    max: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) <= length;
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(max) {
  return (0, _common.withParams)({
    type: 'maxValue',
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +max;
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minLength.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'minLength',
    min: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) >= length;
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min) {
  return (0, _common.withParams)({
    type: 'minValue',
    min: min
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +min;
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/not.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(validator) {
  return (0, _common.withParams)({
    type: 'not'
  }, function (value, vm) {
    return !(0, _common.req)(value) || !validator.call(this, value, vm);
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/numeric.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('numeric', /^[0-9]*$/);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/or.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'or'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid || fn.apply(_this, args);
    }, false);
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/required.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'required'
}, _common.req);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredIf.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredIf',
    prop: prop
  }, function (value, parentVm) {
    return (0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredUnless.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredUnless',
    prop: prop
  }, function (value, parentVm) {
    return !(0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/sameAs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(equalTo) {
  return (0, _common.withParams)({
    type: 'sameAs',
    eq: equalTo
  }, function (value, parentVm) {
    return value === (0, _common.ref)(equalTo, this, parentVm);
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/url.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

var _default = (0, _common.regex)('url', urlRegex);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var withParams = Object({"MIX_PUSHER_APP_KEY":"","MIX_PUSHER_APP_CLUSTER":"mt1","NODE_ENV":"development"}).BUILD === 'web' ? __webpack_require__("./node_modules/vuelidate/lib/withParamsBrowser.js").withParams : __webpack_require__("./node_modules/vuelidate/lib/params.js").withParams;
var _default = withParams;
exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParamsBrowser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withParams = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

var fakeWithParams = function fakeWithParams(paramsOrClosure, maybeValidator) {
  if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
    return maybeValidator;
  }

  return paramsOrClosure(function () {});
};

var withParams = root.vuelidate ? root.vuelidate.withParams : fakeWithParams;
exports.withParams = withParams;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/assets/src/components/auth/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e56ab208\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/authentication.scss")
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e56ab208\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./resources/assets/src/components/auth/Login.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/src/components/auth/Login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e56ab208\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/src/components/auth/Login.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e56ab208"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/src/components/auth/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e56ab208", Component.options)
  } else {
    hotAPI.reload("data-v-e56ab208", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/src/vendor/libs/ladda/Ladda.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ab8fae0\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/libs/ladda/ladda.scss")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/src/vendor/libs/ladda/Ladda.vue")
/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/src/vendor/libs/ladda/Ladda.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ab8fae0", Component.options)
  } else {
    hotAPI.reload("data-v-3ab8fae0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});