export default function PdfViewer() {
  const pdfUrl = '/Resume_SulthanYasin.pdf';
  return (
    <div className="flex justify-center p-4 bg-stone-100 rounded-xl max-w-2xl mx-auto">
      <div className="w-full h-[700px] bg-white rounded-xl shadow-md overflow-hidden border border-stone-200">
              <object
                data={pdfUrl}
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <p className="text-stone-600 text-sm mb-4">Browser Anda tidak mendukung pratinjau PDF langsung.</p>
                  <a href={pdfUrl} download className="text-blue-600 underline font-medium">
                    Klik di sini untuk mengunduh dokumen
                  </a>
                </div>
              </object>
            </div>
    </div>
  )
}
