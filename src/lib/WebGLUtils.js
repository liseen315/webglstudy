(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbGliL1dlYkdMVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7c0RDQUE7OztBQUNFO0FBRUE7QUFBQyxBQUVELEFBQU0sQUFBQyxBQUFtQjs7Ozs0Q0FBQyxBQUFXO0FBQ3BDLGdCQUFJLEFBQVMsWUFBRyxBQUFRLFNBQUMsQUFBb0IscUJBQUMsQUFBTSxBQUFDLFFBQUMsQUFBQyxBQUFDO0FBQ3hELEFBQUUsQUFBQyxnQkFBQyxBQUFTLEFBQUMsV0FBQyxBQUFDO0FBQ2Qsb0JBQUksQUFBRyxNQUFHLEFBQWU7QUFDekIsQUFBUywwQkFBQyxBQUFTLFlBQUcsQUFBSSxLQUFDLEFBQVksYUFBQyxBQUFHLEFBQUMsQUFDOUM7QUFBQyxBQUNIO0FBQUMsQUFFRCxBQUFNLEFBQUMsQUFBWTs7O3FDQUFDLEFBQVc7QUFDN0IsQUFBTSxtQkFBQyxBQUFFLEtBQ1AsQUFBMEYsNkZBQUcsQUFBRyxNQUFHLEFBQVE7QUFDN0csQUFBTSxtQkFBQyxBQUFFLEtBQ1AsQUFBd0UsMkVBQ3hFLEFBQXFCLHdCQUNyQixBQUE0RCwrREFDNUQsQUFBZ0IsbUJBQUcsQUFBRyxNQUFHLEFBQVEsV0FDakMsQUFBUSxXQUNSLEFBQW9CLEFBQ3hCO0FBQUM7QUFDRCxBQUtHLEFBQ0ksQUFBTSxBQUFDLEFBQVU7Ozs7Ozs7OzttQ0FBQyxBQUFXLFFBQUUsQUFBeUMsZUFBRyxBQUF3QjtBQUN4RyxBQUFhLDRCQUFHLEFBQWEsaUJBQUksQUFBSSxLQUFDLEFBQW1CO0FBQ3pELEFBQUUsQUFBQyxnQkFBQyxBQUFNLE9BQUMsQUFBZ0IsQUFBQyxrQkFBQyxBQUFDO0FBQzVCLEFBQU0sdUJBQUMsQUFBZ0IsaUJBQUMsQUFBMkIsNkJBQUUsVUFBQyxBQUFTLEFBQUUsQUFBRTtBQUNqRSxBQUFhLGtDQUFDLEFBQUssTUFBQyxBQUFhLEFBQUMsQUFDcEM7QUFBQyxtQkFBRSxBQUFLLEFBQUMsQUFDWDtBQUFDO0FBQ0QsZ0JBQUksQUFBTyxVQUEwQixBQUFJLEtBQUMsQUFBZSxnQkFBQyxBQUFNLFFBQUUsQUFBYSxBQUFDO0FBQ2hGLEFBQUUsQUFBQyxnQkFBQyxDQUFDLEFBQU8sQUFBQyxTQUFDLEFBQUM7QUFDYixBQUFhLDhCQUFDLEFBQUUsQUFBQyxBQUNuQjtBQUFDO0FBQ0QsQUFBTSxtQkFBQyxBQUFPLEFBQ2hCO0FBQUM7QUFDRCxBQUlHLEFBQ0ksQUFBTSxBQUFDLEFBQWU7Ozs7Ozs7O3dDQUFDLEFBQVcsUUFBRSxBQUF5QztBQUNsRixnQkFBSSxBQUFLLFFBQWtCLENBQUMsQUFBTyxTQUFFLEFBQW9CLHNCQUFFLEFBQVcsYUFBRSxBQUFXLEFBQUM7QUFDcEYsZ0JBQUksQUFBTyxVQUEwQixBQUFJO0FBQ3pDLEFBQUcsQUFBQyxpQkFBQyxJQUFJLEFBQUMsSUFBVyxBQUFDLEdBQUUsQUFBQyxJQUFHLEFBQUssTUFBQyxBQUFNLFFBQUUsRUFBRSxBQUFDLEdBQUUsQUFBQztBQUM5QyxvQkFBSSxBQUFDO0FBQ0gsQUFBTyw4QkFBRyxBQUFNLE9BQUMsQUFBVSxXQUFDLEFBQUssTUFBQyxBQUFDLEFBQUMsR0FBQyxBQUFRLEFBQUUsWUFBRSxBQUFhLEFBQUMsQUFDakU7QUFBQyxrQkFBQyxBQUFLLEFBQUMsT0FBQyxBQUFDLEFBQUMsR0FBQyxBQUFDLEFBQUMsQ0FBQztBQUNmLEFBQUUsQUFBQyxvQkFBQyxBQUFPLEFBQUMsU0FBQyxBQUFDO0FBQ1osQUFBSyxBQUNQO0FBQUMsQUFDSDtBQUFDO0FBRUQsQUFBTSxtQkFBQyxBQUFPLEFBQ2hCO0FBQUMsQUFFRjs7Ozs7O0FBRUQsa0JBQWUsQUFBVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBXZWJHTFV0aWxzIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVDcmVhdGlvbkVycm9yKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF1cbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICBsZXQgc3RyID0gJ2NyZWF0ZSBlcnJvciEnXG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5tYWtlRmFpbEhUTUwoc3RyKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBtYWtlRmFpbEhUTUwobXNnOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAnJyArXG4gICAgICAnPGRpdiBzdHlsZT1cIm1hcmdpbjogYXV0bzsgd2lkdGg6NTAwcHg7ei1pbmRleDoxMDAwMDttYXJnaW4tdG9wOjIwZW07dGV4dC1hbGlnbjpjZW50ZXI7XCI+JyArIG1zZyArICc8L2Rpdj4nXG4gICAgcmV0dXJuICcnICtcbiAgICAgICc8dGFibGUgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjOENFOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1wiPjx0cj4nICtcbiAgICAgICc8dGQgYWxpZ249XCJjZW50ZXJcIj4nICtcbiAgICAgICc8ZGl2IHN0eWxlPVwiZGlzcGxheTogdGFibGUtY2VsbDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj4nICtcbiAgICAgICc8ZGl2IHN0eWxlPVwiXCI+JyArIG1zZyArICc8L2Rpdj4nICtcbiAgICAgICc8L2Rpdj4nICtcbiAgICAgICc8L3RkPjwvdHI+PC90YWJsZT4nXG4gIH1cbiAgLyoqXG4gICAqIOW7uueri1dlYkdM546v5aKDXG4gICAqIEBwYXJhbSBjYW52YXMg55S75biDXG4gICAqIEBwYXJhbSBjYW52YXNBdHRyaWJzIOeUu+W4g+WxnuaAp1xuICAgKiBAcGFyYW0gb25FcnJvSGFuZGxlciDplJnor6/lm57osINcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBXZWJHTChjYW52YXM6IGFueSwgY2FudmFzQXR0cmlicz86IENhbnZhczJEQ29udGV4dEF0dHJpYnV0ZXMgLCBvbkVycm9IYW5kbGVyPzogRnVuY3Rpb24pOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQge1xuICAgIG9uRXJyb0hhbmRsZXIgPSBvbkVycm9IYW5kbGVyIHx8IHRoaXMuaGFuZGxlQ3JlYXRpb25FcnJvclxuICAgIGlmIChjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmdsY29udGV4dGNyZWF0aW9uZXJyb3InLCAoZXZlbnQ6YW55KSA9PiB7XG4gICAgICAgIG9uRXJyb0hhbmRsZXIoZXZlbnQuc3RhdHVzTWVzc2FnZSlcbiAgICAgIH0sIGZhbHNlKVxuICAgIH1cbiAgICBsZXQgY29udGV4dDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ID0gdGhpcy5jcmVhdGUzRENvbnRleHQoY2FudmFzLCBjYW52YXNBdHRyaWJzKVxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgb25FcnJvSGFuZGxlcignJylcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHRcbiAgfVxuICAvKipcbiAgICog5Yib5bu6M0TkuIrkuIvmlofnjq/looNcbiAgICogQHBhcmFtIGNhbnZhcyBcbiAgICogQHBhcmFtIGNhbnZhc0F0dHJpYnMgXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZTNEQ29udGV4dChjYW52YXM6IGFueSwgY2FudmFzQXR0cmlicz86IENhbnZhczJEQ29udGV4dEF0dHJpYnV0ZXMpOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQge1xuICAgIGxldCBuYW1lczogQXJyYXk8U3RyaW5nPiA9IFsnd2ViZ2wnLCAnZXhwZXJpbWVudGFsLXdlYmdsJywgJ3dlYmtpdC0zZCcsICdtb3otd2ViZ2wnXVxuICAgIGxldCBjb250ZXh0OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgPSBudWxsXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQobmFtZXNbaV0udG9TdHJpbmcoKSwgY2FudmFzQXR0cmlicylcbiAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dFxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2ViR0xVdGlscyJdfQ==
