import { useRecoilState } from 'recoil';
import { diaryState, diaryId } from '../stores/Atom'

const useDiary = () => {
    const [diary, setDiary] = useRecoilState(diaryState);
    const [id, setId] = useRecoilState(diaryId);

  const diaryInsert = (text, day, month, year) => {
      const newdiary ={
        id : id,
        text : text,
        day : day,
        month : month,
        year : year 
      };
      setId(id + 1);
      setDiary(diary => diary.concat(newdiary));
      localStorage.setItem("DIARY", JSON.stringify([...diary, newdiary]));
    }

const diaryRemove = id => {
      const deletedItem = diary.filter(diary => diary.id !== id);
      setDiary(deletedItem);
      localStorage.setItem("DIARY",JSON.stringify(deletedItem));
  }

  return { diaryInsert, diaryRemove }
}

export default useDiary;