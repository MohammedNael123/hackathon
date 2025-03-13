import { useState } from 'react';

const QuizMaker = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);

  const simulateUpload = (file) => {
    setIsUploading(true);
    let progress = 0;
    
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 1;
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        setUploadedFile(file);
      }
      setProgress(progress);
    }, 200);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      simulateUpload(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              AI Quiz Generator
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            ارفع ملفك وسيقوم الذكاء الاصطناعي بتحويله تلقائيًا إلى كويزات تفاعلية
          </p>
        </div>

        <div className="space-y-6">
          <label className="group relative cursor-pointer">
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              disabled={isUploading}
            />
            
            <div className={`relative h-40 transition-all duration-300 ${
              isUploading ? 'opacity-75 cursor-not-allowed' : 'hover:scale-[1.02]'
            }`}>
              <div className={`absolute inset-0 flex items-center justify-center rounded-xl border-2 border-dashed ${
                uploadedFile ? 'border-green-100 bg-green-50' : 
                isUploading ? 'border-gray-200 bg-gray-100' : 
                'border-blue-100 bg-blue-50 group-hover:border-blue-300'
              }`}>
                {!isUploading && !uploadedFile && (
                  <div className="flex flex-col items-center space-y-2 p-4">
                    <div className="p-3 bg-white rounded-full shadow-lg">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-gray-700">اضغط لرفع الملف</p>
                      <p className="text-sm text-gray-500">(PDF, DOC, TXT)</p>
                    </div>
                  </div>
                )}

                {uploadedFile && (
                  <a
                    href={URL.createObjectURL(uploadedFile)}
                    download={uploadedFile.name}
                    className="flex flex-col items-center space-y-2 p-4"
                  >
                    <div className="p-3 bg-white rounded-full shadow-lg animate-bounce">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                      </svg>
                    </div>
                    <p className="font-medium text-gray-700">اضغط لتحميل الكويز</p>
                  </a>
                )}
              </div>

              {isUploading && (
                <div className="absolute inset-0 bg-white/90 rounded-xl backdrop-blur-sm">
                  <div className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
                    <span className="text-xl font-semibold text-gray-800">{progress}%</span>
                    <p className="text-sm text-gray-600">جاري معالجة الملف بالذكاء الاصطناعي...</p>
                  </div>
                </div>
              )}
            </div>
          </label>

          {uploadedFile && (
            <div className="text-center bg-gray-50 p-4 rounded-lg animate-fade-in">
              <p className="text-sm text-gray-600">تم إنشاء الكويز من الملف:</p>
              <p className="font-medium text-gray-800 truncate">{uploadedFile.name}</p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-blue-50 rounded-lg">
            <svg className="w-6 h-6 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 className="mt-2 font-medium">دقة عالية</h3>
            <p className="text-sm text-gray-600">تحويل ذكي باستخدام أحدث نماذج الذكاء الاصطناعي</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg">
            <svg className="w-6 h-6 mx-auto text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <h3 className="mt-2 font-medium">آمن تماماً</h3>
            <p className="text-sm text-gray-600">جميع الملفات محذوفة تلقائياً بعد التحويل</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <svg className="w-6 h-6 mx-auto text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <h3 className="mt-2 font-medium">سرعة فائقة</h3>
            <p className="text-sm text-gray-600">معالجة الملفات خلال ثوانٍ معدودة</p>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 flex items-center justify-center space-x-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
          <span>نحن نستخدم تقنيات التشفير لحماية بياناتك</span>
        </p>
      </div>
    </div>
  );
};

export default QuizMaker;