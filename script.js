/* =========================================================
   AB DIGITAL UTILITY
   COMPLETE SCRIPT.JS
   ========================================================= */


/* =========================================================
   OPEN TOOL
   ========================================================= */

function openTool(tool) {

    const workspace =
        document.getElementById("workspace");

    const content =
        document.getElementById("toolContent");


    if (!workspace || !content) {
        return;
    }


    workspace.style.display = "block";


    /* =====================================================
       PDF TOOLS
       ===================================================== */

    if (tool === "pdfTools") {

        content.innerHTML = `

            <div class="pdf-core">

                <h2>📄 PDF Tools</h2>

                <p>
                    Convert, merge, split and manage PDF files.
                </p>


                <div class="pdf-tools-grid">


                    <button
                        onclick="openTool('jpgPdf')">

                        🖼️ JPG to PDF

                    </button>


                    <button
                        onclick="openTool('pdfJpg')">

                        📄 PDF to JPG

                    </button>


                    <button
                        onclick="openTool('mergePdf')">

                        🔗 Merge PDF

                    </button>


                    <button
                        onclick="openTool('splitPdf')">

                        ✂️ Split PDF

                    </button>


                    <button
                        onclick="openTool('removePdf')">

                        🗑️ Remove Pages

                    </button>


                    <button
                        onclick="openTool('wordPdf')">

                        📝 Word to PDF

                    </button>


                    <button
                        onclick="openTool('pdfWord')">

                        📄 PDF to Word

                    </button>


                    <button
                        onclick="openTool('excelPdf')">

                        📊 Excel to PDF

                    </button>


                    <button
                        onclick="openTool('pdfExcel')">

                        📄 PDF to Excel

                    </button>


                    <button
                        onclick="openTool('pptPdf')">

                        📽️ PowerPoint to PDF

                    </button>


                    <button
                        onclick="openTool('pdfPpt')">

                        📄 PDF to PowerPoint

                    </button>


                    <button
                        onclick="openTool('htmlPdf')">

                        🌐 HTML to PDF

                    </button>


                </div>

            </div>

        `;

    }


    /* =====================================================
       JPG TO PDF
       ===================================================== */

    if (tool === "jpgPdf") {

        content.innerHTML = `

            <h2>🖼️ JPG to PDF</h2>

            <p>
                Convert multiple JPG or PNG images into one PDF.
            </p>


            <input
                id="jpgFiles"
                type="file"
                accept="image/jpeg,image/png"
                multiple
            >


            <br><br>


            <button
                onclick="convertToPDF()">

                Convert to PDF

            </button>


            <div
                id="jpgResult"
                class="result">
            </div>

        `;

    }


    /* =====================================================
       PDF TO JPG
       ===================================================== */

    if (tool === "pdfJpg") {

        content.innerHTML = `

            <h2>📄 PDF to JPG</h2>

            <p>
                Convert PDF pages into JPG images.
            </p>


            <input
                id="pdfToJpgFile"
                type="file"
                accept="application/pdf"
            >


            <br><br>


            <button
                onclick="convertPdfToJpg()">

                Convert to JPG

            </button>


            <div
                id="pdfToJpgResult"
                class="result">
            </div>

        `;

    }


    /* =====================================================
       MERGE PDF
       ===================================================== */

    if (tool === "mergePdf") {

        content.innerHTML = `

            <h2>🔗 Merge PDF</h2>

            <p>
                Combine multiple PDF files into one PDF.
            </p>


            <input
                id="mergePdfFiles"
                type="file"
                accept="application/pdf"
                multiple
            >


            <br><br>


            <button
                onclick="mergePDF()">

                Merge PDFs

            </button>


            <div
                id="mergePdfResult"
                class="result">
            </div>

        `;

    }


    /* =====================================================
       SPLIT PDF
       ===================================================== */

    if (tool === "splitPdf") {

        content.innerHTML = `

            <h2>✂️ Split PDF</h2>

            <p>
                Extract selected pages from a PDF.
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
                placeholder="Pages e.g. 1,3,5"
            >


            <br><br>


            <button
                onclick="splitPDF()">

                Split PDF

            </button>


            <div
                id="splitPdfResult"
                class="result">
            </div>

        `;

    }


    /* =====================================================
       REMOVE PDF PAGES
       ===================================================== */

    if (tool === "removePdf") {

        content.innerHTML = `

            <h2>🗑️ Remove PDF Pages</h2>

            <p>
                Remove selected pages from a PDF.
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
                placeholder="Pages to remove e.g. 2,4"
            >


            <br><br>


            <button
                onclick="removePdfPages()">

                Remove Pages

            </button>


            <div
                id="removePdfResult"
                class="result">
            </div>

        `;

    }


    /* =====================================================
       WORD TO PDF
       ===================================================== */

    if (tool === "wordPdf") {

        content.innerHTML = `

            <h2>📝 Word to PDF</h2>

            <p>
                Word to PDF conversion module.
            </p>

            <input
                type="file"
                accept=".doc,.docx"
            >

            <br><br>

            <button
                onclick="showComingSoon('Word to PDF')">

                Convert to PDF

            </button>

            <div class="result"></div>

        `;

    }


    /* =====================================================
       PDF TO WORD
       ===================================================== */

    if (tool === "pdfWord") {

        content.innerHTML = `

            <h2>📄 PDF to Word</h2>

            <p>
                Convert PDF documents into editable Word files.
            </p>

            <input
                type="file"
                accept=".pdf"
            >

            <br><br>

            <button
                onclick="showComingSoon('PDF to Word')">

                Convert to Word

            </button>

            <div class="result"></div>

        `;

    }


    /* =====================================================
       EXCEL TO PDF
       ===================================================== */

    if (tool === "excelPdf") {

        content.innerHTML = `

            <h2>📊 Excel to PDF</h2>

            <p>
                Convert Excel spreadsheets into PDF.
            </p>

            <input
                type="file"
                accept=".xls,.xlsx"
            >

            <br><br>

            <button
                onclick="showComingSoon('Excel to PDF')">

                Convert to PDF

            </button>

            <div class="result"></div>

        `;

    }


    /* =====================================================
       PDF TO EXCEL
       ===================================================== */

    if (tool === "pdfExcel") {

        content.innerHTML = `

            <h2>📄 PDF to Excel</h2>

            <p>
                Convert PDF tables into Excel spreadsheets.
            </p>

            <input
                type="file"
                accept=".pdf"
            >

            <br><br>

            <button
                onclick="showComingSoon('PDF to Excel')">

                Convert to Excel

            </button>

            <div class="result"></div>

        `;

    }


    /* =====================================================
       POWERPOINT TO PDF
       ===================================================== */

    if (tool === "pptPdf") {

        content.innerHTML = `

            <h2>📽️ PowerPoint to PDF</h2>

            <p>
                Convert PowerPoint presentations into PDF.
            </p>

            <input
                type="file"
                accept=".ppt,.pptx"
            >

            <br><br>

            <button
                onclick="showComingSoon('PowerPoint to PDF')">

                Convert to PDF

            </button>

            <div class="result"></div>

        `;

    }


    /* =====================================================
       PDF TO POWERPOINT
       ===================================================== */

    if (tool === "pdfPpt") {

        content.innerHTML = `

            <h2>📄 PDF to PowerPoint</h2>

            <p>
                Convert PDF pages into PowerPoint slides.
            </p>

            <input
                type="file"
                accept=".pdf"
            >

            <br><br>

            <button
                onclick="showComingSoon('PDF to PowerPoint')">

                Convert to PowerPoint

            </button>

            <div class="result"></div>

        `;

    }


    /* =====================================================
       HTML TO PDF
       ===================================================== */

    if (tool === "htmlPdf") {

        content.innerHTML = `

            <h2>🌐 HTML to PDF</h2>

            <p>
                Enter HTML content and create a PDF.
            </p>


            <textarea
                id="htmlInput"
                rows="10"
                placeholder="<h1>Hello</h1>">
            </textarea>


            <br><br>


            <button
                onclick="convertHtmlToPDF()">

                Create PDF

            </button>


            <div
                id="htmlPdfResult"
                class="result">
            </div>

        `;

    }


    /* =====================================================
       QR CODE
       ===================================================== */

    if (tool === "qr") {

        content.innerHTML = `

            <h2>🔳 QR Code Generator</h2>

            <p>
                Enter text or website URL.
            </p>


            <input
                id="qrText"
                type="text"
                placeholder="Enter text or URL"
            >


            <br><br>


            <button
                onclick="generateQR()">

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

            <h2>🧾 GST Calculator</h2>


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


            <button
                onclick="calculateGST()">

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

            <h2>% Percentage Calculator</h2>


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


            <button
                onclick="calculatePercentage()">

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

            <h2>🗜️ Image Compressor</h2>


            <p>
                Reduce image file size.
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


            <button
                onclick="compressImage()">

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
                placeholder="Width in pixels"
            >


            <input
                id="resizeHeight"
                type="number"
                placeholder="Height in pixels"
            >


            <br><br>


            <button
                onclick="resizeImage()">

                Resize Image

            </button>


            <div
                id="resizeResult"
                class="result">
            </div>

        `;

    }


    /* =====================================================
       AGE
       ===================================================== */

    if (tool === "age") {

        content.innerHTML = `

            <h2>🎂 Age Calculator</h2>


            <p>
                Enter your date of birth.
            </p>


            <input
                id="birthDate"
                type="date"
            >


            <br><br>


            <button
                onclick="calculateAge()">

                Calculate Age

            </button>


            <div
                id="ageResult"
                class="result">
            </div>

        `;

    }


    /* =====================================================
       EMI
       ===================================================== */

    if (tool === "emi") {

        content.innerHTML = `

            <h2>₹ EMI Calculator</h2>


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


            <button
                onclick="calculateEMI()">

                Calculate EMI

            </button>


            <div
                id="emiResult"
                class="result">
            </div>

        `;

    }


    workspace.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   CLOSE TOOL
   ========================================================= */

function closeTool() {

    const workspace =
        document.getElementById("workspace");

    const content =
        document.getElementById("toolContent");


    workspace.style.display =
        "none";


    content.innerHTML =
        "";

}


/* =========================================================
   JPG TO PDF
   ========================================================= */

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
            "PDF library load nahi hui. Page refresh karein.";

        return;

    }


    const jsPDF =
        window.jspdf.jsPDF;


    const pdf =
        new jsPDF(
            "p",
            "mm",
            "a4"
        );


    try {

        for (
            let i = 0;
            i < files.length;
            i++
        ) {

            result.innerHTML =
                Converting image ${i + 1} of ${files.length}...;


            const image =
                await loadImage(files[i]);


            if (i > 0) {
                pdf.addPage();
            }


            const pageWidth =
                210;

            const pageHeight =
                297;

            const margin =
                10;


            const maxWidth =
                pageWidth -
                margin * 2;


            const maxHeight =
                pageHeight -
                margin * 2;


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
                files[i].type ===
                "image/png"
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
            "❌ Unable to create PDF.";

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
                            "Image loading failed."
                        )
                    );

                };


            image.src =
                url;

        }
    );

}


