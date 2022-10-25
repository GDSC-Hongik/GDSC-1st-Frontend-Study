import {Link} from 'react-router-dom'

const Go_todo = () => { //Calendar에서 Todo로 넘어가는 Link
    return(
        <Link to={"/new"}>달력 구현 예정</Link>
    );
};

export default Go_todo;