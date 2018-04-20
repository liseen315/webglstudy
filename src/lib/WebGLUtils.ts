class WebGLUtils {
  constructor() {

  }
  /**
   * 处理并创建错误消息
   * @param msg error msg
   */
  static handleCreationError(msg: string): void {
    let container = document.getElementsByTagName('body')[0]
    if (container) {
      let str = 'create error!'
      container.innerHTML = this.makeFailHTML(str)
    }
  }

  static makeFailHTML(msg: string): string {
    return '' +
      '<div style="margin: auto; width:500px;z-index:10000;margin-top:20em;text-align:center;">' + msg + '</div>'
    return '' +
      '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>' +
      '<td align="center">' +
      '<div style="display: table-cell; vertical-align: middle;">' +
      '<div style="">' + msg + '</div>' +
      '</div>' +
      '</td></tr></table>'
  }
  /**
   * 建立WebGL环境
   * @param canvas 画布
   * @param canvasAttribs 画布属性
   * @param onErroHandler 错误回调
   */
  public static setupWebGL(canvas: HTMLCanvasElement, canvasAttribs?: Canvas2DContextAttributes, onErroHandler?: Function): WebGLRenderingContext {
    onErroHandler = onErroHandler || this.handleCreationError
    if (canvas.addEventListener) {
      canvas.addEventListener('webglcontextcreationerror', (event: any) => {
        onErroHandler(event.statusMessage)
      }, false)
    }
    let context: WebGLRenderingContext = this.create3DContext<WebGLRenderingContext>(canvas, canvasAttribs)
    if (!context) {
      onErroHandler('')
    }
    return context
  }
  /**
   * 创建3D上下文环境
   * @param canvas 画布
   * @param canvasAttribs 画布属性
   */
  public static create3DContext<T>(canvas: HTMLCanvasElement, canvasAttribs?: Canvas2DContextAttributes): T {
    let names: Array<String> = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl', 'webgl2']
    let context: any = null
    for (let i: number = 0; i < names.length; ++i) {
      try {
        context = canvas.getContext(names[i].toString(), canvasAttribs)
      } catch (e) { }
      if (context) {
        break
      }
    }

    return context
  }

}

export default WebGLUtils