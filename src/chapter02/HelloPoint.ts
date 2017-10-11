import CuonUtils from '../lib/CuonUtils'

function main(): void {
  let VSHADER_SOURCE: string =
    'void main() {\n' +
    '  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n' +  //设置点坐标
    '  gl_PointSize = 30.0;\n' +                    //设置点大小
    '}\n'
  let FSHADER_SOURCE: string =
    'void main() {\n' +
    '  gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);\n' + //设置点颜色
    '}\n'

  let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('webgl')
  let gl = CuonUtils.getWebGLContext(canvas)
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

