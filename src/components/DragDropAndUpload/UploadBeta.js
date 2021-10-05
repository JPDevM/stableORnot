import React, {useState} from 'react';

function FileUploadPage(){
	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		console.log(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = async () => {
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
				console.log(data); // data.secure_url
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


		// 	.catch((error) => {
		// 		console.error('Error:', error);
		// 	});
	};

	return(
   <div>
			<input type="file" name="file" onChange={changeHandler} />
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
};

export default FileUploadPage;