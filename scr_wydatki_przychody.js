//Script fills the data input with today date as default

var date = '';
var today = new Date();

date = today.getFullYear();

if(today.getMonth().length=1)
{
	date = date + '-'+ '0'+(today.getMonth()+1);
}
else
{
	date = date + '-'+(today.getMonth()+1);
};

if(today.getDate().length=1)
{
	date = date + '-0'+today.getDate();
}
else
{
	date = date + '-' +today.getDate();
};
document.getElementById('datep').value = date;



