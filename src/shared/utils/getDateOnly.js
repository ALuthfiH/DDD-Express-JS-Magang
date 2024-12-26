function getDateOnly(fullDateString) {
    const date = new Date(fullDateString); // Konversi string ke objek Date
    const day = String(date.getDate()).padStart(2, '0'); // Ambil hari dengan format dua digit
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ambil bulan (0-11, +1 untuk 1-12)
    const year = date.getFullYear(); // Ambil tahun
    return `${day}-${month}-${year}`; // Format DD-MM-YYYY
}

module.exports = getDateOnly;