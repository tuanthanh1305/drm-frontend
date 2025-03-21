import React, { useEffect, useRef, useState } from 'react';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import mammoth from 'mammoth';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';


const ReporterPage: React.FC = () => {
  const [content, setContent] = useState('');
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    const quillInstance = new Quill('#editor', {
      theme: 'snow'
    });

    quillRef.current = quillInstance;

    fetch('/BienBanMau1.docx')
      .then(response => response.arrayBuffer())
      .then(buffer => mammoth.convertToHtml({ arrayBuffer: buffer }))
      .then(result => {
        quillInstance.clipboard.dangerouslyPasteHTML(result.value);
        setContent(result.value);
      });

    quillInstance.on('text-change', () => {
      setContent(quillInstance.root.innerHTML);
    });

  }, []);

  const handleExport = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun(content),
              ],
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, 'document.docx');
  };

  return (
    <div className='text-right'>
      <button onClick={handleExport} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Export to Word</button>
      <div className='mt-3'>
        <div id="editor" style={{ height: '400px' }}></div>
      </div>
      <br />
    </div>
  );
};

export default ReporterPage;
