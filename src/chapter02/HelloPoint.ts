import CuonUtils from '../lib/CuonUtils'

function main(): void {
  //定义顶点shader
  let VSHADER_SOURCE: string = `
    void main() {
      gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
      gl_PointSize = 20.0;
    }
  `
  //定义片元shader
  let FSHADER_SOURCE: string = `
    void main() {
      gl_FragColor = vec4(1, 0.0, 0.0, 1);
    }
  `

  let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('webgl')
  //获取webgl渲染上下文
  let gl: WebGLRenderingContext = CuonUtils.getWebGLContext(canvas)
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL')
    return
  }
  //创建并编译shader到gl中
  if (!CuonUtils.initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.')
    return
  }
  //背景填色
  gl.clearColor(0.0, 1.0, 0.0, 1.0)
  //清除颜色缓冲
  gl.clear(gl.COLOR_BUFFER_BIT)
  //画点
  gl.drawArrays(gl.POINTS, 0, 1)
}
main()

