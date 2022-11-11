import styled from 'styled-components'
import DatePicker from "react-datepicker";
import { NavLink } from "react-router-dom";

//Global
export const DateSetting = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    .react-datepicker-wrapper {
        width : 40%;
    }
    span {
        font-size : 12px;
    }
`
//Diary.js

export const DiaryTop = styled.div`
    h4{
        margin : 2px;
        font-size : 15px;
        display : inline;
    }
    .weatherIcon
    {
        margin-right : 2rem;
        float : right;
    }
    margin : 2px;
`
export  const DiaryBtnCSS = styled(NavLink)`
    width : 50%;
    border : none;
    background : rgba(255, 255, 255, 0.4);
    border-radius : 10px;
    padding : 0.5rem;
    margin : 0.5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background: pink;
    }
    color : black;
    text-decoration: none;
    cursor : pointer;
`;

export const TextArea = styled.input`
    display : flex;
    width : 90%;
    height : 250px;
    margin : 1rem auto;
    padding : 20px;
    border-radius : 10px;
    border : none;
    
`

// TodoInsert.jsx 
export const TodoInsertForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    input {
        height : 1rem;
        padding : 0.5rem;
        flex : 0.5;
        line-height: 0.5;
        border-radius: 10px;
        border : #BEB8B8 solid 1px;
        outline : none;
    }
`;


export const SubmitButton = styled.button`
    background : none;
    outline : none;
    border : none;
    background : rgba(255, 255, 255, 0.4);
    border-radius : 10px;
    padding : 0.5rem;
    margin-left : 0.5rem;
    display: flex;
    align-items: center;
    cursor : pointer;
    transition: 0.1s background ease-in;
    &:hover {
        background: pink;}
`;

//TodoList.js 
export const TodoListCSS = styled.div`
    overflow-y: auto;
    min-height: 320px;
    max-height: 513px;
`;

export const NullBox = styled.div`
        display : flex;
        align-items : center;
        justify-content: center;
        margin-top : 150px; 
`

//TodoListItem.js
export const TodoListItemCSS = styled.div`
    padding : 1rem;
    display : flex;
    align-items: center;
    .checkBox{
        cursor: pointer;
        flex : 1;
        display: flex;
        align-items: center;
        svg{
            font-size : 1.2rem;
        }
        .text{
            margin-left:0.5rem;
            flex : 1;
        }
        
        &.checked {
            svg {
                color : #5F97F8;
            }
            .text {
                color :rgb(148, 148, 148);
                text-decoration : line-through;
            }
        }
    }
    .remove {
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        cursor: pointer;
        &:hover {
            color: #ff8787;
        }
    }
`;

//TodoTemplate.js
export const TodoTemplateCSS = styled.div` 
    width : 512px;
    margin-left : auto;
    margin-right : auto;
    margin-top : 6rem;
    overflow : hidden;
`;

export const AppTitle = styled.div`
    font-weight: 500;
    color : whitesmoke;
    font-size : 1rem;
    display: flex;
    align-items: left;
    padding-left: 1rem;
    height: 1.5rem;
`; 

export const Content = styled.div`
    background: rgba(255, 255, 255, 0.4);
    border-radius: 30px;
    padding : 1rem;
`

//App.js
export const MyDatePicker = styled(DatePicker)`
    display : flex;
    align-items: center;
    justify-content : center;
    margin-top : 1.5rem;
    width : 150px;
    height : 30px;
    box-sizing : border-box;
    font-size : 12px;
    margin : 20px auto;
`;