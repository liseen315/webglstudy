import WebGLUtils from './WebGLUtils'
class CuonUtils {
  /**
   * 创建WebGLProgram
   * @param gl 
   * @param vshader 顶点着色器
   * @param fshader 片元着色器
   */
  public static createProgram(gl: WebGLRenderingContext, vshader: string, fshader: string): WebGLProgram {
    //创建顶点着色器实例
    let vertexShader: WebGLShader = CuonUtils.createShader(gl, gl.VERTEX_SHADER, vshader)
    //创建片元着色器实例
    let fragmentShader: WebGLShader = CuonUtils.createShader(gl, gl.FRAGMENT_SHADER, fshader)
    if (!vertexShader || !fragmentShader) {
      return null
    }
    //WebGLProgram 是 WebGL API 的一部分，它由两个WebGLShaders （webgl着色器）组成，分别为顶点着色器还有片元着色器（两种着色器都是由GLSL语言来写的），WebGLProgram 负责将两个着色器使用在一个webgl程序上
    let program: WebGLProgram = gl.createProgram()
    if (!program) {
      return null
    }
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    let linked: any = gl.getProgramParameter(program, gl.LINK_STATUS)
    //如果链接出错删除shader以及program
    if (!linked) {
      let error: string = gl.getProgramInfoLog(program)
      console.log('Failed to link program: ' + error)
      gl.deleteProgram(program)
      gl.deleteShader(fragmentShader)
      gl.deleteShader(vertexShader)
      return null
    }

    return program
  }

  /**
   * 创建shader对象实例
   * @param gl WebGLRenderingContext
   * @param type shader类型 VERTEX_SHADER 顶点类型 FRAGMENT_SHADER 片元类型
   * @param source 对应类型的源码
   */
  private static createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
    let shader: WebGLShader = gl.createShader(type)
    if (shader == null) {
      console.log('unable to create shader')
      return null
    }
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    let compiled: any = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
    if (!compiled) {
      let error: String = gl.getShaderInfoLog(shader)
      console.log('Failed to compile shader: ' + error)
      gl.deleteShader(shader)
      return null
    }
    return shader
  }
  /**
   * 初始化shader
   * @param gl 
   * @param vshader 顶点着色器代码
   * @param fshader 片元着色器代码
   */
  public static initShaders(gl: WebGLRenderingContext, vshader: string, fshader: string): Boolean {
    let program: WebGLProgram = CuonUtils.createProgram(gl, vshader, fshader)
    if (!program) {
      console.log('Failed to create program')
      return false
    }
    gl.useProgram(program)

    return true
  }

  /**
   * 获取canvas 对象
   * @param canvas HTMLCanvasElement
   */
  public static getWebGLContext(canvas: HTMLCanvasElement): WebGLRenderingContext {
    let gl: WebGLRenderingContext = WebGLUtils.setupWebGL(canvas)
    if (!gl) return null
    return gl
  }
}

export default CuonUtils