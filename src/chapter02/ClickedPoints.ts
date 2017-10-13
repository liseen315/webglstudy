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

  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)

  let g_points: Array<number> = []

  canvas.addEventListener('click', (e: MouseEvent) => {
    let x: number = e.clientX
    let y: number = e.clientY
    let targetCanvas: HTMLCanvasElement = e.target as HTMLCanvasElement
    let rect: ClientRect = targetCanvas.getBoundingClientRect()
    x = ((x - rect.left) - canvas.width / 2) / (canvas.width / 2)
    y = (canvas.height / 2 - (y - rect.top)) / (canvas.height / 2)
    g_points.push(x)
    g_points.push(y)
    gl.clear(gl.COLOR_BUFFER_BIT)
    let len = g_points.length
    for (let i: number = 0; i < len; i += 2) {
      gl.vertexAttrib3f(position, g_points[i], g_points[i + 1], 0.0)
      gl.drawArrays(gl.POINTS, 0, 1)
    }
  })

  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)
}


main()