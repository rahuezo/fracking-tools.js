console.log('Hello');

class Csv {
    constructor(inputFile) {
        this.inputFile = inputFile; 
    }

    read() {
        let reader = new FileReader(); 
        return reader.readAsText(this.inputFile); 
    }

    get getRows() {

    }
}