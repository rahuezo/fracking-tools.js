class EventsAdjacencyMatrix {
    constructor(rows) {
        this.rows = rows; 
    }

    getEvents() {
        let events = [];
        for (let j = 0; j < this.rows[0].length; j++) {
            let column = []; 
            for (let i = 0; i < this.rows.length; i++) {
                column.push(this.rows[i][j]);
            }
            events.push(column);
        }
        return events; 
    }

    getEvents2() {
        const DataFrame = dfjs.DataFrame; 
        const df = new DataFrame(this.rows.slice(0), this.rows[0]); 

        return df; 
    }

    toNetwork() {

    }

    build() {

    }
}