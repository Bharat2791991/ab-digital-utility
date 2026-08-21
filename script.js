/* =========================================================
   AB DIGITAL UTILITY
   Main JavaScript
   ========================================================= */


/* =========================================================
   OPEN TOOL
   ========================================================= */

function openTool(tool) {

    var workspace = document.getElementById("workspace");
    var content = document.getElementById("toolContent");

    workspace.style.display = "block";


    /* =====================================================
       PDF TOOLS
       ===================================================== */

    if (tool === "jpgPdf") {

        content.innerHTML = `

            <h2>PDF Tools</h2>

            <p>
                All essential PDF tools in one place.
            </p>

            <div class="pdf-tools-menu">

                <button onclick="openPDFTool('jpgToPdf')">
                    🖼️ JPG → PDF
                </button>

                <button onclick="openPDFTool('pdfToJpg')">
                    🖼️ PDF → JPG
                </button>

                <button onclick="openPDFTool('merge')">
                    🔗 Merge PDF
                </button>

                <button onclick="openPDFTool('split')">
                    ✂️ Split PDF
                </button>

                <button onclick="openPDFTool('remove')">
                    🗑️ Remove Pages
                </button>

                <button onclick="openPDFTool('extract')">
                    📑 Extract Pages
                </button>

                <button onclick="openPDFTool('rotate')">
                    🔄 Rotate PDF
                </button>

                <button onclick="openPDFTool('compress')">
                    📦 Optimize PDF
                </button>

            </div>

            <div id="pdfToolWorkspace">

                <h3>JPG → PDF</h3>

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

                <button onclick="convertToPDF()">
                    Convert to PDF
                </button>

                <div id="jpgResult" class="result"></div>

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

            <div id="qrResult" class="result"></div>

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

            <div id="gstResult" class="result"></div>

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

            <div id="percentageResult" class="result"></div>

        `;
    }


    /* =====================================================
       IMAGE COMPRESSOR
       ===================================================== */

    if (tool === "compress") {

        content.innerHTML = `

            <h2>Image Compressor</h2>

            <p>
                Reduce JPG image file size directly in your browser.
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

            <div id="compressResult" class="result"></div>

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

            <div id="resizeResult" class="result"></div>

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

            <div id="ageResult" class="result"></div>

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

            <div id="emiResult" class="result"></div>

        `;
    }


    workspace.scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================================================
   PDF TOOL MENU
   ========================================================= */

function openPDFTool(tool) {

    var workspace =
        document.getElementById("pdfToolWorkspace");

    if (!workspace) return;


    /* =====================================================
       JPG TO PDF
       ===================================================== */

    if (tool === "jpgToPdf") {

        workspace.innerHTML = `

            <h3>🖼️ JPG → PDF</h3>

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

            <button onclick="convertToPDF()">
                Convert to PDF
            </button>

            <div id="jpgResult" class="result"></div>

        `;

        return;
    }


    /* =====================================================
       PDF TO JPG
       ===================================================== */

    if (tool === "pdfToJpg") {

        workspace.innerHTML = `

            <h3>🖼️ PDF → JPG</h3>

            <p>
                Convert PDF pages into JPG images.
            </p>

            <input
                id="pdfToJpgFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <button onclick="pdfToJPG()">
                Convert to JPG
            </button>

            <div id="pdfToJpgResult" class="result"></div>

        `;

        return;
    }


    /* =====================================================
       MERGE PDF
       ===================================================== */

    if (tool === "merge") {

        workspace.innerHTML = `

            <h3>🔗 Merge PDF</h3>

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

            <button onclick="mergePDFs()">
                Merge PDFs
            </button>

            <div id="mergeResult" class="result"></div>

        `;

        return;
    }


    /* =====================================================
       SPLIT PDF
       ===================================================== */

    if (tool === "split") {

        workspace.innerHTML = `

            <h3>✂️ Split PDF</h3>

            <p>
                Select pages to create a new PDF.
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
                placeholder="Example: 1-3 or 1,3,5"
            >

            <br><br>

            <button onclick="splitPDF()">
                Split PDF
            </button>

            <div id="splitResult" class="result"></div>

        `;

        return;
    }


    /* =====================================================
       REMOVE PAGES
       ===================================================== */

    if (tool === "remove") {

        workspace.innerHTML = `

            <h3>🗑️ Remove PDF Pages</h3>

            <p>
                Enter page numbers to remove.
            </p>

            <input
                id="removeFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <input
                id="removePages"
                type="text"
                placeholder="Example: 2,4,6"
            >

            <br><br>

            <button onclick="removePDFPages()">
                Remove Pages
            </button>

            <div id="removeResult" class="result"></div>

        `;

        return;
    }


    /* =====================================================
       EXTRACT PAGES
       ===================================================== */

    if (tool === "extract") {

        workspace.innerHTML = `

            <h3>📑 Extract PDF Pages</h3>

            <p>
                Enter the pages you want to extract.
            </p>

            <input
                id="extractFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <input
                id="extractPages"
                type="text"
                placeholder="Example: 1,3,5"
            >

            <br><br>

            <button onclick="extractPDFPages()">
                Extract Pages
            </button>

            <div id="extractResult" class="result"></div>

        `;

        return;
    }


    /* =====================================================
       ROTATE PDF
       ===================================================== */

    if (tool === "rotate") {

        workspace.innerHTML = `

            <h3>🔄 Rotate PDF</h3>

            <p>
                Rotate every page of the PDF.
            </p>

            <input
                id="rotateFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <select id="rotation">

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

            <div id="rotateResult" class="result"></div>

        `;

        return;
    }


    /* =====================================================
       OPTIMIZE PDF
       ===================================================== */

    if (tool === "compress") {

        workspace.innerHTML = `

            <h3>📦 Optimize PDF</h3>

            <p>
                Rebuild the PDF to remove unnecessary document data.
            </p>

            <input
                id="compressPDFFile"
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <button onclick="compressPDF()">
                Optimize PDF
            </button>

            <div id="compressPDFResult" class="result"></div>

        `;

        return;
    }
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
   JPG TO PDF
   ========================================================= */

async function convertToPDF() {

    var input =
        document.getElementById("jpgFiles");

    var result =
        document.getElementById("jpgResult");

    if (!input || !result) return;

    var files = input.files;

    if (!files.length) {

        result.innerHTML =
            "Please select at least one image.";

        return;
    }

    if (typeof window.jspdf === "undefined") {

        result.innerHTML =
            "PDF library load nahi hui. Internet ON karke page refresh karo.";

        return;
    }

    var jsPDF =
        window.jspdf.jsPDF;

    var pdf =
        new jsPDF("p", "mm", "a4");


    for (var i = 0; i < files.length; i++) {

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


        await new Promise(function(resolve, reject) {

            image.onload = resolve;

            image.onerror = reject;

            image.src = url;

        });


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


        var imageType =
            file.type === "image/png"
                ? "PNG"
                : "JPEG";


        pdf.addImage(
            image,
            imageType,
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
   PDF → JPG
   ========================================================= */

async function pdfToJPG() {

    var input =
        document.getElementById("pdfToJpgFile");

    var result =
        document.getElementById("pdfToJpgResult");

    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF file.";

        return;
    }


    if (typeof pdfjsLib === "undefined") {

        result.innerHTML =
            "PDF.js library load nahi hui. Page refresh karo.";

        return;
    }


    var file =
        input.files[0];

    var arrayBuffer =
        await file.arrayBuffer();


    try {

        var pdf =
            await pdfjsLib.getDocument({
                data: arrayBuffer
            }).promise;


        result.innerHTML =
            "Converting " +
            pdf.numPages +
            " page(s)...";


        for (var pageNumber = 1;
             pageNumber <= pdf.numPages;
             pageNumber++) {


            var page =
                await pdf.getPage(pageNumber);


            var viewport =
                page.getViewport({
                    scale: 1.5
                });


            var canvas =
                document.createElement("canvas");

            var context =
                canvas.getContext("2d");


            canvas.width =
                viewport.width;

            canvas.height =
                viewport.height;


            await page.render({
                canvasContext: context,
                viewport: viewport
            }).promise;


            var blob =
                await new Promise(function(resolve) {

                    canvas.toBlob(
                        resolve,
                        "image/jpeg",
                        0.92
                    );

                });


            var url =
                URL.createObjectURL(blob);


            var link =
                document.createElement("a");

            link.href = url;

            link.download =
                "AB-Digital-Utility-page-" +
                pageNumber +
                ".jpg";

            link.textContent =
                "Download Page " +
                pageNumber +
                " JPG";


            link.className =
                "download";


            link.style.display =
                "block";


            result.appendChild(link);

        }


    } catch (error) {

        result.innerHTML =
            "Unable to convert PDF.";

        console.error(error);

    }
}


/* =========================================================
   MERGE PDFs
   ========================================================= */

async function mergePDFs() {

    var input =
        document.getElementById("mergeFiles");

    var result =
        document.getElementById("mergeResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select at least two PDF files.";

        return;
    }


    if (typeof PDFLib === "undefined") {

        result.innerHTML =
            "PDF library load nahi hui.";

        return;
    }


    if (input.files.length < 2) {

        result.innerHTML =
            "Please select at least two PDF files.";

        return;
    }


    try {

        var mergedPdf =
            await PDFLib.PDFDocument.create();


        for (
            var i = 0;
            i < input.files.length;
            i++
        ) {

            result.innerHTML =
                "Merging PDF " +
                (i + 1) +
                " of " +
                input.files.length +
                "...";


            var bytes =
                await input.files[i].arrayBuffer();


            var pdf =
                await PDFLib.PDFDocument.load(bytes);


            var pages =
                await mergedPdf.copyPages(
                    pdf,
                    pdf.getPageIndices()
                );


            pages.forEach(function(page) {

                mergedPdf.addPage(page);

            });

        }


        var output =
            await mergedPdf.save();


        downloadPDF(
            output,
            "AB-Digital-Utility-Merged.pdf"
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
   SPLIT PDF
   ========================================================= */

async function splitPDF() {

    var input =
        document.getElementById("splitFile");

    var pagesInput =
        document.getElementById("splitPages");

    var result =
        document.getElementById("splitResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    var pageNumbers =
        parsePageSelection(
            pagesInput.value
        );


    if (!pageNumbers.length) {

        result.innerHTML =
            "Enter valid pages. Example: 1-3 or 1,3,5";

        return;
    }


    try {

        var bytes =
            await input.files[0].arrayBuffer();


        var sourcePdf =
            await PDFLib.PDFDocument.load(bytes);


        var totalPages =
            sourcePdf.getPageCount();


        pageNumbers =
            pageNumbers.filter(function(page) {

                return page >= 1 &&
                       page <= totalPages;

            });


        if (!pageNumbers.length) {

            result.innerHTML =
                "Selected pages are outside the PDF.";

            return;
        }


        var newPdf =
            await PDFLib.PDFDocument.create();


        var copiedPages =
            await newPdf.copyPages(
                sourcePdf,
                pageNumbers.map(function(page) {

                    return page - 1;

                })
            );


        copiedPages.forEach(function(page) {

            newPdf.addPage(page);

        });


        var output =
            await newPdf.save();


        downloadPDF(
            output,
            "AB-Digital-Utility-Split.pdf"
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
   REMOVE PDF PAGES
   ========================================================= */

async function removePDFPages() {

    var input =
        document.getElementById("removeFile");

    var pagesInput =
        document.getElementById("removePages");

    var result =
        document.getElementById("removeResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    var removePages =
        parsePageSelection(
            pagesInput.value
        );


    try {

        var bytes =
            await input.files[0].arrayBuffer();


        var sourcePdf =
            await PDFLib.PDFDocument.load(bytes);


        var totalPages =
            sourcePdf.getPageCount();


        var removeSet =
            new Set(
                removePages.map(function(page) {

                    return page - 1;

                })
            );


        var newPdf =
            await PDFLib.PDFDocument.create();


        for (
            var i = 0;
            i < totalPages;
            i++
        ) {

            if (!removeSet.has(i)) {

                var copied =
                    await newPdf.copyPages(
                        sourcePdf,
                        [i]
                    );

                newPdf.addPage(
                    copied[0]
                );

            }

        }


        if (
            newPdf.getPageCount() === 0
        ) {

            result.innerHTML =
                "You cannot remove all pages.";

            return;
        }


        var output =
            await newPdf.save();


        downloadPDF(
            output,
            "AB-Digital-Utility-pages-removed.pdf"
        );


        result.innerHTML =
            "<strong>✅ Pages removed successfully!</strong>";

    } catch (error) {

        console.error(error);

        result.innerHTML =
            "Unable to remove pages.";

    }
}


/* =========================================================
   EXTRACT PDF PAGES
   ========================================================= */

async function extractPDFPages() {

    var input =
        document.getElementById("extractFile");

    var pagesInput =
        document.getElementById("extractPages");

    var result =
        document.getElementById("extractResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    var pageNumbers =
        parsePageSelection(
            pagesInput.value
        );


    if (!pageNumbers.length) {

        result.innerHTML =
            "Enter valid pages.";

        return;
    }


    try {

        var bytes =
            await input.files[0].arrayBuffer();


        var sourcePdf =
            await PDFLib.PDFDocument.load(bytes);


        var totalPages =
            sourcePdf.getPageCount();


        pageNumbers =
            pageNumbers.filter(function(page) {

                return page >= 1 &&
                       page <= totalPages;

            });


        var newPdf =
            await PDFLib.PDFDocument.create();


        var copiedPages =
            await newPdf.copyPages(
                sourcePdf,
                pageNumbers.map(function(page) {

                    return page - 1;

                })
            );


        copiedPages.forEach(function(page) {

            newPdf.addPage(page);

        });


        var output =
            await newPdf.save();


        downloadPDF(
            output,
            "AB-Digital-Utility-Extracted-Pages.pdf"
        );


        result.innerHTML =
            "<strong>✅ Pages extracted successfully!</strong>";

    } catch (error) {

        console.error(error);

        result.innerHTML =
            "Unable to extract pages.";

    }
}


/* =========================================================
   ROTATE PDF
   ========================================================= */

async function rotatePDF() {

    var input =
        document.getElementById("rotateFile");

    var rotation =
        Number(
            document.getElementById("rotation").value
        );

    var result =
        document.getElementById("rotateResult");


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    try {

        var bytes =
            await input.files[0].arrayBuffer();


        var pdf =
            await PDFLib.PDFDocument.load(bytes);


        var pages =
            pdf.getPages();


        pages.forEach(function(page) {

            var current =
                page.getRotation().angle;


            page.setRotation(
                PDFLib.degrees(
                    current + rotation
                )
            );

        });


        var output =
            await pdf.save();


        downloadPDF(
            output,
            "AB-Digital-Utility-Rotated.pdf"
        );


        result.innerHTML =
            "<strong>✅ PDF rotated successfully!</strong>";

    } catch (error) {

        console.error(error);

        result.innerHTML =
            "Unable to rotate PDF.";

    }
}


/* =========================================================
   OPTIMIZE PDF
   ========================================================= */

async function compressPDF() {

    var input =
        document.getElementById("compressPDFFile");

    var result =
        document.getElementById(
            "compressPDFResult"
        );


    if (!input.files.length) {

        result.innerHTML =
            "Please select a PDF.";

        return;
    }


    try {

        var bytes =
            await input.files[0].arrayBuffer();


        var pdf =
            await PDFLib.PDFDocument.load(
                bytes
            );


        var output =
            await pdf.save({
                useObjectStreams: true,
                addDefaultPage: false
            });


        var oldSize =
            (
                input.files[0].size /
                1024
            ).toFixed(1);


        var newSize =
            (
                output.length /
                1024
            ).toFixed(1);


        downloadPDF(
            output,
            "AB-Digital-Utility-Optimized.pdf"
        );


        result.innerHTML = `

            <strong>
                ✅ PDF optimized!
            </strong>

            <br><br>

            Original:
            ${oldSize} KB

            <br>

            New:
            ${newSize} KB

        `;

    } catch (error) {

        console.error(error);

        result.innerHTML =
            "Unable to optimize PDF.";

    }
}


/* =========================================================
   PAGE SELECTION PARSER
   Supports:
   1,3,5
   1-3
   1,3-5
   ========================================================= */

function parsePageSelection(value) {

    var pages = [];

    if (!value) return pages;


    var parts =
        value.split(",");


    parts.forEach(function(part) {

        part =
            part.trim();


        if (!part) return;


        if (part.indexOf("-") !== -1) {

            var range =
                part.split("-");


            var start =
                parseInt(
                    range[0],
                    10
                );


            var end =
                parseInt(
                    range[1],
                    10
                );


            if (
                !isNaN(start) &&
                !isNaN(end) &&
                start <= end
            ) {

                for (
                    var i = start;
                    i <= end;
                    i++
                ) {

                    pages.push(i);

                }

            }

        } else {

            var page =
                parseInt(
                    part,
                    10
                );


            if (!isNaN(page)) {

                pages.push(page);

            }

        }

    });


    pages =
        [...new Set(pages)];


    pages.sort(function(a, b) {

        return a - b;

    });


    return pages;
}


/* =========================================================
   DOWNLOAD PDF
   ========================================================= */

function downloadPDF(
    bytes,
    filename
) {

    var blob =
        new Blob(
            [bytes],
            {
                type: "application/pdf"
            }
        );


    var url =
        URL.createObjectURL(blob);


    var link =
        document.createElement("a");


    link.href = url;

    link.download = filename;
