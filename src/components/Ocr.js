import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
// import './App.css';

function Ocr() {
  const worker = createWorker({
    logger: m => console.log(m),
  });
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    setOcr(text);
  };
  const [ocr, setOcr] = useState('Recognizing...');
  useEffect(() => {
    doOCR();
  });
  return (
    <div>
      <p>{ocr}</p>
    </div>
  );
}

export default Ocr;