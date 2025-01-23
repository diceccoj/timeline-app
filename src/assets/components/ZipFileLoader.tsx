

interface props{
  onFileUpload: (file: FileList) => void
}

const ZipFileUploader = ({ onFileUpload } : props) => {

  const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files? event.target.files : null;
    if (files) onFileUpload(files);

    
  };

  return (
    <div className='mt-5 ml-20'>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ marginBottom: '10px' }}
        multiple
      />
    </div>
  );
};

export default ZipFileUploader;
