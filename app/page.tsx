"use client"

import { useState } from "react"

export default function Home() {
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [link, setLink] = useState("")

  const generateLink = () => {
    const encoded = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/${phone}?text=${encoded}`
    setLink(whatsappLink)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">
        <h1 className="text-2xl font-bold mb-4 text-center">
          CCT WhatsApp Generator
        </h1>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Phone Number (260...)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          className="border p-2 w-full mb-3"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={generateLink}
          className="bg-green-600 text-white w-full p-2 rounded-lg"
        >
          Generate WhatsApp Link
        </button>

        {link && (
          <div className="mt-4">
            <p className="text-sm">Your Link:</p>
            <a
              href={link}
              target="_blank"
              className="text-green-600 break-all"
            >
              {link}
            </a>
          </div>
        )}
      </div>
    </main>
  )
}
