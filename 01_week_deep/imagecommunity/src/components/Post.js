import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import {Grid, Image, Text} from "../elements"

const Post = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape="circle" src={props.src} />
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>

                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>

                <Grid>
                    <Image shape="rectangle" src={props.src} />
                </Grid>

                <Grid padding="16px">
                    <Text bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Post.defaultProps = {
    user_info: {
        user_name: "Kyoo",
        user_profile: "../IMG_0985.JPG",
    },
    image_url: "https://www.ikea.com/kr/en/images/products/djungelskog-soft-toy-lion__0877742_pe662341_s5.jpg?f=s",
    contents: "고양이네요!",
    comment_cnt: 10,
    insert_dt: "2021-09-30 17:32:00",
};


export default Post