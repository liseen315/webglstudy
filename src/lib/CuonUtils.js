(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var WebGLUtils_1 = require("./WebGLUtils");

var CuonUtils = function () {
    function CuonUtils() {
        _classCallCheck(this, CuonUtils);
    }

    _createClass(CuonUtils, null, [{
        key: "getWebGLContext",
        value: function getWebGLContext(canvas) {
            var gl = WebGLUtils_1.default.setupWebGL(canvas);
            if (!gl) return null;
            return gl;
        }
    }]);

    return CuonUtils;
}();

exports.default = CuonUtils;

},{"./WebGLUtils":2}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var WebGLUtils = function () {
    function WebGLUtils() {
        _classCallCheck(this, WebGLUtils);
    }

    _createClass(WebGLUtils, null, [{
        key: "handleCreationError",
        value: function handleCreationError(msg) {
            var container = document.getElementsByTagName('body')[0];
            if (container) {
                var str = 'create error!';
                container.innerHTML = this.makeFailHTML(str);
            }
        }
    }, {
        key: "makeFailHTML",
        value: function makeFailHTML(msg) {
            return '' + '<div style="margin: auto; width:500px;z-index:10000;margin-top:20em;text-align:center;">' + msg + '</div>';
            return '' + '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>' + '<td align="center">' + '<div style="display: table-cell; vertical-align: middle;">' + '<div style="">' + msg + '</div>' + '</div>' + '</td></tr></table>';
        }
        /**
         * 建立WebGL环境
         * @param canvas 画布
         * @param canvasAttribs 画布属性
         * @param onErroHandler 错误回调
         */

    }, {
        key: "setupWebGL",
        value: function setupWebGL(canvas, canvasAttribs, onErroHandler) {
            onErroHandler = onErroHandler || this.handleCreationError;
            if (canvas.addEventListener) {
                canvas.addEventListener('webglcontextcreationerror', function (event) {
                    onErroHandler(event.statusMessage);
                }, false);
            }
            var context = this.create3DContext(canvas, canvasAttribs);
            if (!context) {
                onErroHandler('');
            }
            return context;
        }
        /**
         * 创建3D上下文环境
         * @param canvas
         * @param canvasAttribs
         */

    }, {
        key: "create3DContext",
        value: function create3DContext(canvas, canvasAttribs) {
            var names = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
            var context = null;
            for (var i = 0; i < names.length; ++i) {
                try {
                    context = canvas.getContext(names[i].toString(), canvasAttribs);
                } catch (e) {}
                if (context) {
                    break;
                }
            }
            return context;
        }
    }]);

    return WebGLUtils;
}();

