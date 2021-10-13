import React from 'react'
import Webcam from 'react-webcam'
import { useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import upload from '../images/upload.png'
function Face() {
    const webcamRef = useRef(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);

    const handleCapture = () => {
        const imgSrc = webcamRef.current.getScreenshot();
        setCapturedPhoto(imgSrc)
    }

    const handleSave = () => {
        const base64Img = capturedPhoto;
        const a = document.createElement("a")
        a.href = base64Img;
        a.download = "webcam-capture.jpeg"
        a.click()
    }
    return (
        <div className="bg-gray-50 grid place-items-center h-screen w-screen">
            <div className="bg-white shadow-lg rounded">
            <h1 className="bg-gray-200 font-mono text-lg text-black p-2">Face-authentication</h1>
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
        </div>
    )
}

export default Face
