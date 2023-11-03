import React from 'react'

const Card = (props) => {
    let cardStyle = {
        width: '18rem'
    }
    return (
        <div className="card" style={{ cardStyle }}>
            <img src={props.cardImage} class="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title text-center">{props.cardTitle}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="text-center card-body">
                    <button type="button" class="btn btn-primary">Find Out More!</button>
                </div>
            </div>
        </div>
    )
}

export default Card