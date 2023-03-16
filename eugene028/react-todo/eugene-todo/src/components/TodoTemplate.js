import React from 'react';
import styled from'styled-components';

import {
    AppTitle,
    Content,
} from './styledComponent';

const TodoTemplate = ({children}) => {
    return (
        <TodoTemplateCSS>
            <AppTitle>나의 기록</AppTitle>
            <Content>{children}</Content>
        </TodoTemplateCSS>
    );
};

const TodoTemplateCSS = styled.div` 
    width : 512px;
    margin-top : 8rem;
    position: relative;
`;

export default React.memo(TodoTemplate);