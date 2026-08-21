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

            <inpu
