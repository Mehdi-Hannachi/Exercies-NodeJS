const express = require("express");
const router = express.Router();
const docx = require("docx");

const { Document, Packer, Paragraph, TextRun } = docx;

router.get("/docx", async (req, res) => {
  const doc = new Document();

  doc.addSection({
    properties: {},
    children: [
      new Paragraph({
        children: [
          new TextRun("Hello from the other side my name is Sirine"),
          new TextRun({
            text: "Sirine",
            bold: true,
            underline: true,
          }),
        ],
      }),
    ],
  });

  const b64string = await Packer.toBase64String(doc);
  res.setHeader(
    "Content-Disposition",
    "attachment ; filename = My First  document.docx"
  );
  res.send(Buffer.from(b64string, "base64"));
});

module.exports = router;
