/** Problem 04 - (Delete / Store) */
var fileName= "#report.pdf";
//write your code here
if (fileName.startsWith('#')){
    console.log("Store");

}else if(fileName.endsWith('.pdf') || fileName.endsWith('.docx')){
    console.log('Store');

}else{
    console.log('Delete');
}