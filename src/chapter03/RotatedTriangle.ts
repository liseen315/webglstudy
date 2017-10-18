import CuonUtils from '../lib/CuonUtils'

function main(): void {
  let VSHADER_SOURCE: string =
    'attribute vec4 a_Position;\n' +
    'uniform float u_CosB, u_SinB;\n' +
    'void main() {\n' +
    '  gl_Position.x = a_Position.x * u_CosB - a_Position.y * u_SinB;\n' +
    '  gl_Position.y = a_Position.x * u_SinB + a_Position.y * u_CosB;\n' +
    '  gl_Position.z = a_Position.z;\n' +
    '  gl_Position.w = 1.0;\n' +
    '}\n';
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

  let count: number = initVertexBuffers(gl, program, 'a_Position')
  const ANGLE: number = 180.0
  let radian:number = Math.PI * ANGLE / 180.0
  let cosB:number = Math.cos(radian)
  let sinB:number = Math.sin(radian)

  let u_CosB:WebGLUniformLocation = gl.getUniformLocation(program,'u_CosB')
  let u_SinB:WebGLUniformLocation = gl.getUniformLocation(program,'u_SinB')
  if (!u_CosB || !u_SinB) {
    console.log('Failed to get the storage location of u_CosB or u_SinB')
    return
  }

  gl.uniform1f(u_CosB,cosB)
  gl.uniform1f(u_SinB,sinB)

  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.drawArrays(gl.TRIANGLES, 0, count)
}

function initVertexBuffers(gl: WebGLRenderingContext, program: WebGLProgram, name: string): number {
  let vertices: Float32Array = new Float32Array([0.0, 0.5, -0.5, -0.5, 0.5, -0.5])
  let count: number = 3
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