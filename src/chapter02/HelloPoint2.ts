import CuonUtils from '../lib/CuonUtils'

function main(): void {
  let VSHADER_SOURCE: string =
    'attribute vec4 a_position;\n' +
    'void main() {\n' +
    ' gl_Position = a_position;\n' +
    ' gl_PointSize = 10.0;\n' +
    '}\n'

  let FSHADER_SOURCE: string =
    'void main() {\n' +
    '  gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);\n' +
    '}\n'
  let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('webgl')
  let gl: WebGLRenderingContext = CuonUtils.getWebGLContext(canvas)

  if (!gl) {
    console.log('Failed to get the rendering context for WebGL')
    return
  }

  let program: WebGLProgram = CuonUtils.createProgram(gl, VSHADER_SOURCE, FSHADER_SOURCE)
  gl.useProgram(program)

  let position: number = gl.getAttribLocation(program, 'a_position')

  if (position < 0) {
    console.log('Failed to get the storage location of a_Position')
    return
  }
  // 这里在chrome跟firfox实现有差异,firfox一直是对的,chrome不稳定
  gl.vertexAttrib4f(position, 0.5, 0.5, 0.0,1.0)
  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.drawArrays(gl.POINTS, 0, 1)
}
main()