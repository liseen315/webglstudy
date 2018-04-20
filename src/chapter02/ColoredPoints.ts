import CuonUtils from '../lib/CuonUtils'

function main(): void {
  let VSHADER_SOURCE: string = 
    'attribute vec4 a_position;\n' +
    'void main() {\n' +
    ' gl_Position = a_position;\n' +
    ' gl_PointSize = 10.0;\n' +
    '}\n'
  let FSHADER_SOURCE: string =
    'precision mediump float;\n' +
    'uniform vec4 u_FragColor;\n' +
    'void main() {\n' +
    '  gl_FragColor = u_FragColor;\n' +
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

  let u_FragColor: WebGLUniformLocation = gl.getUniformLocation(program, 'u_FragColor')
  if (!u_FragColor) {
    console.log('Failed to get the storage location of u_FragColor')
    return
  }


  let g_points: Array<any> = []
  let g_colors: Array<any> = []
  canvas.addEventListener('click', (e: MouseEvent) => {
    let x: number = e.clientX
    let y: number = e.clientY
    let targetCanvas: HTMLCanvasElement = e.target as HTMLCanvasElement
    let rect: ClientRect = targetCanvas.getBoundingClientRect()
    x = ((x-rect.left)-targetCanvas.width/2)/(targetCanvas.width/2)
    y = -((y-rect.top)- targetCanvas.height/2)/(targetCanvas.height/2)
    g_points.push([x, y])
    if (x >= 0.0 && y >= 0.0) {
      g_colors.push([1.0, 0.0, 0.0, 1.0])
    } else if (x < 0.0 && y < 0.0) {
      g_colors.push([0.0, 1.0, 0.0, 1.0])
    } else {
      g_colors.push([1.0, 1.0, 1.0, 1.0])
    }

    gl.clear(gl.COLOR_BUFFER_BIT)
    let len: number = g_points.length
    for (let i: number = 0; i < len; i++) {
      let xy: Array<any> = g_points[i]
      let rgba: Array<any> = g_colors[i]
      gl.vertexAttrib3f(position, xy[0], xy[1], 0.0)
      gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3])
      gl.drawArrays(gl.POINTS, 0, 1)
    }

    
  })

  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)

}

main()