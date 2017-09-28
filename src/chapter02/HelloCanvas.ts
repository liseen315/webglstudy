import CuonUtils from '../lib/CuonUtils'

function main() {
  let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('webgl')

  let gl = CuonUtils.getWebGLContext(canvas)
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL')
    return
  }
  gl.clearColor(0.0,0.0,0.0,1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)
}