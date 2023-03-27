import React,{useRef} from 'react';
import './Image.css';
import profile from '../../images/profile.png'

const Image = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };

  return (
    <div>
      <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />

      <button id='butt-file' onClick={handleClick}><img className="profile_img" src={profile} alt="avatar" /></button>
    </div>
  );
};

export default Image;