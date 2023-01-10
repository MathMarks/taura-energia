


 $(document).ready(function() {
	
	
const sheetID = "1pQS2-OkWRpOeeaAfQsx3EmuhoZ3H-13a9qSSkhDUDgY"
const url = "https://docs.google.com/spreadsheets/d/"
const query1 = `/gviz/tq?`

const endpoint1 = `${url}${sheetID}${query1}`;

//console.log(endpoint1);

fetch(endpoint1)
.then(response => response.text())
.then(data => {

    //console.log(data);
    const temp = data.substring(47).slice(0,-2);
    //console.log(temp);
    const json = JSON.parse(temp);
    //console.log(json);
    const rows = json.table.rows;

    $('.socios .card').each(function (index, element) {
        
        //console.log($(this).find('.title').text());
        $(this).find('.title').text(rows[index].c[1].v);
        $(this).find('.subtitle').text(rows[index].c[2].v);
        $(this).find('.content').text(rows[index].c[3].v);
        $(this).find('.image').html(rows[index].c[8].v);
        
    });
 });


});