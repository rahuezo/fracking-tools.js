class EventsAdjacencyMatrix {
    constructor(rows, header=true) {     
        this.rows = rows; 
        this.header = header;    
    }

    getEvents() {
        let events = [];
        for (let j = 0; j < this.rows[0].length; j++) {
            let column = [];             
            for (let i = this.header ? 1 : 0; i < this.rows.length; i++) {
                let value = cleanText(this.rows[i][j]); 
                if (value.length > 0) {
                    column.push(value);
                }                
            }
            events.push(column);
        }
        return events; 
    }

    setEdges(network) {
        let edges = []; 
        this.getEvents().forEach(
            function(event) {
                for (let i = 0; i < event.length; i++) {
                    for (let j = i + 1; j < event.length; j++) {
                        network.addEdge(cleanText(event[i]), cleanText(event[j])); 
                    }
                }
            }
        )}
    
    areRelated(edges, a, b) {
        for (let edge of edges) {
            if (edge[0] == a && edge[1] == b || edge[0] == b && edge[1] == a) return 1;             
        } return 0; 
    }

    toGraph() {
        let network = new jsnx.Graph();  
        this.setEdges(network);
        let nodes = network.nodes(); 
        let edges = network.edges(); 
        nodes.sort();         
        return [nodes, edges];         
    }

    build() {
        let network = this.toGraph(); 
        let nodes = network[0]; 
        let edges = network[1]; 

        let rows = [[''].concat(nodes)];

        for (let nodeA of nodes) {
            let row = [nodeA]; 
            for (let nodeB of nodes) {
                let related = this.areRelated(edges, nodeA, nodeB); 
                row.push(related); 
            }
            rows.push(row); 
        }
        return rows;         
    }
}


class PairsAdjacencyMatrix {
    constructor(rows, header=true) {     
        this.rows = rows; 
        this.header = header;    
    }

    setEdges(network) {
        if (this.header) {
            network.addEdgesFrom(this.rows.slice(1, this.rows.length)); 
        } else {
            network.addEdgesFrom(this.rows); 
        }
        
        }
    
    areRelated(edges, a, b) {
        for (let edge of edges) {
            if (edge[0] == a && edge[1] == b || edge[0] == b && edge[1] == a) return 1;             
        } return 0; 
    }

    toGraph() {
        let network = new jsnx.Graph();  
        this.setEdges(network);
        let nodes = network.nodes(); 
        let edges = network.edges(); 
        nodes.sort();         
        return [nodes, edges];         
    }

    build() {
        let network = this.toGraph(); 
        let nodes = network[0]; 
        let edges = network[1]; 

        let rows = [[''].concat(nodes)];

        for (let nodeA of nodes) {
            let row = [nodeA]; 
            for (let nodeB of nodes) {
                let related = this.areRelated(edges, nodeA, nodeB); 
                row.push(related); 
            }
            rows.push(row); 
        }
        return rows;         
    }
}