import CuonUtils from '../lib/CuonUtils'

function main() {
  let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('webgl')

  let gl:WebGLRenderingContext = CuonUtils.getWebGLContext(canvas)
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL')
    return
  }
  gl.clearColor(0.0,0.0,1.0,1.0)
  // gl.COLOR_BUFFER_BIT 颜色缓冲区
  // gl.DEPTH_BUFFER_BIT  深度缓冲区
  // gl.STENCIL_BUFFER_BIT  模板缓冲区
  gl.clear(gl.COLOR_BUFFER_BIT)
}
main()