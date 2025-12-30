import Card from "../card/Card"
import "./reasons.css"
export default function Reasons(){
    const datas=[["Enjoy on your TV","Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",<i className="bi bi-tv"></i>],["Download your shows to watch offline","Save your favourites easily and always have something to watch.",<i className="bi bi-cloud-arrow-down-fill"></i>],["Watch everywhere","Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",<i className="bi bi-telegram"></i>],["Create profiles for kids","Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",<i className="bi bi-emoji-smile-fill"></i>]]
    return(
        <div className="text-white p-3">
            <h3>More Reasons to Join</h3>
            <div className="container p-3">
                <div className="row row-cols-2">
                    {
                        datas.map((value,index)=>{
                            return(
                                <div key={index} className="col my-1 block">
                                    <Card title={value[0]} content={value[1]} icon={value[2]}></Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}