"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import Link from 'next/link';

const page = () => {

    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const handleRequest = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "url": url,
            "shortUrl": shorturl
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/generate", requestOptions)
            .then(response => response.text())
            .then((result) => {
                const resultObject = JSON.parse(result);
                if (resultObject.success) {
                    setGenerated(`${process.env.NEXT_PUBLIC_HOST_URL}/${shorturl}`)
                    toast.success(resultObject.message, {
                        position: "top-center",
                        autoClose: 4935,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Zoom,
                    });
                }
                else {
                    setGenerated(`${process.env.NEXT_PUBLIC_HOST_URL}/${resultObject.shortUrl}`)
                    toast.error(resultObject.message, {
                        position: "top-center",
                        autoClose: 4935,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Zoom,
                    });
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={4935}
                hideProgressBar={false}
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-h-screen p-5 bg-purple-100">
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-4 text-purple-700">Generate your short URLs</h1>
                    <input type="text" placeholder="Paste your URL here" className="mb-4 p-3 border border-purple-300 rounded-lg focus:border-purple-500 focus:ring-purple-500" value={url} onChange={(e) => seturl(e.target.value)} />
                    <input type="text" placeholder="Enter your preferred short URL text" className="mb-4 p-3 border border-purple-300 rounded-lg focus:border-purple-500 focus:ring-purple-500" value={shorturl} onChange={(e) => setshorturl(e.target.value)} />
                    <button className="p-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-200" onClick={handleRequest} > Generate </button>
                    <div className="mt-4">
                        {generated && (
                            <>
                                <p className="text-lg font-semibold mb-2">Generated Short URL:</p>
                                <Link href={generated} className="text-lg font-semibold mb-2">{generated}</Link>
                            </>
                        )}
                    </div>
                </div>
                <div className="flex justify-center items-center relative">
                    <Image src="/formImage.avif" alt="Description" fill={true} className="object-cover rounded-lg shadow-lg" />
                </div>
            </div>
        </>
    )
}

export default page
