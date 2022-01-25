function headlessDumpJSON(json_data) {
    jQuery.ajax({
        type: "POST",
        url: "store.php",
        data: "data=" + encodeURI(json_data)
    });
}