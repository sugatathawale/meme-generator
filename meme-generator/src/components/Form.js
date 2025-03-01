import Select from 'react-select';
import React, { useState } from 'react';
export default function Form() {
    const [allMemes, setAllMemes] = useState([]);
    const [selectedOption, setSelectedOption] = useState({ label: "", value: "", key: "" });
    // const [savedMemes, setSavedMemes] = useState([]);

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        getMemes();
    }, []);

    const options = allMemes.map((meme, index) => ({
        value: meme.url + "," + meme.id + "," + meme.box_count,
        label: meme.name,
        key: index
    }));

    const [formData, setFormData] = useState({
        text0: "",
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        randomImage: "https://via.placeholder.com/400x400/282828/FFFFFF?text=Your+meme+will+appear+here",
        imgID: "",
        box: 0
    });

    function updateFormState(url, id, box_count, clearInputs) {
        setFormData(prevData => ({
            text0: "",
            text1: "",
            text2: "",
            text3: "",
            text4: "",
            randomImage: url,
            imgID: id,
            box: box_count
        }));
    }

    function getNewMeme(event) {
        setSelectedOption(null);
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        const id = allMemes[randomNumber].id;
        const box_count = allMemes[randomNumber].box_count;
        updateFormState(url, id, box_count, true);
    }

    function setMemeText() {
        const params = {
            username: 'sugat__17', // Replace with your Imgflip username
            password: 'sugat1718', // Replace with your Imgflip password
            template_id: formData.imgID,
            "boxes[0][text]": formData.text0,
            "boxes[1][text]": formData.text1,
            "boxes[2][text]": formData.text2,
            "boxes[3][text]": formData.text3,
            "boxes[4][text]": formData.text4
        };
        fetch('https://api.imgflip.com/caption_image?' + new URLSearchParams(params))
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    updateFormState(data.data.url, formData.imgID, formData.box);
                } else {
                    console.error('Failed to generate meme:', data.error_message);
                }
            });
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function btnDisable() {
        return formData.text0 + formData.text1 + formData.text2 + formData.text3 + formData.text4 === "";
    }

    let handleSelectMeme = (event) => {
        setSelectedOption(event);
        const values = event.value.split(",");
        const url = values[0];
        const id = values[1];
        const box_count = values[2];
        id && updateFormState(url, id, box_count, true);
    }

    // function saveMeme() {
    //     const newMeme = {
    //         url: formData.randomImage,
    //         texts: [formData.text0, formData.text1, formData.text2, formData.text3, formData.text4]
    //     };
    //     setSavedMemes([...savedMemes, newMeme]);
    //     // Optionally, save to local storage or backend
    // }

    return (
        <form>
            <div className="input-group-prepend p-2">
                <Select
                    options={options}
                    placeholder="Select Meme"
                    value={selectedOption === null ? null : options[selectedOption.key]}
                    className="btn-block"
                    onChange={handleSelectMeme}
                    menuPortalTarget={document.body}
                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            text: '#007bff',
                            primary25: 'brown',
                            primary: '#007bff',
                        },
                    })}
                />
                <button type="button" onClick={getNewMeme} id="newMemeBtn" className="btn btn-primary font-weight-bold float-right form-control ml-1">
                    Get random meme
                </button>
            </div>

            {formData.box >= 1 && <div className="input-group-prepend p-2">
                {formData.box >= 1 && <input type="text" className="form-control mr-1 darkInput" placeholder="Text 1" name="text0" value={formData.text0} onChange={handleInputChange} />}
                {formData.box >= 2 && <input type="text" className="form-control ml-1 darkInput" placeholder="Text 2" name="text1" value={formData.text1} onChange={handleInputChange} />}
            </div>}

            {formData.box >= 3 && <div className="input-group-prepend p-2">
                {formData.box >= 3 && <input type="text" className="form-control mr-1 darkInput" placeholder="Text 3" name="text2" value={formData.text2} onChange={handleInputChange} />}
                {formData.box >= 4 && <input type="text" className="form-control ml-1 darkInput" placeholder="Text 4" name="text3" value={formData.text3} onChange={handleInputChange} />}
            </div>}

            <div className="input-group-prepend p-2">
                {formData.box >= 5 && <input type="text" className="form-control mr-1 darkInput" placeholder="Text 5" name="text4" value={formData.text4} onChange={handleInputChange} />}
                {formData.box !== 0 && formData.imgID && <button type="button" onClick={setMemeText} id="memeTextBtn" className="btn btn-outline-success font-weight-bold form-control mr-1" disabled={btnDisable()}>
                    Put text on meme
                </button>}
            </div>

            <div className="text-center p-3">
                <div className="meme">
                    <img className="meme-image" src={formData.randomImage} alt="" />
                </div>
                {/* Save Meme Button */}
                {/* <button type="button" onClick={saveMeme} className="btn btn-warning mt-2">
                    Save Meme
                </button> */}
            </div>
        </form>
    );
}