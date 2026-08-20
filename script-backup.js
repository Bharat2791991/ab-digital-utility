function openTool(tool){
  
    var workspace = document.getElementById("workspace");
    var content = document.getElementById("toolContent");

    workspace.style.display = "block";


    if (tool === "jpgPdf") {

        content.innerHTML = `
            <h2>JPG to PDF Converter</h2>

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
        `;
    }


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


    workspace.scrollIntoView({
        behavior: "smooth"
    });
}


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

    if (
        typeof window.jspdf === "undefined"
    ) {

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