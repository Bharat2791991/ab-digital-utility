function openTool(tool) {

    var workspace = document.getElementById("workspace");
    var content = document.getElementById("toolContent");

    workspace.style.display = "block";


    /* JPG TO PDF */

    if (tool === "jpgPdf") {

    content.innerHTML = `
        <h2>PDF Tools</h2>

        <p>All essential PDF tools in one place.</p>

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
                📦 Compress PDF
            </button>

        </div>

        <div id="pdfToolWorkspace" class="pdf-workspace">

            <h3>JPG → PDF</h3>

            <p>Select multiple JPG or PNG images.</p>

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


    /* QR CODE */

    if (tool === "qr") {

        content.innerHTML = `
            <h2>QR Code Generator</h2>

            <p>Enter text or website URL.</p>

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


    /* GST */

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


    /* PERCENTAGE */

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


    /* IMAGE COMPRESSOR */

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

            <div
                id="compressResult"
                class="result">
            </div>
        `;
    }


    /* IMAGE RESIZER */

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

            <br>

            <button onclick="resizeImage()">
                Resize Image
            </button>

            <div
                id="resizeResult"
                class="result">
            </div>
        `;
    }


    /* AGE CALCULATOR */

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


    /* EMI CALCULATOR */

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

            <br>

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


/* CLOSE TOOL */

function closeTool() {

    document.getElementById("workspace").style.display = "none";

    document.getElementById("toolContent").innerHTML = "";
}


/* GST */

function calculateGST() {

    var amount =
        Number(document.getElementById("gstAmount").value);

    var rate =
        Number(document.getElementById("gstRate").value);

    var result =
        document.getElementById("gstResult");

    if (!amount || !rate) {

        result.innerHTML =
            "Please enter amount and GST rate.";

        return;
    }

    var gst = amount * rate / 100;

    var total = amount + gst;

    result.innerHTML =
        "GST: ₹" + gst.toFixed(2) +
        "<br>Total: <strong>₹" +
        total.toFixed(2) +
        "</strong>";
}


/* PERCENTAGE */

function calculatePercentage() {

    var value =
        Number(document.getElementById("percentageValue").value);

    var total =
        Number(document.getElementById("percentageTotal").value);

    var result =
        document.getElementById("percentageResult");

    if (!total) {

        result.innerHTML =
            "Please enter a valid total.";

        return;
    }

    var percentage =
        (value / total) * 100;

    result.innerHTML =
        "<strong>" +
        percentage.toFixed(2) +
        "%</strong>";
}


/* QR CODE */

function generateQR() {

    var text =
        document.getElementById("qrText").value.trim();

    var result =
        document.getElementById("qrResult");

    if (!text) {

        result.innerHTML =
            "Please enter text or URL.";

        return;
    }

    result.innerHTML = "";

    if (typeof QRCode === "undefined") {

        result.innerHTML =
            "QR library load nahi hui. Internet ON karke page refresh karo.";

        return;
    }

    new QRCode(result, {
        text: text,
        width: 220,
        height: 220
    });
}


/* JPG TO PDF */

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

    if (typeof window.jspdf === "undefined") {

        result.innerHTML =
            "PDF library load nahi hui. Internet ON karke page refresh karo.";

        return;
    }

    var jsPDF = window.jspdf.jsPDF;

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


        pdf.addImage(
            image,
            "JPEG",
            x,
            y,
            width,
            height
        );


        URL.revokeObjectURL(url);
    }


    pdf.save(
        "UtilityKaro-JPG-to-PDF.pdf"
    );


    result.innerHTML =
        "<strong>✅ PDF successfully created!</strong>";
}


/* IMAGE COMPRESSOR */

function compressImage() {

    var file =
        document.getElementById("compressFile").files[0];

    var quality =
        Number(document.getElementById("quality").value);

    var result =
        document.getElementById("compressResult");


    if (!file) {

        result.innerHTML =
            "Please select an image.";

        return;
    }


    var reader =
        new FileReader();


    reader.onload = function(event) {

        var image =
            new Image();


        image.onload = function() {

            var canvas =
                document.createElement("canvas");

            canvas.width =
                image.width;

            canvas.height =
                image.height;


            var ctx =
                canvas.getContext("2d");


            ctx.drawImage(
                image,
                0,
                0
            );


            canvas.toBlob(
                function(blob) {

                    var url =
                        URL.createObjectURL(blob);


                    var originalSize =
                        (file.size / 1024).toFixed(1);

                    var newSize =
                        (blob.size / 1024).toFixed(1);


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
                            download="UtilityKaro-compressed.jpg">
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


/* IMAGE RESIZER */

function resizeImage() {

    var file =
        document.getElementById("resizeFile").files[0];

    var width =
        Number(
            document.getElementById("resizeWidth").value
        );

    var height =
        Number(
            document.getElementById("resizeHeight").value
        );

    var result =
        document.getElementById("resizeResult");


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


    reader.onload = function(event) {

        var image =
            new Image();


        image.onload = function() {

            var canvas =
                document.createElement("canvas");

            canvas.width =
                width;

            canvas.height =
                height;


            var ctx =
                canvas.getContext("2d");


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
                        URL.createObjectURL(blob);


                    result.innerHTML = `

                        Image resized successfully.

                        <br><br>

                        <a
                            class="download"
                            href="${url}"
                            download="UtilityKaro-resized.jpg">
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


/* AGE CALCULATOR */

function calculateAge() {

    var value =
        document.getElementById("birthDate").value;

    var result =
        document.getElementById("ageResult");


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


/* EMI CALCULATOR */

function calculateEMI() {

    var principal =
        Number(
            document.getElementById("loanAmount").value
        );

    var annualRate =
        Number(
            document.getElementById("interestRate").value
        );

    var years =
        Number(
            document.getElementById("loanYears").value
        );

    var result =
        document.getElementById("emiResult");


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
