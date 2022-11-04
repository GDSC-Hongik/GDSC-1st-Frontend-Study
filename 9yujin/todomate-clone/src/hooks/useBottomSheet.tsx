import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { ITodoItem } from '../interfaces/ITodoItem';
import { bottomSheetState } from '../stores/bottomSheet';

function useBottomSheet(initial: boolean) {
  const [bottomSheet, setBottomSheet] = useRecoilState(bottomSheetState);
  const { isOpen, selectedItem } = bottomSheet;

  function onOpen(item: ITodoItem) {
    setBottomSheet({ selectedItem: item, isOpen: true });
  }
  function onDismiss() {
    setBottomSheet({ selectedItem: null, isOpen: false });
  }

  return { isOpen, selectedItem, onOpen, onDismiss };
}

export default useBottomSheet;
