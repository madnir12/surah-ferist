import React, { useState } from 'react'
const SingleItem = ({ SurahID, SurahIntro, SurahNameE, Nazool, SurahNameU }) => {
    const [isReading, setIsReading] = useState(false)
    const [isTaaruf, setIsTaaruf] = useState(false)
    return (
        <>
            <div className='container'>
                <div className='list-header' onClick={()=>{
                    setIsTaaruf(!isTaaruf)
                    (isReading && setIsReading(false))
                }}>
                    <h1 className='english'>{SurahID}</h1>
                    <div>
                        <h4 className='english'>{SurahNameE}</h4>
                        <h5 className='english'>{Nazool}</h5>
                    </div>
                    <h1 className='arabic'>{SurahNameU}</h1>
                </div>
                <div className='taaruf' style={{display: isTaaruf ? "block" : "none"}}>
                    <h3>تعارف</h3>
                    <p className='pr'>
                        {
                            SurahIntro.substring().length > 500 ? !isReading ? `${SurahIntro.substring(0, 400)}...` : SurahIntro : SurahIntro
                        }{(
                            SurahIntro.substring().length >500 && <button style={{marginRight: isReading ? "10px" : "0"}} onClick={() => setIsReading(!isReading)}>{!isReading  ? "Read more" : "Show Less"}</button>
                        )}
                    </p>
                </div>
            </div>
            


        </>
    )
}

export default SingleItem;
