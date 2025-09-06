import { useState } from 'react';
import AnalyzeImage from './AnalyzeImage';
import PhotoUpload from './PhotoUpload';

export default function MakeCapsule() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    // 파일 선택 핸들러
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setSelectedImage(file);
          setPreviewUrl(URL.createObjectURL(file));
        }
    };

    return (
        <>
            {!selectedImage ? (
                <>
                    <PhotoUpload handleFileChange={handleFileChange}/>
                    {/* <TextInput text={text} setText={setText} /> */}
                </>
            ) : (
                <AnalyzeImage image_url={previewUrl} />
            )}
        </>
    );  
}