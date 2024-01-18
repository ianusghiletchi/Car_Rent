import Rating from 'react-rating';
import React, { useState } from "react";
import "../../scss/BluePrints.scss/reviewCard.scss";
import { GoPin } from "react-icons/go";
import StarIcon from '@mui/icons-material/Star';

function ReviewCard(props) {

    const { name, avatar, rating, comment } = props;

    return (
        <div className="reviewCard-Main-Div shadow">
            <div className="reviewCard-Main-Grid">
                <GoPin style={{ justifySelf: "end", margin: "5px 5px 0 0", fontSize: "30px" }} />
                <div className="PNS-Div">
                    <img src={avatar} alt="User Avatar"></img>
                    <div className='PNS-NS'>
                        <span>{name}</span>                  
                        <Rating
                            emptySymbol={<StarIcon style={{ color: 'lightgray' }} />}
                            fullSymbol={<StarIcon style={{ color: 'gold'}} />}
                            initialRating={rating}
                            readonly={true}
                        />
                    </div>  
                </div>
                <p style={{ width: "90%", textAlign: "left", margin: "0 auto", color: "gray", marginBottom: "10px" }}>{comment}</p>
            </div>
        </div>
    );
}

export default ReviewCard;
