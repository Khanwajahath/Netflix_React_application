import "./card.css"
export default function Card({title,content,icon}){

    return(
        <div className="card rounded text-white p-3">
            <h4>{title}</h4>
            <p>{content}</p>
            <div className="icon-b">
                {icon}
            </div>
        </div>
        
    )
}