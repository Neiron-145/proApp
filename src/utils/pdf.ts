import jsPDF from 'jspdf';

export const exportarPDF = (c: any) => {
  const pdf = new jsPDF();

  pdf.text('COTIZACIÓN DE CONSTRUCCIÓN', 20, 20);
  pdf.text(`Cliente: ${c.cliente}`, 20, 30);
  pdf.text(`Proyecto: ${c.proyecto}`, 20, 40);
  pdf.text(`Área: ${c.area} m²`, 20, 50);
  pdf.text(`Total: $${c.total}`, 20, 60);

  pdf.save(`cotizacion_${c.id}.pdf`);
};
