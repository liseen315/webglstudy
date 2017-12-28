function main() {
  let canvas = <HTMLCanvasElement>document.getElementById('example');
  if (!canvas) {
    console.log('Failed to retrieve the canvas element');
    return false
  }

  let context: CanvasRenderingContext2D = canvas.getContext('2d')
  context.clearRect(0,0,400,400);
  context.fillStyle = 'rgba(255,255,0,1.0)';//red,green,blue,alpha
  context.fillRect(0, 0, 400, 400);
}

main()