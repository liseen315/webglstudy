import CuonUtils from '../lib/CuonUtils'

function main(): void {
  let VSHADER_SOURCE: string =
    'attribute vec4 a_position;\n' +
    'void main() {\n' +
    ' gl_Position = a_position;' +
    '}\n'
  let FSHADER_SOURCE: string =
    'void main() {\n' +
    ' gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n' +
    '}\n'

  let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('webgl')
  let gl: WebGLRenderingContext = CuonUtils.getWebGLContext(canvas)
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL')
    return
  }
  let program: WebGLProgram = CuonUtils.createProgram(gl, VSHADER_SOURCE, FSHADER_SOURCE)
  gl.useProgram(program)

  let count: number = initVertexBuffers(gl, program, 'a_position')

  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, count)
}

function initVertexBuffers(gl: WebGLRenderingContext, program: WebGLProgram, name: string): number {
  let vertices: Float32Array = new Float32Array([-0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,-0.5])
  let count: number = 4
  let vertexBuffer: WebGLBuffer = gl.createBuffer()
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object')
    return -1
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
  let a_position: number = gl.getAttribLocation(program, name)
  if (a_position < 0) {
    console.log('Failed to get the storage location of a_Position')
    return -1
  }
  gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(a_position)
  return count
}

main()