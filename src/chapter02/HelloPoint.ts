import CuonUtils from '../lib/CuonUtils'

function main(): void {
  let VSHADER_SOURCE: string = `
    void main() {
      gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
      gl_PointSize = 20.0;
    }
  `
  let FSHADER_SOURCE: string = `
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
  `

  let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('webgl')
  let gl:WebGLRenderingContext = CuonUtils.getWebGLContext(canvas)
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL')
    return
  }

  if (!CuonUtils.initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.')
    return
  }

  gl.clearColor(0.0, 0.0, 0.0, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.drawArrays(gl.POINTS,0,1)
}
main()

