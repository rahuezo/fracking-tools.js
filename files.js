const loadCsv = (csvFile, separator=',') => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Problem parsing input file."));
        };

        reader.onload = () => {            
            let rows = event.target.result.split(/\r\n|\n/); 
            let tempHolder = []; 
            
            rows.slice(0, rows.length - 1).forEach((row) => tempHolder.push(row.split(separator))); 

            resolve({name:csvFile.name, data:tempHolder});
        };
        reader.readAsText(csvFile);
    });
};


function writeCsv(rows) { 
    let csvRows = []; 
    rows.forEach((rowArray, index) => csvRows.push(rowArray.join(','))) 
    return csvRows.join('\n'); 
}


function zipify(files, dataManipulator, outputZipName='zipped_files.zip') {
    let zip = new JSZip(); 

    files.forEach(function(file){        
        zip.file(file.name, dataManipulator(file.data)); 
    })

    zip.generateAsync({type:'blob'}).then(function(content) {
        saveAs(content, outputZipName);
    }); 
}
