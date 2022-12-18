console.log("How to use.");
console.log("triangle function calculates parts of the right-angled triangle.")
console.log("Input parameters as follow: parameter 1, type of parameter 1, parameter 2, type of parameter 2.");
console.log("Available types: leg, hypotenuse, adjacent angle, opposite angle, angle.")

function triangle (valueOne, typeOne, valueTwo, typeTwo) {
    let tri = new Triangle();

    if (!tri.populateFields(valueOne, typeOne, valueTwo, typeTwo)) {
        return "failed";
    }

    if (tri.legA !== undefined) {
        if (tri.legA > 0) {
            if (tri.legB !== undefined) {
                if (tri.legB > 0) {
                    tri.hypotenuse = Math.sqrt(Math.pow(tri.legA,2) + Math.pow(tri.legB,2));
                    tri.alpha = radToDeg(Math.atan(tri.legA / tri.legB));
                    tri.beta = radToDeg(Math.atan(tri.legB / tri.legA));
                } else {
                    console.log("Second Leg value is wrong.");
                    return "failed";
                }
            } else if (tri.hypotenuse !== undefined) {
                if (tri.hypotenuse > tri.legA) {
                    tri.legB = Math.sqrt(Math.pow(tri.hypotenuse,2) - Math.pow(tri.legA,2));
                    tri.alpha = radToDeg(Math.atan(tri.legA / tri.legB));
                    tri.beta = radToDeg(Math.atan(tri.legB / tri.legA));
                } else {
                    console.log("Hypotenuse value is wrong.");
                    return "failed";
                }
            } else if (tri.beta !== undefined) {
                if (tri.beta < 90 && tri.beta > 0) {
                    tri.hypotenuse = tri.legA / Math.cos(degToRad(tri.beta));
                    tri.legB = tri.legA * Math.tan(degToRad(tri.beta));
                    tri.alpha = 90 - tri.beta;
                } else {
                    console.log("Adjacent Angle value is wrong.");
                    return "failed";
                }
            } else if (tri.alpha !== undefined) {
                if (tri.alpha < 90 && tri.alpha > 0) {
                    tri.hypotenuse = tri.legA / Math.sin(degToRad(tri.alpha));
                    tri.beta = 90 - tri.alpha;
                    tri.legB = tri.legA * Math.tan(degToRad(tri.beta));            
                } else {
                    console.log("Opposite Angle value is wrong.");
                    return "failed";
                }
            } 
        } else {
            console.log("Firts Leg value is wrong.");
            return "failed";
        }
        
    } else if (tri.hypotenuse !== undefined && tri.beta !== undefined) {
        if (tri.beta < 90 && tri.beta > 0 && tri.hypotenuse > 0) {
            tri.alpha = 90 - tri.beta;
            tri.legA = tri.hypotenuse * Math.sin(degToRad(tri.alpha));
            tri.legB = tri.hypotenuse * Math.sin(degToRad(tri.beta));
        } else {
            console.log("Supplied data is wrong.");
            return "failed";
        }
    } else { 
        console.log ("Supplied combination of types is wrong.");
        return "failed";
    }

    tri.showAll();
    return "success";
}

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}
  
  function radToDeg(rad) {
    return rad / (Math.PI / 180);
}

const Types = {
    Leg: "leg",
    Hypotenuse: "hypotenuse",
    Ajdacent: "adjacent angle",
    Opposite: "opposite angle",
    Angle: "angle"
}

class Triangle {
    constructor(legA, legB, hypotenuse, beta, alpha) {
        this.legA = legA;
        this.legB = legB;
        this.hypotenuse = hypotenuse;
        this.beta = beta;
        this.alpha = alpha;
    }

    populateFields(valueOne, typeOne, valueTwo, typeTwo) {
        switch (typeOne.trim().toLowerCase()) {
            case Types.Leg: 
                this.legA = valueOne 
                break;
            case Types.Hypotenuse: 
                this.hypotenuse = valueOne;
                break;
            case Types.Ajdacent: 
                this.beta = valueOne;
                break;
            case Types.Opposite: 
                this.alpha = valueOne;
                break;
            case Types.Angle: 
                this.beta = valueOne;
                break;
            default: 
                console.log ("First type is wrong. Please read instruction more carefully and try again.");
                return false;
        } 
    
        switch (typeTwo.trim().toLowerCase()) {
            case Types.Leg: 
                if (this.legA) {
                    this.legB = valueTwo;
                } else {
                    this.legA = valueTwo; 
                }
                break;
            case Types.Hypotenuse: 
                this.hypotenuse = valueTwo;
                break;
            case Types.Ajdacent: 
                this.beta = valueTwo;
                break;
            case Types.Opposite: 
                this.alpha = valueTwo;
                break;
            case Types.Angle: 
                this.beta = valueTwo;
                break;
            default: 
                console.log ("Second type is wrong. Please read instruction more carefully and try again.");
                return false;
        }
        return true;
    }

    showAll() {
        console.log("a: " + this.legA 
        + " b: " + this.legB
        + " c: " + this.hypotenuse
        + " alpha: " + this.alpha
        + " beta: " + this.beta);
    }
}