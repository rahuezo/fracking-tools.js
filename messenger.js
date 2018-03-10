function showMessage(msg, msgHolder, type='success') {
    $(msgHolder).empty(); 

    $(msgHolder).html(`<div class="alert alert-${type} alert-dismissible fade show" id="msg-display" role="alert">
        ${msg}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`); 
}