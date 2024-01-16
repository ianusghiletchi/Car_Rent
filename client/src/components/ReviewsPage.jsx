import React from "react";
import "../scss/reviewsPage.scss";
import ReviewCard from "./BluePrints/ReviewCard.jsx";

function ReviewsPage() {
    return (
    <div>
        <div>
            <h1>What People Say About Us?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet</p>
        </div>
        <div className="reviewCards">
            <ReviewCard name="Michael Scott" avatar="https://i.pinimg.com/564x/2d/12/a3/2d12a3dda4cebf90aeec2633a33a3804.jpg" rating={5} comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet"/>
            <ReviewCard name="Jim Halpert" avatar="https://th.bing.com/th/id/R.295d60e714a0853d271e81bda8136635?rik=kj8SOcj5YZxEgg&pid=ImgRaw&r=0" rating={4} comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet" />
            <ReviewCard name="Dwight Schrute" avatar="https://img.nbc.com/sites/nbcunbc/files/metaverse_assets/1/0/6/3/3/2/dwight-500x500.jpg" rating={3} comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet" />
        </div>
    </div>
    );
}

export default ReviewsPage;