/* =========================================================
   PDF TO JPG
   ========================================================= */

async function convertPdfToJpg() {

    const input =
        document.getElementById(
            "pdfToJpgFile"
        );


    const result =
        document.getElementById(
            "pdfToJpgResult"
        );


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF file.";

        return;

    }


    if (
        typeof pdfjsLib === "undefined"
    ) {

        result.innerHTML =
            "PDF.js library load nahi hui.";

        return;

    }


    try {

        const file =
            input.files[0];


        const data =
            await file.arrayBuffer();


        const pdf =
            await pdfjsLib
                .getDocument({
                    data: data
                })
                .promise;


        let output = "";


        for (
            let pageNumber = 1;
            pageNumber <= pdf.numPages;
            pageNumber++
        ) {

            result.innerHTML =
                Converting page ${pageNumber} of ${pdf.numPages}...;


            const page =
                await pdf.getPage(
                    pageNumber
                );


            const viewport =
                page.getViewport({
                    scale: 1.5
                });


            const canvas =
                document.createElement(
                    "canvas"
                );


            const context =
                canvas.getContext(
                    "2d"
                );


            canvas.width =
                viewport.width;


            canvas.height =
                viewport.height;


            await page.render({
                canvasContext:
                    context,
                viewport:
                    viewport
            }).promise;


            const image =
                canvas.toDataURL(
                    "image/jpeg",
                    0.9
                );


            output += `

                <div
                    style="
                        margin:20px 0;
                    "
                >

                    <strong>
                        Page ${pageNumber}
                    </strong>

                    <br><br>

                    <img
                        src="${image}"
                        style="
                            max-width:100%;
                            border-radius:8px;
                        "
                    >

                    <br><br>

                    <a
                        class="download"
                        href="${image}"
                        download="page-${pageNumber}.jpg"
                    >

                        Download Page ${pageNumber}

                    </a>

                </div>

            `;

        }


        result.innerHTML = `
            <strong>
                ✅ PDF converted successfully
            </strong>

            ${output}
        `;

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Unable to convert PDF.";

    }

}


