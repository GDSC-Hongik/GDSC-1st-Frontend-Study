import React from 'react';

import {
    TodoTemplateCSS,
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

export default React.memo(TodoTemplate);