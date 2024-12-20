document.getElementById('downloadPDF').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;

    // Configuración del documento PDF
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.html(document.body, {
        callback: function (doc) {
            doc.save('Curriculum_Jesus_Rodolfo_Gil_Farias.pdf');
        },
        margin: 0,
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: doc.internal.pageSize.getWidth(), // Usar todo el ancho de la página
        windowWidth: document.body.scrollWidth
    });
});