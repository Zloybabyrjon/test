let input, search, pr, result_arr;

function escapeRegExp(input) {
    return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function FindOnPage(name, status) {
    input = document.getElementById(name).value;

    if (input.length < 2 && status == true) {
        alert('Для поиска вы должны ввести две или более символов');
        return;
    }

    if (input.length >= 2) {
        search = new RegExp(escapeRegExp(input), 'ig');
        pr = document.body.innerHTML;
        result_arr = pr.replace(search, '<span style="background-color:blue;">$&</span>');

        document.body.innerHTML = result_arr;
    }
}


