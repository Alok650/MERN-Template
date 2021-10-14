import React from 'react'
import Webcam from 'react-webcam'
import { useRef, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import upload from '../images/upload.png'
import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';
function Face() {
    const webcamRef = useRef(null);
    const [capturedPhoto, setCapturedPhoto] =useState(null);

    // useEffect(() => {
        
    //     const article = { title: 'React Hooks POST Request Example' };
    //     axios.post('update', article)
    //         .then(response => setArticleId(response.data.id));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
    

    const handleCapture = () => {
        const imgSrc = webcamRef.current.getScreenshot();
        // console.log(imgSrc);
        setCapturedPhoto(imgSrc)
    }

    const handleSave = () => {
        const base64Img = capturedPhoto;
        // const a = document.createElement("a")
        // a.href = base64Img;
        // a.download = "webcam-capture.jpeg"
        // console.log(base64Img);
        // a.click()
        
       

        // event.preventDefault()
        // console.log('handleSubmit')
        // axios
        //     .post('/file', {
        //         img: base64Img,
        //     })
        //     .then(response => {
        //         console.log('upload response: ')
        //         console.log(response)
        //         if (response.status === 200) {
        //             // update App.js state
        //             this.props.updateUser({
        //                 loggedIn: true,
        //                 username: response.data.username
        //             })
        //             // update the state to redirect to home
        //             this.setState({
        //                 redirectTo: '/'
        //             })
        //         }
        //     }).catch(error => {
        //         console.log('uploading error: ')
        //         console.log(error);
        //         alert('Couldnt upload image. Please try again')
        //     })
    }

    const worker = createWorker({
        logger: m => console.log(m),
      });
      const doOCR = async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(capturedPhoto);
        setOcr(text);
      };
      const [ocr, setOcr] = useState('Recognizing...');
      useEffect(() => {
        doOCR();
      });


    return (
        <div className="bg-gray-50 grid place-items-center h-screen w-screen">
            <div className="bg-white shadow-lg rounded">
            <h1 className="bg-gray-200 font-mono text-lg text-black p-2">Gender-authentication</h1>
            <div className="flex items-center flex-wrap">
            <div className={`bg-gray-100 m-4 p-2`}>
                <div>
                    <Webcam ref={webcamRef} screenshotFormat="image/jpeg"  className={`border h-100 w-80`} />
                </div>
                <div>
                    <button onClick={ () => handleCapture() } className="btn btn-success my-3">Capture Photo</button>
                </div>
            </div>
            <div className={`bg-gray-100 m-4 p-2`} >
                <img className={`border h-100 w-80`} src={capturedPhoto ? capturedPhoto :"https://dummyimage.com/720x540"} alt="upload image"/>
                <button onClick={() => handleSave() } className="btn btn-success my-3">Upload Photo</button>
            </div>
            </div>
            </div>
            <div>
                 <p>{ocr}</p>
            </div>
        </div>
    )
}

export default Face
