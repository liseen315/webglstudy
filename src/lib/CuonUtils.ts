import WebGLUtils from './WebGLUtils'
class CuonUtils {
  /**
   * 创建WebGLProgram
   * @param gl 
   * @param vshader 
   * @param fshader 
   */
  public static createProgram(gl: WebGLRenderingContext, vshader: string, fshader: string): WebGLProgram {
    let vertexShader: WebGLShader = CuonUtils.createShader(gl, gl.VERTEX_SHADER, vshader)
    let fragmentShader: WebGLShader = CuonUtils.createShader(gl, gl.FRAGMENT_SHADER, fshader)
    if (!vertexShader || !fragmentShader) {
      return null
    }
    let program: WebGLProgram = gl.createProgram()
    if (!program) {
      return null
    }
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    let linked: any = gl.getProgramParameter(program, gl.LINK_STATUS)
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
   * 创建shader对象
   * @param gl 
   * @param type 
   * @param source 
   */
  private static createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
    let shader = gl.createShader(type)
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
   * @param vshader 
   * @param fshader 
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
   * @param canvas WebGLRenderingContext
   */
  public static getWebGLContext(canvas: any): WebGLRenderingContext {
    let gl: WebGLRenderingContext = WebGLUtils.setupWebGL(canvas)
    if (!gl) return null
    return gl
  }
}

export default CuonUtils