class CommonUtils {
  constructor() {

  }
  /**
   * 角度转弧度
   * @param angle 角度 
   */
  public static angleToRadian(angle: number): number {
    return angle * (Math.PI / 180.0)
  }
  /**
   * 弧度转角度
   * @param radian 弧度
   */
  public static radianToAngle(radian: number): number {
    return radian * (180.0 / Math.PI)
  }
}

export default CommonUtils