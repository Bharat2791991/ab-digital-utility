/* =========================================================
   AB DIGITAL UTILITY
   MAIN SCRIPT - PART 1
   ========================================================= */


/* ================= TOOL OPEN ================= */

function openTool(tool) {

    const workspace =
        document.getElementById("workspace");

    const content =
        document.getElementById("toolContent");

    workspace.style.display = "block";


    /* =====================================================
       PDF TOOLS HUB
       ===================================================== */

    if (tool === "jpgPdf") {

        content.innerHTML = `

            <div class="pdf-tools">

                <h2>PDF Tools</h2>

                <p>
                    Convert, merge, split and manage your PDF
                    files with easy online tools.
                </p>


                <div class="pdf-tools-grid">


                    <!-- JPG TO PDF -->

                    <div class="pdf-tool-card">

                        <div class="tool-icon purple">
                            📄
                        </div>

                        <h3>
                            JPG to PDF
                        </h3>

                        <p>
                            Convert JPG or PNG images
                            into a PDF file.
                        </p>

                        <button
                            onclick="showJpgToPdf()">

                            Open Tool →

                        </button>

                    </div>


                    <!-- PDF TO JPG -->

                    <div class="pdf-tool-card">

                        <div class="tool-icon blue">
                            🖼️
                        </div>

                        <h3>
                            PDF to JPG
                        </h3>

                        <p>
                            Convert PDF pages into images.
                        </p>

                        <button
                            onclick="showPdfToJpg()">

                            Open Tool →

                        </button>

                    </div>


                    <!-- WORD TO PDF -->

                    <div class="pdf-tool-card">

                        <div class="tool-icon orange">
                            📝
                        </div>

                        <h3>
                            Word to PDF
                        </h3>

                        <p>
                            Convert Word documents
                            into PDF files.
                        </p>

                        <button
                            onclick="showWordToPdf()">

                            Open Tool →

                        </button>

                    </div>


                    <!-- PDF TO WORD -->

                    <div class="pdf-tool-card">

                        <div class="tool-icon purple">
                            📃
                        </div>

                        <h3>
                            PDF to Word
                        </h3>

                        <p>
                            Convert PDF documents
                            into editable Word files.
                        </p>

                        <button
                            onclick="showPdfToWord()">

                            Open Tool →

                        </button>

                    </div>


                    <!-- POWERPOINT TO PDF -->

                    <div class="pdf-tool-card">

                        <div class="tool-icon orange">
                            📊
                        </div>

                        <h3>
                            PowerPoint to PDF
                        </h3>

                        <p>
                            Convert PowerPoint
                            presentations into PDF.
                        </p>

                        <button
                            onclick="showPptToPdf()">

                            Open Tool →

                        </button>

                    </div>


                    <!-- PDF TO POWERPOINT -->

                    <div class="pdf-tool-card">

                        <div class="tool-icon blue">
                            📊
                        </div>

                        <h3>
                            PDF to PowerPoint
                        </h3>

                        <p>
                            Convert PDF pages
                            into PowerPoint slides.
                        </p>

                        <button
                            onclick="showPdfToPpt()">

                            Open Tool →

                        </button>

                    </div>


                    <!-- EXCEL TO PDF -->

                    <div class="pdf-tool-card">

                        <div class="tool-icon green">
                            📈
                        </div>

                        <h3>
                            Excel to PDF
                        </h3>

                        <p>
                            Convert Excel spreadsheets
                            into PDF documents.
                        </p>

                        <button
                            onclick="showExcelToPdf()">

                            Open Tool →

                        </button>

                    </div>


                    <!-- PDF TO EXCEL -->

                    <div class="pdf-tool-card">

                        <div class="tool-icon green">
                            📊
                        </div>

                        <h3>
                            PDF to Excel
                        </h3>

                        <p>
                            Extract tables from PDF
                            into Excel format.
                        </p>

                        <button
                            onclick="showPdfToExcel()">

                            Open Tool →

                        </button>

                    </div>


                    <!-- HTML TO PDF -->

                    <div class="pdf-tool-card">

                        <div class="tool-icon orange">
                            🌐
                        </div>

                        <h3>
                            HTML to PDF
                        </h3>

                        <p>
                            Convert HTML content
                            into a PDF document.
                        </p>

                        <button
                            onclick="showHtmlToPdf()">

                            Open Tool →

                        </button>

                    </div>


                    <!-- MERGE PDF -->

                    <div class="pdf-tool-card">

                        <div class="tool-icon purple">
                            🔗
                        </div>

                        <h3>
                            Merge PDF
                        </h3>

                        <p>
                            Combine multiple PDF files
                            into one PDF.
                        </p>

                        <button
                            onclick="showMergePdf()">

                            Open Tool →

                        </button>

                    </div>


                    <!-- SPLIT PDF -->

                    <div class="pdf-tool-card">

                        <div class="tool-icon blue">
                            ✂️
                        </div>

                        <h3>
                            Split PDF
                        </h3>

                        <p>
                            Extract selected pages
                            from a PDF.
                        </p>

                        <button
                            onclick="showSplitPdf()">

                            Open Tool →

                        </button>

                    </div>


                    <!-- REMOVE PAGES -->

                    <div class="pdf-tool-card">

                        <div class="tool-icon pink">
                            🗑️
                        </div>

                        <h3>
                            Remove PDF Pages
                        </h3>

                        <p>
                            Remove unwanted pages
                            from your PDF.
                        </p>

                        <button
                            onclick="showRemovePdfPages()">

                            Open Tool →

                        </button>

                    </div>


                </div>

            </div>

        `;
    }


    /* =====================================================
       QR CODE
       ===================================================== */

    if (tool === "qr") {

        content.innerHTML = `

            <h2>QR Code Generator</h2>

            <p>
                Enter text or website URL.
            </p>

            <input
                id="qrText"
                type="text"
                placeholder="Enter text or URL"
            >

            <br><br>

            <button onclick="generateQR()">
                Generate QR
            </button>

            <div
                id="qrResult"
                class="result">
            </div>

        `;
    }


    /* =====================================================
       GST
       ===================================================== */

    if (tool === "gst") {

        content.innerHTML = `

            <h2>GST Calculator</h2>

            <input
                id="gstAmount"
                type="number"
                placeholder="Enter amount"
            >

            <input
                id="gstRate"
                type="number"
                placeholder="GST rate %"
            >

            <br><br>

            <button onclick="calculateGST()">
                Calculate GST
            </button>

            <div
                id="gstResult"
                class="result">
            </div>

        `;
    }


    /* =====================================================
       PERCENTAGE
       ===================================================== */

    if (tool === "percentage") {

        content.innerHTML = `

            <h2>Percentage Calculator</h2>

            <input
                id="percentageValue"
                type="number"
                placeholder="Value"
            >

            <input
                id="percentageTotal"
                type="number"
                placeholder="Total"
            >

            <br><br>

            <button onclick="calculatePercentage()">
                Calculate
            </button>

            <div
                id="percentageResult"
                class="result">
            </div>

        `;
    }


    /* =====================================================
       IMAGE COMPRESSOR
       ===================================================== */

    if (tool === "compress") {

        content.innerHTML = `

            <h2>Image Compressor</h2>

            <p>
                Reduce image file size directly
                in your browser.
            </p>

            <input
                id="compressFile"
                type="file"
                accept="image/jpeg,image/png"
            >

            <br><br>

            <label>
                Compression Quality
            </label>

            <br>

            <input
                id="quality"
                type="range"
                min="0.1"
                max="1"
                value="0.7"
                step="0.1"
            >

            <br><br>

            <button onclick="compressImage()">
                Compress Image
            </button>

            <div
                id="compressResult"
                class="result">
            </div>

        `;
    }


    /* =====================================================
       IMAGE RESIZER
       ===================================================== */

    if (tool === "resize") {

        content.innerHTML = `

            <h2>Image Resizer</h2>

            <p>
                Resize your image to custom dimensions.
            </p>

            <input
                id="resizeFile"
                type="file"
                accept="image/*"
            >

            <br><br>

            <input
                id="resizeWidth"
                type="number"
                placeholder="Width in pixels"
            >

            <input
                id="resizeHeight"
                type="number"
                placeholder="Height in pixels"
            >

            <br><br>

            <button onclick="resizeImage()">
                Resize Image
            </button>

            <div
                id="resizeResult"
                class="result">
            </div>

        `;
    }


    /* =====================================================
       AGE CALCULATOR
       ===================================================== */

    if (tool === "age") {

        content.innerHTML = `

            <h2>Age Calculator</h2>

            <p>
                Enter your date of birth.
            </p>

            <input
                id="birthDate"
                type="date"
            >

            <br><br>

            <button onclick="calculateAge()">
                Calculate Age
            </button>

            <div
                id="ageResult"
                class="result">
            </div>

        `;
    }


    /* =====================================================
       EMI CALCULATOR
       ===================================================== */

    if (tool === "emi") {

        content.innerHTML = `

            <h2>EMI Calculator</h2>

            <input
                id="loanAmount"
                type="number"
                placeholder="Loan amount"
            >

            <input
                id="interestRate"
                type="number"
                placeholder="Annual interest rate %"
            >

            <input
                id="loanYears"
                type="number"
                placeholder="Loan period in years"
            >

            <br><br>

            <button onclick="calculateEMI()">
                Calculate EMI
            </button>

            <div
                id="emiResult"
                class="result">
            </div>

        `;
    }


    /* ================= SCROLL ================= */

    workspace.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   CLOSE TOOL
   ========================================================= */

function closeTool() {

    document.getElementById("workspace").style.display =
        "none";

    document.getElementById("toolContent").innerHTML =
        "";

}


/* =========================================================
   PDF HUB BACK BUTTON
   ========================================================= */

function backToPdfTools() {

    openTool("jpgPdf");

}


/* =========================================================
   JPG TO PDF SCREEN
   ========================================================= */

function showJpgToPdf() {

    const content =
        document.getElementById("toolContent");

    content.innerHTML = `

        <button onclick="backToPdfTools()">
            ← All PDF Tools
        </button>

        <br><br>

        <h2>JPG to PDF Converter</h2>

        <p>
            Select one or multiple JPG or PNG images.
        </p>

        <input
            id="jpgFiles"
            type="file"
            accept="image/jpeg,image/png"
            multiple
        >

        <br><br>

        <button onclick="convertToPDF()">
            Convert to PDF
        </button>

        <div
            id="jpgResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   PDF TO JPG SCREEN
   ========================================================= */

function showPdfToJpg() {

    const content =
        document.getElementById("toolContent");

    content.innerHTML = `

        <button onclick="backToPdfTools()">
            ← All PDF Tools
        </button>

        <br><br>

        <h2>PDF to JPG</h2>

        <p>
            Select a PDF file to convert its pages
            into JPG images.
        </p>

        <input
            id="pdfToJpgFile"
            type="file"
            accept="application/pdf"
        >

        <br><br>

        <button onclick="convertPdfToJpg()">
            Convert PDF
        </button>

        <div
            id="pdfToJpgResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   WORD TO PDF SCREEN
   ========================================================= */

function showWordToPdf() {

    const content =
        document.getElementById("toolContent");

    content.innerHTML = `

        <button onclick="backToPdfTools()">
            ← All PDF Tools
        </button>

        <br><br>

        <h2>Word to PDF</h2>

        <p>
            Select a DOC or DOCX file.
        </p>

        <input
            id="wordToPdfFile"
            type="file"
            accept=".doc,.docx"
        >

        <br><br>

        <button onclick="convertWordToPdf()">
            Convert to PDF
        </button>

        <div
            id="wordToPdfResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   PDF TO WORD SCREEN
   ========================================================= */

function showPdfToWord() {

    const content =
        document.getElementById("toolContent");

    content.innerHTML = `

        <button onclick="backToPdfTools()">
            ← All PDF Tools
        </button>

        <br><br>

        <h2>PDF to Word</h2>

        <p>
            Select a PDF file.
        </p>

        <input
            id="pdfToWordFile"
            type="file"
            accept="application/pdf"
        >

        <br><br>

        <button onclick="convertPdfToWord()">
            Convert to Word
        </button>

        <div
            id="pdfToWordResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   POWERPOINT TO PDF SCREEN
   ========================================================= */

function showPptToPdf() {

    const content =
        document.getElementById("toolContent");

    content.innerHTML = `

        <button onclick="backToPdfTools()">
            ← All PDF Tools
        </button>

        <br><br>

        <h2>PowerPoint to PDF</h2>

        <p>
            Select a PPT or PPTX presentation.
        </p>

        <input
            id="pptToPdfFile"
            type="file"
            accept=".ppt,.pptx"
        >

        <br><br>

        <button onclick="convertPptToPdf()">
            Convert to PDF
        </button>

        <div
            id="pptToPdfResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   PDF TO POWERPOINT SCREEN
   ========================================================= */

function showPdfToPpt() {

    const content =
        document.getElementById("toolContent");

    content.innerHTML = `

        <button onclick="backToPdfTools()">
            ← All PDF Tools
        </button>

        <br><br>

        <h2>PDF to PowerPoint</h2>

        <p>
            Select a PDF file to create presentation slides.
        </p>

        <input
            id="pdfToPptFile"
            type="file"
            accept="application/pdf"
        >

        <br><br>

        <button onclick="convertPdfToPpt()">
            Convert to PowerPoint
        </button>

        <div
            id="pdfToPptResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   EXCEL TO PDF SCREEN
   ========================================================= */

function showExcelToPdf() {

    const content =
        document.getElementById("toolContent");

    content.innerHTML = `

        <button onclick="backToPdfTools()">
            ← All PDF Tools
        </button>

        <br><br>

        <h2>Excel to PDF</h2>

        <p>
            Select an XLS or XLSX spreadsheet.
        </p>

        <input
            id="excelToPdfFile"
            type="file"
            accept=".xls,.xlsx"
        >

        <br><br>

        <button onclick="convertExcelToPdf()">
            Convert to PDF
        </button>

        <div
            id="excelToPdfResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   PDF TO EXCEL SCREEN
   ========================================================= */

function showPdfToExcel() {

    const content =
        document.getElementById("toolContent");

    content.innerHTML = `

        <button onclick="backToPdfTools()">
            ← All PDF Tools
        </button>

        <br><br>

        <h2>PDF to Excel</h2>

        <p>
            Select a PDF containing tables.
        </p>

        <input
            id="pdfToExcelFile"
            type="file"
            accept="application/pdf"
        >

        <br><br>

        <button onclick="convertPdfToExcel()">
            Convert to Excel
        </button>

        <div
            id="pdfToExcelResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   HTML TO PDF SCREEN
   ========================================================= */

function showHtmlToPdf() {

    const content =
        document.getElementById("toolContent");

    content.innerHTML = `

        <button onclick="backToPdfTools()">
            ← All PDF Tools
        </button>

        <br><br>

        <h2>HTML to PDF</h2>

        <p>
            Enter HTML content below.
        </p>

        <textarea
            id="htmlContent"
            rows="12"
            style="
                width:100%;
                max-width:800px;
                padding:15px;
                border:1px solid #ddd;
                border-radius:10px;
            "
            placeholder="<h1>Hello</h1><p>My PDF</p>"
        ></textarea>

        <br><br>

        <button onclick="convertHtmlToPdf()">
            Create PDF
        </button>

        <div
            id="htmlToPdfResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   MERGE PDF SCREEN
   ========================================================= */

function showMergePdf() {

    const content =
        document.getElementById("toolContent");

    content.innerHTML = `

        <button onclick="backToPdfTools()">
            ← All PDF Tools
        </button>

        <br><br>

        <h2>Merge PDF</h2>

        <p>
            Select multiple PDF files and combine them
            into one PDF.
        </p>

        <input
            id="mergePdfFiles"
            type="file"
            accept="application/pdf"
            multiple
        >

        <br><br>

        <button onclick="mergePDF()">
            Merge PDF Files
        </button>

        <div
            id="mergePdfResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   SPLIT PDF SCREEN
   ========================================================= */

function showSplitPdf() {

    const content =
        document.getElementById("toolContent");

    content.innerHTML = `

        <button onclick="backToPdfTools()">
            ← All PDF Tools
        </button>

        <br><br>

        <h2>Split PDF</h2>

        <p>
            Enter the pages you want to extract.
            Example: 1,3,5
        </p>

        <input
            id="splitPdfFile"
            type="file"
            accept="application/pdf"
        >

        <br><br>

        <input
            id="splitPages"
            type="text"
            placeholder="Example: 1,3,5"
        >

        <br><br>

        <button onclick="splitPDF()">
            Split PDF
        </button>

        <div
            id="splitPdfResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   REMOVE PDF PAGES
   ========================================================= */

function showRemovePdfPages() {

    const content =
        document.getElementById("toolContent");

    content.innerHTML = `

        <button onclick="backToPdfTools()">
            ← All PDF Tools
        </button>

        <br><br>

        <h2>Remove PDF Pages</h2>

        <p>
            Enter the page numbers you want to remove.
            Example: 2,4
        </p>

        <input
            id="removePdfFile"
            type="file"
            accept="application/pdf"
        >

        <br><br>

        <input
            id="removePages"
            type="text"
            placeholder="Example: 2,4"
        >

        <br><br>

        <button onclick="removePdfPages()">
            Remove Pages
        </button>

        <div
            id="removePdfResult"
            class="result">
        </div>

    `;

}
async function convertToPDF() {

    const input =
        document.getElementById("jpgFiles");

    const result =
        document.getElementById("jpgResult");

    const files =
        input.files;

    if (!files.length) {

        result.innerHTML =
            "Please select at least one image.";

        return;
    }

    if (
        typeof window.jspdf === "undefined"
    ) {

        result.innerHTML =
            "PDF library load nahi hui. Internet ON karke page refresh karein.";

        return;
    }

    const jsPDF =
        window.jspdf.jsPDF;

    const pdf =
        new jsPDF("p", "mm", "a4");


    try {

        for (
            let i = 0;
            i < files.length;
            i++
        ) {

            result.innerHTML =
                Converting image ${i + 1} of ${files.length}...;


            const file =
                files[i];

            const image =
                await loadImage(file);


            if (i > 0) {
                pdf.addPage();
            }


            const pageWidth = 210;
            const pageHeight = 297;
            const margin = 10;

            const maxWidth =
                pageWidth - margin * 2;

            const maxHeight =
                pageHeight - margin * 2;


            const ratio =
                Math.min(
                    maxWidth / image.width,
                    maxHeight / image.height
                );


            const width =
                image.width * ratio;

            const height =
                image.height * ratio;


            const x =
                (pageWidth - width) / 2;

            const y =
                (pageHeight - height) / 2;


            const format =
                file.type === "image/png"
                    ? "PNG"
                    : "JPEG";


            pdf.addImage(
                image,
                format,
                x,
                y,
                width,
                height
            );
        }


        pdf.save(
            "AB-Digital-Utility-JPG-to-PDF.pdf"
        );


        result.innerHTML =
            "<strong>✅ PDF successfully created!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Unable to create PDF. Please try again.";

    }
}


/* =========================================================
   IMAGE LOADER
   ========================================================= */

function loadImage(file) {

    return new Promise(
        function(resolve, reject) {

            const url =
                URL.createObjectURL(file);

            const image =
                new Image();


            image.onload =
                function() {

                    URL.revokeObjectURL(url);

                    resolve(image);

                };


            image.onerror =
                function() {

                    URL.revokeObjectURL(url);

                    reject(
                        new Error(
                            "Image could not be loaded."
                        )
                    );

                };


            image.src = url;

        }
    );
}


/* =========================================================
   PDF LIBRARY CHECK
   ========================================================= */

function checkPdfLibrary() {

    if (
        typeof window.pdfjsLib === "undefined"
    ) {

        return false;

    }

    return true;

}


/* =========================================================
   PDF TO JPG
   ========================================================= */

async function convertPdfToJpg() {

    const input =
        document.getElementById("pdfToJpgFile");

    const result =
        document.getElementById("pdfToJpgResult");

    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF file.";

        return;

    }


    if (!checkPdfLibrary()) {

        result.innerHTML = `
            PDF engine is not loaded.<br><br>
            Please add PDF.js library to index.html.
        `;

        return;

    }


    try {

        const file =
            input.files[0];

        const arrayBuffer =
            await file.arrayBuffer();


        const pdf =
            await pdfjsLib.getDocument({
                data: arrayBuffer
            }).promise;


        let html = "";

        for (
            let pageNumber = 1;
            pageNumber <= pdf.numPages;
            pageNumber++
        ) {

            result.innerHTML =
                Converting page ${pageNumber} of ${pdf.numPages}...;


            const page =
                await pdf.getPage(pageNumber);


            const viewport =
                page.getViewport({
                    scale: 1.5
                });


            const canvas =
                document.createElement("canvas");


            const context =
                canvas.getContext("2d");


            canvas.width =
                viewport.width;

            canvas.height =
                viewport.height;


            await page.render({
                canvasContext: context,
                viewport: viewport
            }).promise;


            const url =
                canvas.toDataURL(
                    "image/jpeg",
                    0.9
                );


            html += `

                <div style="margin-bottom:20px">

                    <p>
                        Page ${pageNumber}
                    </p>

                    <img
                        src="${url}"
                        style="
                            max-width:100%;
                            border:1px solid #ddd;
                            border-radius:8px;
                        "
                    >

                    <br>

                    <a
                        class="download"
                        href="${url}"
                        download="page-${pageNumber}.jpg">

                        Download Page ${pageNumber}

                    </a>

                </div>

            `;
        }


        result.innerHTML = `
            <strong>
                ✅ PDF converted successfully
            </strong>

            <br><br>

            ${html}
        `;

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Unable to process PDF.";

    }

}


/* =========================================================
   MERGE PDF
   ========================================================= */

async function mergePDF() {

    const input =
        document.getElementById("mergePdfFiles");

    const result =
        document.getElementById("mergePdfResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select PDF files.";

        return;

    }


    if (
        typeof PDFLib === "undefined"
    ) {

        result.innerHTML = `
            PDF engine is not loaded.<br><br>
            Please add pdf-lib library to index.html.
        `;

        return;

    }


    try {

        const mergedPdf =
            await PDFLib.PDFDocument.create();


        for (
            const file of input.files
        ) {

            const bytes =
                await file.arrayBuffer();


            const pdf =
                await PDFLib.PDFDocument.load(
                    bytes
                );


            const pages =
                await mergedPdf.copyPages(
                    pdf,
                    pdf.getPageIndices()
                );


            pages.forEach(
                function(page) {

                    mergedPdf.addPage(page);

                }
            );

        }


        const output =
            await mergedPdf.save();


        downloadBlob(
            output,
            "AB-Digital-Utility-Merged.pdf",
            "application/pdf"
        );


        result.innerHTML =
            "<strong>✅ PDFs merged successfully!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Unable to merge PDFs.";

    }

}


/* =========================================================
   SPLIT PDF
   ========================================================= */

async function splitPDF() {

    const fileInput =
        document.getElementById("splitPdfFile");

    const pagesInput =
        document.getElementById("splitPages");

    const result =
        document.getElementById("splitPdfResult");


    if (!fileInput.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;

    }


    const pageText =
        pagesInput.value.trim();


    if (!pageText) {

        result.innerHTML =
            "Please enter page numbers.";

        return;

    }


    if (
        typeof PDFLib === "undefined"
    ) {

        result.innerHTML =
            "PDF engine is not loaded.";

        return;

    }


    try {

        const bytes =
            await fileInput.files[0]
                .arrayBuffer();


        const sourcePdf =
            await PDFLib.PDFDocument.load(
                bytes
            );


        const outputPdf =
            await PDFLib.PDFDocument.create();


        const pageNumbers =
            pageText
                .split(",")
                .map(
                    function(value) {
                        return parseInt(
                            value.trim(),
                            10
                        );
                    }
                )
                .filter(
                    function(value) {
                        return !isNaN(value);
                    }
                );


        const validPages =
            pageNumbers.filter(
                function(page) {

                    return (
                        page >= 1 &&
                        page <= sourcePdf.getPageCount()
                    );

                }
            );


        if (!validPages.length) {

            result.innerHTML =
                "No valid page numbers found.";

            return;

        }


        const copiedPages =
            await outputPdf.copyPages(
                sourcePdf,
                validPages.map(
                    function(page) {
                        return page - 1;
                    }
                )
            );


        copiedPages.forEach(
            function(page) {

                outputPdf.addPage(page);

            }
        );


        const output =
            await outputPdf.save();


        downloadBlob(
            output,
            "AB-Digital-Utility-Split.pdf",
            "application/pdf"
        );


        result.innerHTML =
            "<strong>✅ PDF split successfully!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Unable to split PDF.";

    }

}


/* =========================================================
   REMOVE PDF PAGES
   ========================================================= */

async function removePdfPages() {

    const fileInput =
        document.getElementById("removePdfFile");

    const pagesInput =
        document.getElementById("removePages");

    const result =
        document.getElementById("removePdfResult");


    if (!fileInput.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;

    }


    if (!pagesInput.value.trim()) {

        result.innerHTML =
            "Please enter page numbers.";

        return;

    }


    if (
        typeof PDFLib === "undefined"
    ) {

        result.innerHTML =
            "PDF engine is not loaded.";

        return;

    }


    try {

        const bytes =
            await fileInput.files[0]
                .arrayBuffer();


        const sourcePdf =
            await PDFLib.PDFDocument.load(
                bytes
            );


        const removePages =
            pagesInput.value
                .split(",")
                .map(
                    function(value) {
                        return parseInt(
                            value.trim(),
                            10
                        );
                    }
                )
                .filter(
                    function(value) {
                        return !isNaN(value);
                    }
                );


        const removeSet =
            new Set(
                removePages
            );


        const outputPdf =
            await PDFLib.PDFDocument.create();


        const pageIndexes = [];


        for (
            let i = 0;
            i < sourcePdf.getPageCount();
            i++
        ) {

            const pageNumber =
                i + 1;


            if (
                !removeSet.has(pageNumber)
            ) {

                pageIndexes.push(i);

            }

        }


        if (!pageIndexes.length) {

            result.innerHTML =
                "You cannot remove all pages.";

            return;

        }


        const pages =
            await outputPdf.copyPages(
                sourcePdf,
                pageIndexes
            );


        pages.forEach(
            function(page) {

                outputPdf.addPage(page);

            }
        );


        const output =
            await outputPdf.save();


        downloadBlob(
            output,
            "AB-Digital-Utility-Pages-Removed.pdf",
            "application/pdf"
        );


        result.innerHTML =
            "<strong>✅ Pages removed successfully!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Unable to remove pages.";

    }

}


/* =========================================================
   DOWNLOAD HELPER
   ========================================================= */

function downloadBlob(
    data,
    filename,
    type
) {

    const blob =
        new Blob(
            [data],
            {
                type: type
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        filename;


    document.body.appendChild(link);

    link.click();

    link.remove();


    setTimeout(
        function() {

            URL.revokeObjectURL(url);

        },
        1000
    );

}


/* =========================================================
   QR CODE
   ========================================================= */

function generateQR() {

    const text =
        document.getElementById("qrText")
            .value
            .trim();


    const result =
        document.getElementById("qrResult");


    if (!text) {

        result.innerHTML =
            "Please enter text or URL.";

        return;

    }


    result.innerHTML = "";


    if (
        typeof QRCode === "undefined"
    ) {

        result.innerHTML =
            "QR library load nahi hui. Page refresh karein.";

        return;

    }


    new QRCode(
        result,
        {
            text: text,
            width: 220,
            height: 220
        }
    );

}


/* =========================================================
   GST
   ========================================================= */

function calculateGST() {

    const amount =
        Number(
            document.getElementById("gstAmount")
                .value
        );


    const rate =
        Number(
            document.getElementById("gstRate")
                .value
        );


    const result =
        document.getElementById("gstResult");


    if (
        amount <= 0 ||
        rate < 0
    ) {

        result.innerHTML =
            "Please enter valid amount and GST rate.";

        return;

    }


    const gst =
        amount * rate / 100;


    const total =
        amount + gst;


    const cgst =
        gst / 2;

    const sgst =
        gst / 2;


    result.innerHTML = `

        GST:
        <strong>
            ₹${gst.toFixed(2)}
        </strong>

        <br>

        CGST:
        ₹${cgst.toFixed(2)}

        <br>

        SGST:
        ₹${sgst.toFixed(2)}

        <br>

        Total:
        <strong>
            ₹${total.toFixed(2)}
        </strong>

    `;

}


/* =========================================================
   PERCENTAGE
   ========================================================= */

function calculatePercentage() {

    const value =
        Number(
            document.getElementById(
                "percentageValue"
            ).value
        );


    const total =
        Number(
            document.getElementById(
                "percentageTotal"
            ).value
        );


    const result =
        document.getElementById(
            "percentageResult"
        );


    if (total <= 0) {

        result.innerHTML =
            "Please enter a valid total.";

        return;

    }


    const percentage =
        (value / total) * 100;


    result.innerHTML = `

        <strong>
            ${percentage.toFixed(2)}%
        </strong>

    `;

}


/* =========================================================
   IMAGE COMPRESSOR
   ========================================================= */

function compressImage() {

    const file =
        document.getElementById(
            "compressFile"
        ).files[0];


    const quality =
        Number(
            document.getElementById(
                "quality"
            ).value
        );


    const result =
        document.getElementById(
            "compressResult"
        );


    if (!file) {

        result.innerHTML =
            "Please select an image.";

        return;

    }


    const reader =
        new FileReader();


    reader.onload =
        function(event) {

            const image =
                new Image();


            image.onload =
                function() {

                    const canvas =
                        document.createElement(
                            "canvas"
                        );


                    canvas.width =
                        image.width;

                    canvas.height =
                        image.height;


                    const ctx =
                        canvas.getContext(
                            "2d"
                        );


                    ctx.drawImage(
                        image,
                        0,
                        0
                    );


                    canvas.toBlob(
                        function(blob) {

                            const url =
                                URL.createObjectURL(
                                    blob
                                );


                            const originalSize =
                                (
                                    file.size / 1024
                                ).toFixed(1);


                            const newSize =
                                (
                                    blob.size / 1024
                                ).toFixed(1);


                            result.innerHTML = `

                                Original size:
                                <strong>
                                    ${originalSize} KB
                                </strong>

                                <br>

                                Compressed size:
                                <strong>
                                    ${newSize} KB
                                </strong>

                                <br><br>

                                <a
                                    class="download"
                                    href="${url}"
                                    download="AB-Digital-Utility-compressed.jpg">

                                    Download Compressed Image

                                </a>

                            `;

                        },
                        "image/jpeg",
                        quality
                    );

                };


            image.src =
                event.target.result;

        };


    reader.readAsDataURL(file);

}


/* =========================================================
   IMAGE RESIZER
   ========================================================= */

function resizeImage() {

    const file =
        document.getElementById(
            "resizeFile"
        ).files[0];


    const width =
        Number(
            document.getElementById(
                "resizeWidth"
            ).value
        );


    const height =
        Number(
            document.getElementById(
                "resizeHeight"
            ).value
        );


    const result =
        document.getElementById(
            "resizeResult"
        );


    if (!file) {

        result.innerHTML =
            "Please select an image.";

        return;

    }


    if (
        width <= 0 ||
        height <= 0
    ) {

        result.innerHTML =
            "Please enter valid width and height.";

        return;

    }


    const reader =
        new FileReader();


    reader.onload =
        function(event) {

            const image =
                new Image();


            image.onload =
                function() {

                    const canvas =
                        document.createElement(
                            "canvas"
                        );


                    canvas.width =
                        width;

                    canvas.height =
                        height;


                    const ctx =
                        canvas.getContext(
                            "2d"
                        );


                    ctx.drawImage(
                        image,
                        0,
                        0,
                        width,
                        height
                    );


                    canvas.toBlob(
                        function(blob) {

                            const url =
                                URL.createObjectURL(
                                    blob
                                );


                            result.innerHTML = `

                                Image resized successfully.

                                <br><br>

                                <a
                                    class="download"
                                    href="${url}"
                                    download="AB-Digital-Utility-resized.jpg">

                                    Download Resized Image

                                </a>

                            `;

                        },
                        "image/jpeg",
                        0.9
                    );

                };


            image.src =
                event.target.result;

        };


    reader.readAsDataURL(file);

}


/* =========================================================
   AGE CALCULATOR
   ========================================================= */

function calculateAge() {

    const value =
        document.getElementById(
            "birthDate"
        ).value;


    const result =
        document.getElementById(
            "ageResult"
        );


    if (!value) {

        result.innerHTML =
            "Please select your date of birth.";

        return;

    }


    const birth =
        new Date(value);


    const today =
        new Date();


    if (birth > today) {

        result.innerHTML =
            "Date of birth cannot be in the future.";

        return;

    }


    let years =
        today.getFullYear()
        -
        birth.getFullYear();


    let months =
        today.getMonth()
        -
        birth.getMonth();


    let days =
        today.getDate()
        -
        birth.getDate();


    if (days < 0) {

        months--;


        const previousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );


        days +=
            previousMonth.getDate();

    }


    if (months < 0) {

        years--;

        months += 12;

    }


    result.innerHTML = `

        Your age is:

        <strong>
            ${years} years,
            ${months} months,
            ${days} days
        </strong>

    `;

}


/* =========================================================
   EMI CALCULATOR
   ========================================================= */

function calculateEMI() {

    const principal =
        Number(
            document.getElementById(
                "loanAmount"
            ).value
        );


    const annualRate =
        Number(
            document.getElementById(
                "interestRate"
            ).value
        );


    const years =
        Number(
            document.getElementById(
                "loanYears"
            ).value
        );


    const result =
        document.getElementById(
            "emiResult"
        );


    if (
        principal <= 0 ||
        years <= 0 ||
        annualRate < 0
    ) {

        result.innerHTML =
            "Please enter valid loan details.";

        return;

    }


    const months =
        years * 12;


    const monthlyRate =
        annualRate / 12 / 100;


    let emi;


    if (
        monthlyRate === 0
    ) {

        emi =
            principal / months;

    }

    else {

        emi =
            principal *
            monthlyRate *
            Math.pow(
                1 + monthlyRate,
                months
            )
            /
            (
                Math.pow(
                    1 + monthlyRate,
                    months
                ) - 1
            );

    }


    const totalPayment =
        emi * months;


    const totalInterest =
        totalPayment - principal;


    result.innerHTML = `

        Monthly EMI:

        <strong>
            ₹${emi.toFixed(2)}
        </strong>

        <br>

        Total Interest:

        ₹${totalInterest.toFixed(2)}

        <br>

        Total Payment:

        ₹${totalPayment.toFixed(2)}

    `;

}
