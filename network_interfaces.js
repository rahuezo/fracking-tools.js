let eventsInterface = `<div id="msg-holder"></div>
    <div class="card w-100 my-4">
        <div class="card-body text-left">
        <h4 class="card-title mb-4">1. Upload Event Files</h4>
        <p class="card-text">
            Upload <strong>.csv</strong> spreadsheet where each column is
            an event and each cell under an event is an individual that attended
            that event.
        </p>
        </div>
        <div class="card-footer">
        <div class="text-center">
            <input class="form-control" type="file" id="${config.fileInput}" value="" multiple required>
        </div>
        </div>
    </div>
    <div class="card mb-4 w-100 my-4">
        <div class="card-body text-left">
        <h4 class="card-title mb-4">2. Choose Output <strong>.zip</strong> Name</h4>
        <p class="card-text">
            Enter the output .zip name without a file extension.
        </p>
        </div>
        <div class="card-footer">
        <div class="text-center">
            <input class="form-control" type="text" id="${config.outputZipname}" placeholder="Enter a .zip name" required>
        </div>
        </div>
    </div>
    <div class="card mb-4 w-100 my-4">
        <div class="card-body text-left">
        <h4 class="card-title mb-4">3. Build Event Networks</h4>
        </div>
        <div class="card-footer">
        <div class="text-center">
            <button type="button" id="${config.buildButton}" class="btn btn-dark btn-block" name="button">Build <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
        </div>
        </div>
    </div>`; 

let pairsInterface = `<div id="msg-holder"></div>
    <div class="card w-100 my-4">
        <div class="card-body text-left">
        <h4 class="card-title mb-4">1. Upload Individual Pairs Files</h4>
        <p class="card-text">
            Upload <strong>.csv</strong> spreadsheet with only two columns: individual A column and individual B column. Each row represents unique individual pairs.
        </p>
        </div>
        <div class="card-footer">
        <div class="text-center">
            <input class="form-control" type="file" id="${config.fileInput}" value="" multiple required>
        </div>
        </div>
    </div>
    <div class="card mb-4 w-100 my-4">
        <div class="card-body text-left">
        <h4 class="card-title mb-4">2. Choose Output <strong>.zip</strong> Name</h4>
        <p class="card-text">
            Enter the output .zip name without a file extension.
        </p>
        </div>
        <div class="card-footer">
        <div class="text-center">
            <input class="form-control" type="text" id="${config.outputZipname}" placeholder="Enter a .zip name" required>
        </div>
        </div>
    </div>
    <div class="card mb-4 w-100 my-4">
        <div class="card-body text-left">
        <h4 class="card-title mb-4">3. Build Pairs Networks</h4>
        </div>
        <div class="card-footer">
        <div class="text-center">
            <button type="button" id="${config.buildButton}" class="btn btn-dark btn-block" name="button">Build <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
        </div>
        </div>
    </div>`; 