/* =========================================================
   MERGE PDF
   ========================================================= */

async function mergePDF() {

    const input =
        document.getElementById(
            "mergePdfFiles"
        );


    const result =
        document.getElementById(
            "mergePdfResult"
        );


    if (!input.files.length) {

        result.innerHTML =
            "Please select PDF files.";

        return;

    }


    if (
        typeof PDFLib === "undefined"
    ) {

        result.innerHTML =
            "PDF library load nahi hui.";

        return;

    }


    try {

        const mergedPdf =
            await PDFLib
                .PDFDocument
                .create();


        for (
            const file of input.files
        ) {

            const bytes =
                await file.arrayBuffer();


            const pdf =
                await PDFLib
                    .PDFDocument
                    .load(bytes);


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
        document.getElementById(
            "splitPdfFile"
        );


    const pagesInput =
        document.getElementById(
            "splitPages"
        );


    const result =
        document.getElementById(
            "splitPdfResult"
        );


    if (!fileInput.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;

    }


    const pageText =
        pagesInput.value.trim();


    if (!pageText) {

        result.innerHTML =
            "Enter page numbers like 1,3,5.";

        return;

    }


    if (
        typeof PDFLib === "undefined"
    ) {

        result.innerHTML =
            "PDF library load nahi hui.";

        return;

    }


    try {

        const bytes =
            await fileInput.files[0]
                .arrayBuffer();


        const sourcePdf =
            await PDFLib
                .PDFDocument
                .load(bytes);


        const outputPdf =
            await PDFLib
                .PDFDocument
                .create();


        const pages =
            pageText
                .split(",")
                .map(
                    function(value) {

                        return (
                            parseInt(
                                value.trim(),
                                10
                            ) - 1
                        );

                    }
                )
                .filter(
                    function(page) {

                        return (
                            page >= 0 &&
                            page <
                            sourcePdf.getPageCount()
                        );

                    }
                );


        if (!pages.length) {

            result.innerHTML =
                "No valid pages found.";

            return;

        }


        const copiedPages =
            await outputPdf.copyPages(
                sourcePdf,
                pages
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
        document.getElementById(
            "removePdfFile"
        );


    const pagesInput =
        document.getElementById(
            "removePages"
        );


    const result =
        document.getElementById(
            "removePdfResult"
        );


    if (!fileInput.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;

    }


    const pageText =
        pagesInput.value.trim();


    if (!pageText) {

        result.innerHTML =
            "Enter pages like 2,4.";

        return;

    }


    if (
        typeof PDFLib === "undefined"
    ) {

        result.innerHTML =
            "PDF library load nahi hui.";

        return;

    }


    try {

        const bytes =
            await fileInput.files[0]
                .arrayBuffer();


        const sourcePdf =
            await PDFLib
                .PDFDocument
                .load(bytes);


        const outputPdf =
            await PDFLib
                .PDFDocument
                .create();


        const removePages =
            new Set(
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
                    )
            );


        const keepPages = [];


        for (
            let i = 0;
            i < sourcePdf.getPageCount();
            i++
        ) {

            if (
                !removePages.has(i + 1)
            ) {

                keepPages.push(i);

            }

        }


        if (!keepPages.length) {

            result.innerHTML =
                "You cannot remove all pages.";

            return;

        }


        const pages =
            await outputPdf.copyPages(
                sourcePdf,
                keepPages
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
   HTML TO PDF
   ========================================================= */

function convertHtmlToPDF() {

    const html =
        document.getElementById(
            "htmlInput"
        ).value.trim();


    const result =
        document.getElementById(
            "htmlPdfResult"
        );


    if (!html) {

        result.innerHTML =
            "Please enter HTML.";

        return;

    }


    if (
        typeof window.jspdf === "undefined"
    ) {

        result.innerHTML =
            "PDF library load nahi hui.";

        return;

    }


    const jsPDF =
        window.jspdf.jsPDF;


    const pdf =
        new jsPDF();


    const temp =
        document.createElement(
            "div"
        );


    temp.innerHTML =
        html;


    document.body.appendChild(
        temp
    );


    pdf.html(
        temp,
        {
            callback:
                function(doc) {

                    doc.save(
                        "AB-Digital-Utility-HTML.pdf"
                    );


                    temp.remove();


                    result.innerHTML =
                        "<strong>✅ PDF created successfully!</strong>";

                },

            margin: 10,

            autoPaging: "text",

            x: 10,

            y: 10,

            width: 190

        }
    );

}


/* =========================================================
   COMING SOON
   ========================================================= */

function showComingSoon(name) {

    const results =
        document.querySelectorAll(
            ".result"
        );


    const result =
        results[results.length - 1];


    if (result) {

        result.innerHTML = `

            <strong>
                🚧 ${name}
            </strong>

            <br><br>

            This converter will be added in
            the next version.

        `;

    }

}


/* =========================================================
   DOWNLOAD BLOB
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
        URL.createObjectURL(
            blob
        );


    const link =
        document.createElement(
            "a"
        );


    link.href =
        url;


    link.download =
        filename;


    document.body.appendChild(
        link
    );


    link.click();


    link.remove();


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
   QR CODE
   ========================================================= */

function generateQR() {

    const text =
        document.getElementById(
            "qrText"
        ).value.trim();


    const result =
        document.getElementById(
            "qrResult"
        );


    if (!text) {

        result.innerHTML =
            "Please enter text or URL.";

        return;

    }


    result.innerHTML =
        "";


    if (
        typeof QRCode === "undefined"
    ) {

        result.innerHTML =
            "QR library load nahi hui.";

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
            document.getElementById(
                "gstAmount"
            ).value
        );


    const rate =
        Number(
            document.getElementById(
                "gstRate"
            ).value
        );


    const result =
        document.getElementById(
            "gstResult"
        );


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

                                Original:
                                <strong>
                                    ${originalSize} KB
                                </strong>

                                <br>

                                Compressed:
                                <strong>
                                    ${newSize} KB
                                </strong>

                                <br><br>

                                <a
                                    class="download"
                                    href="${url}"
                                    download="AB-Digital-Utility-compressed.jpg">

                                    Download Image

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
        file
    );

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
            "Please enter valid dimensions.";

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


    reader.readAsDataURL(
        file
    );

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
   EMI
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


    if (monthlyRate === 0) {

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


/* =========================================================
   QUICK GST
   ========================================================= */

function quickGST() {

    const amount =
        Number(
            document.getElementById(
                "quickGSTAmount"
            ).value
        );


    const rate =
        Number(
            document.getElementById(
                "quickGSTRate"
            ).value
        );


    const result =
        document.getElementById(
            "quickGSTResult"
        );


    if (
        amount <= 0 ||
        rate < 0
    ) {

        result.innerHTML =
            "Enter valid values.";

        return;

    }


    const gst =
        amount * rate / 100;


    const total =
        amount + gst;


    result.innerHTML = `

        GST: ₹${gst.toFixed(2)}

        <br>

        Total:
        <strong>
            ₹${total.toFixed(2)}
        </strong>

    `;

}


/* =========================================================
   QUICK PERCENTAGE
   ========================================================= */

function quickPercentage() {

    const value =
        Number(
            document.getElementById(
                "quickPercentValue"
            ).value
        );


    const total =
        Number(
            document.getElementById(
                "quickPercentTotal"
            ).value
        );


    const result =
        document.getElementById(
            "quickPercentResult"
        );


    if (total <= 0) {

        result.innerHTML =
            "Enter valid values.";

        return;

    }


    const percentage =
        value / total * 100;


    result.innerHTML = `

        <strong>
            ${percentage.toFixed(2)}%
        </strong>

    `;

}
