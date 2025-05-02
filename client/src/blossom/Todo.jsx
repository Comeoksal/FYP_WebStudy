import React from "react";
import {
    Layout,
    MainTextWrapper,
    MainText,
    MainAddWrapper,
    Line,
    MainAdd,

} from "./style";
const Todo = () => {

    return (
        <Layout>
            <MainTextWrapper>
                <MainText>UMC Study  Plan</MainText>
            </MainTextWrapper>
            <MainAddWrapper>
                <Line />
                <MainAdd placeholder=" 스터디 계획을 작성해보세요!" />
            </MainAddWrapper>
        </Layout>
    )
}

export default Todo;