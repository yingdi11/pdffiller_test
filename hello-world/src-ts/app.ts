import pdfFiller from 'pdffiller'

var sourcePDF = "test/test.pdf";
var destinationPDF =  "test/test_complete.pdf";

var data = {
    "last_name" : "John",
    "first_name" : "Doe",
    "date" : "Jan 1, 2013",
    "football" : "Off",
    "baseball" : "Yes",
    "basketball" : "Off",
    "hockey" : "Yes",
    "nascar" : "Off"
};

console.log(pdfFiller)
pdfFiller.fillForm( sourcePDF, destinationPDF, data, function(err: any) {
    if (err) throw err;
    console.log("In callback (we're done).");
});
