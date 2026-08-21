/* =========================================================
   AB DIGITAL UTILITY
   COMPLETE SCRIPT
========================================================= */


/* =========================================================
   OPEN TOOL
========================================================= */

function openTool(tool) {

    var workspace = document.getElementById("workspace");
    var content = document.getElementById("toolContent");

    workspace.style.display = "block";


    /* =====================================================
       PDF TOOLS MENU
    ===================================================== */

    if (tool === "pdfTools") {

        content.innerHTML = `

            <h2>📑 PDF Tools</h2>

            <p>
                All PDF tools in one place.
            </p>

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

        scrollToWorkspace();

        return;
    }


    /* =====================================================
       JPG TO PDF
    ===================================================== */

    if (tool === "jpgPdf") {

        content.innerHTML = `

            <h2>🖼️ JPG to PDF Converter</h2>

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

        scrollToWorkspace();

        return;
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
                type="file"
                accept="application/pdf"
                id="pdfJpgFile"
            >

            <br><br>

            <button onclick="comingSoon('PDF to JPG')">
                Convert to JPG
            </button>

            <div
                id="pdfJpgResult"
                class="result">
            </div>

        `;

        scrollToWorkspace();

        return;
    }


    /* =====================================================
       WORD TO PDF
    ===================================================== */

    if (tool === "wordPdf") {

        content.innerHTML = `

            <h2>📝 Word to PDF</h2>

            <p>
                Convert Microsoft Word documents to PDF.
            </p>

            <input
                type="file"
                accept=".doc,.docx"
            >

            <br><br>

            <button onclick="comingSoon('Word to PDF')">
                Convert to PDF
            </button>

            <div class="result"></div>

        `;

        scrollToWorkspace();

        return;
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
                accept="application/pdf"
            >

            <br><br>

            <button onclick="comingSoon('PDF to Word')">
                Convert to Word
            </button>

            <div class="result"></div>

        `;

        scrollToWorkspace();

        return;
    }


    /* =====================================================
       POWERPOINT TO PDF
    ===================================================== */

    if (tool === "pptPdf") {

        content.innerHTML = `

            <h2>📊 PowerPoint to PDF</h2>

            <p>
                Convert PowerPoint presentations to PDF.
            </p>

            <input
                type="file"
                accept=".ppt,.pptx"
            >

            <br><br>

            <button onclick="comingSoon('PowerPoint to PDF')">
                Convert to PDF
            </button>

            <div class="result"></div>

        `;

        scrollToWorkspace();

        return;
    }


    /* =====================================================
       PDF TO POWERPOINT
    ===================================================== */

    if (tool === "pdfPpt") {

        content.innerHTML = `

            <h2>📄 PDF to PowerPoint</h2>

            <p>
                Convert PDF pages into PowerPoint presentations.
            </p>

            <input
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <button onclick="comingSoon('PDF to PowerPoint')">
                Convert to PowerPoint
            </button>

            <div class="result"></div>

        `;

        scrollToWorkspace();

        return;
    }


    /* =====================================================
       EXCEL TO PDF
    ===================================================== */

    if (tool === "excelPdf") {

        content.innerHTML = `

            <h2>📊 Excel to PDF</h2>

            <p>
                Convert Excel spreadsheets to PDF.
            </p>

            <input
                type="file"
                accept=".xls,.xlsx"
            >

            <br><br>

            <button onclick="comingSoon('Excel to PDF')">
                Convert to PDF
            </button>

            <div class="result"></div>

        `;

        scrollToWorkspace();

        return;
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
                accept="application/pdf"
            >

            <br><br>

            <button onclick="comingSoon('PDF to Excel')">
                Convert to Excel
            </button>

            <div class="result"></div>

        `;

        scrollToWorkspace();

        return;
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
                id="htmlContent"
                rows="10"
                placeholder="Enter HTML here..."
                style="width:100%;max-width:700px;">
            </textarea>

            <br><br>

            <button onclick="htmlToPDF()">
                Create PDF
            </button>

            <div
                id="htmlPdfResult"
                class="result">
            </div>

        `;

        scrollToWorkspace();

        return;
    }


    /* =====================================================
       MERGE PDF
    ===================================================== */

    if (tool === "mergePdf") {

        content.innerHTML = `

            <h2>🔗 Merge PDF</h2>

            <p>
                Select multiple PDF files to merge.
            </p>

            <input
                type="file"
                accept="application/pdf"
                multiple
                id="mergePdfFiles"
            >

            <br><br>

            <button onclick="comingSoon('Merge PDF')">
                Merge PDFs
            </button>

            <div
                id="mergeResult"
                class="result">
            </div>

        `;

        scrollToWorkspace();

        return;
    }


    /* =====================================================
       SPLIT PDF
    ===================================================== */

    if (tool === "splitPdf") {

        content.innerHTML = `

            <h2>✂️ Split PDF</h2>

            <p>
                Select a PDF and choose the pages to extract.
            </p>

            <input
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <input
                type="text"
                placeholder="Example: 1-3 or 1,3,5"
            >

            <br><br>

            <button onclick="comingSoon('Split PDF')">
                Split PDF
            </button>

            <div class="result"></div>

        `;

        scrollToWorkspace();

        return;
    }


    /* =====================================================
       REMOVE PDF PAGES
    ===================================================== */

    if (tool === "removePdfPages") {

        content.innerHTML = `

            <h2>🗑️ Remove PDF Pages</h2>

            <p>
                Select a PDF and enter pages to remove.
            </p>

            <input
                type="file"
                accept="application/pdf"
            >

            <br><br>

            <input
                type="text"
                placeholder="Pages to remove: 2,4,6"
            >

            <br><br>

            <button onclick="comingSoon('Remove PDF Pages')">
                Remove Pages
            </button>

            <div class="result"></div>

        `;

        scrollToWorkspace();

        return;
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

            <button onclick="generateQR()">
                Generate QR
            </button>

            <div
                id="qrResult"
                class="result">
            </div>

        `;

        scrollToWorkspace();

        return;
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

            <button onclick="calculateGST()">
                Calculate GST
            </button>

            <div
                id="gstResult"
                class="result">
            </div>

        `;

        scrollToWorkspace();

        return;
    }


    /* =====================================================
       PERCENTAGE
    ===================================================== */

    if (tool === "percentage") {

        content.innerHTML = `

            <h2>📊 Percentage Calculator</h2>

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

        scrollToWorkspace();

        return;
    }


    /* =====================================================
       IMAGE COMPRESSOR
    ===================================================== */

    if (tool === "compress") {

        content.innerHTML = `

            <h2>🗜️ Image Compressor</h2>

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

        scrollToWorkspace();

        return;
    }


    /* =====================================================
       IMAGE RESIZER
    ===================================================== */

    if (tool === "resize") {

        content.innerHTML = `

            <h2>📐 Image Resizer</h2>

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

        scrollToWorkspace();

        return;
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

            <button onclick="calculateAge()">
                Calculate Age
            </button>

            <div
                id="ageResult"
                class="result">
            </div>

        `;

        scrollToWorkspace();

        return;
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

            <button onclick="calculateEMI()">
                Calculate EMI
            </button>

            <div
                id="emiResult"
                class="result">
            </div>

        `;

        scrollToWorkspace();

        return;
    }

}


/* =========================================================
   SCROLL TO WORKSPACE
========================================================= */

function scrollToWorkspace() {

    var workspace =
        document.getElementById("workspace");

    if (workspace) {

        workspace.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================================
   CLOSE TOOL
========================================================= */

function closeTool() {

    var workspace =
        document.getElementById("workspace");

    var content =
        document.getElementById("toolContent");

    workspace.style.display = "none";

    content.innerHTML = "";

}


/* =========================================================
   COMING SOON
========================================================= */

function comingSoon(name) {

    alert(
        name +
        " conversion engine will be added in the next update."
    );

}


/* =========================================================
   JPG TO PDF
========================================================= */

async function convertToPDF() {

    var input =
        document.getElementById("jpgFiles");

    var result =
        document.getElementById("jpgResult");

    if (!input || !input.files.length) {

        result.innerHTML =
            "Please select at least one image.";

        return;
    }


    if (
        typeof window.jspdf === "undefined"
    ) {

        result.innerHTML =
            "PDF library load nahi hui. Internet ON karke page refresh karo.";

        return;
    }


    var jsPDF =
        window.jspdf.jsPDF;


    var files =
        input.files;


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


        var file =
            files[i];


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


/* =========================================================
   HTML TO PDF
========================================================= */

function htmlToPDF() {

    var html =
        document.getElementById(
            "htmlContent"
        ).value.trim();


    var result =
        document.getElementById(
            "htmlPdfResult"
        );


    if (!html) {

        result.innerHTML =
            "Please enter HTML content.";

        return;
    }


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
        new jsPDF();


    var text =
        html
            .replace(/<br\s*\/?>/gi, "\n")
            .replace(/<\/p>/gi, "\n")
            .replace(/<[^>]*>/g, "")
            .trim();


    var lines =
        pdf.splitTextToSize(
            text,
            180
        );


    pdf.text(
        lines,
        15,
        20
    );


    pdf.save(
        "AB-Digital-Utility-HTML-to-PDF.pdf"
    );


    result.innerHTML =
        "<strong>✅ PDF created successfully!</strong>";

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


    if (
        amount <= 0 ||
        rate < 0
    ) {

        result.innerHTML =
            "Please enter valid amount and GST rate.";

        return;
    }


    var gst =
        amount * rate / 100;


    var total =
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


    if (total <= 0) {

        result.innerHTML =
            "Please enter a valid total.";

        return;
    }


    var percentage =
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


    if (
        width <= 0 ||
        height <= 0
    ) {

        result.innerHTML =
            "Please enter valid width and height.";

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


    reader.readAsDataURL(file);

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
   EMI
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
        annualRate / 12 / 100;


    var emi;


    if (
        monthlyRate === 0
    ) {

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
        totalPayment -
        principal;


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


    if (
        amount <= 0 ||
        rate < 0
    ) {

        result.innerHTML =
            "Enter valid values.";

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


    if (
        total <= 0
    ) {

        result.innerHTML =
            "Enter valid values.";

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
   TOOL SEARCH
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        var searchInput =
            document.getElementById(
                "searchInput"
            );


        if (!searchInput) {
            return;
        }


        searchInput.addEventListener(
            "input",
            function() {

                var query =
                    searchInput.value
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


                        if (
                            !query ||
                            text.includes(query)
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
