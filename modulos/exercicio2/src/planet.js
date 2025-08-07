class Planet {
    constructor(name, surfaceArea){
        this.name = name;
        this.surfaceArea = surfaceArea;
    }

    rotate() {
        console.log("Rotacionando");
    }
}

export { Planet };