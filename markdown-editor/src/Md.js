import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import './Md.css';

function Md() {

    const [markdown, setMarkdown] = useState("");

    return (
        <>
            <div className="container">
                <h1 className='heading'>React Markdown Editor</h1>
                <div className="flex">
                    {/* <div className="input-field"> */}
                    <textarea type="text" value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
                    {/* </div> */}
                    <div className="input-field">
                        <ReactMarkdown>{markdown}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Md;