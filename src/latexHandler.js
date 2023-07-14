import JSZip from "jszip";

export default function resumeToLatex(resume) {
    const zip = new JSZip();

    Object.keys(resume).forEach((key) => {
        coreCategoryToLatex(resume[key], zip);
    })
}

const coreCategoryToLatex = (category, zip) => {
    category.forEach((item) => coreItemToLatex(item, zip));
}

const coreItemToLatex = (item, zip) => {
    zip.file("Hello.tex", "\\documentclass{article}" +
        "\n\\usepackage{subfiles}" +
        "\n\\title{" + item.headerLeft + "}" +
        "\n\\author{Overleaf}" +
        "\n\\date{June 2023}" +
        "\n\\begin{document}" +
        "\n\\maketitle" +
        "\n\\section{Introduction}" +
        "\n\\subsection{How to add Citations and a References List}" +
        "\n\\Citation example: \\cite{greenwade93}" +
        "\n\\bibliographystyle{alpha}" +
        "\n\\bibliography{sample}" +
        "\n\\end{document}");
    zip.generateAsync({ type: "base64" }).then((content) => {
        document.getElementById('latexValue').value = "data:application/zip;base64," + content;
        document.getElementById('latexForm').submit();
    });
}