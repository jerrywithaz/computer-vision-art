
function calculateAspectRatioFit(srcWidth: number, srcHeight: number, maxWidth: number, maxHeight: number) {

    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  
    return { 
        ratio: ratio,
        width: srcWidth*ratio, 
        height: srcHeight*ratio 
    };
  
}

export default calculateAspectRatioFit;