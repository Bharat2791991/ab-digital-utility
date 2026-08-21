/* =========================================================
   AB DIGITAL UTILITY
   COMPLETE SCRIPT.JS
========================================================= */


/* =========================================================
   GLOBAL HELPERS
========================================================= */

function get(id) {
    return document.getElementById(id);
}


function showWorkspace() {

    var workspace = get("workspace");

    if (workspace) {
        workspace.style.display = "block";
    }
}


function setContent(html) {

    var content = get("toolContent");

    if (content) {
        content.innerHTML = html;
    }
}


function scrollWorkspace() {

    var workspace = get("workspace");

    if (workspace) {

        workspace.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}


/* =========================================================
   OPEN PDF TOOL
========================================================= */

function openPDFTool(tool) {

    showWorkspace();

    /* =====================================================
       JPG TO PDF
    ===================================================== */

    if (tool === "jpgPdf") {

        setContent(`

            <div class="tool-header">

                <h2>📄 JPG to PDF</h2>

                <p>
                    Convert multiple JPG or PNG images
                    into one PDF file.
                </p>

            </div>


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

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       PDF TO JPG
    ===================================================== */

    if (tool === "pdfToJpg") {

        setContent(`

            <div class="tool-header">

                <h2>🖼️ PDF to JPG</h2>

                <p>
                    Convert every PDF page into JPG images.
                </p>

            </div>


            <input
                id="pdfToJpgFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <button onclick="pdfToJPG()">
                Convert to JPG
            </button>

            <div
                id="pdfToJpgResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       WORD TO PDF
    ===================================================== */

    if (tool === "wordToPdf") {

        setContent(`

            <h2>📝 Word to PDF</h2>

            <p>
                Convert DOCX Word documents into PDF.
            </p>

            <input
                id="wordToPdfFile"
                type="file"
                accept=".docx"
            >

            <br><br>

            <button onclick="wordToPDF()">
                Convert Word to PDF
            </button>

            <div
                id="wordToPdfResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       PDF TO WORD
    ===================================================== */

    if (tool === "pdfToWord") {

        setContent(`

            <h2>📝 PDF to Word</h2>

            <p>
                Extract readable PDF text into a DOCX file.
            </p>

            <input
                id="pdfToWordFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <button onclick="pdfToWord()">
                Convert PDF to Word
            </button>

            <div
                id="pdfToWordResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       EXCEL TO PDF
    ===================================================== */

    if (tool === "excelToPdf") {

        setContent(`

            <h2>📊 Excel to PDF</h2>

            <p>
                Convert Excel spreadsheets into PDF.
            </p>

            <input
                id="excelToPdfFile"
                type="file"
                accept=".xlsx,.xls"
            >

            <br><br>

            <button onclick="excelToPDF()">
                Convert Excel to PDF
            </button>

            <div
                id="excelToPdfResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       PDF TO EXCEL
    ===================================================== */

    if (tool === "pdfToExcel") {

        setContent(`

            <h2>📊 PDF to Excel</h2>

            <p>
                Extract PDF text into an Excel workbook.
            </p>

            <input
                id="pdfToExcelFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <button onclick="pdfToExcel()">
                Convert PDF to Excel
            </button>

            <div
                id="pdfToExcelResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       POWERPOINT TO PDF
    ===================================================== */

    if (tool === "pptToPdf") {

        setContent(`

            <h2>📽️ PowerPoint to PDF</h2>

            <p>
                Convert readable PowerPoint slide content
                into PDF.
            </p>

            <input
                id="pptToPdfFile"
                type="file"
                accept=".pptx"
            >

            <br><br>

            <button onclick="pptToPDF()">
                Convert PowerPoint to PDF
            </button>

            <div
                id="pptToPdfResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       PDF TO POWERPOINT
    ===================================================== */

    if (tool === "pdfToPpt") {

        setContent(`

            <h2>📽️ PDF to PowerPoint</h2>

            <p>
                Convert PDF pages into PowerPoint slides.
            </p>

            <input
                id="pdfToPptFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <button onclick="pdfToPPT()">
                Convert PDF to PowerPoint
            </button>

            <div
                id="pdfToPptResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       HTML TO PDF
    ===================================================== */

    if (tool === "htmlToPdf") {

        setContent(`

            <h2>🌐 HTML to PDF</h2>

            <p>
                Enter HTML code and convert it into PDF.
            </p>

            <textarea
                id="htmlToPdfInput"
                rows="12"
                placeholder="<h1>AB Digital Utility</h1>
<p>Your content here...</p>"
            ></textarea>

            <br><br>

            <button onclick="htmlToPDF()">
                Convert HTML to PDF
            </button>

            <div
                id="htmlToPdfResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       MERGE PDF
    ===================================================== */

    if (tool === "merge") {

        setContent(`

            <h2>🔗 Merge PDF</h2>

            <p>
                Combine multiple PDF files into one PDF.
            </p>

            <input
                id="mergeFiles"
                type="file"
                accept="application/pdf"
                multiple
            >

            <br><br>

            <button onclick="mergePDF()">
                Merge PDFs
            </button>

            <div
                id="mergeResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       SPLIT PDF
    ===================================================== */

    if (tool === "split") {

        setContent(`

            <h2>✂️ Split PDF</h2>

            <p>
                Extract selected pages from a PDF.
            </p>

            <input
                id="splitFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <input
                id="splitPages"
                type="text"
                placeholder="Example: 1,3,5-7"
            >

            <br><br>

            <button onclick="splitPDF()">
                Split PDF
            </button>

            <div
                id="splitResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       REMOVE PAGES
    ===================================================== */

    if (tool === "removePages") {

        setContent(`

            <h2>🗑️ Remove PDF Pages</h2>

            <input
                id="removeFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <input
                id="removePagesInput"
                type="text"
                placeholder="Pages to remove: 2,4,6"
            >

            <br><br>

            <button onclick="removePDFPages()">
                Remove Pages
            </button>

            <div
                id="removeResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       EXTRACT PAGES
    ===================================================== */

    if (tool === "extractPages") {

        setContent(`

            <h2>📑 Extract PDF Pages</h2>

            <input
                id="extractFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <input
                id="extractPagesInput"
                type="text"
                placeholder="Example: 1,3,5-7"
            >

            <br><br>

            <button onclick="extractPDFPages()">
                Extract Pages
            </button>

            <div
                id="extractResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       ROTATE PDF
    ===================================================== */

    if (tool === "rotate") {

        setContent(`

            <h2>🔄 Rotate PDF</h2>

            <input
                id="rotateFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <select id="rotateAngle">

                <option value="90">
                    90°
                </option>

                <option value="180">
                    180°
                </option>

                <option value="270">
                    270°
                </option>

            </select>

            <br><br>

            <button onclick="rotatePDF()">
                Rotate PDF
            </button>

            <div
                id="rotateResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       REORDER
    ===================================================== */

    if (tool === "reorder") {

        setContent(`

            <h2>↕️ Reorder PDF Pages</h2>

            <input
                id="reorderFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <input
                id="reorderPagesInput"
                type="text"
                placeholder="Example: 3,1,2,4"
            >

            <br><br>

            <button onclick="reorderPDF()">
                Reorder Pages
            </button>

            <div
                id="reorderResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       DUPLICATE
    ===================================================== */

    if (tool === "duplicate") {

        setContent(`

            <h2>📄 Duplicate PDF Pages</h2>

            <input
                id="duplicateFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <input
                id="duplicatePagesInput"
                type="text"
                placeholder="Example: 1,3,3,4"
            >

            <br><br>

            <button onclick="duplicatePDF()">
                Create PDF
            </button>

            <div
                id="duplicateResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       PAGE NUMBERS
    ===================================================== */

    if (tool === "pageNumbers") {

        setContent(`

            <h2>🔢 Add Page Numbers</h2>

            <input
                id="pageNumberFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <select id="pageNumberPosition">

                <option value="bottom-center">
                    Bottom Center
                </option>

                <option value="bottom-left">
                    Bottom Left
                </option>

                <option value="bottom-right">
                    Bottom Right
                </option>

                <option value="top-center">
                    Top Center
                </option>

            </select>

            <br><br>

            <button onclick="addPageNumbers()">
                Add Page Numbers
            </button>

            <div
                id="pageNumberResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       WATERMARK
    ===================================================== */

    if (tool === "watermark") {

        setContent(`

            <h2>💧 Watermark PDF</h2>

            <input
                id="watermarkFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <input
                id="watermarkText"
                type="text"
                placeholder="Watermark text"
            >

            <br><br>

            <button onclick="watermarkPDF()">
                Add Watermark
            </button>

            <div
                id="watermarkResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       COMPRESS
    ===================================================== */

    if (tool === "compressPdf") {

        setContent(`

            <h2>🗜️ Compress PDF</h2>

            <p>
                Reduce PDF file size where possible.
            </p>

            <input
                id="compressPdfFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <button onclick="compressPDF()">
                Compress PDF
            </button>

            <div
                id="compressPdfResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       OCR
    ===================================================== */

    if (tool === "ocr") {

        setContent(`

            <h2>🔎 OCR PDF</h2>

            <p>
                Extract text from scanned PDF pages.
            </p>

            <input
                id="ocrFile"
                type="file"
                accept="application/pdf,image/*"
            >

            <br><br>

            <button onclick="ocrPDF()">
                Start OCR
            </button>

            <div
                id="ocrResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       PROTECT
    ===================================================== */

    if (tool === "protect") {

        setContent(`

            <h2>🔐 Protect PDF</h2>

            <p>
                Add password protection to your PDF.
            </p>

            <input
                id="protectFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <input
                id="protectPassword"
                type="password"
                placeholder="Password"
            >

            <br><br>

            <button onclick="protectPDF()">
                Protect PDF
            </button>

            <div
                id="protectResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       UNLOCK
    ===================================================== */

    if (tool === "unlock") {

        setContent(`

            <h2>🔓 Unlock PDF</h2>

            <p>
                Process a PDF when you have the correct password.
            </p>

            <input
                id="unlockFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <input
                id="unlockPassword"
                type="password"
                placeholder="PDF password"
            >

            <br><br>

            <button onclick="unlockPDF()">
                Unlock PDF
            </button>

            <div
                id="unlockResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       PREVIEW
    ===================================================== */

    if (tool === "preview") {

        setContent(`

            <h2>👁️ PDF Preview</h2>

            <input
                id="previewFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <button onclick="previewPDF()">
                Preview PDF
            </button>

            <div
                id="previewResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       IMAGE COMPRESSOR
    ===================================================== */

    if (tool === "compress") {

        setContent(`

            <h2>🗜️ Image Compressor</h2>

            <input
                id="compressFile"
                type="file"
                accept="image/jpeg,image/png"
            >

            <br><br>

            <label>
                Quality
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

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       IMAGE RESIZER
    ===================================================== */

    if (tool === "resize") {

        setContent(`

            <h2>📐 Image Resizer</h2>

            <input
                id="resizeFile"
                type="file"
                accept="image/*"
            >

            <br><br>

            <input
                id="resizeWidth"
                type="number"
                placeholder="Width">

            <input
                id="resizeHeight"
                type="number"
                placeholder="Height">

            <br><br>

            <button onclick="resizeImage()">
                Resize Image
            </button>

            <div
                id="resizeResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       QR
    ===================================================== */

    if (tool === "qr") {

        setContent(`

            <h2>🔳 QR Code Generator</h2>

            <input
                id="qrText"
                type="text"
                placeholder="Enter text or URL">

            <br><br>

            <button onclick="generateQR()">
                Generate QR
            </button>

            <div
                id="qrResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       GST
    ===================================================== */

    if (tool === "gst") {

        setContent(`

            <h2>🧾 GST Calculator</h2>

            <input
                id="gstAmount"
                type="number"
                placeholder="Amount">

            <input
                id="gstRate"
                type="number"
                placeholder="GST %">

            <br><br>

            <button onclick="calculateGST()">
                Calculate GST
            </button>

            <div
                id="gstResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       PERCENTAGE
    ===================================================== */

    if (tool === "percentage") {

        setContent(`

            <h2>% Percentage Calculator</h2>

            <input
                id="percentageValue"
                type="number"
                placeholder="Value">

            <input
                id="percentageTotal"
                type="number"
                placeholder="Total">

            <br><br>

            <button onclick="calculatePercentage()">
                Calculate
            </button>

            <div
                id="percentageResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       AGE
    ===================================================== */

    if (tool === "age") {

        setContent(`

            <h2>🎂 Age Calculator</h2>

            <input
                id="birthDate"
                type="date">

            <br><br>

            <button onclick="calculateAge()">
                Calculate Age
            </button>

            <div
                id="ageResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }


    /* =====================================================
       EMI
    ===================================================== */

    if (tool === "emi") {

        setContent(`

            <h2>₹ EMI Calculator</h2>

            <input
                id="loanAmount"
                type="number"
                placeholder="Loan amount">

            <input
                id="interestRate"
                type="number"
                placeholder="Annual interest %">

            <input
                id="loanYears"
                type="number"
                placeholder="Loan period in years">

            <br><br>

            <button onclick="calculateEMI()">
                Calculate EMI
            </button>

            <div
                id="emiResult"
                class="result">
            </div>

        `);

        scrollWorkspace();

        return;
    }

}


/* =========================================================
   CLOSE TOOL
========================================================= */

function closeTool() {

    var workspace = get("workspace");

    var content = get("toolContent");


    if (workspace) {
        workspace.style.display = "none";
    }


    if (content) {
        content.innerHTML = "";
    }

}


/* =========================================================
   JPG TO PDF
========================================================= */

async function convertToPDF() {

    var input = get("jpgFiles");

    var result = get("jpgResult");


    if (!input || !input.files.length) {

        result.innerHTML =
            "Please select at least one image.";

        return;
    }


    if (
        !window.jspdf ||
        !window.jspdf.jsPDF
    ) {

        result.innerHTML =
            "PDF library not loaded.";

        return;
    }


    try {

        var jsPDF =
            window.jspdf.jsPDF;


        var pdf =
            new jsPDF(
                "p",
                "mm",
                "a4"
            );


        for (
            var i = 0;
            i < input.files.length;
            i++
        ) {

            result.innerHTML =
                "Converting image " +
                (i + 1) +
                " of " +
                input.files.length +
                "...";


            var file =
                input.files[i];


            var url =
                URL.createObjectURL(file);


            var image =
                new Image();


            await new Promise(
                function(resolve, reject) {

                    image.onload =
                        resolve;

                    image.onerror =
                        reject;

                    image.src =
                        url;

                }
            );


            if (i > 0) {
                pdf.addPage();
            }


            var pageWidth = 210;

            var pageHeight = 297;

            var margin = 10;

            var maxWidth =
                pageWidth -
                margin * 2;

            var maxHeight =
                pageHeight -
                margin * 2;


            var ratio =
                Math.min(
                    maxWidth / image.width,
                    maxHeight / image.height
                );


            var width =
                image.width * ratio;

            var height =
                image.height * ratio;


            var x =
                (pageWidth - width) / 2;

            var y =
                (pageHeight - height) / 2;


            var format =
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


            URL.revokeObjectURL(url);

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
            "❌ Unable to create PDF.";

    }

}


/* =========================================================
   PDF TO JPG
========================================================= */

async function pdfToJPG() {

    var input =
        get("pdfToJpgFile");

    var result =
        get("pdfToJpgResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF file.";

        return;
    }


    if (
        typeof pdfjsLib ===
        "undefined"
    ) {

        result.innerHTML =
            "PDF.js library not loaded.";

        return;
    }


    try {

        var buffer =
            await input.files[0]
                .arrayBuffer();


        var pdf =
            await pdfjsLib
                .getDocument({
                    data: buffer
                })
                .promise;


        var html =
            "<strong>✅ Conversion complete</strong><br><br>";


        for (
            var i = 1;
            i <= pdf.numPages;
            i++
        ) {

            result.innerHTML =
                "Converting page " +
                i +
                " of " +
                pdf.numPages +
                "...";


            var page =
                await pdf.getPage(i);


            var viewport =
                page.getViewport({
                    scale: 1.5
                });


            var canvas =
                document.createElement(
                    "canvas"
                );


            canvas.width =
                viewport.width;

            canvas.height =
                viewport.height;


            await page.render({
                canvasContext:
                    canvas.getContext(
                        "2d"
                    ),
                viewport:
                    viewport
            }).promise;


            var image =
                canvas.toDataURL(
                    "image/jpeg",
                    0.9
                );


            html += `

                <div class="pdf-result-item">

                    <h4>
                        Page ${i}
                    </h4>

                    <img
                        src="${image}"
                        class="pdf-preview-image">

                    <br>

                    <a
                        class="download"
                        href="${image}"
                        download="AB-Digital-Utility-Page-${i}.jpg">

                        Download Page ${i}

                    </a>

                </div>

            `;

        }


        result.innerHTML =
            html;

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Unable to convert PDF.";

    }

}


/* =========================================================
   WORD TO PDF
========================================================= */

async function wordToPDF() {

    var input =
        get("wordToPdfFile");

    var result =
        get("wordToPdfResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a DOCX file.";

        return;
    }


    if (
        typeof mammoth ===
        "undefined"
    ) {

        result.innerHTML =
            "Word library not loaded.";

        return;
    }


    try {

        result.innerHTML =
            "Reading Word document...";


        var buffer =
            await input.files[0]
                .arrayBuffer();


        var converted =
            await mammoth.convertToHtml({
                arrayBuffer:
                    buffer
            });


        var container =
            document.createElement(
                "div"
            );


        container.style.position =
            "fixed";

        container.style.left =
            "-10000px";

        container.style.width =
            "180mm";

        container.style.padding =
            "10mm";

        container.style.background =
            "white";

        container.style.color =
            "black";


        container.innerHTML =
            converted.value;


        document.body.appendChild(
            container
        );


        var pdf =
            new window.jspdf.jsPDF(
                "p",
                "mm",
                "a4"
            );


        await pdf.html(
            container,
            {

                callback:
                    function(pdf) {

                        pdf.save(
                            "AB-Digital-Utility-Word-to-PDF.pdf"
                        );

                    },

                x: 10,

                y: 10,

                width: 190,

                autoPaging:
                    "text",

                margin:
                    [10,10,10,10]

            }
        );


        document.body.removeChild(
            container
        );


        result.innerHTML =
            "<strong>✅ Word converted to PDF!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Word conversion failed.";

    }

}


/* =========================================================
   PDF TO WORD
========================================================= */

async function pdfToWord() {

    var input =
        get("pdfToWordFile");

    var result =
        get("pdfToWordResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    if (
        typeof pdfjsLib ===
        "undefined"
    ) {

        result.innerHTML =
            "PDF.js library not loaded.";

        return;
    }


    if (
        typeof docx ===
        "undefined"
    ) {

        result.innerHTML =
            "DOCX library not loaded.";

        return;
    }


    try {

        var buffer =
            await input.files[0]
                .arrayBuffer();


        var pdf =
            await pdfjsLib
                .getDocument({
                    data: buffer
                })
                .promise;


        var paragraphs = [];


        for (
            var i = 1;
            i <= pdf.numPages;
            i++
        ) {

            result.innerHTML =
                "Extracting page " +
                i +
                "...";


            var page =
                await pdf.getPage(i);


            var text =
                await page.getTextContent();


            var pageText =
                text.items
                    .map(
                        function(item) {
                            return item.str;
                        }
                    )
                    .join(" ")
                    .trim();


            if (pageText) {

                paragraphs.push(
                    new docx.Paragraph({

                        children: [
                            new docx.TextRun({
                                text:
                                    pageText
                            })
                        ],

                        spacing: {
                            after: 200
                        }

                    })
                );

            }

        }


        var documentFile =
            new docx.Document({

                sections: [
                    {
                        children:
                            paragraphs
                    }
                ]

            });


        var blob =
            await docx.Packer
                .toBlob(
                    documentFile
                );


        saveAs(
            blob,
            "AB-Digital-Utility-PDF-to-Word.docx"
        );


        result.innerHTML =
            "<strong>✅ PDF converted to Word!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ PDF to Word failed.";

    }

}


/* =========================================================
   EXCEL TO PDF
========================================================= */

async function excelToPDF() {

    var input =
        get("excelToPdfFile");

    var result =
        get("excelToPdfResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select an Excel file.";

        return;
    }


    if (
        typeof XLSX ===
        "undefined"
    ) {

        result.innerHTML =
            "Excel library not loaded.";

        return;
    }


    try {

        var buffer =
            await input.files[0]
                .arrayBuffer();


        var workbook =
            XLSX.read(
                buffer,
                {
                    type:
                        "array"
                }
            );


        var html = "";


        workbook.SheetNames
            .forEach(
                function(name) {

                    var sheet =
                        workbook.Sheets[
                            name
                        ];


                    html +=
                        "<h2>" +
                        name +
                        "</h2>";


                    html +=
                        XLSX.utils
                            .sheet_to_html(
                                sheet
                            );

                }
            );


        var container =
            document.createElement(
                "div"
            );


        container.style.position =
            "fixed";

        container.style.left =
            "-10000px";

        container.style.width =
            "180mm";

        container.style.background =
            "white";

        container.style.color =
            "black";

        container.innerHTML =
            `

            <style>

            table {
                width:100%;
                border-collapse:collapse;
                font-size:10px;
            }

            td, th {
                border:1px solid #888;
                padding:5px;
            }

            </style>

            ${html}

            `;


        document.body.appendChild(
            container
        );


        var pdf =
            new window.jspdf.jsPDF(
                "p",
                "mm",
                "a4"
            );


        await pdf.html(
            container,
            {

                callback:
                    function(pdf) {

                        pdf.save(
                            "AB-Digital-Utility-Excel-to-PDF.pdf"
                        );

                    },

                x: 10,

                y: 10,

                width: 190,

                autoPaging:
                    "text",

                margin:
                    [10,10,10,10]

            }
        );


        document.body.removeChild(
            container
        );


        result.innerHTML =
            "<strong>✅ Excel converted to PDF!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Excel conversion failed.";

    }

}


/* =========================================================
   PDF TO EXCEL
========================================================= */

async function pdfToExcel() {

    var input =
        get("pdfToExcelFile");

    var result =
        get("pdfToExcelResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    try {

        var buffer =
            await input.files[0]
                .arrayBuffer();


        var pdf =
            await pdfjsLib
                .getDocument({
                    data: buffer
                })
                .promise;


        var rows = [
            [
                "Page",
                "Text"
            ]
        ];


        for (
            var i = 1;
            i <= pdf.numPages;
            i++
        ) {

            var page =
                await pdf.getPage(i);


            var text =
                await page.getTextContent();


            text.items.forEach(
                function(item) {

                    if (
                        item.str &&
                        item.str.trim()
                    ) {

                        rows.push([
                            i,
                            item.str.trim()
                        ]);

                    }

                }
            );

        }


        var sheet =
            XLSX.utils
                .aoa_to_sheet(
                    rows
                );


        var workbook =
            XLSX.utils.book_new();


        XLSX.utils.book_append_sheet(
            workbook,
            sheet,
            "PDF Data"
        );


        XLSX.writeFile(
            workbook,
            "AB-Digital-Utility-PDF-to-Excel.xlsx"
        );


        result.innerHTML =
            "<strong>✅ PDF converted to Excel!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ PDF to Excel failed.";

    }

}


/* =========================================================
   POWERPOINT TO PDF
========================================================= */

async function pptToPDF() {

    var input =
        get("pptToPdfFile");

    var result =
        get("pptToPdfResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PPTX file.";

        return;
    }


    try {

        var buffer =
            await input.files[0]
                .arrayBuffer();


        var zip =
            await JSZip.loadAsync(
                buffer
            );


        var slides =
            Object.keys(
                zip.files
            )
            .filter(
                function(name) {

                    return /^ppt\/slides\/slide\d+\.xml$/
                        .test(name);

                }
            );


        slides.sort(
            function(a,b) {

                return (
                    parseInt(
                        a.match(
                            /slide(\d+)/
                        )[1]
                    )
                    -
                    parseInt(
                        b.match(
                            /slide(\d+)/
                        )[1]
                    )
                );

            }
        );


        var pdf =
            new window.jspdf.jsPDF(
                "landscape",
                "mm",
                "a4"
            );


        for (
            var i = 0;
            i < slides.length;
            i++
        ) {

            if (i > 0) {
                pdf.addPage();
            }


            var xml =
                await zip.files[
                    slides[i]
                ].async(
                    "string"
                );


            var parser =
                new DOMParser();


            var doc =
                parser.parseFromString(
                    xml,
                    "application/xml"
                );


            var nodes =
                doc.getElementsByTagName(
                    "a:t"
                );


            var text = "";


            for (
                var j = 0;
                j < nodes.length;
                j++
            ) {

                text +=
                    nodes[j]
                        .textContent +
                    " ";

            }


            pdf.setFontSize(20);

            pdf.text(
                "PowerPoint Slide " +
                (i + 1),
                20,
                25
            );


            pdf.setFontSize(13);


            var lines =
                pdf.splitTextToSize(
                    text.trim(),
                    240
                );


            pdf.text(
                lines,
                20,
                45
            );

        }


        pdf.save(
            "AB-Digital-Utility-PowerPoint-to-PDF.pdf"
        );


        result.innerHTML =
            "<strong>✅ PowerPoint converted to PDF!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ PowerPoint conversion failed.";

    }

}


/* =========================================================
   PDF TO POWERPOINT
========================================================= */

async function pdfToPPT() {

    var input =
        get("pdfToPptFile");

    var result =
        get("pdfToPptResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    if (
        typeof PptxGenJS ===
        "undefined"
    ) {

        result.innerHTML =
            "PowerPoint library not loaded.";

        return;
    }


    try {

        var buffer =
            await input.files[0]
                .arrayBuffer();


        var pdf =
            await pdfjsLib
                .getDocument({
                    data: buffer
                })
                .promise;


        var ppt =
            new PptxGenJS();


        ppt.layout =
            "LAYOUT_WIDE";


        for (
            var i = 1;
            i <= pdf.numPages;
            i++
        ) {

            result.innerHTML =
                "Creating slide " +
                i +
                " of " +
                pdf.numPages +
                "...";


            var page =
                await pdf.getPage(i);


            var viewport =
                page.getViewport({
                    scale: 1.5
                });


            var canvas =
                document.createElement(
                    "canvas"
                );


            canvas.width =
                viewport.width;

            canvas.height =
                viewport.height;


            await page.render({

                canvasContext:
                    canvas.getContext(
                        "2d"
                    ),

                viewport:
                    viewport

            }).promise;


            var image =
                canvas.toDataURL(
                    "image/jpeg",
                    0.85
                );


            var slide =
                ppt.addSlide();


            slide.background = {
                color: "FFFFFF"
            };


            slide.addImage({

                data:
                    image,

                x: 0,

                y: 0,

                w: 13.333,

                h: 7.5

            });

        }


        await ppt.writeFile({
            fileName:
                "AB-Digital-Utility-PDF-to-PowerPoint.pptx"
        });


        result.innerHTML =
            "<strong>✅ PDF converted to PowerPoint!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ PDF to PowerPoint failed.";

    }

}


/* =========================================================
   HTML TO PDF
========================================================= */

async function htmlToPDF() {

    var input =
        get("htmlToPdfInput");

    var result =
        get("htmlToPdfResult");


    var html =
        input.value.trim();


    if (!html) {

        result.innerHTML =
            "Please enter HTML code.";

        return;
    }


    try {

        var container =
            document.createElement(
                "div"
            );


        container.style.position =
            "fixed";

        container.style.left =
            "-10000px";

        container.style.width =
            "180mm";

        container.style.padding =
            "10mm";

        container.style.background =
            "white";

        container.style.color =
            "black";

        container.innerHTML =
            html;


        document.body.appendChild(
            container
        );


        var pdf =
            new window.jspdf.jsPDF(
                "p",
                "mm",
                "a4"
            );


        await pdf.html(
            container,
            {

                callback:
                    function(pdf) {

                        pdf.save(
                            "AB-Digital-Utility-HTML.pdf"
                        );

                    },

                x: 10,

                y: 10,

                width: 190,

                autoPaging:
                    "text",

                margin:
                    [10,10,10,10]

            }
        );


        document.body.removeChild(
            container
        );


        result.innerHTML =
            "<strong>✅ HTML converted to PDF!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ HTML conversion failed.";

    }

}


/* =========================================================
   MERGE PDF
========================================================= */

async function mergePDF() {

    var input =
        get("mergeFiles");

    var result =
        get("mergeResult");


    if (
        !input ||
        input.files.length < 2
    ) {

        result.innerHTML =
            "Please select at least 2 PDF files.";

        return;
    }


    try {

        var merged =
            await PDFLib.PDFDocument
                .create();


        for (
            var i = 0;
            i < input.files.length;
            i++
        ) {

            result.innerHTML =
                "Merging PDF " +
                (i + 1) +
                "...";


            var bytes =
                await input.files[i]
                    .arrayBuffer();


            var pdf =
                await PDFLib.PDFDocument
                    .load(bytes);


            var pages =
                await merged.copyPages(
                    pdf,
                    pdf.getPageIndices()
                );


            pages.forEach(
                function(page) {

                    merged.addPage(page);

                }
            );

        }


        var output =
            await merged.save();


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
            "❌ Merge failed.";

    }

}


/* =========================================================
   SPLIT PDF
========================================================= */

async function splitPDF() {

    var input =
        get("splitFile");

    var result =
        get("splitResult");

    var pageText =
        get("splitPages").value;


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    try {

        var pages =
            parsePageList(
                pageText
            );


        var source =
            await PDFLib.PDFDocument
                .load(
                    await input.files[0]
                        .arrayBuffer()
                );


        var output =
            await PDFLib.PDFDocument
                .create();


        var indexes =
            pages
                .filter(
                    function(n) {

                        return (
                            n >= 1 &&
                            n <= source.getPageCount()
                        );

                    }
                )
                .map(
                    function(n) {
                        return n - 1;
                    }
                );


        var copied =
            await output.copyPages(
                source,
                indexes
            );


        copied.forEach(
            function(page) {

                output.addPage(page);

            }
        );


        var bytes =
            await output.save();


        downloadBlob(
            bytes,
            "AB-Digital-Utility-Split.pdf",
            "application/pdf"
        );


        result.innerHTML =
            "<strong>✅ PDF split successfully!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Split failed.";

    }

}


/* =========================================================
   REMOVE PAGES
========================================================= */

async function removePDFPages() {

    var input =
        get("removeFile");

    var result =
        get("removeResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    try {

        var remove =
            parsePageList(
                get("removePagesInput")
                    .value
            );


        var source =
            await PDFLib.PDFDocument
                .load(
                    await input.files[0]
                        .arrayBuffer()
                );


        var output =
            await PDFLib.PDFDocument
                .create();


        for (
            var i = 0;
            i < source.getPageCount();
            i++
        ) {

            if (
                remove.indexOf(
                    i + 1
                ) === -1
            ) {

                var copied =
                    await output.copyPages(
                        source,
                        [i]
                    );


                output.addPage(
                    copied[0]
                );

            }

        }


        var bytes =
            await output.save();


        downloadBlob(
            bytes,
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
   EXTRACT
========================================================= */

async function extractPDFPages() {

    var input =
        get("extractFile");

    var result =
        get("extractResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    try {

        var pages =
            parsePageList(
                get("extractPagesInput")
                    .value
            );


        var source =
            await PDFLib.PDFDocument
                .load(
                    await input.files[0]
                        .arrayBuffer()
                );


        var output =
            await PDFLib.PDFDocument
                .create();


        var indexes =
            pages
                .filter(
                    function(n) {

                        return (
                            n >= 1 &&
                            n <= source.getPageCount()
                        );

                    }
                )
                .map(
                    function(n) {
                        return n - 1;
                    }
                );


        var copied =
            await output.copyPages(
                source,
                indexes
            );


        copied.forEach(
            function(page) {

                output.addPage(page);

            }
        );


        var bytes =
            await output.save();


        downloadBlob(
            bytes,
            "AB-Digital-Utility-Extracted-Pages.pdf",
            "application/pdf"
        );


        result.innerHTML =
            "<strong>✅ Pages extracted!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Extraction failed.";

    }

}


/* =========================================================
   ROTATE
========================================================= */

async function rotatePDF() {

    var input =
        get("rotateFile");

    var result =
        get("rotateResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    try {

        var angle =
            Number(
                get("rotateAngle")
                    .value
            );


        var pdf =
            await PDFLib.PDFDocument
                .load(
                    await input.files[0]
                        .arrayBuffer()
                );


        pdf.getPages()
            .forEach(
                function(page) {

                    page.setRotation(
                        PDFLib.degrees(
                            angle
                        )
                    );

                }
            );


        var bytes =
            await pdf.save();


        downloadBlob(
            bytes,
            "AB-Digital-Utility-Rotated.pdf",
            "application/pdf"
        );


        result.innerHTML =
            "<strong>✅ PDF rotated successfully!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Rotation failed.";

    }

}


/* =========================================================
   REORDER
========================================================= */

async function reorderPDF() {

    var input =
        get("reorderFile");

    var result =
        get("reorderResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    try {

        var order =
            parsePageList(
                get("reorderPagesInput")
                    .value
            );


        var source =
            await PDFLib.PDFDocument
                .load(
                    await input.files[0]
                        .arrayBuffer()
                );


        var output =
            await PDFLib.PDFDocument
                .create();


        var indexes =
            order
                .filter(
                    function(n) {

                        return (
                            n >= 1 &&
                            n <= source.getPageCount()
                        );

                    }
                )
                .map(
                    function(n) {
                        return n - 1;
                    }
                );


        var pages =
            await output.copyPages(
                source,
                indexes
            );


        pages.forEach(
            function(page) {

                output.addPage(page);

            }
        );


        var bytes =
            await output.save();


        downloadBlob(
            bytes,
            "AB-Digital-Utility-Reordered.pdf",
            "application/pdf"
        );


        result.innerHTML =
            "<strong>✅ Pages reordered!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Reorder failed.";

    }

}


/* =========================================================
   DUPLICATE
========================================================= */

async function duplicatePDF() {

    var input =
        get("duplicateFile");

    var result =
        get("duplicateResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    try {

        var order =
            parsePageList(
                get("duplicatePagesInput")
                    .value
            );


        var source =
            await PDFLib.PDFDocument
                .load(
                    await input.files[0]
                        .arrayBuffer()
                );


        var output =
            await PDFLib.PDFDocument
                .create();


        var indexes =
            order
                .filter(
                    function(n) {

                        return (
                            n >= 1 &&
                            n <= source.getPageCount()
                        );

                    }
                )
                .map(
                    function(n) {
                        return n - 1;
                    }
                );


        var pages =
            await output.copyPages(
                source,
                indexes
            );


        pages.forEach(
            function(page) {

                output.addPage(page);

            }
        );


        var bytes =
            await output.save();


        downloadBlob(
            bytes,
            "AB-Digital-Utility-Duplicated.pdf",
            "application/pdf"
        );


        result.innerHTML =
            "<strong>✅ New PDF created!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Duplicate failed.";

    }

}


/* =========================================================
   PAGE NUMBERS
========================================================= */

async function addPageNumbers() {

    var input =
        get("pageNumberFile");

    var result =
        get("pageNumberResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    try {

        var pdf =
            await PDFLib.PDFDocument
                .load(
                    await input.files[0]
                        .arrayBuffer()
                );


        var position =
            get("pageNumberPosition")
                .value;


        pdf.getPages()
            .forEach(
                function(page, index) {

                    var size =
                        page.getSize();


                    var x =
                        size.width / 2;


                    if (
                        position ===
                        "bottom-left"
                    ) {

                        x = 25;

                    }

                    if (
                        position ===
                        "bottom-right"
                    ) {

                        x =
                            size.width - 40;

                    }

                    if (
                        position ===
                        "top-center"
                    ) {

                        page.drawText(
                            String(index + 1),
                            {
                                x:
                                    x - 5,

                                y:
                                    size.height - 25,

                                size:
                                    10
                            }
                        );

                    }

                    else {

                        page.drawText(
                            String(index + 1),
                            {
                                x:
                                    x - 5,

                                y:
                                    15,

                                size:
                                    10
                            }
                        );

                    }

                }
            );


        var bytes =
            await pdf.save();


        downloadBlob(
            bytes,
            "AB-Digital-Utility-Page-Numbers.pdf",
            "application/pdf"
        );


        result.innerHTML =
            "<strong>✅ Page numbers added!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Unable to add page numbers.";

    }

}


/* =========================================================
   WATERMARK
========================================================= */

async function watermarkPDF() {

    var input =
        get("watermarkFile");

    var result =
        get("watermarkResult");

    var text =
        get("watermarkText")
            .value
            .trim();


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    if (!text) {

        result.innerHTML =
            "Please enter watermark text.";

        return;
    }


    try {

        var pdf =
            await PDFLib.PDFDocument
                .load(
                    await input.files[0]
                        .arrayBuffer()
                );


        pdf.getPages()
            .forEach(
                function(page) {

                    var size =
                        page.getSize();


                    page.drawText(
                        text,
                        {
                            x:
                                size.width / 2 -
                                60,

                            y:
                                size.height / 2,

                            size:
                                35,

                            opacity:
                                0.25,

                            rotate:
                                PDFLib.degrees(
                                    45
                                )
                        }
                    );

                }
            );


        var bytes =
            await pdf.save();


        downloadBlob(
            bytes,
            "AB-Digital-Utility-Watermarked.pdf",
            "application/pdf"
        );


        result.innerHTML =
            "<strong>✅ Watermark added!</strong>";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Watermark failed.";

    }

}


/* =========================================================
   COMPRESS PDF
========================================================= */

async function compressPDF() {

    var input =
        get("compressPdfFile");

    var result =
        get("compressPdfResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    try {

        var original =
            input.files[0];


        var pdf =
            await PDFLib.PDFDocument
                .load(
                    await original
                        .arrayBuffer()
                );


        var bytes =
            await pdf.save({
                useObjectStreams:
                    true
            });


        var oldSize =
            (original.size / 1024)
                .toFixed(1);


        var newSize =
            (bytes.length / 1024)
                .toFixed(1);


        downloadBlob(
            bytes,
            "AB-Digital-Utility-Compressed.pdf",
            "application/pdf"
        );


        result.innerHTML = `

            <strong>
                ✅ PDF processed!
            </strong>

            <br><br>

            Original:
            ${oldSize} KB

            <br>

            Output:
            ${newSize} KB

            <br><br>

            Note: PDF-lib can optimize PDF structure,
            but it cannot guarantee a smaller file for
            every PDF, especially image-heavy files.

        `;

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Compression failed.";

    }

}


/* =========================================================
   OCR PDF
========================================================= */

async function ocrPDF() {

    var input =
        get("ocrFile");

    var result =
        get("ocrResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF or image.";

        return;
    }


    if (
        typeof Tesseract ===
        "undefined"
    ) {

        result.innerHTML =
            "OCR library not loaded.";

        return;
    }


    try {

        result.innerHTML =
            "Starting OCR...";


        var file =
            input.files[0];


        if (
            file.type.startsWith(
                "image/"
            )
        ) {

            var output =
                await Tesseract.recognize(
                    file,
                    "eng",
                    {
                        logger:
                            function(info) {

                                if (
                                    info.status
                                ) {

                                    result.innerHTML =
                                        info.status +
                                        "<br>" +
                                        Math.round(
                                            (
                                                info.progress ||
                                                0
                                            ) *
                                            100
                                        ) +
                                        "%";

                                }

                            }
                    }
                );


            result.innerHTML = `

                <strong>
                    ✅ OCR Complete
                </strong>

                <br><br>

                <textarea
                    rows="15"
                    style="width:100%;">

${escapeHTML(
    output.data.text
)}

                </textarea>

            `;

            return;

        }


        if (
            file.type ===
            "application/pdf"
        ) {

            var buffer =
                await file.arrayBuffer();


            var pdf =
                await pdfjsLib
                    .getDocument({
                        data:
                            buffer
                    })
                    .promise;


            var allText = "";


            for (
                var i = 1;
                i <= pdf.numPages;
                i++
            ) {

                result.innerHTML =
                    "Rendering page " +
                    i +
                    " of " +
                    pdf.numPages +
                    "...";


                var page =
                    await pdf.getPage(i);


                var viewport =
                    page.getViewport({
                        scale: 1.5
                    });


                var canvas =
                    document.createElement(
                        "canvas"
                    );


                canvas.width =
                    viewport.width;

                canvas.height =
                    viewport.height;


                await page.render({

                    canvasContext:
                        canvas.getContext(
                            "2d"
                        ),

                    viewport:
                        viewport

                }).promise;


                var output =
                    await Tesseract.recognize(
                        canvas,
                        "eng"
                    );


                allText +=
                    "\n\n--- PAGE " +
                    i +
                    " ---\n\n" +
                    output.data.text;

            }


            result.innerHTML = `

                <strong>
                    ✅ OCR Complete
                </strong>

                <br><br>

                <textarea
                    rows="20"
                    style="width:100%;">

${escapeHTML(allText)}

                </textarea>

            `;

            return;

        }


        result.innerHTML =
            "Unsupported file type.";

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ OCR failed.";

    }

}


/* =========================================================
   PROTECT PDF
========================================================= */

async function protectPDF() {

    var input =
        get("protectFile");

    var result =
        get("protectResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    var password =
        get("protectPassword")
            .value;


    if (!password) {

        result.innerHTML =
            "Please enter a password.";

        return;
    }


    result.innerHTML = `

        <strong>
            Browser-only password encryption is not
            supported by the current PDF library.
        </strong>

        <br><br>

        The PDF has NOT been falsely marked as protected.

        <br><br>

        We can add true encryption after integrating
        a server-side PDF encryption engine.

    `;

}


/* =========================================================
   UNLOCK PDF
========================================================= */

async function unlockPDF() {

    var input =
        get("unlockFile");

    var result =
        get("unlockResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    result.innerHTML = `

        <strong>
            Password-protected PDFs require the correct
            password and a PDF encryption engine.
        </strong>

        <br><br>

        This browser-only version will not bypass
        or crack PDF passwords.

    `;

}


/* =========================================================
   PDF PREVIEW
========================================================= */

async function previewPDF() {

    var input =
        get("previewFile");

    var result =
        get("previewResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    try {

        var buffer =
            await input.files[0]
                .arrayBuffer();


        var pdf =
            await pdfjsLib
                .getDocument({
                    data:
                        buffer
                })
                .promise;


        var html = "";


        for (
            var i = 1;
            i <= pdf.numPages;
            i++
        ) {

            var page =
                await pdf.getPage(i);


            var viewport =
                page.getViewport({
                    scale:
                        0.7
                });


            var canvas =
                document.createElement(
                    "canvas"
                );


            canvas.width =
                viewport.width;

            canvas.height =
                viewport.height;


            await page.render({

                canvasContext:
                    canvas.getContext(
                        "2d"
                    ),

                viewport:
                    viewport

            }).promise;


            html += `

                <div
                class="pdf-preview-page">

                    <h4>
                        Page ${i}
                    </h4>

                    <img
                    src="${canvas.toDataURL(
                        "image/jpeg"
                    )}"
                    class="pdf-preview-image">

                </div>

            `;

        }


        result.innerHTML =
            html;

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Preview failed.";

    }

}


/* =========================================================
   IMAGE COMPRESSOR
========================================================= */

function compressImage() {

    var input =
        get("compressFile");

    var result =
        get("compressResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select an image.";

        return;
    }


    var quality =
        Number(
            get("quality").value
        );


    var reader =
        new FileReader();


    reader.onload =
        function(event) {

            var image =
                new Image();


            image.onload =
                function() {

                    var canvas =
                        document.createElement(
                            "canvas"
                        );


                    canvas.width =
                        image.width;

                    canvas.height =
                        image.height;


                    canvas.getContext(
                        "2d"
                    ).drawImage(
                        image,
                        0,
                        0
                    );


                    canvas.toBlob(

                        function(blob) {

                            var url =
                                URL.createObjectURL(
                                    blob
                                );


                            result.innerHTML = `

                                Original:
                                ${(input.files[0].size / 1024).toFixed(1)}
                                KB

                                <br>

                                Compressed:
                                ${(blob.size / 1024).toFixed(1)}
                                KB

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


    reader.readAsDataURL(
        input.files[0]
    );

}


/* =========================================================
   IMAGE RESIZER
========================================================= */

function resizeImage() {

    var input =
        get("resizeFile");

    var result =
        get("resizeResult");


    var width =
        Number(
            get("resizeWidth")
                .value
        );


    var height =
        Number(
            get("resizeHeight")
                .value
        );


    if (!input.files.length) {

        result.innerHTML =
            "Please select an image.";

        return;
    }


    if (!width || !height) {

        result.innerHTML =
            "Please enter width and height.";

        return;
    }


    var reader =
        new FileReader();


    reader.onload =
        function(event) {

            var image =
                new Image();


            image.onload =
                function() {

                    var canvas =
                        document.createElement(
                            "canvas"
                        );


                    canvas.width =
                        width;

                    canvas.height =
                        height;


                    canvas.getContext(
                        "2d"
                    ).drawImage(
                        image,
                        0,
                        0,
                        width,
                        height
                    );


                    canvas.toBlob(
                        function(blob) {

                            var url =
                                URL.createObjectURL(
                                    blob
                                );


                            result.innerHTML = `

                                <strong>
                                    ✅ Image resized!
                                </strong>

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


    reader.readAsDataURL(
        input.files[0]
    );

}


/* =========================================================
   QR
========================================================= */

function generateQR() {

    var text =
        get("qrText")
            .value
            .trim();

    var result =
        get("qrResult");


    if (!text) {

        result.innerHTML =
            "Please enter text or URL.";

        return;
    }


    result.innerHTML = "";


    if (
        typeof QRCode ===
        "undefined"
    ) {

        result.innerHTML =
            "QR library not loaded.";

        return;
    }


    new QRCode(
        result,
        {
            text:
                text,

            width:
                220,

            height:
                220
        }
    );

}


/* =========================================================
   GST
========================================================= */

function calculateGST() {

    var amount =
        Number(
            get("gstAmount")
                .value
        );


    var rate =
        Number(
            get("gstRate")
                .value
        );


    var result =
        get("gstResult");


    if (
        amount <= 0 ||
        rate < 0
    ) {

        result.innerHTML =
            "Please enter valid values.";

        return;
    }


    var gst =
        amount *
        rate /
        100;


    var total =
        amount +
        gst;


    result.innerHTML = `

        GST:
        <strong>
            ₹${gst.toFixed(2)}
        </strong>

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

    var value =
        Number(
            get("percentageValue")
                .value
        );


    var total =
        Number(
            get("percentageTotal")
                .value
        );


    var result =
        get("percentageResult");


    if (total <= 0) {

        result.innerHTML =
            "Please enter a valid total.";

        return;
    }


    var percentage =
        value /
        total *
        100;


    result.innerHTML = `

        <strong>
            ${percentage.toFixed(2)}%
        </strong>

    `;

}


/* =========================================================
   AGE
========================================================= */

function calculateAge() {

    var value =
        get("birthDate")
            .value;


    var result =
        get("ageResult");


    if (!value) {

        result.innerHTML =
            "Please select your date of birth.";

        return;
    }


    var birth =
        new Date(value);


    var today =
        new Date();


    if (birth > today) {

        result.innerHTML =
            "Date cannot be in the future.";

        return;
    }


    var years =
        today.getFullYear() -
        birth.getFullYear();


    var months =
        today.getMonth() -
        birth.getMonth();


    var days =
        today.getDate() -
        birth.getDate();


    if (days < 0) {

        months--;


        var previous =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );


        days +=
            previous.getDate();

    }


    if (months < 0) {

        years--;

        months += 12;

    }


    result.innerHTML = `

        Your age:

        <strong>

            ${years} years,
            ${months} months,
            ${days} days

        </strong>

    `;

}


/* =========================================================
   EMI
========================================================= */

function calculateEMI() {

    var principal =
        Number(
            get("loanAmount")
                .value
        );


    var annualRate =
        Number(
            get("interestRate")
                .value
        );


    var years =
        Number(
            get("loanYears")
                .value
        );


    var result =
        get("emiResult");


    if (
        principal <= 0 ||
        years <= 0 ||
        annualRate < 0
    ) {

        result.innerHTML =
            "Please enter valid loan details.";

        return;
    }


    var months =
        years * 12;


    var monthlyRate =
        annualRate /
        12 /
        100;


    var emi;


    if (
        monthlyRate === 0
    ) {

        emi =
            principal /
            months;

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


    var total =
        emi *
        months;


    var interest =
        total -
        principal;


    result.innerHTML = `

        Monthly EMI:
        <strong>
            ₹${emi.toFixed(2)}
        </strong>

        <br>

        Total Interest:
        ₹${interest.toFixed(2)}

        <br>

        Total Payment:
        ₹${total.toFixed(2)}

    `;

}


/* =========================================================
   QUICK GST
========================================================= */

function quickGST() {

    var amount =
        Number(
            get("quickGSTAmount")
                .value
        );


    var rate =
        Number(
            get("quickGSTRate")
                .value
        );


    var result =
        get("quickGSTResult");


    if (
        amount <= 0 ||
        rate < 0
    ) {

        result.innerHTML =
            "Enter valid values.";

        return;
    }


    var gst =
        amount *
        rate /
        100;


    result.innerHTML = `

        GST:
        ₹${gst.toFixed(2)}

        <br>

        Total:
        <strong>
            ₹${(
                amount +
                gst
            ).toFixed(2)}
        </strong>

    `;

}


/* =========================================================
   QUICK PERCENTAGE
========================================================= */

function quickPercentage() {

    var value =
        Number(
            get("quickPercentValue")
                .value
        );


    var total =
        Number(
            get("quickPercentTotal")
                .value
        );


    var result =
        get("quickPercentResult");


    if (total <= 0) {

        result.innerHTML =
            "Enter valid values.";

        return;
    }


    result.innerHTML =
        "<strong>" +
        (
            value /
            total *
            100
        ).toFixed(2) +
        "%</strong>";

}


/* =========================================================
   SEARCH
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        var search =
            get("searchInput");


        if (!search) {
            return;
        }


        search.addEventListener(
            "input",
            function() {

                var query =
                    search.value
                        .toLowerCase()
                        .trim();


                var cards =
                    document.querySelectorAll(
                        ".tool-card"
                    );


                cards.forEach(
                    function(card) {

                        var text =
                            (
                                card.innerText +
                                " " +
                                (
                                    card.dataset.search ||
                                    ""
                                )
                            )
                            .toLowerCase();


                        card.style.display =
                            !query ||
                            text.includes(query)
                                ? ""
                                : "none";

                    }
                );

            }
        );

    }
);


/* =========================================================
   UTILITY FUNCTIONS
========================================================= */

function downloadBlob(
    bytes,
    filename,
    type
) {

    var blob =
        new Blob(
            [bytes],
            {
                type:
                    type
            }
        );


    var url =
        URL.createObjectURL(
            blob
        );


    var a =
        document.createElement(
            "a"
        );


    a.href =
        url;

    a.download =
        filename;


    document.body.appendChild(
        a
    );


    a.click();


    document.body.removeChild(
        a
    );


    setTimeout(
        function() {

            URL.revokeObjectURL(
                url
            );

        },
        1000
    );

}


/* =========================================================
   PAGE LIST PARSER
========================================================= */

function parsePageList(value) {

    if (!value) {
        return [];
    }


    var result = [];


    value
        .split(",")
        .forEach(
            function(part) {

                part =
                    part.trim();


                if (
                    part.includes("-")
                ) {

                    var range =
                        part.split("-");


                    var start =
                        parseInt(
                            range[0]
                        );


                    var end =
                        parseInt(
                            range[1]
                        );


                    if (
                        !isNaN(start) &&
                        !isNaN(end)
                    ) {

                        var step =
                            start <= end
                                ? 1
                                : -1;


                        for (
                            var i =
                                start;
                            step > 0
                                ? i <= end
                                : i >= end;
                            i += step
                        ) {

                            result.push(
                                i
                            );

                        }

                    }

                }

                else {

                    var number =
                        parseInt(
                            part
                        );


                    if (
                        !isNaN(number)
                    ) {

                        result.push(
                            number
                        );

                    }

                }

            }
        );


    return result;

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(text) {

    return String(text)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   STARTUP
========================================================= */

console.log(
    "AB Digital Utility loaded successfully."
);
