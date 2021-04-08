import React, { useState } from 'react';
import { useHistory } from 'react-router';
import API from '../../../../Utils/Utils';

const UploadImage = () => {

    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const history = useHistory();

    const uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'sainath')
        setLoading(true)

        const token = sessionStorage.getItem("token");
        if (token == null) {
          history.push("/");
          return;
        }
    
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
        const res = await fetch(API.ADD_PACKAGE_IMG, 
        {
            method: 'POST',
            body: data
        }
        )
        const file = await res.json()
        setImage(file.secure_url)
        setLoading(false)
    }


    return (
        <div className="uploadimage">

            <h1>Upload Image</h1>
            <input
            type="file"
            name="file"
            placeholder="Upload Image"
            onChange={uploadImage}
            />
            {
                loading ? (
                    <h3>Loading...</h3>
                ): (
                    <img src={image} style ={ { width: '300px'}} />
                )
            }
            
        </div>
    )
}

export default UploadImage