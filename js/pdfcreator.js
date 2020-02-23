function generatePDF() {
    const element = document.getElementById("result");

    html2pdf()
        .from(element)
        .save();
}