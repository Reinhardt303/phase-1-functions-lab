function distanceFromHqInBlocks(streetValue){
    return Math.abs(42 - streetValue);
}

function distanceFromHqInFeet(streetValue) {
    distanceFromHqInBlocks(streetValue);
        return 264 * (Math.abs(42 - streetValue));
  }

function distanceTravelledInFeet(start, destination){
    return 264 * (Math.abs(destination - start));
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet > 2500){
        return "cannot travel that far"
    }
    else if (distanceInFeet >= 2000){
        return 25
    }
    else if (distanceInFeet > 400){
        return .02 * (distanceInFeet - 400)
    }
    else {
        return 0
    }
}