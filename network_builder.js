function getSelectedFiles() {
    return document.getElementById(config.fileInput).files;     
}


function getMatrixName(csvFilename) {
    let baseName = cleanText(csvFilename.split('.csv')[0]); 
    return `${baseName}_adjacency_matrix.csv`; 
}

const buildEventsMatrices = async () => {    
    try {        
        let zipname = document.getElementById(config.outputZipname).value || config.genericZipname; 

        zipname = zipname.toLowerCase().slice(zipname.length - 4, zipname.length) == '.zip' ? zipname : zipname + '.zip'; 

        let matrices = []; 

        for (let file of getSelectedFiles()) {
            const event = await loadCsv(file); 
            
            let adjmat = new EventsAdjacencyMatrix(event.data); 
            
            matrices.push({name:getMatrixName(event.name), data:adjmat.build()});
        }

        zipify(matrices, writeCsv, outputZipname=zipname); 

        let nMatrices = matrices.length; 
        
        showMessage(`<i class="fas fa-check"></i> Successfully 
                    created ${nMatrices} ${nMatrices > 1 ? 'matrices' : 'matrix'} 
                    from event ${nMatrices > 1 ? 'files' : 'file'}!`, config.msgHolder); 

    } catch (error) {
        console.log("An error occurred while trying to build event matrices.", error); 
    }

}


const buildPairsMatrices = async () => {    
    try {        
        let zipname = document.getElementById(config.outputZipname).value || config.genericZipname; 

        zipname = zipname.toLowerCase().slice(zipname.length - 4, zipname.length) == '.zip' ? zipname : zipname + '.zip'; 

        let matrices = []; 

        for (let file of getSelectedFiles()) {
            const event = await loadCsv(file); 
            
            let adjmat = new PairsAdjacencyMatrix(event.data); 
            
            matrices.push({name:getMatrixName(event.name), data:adjmat.build()});
        }

        zipify(matrices, writeCsv, outputZipname=zipname); 

        let nMatrices = matrices.length; 
        
        showMessage(`<i class="fas fa-check"></i> Successfully 
                    created ${nMatrices} ${nMatrices > 1 ? 'matrices' : 'matrix'} 
                    from individual pair ${nMatrices > 1 ? 'files' : 'file'}!`, config.msgHolder); 

    } catch (error) {
        console.log("An error occurred while trying to build individual pair matrices.", error); 
    }

}


function setupInterface(holder, interface) {
    $(holder).html(interface); 
}


