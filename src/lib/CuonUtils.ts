import WebGLUtils from './WebGLUtils'
class CuonUtils {
  constructor() {

  }

  public static getWebGLContext(canvas:any): WebGLRenderingContext {
    let gl: WebGLRenderingContext = WebGLUtils.setupWebGL(canvas)
    if (!gl) return null
    return gl
  }
}

export default CuonUtils