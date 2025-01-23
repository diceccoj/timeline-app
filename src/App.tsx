
import React, { useState } from 'react'
import './App.css'
import ZipFileUploader from './assets/components/ZipFileLoader'
import TimelineComp from './assets/components/TimelineComp'

interface comp {
  "img": string,
  "message" : string,
  "final_message"?: string
}

function App() {
  const [timeline, setTimeline] = useState<React.ReactElement[] | null>(null);
  const [error, setError] = useState<string>("");

  // to find file in file list
  const search_file = (files: FileList, f: string): number => {
    for (let i = 0; i < files.length; i++) {
      if (files[i].name === f) {
        return i;
      }
    }
    return -1;
  };
  
  const onFileUpload = (files: FileList | null): void => {
    setError("");
    const tl: React.ReactElement[] = [];
  
    if (files) {
      const fileIndex = search_file(files, "timeline.json");
      if (fileIndex === -1) {
        setError("Invalid upload");
        return;
      }
  
      // Get the file object for "timeline.json"
      const file = files[fileIndex];
      let jsonFile : comp[] = [];
      // Use FileReader to read the file's content
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          try {
            // Parse the JSON content
            jsonFile = JSON.parse(event.target.result as string) as comp[];
            console.log("Parsed JSON:", jsonFile);
            let dir = 'right';

            //set information
            jsonFile.forEach((e) => {
              dir = dir === 'right' ? 'left' : 'right';
              let img_url : string = "";
              if (e.img !== "FINAL") img_url = URL.createObjectURL(files[search_file(files, e.img)]);
              tl.push(e.img !== "FINAL" 
                ? <TimelineComp key={e.img} img={img_url} message={e.message} dir={dir}/>
                : <p className='mt-10'>{e.final_message}</p>);
                console.log("done")
            });
            setTimeline(tl);
  
            // Use `jsonFile` as needed, e.g., updating state
          } catch (error) {
            console.error("Error parsing JSON:", error);
            setError("Failed to parse JSON");
            return
          }
        }
      };
  
      // Read the file as text
      reader.readAsText(file);


    } else {
      setTimeline(null);
    }
  };
  return (
    <>
      <div className='flex w-[1200px] justify-center'>
        <div className='w-[65%]'>
          <h1 className='text-5xl font-bold text-center '>Put your timeline zip here:</h1>
          <ZipFileUploader onFileUpload={onFileUpload}/>
          <div className='mt-32' />
          {error === "" && (
            <p className='bg-red-500 rounded-md text-center'>{error}</p>
          )}
          <>
            {timeline}
          </>
        </div>
      </div>
    </>
  )
}

export default App