exports.default = WebGLUtils;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbGliL0N1b25VdGlscy50cyIsInNyYy9saWIvV2ViR0xVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQSwyQkFBcUMsQUFDckM7OztBQUNFO0FBRUE7QUFBQyxBQUVNLEFBQU0sQUFBQyxBQUFlOzs7O3dDQUFDLEFBQVU7QUFDdEMsZ0JBQUksQUFBRSxLQUEwQixhQUFVLFFBQUMsQUFBVSxXQUFDLEFBQU0sQUFBQztBQUM3RCxBQUFFLEFBQUMsZ0JBQUMsQ0FBQyxBQUFFLEFBQUMsSUFBQyxBQUFNLE9BQUMsQUFBSTtBQUNwQixBQUFNLG1CQUFDLEFBQUUsQUFDWDtBQUFDLEFBQ0Y7Ozs7OztBQUVELGtCQUFlLEFBQVM7Ozs7Ozs7OztzRENieEI7OztBQUNFO0FBRUE7QUFBQyxBQUVELEFBQU0sQUFBQyxBQUFtQjs7Ozs0Q0FBQyxBQUFXO0FBQ3BDLGdCQUFJLEFBQVMsWUFBRyxBQUFRLFNBQUMsQUFBb0IscUJBQUMsQUFBTSxBQUFDLFFBQUMsQUFBQyxBQUFDO0FBQ3hELEFBQUUsQUFBQyxnQkFBQyxBQUFTLEFBQUMsV0FBQyxBQUFDO0FBQ2Qsb0JBQUksQUFBRyxNQUFHLEFBQWU7QUFDekIsQUFBUywwQkFBQyxBQUFTLFlBQUcsQUFBSSxLQUFDLEFBQVksYUFBQyxBQUFHLEFBQUMsQUFDOUM7QUFBQyxBQUNIO0FBQUMsQUFFRCxBQUFNLEFBQUMsQUFBWTs7O3FDQUFDLEFBQVc7QUFDN0IsQUFBTSxtQkFBQyxBQUFFLEtBQ1AsQUFBMEYsNkZBQUcsQUFBRyxNQUFHLEFBQVE7QUFDN0csQUFBTSxtQkFBQyxBQUFFLEtBQ1AsQUFBd0UsMkVBQ3hFLEFBQXFCLHdCQUNyQixBQUE0RCwrREFDNUQsQUFBZ0IsbUJBQUcsQUFBRyxNQUFHLEFBQVEsV0FDakMsQUFBUSxXQUNSLEFBQW9CLEFBQ3hCO0FBQUM7QUFDRCxBQUtHLEFBQ0ksQUFBTSxBQUFDLEFBQVU7Ozs7Ozs7OzttQ0FBQyxBQUFXLFFBQUUsQUFBeUMsZUFBRyxBQUF3QjtBQUN4RyxBQUFhLDRCQUFHLEFBQWEsaUJBQUksQUFBSSxLQUFDLEFBQW1CO0FBQ3pELEFBQUUsQUFBQyxnQkFBQyxBQUFNLE9BQUMsQUFBZ0IsQUFBQyxrQkFBQyxBQUFDO0FBQzVCLEFBQU0sdUJBQUMsQUFBZ0IsaUJBQUMsQUFBMkIsNkJBQUUsVUFBQyxBQUFTLEFBQUUsQUFBRTtBQUNqRSxBQUFhLGtDQUFDLEFBQUssTUFBQyxBQUFhLEFBQUMsQUFDcEM7QUFBQyxtQkFBRSxBQUFLLEFBQUMsQUFDWDtBQUFDO0FBQ0QsZ0JBQUksQUFBTyxVQUEwQixBQUFJLEtBQUMsQUFBZSxnQkFBQyxBQUFNLFFBQUUsQUFBYSxBQUFDO0FBQ2hGLEFBQUUsQUFBQyxnQkFBQyxDQUFDLEFBQU8sQUFBQyxTQUFDLEFBQUM7QUFDYixBQUFhLDhCQUFDLEFBQUUsQUFBQyxBQUNuQjtBQUFDO0FBQ0QsQUFBTSxtQkFBQyxBQUFPLEFBQ2hCO0FBQUM7QUFDRCxBQUlHLEFBQ0ksQUFBTSxBQUFDLEFBQWU7Ozs7Ozs7O3dDQUFDLEFBQVcsUUFBRSxBQUF5QztBQUNsRixnQkFBSSxBQUFLLFFBQWtCLENBQUMsQUFBTyxTQUFFLEFBQW9CLHNCQUFFLEFBQVcsYUFBRSxBQUFXLEFBQUM7QUFDcEYsZ0JBQUksQUFBTyxVQUEwQixBQUFJO0FBQ3pDLEFBQUcsQUFBQyxpQkFBQyxJQUFJLEFBQUMsSUFBVyxBQUFDLEdBQUUsQUFBQyxJQUFHLEFBQUssTUFBQyxBQUFNLFFBQUUsRUFBRSxBQUFDLEdBQUUsQUFBQztBQUM5QyxvQkFBSSxBQUFDO0FBQ0gsQUFBTyw4QkFBRyxBQUFNLE9BQUMsQUFBVSxXQUFDLEFBQUssTUFBQyxBQUFDLEFBQUMsR0FBQyxBQUFRLEFBQUUsWUFBRSxBQUFhLEFBQUMsQUFDakU7QUFBQyxrQkFBQyxBQUFLLEFBQUMsT0FBQyxBQUFDLEFBQUMsR0FBQyxBQUFDLEFBQUMsQ0FBQztBQUNmLEFBQUUsQUFBQyxvQkFBQyxBQUFPLEFBQUMsU0FBQyxBQUFDO0FBQ1osQUFBSyxBQUNQO0FBQUMsQUFDSDtBQUFDO0FBRUQsQUFBTSxtQkFBQyxBQUFPLEFBQ2hCO0FBQUMsQUFFRjs7Ozs7O0FBRUQsa0JBQWUsQUFBVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgV2ViR0xVdGlscyBmcm9tICcuL1dlYkdMVXRpbHMnXG5jbGFzcyBDdW9uVXRpbHMge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRXZWJHTENvbnRleHQoY2FudmFzOmFueSk6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB7XG4gICAgbGV0IGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgPSBXZWJHTFV0aWxzLnNldHVwV2ViR0woY2FudmFzKVxuICAgIGlmICghZ2wpIHJldHVybiBudWxsXG4gICAgcmV0dXJuIGdsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VvblV0aWxzIiwiY2xhc3MgV2ViR0xVdGlscyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBzdGF0aWMgaGFuZGxlQ3JlYXRpb25FcnJvcihtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdXG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgbGV0IHN0ciA9ICdjcmVhdGUgZXJyb3IhJ1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMubWFrZUZhaWxIVE1MKHN0cilcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbWFrZUZhaWxIVE1MKG1zZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJycgK1xuICAgICAgJzxkaXYgc3R5bGU9XCJtYXJnaW46IGF1dG87IHdpZHRoOjUwMHB4O3otaW5kZXg6MTAwMDA7bWFyZ2luLXRvcDoyMGVtO3RleHQtYWxpZ246Y2VudGVyO1wiPicgKyBtc2cgKyAnPC9kaXY+J1xuICAgIHJldHVybiAnJyArXG4gICAgICAnPHRhYmxlIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzhDRTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcIj48dHI+JyArXG4gICAgICAnPHRkIGFsaWduPVwiY2VudGVyXCI+JyArXG4gICAgICAnPGRpdiBzdHlsZT1cImRpc3BsYXk6IHRhYmxlLWNlbGw7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+JyArXG4gICAgICAnPGRpdiBzdHlsZT1cIlwiPicgKyBtc2cgKyAnPC9kaXY+JyArXG4gICAgICAnPC9kaXY+JyArXG4gICAgICAnPC90ZD48L3RyPjwvdGFibGU+J1xuICB9XG4gIC8qKlxuICAgKiDlu7rnq4tXZWJHTOeOr+Wig1xuICAgKiBAcGFyYW0gY2FudmFzIOeUu+W4g1xuICAgKiBAcGFyYW0gY2FudmFzQXR0cmlicyDnlLvluIPlsZ7mgKdcbiAgICogQHBhcmFtIG9uRXJyb0hhbmRsZXIg6ZSZ6K+v5Zue6LCDXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNldHVwV2ViR0woY2FudmFzOiBhbnksIGNhbnZhc0F0dHJpYnM/OiBDYW52YXMyRENvbnRleHRBdHRyaWJ1dGVzICwgb25FcnJvSGFuZGxlcj86IEZ1bmN0aW9uKTogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHtcbiAgICBvbkVycm9IYW5kbGVyID0gb25FcnJvSGFuZGxlciB8fCB0aGlzLmhhbmRsZUNyZWF0aW9uRXJyb3JcbiAgICBpZiAoY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3ZWJnbGNvbnRleHRjcmVhdGlvbmVycm9yJywgKGV2ZW50OmFueSkgPT4ge1xuICAgICAgICBvbkVycm9IYW5kbGVyKGV2ZW50LnN0YXR1c01lc3NhZ2UpXG4gICAgICB9LCBmYWxzZSlcbiAgICB9XG4gICAgbGV0IGNvbnRleHQ6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCA9IHRoaXMuY3JlYXRlM0RDb250ZXh0KGNhbnZhcywgY2FudmFzQXR0cmlicylcbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIG9uRXJyb0hhbmRsZXIoJycpXG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0XG4gIH1cbiAgLyoqXG4gICAqIOWIm+W7ujNE5LiK5LiL5paH546v5aKDXG4gICAqIEBwYXJhbSBjYW52YXMgXG4gICAqIEBwYXJhbSBjYW52YXNBdHRyaWJzIFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjcmVhdGUzRENvbnRleHQoY2FudmFzOiBhbnksIGNhbnZhc0F0dHJpYnM/OiBDYW52YXMyRENvbnRleHRBdHRyaWJ1dGVzKTogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHtcbiAgICBsZXQgbmFtZXM6IEFycmF5PFN0cmluZz4gPSBbJ3dlYmdsJywgJ2V4cGVyaW1lbnRhbC13ZWJnbCcsICd3ZWJraXQtM2QnLCAnbW96LXdlYmdsJ11cbiAgICBsZXQgY29udGV4dDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ID0gbnVsbFxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7ICsraSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KG5hbWVzW2ldLnRvU3RyaW5nKCksIGNhbnZhc0F0dHJpYnMpXG4gICAgICB9IGNhdGNoIChlKSB7IH1cbiAgICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHRcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYkdMVXRpbHMiXX0=
