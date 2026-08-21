/* =========================================================
   AB DIGITAL UTILITY
   COMPLETE SCRIPT
   ========================================================= */


/* =========================================================
   LIBRARY LOADER
   ========================================================= */

function loadScript(url) {

    return new Promise(function(resolve, reject) {

        var existing = document.querySelector(
            'script[src="' + url + '"]'
        );

        if (existing) {
            resolve();
            return;
        }

        var script = document.createElement("script");

        script.src = url;

        script.onload = resolve;

        script.onerror = reject;

        document.head.appendChild(script);

    });

}


/* =========================================================
   OPEN TOOL
   ========================================================= */

function openTool(tool) {

    var workspace =
        document.getElementById("workspace");

    var content =
        document.getElementById("toolContent");

    workspace.style.display = "block";


    /* ================= JPG TO PDF ================= */

   if (tool === "pdfTools") {

    content.innerHTML = `
    
        <h2>📑 PDF Tools</h2>

        <p>All PDF tools in one place.</p>

        <div class="pdf-tools-menu">

            <button onclick="openTool('jpgPdf')">
                🖼️ JPG → PDF
            </button>

            <button onclick="openTool('pdfJpg')">
                📄 PDF → JPG
            </button>

            <button onclick="openTool('wordPdf')">
                📝 Word → PDF
            </button>

            <button onclick="openTool('pdfWord')">
                📄 PDF → Word
            </button>

            <button onclick="openTool('pptPdf')">
                📊 PowerPoint → PDF
            </button>

            <button onclick="openTool('pdfPpt')">
                📄 PDF → PowerPoint
            </button>

            <button onclick="openTool('excelPdf')">
                📊 Excel → PDF
            </button>

            <button onclick="openTool('pdfExcel')">
                📄 PDF → Excel
            </button>

            <button onclick="openTool('htmlPdf')">
                🌐 HTML → PDF
            </button>

            <button onclick="openTool('mergePdf')">
                🔗 Merge PDF
            </button>

            <button onclick="openTool('splitPdf')">
                ✂️ Split PDF
            </button>

            <button onclick="openTool('removePdfPages')">
                🗑️ Remove PDF Pages
            </button>

        </div>
    `;

    workspace.scrollIntoView({
        behavior: "smooth"
    });

    return;
}


    /* ================= QR ================= */

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

            <div id="qrResult" class="result"></div>

        `;
    }


    /* ================= GST ================= */

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

            <div id="gstResult" class="result"></div>

        `;
    }


    /* ================= PERCENTAGE ================= */

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

            <div id="percentageResult" class="result"></div>

        `;
    }


    /* ================= IMAGE COMPRESSOR ================= */

    if (tool === "compress") {

        content.innerHTML = `

            <h2>Image Compressor</h2>

            <p>
                Reduce image file size directly in your browser.
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


    /* ================= IMAGE RESIZER ================= */

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


    /* ================= AGE ================= */

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


    /* ================= EMI ================= */

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


    workspace.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   CLOSE TOOL
   ========================================================= */

function closeTool() {

    document.getElementById(
        "workspace"
    ).style.display = "none";

    document.getElementById(
        "toolContent"
    ).innerHTML = "";

}


/* =========================================================
   PDF LIBRARY
   ========================================================= */

async function loadPDFLib() {

    if (window.PDFLib) {
        return window.PDFLib;
    }

    await loadScript(
        "https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"
    );

    return window.PDFLib;
}


/* =========================================================
   PDF.JS LIBRARY
   ========================================================= */

async function loadPDFJS() {

    if (window.pdfjsLib) {
        return window.pdfjsLib;
    }

    await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"
    );

    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

    return window.pdfjsLib;
}


/* =========================================================
   JPG TO PDF SCREEN
   ========================================================= */

function showJPGToPDF() {

    document.getElementById(
        "pdfToolArea"
    ).innerHTML = `

        <hr>

        <h3>JPG to PDF</h3>

        <p>
            Select multiple JPG or PNG images.
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
   JPG TO PDF
   ========================================================= */

async function convertToPDF() {

    var input =
        document.getElementById("jpgFiles");

    var result =
        document.getElementById("jpgResult");

    var files = input.files;

    if (!files.length) {

        result.innerHTML =
            "Please select at least one image.";

        return;
    }


    if (
        typeof window.jspdf === "undefined"
    ) {

        result.innerHTML =
            "PDF library load nahi hui. Internet ON karke refresh karo.";

        return;
    }


    var jsPDF =
        window.jspdf.jsPDF;

    var pdf =
        new jsPDF("p", "mm", "a4");


    for (
        var i = 0;
        i < files.length;
        i++
    ) {

        result.innerHTML =
            "Converting image " +
            (i + 1) +
            " of " +
            files.length +
            "...";


        var file = files[i];

        var url =
            URL.createObjectURL(file);

        var image =
            new Image();


        await new Promise(
            function(resolve, reject) {

                image.onload = resolve;

                image.onerror = reject;

                image.src = url;

            }
        );


        if (i > 0) {
            pdf.addPage();
        }


        var pageWidth = 210;

        var pageHeight = 297;

        var margin = 10;

        var maxWidth =
            pageWidth - margin * 2;

        var maxHeight =
            pageHeight - margin * 2;


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


/* =========================================================
   PDF TO JPG SCREEN
   ========================================================= */

function showPDFToJPG() {

    document.getElementById(
        "pdfToolArea"
    ).innerHTML = `

        <hr>

        <h3>PDF to JPG</h3>

        <input
            id="pdfToJpgFile"
            type="file"
            accept="application/pdf"
        >

        <br><br>

        <label>
            Page Number
        </label>

        <input
            id="pdfPageNumber"
            type="number"
            min="1"
            value="1"
        >

        <br><br>

        <button onclick="convertPDFToJPG()">
            Convert Page to JPG
        </button>

        <div
            id="pdfJpgResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   PDF TO JPG
   ========================================================= */

async function convertPDFToJPG() {

    var input =
        document.getElementById(
            "pdfToJpgFile"
        );

    var result =
        document.getElementById(
            "pdfJpgResult"
        );

    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    try {

        result.innerHTML =
            "Loading PDF...";


        var pdfjs =
            await loadPDFJS();


        var file =
            input.files[0];

        var buffer =
            await file.arrayBuffer();


        var pdf =
            await pdfjs.getDocument({
                data: buffer
            }).promise;


        var pageNumber =
            Number(
                document.getElementById(
                    "pdfPageNumber"
                ).value
            );


        if (
            pageNumber < 1 ||
            pageNumber > pdf.numPages
        ) {

            result.innerHTML =
                "Invalid page number.";

            return;
        }


        var page =
            await pdf.getPage(
                pageNumber
            );


        var viewport =
            page.getViewport({
                scale: 2
            });


        var canvas =
            document.createElement(
                "canvas"
            );


        canvas.width =
            viewport.width;

        canvas.height =
            viewport.height;


        var context =
            canvas.getContext("2d");


        await page.render({
            canvasContext: context,
            viewport: viewport
        }).promise;


        var url =
            canvas.toDataURL(
                "image/jpeg",
                0.92
            );


        result.innerHTML = `

            <strong>
                ✅ Page converted successfully
            </strong>

            <br><br>

            <img
                src="${url}"
                style="
                    max-width:100%;
                    border-radius:8px;
                "
            >

            <br><br>

            <a
                class="download"
                href="${url}"
                download="AB-Digital-Utility-page-${pageNumber}.jpg">

                Download JPG

            </a>

        `;

    } catch (error) {

        console.error(error);

        result.innerHTML =
            "Unable to convert PDF page.";

    }

}


/* =========================================================
   MERGE PDF SCREEN
   ========================================================= */

function showMergePDF() {

    document.getElementById(
        "pdfToolArea"
    ).innerHTML = `

        <hr>

        <h3>Merge PDF</h3>

        <p>
            Select two or more PDF files.
        </p>

        <input
            id="mergePDFFiles"
            type="file"
            accept="application/pdf"
            multiple
        >

        <br><br>

        <button onclick="mergePDF()">
            Merge PDF
        </button>

        <div
            id="mergeResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   MERGE PDF
   ========================================================= */

async function mergePDF() {

    var input =
        document.getElementById(
            "mergePDFFiles"
        );

    var result =
        document.getElementById(
            "mergeResult"
        );


    if (input.files.length < 2) {

        result.innerHTML =
            "Please select at least 2 PDF files.";

        return;
    }


    try {

        result.innerHTML =
            "Merging PDFs...";


        var PDFLib =
            await loadPDFLib();

        var PDFDocument =
            PDFLib.PDFDocument;


        var merged =
            await PDFDocument.create();


        for (
            var i = 0;
            i < input.files.length;
            i++
        ) {

            var bytes =
                await input.files[i]
                    .arrayBuffer();


            var pdf =
                await PDFDocument.load(
                    bytes
                );


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

    } catch (error) {

        console.error(error);

        result.innerHTML =
            "Unable to merge PDFs.";

    }

}


/* =========================================================
   SPLIT PDF SCREEN
   ========================================================= */

function showSplitPDF() {

    document.getElementById(
        "pdfToolArea"
    ).innerHTML = `

        <hr>

        <h3>Split PDF</h3>

        <p>
            Extract selected pages from a PDF.
        </p>

        <input
            id="splitPDFFile"
            type="file"
            accept="application/pdf"
        >

        <br><br>

        <input
            id="splitPages"
            type="text"
            placeholder="Pages e.g. 1,3,5-7"
        >

        <br><br>

        <button onclick="splitPDF()">
            Split PDF
        </button>

        <div
            id="splitResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   PAGE STRING PARSER
   ========================================================= */

function parsePages(value, max) {

    var pages = [];

    var parts =
        value.split(",");


    parts.forEach(
        function(part) {

            part = part.trim();


            if (!part) {
                return;
            }


            if (part.indexOf("-") !== -1) {

                var range =
                    part.split("-");


                var start =
                    Number(range[0]);

                var end =
                    Number(range[1]);


                if (
                    !Number.isInteger(start) ||
                    !Number.isInteger(end)
                ) {
                    return;
                }


                if (start > end) {

                    var temp = start;

                    start = end;

                    end = temp;

                }


                for (
                    var i = start;
                    i <= end;
                    i++
                ) {

                    if (
                        i >= 1 &&
                        i <= max &&
                        pages.indexOf(i) === -1
                    ) {

                        pages.push(i);

                    }

                }

            } else {

                var page =
                    Number(part);


                if (
                    Number.isInteger(page) &&
                    page >= 1 &&
                    page <= max &&
                    pages.indexOf(page) === -1
                ) {

                    pages.push(page);

                }

            }

        }
    );


    return pages.sort(
        function(a, b) {
            return a - b;
        }
    );

}


/* =========================================================
   SPLIT PDF
   ========================================================= */

async function splitPDF() {

    var input =
        document.getElementById(
            "splitPDFFile"
        );

    var result =
        document.getElementById(
            "splitResult"
        );


    var pageText =
        document.getElementById(
            "splitPages"
        ).value;


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    if (!pageText.trim()) {

        result.innerHTML =
            "Enter page numbers.";

        return;
    }


    try {

        result.innerHTML =
            "Splitting PDF...";


        var PDFLib =
            await loadPDFLib();


        var PDFDocument =
            PDFLib.PDFDocument;


        var bytes =
            await input.files[0]
                .arrayBuffer();


        var source =
            await PDFDocument.load(
                bytes
            );


        var pages =
            parsePages(
                pageText,
                source.getPageCount()
            );


        if (!pages.length) {

            result.innerHTML =
                "No valid pages found.";

            return;
        }


        var newPDF =
            await PDFDocument.create();


        var copied =
            await newPDF.copyPages(
                source,
                pages.map(
                    function(page) {
                        return page - 1;
                    }
                )
            );


        copied.forEach(
            function(page) {

                newPDF.addPage(page);

            }
        );


        var output =
            await newPDF.save();


        downloadBlob(
            output,
            "AB-Digital-Utility-Split.pdf",
            "application/pdf"
        );


        result.innerHTML =
            "<strong>✅ PDF split successfully!</strong>";

    } catch (error) {

        console.error(error);

        result.innerHTML =
            "Unable to split PDF.";

    }

}


/* =========================================================
   REMOVE PDF PAGES SCREEN
   ========================================================= */

function showRemovePDFPages() {

    document.getElementById(
        "pdfToolArea"
    ).innerHTML = `

        <hr>

        <h3>Remove PDF Pages</h3>

        <p>
            Select pages you want to remove.
        </p>

        <input
            id="removePDFFile"
            type="file"
            accept="application/pdf"
        >

        <br><br>

        <input
            id="removePages"
            type="text"
            placeholder="Pages e.g. 2,4,6-8"
        >

        <br><br>

        <button onclick="removePDFPages()">
            Remove Pages
        </button>

        <div
            id="removeResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   REMOVE PDF PAGES
   ========================================================= */

async function removePDFPages() {

    var input =
        document.getElementById(
            "removePDFFile"
        );

    var result =
        document.getElementById(
            "removeResult"
        );


    var pageText =
        document.getElementById(
            "removePages"
        ).value;


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    if (!pageText.trim()) {

        result.innerHTML =
            "Enter pages to remove.";

        return;
    }


    try {

        result.innerHTML =
            "Removing pages...";


        var PDFLib =
            await loadPDFLib();


        var PDFDocument =
            PDFLib.PDFDocument;


        var bytes =
            await input.files[0]
                .arrayBuffer();


        var source =
            await PDFDocument.load(
                bytes
            );


        var removePages =
            parsePages(
                pageText,
                source.getPageCount()
            );


        var removeSet =
            new Set(removePages);


        var newPDF =
            await PDFDocument.create();


        var keepIndices = [];


        for (
            var i = 0;
            i < source.getPageCount();
            i++
        ) {

            if (
                !removeSet.has(i + 1)
            ) {

                keepIndices.push(i);

            }

        }


        if (!keepIndices.length) {

            result.innerHTML =
                "You cannot remove all pages.";

            return;
        }


        var copied =
            await newPDF.copyPages(
                source,
                keepIndices
            );


        copied.forEach(
            function(page) {

                newPDF.addPage(page);

            }
        );


        var output =
            await newPDF.save();


        downloadBlob(
            output,
            "AB-Digital-Utility-Pages-Removed.pdf",
            "application/pdf"
        );


        result.innerHTML =
            "<strong>✅ Pages removed successfully!</strong>";

    } catch (error) {

        console.error(error);

        result.innerHTML =
            "Unable to remove PDF pages.";

    }

}


/* =========================================================
   HTML TO PDF SCREEN
   ========================================================= */

function showHTMLToPDF() {

    document.getElementById(
        "pdfToolArea"
    ).innerHTML = `

        <hr>

        <h3>HTML to PDF</h3>

        <p>
            Enter HTML/text content below.
        </p>

        <textarea
            id="htmlPDFContent"
            rows="10"
            style="width:100%;"
            placeholder="Enter HTML content here...">
        </textarea>

        <br><br>

        <button onclick="convertHTMLToPDF()">
            Convert HTML to PDF
        </button>

        <div
            id="htmlPDFResult"
            class="result">
        </div>

    `;

}


/* =========================================================
   HTML TO PDF
   ========================================================= */

async function convertHTMLToPDF() {

    var html =
        document.getElementById(
            "htmlPDFContent"
        ).value;


    var result =
        document.getElementById(
            "htmlPDFResult"
        );


    if (!html.trim()) {

        result.innerHTML =
            "Please enter HTML content.";

        return;
    }


    try {

        result.innerHTML =
            "Creating PDF...";


        if (
            typeof window.jspdf === "undefined"
        ) {

            result.innerHTML =
                "PDF library load nahi hui.";

            return;
        }


        var jsPDF =
            window.jspdf.jsPDF;


        var pdf =
            new jsPDF(
                "p",
                "mm",
                "a4"
            );


        var container =
            document.createElement(
                "div"
            );


        container.style.position =
            "absolute";

        container.style.left =
            "-99999px";

        container.style.width =
            "180mm";

        container.style.background =
            "white";

        container.style.padding =
            "10mm";

        container.innerHTML =
            html;


        document.body.appendChild(
            container
        );


        await pdf.html(
            container,
            {
                margin: 10,

                autoPaging: "text",

                html2canvas: {
                    scale: 1
                },

                callback: function(doc) {

                    doc.save(
                        "AB-Digital-Utility-HTML-to-PDF.pdf"
                    );

                }
            }
        );


        document.body.removeChild(
            container
        );


        result.innerHTML =
            "<strong>✅ HTML converted to PDF!</strong>";

    } catch (error) {

        console.error(error);

        result.innerHTML =
            "Unable to convert HTML to PDF.";

    }

}


/* =========================================================
   COMING SOON
   ========================================================= */

function showComingSoon(name) {

    document.getElementById(
        "pdfToolArea"
    ).innerHTML = `

        <hr>

        <h3>
            ${name}
        </h3>

        <div class="result">

            🚧 <strong>Coming Soon</strong>

            <br><br>

            ${name} ke liye proper document
            conversion engine next version me add
            kiya jayega.

        </div>

    `;

}


/* =========================================================
   DOWNLOAD BLOB
   ========================================================= */

function downloadBlob(
    data,
    filename,
    type
) {

    var blob =
        new Blob(
            [data],
            { type: type }
        );


    var url =
        URL.createObjectURL(
            blob
        );


    var link =
        document.createElement(
            "a"
        );


    link.href = url;

    link.download = filename;

    document.body.appendChild(
        link
    );

    link.click();

    document.body.removeChild(
        link
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
   GST
   ========================================================= */

function calculateGST() {

    var amount =
        Number(
            document.getElementById(
                "gstAmount"
            ).value
        );


    var rate =
        Number(
            document.getElementById(
                "gstRate"
            ).value
        );


    var result =
        document.getElementById(
            "gstResult"
        );


    if (!amount || !rate) {

        result.innerHTML =
            "Please enter amount and GST rate.";

        return;
    }


    var gst =
        amount * rate / 100;


    var total =
        amount + gst;


    result.innerHTML = `

        GST:
        ₹${gst.toFixed(2)}

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
            document.getElementById(
                "percentageValue"
            ).value
        );


    var total =
        Number(
            document.getElementById(
                "percentageTotal"
            ).value
        );


    var result =
        document.getElementById(
            "percentageResult"
        );


    if (!total) {

        result.innerHTML =
            "Please enter a valid total.";

        return;
    }


    var percentage =
        value / total * 100;


    result.innerHTML = `

        <strong>
            ${percentage.toFixed(2)}%
        </strong>

    `;

}


/* =========================================================
   QR CODE
   ========================================================= */

function generateQR() {

    var text =
        document.getElementById(
            "qrText"
        ).value.trim();


    var result =
        document.getElementById(
            "qrResult"
        );


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
            "QR library load nahi hui. Internet ON karke refresh karo.";

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
   IMAGE COMPRESSOR
   ========================================================= */

function compressImage() {

    var file =
        document.getElementById(
            "compressFile"
        ).files[0];


    var quality =
        Number(
            document.getElementById(
                "quality"
            ).value
        );


    var result =
        document.getElementById(
            "compressResult"
        );


    if (!file) {

        result.innerHTML =
            "Please select an image.";

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
                        image.width;

                    canvas.height =
                        image.height;


                    var ctx =
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

                            var url =
                                URL.createObjectURL(
                                    blob
                                );


                            var originalSize =
                                (
                                    file.size /
                                    1024
                                ).toFixed(1);


                            var newSize =
                                (
                                    blob.size /
                                    1024
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


    reader.readAsDataURL(
        file
    );

}


/* =========================================================
   IMAGE RESIZER
   ========================================================= */

function resizeImage() {

    var file =
        document.getElementById(
            "resizeFile"
        ).files[0];


    var width =
        Number(
            document.getElementById(
                "resizeWidth"
            ).value
        );


    var height =
        Number(
            document.getElementById(
                "resizeHeight"
            ).value
        );


    var result =
        document.getElementById(
            "resizeResult"
        );


    if (!file) {

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


                    var ctx =
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

                            var url =
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

    var value =
        document.getElementById(
            "birthDate"
        ).value;


    var result =
        document.getElementById(
            "ageResult"
        );


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
            "Date of birth cannot be in the future.";

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


        var previousMonth =
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

    var principal =
        Number(
            document.getElementById(
                "loanAmount"
            ).value
        );


    var annualRate =
        Number(
            document.getElementById(
                "interestRate"
            ).value
        );


    var years =
        Number(
            document.getElementById(
                "loanYears"
            ).value
        );


    var result =
        document.getElementById(
            "emiResult"
        );


    if (!principal || !years) {

        result.innerHTML =
            "Please enter valid loan details.";

        return;
    }


    if (annualRate < 0) {

        result.innerHTML =
            "Interest rate cannot be negative.";

        return;
    }


    var months =
        years * 12;


    var monthlyRate =
        annualRate / 12 / 100;


    var emi;


    if (monthlyRate === 0) {

        emi =
            principal / months;

    } else {

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


    var totalPayment =
        emi * months;


    var totalInterest =
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

    var amount =
        Number(
            document.getElementById(
                "quickGSTAmount"
            ).value
        );


    var rate =
        Number(
            document.getElementById(
                "quickGSTRate"
            ).value
        );


    var result =
        document.getElementById(
            "quickGSTResult"
        );


    if (!amount || !rate) {

        result.innerHTML =
            "Enter amount and GST rate.";

        return;
    }


    var gst =
        amount * rate / 100;


    var total =
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

    var value =
        Number(
            document.getElementById(
                "quickPercentValue"
            ).value
        );


    var total =
        Number(
            document.getElementById(
                "quickPercentTotal"
            ).value
        );


    var result =
        document.getElementById(
            "quickPercentResult"
        );


    if (!total) {

        result.innerHTML =
            "Enter a valid total.";

        return;
    }


    var percentage =
        value / total * 100;


    result.innerHTML = `

        <strong>
            ${percentage.toFixed(2)}%
        </strong>

    `;

}


/* =========================================================
   SEARCH
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        var search =
            document.getElementById(
                "searchInput"
            );


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
                                    card.getAttribute(
                                        "data-search"
                                    ) || ""
                                )
                            ).toLowerCase();


                        if (
                            !query ||
                            text.indexOf(query) !== -1
                        ) {

                            card.style.display =
                                "";

                        } else {

                            card.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    }
);
