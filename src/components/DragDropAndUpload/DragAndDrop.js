import React, { useState } from 'react';

export default function FileUploaderDND(props) {
  const [ inZone, setInZone] = useState(false)  ;

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setInZone(true);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setInZone(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setInZone(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let files = [...event.dataTransfer.files];
    if (files[0]) {
      files.forEach(file => {
        uploadToCloudinary(file);
      });
      files = [];
    }
    setInZone(false);
  };

  const uploadToCloudinary = async (selectedFile) => {
		const formData = new FormData();
		formData.append('upload_preset', 'ml_default'); //presets de cloud
		formData.append('file', selectedFile);
		
		try {
			const res = await fetch("https://api.cloudinary.com/v1_1/dhsm3hy5s/image/upload", {
				method: 'POST',
				body: formData,
			});
			if (res.ok) {
				const data = await res.json();
				console.log(data.secure_url);
				/*firebase
					.firestore()
					.collection('employees')
					.doc(document)
					.update({
						avatar: data.secure_url, //
					});*/
			}
		} finally {
			//setUploading(false);
		}
  }

  return (
    <div
      onDrop={(event) => handleDrop(event)}
      onDragOver={(event) => handleDragOver(event)}
      onDragEnter={(event) => handleDragEnter(event)}
      onDragLeave={(event) => handleDragLeave(event)}
    >
        {props.children}
        {inZone &&
        <div className="w-1/2 m-auto mt-10 text-justify p-2 bg-red-500	rounded">
          <p>You are in the Zone</p>
        </div>
        }
    </div>
  );
}